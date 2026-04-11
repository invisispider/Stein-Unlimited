import { defineStore } from "pinia";
import { computed, onUnmounted, reactive, ref, toRefs, watchEffect } from "vue";
import { DateTime } from "luxon";
import { type TimeState } from "@/models/states.model";

export const useTime = defineStore('time', () => {
    // === CONSTANTS ===
    const EventNames = [
    "Dawn", "Morning", "Midday", "Afternoon",
    "Evening", "Night", "Midnight", "Dead",
    "~zen~",
    ];

    const habitNames = [
    "Struggles", "Flowers", "Elders", "Vivid", "Peace",
    "Harvests", "Hallows", "Feasts", "~newZen~",
    ];

    const dayNames = ["Sun", "Tues", "Thurs", "Fri", "Satur"];
    
    // D E S W M I
    const DAYS_IN_HABIT = 45;

    // == STATE ===
    const state = reactive<TimeState>({
        instantOfDay: 0,
        now: new Date(),
        dayOfYear: 0,
        second: 0,
        minute: 0,
        hour: 0,
        zhour: 0,
        forma: "",
        true_h: 0,
        habitNum: 0,
        dayNum: 0,
        zYear: new Date().getFullYear() + 10001,
        dayOfHabit: 0,
        inputDate: null,
    }) as TimeState;

    // === REFS ===
    const timerID = ref<NodeJS.Timeout | null>(null);
    const animationTimerID = ref<NodeJS.Timeout | null>(null);

    // // === GETTERS ===

    const habitName = computed(() => habitNames[state.habitNum] ?? "???");
    const dayName = computed(() => {
        const i = ((state.dayNum % dayNames.length) + dayNames.length) % dayNames.length;
        return dayNames[i];
    });
    const dayOfHabit = computed(() => state.dayOfYear - (state.habitNum * DAYS_IN_HABIT));

    const displayZenDate = computed(() => {
        return `${dayName.value} ${state.dayNum + 1} ${habitName.value} ${state.zYear} `;
    });

    const displayZenTime = computed(() => {
        let str = state.instantOfDay.toString().padStart(5, "0");
        return `${EventNames[Number(str[0])]} ${str[0]||"0"}\`${str[1]}${str[2]} ${str[3]}${str[4]}`;
    });

    const normalizedDayProgress = computed(() => {
        return state.instantOfDay/86400;
    })

    // == ACTIONS ===
    
    const updateTime = async (dateOverride: DateTime | null = null) => {
        const dt = dateOverride ?? DateTime.now();
        if (!dt.isValid) return;
        Object.assign(state, {
            now: dt.toJSDate()
        });

        // How many seconds we are into the current Roman day
        const secondsToday = Math.floor(
            dt.diff(dt.startOf("day"), "seconds").as("seconds")
        );
        // Moving the start of the day.
        const adjSecs = 
            secondsToday < 6 * 3600 
            ? secondsToday + 18 * 3600 
            : secondsToday - 6 * 3600;
        // How many hours into Roman day we currently are as a decimal.
        const trueHour = (secondsToday / 3600) % 24;
        // How many "hours" into ULT day we currently are.
        const adjHour = (adjSecs / 3600) % 24;

        Object.assign(state, {
            instantOfDay: Math.floor(adjSecs),
            second: dt.second,
            minute: dt.minute,
            hour: dt.hour,
            zhour: adjHour,
            true_h: trueHour,
            forma: `${dt.toFormat("hh:mm:ssa EEE, MMM d, yyyy")}`,
        });    
    };

    const isFlowing = ref(false);


    function startTimer() {
        if (timerID.value) return; 
        isFlowing.value = true;
        timerID.value = setInterval(()=> {
            updateTime();
        }, 1000);
    }

    function stopTimer() {
        isFlowing.value = false;
        if (timerID.value) {
            clearInterval(timerID.value);
            timerID.value = null;
        }
    };

    function stopAnimation() {
        if (animationTimerID.value) {
            clearInterval(animationTimerID.value);
            animationTimerID.value = null;

            zenYearAnchor.value = null;
        }
    }

    function animateToSelectedDate(to: DateTime) {
        stopAnimation();
        stopTimer();

        const from = DateTime.fromJSDate(state.now);
        const diff = to.diff(from, ["milliseconds"]).milliseconds;
        if (!isFinite(diff)) return;

        const duration = 1000;
        const interval = 16;
        const frames = Math.ceil(duration / interval);

        let frame = 0;

        animationTimerID.value = setInterval(() => {
            frame++;

            const progress = frame / frames;
            const eased = 0.5 - Math.cos(progress * Math.PI) / 2;

            const current = from.plus({
                milliseconds: diff * eased
            });

            updateTime(current);

            if (frame >= frames) {
                stopAnimation();
                updateTime(to);

                if (Math.abs(to.diffNow().milliseconds) < 500) {
                    startTimer();
                }
            }
        }, interval);
    }

    // Animate back to now (from a given date)
    function animateBackToNow(from: DateTime) {
        stopAnimation();
        stopTimer();

        const to = DateTime.now();
        const diff = to.diff(from, ["milliseconds"]).milliseconds;

        if (!isFinite(diff) || diff <= 0) {
            // console.warn("animateBackToNow received bad diff")
            updateTime();
            startTimer();
            return;
        }

        const duration = Math.min(diff, 2000);
        const frames = Math.max(1, Math.floor(duration / 33));
        const step = diff / frames;

        let frame = 0;
        animationTimerID.value = setInterval(() => {
            frame++;
            const current = from.plus({ milliseconds: step * frame });
            updateTime(current);

            if (frame >= frames) {
            stopAnimation();
            startTimer();
            }
        }, 33);
    }

    onUnmounted(() => {
        stopTimer();
    });

    // === New Leap Year Logic ===
    
    function getWinterSolstice(year: number) {
       return new Date(year, 11, 21);
    }

    function daysBetween(a: Date, b: Date) {
        const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utcA - utcB) / 86400000);
    }

    function isLeapYear(): boolean {
        const y = state.now.getFullYear();
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }
    function getZenGap(year: number) {
        const solstice = getWinterSolstice(year);

        // REAL leap logic (fixing your bug)
        const isLeap = new Date(year, 1, 29).getMonth() === 1;
        const length = isLeap ? 6 : 5;

        const half = Math.floor(length / 2);

        const start = new Date(solstice);
        start.setDate(start.getDate() - half);

        const end = new Date(start);
        end.setDate(start.getDate() + length - 1);

        return { start, end, length, solstice };
    }

    function getZenCycle(now: Date) {
        const year = now.getFullYear();

        const thisGap = getZenGap(year);
        const prevGap = getZenGap(year - 1);

        // pick the MOST RECENT cycle start that is <= now
        const candidates = [prevGap, thisGap];

        const cycle = candidates
            .filter(g => now >= g.start)
            .sort((a, b) => b.start.getTime() - a.start.getTime())[0];

        return cycle;
    }
    const zenYearAnchor = ref<DateTime | null>(null);
    const zenContext = computed(() => {
        const gap = getZenCycle(state.now);

        const zenYearStart = DateTime.fromJSDate(gap.end).plus({ days: 1 });

        // zenYearAnchor.value = DateTime.fromJSDate(zenYearStart);
    
        // zenYearStart.setDate(zenYearStart.getDate() + 1);
        const yearLength = 360 + gap.length;

        let dayOfYear = daysBetween(state.now, zenYearStart.toJSDate());

        if(dayOfYear < 0) dayOfYear += yearLength;
        if (dayOfYear >= yearLength) dayOfYear -= yearLength;

        
        

        return {
            gap,
            zenYearStart,
            dayOfYear,
            inZenCycle: dayOfYear >= 360 && dayOfYear < yearLength,
        };
    });

    watchEffect(() => {
        const ctx = zenContext.value;
        const d = ctx.dayOfYear;

        const isZen = d >= 360;

        const gapDay = isZen
            ? Math.max(0, Math.min(d - 360, ctx.gap.length -1)) 
            : d;

        Object.assign(state, {
            zYear: ctx.zenYearStart.year + 10001,
            dayOfYear: d,
            habitNum: d >= 360 ? 8 : Math.floor(d / DAYS_IN_HABIT),
            dayNum: d >= 360 ? gapDay : d % DAYS_IN_HABIT,
            dayOfHabit: gapDay,
        });

    });


    return { 
        ...toRefs(state),
        isLeapYear,
        zenYearAnchor,
        habitName,
        dayName,
        dayOfHabit,
        displayZenDate,
        displayZenTime,
        updateTime,
        startTimer,
        stopTimer,
        EventNames,
        dayNames,
        habitNames,
        animateToSelectedDate,
        animateBackToNow,
        normalizedDayProgress,
        zenContext,
        stopAnimation,
        isFlowing,
    }
});

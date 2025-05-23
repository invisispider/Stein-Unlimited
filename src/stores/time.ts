import { defineStore } from "pinia";
import { computed, onUnmounted, reactive, ref, toRefs, watchEffect } from "vue";
import { DateTime } from "luxon";
import { type TimeState } from "@/models/states.model";

export const useTime = defineStore('time', () => {
    // === CONSTANTS ===
    const zsessionNames = [
    "Dawn", "Breakfast", "Morning", "Lunch", "Afternoon",
    "Dinner", "Evening", "Night", "Midnight", "Dead",
    "~zen~",
    ];

    const habitNames = [
    "Struggles", "Flowers", "Elders", "Vivid", "Peace",
    "Harvests", "Hallows", "Feasts", "~newZen~",
    ];

    const dayNames = ["Sun", "Tues", "Thurs", "Fri", "Satur"];
    
    const INS_IN_MOM = 80;
    // const MOM_IN_WHI = 10;
    const MOM_IN_SESS = 100;
    const INS_IN_WHI = 800;
    const INS_IN_SESS = 8000;
    const HOU_IN_SESS = (24 / 10.8);
    const DAYS_IN_HABIT = 45;
    // const whi_in_sess = 10;
    // const sess_in_day = 8;
    // const sess_in_hou = 45;

    // == STATE ===
    const state = reactive<TimeState>({
        now: new Date(),
        dayOfYear: 0,
        second: 0,
        minute: 0,
        hour: 0,
        instant: 0,
        zwhile: 0,
        zmoment: 0,
        zhour: 0,
        forma: "",
        zsess: 0,
        true_h: 0,
        habitNum: 0,
        dayNum: 0,
        zYear: new Date().getFullYear() + 10000,
        dayOfHabit: 0,
        inputDate: null,
    }) as TimeState;

    // === REFS ===
    const timerID = ref<NodeJS.Timeout | null>(null);
    const animationTimerID = ref<NodeJS.Timeout | null>(null);

    // const timerStarted = ref(false);

    // // === GETTERS ===
    // // This Roman Year
    // const curYear = computed(() => state.now.getFullYear());
    // // epoch milliseconds to start of this Roman year.
    // const startOfYear = computed(() => new Date(curYear.value, 0, 1).valueOf());
    // // day number into year (1-indexed) computed from epoch millis = floor(<MILLIS_INTO_YEAR>now millis - yearstart millis / MILLIS_IN_DAY)
    // const dayOfYearR = computed(() => Math.floor((new Date().valueOf() - startOfYear.value) / 86400000));


    const habitName = computed(() => habitNames[state.habitNum]);
    const dayName = computed(() => dayNames[(state.dayNum % dayNames.length)]);
    // const dayOfWeekZen = computed(() => (state.dayNum)%5);
    const dayOfHabit = computed(() => state.dayOfYear - (state.habitNum * DAYS_IN_HABIT));

    const displayZenDate = computed(() => {
        return `${dayName.value} ${state.dayNum + 1} ${habitName.value} ${state.zYear} `;
    });

    const displayZenTime = computed(() => {
        return `${zsessionNames[state.zsess]} ${state.zsess + 1}.${String(state.zmoment).padStart(2, "0")}\`${state.instant} `;
    });
    

    // == ACTIONS ===
    
    const updateTime = async (dateOverride: DateTime | null = null) => {
        const dt = dateOverride ?? DateTime.now();
        if (!dt.isValid) return;
        Object.assign(state, {
            now: dt.toJSDate()
        });

        // How many seconds we are into the current Roman day
        const secondsToday = dt.diff(dt.startOf("day"), "seconds").as("seconds");
        // Moving the start of the day to 1 ULT or 5AM Roman.
        const adjSecs = secondsToday < 6 * 3600 ? secondsToday + 18 * 3600 : secondsToday - 6 * 3600;
        // How many hours into Roman day we currently are as a decimal.
        const trueHour = (secondsToday / 3600) % 24;
        // How many "hours" into ULT day we currently are.
        const adjHour = (adjSecs / 3600) % 24;

        Object.assign(state, {
            second: dt.second,
            minute: dt.minute,
            hour: dt.hour,
            instant: Math.floor(secondsToday % INS_IN_MOM),
            zmoment: Math.floor(adjSecs / INS_IN_MOM) % MOM_IN_SESS,
            zwhile: Math.floor((adjSecs / INS_IN_WHI) % (INS_IN_SESS / INS_IN_WHI)),
            zhour: adjHour,
            true_h: trueHour,
            zsess: Math.floor(adjHour / HOU_IN_SESS),
            forma: `${dt.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)} ${dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`,
        });    
    };

    function startTimer() {
        if (timerID.value) return; 
        // console.info("startTimer called with valid timerID")
        timerID.value = setInterval(()=> {
            updateTime();
        }, 1000);
    }

    function stopTimer() {
        // console.log("Stopping timer:", timerID.value);
        if (timerID.value) {
            clearInterval(timerID.value);
            timerID.value = null;
        }
        // console.log("Clearing interval", timerID.value); 
        // clearInterval(timerID.value as any);
        // timerID.value = null;
        // timerStarted.value = false;
    };

    function stopAnimation() {
        // console.log("stopAnimation called");
        if (animationTimerID.value) {
            clearInterval(animationTimerID.value);
            animationTimerID.value = null;
        }
    }

    function animateToSelectedDate(to: DateTime) {
        // console.log("animateToSelectedDate called");
        stopAnimation();
        stopTimer();

        const from = DateTime.now();
        const diff = to.diff(from, ["milliseconds"]).milliseconds;
        if (!isFinite(diff)) return;

        const duration = Math.min(Math.abs(diff), 2000);
        const frames = Math.floor(duration / 22);
        const step = diff / frames;

        let frame = 0;
        animationTimerID.value = setInterval(() => {
            frame++;
            const current = from.plus({ millisecond: step * frame });
            updateTime(current);

            if (frame >= frames){
                stopAnimation();

                if (Math.abs(to.diffNow().milliseconds) < 500) {
                    startTimer();
                }
            }
        }, 22);
    }
    
    // Animate back to now (from a given date)
    function animateBackToNow(from: DateTime) {
        // console.info("animateBackToNow called");
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
        const frames = Math.floor(duration / 33);
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
        // console.info("unmounting, stopping timer.")
        stopTimer();
    });

            // === GETTERS ===
        const dayOfYearR = computed(() => {
        const currentDate = new Date(state.now); // Use state.now, not new Date()
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
        return Math.floor((currentDate.valueOf() - startOfYear.valueOf()) / 86400000);
        });

        // === REACTIVE STATE UPDATER ===
        watchEffect(() => {
        const doy = dayOfYearR.value;
        let doyz: number;
        let nextZYear = state.now.getFullYear() + 10000;

        if (doy > 358) {
            // Wrap to next Zen year
            nextZYear++;
            doyz = doy % 358;
        } else {
            // Offset days to align Zen calendar
            doyz = doy + 8;
        }

        Object.assign(state, {
            zYear: nextZYear,
            dayOfYear: doyz,
            habitNum: Math.floor(doyz / DAYS_IN_HABIT),
            dayNum: doy % 45,
            dayOfHabit: doy % DAYS_IN_HABIT,
        });
        });
    // watchEffect(() => {
    //     // eppoch millis at midnight today
    //     const doy = dayOfYearR.value;

    //     // Slide all days over to fit with zenCycle and yearstart date = Dec ??
    //     if (doy === 366) {
    //         state.dayOfYear = 0;  // this is wrong?
    //     } else if (doy > 358) {  // next zenYear 8 days before Roman, increase year and reset day count.
    //         state.zYear++;
    //         state.dayOfYear = doy % 358;
    //     } else if (doy < 358) {   // other days within Roman year, slide the day up by 8.
    //         state.dayOfYear = doy + 8;
    //     } else {
    //         state.dayOfYear = doy + 3; // On day 359,
    //     }

    //     state.habitNum = Math.floor(state.dayOfYear / DAYS_IN_HABIT);
    //     state.dayNum = doy % 45;
    //     state.dayOfHabit = doy % DAYS_IN_HABIT;

    // });

    // clamp for zero division and such
    // function clamp(value: number, min: number, max: number): number {
    //     return Math.max(min, Math.min(max, value));
    // }

    return { 
        ...toRefs(state),
        habitName,
        dayName,
        dayOfHabit,
        displayZenDate,
        displayZenTime,
        updateTime,
        startTimer,
        stopTimer,
        zsessionNames,
        dayNames,
        habitNames,
        INS_IN_MOM,
        animateToSelectedDate,
        animateBackToNow,
    }
});
// FIRST DAY OF ROMAN YEAR WILL BE REPEATED ON LEAP YEARS WITH 
// CURRENT IMPLEMENTATION
// zenCycle should start on Dec 19th except on leap year.
// 21st is the solstice
// 24th is the unLimited New Year
// leaving Jan 1st as the 9th day of our year.
// December 24 is the 358th. Year Ends Dec 19, solstice in middle of zenCycle


// 2. Explicit Zero/NaN/Infinity Guards

// Before dividing or using values in sensitive math (like radians, scaling, transforms), guard with:

// if (!value || !Number.isFinite(value)) return default;

// Or safer division:

// const ratio = denominator === 0 ? 0 : numerator / denominator;

// ✅ 3. Centralized safeMath Helpers

// Create shared utility functions for sensitive calculations:

// function safeDivide(numerator: number, denominator: number, fallback = 0) {
//   return denominator === 0 ? fallback : numerator / denominator;
// }

// function safeAngle(angle: number): number {
//   return isNaN(angle) || !isFinite(angle) ? 0 : angle % 360;
// }

// ✅ 4. Validate Store Data

// Even in your pinia store, you can normalize values before exposing them to the rest of the app:

// const seconds = computed(() => {
//   const raw = DateTime.now().second;
//   return Number.isFinite(raw) ? raw : 0;
// });

// ✅ 5. Debug-Friendly Fallbacks for NaN/undefined

// When drawing or rotating SVG elements, use ?? or conditional logic to fallback:

// <circle
//   :r="radius ?? 10"
// />

// <line
//   :transform="`rotate(${angle ?? 0})`"
// />

// Or use v-if/v-show guards if data is known to fail occasionally.
// ✅ 6. Memoization/Buffering of Last Valid Values

// If a value occasionally becomes invalid but usually isn't, store the last known good value:

// let lastGood = 0;
// const stableValue = computed(() => {
//   const val = getFromStore();
//   if (isNaN(val) || !isFinite(val)) return lastGood;
//   lastGood = val;
//   return val;
// });

// ✅ 7. Render Pass Validation Layer

// Before triggering DOM/SVG updates, validate all derived render data:

// const safeRenderData = computed(() => {
//   const angle = safeAngle(store.minuteHandAngle);
//   const radius = clamp(store.radius, 1, 200);
//   return { angle, radius };
// });

// ✅ 8. Throttle or Debounce Updates

// For performance and stability, wrap time updates in a requestAnimationFrame loop or debounce rapid state changes (e.g., 60fps animation driven by clock):

// let lastFrame = performance.now();
// function animate(now: number) {
//   const delta = now - lastFrame;
//   if (delta >= 16) {
//     updateClock();
//     lastFrame = now;
//   }
//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

// Let me know if you want help setting up one of these guards inside your SVG clock or refactoring your animation pipeline to be safer.
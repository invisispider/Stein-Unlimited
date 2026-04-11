<script setup lang="ts">
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import { computed, ref, watch } from "vue";

const store = useTime();
const emit = defineEmits(["calendar"]);
function goToDay(dayIndex: number) {
  const now = DateTime.fromJSDate(store.now);

  // start of current zen year
  const start = store.zenContext.zenYearStart;


  const target = start.plus({ days: dayIndex });

  // preserve time-of-day
  const withTime = target
    .set({
      hour: now.hour,
      minute: now.minute,
      second: now.second,
    });

  store.animateToSelectedDate(withTime);
}
function goToZenDay(dayIndex: number) {
  // const anchor = store.zenYearAnchor ?? store.zenContext.zenYearStart;
  
  // store.zenYearAnchor = anchor;

  // const base = anchor.startOf("day");
  const base = store.zenContext.zenYearStart;
  
  
  const now = DateTime.fromJSDate(store.now);
  const target = base.plus({ days: dayIndex });
  // const start = store.zenYearAnchor;
  // if (!start) return;
  store.animateToSelectedDate(
    target.set({
      hour: now.hour,
      minute: now.minute,
      second: now.second,
    })
  );
 }
// DRAG LOGIC
const dragging = ref(false);
const calendarRef = ref<HTMLElement | null>(null);
function startDrag() {
  dragging.value = true;
  store.stopAnimation();
  store.stopTimer();
  window.addEventListener("mouseup", endDragOnce)
}

function endDragOnce() {
  dragging.value = false;
  window.removeEventListener("mouseup", endDragOnce);
}
function onDrag(e: globalThis.MouseEvent) {
  if (!dragging.value || !calendarRef.value) return;
  const rect = calendarRef.value.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const cols = 5; // your dayNames
  const rows = 9; // 45 / 5

  const col = Math.floor(x /(rect.width / cols));
  const row = Math.floor(y / (rect.height / rows));

  const index = Math.max(0, Math.min(44, row * cols + col));

  scrubToDay(index);
}
function scrubToDay(dayIndex: number) {
  const now = DateTime.fromJSDate(store.now);
  const start = store.zenContext.zenYearStart;

  const target = start.plus({ days: dayIndex });

  const withTime = target.set({
    hour: now.hour,
    minute: now.minute,
    second: now.second,
  });

  store.updateTime(withTime);
}
const zenLength = computed(() => store.zenContext?.gap?.length ?? 5);
watch(
  () => store.zenContext,
  (ctx) => {
    const start = DateTime.fromJSDate(ctx.gap.end).plus({ days: 1 });
    store.zenYearAnchor = start;
  },
  { immediate: true }
);
</script>
<template>
  <section id="habits" @click="emit('calendar')">
    <div 
      ref="calendarRef"
      class="zen-calendar"
      @mousedown="startDrag"
      @mousemove="onDrag"
    >
      <h2>{{store.habitName}}</h2>
      <div v-if="store.habitName !== '~newZen~'" class="unchunk">
        <div
          v-for="day of store.dayNames"
          :key="day"
          class="baheader baheader-zen"
        >
          {{ day }}
        </div>
        <div
          v-for="d of 45"
          :key="d"
          class="uncell uncell-zen"
          :class="d === store.dayOfHabit + 1 ? 'selected-date' : ''"
          style="cursor: pointer;"
          @click="goToDay(d-1)"
        >
          <i v-if="d === 1" class="material-icons holiday">self_improvement</i>
          <template v-else>{{ d }}</template>
        </div>
      </div>
      <div v-else class="unchunk">
        <div
          v-for="day of store.dayNames"
          :key="day"
          class="baheader baheader-zen"
        >
          {{ day }}
        </div>
        <div
          v-for="d in zenLength"
          :key="d"
          class="uncell uncell-zen"
          :class="d - 1 === store.dayOfHabit ? 'selected-date' : ''"
          style="cursor: pointer;"
          @click="store.isLeapYear() ? goToZenDay(d-7) : goToZenDay(d-6)"
          >
          <i class="material-icons holiday">self_improvement</i>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.zen-calendar {
  user-select: none;
}
</style>

<script setup lang="ts">
import { useTime } from "@/stores/time";
const store = useTime();
const emit = defineEmits(["calendar"]);
</script>
<template>
  <section id="habits" @click="emit('calendar')">
    <!-- <h1>{{ store.dayOfYear }}</h1> -->
    <div class="zen-calendar">
      <!-- <div class="baheader"> -->
        <h2>{{store.habitName}}</h2>
      <!-- </div> -->
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
          :class="d == store.dayOfHabit+1 ? 'selected-date' : ''"
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
          v-for="(d, ind) of store.dayNames"
          :key="ind"
          class="uncell uncell-zen"
          :class="ind + 1 == store.dayOfHabit+1 ? 'selected-date' : ''"
        >
          <i class="material-icons holiday">self_improvement</i>
        </div>
      </div>
    </div>
  </section>
</template>

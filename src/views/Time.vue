<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import TimeConversions from "@/components/Time/TimeConversions.vue";
import Flatpickr from 'vue-flatpickr-component';
import { setupTimeWatcher } from "@/composables/setupTimeWatcher";
import time_content from "@/content/time_content.md?raw";
import injectMarkdown from '@/composables/injectMarkdown';
import '@/assets/css/flatpickr.min.css';
document.title = "unLimited Time | Live Demo";

const htmlINTRODUCTION = injectMarkdown(time_content, 'INTRODUCTION');
const htmlREADING = injectMarkdown(time_content, 'READING');
const htmlYEAR = injectMarkdown(time_content, 'YEAR');
const htmlCALENDAR = injectMarkdown(time_content, 'CALENDAR');
const htmlCLOCK = injectMarkdown(time_content, 'CLOCK');
const htmlMOMENT = injectMarkdown(time_content, 'MOMENT');
const htmlINSTANT = injectMarkdown(time_content, 'INSTANT');

const store = useTime();

const activePanel = ref('');

const toggleShow = async (a: string) => {
  activePanel.value = a;
};
const showChart = ref("year");

const flatpickrOptions = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  altInput: true,
  altFormat: 'F j, Y H:i',
}

onMounted(() => {
  setupTimeWatcher();
});

const resetClock = () => {
  // console.info('clicked Back To Now button.');
  if (!store.inputDate) {
    // console.warn("No inputDate available.");
    return;
  }
  // console.log("inputDate before parse:", store.inputDate);
  const from = DateTime.fromFormat(store.inputDate, "yyyy-MM-dd HH:mm");
  if (from.isValid) {
    store.animateBackToNow(from);
  } else {
    // console.warn("Invalid date string in store.inputDate:", store.inputDate);
  }
};
const scrollToTop = () => {
  const el = document.getElementById('content-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
};
</script>
<template>
  <div id="zen-wrapper" class="zen-wrapper" data-test-id="zen-wrapper">
    <div class="title-logo">
      <img src="@/assets/img/unlimitedtime.webp" alt="" class="theme-image">
      
      <h1 style="cursor: pointer;" @click="toggleShow('unlimited')">unLimited<img
          src="../../public/favicon-32x32.png" />Time</h1>
      <h4>{{ store.forma }}</h4>
      <h2 class="readout" style="cursor: pointer;" @click="toggleShow('reading')">
        {{ store.displayZenTime }}
        <br>
        {{ store.displayZenDate }}
      </h2>
      <transition name="wiggle" appear>
        <div class="smiley">
          <div style="padding: 2px;">
          <Flatpickr v-model="store.inputDate" placeholder="convert Roman time" 
          :config="flatpickrOptions" />
           </div>
          <button @click="resetClock">Back to now</button>
          <br>
          <i class="material-icons" :class="showChart == 'clock' ? 'active' : ''"
            @click="showChart = 'clock'">watch_later</i>
          <i class="material-icons" :class="showChart == 'year' ? 'active' : ''" @click="showChart = 'year'"
          >face</i>
          <i class="material-icons" :class="showChart == 'habit' ? 'active' : ''"
            @click="showChart = 'habit'">insert_invitation</i>
          <TimeConversions v-if="showChart != 'year'" :showChart="showChart" @calendar="toggleShow('calendar')"
            @clock="toggleShow('clock')" />
          <YearWheel v-else-if="showChart == 'year'" @year="toggleShow('year')" />
        </div>
      </transition>
    </div>
    <ZenDay @clock="toggleShow('clock')" @moment="toggleShow('clock')" @instant="toggleShow('clock')" />
    <ZenHabit @calendar="toggleShow('calendar')" />
    <div id="content-section" class="content-section">
      <div class="content-selector">
        <div class="content-button" @click="toggleShow('INTRODUCTION')">INTRODUCTION</div>
        <div class="content-button" @click="toggleShow('READING')">READING</div>
        <div class="content-button" @click="toggleShow('YEAR')">YEAR</div>
        <div class="content-button" @click="toggleShow('CALENDAR')">CALENDAR</div>
        <div class="content-button" @click="toggleShow('CLOCK')">CLOCK</div>
        <div class="content-button" @click="toggleShow('MOMENT')">MOMENT</div>
        <div class="content-button" @click="toggleShow('INSTANT')">INSTANT</div>
      </div>
      <Transition name="phase">
        <div v-if="activePanel=='READING'" class="content" v-html="htmlREADING"></div>
        <div v-else-if="activePanel=='YEAR'" class="content" v-html="htmlYEAR"></div>
        <div v-else-if="activePanel=='CALENDAR'" class="content" v-html="htmlCALENDAR"></div>
        <div v-else-if="activePanel=='CLOCK'" class="content" v-html="htmlCLOCK"></div>
        <div v-else-if="activePanel=='MOMENT'" class="content" v-html="htmlMOMENT"></div>
        <div v-else-if="activePanel=='INSTANT'" class="content" v-html="htmlINSTANT"></div>
        <div v-else class="content" v-html="htmlINTRODUCTION"></div>
      </Transition>
      <div class="content-button" @click="scrollToTop">TOP</div>
    </div>
  </div>
</template>
<style lang="sass">

@use "@/assets/css/time"

</style>
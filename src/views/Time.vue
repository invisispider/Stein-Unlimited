<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, onMounted, nextTick } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
// import InfoView from "@/components/Time/InfoView.vue";
import TimeConversions from "@/components/Time/TimeConversions.vue";
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.min.css';
import { setupTimeWatcher } from "@/composables/setupTimeWatcher";
import time_content from "@/content/time_content.md?raw";
import injectMarkdown from '@/composables/injectMarkdown';
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

// const toggle = () => {  
  // showInfo.value = !showInfo.value;
//   document.documentElement.style.overflowY = "scroll";
//   document.body.focus();
// };
const toggleShow = async (a: string) => {
  activePanel.value = a;
  // showInfo.value = true;
  // document.documentElement.style.overflowY = "hidden";
  // await nextTick()
  // let it = document.getElementById('info-panel')
  // if (it) {
    // it.scrollTo(0, 0);
  // }
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
      <!-- <div v-show="showInfo" id="info-panel" key="apple" class="info-panel article-font"> -->
        <!-- <div class="btn-grp"> -->
          <!-- <a v-for="panel of panelList" 
          :key="panel" 
          :class="{ active: panel === activePanel }"
          @click="toggleShow(panel)">
          {{ panel }}</a> -->
        <!-- </div> -->
        <!-- <InfoView :infoview="activePanel" @click="toggle" /> -->
      <!-- </div> -->
    <div class="title-logo">
      <h1 style="cursor: pointer;" @click="toggleShow('unlimited')">unLimited<img
          src="@/assets/icons/favicon-32x32.png" />Time</h1>
      <h4>{{ store.forma }}</h4>
      <h2 class="readout" style="cursor: pointer;" @click="toggleShow('reading')">
        {{ store.displayZenTime }}
        <br>
        {{ store.displayZenDate }}
      </h2>
      <transition name="wiggle" appear>
        <div class="smiley">
          <div style="padding: 2px;">
          <Flatpickr placeholder="convert Roman time" v-model="store.inputDate" 
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
        <div class="content" v-if="activePanel=='READING'" v-html="htmlREADING"></div>
        <div class="content" v-else-if="activePanel=='YEAR'" v-html="htmlYEAR"></div>
        <div class="content" v-else-if="activePanel=='CALENDAR'" v-html="htmlCALENDAR"></div>
        <div class="content" v-else-if="activePanel=='CLOCK'" v-html="htmlCLOCK"></div>
        <div class="content" v-else-if="activePanel=='MOMENT'" v-html="htmlMOMENT"></div>
        <div class="content" v-else-if="activePanel=='INSTANT'" v-html="htmlINSTANT"></div>
        <div class="content" v-else v-html="htmlINTRODUCTION"></div>
      </Transition>
      <div class="content-button" @click="scrollToTop">TOP</div>
    </div>
  </div>
</template>
<style lang="sass">
#zen-wrapper
  .content-section
    grid-area: contentDiv
    font-size: larger
    margin: auto
    // margin-inline: 1em
  .content
    font-size-adjust: 0.7;
    max-width: 700px
    text-align: justify
    h1, h2
      text-align: center
    // p
      // max-width: 100ch
  .content-selector
    margin-top: 2em;
    display: inline-flex
    flex-wrap: wrap
  .content-button
    cursor: pointer
    padding: 5px
    margin-block: 0.5em
  .content-button:hover
    color: teal

.holiday-flex
  display: flex
  flex-wrap: nowrap
  align-items: center
  justify-content: space-between
  @media screen and (min-width: 1000px)
      margin-inline: 15%
  h3
      color: #0F0
      text-wrap: nowrap
      text-align: left
      border-right: 1px solid #444
      padding-right: 1em
  p
      padding-left: 0.5em
      // display: flex
      // justify-contet: center
      flex-wrap: wrap
      text-align: right
.holiday-title, .holiday-description
  text-align: center
// .holiday-description
.work-schedules
  margin: auto
  thead, tbody
    display: inline-flex
// from time.sass
    // td, th
  //   border: 1px solid $color
  // .border-red
  //     border: 2px solid red
  // .border-black
  //     border: 2px solid black
  // .border-blue
  //     border: 2px solid dodgerblue
  // .border-pink
  //     border: 2px solid hotpink
</style>
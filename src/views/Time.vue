<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, onMounted, nextTick } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import InfoView from "@/components/Time/InfoView.vue";
import TimeConversions from "@/components/Time/TimeConversions.vue";
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.min.css';
import { setupTimeWatcher } from "@/composables/setupTimeWatcher";

import integral_states_info from "@/content/integral_states_info.md?raw";
import injectMarkdown from '@/composables/injectMarkdown';
const htmlOrdinary = injectMarkdown(integral_states_info, 'INTRODUCTION');

document.title = "unLimited Time | Live Demo";


const store = useTime();
const activePanel = ref('');
const panelList = ["unlimited", 
"reading", "year", "calendar", "clock"
];

const showInfo = ref(false);

const toggle = () => {
  showInfo.value = !showInfo.value;
  document.documentElement.style.overflowY = "scroll";
  document.body.focus();
};
const toggleShow = async (a: string) => {
  activePanel.value = a;
  showInfo.value = true;
  document.documentElement.style.overflowY = "hidden";
  await nextTick()
  let it = document.getElementById('info-panel')
  if (it) {
    it.scrollTo(0, 0);
  }
};
const showChart = ref("year");

const flatpickrOptions = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  altInput: true,
  altFormat: 'F j, Y H:i',
}


// // Optionally enforce Flatpickr to use Date objects instead of strings
// // inside your flatpickrOptions:
// const flatpickrOptions = {
//   enableTime: true,
//   dateFormat: "Y-m-d H:i",
//   altInput: true,
//   altFormat: "F j, Y h:i K",
//   allowInput: true,
//   // force it to use Date objects if needed
//   onChange: [(selectedDates) => {
//     store.inputDate = selectedDates[0] ?? null;
//   }]
// };

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

</script>
<template>
  <div id="zen-wrapper" class="zen-wrapper" data-test-id="zen-wrapper">
    <Transition name="phase">
      <div v-show="showInfo" id="info-panel" key="apple" class="info-panel article-font">
        <div class="btn-grp">
          <a v-for="panel of panelList" 
          :key="panel" 
          :class="{ active: panel === activePanel }"
          @click="toggleShow(panel)">
          {{ panel }}</a>
        </div>
        <InfoView :infoview="activePanel" @click="toggle" />
      </div>
    </Transition>
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
  </div>
</template>

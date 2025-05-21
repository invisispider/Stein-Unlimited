<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import InfoView from "@/components/Time/InfoView.vue";
import TimeConversions from "@/components/Time/TimeConversions.vue";
document.title = "unLimited Time | Live Demo";
const store = useTime();
const activePanel = ref('');
const panelList = ["unlimited", 
  "reading", "year", "calendar", "clock"
  ];

const timePulse = async (inputDate:DateTime|null = null) => {
  if (inputDate) {
    // timePulse();
    let localDate = inputDate.toLocal();
    if (inputDate===null) {
      return;
    } else {
      let localDate = DateTime.now().toLocal();   
    }
  }
  let luxCalendar = localDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  let sec = localDate.second;
  let min = localDate.minute;
  let hou = localDate.hour;
  let secs = localDate.diff(localDate.startOf("day"), "seconds").as("seconds");
  let adjsecs = secs < 6 * 3600 ? secs + 18 * 3600 : secs - 6 * 3600;
  let trueh = (secs / 3600) % 24;
  let adjh = (adjsecs / 3600) % 24;
  let whiles = Math.floor((adjsecs / store.ins_in_whi) % store.mom_in_whi);
  let sess = Math.floor(adjh / store.hou_in_sess);
  store.forma =
    localDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET) +
    " " +
    luxCalendar;
  store.second = sec;
  store.minute = min;
  store.hour = hou;
  store.instant = Math.floor(secs % store.ins_in_mom);
  store.true_h = trueh;
  store.zhour = adjh;
  store.zmoment = Math.floor(adjsecs / store.ins_in_mom) % store.mom_in_sess;
  store.zwhile = whiles;
  store.zsess = sess;
  return () => clearInterval(timerID);
};
let timerID: NodeJS.Timeout;
onMounted(() => {
  timerID = setInterval(timePulse, 1000);
});
onUnmounted(() => {
  timePulse();
});
// const infoTemplate = ref(``);
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
  // infoTemplate.value = toggleInfoView(a);
};
const showChart = ref("year");

const inputTime = ref<Date|null>(null);
const inputDate = ref<Date|null>(null);
const convertedTime = computed((date)=>{

})
const convertedDate = computed((date)=>{

})
const restartTimer = () => timerID = setInterval(timePulse, 1000);
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
        <!-- <div v-html="infoTemplate"></div> -->
      </div>
    </Transition>
    <div class="title-logo">
      <h1 style="cursor: pointer;" @click="toggleShow('unlimited')">unLimited<img
          src="@/assets/icons/favicon-32x32.png" />Time</h1>
      <h2 class="readout" style="cursor: pointer;" @click="toggleShow('reading')">
        {{ store.displayZenTime }}
        <br>
        {{ store.displayZenDate }}
      </h2>
      <!-- <h3 @click="toggleShow('roman')" style="cursor: pointer;">ROMAN:<br>{{ store.forma }}</h3> -->
      <transition name="wiggle" appear>
        <div class="smiley">
          <label for="time">Convert time:</label>
          <input v-model="inputTime" name="time" type="time" />
          <label for="date">Convert Date:</label>
          <input v-model="inputDate" name="date" type="date" />
          <label for="reset">reset</label>
          <input @click.prevent="restartTimer" name="reset" type="button" />
          <br>
          <p>{{ convertedDate }} {{ convertedTime }}</p>
          <!-- <div class="table-modal"> -->
          <i class="material-icons" :class="showChart == 'clock' ? 'active' : ''"
            @click="showChart = 'clock'">watch_later</i>
          <i class="material-icons" :class="showChart == 'year' ? 'active' : ''" @click="showChart = 'year'"
          >face</i>
          <!-- coffee sports_martial_arts -->
          <i class="material-icons" :class="showChart == 'habit' ? 'active' : ''"
            @click="showChart = 'habit'">insert_invitation</i>
          <TimeConversions v-if="showChart != 'year'" :showChart="showChart" @calendar="toggleShow('calendar')"
            @clock="toggleShow('clock')" />
          <!-- </div> -->
          <YearWheel v-else-if="showChart == 'year'" @year="toggleShow('year')" />
        </div>
      </transition>
    </div>
    <ZenDay @clock="toggleShow('clock')" @moment="toggleShow('clock')" @instant="toggleShow('clock')" />
    <ZenHabit @calendar="toggleShow('calendar')" />
  </div>
</template>

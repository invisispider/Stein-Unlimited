<script setup lang="ts">
import { useTime } from "@/stores/time";
import { computed, watch, ref } from "vue";
import { useMonitorSize } from '@/composables/monitor-size';
import { DateTime } from "luxon";
const sizes = useMonitorSize();
const store = useTime();
const emit = defineEmits(["clock", "moment", "instant"]);
const initialHeight = ref(sizes.browserHeight)
const svgHeight = ref(initialHeight.value*0.8);
const svgWidth = ref(initialHeight.value*0.2);

watch([sizes.browserWidth, sizes.browserHeight], ([wt, ht]) => {
  if (wt<ht && wt>700) {
    svgWidth.value = wt*0.2
    svgHeight.value = ht*0.7
  } else if (wt<ht) {
    svgWidth.value = wt*0.7
    svgHeight.value = ht*0.7  
  } else {
    svgWidth.value = ht*0.6*0.524
    svgHeight.value = ht*0.8
  }
  gregWidth.value = svgWidth.value / 6;
  halfWidth.value = svgWidth.value - gregWidth.value;
  rSpread.value = svgHeight.value / 24;
  zSpread.value = svgHeight.value / 8.64;
  zenSpread.value = svgHeight.value / 13.5;
})

const gregWidth = ref(svgWidth.value /6);
const halfWidth = ref(svgWidth.value - gregWidth.value);
const rSpread = ref(svgHeight.value / 24);
const zSpread = ref(svgHeight.value / 8.64);
const zenSpread = ref(svgHeight.value / 13.5);
const hou_height = computed(() =>
  Math.floor(svgHeight.value - (svgHeight.value / 24) * store.zhour)
);
// const rotateOrigin = (h_h: number) =>
  // "transform-origin: " + gregWidth + "px " + h_h + "px";

const Sewmi = computed(() => {
  const str = store.instantOfDay.toString().padStart(5, "0");

  return {
    event: Number(str[0]),
    session: Number(str[1]),
    while: Number(str[2]),
    moment: Number(str[3]),
    instant: Number(str[4]),
  };
});

// SUN SINE WAVE LOGIC
function generateSunPath(
  width: number,
  height: number,
  amplitudeRatio = 0.35,
  steps = 100
) {
  const centerX = width / 2;
  const amplitude = width * amplitudeRatio;

  let path = "";

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    const y = height * (1 - t);
    const x = centerX - amplitude * Math.sin(2 * Math.PI * t);

    path += i === 0 ? `M ${x},${y}` : ` L ${x},${y}`;
  }

  return path as string;
}
function getSunPoint(
  width: number,
  height: number,
  t: number,
  amplitudeRatio = 0.35
) {
  const centerX = width / 2;
  const amplitude = width * amplitudeRatio;

  return {
    x: centerX - amplitude * Math.sin(2 * Math.PI * t),
    y: height * (1 - t),
  };
}
const sun = getSunPoint(svgWidth.value-100, svgHeight.value, 0.25);
const moon = getSunPoint(svgWidth.value-20, svgHeight.value, 0.75);

function getWavePoint(
  t: number,
  width: number,
  height: number,
  amplitudeRatio = 0.35
) {
  const centerX = width / 2;
  const amplitude = width * amplitudeRatio;

  return {
    x: centerX - amplitude * Math.sin(2 * Math.PI * t),
    y: height * (1 - t),
  };
}
const wavePoint = computed(() =>
  getWavePoint(
    store.normalizedDayProgress,
    gregWidth.value-30,
    svgHeight.value
  )
);

// animation logic
function goToSession(eventIndex: number) {
  const now = DateTime.fromJSDate(store.now);

  const zenStart = getZenDayStart(now);

  const instantOfDay = eventIndex * 10000;

  const target = zenStart.plus({ seconds: instantOfDay });

  store.animateToSelectedDate(target);
}
function getZenDayStart(dt: DateTime) {
  const sixAM = dt.set({ hour: 6, minute: 0, second: 0, millisecond: 0 });

  return dt < sixAM
    ? sixAM.minus({ days: 1 })
    : sixAM;
}
</script>
<template>
  <div 
    class="day-container">
    <div class="clock-container">
      
      <svg :width="svgWidth" :height="94" class="zen-borders" style="margin-inline-end: auto;">
      <g style="cursor: pointer;" @click="emit('clock')">
        <title>This chart shows what time of day it is now.</title>
        <rect :width="svgWidth" :height="svgHeight/5" class="daytop-bg"></rect>
        <text :height="20" x="50%" y="20" 
          text-anchor="middle" 
          class="greg-text" v-text="'Session Clock'" 
        />
      </g>
      <g @click="emit('moment')">
        <title>Our version of Minutes</title>
        <!-- <rect :y="30" :width="svgWidth" :height="svgH" class="daytop-bg" /> -->
        <rect :width="(svgWidth / 9) * Sewmi.event||0"
          :height="20" :y="30"
          class="inner-rect"
        />
        <rect :width="(svgWidth / 100) * ((10*Sewmi.session)+Sewmi.while)||0"
          :height="6" :y="45" class="alt-fill"
        />
        <text x="4" :y="16+30" class="daytop-tx">
          SEW:  {{String(Sewmi.event)}}`{{String(Sewmi.session)}}{{String(Sewmi.while)}}
        </text>
      </g>
      <g @click="emit('instant')">
        <title>Our version of Seconds</title>
        <!-- <rect :y="52" :width="svgWidth" :height="svgH" class="daytop-bg" /> -->
        <rect :y="57" class="inner-rect"
          :width="(svgWidth / 100) * Number(String(store.instantOfDay).slice(3))" 
          :height="20"
          />
        <text x="4" :y="35+22+16" class="daytop-tx">MI: {{String(Sewmi.moment)}}{{String(Sewmi.instant)}}</text>
      </g>
    </svg>
    
    <svg :width="svgWidth" :height="svgHeight" style="cursor: pointer;" @click="emit('clock')">
      <g id="gregMeter" fill="none">
        <title>Hours compared to Sessions</title>
        <template v-for="(num, i) in 25" :key="num + 100">
          <rect
            v-if="i < 6 || i > 17"
            :y="rSpread * i"
            class="greg-dark"
            :width="gregWidth"
            :height="svgHeight / 24"
          />
          <rect
            v-else
            :y="rSpread * i"
            class="greg-light"
            :width="gregWidth"
            :height="svgHeight / 24"
            />
          <text
            :x="svgWidth / 100"
            :y="i * rSpread - 0.15 * rSpread"
            class="greg-number"
            v-text="(48 - i + 6) % 24"
          />
        </template>
      </g>
      <g id="zenMeter" fill="none">
        <title>Our version of Hours dividing the day into Sessions</title>
        <template v-for="(zses, j) in store.EventNames" :key="j + 200">
          <g 
          style="cursor: pointer;"
          @click.stop="goToSession(8 - j)" 
          >
          <rect
          :x="gregWidth"
          :y="zenSpread + zSpread * j - zSpread"
          :width="halfWidth"
            :height="zSpread"
            class="zen-borders"
            :class="(8-j)<=Number(Sewmi.event)?'session-before':'session-after'"
            />
          <text
            :x="svgWidth / 4"
            :y="j * zSpread + zSpread / 3"
            class="zen-mint"
            :class="{ sessionActive: (8-j)==Sewmi.event}"
            >
          {{ j!==0 ? 8-j : '' }} {{ store.EventNames[8 - j] }}
          </text>
          </g>

        </template>
      </g>


      <g id="clockHand" fill="none">
        <line
          x1="0"
          :y1="hou_height"
          :x2="halfWidth + gregWidth"
          :y2="hou_height"
          class="clock-hand"
          />
        </g>
        <g :transform="`translate(${gregWidth}, 0)`">
          <path
            :d="generateSunPath(svgWidth*0.9, svgHeight)"
            stroke="#ccc"
            stroke-width="2"
            fill="none"
            opacity="0.4"
          />
          <text fill="#ccc" :x="sun.x" :y="sun.y">☀</text>
          <text fill="#ccc" :x="moon.x" :y="moon.y">☾</text>
          <circle
            :cx="wavePoint.x"
            :cy="wavePoint.y"
            r="4"
            class="time-dot"
          />
          <circle
            :cx="wavePoint.x"
            :cy="wavePoint.y"
            r="10"
            class="time-glow"
          />
        </g>
          
      </svg>
    </div>
  </div>
</template>
<style>
.clock-container {
  user-select: none;
}
svg > g > text {
  font-weight: 700;
}

.sun-path {
  stroke: #aaa;
  stroke-width: 1.5;
  opacity: 0.25;
}

.sun-icon {
  font-size: 10px;
  opacity: 0.5;
}

.moon-icon {
  font-size: 10px;
  opacity: 0.5;
}
.time-dot {
  fill: #fff;
  opacity: 0.9;
  filter: drop-shadow(0 0 4px rgba(255,255,255,0.6));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    r: 4;
    opacity: 0.9;
  }
  50% {
    r: 6;
    opacity: 0.6;
  }
}
.time-glow {
  fill: rgba(255,255,255,0.15);
  filter: blur(4px);
}
</style>
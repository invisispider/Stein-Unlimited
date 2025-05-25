<script setup lang="ts">
import { useStore } from "@/stores/index";
import type { StyleName } from "@/stores/index";
const store = useStore();

const switchStyle = (sty: StyleName) => store.updateStyleMode(sty);
const habitNames = {
    struggles: "ac_unit",
    flowers: "bolt",
    elders: "nightlight",
    vivid: "set_meal",
    peace: "phishing",
    harvests: "view_timeline",
    hallows: "local_florist",
    feasts: "holiday_village",
};
</script>
<template>
    <div id="style-selector" data-testid="style-selector">
        <div class="style-selector-buttons">
            <i 
                v-for="(icon, habit) in habitNames" 
                :id="`${habit.toLowerCase()}-theme`"
                :key="habit" 
                :class="{activeStyle: store.styleMode===habit}"
                class="material-icons" 
                :title="`${habit.charAt(0).toUpperCase() + habit.slice(1)} Theme`"
                @click="switchStyle(habit)">{{ icon }}</i>
            <!-- <span class="tinytext">{{ store.styleMode }}</span>> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/index";
import type { StyleName } from "@/stores/index";
const store = useStore();

const switchStyle = (sty: StyleName) => store.updateStyleMode(sty);

</script>
<template>
    <div id="style-selector" data-testid="style-selector">
        <div class="btn-grp">
            <!-- <span class="tinytext">{{ store.styleMode }}</span> -->
            <i id="feasts-theme"
                class="material-icons" title="Feasts Theme" @click="switchStyle('feasts')">ac_unit</i>             
            <i id="hallows-theme"
                class="material-icons" data-testid="dark" title="Hallows Theme" @click="switchStyle('hallows')">bolt</i> 
            <i id="harvests-theme"
                class="material-icons" title="Harvests Theme" @click="switchStyle('harvests')">nightlight</i> 
            <i id="peace-theme"
                class="material-icons" title="Peace Theme" @click="switchStyle('peace')">set_meal</i> 
            <i id="vivid-theme"
                class="material-icons" title="Vivid Theme" @click="switchStyle('vivid')">phishing</i>
            <i id="elders-theme"
                class="material-icons" title="Elders Theme" @click="switchStyle('elders')">view_timeline</i>
            <i id="flowers-theme" data-testid="dark-purple"
                class="material-icons" title="Flowers Theme" @click="switchStyle('flowers')">local_florist</i>
            <i id="struggles-theme"
                class="material-icons" title="Struggles Theme" @click="switchStyle('struggles')">holiday_village</i>
        </div>
    </div>
</template>

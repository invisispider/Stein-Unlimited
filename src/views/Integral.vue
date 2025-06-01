<script setup lang="ts">
import { watch, ref } from "vue";
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import Quadrants from "@/components/Integral/Quadrants.vue";
import Levels from "@/components/Integral/Levels.vue";
import Map from "@/components/Integral/Map.vue";
import States from "@/components/Integral/States.vue";
import Lines from "@/components/Integral/Lines.vue";
import Types from "@/components/Integral/Types.vue";
import InfoPanel from "@/components/Integral/InfoPanel.vue"

document.title = "Integral Theory ~ Stein unLimited";

const modeSelectorButtons = ['Map', 'States', 'Levels', 'Lines', 'Quadrants', 'Types'];
const Selected = ref('Map');
const SelectButton = (btn: string) => {
    Selected.value = btn;
    window.scrollTo(0,0);
// interface LevelInfo {
//     number: string, color: string, desc: string, values: string, nickname: string
}
const levelInfo = ref({
    number: '', 
    color: '', 
    desc: '', 
    values: '', 
    emergence: '',
    relate: ''
});

const showInfo = ref(false);
const toggle = () => {
    showInfo.value = !showInfo.value
    window.scrollTo(0,0);
};
type Level = 'infrared'|'magenta'|'red'|'amber'|'orange'|'green'|'teal'|'turquoise'|'indigo'|'violet'|'ultraviolet'|'clearlight'|'base';
const levelSet = new Set<Level>([
    'infrared', 'magenta', 'red', 'amber', 'orange', 'green', 'teal', 'turquoise', 'indigo', 'violet', 'ultraviolet', 'clearlight', 'base'
    ]);

const toggleLevel = (sel: string) => {
    if (!levelSet.has(sel as Level)) {
        console.error('Invalid level: ${sel}');
        return;
    }
    if (sel === 'base') {
        levelInfo.value = {
            number: '', 
            color: '', 
            desc: '', 
            values: '', 
            emergence: '',
            relate: ''
        };
        showInfo.value = true;
    } else {
        let temp = AqalLevels.filter((obj)=>obj.color==sel).pop();
        if (temp!==undefined) {
            levelInfo.value = temp;
            showInfo.value = true;
        }
    }
}
const statesType = ['ordinary', 'brainwaves', 'selves', 'spiritual'] as const
const selState = ref<typeof statesType[number]>('ordinary');
const toggleState = (sel: typeof statesType[number]) => {
    selState.value = sel;
    showInfo.value = true;
}
watch(selState, ()=>{
    if (showInfo.value === true && document.getElementById('info-panel')!==null) {
        document.getElementById('info-panel')!.scroll(0,0);
    }
})
watch(levelInfo, ()=>{
    if (showInfo.value === true && document.getElementById('info-panel')!==null) {
        document.getElementById('info-panel')!.scroll(0,0);
    }
})
const handleRegionClick = (hrf: 'Levels'|'Quadrants'|'Lines'|'Types'|'States') => {
    Selected.value = hrf
    // capitalize
}
</script>
<template>
    <div class="integral-wrapper article-font">
        <InfoPanel v-if="showInfo" :selectedProp="Selected" 
            :levelSetter="levelInfo.color" :stateSetter="selState" 
            @click="toggle" @toggle="toggle" @true="showInfo=true"
        />
        <div class="home-changer-int">
            <a v-for="btn in modeSelectorButtons" :key="btn" @click="SelectButton(btn)">{{ btn }}</a>
        </div>
        <h1></h1>
        <!-- <h1 @click="toggleBase" class="module-name">{{ Selected }}</h1> -->
        <Map v-if="Selected == 'Map'" 
            @next="SelectButton('States')" 
            @hrf="handleRegionClick" />
        <Quadrants v-else-if="Selected == 'Quadrants'"
            @next="SelectButton('Types')" />
        <Levels v-else-if="Selected == 'Levels'"
                @infrared="toggleLevel('infrared')" @magenta="toggleLevel('magenta')" @red="toggleLevel('red')"
                @amber="toggleLevel('amber')" @orange="toggleLevel('orange')" @green="toggleLevel('green')"
                @teal="toggleLevel('teal')" @turquoise="toggleLevel('turquoise')" @indigo="toggleLevel('indigo')"
                @violet="toggleLevel('violet')" @ultraviolet="toggleLevel('ultraviolet')"
                @clearlight="toggleLevel('clearlight')" @next="SelectButton('Lines')"
        />
        <Types v-else-if="Selected == 'Types'" @next="SelectButton('Map')" />
        <Lines v-else-if="Selected == 'Lines'" @next="SelectButton('Quadrants')"
        />              
        <States v-else-if="Selected == 'States'"
        @ordinary="toggleState('ordinary')"
        @brainwaves="toggleState('brainwaves')"
        @selves="toggleState('selves')"
        @spiritual="toggleState('spiritual')"
        @next="SelectButton('Levels')"
        />
    </div>
</template>
<style lang="sass">
@use "@/assets/css/utility"
@use "@/assets/css/vars" as *
.integral-wrapper
    display: flex
    flex-direction: column
    align-items: center
    padding-block: 3em
    margin-block: auto
    p
        // margin-inline: 1.3em
        margin-inline: auto
        max-width: 85ch
        text-align: justify
        text-justify: inter-word
        text-indent: 3em
    @include utility.breakpoint(l)
        p   
            margin-inline: 12% 
    .home-changer-int
        // justify-content: center
        position: fixed
        display: flex
        justify-content: center
        align-items: center
        // top: 40px
        // font-size: 0.9em
        // width: 100%
        top: 3.3rem
        max-width: 100%
        // width: 100%
        // margin-inline: auto
        z-index: 2
        // padding-block: 8px 4px
        // font-size: 22px
        // font-size: 1rem
        font-size: clamp(0.35rem, 3vw, 1.7rem)
        @include utility.breakpoint(xs)
            top: 2.6rem
            margin: 0
            padding: 0
            justify-content: space-between
            // line-height: 2.2rem
            // font-size: 0.8rem
        a
            width: 100%
            max-width: 100%
            margin: 0.4rem
            padding: 0.2rem 0.5em
            align-items: center
            justify-content: center
            border-radius: 0.3rem
            @include utility.breakpoint(xs)
                margin-left: auto
                
                // padding: 0
                

    .info-panel
        display: flex
        flex-direction: column
        position: fixed
        align-items: center
        z-index: 3
        bottom: 0
        right: 0
        color: #d0fff1
        background: rgba(11, 6, 14, 0.96)
        height: 100vh
        width: 100vw
        padding: 4% 10%
        overflow: scroll
        overscroll-behavior: auto none
        h1
            margin: 1em 10%
            text-shadow: 1px 1px 10px black
    .module-name
        margin-top: 2.3em
        margin-bottom: 0.5em
    .integral-map 
        // p
            // text-align: left
            // text-indent: 3em
        // @media screen and (min-width: 1000px)
            // p
                // margin-inline: 12%    
        .modules
            text-transform: uppercase
    .square-banner
        max-height: 40vh
        border-radius: 10%
        max-width: 100%
    .invert
        filter: invert(1)
        max-height: 400px

    .btn-group-int
        position: fixed
    //     display: flex
    //     flex-direction: row
    //     flex-wrap: wrap
    //     grid-template-columns: repeat(10, 10%)
    //     margin-block: 0
    //     padding-inline: 1em
        // width: auto
        *
            // flex-shrink: 1
            margin: 0em 0.1em
            font-size: medium
            padding: 0.3em 0.5em
    .mini-model
        background-color: black
        max-width: 95vw
        max-height: 50vh
        border: 1px solid white
        border-radius: 12px
    .btn-group
        position: fixed
        bottom: 0
        display: flex
        flex-wrap: wrap
        width: 100%
        justify-content: space-between
        background: rgba(0, 0, 0, 0.8)
        gap: 0 0.5rem        
        button
            font-size: 1.1rem
            flex: 1 1 auto
            margin: 0.3rem 0.1rem
            padding: 0.2em
            border-radius: 0.3rem

</style>
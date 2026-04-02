<script setup lang="ts">
// import integral_map from '@/content/integral_map.md?raw';
// import injectMarkdown from '@/composables/injectMarkdown';
import BookHero from "@/components/BookHero.vue";
// const html = injectMarkdown(integral_map);

const emit = defineEmits(['next', 'hrf']);
type IntegralElement = 'Levels'|'Quadrants'|'Lines'|'Types'|'States';
type Region = {
    top: string; left: string; width: string; height: string; hrf: IntegralElement;
};
// interface IntegralElement { top: string; left: string; width: string; height: string; hrf: IntegralElement}
const regions: Region[] = [
    { top: '0%', left: '0%', width: '33%', height: '100%', hrf: 'Levels' },
    { top: '0%', left: '33%', width: '33%', height: '40%', hrf: 'Types' },    
    { top: '40%', left: '33%', width: '33%', height: '60%', hrf: 'Lines' },    
    { top: '0%', left: '66%', width: '33%', height: '50%', hrf: 'States' },    
    { top: '50%', left: '66%', width: '33%', height: '50%', hrf: 'Quadrants' },    
];

const handleClick = (hrf: IntegralElement) => {
    emit('hrf', hrf)
    window.scrollTo(0,0)
    
}
</script>
<template>
    <div class="integral-map">
        <BookHero />
        <h1>Map</h1>
        <p><b>Stein unLimited</b> presents our own unique visual models of Ken Wilber's <b>Integral Theory</b>.
            Each Element is covered in depth in the book.
           <span class="pedantic"> Top buttons select <b>Elements.</b>  
            </span>
        </p>
        <h2>The Five Elements</h2>
        <h4>Reality = <span class="hilight">AQALALATAS</span><br>
            <span class="hilight">A</span>ll { <span class="hilight">Q</span>uadrants,
            <!-- <span class="hilight">A</span>ll  -->
            <span class="hilight">L</span>evels,
            <!-- <span class="hilight">A</span>ll  -->
            <span class="hilight">L</span>ines,
            <!-- <span class="hilight">A</span>ll  -->
            <span class="hilight">T</span>ypes,
            <!-- <span class="hilight">A</span>ll  -->
            <span class="hilight">S</span>tates }
        </h4>
        <div class="map-container">
        <img class="integral-banner" src="@/assets/img/aqalalatas.png" />
            <div v-for="region in regions"
            :key="region.hrf"
            class="region"
            :style="{
                top: region.top,
                left: region.left,
                width: region.width,
                height: region.height,
            }"
            @click.prevent="handleClick(region.hrf)"
            ></div>
        </div>
        <!-- <map name=""integral_imagemap">
            <area shape="rect" coords="0,0,100, 100" href="
        </map> -->
        
    <!-- <div class="content" v-html="html"></div> -->
    <!-- <h5 class="pedantic" style="cursor: pointer;" @click="emit('next')">STATES</h5> -->
    </div>
</template>
<style lang="sass">
.integral-banner
    max-width: 95vw
    border-radius: 1%
    border: 1px solid white
.map-container
    position: relative
.region
    position: absolute
    cursor: pointer
    z-index: 1
a, .router-link, RouterLink
    display: inline
</style>
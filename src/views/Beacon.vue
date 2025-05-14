<script setup lang="ts">
import beacon_1 from '@/content/beacon_1.md?raw';
import injectMarkdown from '@/composables/injectMarkdown';

const html = injectMarkdown(beacon_1);
</script>
<template>
    <div id="beacon-div">
        <article class="novel" v-html="html"></article>
    </div>
</template>
<style lang="sass" scoped>
body
    font-family: "Georgia", "Times New Roman", serif
    margin: 0
    padding: 0
    line-height: 1.6

/* Novel container */
#beacon-div
    max-width: 800px 
    margin: 40px auto
    padding: 20px
    /* background: white; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    border-radius: 8px
    margin: 3em
    text-align: justify
    p
        text-indent: 2em

/* Paragraph styling */
.novel p
    text-indent: 1.5em /* Indent first line */
    margin: 0
    line-height: 1.8em
    text-size-adjust: 190%
    font-size: large

/* Chapter titles */
.novel h1, .novel h2
    text-align: center

/* Responsive adjustments */
@media (max-width: 600px)
    .novel-container
        max-width: 95%
        padding: 15px
    .novel p
        text-indent: 1em

</style>
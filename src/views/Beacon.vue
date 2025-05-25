<script setup lang="ts">
import beacon_1 from '@/content/beacon_1.md?raw';
import injectMarkdown from '@/composables/injectMarkdown';
document.title = "Beacon ~ Stein unLimited";
const html = injectMarkdown(beacon_1);
</script>
<template>
    <div id="beacon-div">
        <article class="novel" v-html="html"></article>
    </div>
</template>

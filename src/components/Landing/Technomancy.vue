<script setup lang="ts">
import injectMarkdown from '@/composables/injectMarkdown';
import technomancy from "@/content/technomancy.md?raw";
const html = injectMarkdown(technomancy);
</script>
<template>
    <section class="technomancy">
        <h1>Holistic Coding</h1>
        <img src="@/assets/img/technomancy.webp" alt="coding sorcery" class="theme-image">
        <div v-html="html"></div>
        <h4>
            <a href="/">HOME</a>
        </h4>
    </section>
</template>

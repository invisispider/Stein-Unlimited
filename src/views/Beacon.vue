<script setup lang="ts">
import injectMarkdown from '@/composables/injectMarkdown';
import { ref, computed } from 'vue';
document.title = "Beacon ~ Stein unLimited";

const modules = import.meta.glob('@/content/magenta*.md', { as: 'raw', eager: true });
const chapters = Object.entries(modules).map(([path, content]) => {
    const name = path.split('/').pop()?.replace('.md', '') || '';
    return {
        name,
        html: injectMarkdown(content as string)
    };
});

chapters.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.name.match(/\d+/)?.[0] || '0');
    return numA - numB;
});
const currentChapter = ref(chapters[0]?.name);
const currentHtml = computed(() => {
    return chapters.find(c => c.name === currentChapter.value)?.html || '';
});

const formatChapterName = (name: string) => name.replace('magenta_', 'Chapter ');
</script>
<template>
    <div id="beacon-div">
        <div class="btn-group">
            <div 
                v-for="chapter in chapters" 
                :key="chapter.name"
                class="chapter-button"
                @click="currentChapter = chapter.name"
            >
                {{ formatChapterName(chapter.name) }}</div>
        </div>
        <article class="novel" v-html="currentHtml"></article>
    </div>
</template>
<style lang="sass">
.chapter-button
    cursor: pointer
    &:hover
        color: blue
</style>

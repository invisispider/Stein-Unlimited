/* global IntersectionObserver */
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { VideoItem } from '~types/VideoItem';
import LoadingComponent from './LoadingComponent.vue';

const emit = defineEmits(['loadMore']);
const props = withDefaults(defineProps<{
  videos?: VideoItem[];
  hasMore?: boolean;
  isRendering?: boolean;
}>(), {
  videos: () => [],
  hasMore: true,
  isRendering: false
});


const selectedVideoId = ref<string | null>(null);
// const isRendering = ref(true);

const sortedVideos = computed(() => {
  return props.videos?.slice().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ) || [];
});

function openVideo(videoId: string) {
  selectedVideoId.value = videoId;
}

function closeVideo() {
  selectedVideoId.value = null;
}

const infiniteScrollTrigger = ref<HTMLElement | null>(null);

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !props.isRendering && props.hasMore) {
      emit('loadMore');
    }
  }, {
    root: null,
    rootMargin: '100px',
    threshold: 0.1
  });

  if (infiniteScrollTrigger.value) {
    observer.observe(infiniteScrollTrigger.value);
  }
});

onUnmounted(() => {
  if (observer && infiniteScrollTrigger.value) {
    observer.unobserve(infiniteScrollTrigger.value);
  }
});

</script>
<template>
  <div>
    <TransitionGroup name="video" tag="div" class="video-grid">
      <div 
        v-for="video in sortedVideos"
        :key="video.resourceId.videoId"
        class="video-item"
        @click="openVideo(video.resourceId.videoId)"
      >
        <img 
        v-if="video.thumbnails?.high?.url"
        loading="lazy"
        :src="video.thumbnails.high.url"
        :alt="video.title || 'YouTube thumbnail'"
        class="video-thumb"
        />
        <h3 class="video-title">{{ video.title }}</h3>
      </div>
    </TransitionGroup>
  </div>
  <div ref="infiniteScrollTrigger" class="scroll-trigger"></div>
  <LoadingComponent v-show="props.isRendering" />
  
  <div 
    v-if="selectedVideoId"
    class="modal"
    @click.self="closeVideo"
  >
    <div class="modal-content">
      <iframe 
        :src="`https://www.youtube.com/embed/${selectedVideoId}`"
        width="100%"
        height="480"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <button class="modal-close-button" @click="closeVideo">
        Close
      </button>
    </div>
  </div>
</template>


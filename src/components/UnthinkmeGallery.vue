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
<style lang="sass" scoped>
.scroll.trigger
  display: block
  height: 1px
img
  transition: transform 0.2s ease
img:hover
  transform: scale(1.05)
.video-grid
  display: grid
  grid-template-columns: repeat(1, 1fr)
  gap: 1rem
  justify-items: space-around
  // min-height: 100vh
  @media (min-width: 640px)
    grid-template-columns: repeat(2, 1fr)
  @media (min-width: 768px)
    grid-template-columns: repeat(3, 1fr)
.video-item
  cursor: pointer

.video-thumb
  width: 100%
  height: auto
  border-radius: 0.5rem
  transition: transform 0.2s ease

.video-thumb:hover
  transform: scale(1.05)

.video-title
  margin-top: 0.5rem
  font-size: 1rem
  font-weight: 600

.pagination-controls
  display: flex
  justify-content: space-between
  margin-bottom: 1rem

.pagination-button
  padding: 0.5rem 1rem
  background-color: #e0e0e0
  border-radius: 0.5rem
  cursor: pointer
  &:disabled
    opacity: 0.5
    cursor: not-allowed


.modal
  position: fixed
  inset: 0
  background-color: rgba(0, 0, 0, 0.75)
  display: flex
  align-items: center
  justify-content: center
  z-index: 50

.modal-content
  background-color: white
  padding: 1rem
  border-radius: 0.5rem
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
  width: 100%
  max-width: 48rem

.modal-close-button
  margin-top: 1rem
  padding: 0.5rem 1rem
  background-color: #e53935
  color: white
  border-radius: 0.5rem

// laoding animation
.video-enter-active, .video-leave-active
  transition: all 0.3s ease
.video-enter-from
  opacity: 0
  transform: translateY(10px)
.video-enter-to
  opacity: 1
  transform: translateY(0)
.video-leave-to
  opacity: 0
  transform: translateY(-10px)

</style>

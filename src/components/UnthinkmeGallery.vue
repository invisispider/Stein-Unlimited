<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted } from 'vue';
import type { VideoItem } from '~types/VideoItem';
import LoadingComponent from './LoadingComponent.vue';

const emit = defineEmits(['loadMore']);
const props = withDefaults(defineProps<{
  videos?: VideoItem[];
  hasMore?: boolean;
}>(), {
  videos: () => [],
  hasMore: true,
});

const selectedVideoId = ref<string | null>(null);
const isRendering = ref(true);

const sortedVideos = computed(() => {
  // if (!props.videos || props.videos.length === 0) return [];
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

watch(sortedVideos, async () => {
  isRendering.value = true;
  await nextTick();
  isRendering.value = false;
});

onMounted(() => {
  if (sortedVideos.value.length > 0) {
    window.dispatchEvent(new CustomEvent('retrack-thumbnails')); 
  }
  isRendering.value = false;
});
</script>
<template>
  <div class="video-grid">
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
      :alt="video.title"
      class="video-thumb"
      />
      <h3 class="video-title">{{ video.title }}</h3>
    </div>
  </div>

  <LoadingComponent v-show="isRendering" />
  
  <button v-if="props.hasMore" @click.prevent="emit('loadMore')" >Load More</button>
  
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
#loading
  min-height: 100vh
img
  transition: transform 0.2s ease
img:hover
  transform: scale(1.05)
.video-grid
  display: grid
  grid-template-columns: repeat(1, 1fr)
  gap: 1rem
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

</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VideoItem } from '~types/VideoItem';

const props = withDefaults(defineProps<{
  videos?: VideoItem[];
}>(), {
  videos: () => []
});

const selectedVideoId = ref<string | null>(null);
const currentPage = ref(1);
const pageSize = 20;

const sortedVideos = computed(() => {
  if (!props.videos || props.videos.length === 0) return [];
  return props.videos
    .slice() // clone array to avoid mutatingp rops
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA; // newest first
    })
});

const paginatedVideos = computed(() => {
  if (!sortedVideos.value) return [];
  const videos = sortedVideos.value;
    return videos.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
});

function openVideo(videoId: string) {
  selectedVideoId.value = videoId;
}

function closeVideo() {
  selectedVideoId.value = null;
}

function nextPage() {
    if (currentPage.value * pageSize < props.videos.length) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
</script>

<template>
    <div class="pagination controls">
        <button :disabled="currentPage === 1"
            class="pagination-button"
            @click="prevPage"
        >Previous
        </button>
        <button :disabled="currentPage * pageSize >= videos.length"
            class="pagination-button"
            @click="nextPage"
        >Next
        </button>
    </div>

  <div class="video-grid">
    <div 
      v-for="video in paginatedVideos"
      :key="video.resourceId.videoId"
      class="video-item"
      @click="openVideo(video.resourceId.videoId)"
    >
      <img 
        :src="video.thumbnails.high.url"
        :alt="video.title"
        class="video-thumb"
      />
      <h3 class="video-title">{{ video.title }}</h3>
    </div>
  </div>

  <!-- Modal -->
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
img
  transition: transform 0.2s ease
img:hover
  transform: scale(1.05)
.video-grid
  display: grid
  grid-template-columns: repeat(1, 1fr)
  gap: 1rem
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

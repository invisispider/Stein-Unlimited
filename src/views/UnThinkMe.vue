<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFirestoreInstance } from "@/services/firebaseconfig";
import UtmBlogArticle from "@/components/UtmBlogArticle.vue";
import { collection, query, orderBy, getDocs, 
  type DocumentData, limit, startAfter, 
  type QueryDocumentSnapshot } from "firebase/firestore";
import UnthinkmeGallery from "@/components/UnthinkmeGallery.vue";
import type { VideoItem } from '~types/VideoItem';
import LoadingComponent from '@/components/LoadingComponent.vue';

document.title = "unThinkMe on YouTube ~ Stein unLimited";

const firestoreDb = getFirestoreInstance();

const pageSize = 20;
const lastVisible = ref<QueryDocumentSnapshot<DocumentData> | null>(null);
const youtubeVideos = ref<VideoItem[]>([]);
const isLoadingVideos = ref(false);
const hasMoreVideos = ref(true);

async function loadVideos(initial = false) {
  if (isLoadingVideos.value || (!initial && !hasMoreVideos.value)) return;

  isLoadingVideos.value = true;

  try {
    const baseQuery = query(
      collection(firestoreDb, 'youtubechannel'),
      orderBy('publishedAt', 'desc'),
      ...(lastVisible.value && !initial ? [startAfter(lastVisible.value)] : []),
      limit(pageSize)
    );

    const snapshot = await getDocs(baseQuery);

    const videos: VideoItem[] = [];
    snapshot.forEach((doc)=> {
      const data = doc.data() as VideoItem;
      if (data.resourceId) videos.push(data);
    });

    if (initial) {
      youtubeVideos.value = videos;
    } else {
      youtubeVideos.value.push(...videos);
    }

    if (snapshot.docs.length < pageSize) {
      hasMoreVideos.value = false;
    }

    lastVisible.value = snapshot.docs.at(-1) ?? null;

  } catch (error) {
    console.error("Error loading videos:", error);
  }

  isLoadingVideos.value = false;
}

interface UtmArticle {
  id: number;
  date: string;
  title: string;
  tnurl: string;
  ytlink: string;
  content: string;
}

const blogData = ref<UtmArticle[]>([]);

const getBlog = async () => {
  const q = query(collection(firestoreDb, "utmblog"), orderBy("id", "desc"));
  const snapshot = await getDocs(q);
  blogData.value = snapshot.docs.map(doc => doc.data() as UtmArticle);
}

// const docIdChannelMasterData = '3Z68IXuOQH7E6ZZcI9cp'
onMounted(async () => {
  await loadVideos(true); 
  getBlog(); 
});

</script>
<template>
  <div class="home-content unthinkme">
    <!-- <h1 class="glow">unThinkMe</h1> -->
    <h2 class="glow">Visit our <a href="https://discord.gg/jZrS3GVXsS" target="_blank">Discord community!<img
          class="utm-social" src="@/assets/img/social_dc.png" /></a></h2>
    <h3>Discussing Integral Theory and Altitudes in our ordinary lives as ordinary weird people.</h3>
    <img src="@/assets/img/unthinkme.png" style="margin-block: 1em;" class="stu-banner" />
    <h2 class="glow">Latest Videos:</h2>

    <LoadingComponent v-if="isLoadingVideos" />
    <div v-else class="video-container">
    <UnthinkmeGallery :videos="youtubeVideos" :has-more="hasMoreVideos" 
      @loadMore="loadVideos(false)" />
    </div>
      <h2 class="unthink-title">Classic Videos: <i class="material-icons glow">park</i> Integral Philosophy</h2>
      <UtmBlogArticle v-for="datum in blogData" :id="datum.id" :key="datum.id" :date="datum.date"
          :content="datum.content" :tnurl="datum.tnurl" :ytlink="datum.ytlink" :title="datum.title" class="video-div" />
  </div>
</template>
<style scoped lang="sass">
.video-grid
  display: grid
  grid-template-columns: repeat(1, 1fr)
  gap: 1rem
  @media (min-width: 640px)
    grid-template-columns: repeat(2, 1fr)
  @media (min-width: 768px)
    grid-template-columns: repeat(3, 1fr)

</style>

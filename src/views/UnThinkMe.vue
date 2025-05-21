<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
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

const classicVideos = ref(false);
const toggleClassic = () => classicVideos.value = !classicVideos.value

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

watch(classicVideos, async () => {
  isLoadingVideos.value = true;
  if (classicVideos.value === true) {
    await getBlog();
  }
  isLoadingVideos.value = false;
});

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

    if (snapshot.empty || snapshot.docs.length < pageSize) {
      hasMoreVideos.value = false;
    }

    lastVisible.value = snapshot.docs.at(-1) ?? null;
  } catch (error) {
    console.error("Error loading videos:", error);
  }
  isLoadingVideos.value = false;
}

// const docIdChannelMasterData = '3Z68IXuOQH7E6ZZcI9cp'
onMounted(async () => {
  await loadVideos(true); 
});
</script>
<template>
  <div class="home-content unthinkme">
    
    <h2 class="glow">Visit our <a href="https://discord.gg/jZrS3GVXsS" target="_blank">Discord community!<img
      class="utm-social" src="@/assets/img/social_dc.png" /></a></h2>
      <img src="@/assets/img/unthinkme.png" style="margin-block: 1em;" class="stu-banner" />
      <h3>Integral YouTube Channel</h3>
      <p class="utm-description"><em>An important part of my life is talking about
        and listening to complicated ideas and feelings with a direct and playful attitude. Doing this 
        ecclectic, expressive weekly show, and coming up with new topics and ideas, feels like 
        playing in bands, except that people seem to be 
        finding this more helpful than my other art projects. The real value is often in what
        happens off camera. The relationships, connections, sharing, therapy, and growth happening in real life.
        The unThinkMe channel is a beacon. Also, a brilliant business move to 
        select the niche with the very best community. Not a coincidence! Extremely grateful. 🙏🏾
      </em> ~ <b>Adam</b> </p>
      <button class="classic-button" @click="toggleClassic">Classic Videos</button>
      <div v-show="classicVideos">
        <h2 id="clasic-videos" class="unthink-title">Classic Videos: <i class="material-icons glow">park</i> Integral Philosophy</h2>
        
        <UtmBlogArticle v-for="datum in blogData" :id="datum.id" :key="datum.id" :date="datum.date"
        :content="datum.content" :tnurl="datum.tnurl" :ytlink="datum.ytlink" :title="datum.title" class="video-div" />
      </div>
    <h2 class="glow">Latest Videos:</h2>

    <LoadingComponent v-show="isLoadingVideos" />
    <!-- <div class="video-container"> -->
      <UnthinkmeGallery :videos="youtubeVideos" :has-more="hasMoreVideos" 
        :is-rendering="isLoadingVideos" @loadMore="loadVideos(false)" />
    <!-- </div> -->
    
  </div>
</template>
<style scoped lang="sass">
.classic-button
  margin-top: 1rem
  padding: 0.5rem 1rem
  width: max-content
  // background-color: #e53935
  // color: white
  margin-inline-start: auto
  border-radius: 0.5rem
.utm-description
  text-align: justify
  // font-size-adjust: initial
  text-justify: inter-word
  // text-indent: 2em
  padding-block: 0.2em
  margin-inline: 1.3em
  max-width: 65ch
  line-height: 1.6
  hyphens: auto
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased

</style>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { db } from "@/services/firebase";
import UtmBlogArticle from "@/components/UtmBlogArticle.vue";
import { collection, query, orderBy, getDocs, 
  type DocumentData, limit, startAfter, 
  type QueryDocumentSnapshot } from "firebase/firestore";
import UnthinkmeGallery from "@/components/UnthinkmeGallery.vue";
import type { VideoItem } from '~types/VideoItem';
import LoadingComponent from '@/components/LoadingComponent.vue';
import BookHero from '@/components/BookHero.vue';
document.title = "unThinkMe on YouTube ~ Stein unLimited";

const firestoreDb = db();

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
  <div class="unthinkme">
    <div class="utm-bg-image-div-1 theme-image">
      <h2 class="glow">Visit our <a href="https://discord.gg/jZrS3GVXsS" target="_blank">Discord community!<img
        class="utm-social" src="@/assets/img/social_dc.png" /></a>
      </h2>
    </div>
    <h1>An Integral YouTube Channel</h1>
    <div class="utm-description">
      <BookHero />
      <h2>About</h2>
      <!-- <p><b>unThinkMe</b> is what happens when two best friends—now pushing 40—start a podcast about consciousness instead of buying motorcycles. James and I met in grade school, bonded over big ideas and weird jokes, then drifted off into jobs and marriages… and eventually, right back into each other’s minds.</p> -->
      <p>
        I didn’t aspire to be an Integral theorist on YouTube. When my life wonderfully exploded in my face, it created space to ask better questions: given my mix of talents and dysfunctions, what’s actually worth doing?
      </p>
      <p>
      This is my answer—share what I’ve found most valuable for personal evolution, and offer some company to people who feel alone or misunderstood. The response has gone far beyond what I expected. I’m grateful to anyone who spends even a few minutes here. 
      I feel welcome and useful here.
      </p>
      <p>
      This isn’t an ideology you outgrow. It’s a framework you can choose to grow into—or not. The higher Levels and States are optional, but they’re real, and worth exploring.
      </p>
      <p>
      For me, Integral provides structure without rigidity—a compass that guides and challenges at the same time. 
      It enhances how I think, create, and live. 
      The years I spent on music, video, and philosophy weren’t random after all—they were preparation.
      </p>
      <p>
      This project is small, but it’s intentional. A kind of beacon. If you’re here, you probably see something in it too.
      </p>
        <!-- , 
        drawing in real-life relationships and connections featuring abundance mentality and evolutionary mindset. -->
      <!-- </p> -->
      <!-- <p>🌀 Podcast – old friends riffing on consciousness and crisis</p> -->
      <!-- <p>🧠 Integral Theory – animated explainers for your third eye</p> -->
      <!-- <p>🧘 Yoga Guy – practical somatics for non-experts</p> -->
      <!-- <p>🎤 Learn to Sing – music lessons for non-musicians </p> -->
      <!-- <p>💻 Technomancy – spirituality meets software engineering</p> -->
      <!-- <p>🎸 The Future of Sales – the world's first self-help rock opera</p> -->
      <!-- <p>📖 Beacon – sci-fi from a Second Tier future</p> -->
      <!-- <p>❤️‍🔥 Surreal Love – a personal myth about heartbreak, power, and transformation</p> -->
      <!-- This is what happens when you stop pretending and start integrating. This mess is a gift. Namaste. 🙏🏾 -->
      <!-- It was a genius business move to select the niche that is unafraid and deeply caring. 
      It's not a coincidence! Extremely grateful. 🙏🏾 -->
    </div>

    <button class="classic-button" @click="toggleClassic">Classic Videos</button>
    <div v-show="classicVideos" class="video-grid">
      <h2 id="clasic-videos" class="unthink-title">Classic Videos: <i class="material-icons glow">park</i> Integral Philosophy</h2>
      <TransitionGroup name="video" tag="div" class="video-grid">
        <UtmBlogArticle v-for="datum in blogData" :id="datum.id" :key="datum.id" :date="datum.date"
      :content="datum.content" :tnurl="datum.tnurl" :ytlink="datum.ytlink" :title="datum.title" />
      </TransitionGroup>
    </div>
    <h2 class="glow">Latest Videos:</h2>
    <LoadingComponent v-show="isLoadingVideos" />
      <UnthinkmeGallery :videos="youtubeVideos" :has-more="hasMoreVideos" 
        :is-rendering="isLoadingVideos" @loadMore="loadVideos(false)" />
    
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
  justify-self: center
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

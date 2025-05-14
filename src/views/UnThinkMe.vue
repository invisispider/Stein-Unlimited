<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFirestoreInstance } from "@/services/firebaseconfig";
import UtmBlogArticle from "@/components/UtmBlogArticle.vue";
import { collection, query, orderBy, getDocs, type DocumentData } from "firebase/firestore";
import UnthinkmeGallery from "@/components/UnthinkmeGallery.vue";
import type { VideoItem } from '~types/VideoItem';
const firestoreDb = getFirestoreInstance();
document.title = "unThinkMe";
// const youTubeData = ref<DocumentData | undefined>({});
// const fromHtmlEntities = (str: string) => {
//   var doc = new DOMParser().parseFromString(str, "text/html");
//   return doc.documentElement.textContent;
// };

interface UtmArticle {
  id: number;
  date: string;
  title: string;
  tnurl: string;
  ytlink: string;
  content: string;
}

const blogData = ref<UtmArticle[]>([]);

const q = query(collection(firestoreDb, "utmblog"), orderBy("id", "desc"));
const getBlog = async () => {
  const tempData: DocumentData = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    tempData.push(doc.data());
  });
  blogData.value = tempData as UtmArticle[];
  // console.log(tempData);
}

// const docIdChannelMasterData = '3Z68IXuOQH7E6ZZcI9cp'

const youtubeVideos = ref<VideoItem[]>([]);

onMounted(async () => {
  try {
    // Query the entire 'youtubechannel' collection
    const querySnapshotYt = await getDocs(collection(firestoreDb, 'youtubechannel'));
    
    const videos: VideoItem[] = [];
    querySnapshotYt.forEach((doc) => {
      const data = doc.data() as VideoItem; 
      if (data.resourceId) {
        videos.push(data)
      }
    });

    youtubeVideos.value = videos;
  } catch (error) {
    console.error("Error getting documents:", error);
  }

  getBlog();
})

/* USE THIS TO GET IMAGE LINKS FOR NOW @TODO MAKE THIS EDITABLE IN ADMIN */
// const listedStorageImages = ref([])
// const blogImgRef = refer(storage, 'utmblog')
// const getImageLinks = () => {
//   const theImagesINeed = [
//   ]
//   theImagesINeed.forEach((item) => {
//       console.info(getDownloadURL(refer(blogImgRef, item)))
//   });
// }
// onMounted(()=>{
//   getImageLinks()
// })
// watch(sizes.browserWidth.value, async (new, old) => {
//   if (new)
// }


</script>
<template>
  <div class="home-content unthinkme">
    <!-- <h1 class="glow">unThinkMe</h1> -->
    <h2 class="glow">Visit our <a href="https://discord.gg/jZrS3GVXsS" target="_blank">Discord community!<img
          class="utm-social" src="@/assets/img/social_dc.png" /></a></h2>
    <h3>Discussing Integral Theory and Altitudes in our ordinary lives as ordinary weird people.</h3>
    <img src="@/assets/img/unthinkme.png" style="margin-block: 1em;" class="stu-banner" />
    <h2 class="glow">Latest Videos:</h2>

    <div class="video-container">
    <UnthinkmeGallery :videos="youtubeVideos" />
    </div>
      <h2 class="unthink-title">Classic Videos: <i class="material-icons glow">park</i> Integral Philosophy</h2>
      <!-- <div class=""> -->
        <UtmBlogArticle v-for="datum in blogData" :id="datum.id" :key="datum.id" :date="datum.date"
          :content="datum.content" :tnurl="datum.tnurl" :ytlink="datum.ytlink" :title="datum.title" class="video-div" />
      <!-- </div> -->
    <!-- </div> -->
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

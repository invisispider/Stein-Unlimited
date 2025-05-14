<script setup lang="ts">
import { computed, nextTick, ref, onMounted } from 'vue';
import "@/assets/css/index.sass";
import { RouterView } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from '@/stores/index';
import { useMonitorSize } from '@/composables/monitor-size';
import { toggleSidebar, collapsed } from "@/components/Sidebar/state";

const store = useStore();
const sizes = useMonitorSize();

const isVertical = computed(()=>sizes.isVertical.value?'vertical':'horizontal')

const toggleSidebarNow = () => {
    nextTick()
    if (collapsed.value===false) {
        toggleSidebar()
    }
}

const isLoading = ref(true);

const toggleLoading = ()=> isLoading.value = !isLoading.value
onMounted(() => {
//     onAuthStateChanged(auth, async (user) => {
//         try {
//             if (user) {
//                 store.setUser(user);
//                 store.setAuthIsReady();
//                 router.isReady().then(() => {
//                     // Redirect to /Talk
//                     if (router.currentRoute.value.path === '/Login') {
//                         router.push('/Talk');
//                     }
//                 });
                
//                 const docRef = doc(firestoreDb, "users", user.uid);
//                 const docSnap = await getDoc(docRef);
                
//                 if (docSnap.exists()) {
//                     const docData = docSnap.data();
//                     store.setUser({ 
//                         ...docData, 
//                         uid: user.uid, 
//                         email: user.email ?? undefined, 
//                     });
//                 }
                
//                 const idTokenResult = await user.getIdTokenResult();
//                 store.setAdmin(!!idTokenResult.claims.admin);
                
//                 console.info(idTokenResult.claims.admin ? "Admin logged in" : "Welcome user!");
//             } else {
//                 store.setAuthIsReady();
//                 console.info("Auth ready, no user.");
//             }
            toggleLoading();
//         } catch (err) {
//             console.error('Auth handler error:', err);
//         }
//     });
});
</script>
<template>
    <div id="appWrapper" 
        :class="[store.styleMode, isVertical]"
        data-testid="app-wrapper"    
    >
        <LoadingComponent v-if="isLoading" />
        <template v-else>
            <Sidebar />
            <StyleSelector />
            <router-view v-slot="{ Component }">
                <transition name="route" mode="out-in">
                    <component :is="Component" @click="toggleSidebarNow" />
                </transition>
            </router-view>
        </template>
    </div>
</template>

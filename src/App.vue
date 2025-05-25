<script setup lang="ts">
import { nextTick, ref, onMounted } from 'vue';
import "@/assets/css/index.sass";
import { RouterView } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from '@/stores/index';
import { toggleSidebar, collapsed } from "@/components/Sidebar/state";

const store = useStore();

const toggleSidebarNow = () => {
    nextTick()
    if (collapsed.value===false) {
        toggleSidebar()
    }
}

const isLoading = ref(true);
const toggleLoading = ()=> isLoading.value = !isLoading.value
onMounted(() => {
            toggleLoading();
});
</script>
<template>
    <div id="appWrapper" 
        :class="[store.styleMode]"
        data-testid="app-wrapper"    
    >
        <LoadingComponent v-if="isLoading" />
        <template v-else>
            <Sidebar />
            <StyleSelector />
            <router-view v-slot="{ Component }">
                <transition name="slideUpPop" mode="out-in" appear>
                    <component :is="Component" @click="toggleSidebarNow" />
                </transition>
            </router-view>
        </template>
    </div>
</template>

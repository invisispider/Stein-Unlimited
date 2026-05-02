<script setup lang="ts">
import { nextTick, ref, onMounted } from 'vue';
import "@/assets/css/index.sass";
import { RouterView } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from '@/stores/index';
import { toggleSidebar, collapsed } from "@/components/Sidebar/state";
import { useRoute } from 'vue-router';

const store = useStore();

const toggleSidebarNow = () => {
    nextTick()
    if (collapsed.value===false) {
        toggleSidebar()
    }
}
const route = useRoute();
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
    <Sidebar  v-show="!route.meta.hideSidebar" />
    <StyleSelector v-show="!route.meta.hideStyleSelector" />
    <router-view v-slot="{ Component }">
        <transition name="slideUpPop" mode="out-in" appear>
            <LoadingComponent v-if="isLoading" />
            <component :is="Component" v-else @click="toggleSidebarNow" />
        </transition>
    </router-view>
    </div>
</template>

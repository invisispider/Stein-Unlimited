<script setup lang="ts">
import { useStore } from "@/stores/index";
import SidebarLink from "@/components/Sidebar/SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/components/Sidebar/state";

const store = useStore();
const oneInTwoHundred = (Math.floor(Math.random() * 50 + 1)) == 18;

</script>
<template>
  <div class="sidebar-wrapper" :style="{ width: sidebarWidth }">
    <div class="collapse-icon" @click="toggleSidebar">
      <i class="material-icons" :class="{ 'collapse-icon-closed': collapsed}">keyboard_double_arrow_left</i>
    </div>
    <transition name="popeasescale" tag="div">
      <div v-show="!collapsed" data-testid="sidebar">
        <SidebarLink to="/" class="navItem" @click="toggleSidebar">Home</SidebarLink>
        <SidebarLink to="/Talk" class="navItem" @click="toggleSidebar">Talk</SidebarLink>
        <SidebarLink to="/UnThinkMe" class="navItem" @click="toggleSidebar"
          >unThinkMe</SidebarLink>
        <SidebarLink to="/Time" class="navItem" @click="toggleSidebar"
          >Time</SidebarLink>
        <SidebarLink
          v-if="oneInTwoHundred"
            to="/Next"
            class="navItem nav-item-dark"
            icon="keyboard_double_arrow_left" @click="toggleSidebar"
          >TEMP</SidebarLink>
        <SidebarLink to="/Integral" class="navItem" @click="toggleSidebar">Integral</SidebarLink>
        <SidebarLink to="/Beacon" class="navItem" @click="toggleSidebar">Beacon</SidebarLink>
        <SidebarLink to="/Music" class="navItem" @click="toggleSidebar">Music</SidebarLink>
        <SidebarLink to="/Videos" class="navItem" @click="toggleSidebar"
        >Videos</SidebarLink>
        <SidebarLink to="/Crossword" class="navItem" icon="keyboard_double_arrow_left"
        @click="toggleSidebar"
        >Crossword</SidebarLink>
        <SidebarLink v-if="store.admin" class="navItem admin" to="/Admin" @click="toggleSidebar"
        >Admin</SidebarLink>
        <SidebarLink v-if="!store.uid" class="navItem" to="/Login" @click="toggleSidebar">Login</SidebarLink>
        <SidebarLink v-if="store.uid" class="navItem" to="/Logout" @click="toggleSidebar"
        >
          <RouterLink  v-if="store.uid" to="/Logout" @click="toggleSidebar">
            <i class="material-icons color-logged-in">vpn_key</i>
          </RouterLink>
          <RouterLink  v-else to="/Login" @click="toggleSidebar">
            <i class="material-icons color-logged-out">vpn_key</i>
          </RouterLink>
          <span class="christmas-icon glow">
            Huwo?
          </span>
        </SidebarLink>
      </div>
    </transition>
  </div>
</template>

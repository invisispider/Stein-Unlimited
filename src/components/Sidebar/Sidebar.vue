<script setup lang="ts">
import { useStore } from "@/stores/index";
import SidebarLink from "@/components/Sidebar/SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/components/Sidebar/state";

const store = useStore();
const oneInTwoHundred = (Math.floor(Math.random() * 50 + 1)) == 18;

</script>
<template>
  <div class="sidebar topnav" :style="{ width: sidebarWidth }"
  >
  <span
      class="collapse-icon"
      @click="toggleSidebar"
    ><i class="material-icons" :class="{ 'rotate-180': collapsed}">keyboard_double_arrow_left</i>
  </span>
  <template v-if="!collapsed">
    <!-- class="glow" -->
    <transition-group
        key="banana"
        name="shrink2"
        tag="div"
        mode="out-in"
        appear
        >
        <SidebarLink key="link1" to="/" class="navItem" @click="toggleSidebar">Home</SidebarLink>
        <SidebarLink key="linkblue" to="/Talk" class="navItem" @click="toggleSidebar">Talk</SidebarLink>
        <SidebarLink key="link2" to="/UnThinkMe" class="navItem" @click="toggleSidebar"
          >unThinkMe</SidebarLink
        >
        <SidebarLink key="link3" to="/Time" class="navItem" @click="toggleSidebar"
          >Time</SidebarLink
        >
        <SidebarLink
          v-if="oneInTwoHundred"
          key="em"
          to="/Next"
          class="navItem nav-item-dark"
          icon="keyboard_double_arrow_left" @click="toggleSidebar"
          >TEMP</SidebarLink
          >
        <SidebarLink key="link55" to="/Integral" class="navItem" @click="toggleSidebar">Integral</SidebarLink>
        <SidebarLink key="link56" to="/Beacon" class="navItem" @click="toggleSidebar">Beacon</SidebarLink>
        <SidebarLink key="link5" to="/Music" class="navItem" @click="toggleSidebar">Music</SidebarLink>
        <SidebarLink key="link6" to="/Videos" class="navItem" @click="toggleSidebar"
        >Videos</SidebarLink
        >
        <SidebarLink key="link4" to="/Crossword" class="navItem" icon="keyboard_double_arrow_left"
           @click="toggleSidebar"
        >Crossword</SidebarLink>
        <SidebarLink v-if="store.admin" key="link8" class="navItem admin" to="/Admin" @click="toggleSidebar"
          >Admin</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="link10" class="navItem" to="/Logout" @click="toggleSidebar"
        >Logout</SidebarLink
        >

        <span key="icicle" class="christmas-icon glow" style="margin-block: 1em; padding-block: 0.2em 2.5em;">
          <RouterLink  v-if="store.uid" to="/Logout" @click="toggleSidebar">
            <i class="material-icons green" style="display: block; position: relative; top: -0.7em;">vpn_key</i>
          </RouterLink>
          <RouterLink  v-else to="/Login" @click="toggleSidebar">
            <i class="material-icons red" style="display: block; position: relative; top: -0.7em;">vpn_key</i>
          </RouterLink>
        </span>
      </transition-group>
    </template>
  </div>
</template>
<style lang="sass">
.admin
  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%)
</style>
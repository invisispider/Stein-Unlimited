<script setup lang="ts">
import Namaste from '@/components/Landing/Namaste.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import { useSocials } from "@/composables/socials";
document.title = "Stein unLimited";
const { socials } = useSocials();
</script>
<template>
  <div class="flex-column" data-test-id="flex-column">
    <div>
      <img class="stu-banner home-logo" src="@/assets/img/steinunlimited.png" alt="stein unlimited logo">
    </div>
    <div class="home-content">
      <h1>Namaste</h1>
      <Namaste class="margin-bottom" />
      <SteinunLimited class="margin-bottom" />
      <UnThinkMe class="margin-bottom" />
      <h1>Integral Theory</h1>
      <IntegralTheory class="margin-bottom" />
      <h1>Science Fiction</h1>
      <Beacon class="margin-bottom" />
      <h1>Technomancy</h1>
      <router-link style="margin-bottom: 9em;" to="/Technomancy">Professional holistic software engineering 
        and data analytics.
      </router-link>
    </div>
    <div class="social-grp">
      <router-link to="TermsOfService" style="margin-right: 0.3em;">Terms</router-link>
      <router-link to="PrivacyPolicy" style="margin-right: 0.3em;">Privacy</router-link>

      <template v-for="social in socials" :key="social.name">
        <a :href="social.url" target="_blank">
          <img :src="social.link" class="social">
        </a>
      </template>
    </div>
  </div>
</template>
<style lang="sass">
.social
  margin-inline: 0
  margin-block: 1em
.home-content .margin-bottom
  margin-block-end: 80px

</style>
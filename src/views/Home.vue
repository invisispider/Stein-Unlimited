<script setup lang="ts">
import BookHero from '@/components/BookHero.vue';
import Namaste from '@/components/Landing/Namaste.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import { useSocials } from "@/composables/socials";
document.title = "Stein unLimited ~We Create the Future~";
const { socials } = useSocials();
</script>
<template>
  <div class="flex-column home-page" data-test-id="flex-column">
    <div class="home-content">
      <BookHero />
      <Namaste class="margin-bottom" />
      <SteinunLimited class="margin-bottom" />
      <UnThinkMe class="margin-bottom" />
      <IntegralTheory class="margin-bottom" />
      <Beacon class="margin-bottom" />
      <div class="padding-bottom margin-bottom">
        <h1> 
          <RouterLink to="/Technomancy">Technomancy
          </RouterLink>
        </h1>
        <p><RouterLink to="/Technomancy" class="padding-bottom margin-bottom" style="text-align: center;">Professional holistic software engineering 
        and data analytics.
        </RouterLink></p>
      </div>
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

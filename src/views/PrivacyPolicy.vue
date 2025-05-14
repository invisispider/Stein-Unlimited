<script lang="ts" setup>
import injectMarkdown from '@/composables/injectMarkdown';
import privacy_policy from '@/content/privacy_policy.md?raw';
const html = injectMarkdown(privacy_policy);
</script>
<template>
  <div class="privacy-policy" v-html="html"></div>
</template>
<style scoped lang="sass">
.privacy-policy
  text-align: left
  padding: 0.6em
  margin: 4em 1em
::v-deep(a)
  display: inline
</style>

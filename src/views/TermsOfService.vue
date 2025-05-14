<script lang="ts" setup>
import { onMounted } from 'vue';
import terms_of_service from '@/content/terms_of_service.md?raw';
import injectMarkdown from '@/composables/injectMarkdown';
const html = injectMarkdown(terms_of_service);

onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      const id = target.getAttribute('href')!.substring(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})

</script>
<template>
  <div class="terms-of-service" v-html="html"></div>
</template>
<style lang="sass" scoped>
.terms-of-service
  text-align: left
  padding: 0.6em
  margin: 4em 1em
::v-deep(a)
  display: inline
</style>

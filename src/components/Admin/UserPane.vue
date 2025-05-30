<script setup lang="ts">
defineProps<{
  displayName: string;
  email: string;
  photoURL: string;
}>();
</script>

<template>
  <div>
    <img :src="photoURL" alt="avatar" />
    <h3>{{ displayName }}</h3>
    <p>{{ email }}</p>
  </div>
</template>
<style lang="sass" scoped>
.user-card
  border-radius: 1rem // rounded-2xl
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) // shadow
  padding: 1rem // p-4
  display: flex // flex
  flex-direction: column // flex-col
  align-items: center // items-center
  text-align: center // text-center
  background-color: #fff // bg-white

  img
    width: 4rem // w-16
    height: 4rem // h-16
    border-radius: 9999px // rounded-full
    margin-bottom: 0.5rem // mb-2

  h3
    font-weight: 600 // font-semibold

  p
    font-size: 0.875rem // text-sm
.user-card
  border-radius: 1rem // rounded-2xl
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) // shadow
  padding: 1rem // p-4
  display: flex // flex
  flex-direction: column // flex-col
  align-items: center // items-center
  text-align: center // text-center
  background-color: #fff // bg-white

  img
    width: 4rem // w-16
    height: 4rem // h-16
    border-radius: 9999px // rounded-full
    margin-bottom: 0.5rem // mb-2
  h3
    font-weight: 600 // font-semibold
  p
    font-size: 0.875rem // text-sm
</style>
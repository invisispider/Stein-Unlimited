<script setup lang="ts">
defineProps<{
  displayName: string;
  email: string;
  photoURL: string;
}>();
</script>

<template>
  <div class="rounded-2xl shadow p-4 flex flex-col items-center text-center bg-white">
    <img :src="photoURL" alt="avatar" class="w-16 h-16 rounded-full mb-2" />
    <h3 class="font-semibold">{{ displayName }}</h3>
    <p class="text-sm text-gray-500">{{ email }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UserCard from '@/components/Admin/UserPane.vue';
import { getAllUsers } from '@/services/api'; // you must implement this

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

const users = ref<User[]>([]);

onMounted(async () => {
  users.value = await getAllUsers();
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <UserCard
      v-for="user in users"
      :key="user.uid"
      :displayName="user.displayName"
      :email="user.email"
      :photoURL="user.photoURL || '/default-avatar.png'"
    />
  </div>
</template>

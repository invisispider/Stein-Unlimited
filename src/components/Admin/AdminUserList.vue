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
  <div class="admin-user-list">
    <h1>User Directory</h1>
    <UserCard
      v-for="user in users"
      :key="user.uid"
      :displayName="user.displayName"
      :email="user.email"
      :photoURL="user.photoURL || '/favicon.ico'"
    />
  </div>
</template>
<style lang="sass" scoped>
.admin-user-list
  display: grid
  grid-template-columns: repeat(1, minmax(0, 1fr))
  gap: 1rem
  padding: 1rem
  @media screen and (min-width: 640px)
    grid-template-columns: repeat(2, minmax(0, 1fr))
  @media screen and (min-width: 768px)
    grid-template-columns: repeat(3, minmax(0, 1fr))
  @media screen and (min-width: 1024px)
    grid-template-columns: repeat(4, minmax(0, 1fr))
</style>
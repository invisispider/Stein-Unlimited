<template>
    <div class="avatar-selector">
      <div
        v-for="color in colors"
        :key="color.name"
        class="avatar-circle"
        :style="{ backgroundColor: color.hex, border: selected === color.name ? '3px solid black' : 'none' }"
        @click="selectAvatar(color)"
      />
    </div>
    <button class="confirm-button" :disabled="!selected"
        @click="confirmSelection"
    >Confirm Avatar</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from '@/stores/index';
import { updateUser } from '@/services/api';

interface AvatarColor {
name: string;
hex: string;
}

const store = useStore();

// const colors: AvatarColor[] = [
// { name: 'Infrared', hex: '#cd6d45' },
// { name: 'Magenta', hex: '#df20c2' },
// { name: 'Red', hex: '#ff0000' },
// { name: 'Amber', hex: '#bf8117' },
// { name: 'Orange', hex: '#ef8f00' },
// { name: 'Green', hex: '#4daf50' },
// { name: 'Teal', hex: '#20c5b8' },
// { name: 'Turquoise', hex: '#0080a0' },
// { name: 'Indigo', hex: '#5f51c5' },
// { name: 'Violet', hex: '#8a2bf2' },
// { name: 'Ultraviolet', hex: '#af80ff' },
// { name: 'Clearlight', hex: '#d0d7da' },
// ];
const colors: AvatarColor[] = [
  { name: 'Infrared', hex: '#bc556d' },
  { name: 'Magenta', hex: '#a7025a' },
  { name: 'Red', hex: '#dc1b07' },
  { name: 'Amber', hex: '#a9712a' },
  { name: 'Orange', hex: '#efa128' },
  { name: 'Green', hex: '#069a23' },
  { name: 'Teal', hex: '#00a6c4' },
  { name: 'Turquoise', hex: '#1964df' },
  { name: 'Indigo', hex: '#271ec8' },
  { name: 'Violet', hex: '#4929b5' },
  { name: 'Ultraviolet', hex: '#947fcb' },
  { name: 'Clearlight', hex: '#f0edf6' },
];
const selected = ref<string | null>(null);

onMounted(()=> {
  if (store.level) {
    selected.value = store.level;
  }  
})

function selectAvatar(color: AvatarColor) {
selected.value = color.name;
}
async function confirmSelection() {
    if (selected.value) {
        store.setUser({ level: selected.value });
        await updateUser({ uid: store.uid, level: selected.value }) 
    }
}
</script>
<style scoped>
.avatar-selector {
display: flex;
flex-wrap: wrap;
gap: 10px;
padding: 10px;
justify-content: center;
}

.avatar-circle {
width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
transition: transform 0.2s, box-shadow 0.2s;
}

.avatar-circle:hover {
transform: scale(1.2);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.confirm-button {
margin-top: 15px;
padding: 8px 16px;
border: none;
background-color: #4caf50;
color: white;
font-size: 14px;
border-radius: 6px;
cursor: pointer;
transition: background-color 0.2s;
}

.confirm-button:disabled {
background-color: #9e9e9e;
cursor: not-allowed;
}

.confirm-button:not(:disabled):hover {
background-color: #45a049;
}
</style>
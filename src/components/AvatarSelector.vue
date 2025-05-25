<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from '@/stores/index';
import { updateUser } from '@/services/api';

interface AvatarColor {
name: string;
hex: string;
}

const store = useStore();

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
<template>
    <div class="avatar-selector">
      <div
        v-for="color in colors"
        :key="color.name"
        class="avatar-circle"
        :style="{ backgroundColor: color.hex, border: selected === color.name ? '3px solid black' : '2px solid #777' }"
        @click="selectAvatar(color)"
      />
    </div>
    <button class="confirm-button" :disabled="!selected"
        @click="confirmSelection"
    >Confirm Level</button>
</template>
<style lang="sass" scoped>
$avatar-circle-size: 3rem
$avatar-circle-min-size: 2rem

.avatar-selector
  display: grid
  grid-template-columns: repeat(auto-fit, minmax($avatar-circle-min-size, $avatar-circle-size))
  gap: 0.4rem
  margin: auto
  max-width: 100vw
    // display: grid
  // grid-template-columns: repeat(6, 1fr)
  // grid-auto-rows: auto
  gap: 0.4rem
  // width: max-content
  margin: auto
  max-width: 100vw
  justify-content: center
  
@for $i from 1 through 6
  .avatar-circle:nth-child(#{$i})
    grid-row: 1
    grid-column: #{$i}

.avatar-circle:nth-child(7) 
  grid-row: 2
  grid-column: 3
.avatar-circle:nth-child(8)
  grid-row: 2
  grid-column: 4

@for $i from 9 through 12
  .avatar-circle:nth-child(#{$i})
    grid-row: 3
    grid-column: #{($i - 7)}

.avatar-circle
  width: 100%
  aspect-ratio: 1
  border-radius: 50%
  cursor: pointer
  transition: transform 0.2s, box-shadow 0.2s
  min-width: $avatar-circle-min-size
  max-width: $avatar-circle-size

.avatar-circle:hover 
  transform: scale(1.2)
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)

.confirm-button 
  margin-top: 15px
  padding: 8px 16px
  border: none
  background-color: #4caf50
  color: white
  font-size: 14px
  border-radius: 6px
  cursor: pointer
  transition: background-color 0.2s

.confirm-button:disabled 
  background-color: #9e9e9e
  cursor: not-allowed

.confirm-button:not(:disabled):hover 
  background-color: #45a049

</style>
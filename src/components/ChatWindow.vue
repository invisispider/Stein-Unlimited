<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getFirestoreInstance } from '@/services/firebaseconfig';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';

import type { Timestamp } from 'firebase/firestore';

const firestoreDb = getFirestoreInstance();

interface Message {
  uid: string;
  displayName: string;
  text: string;
  timestamp: Timestamp;
  level:string;
}

const messages = ref<Message[]>([]);

onMounted(async () => {
  const q = query(collection(firestoreDb, 'messages'), orderBy('timestamp', 'desc'), limit(60));
  onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => doc.data() as Message)
  })
})


interface AvatarColor {
name: string;
hex: string;
bghex: string;
}

const colors: AvatarColor[] = [
  { name: 'Infrared', hex: '#bc556d', bghex: '#dadedf' },
  { name: 'Magenta', hex: '#a7025a', bghex: '#d7d0d7' },
  { name: 'Red', hex: '#dc1b07', bghex: '#150202' },
  { name: 'Amber', hex: '#a9712a', bghex: '#fae8d1' },
  { name: 'Orange', hex: '#efa128', bghex: '#1d1203' },
  { name: 'Green', hex: '#069a23', bghex: '#e3fae3' },
  { name: 'Teal', hex: '#00a6c4', bghex: '#c8fffd' },
  { name: 'Turquoise', hex: '#1964df', bghex: '#b9daf2' },
  { name: 'Indigo', hex: '#271ec8', bghex: '#bbb8d1' },
  { name: 'Violet', hex: '#4929b5', bghex: '#d3ccd3' },
  { name: 'Ultraviolet', hex: '#947fcb', bghex: '#000000' },
  { name: 'Clearlight', hex: '#f0edf6', bghex: '#29292a' },
  { name: '', hex: '#dc1b07', bghex: '#150202'}
];
const giveColorHex = (n: string) => {
  if (n) {
    let set = colors.filter((item=>item.name===n))
    return set.pop()?.hex;
  }
  return 'red';
}

const giveBackgroundHex = (n: string) => {
  if (n) {
    let set = colors.filter((item=>item.name===n))
    return set.pop()?.bghex;
  }
  return 'black';
}

function formatChatTime(date: Date) {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.round(diffInMilliseconds / 1000);
  const diffInMinutes = Math.round(diffInSeconds / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);

  if (diffInSeconds < 60) {
    return 'just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} mins ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
</script>
<template>
  <div class="chat-feed">
    <div v-for="msg in messages" :key="msg.timestamp.toString" 
      class="message" :style="{ 'color': giveColorHex(msg.level) || '#dc1b07', 'background-color': giveBackgroundHex(msg.level) || '#150202'}"
    >
      <strong>{{ msg.displayName }} </strong><span>: {{ msg.text }}</span>
      <p>{{ formatChatTime(msg.timestamp.toDate()) }} <em>{{ msg.level }}</em></p>
      
    </div>
  </div>
</template>
<style lang="sass">
@use "@/assets/css/vars" as *
.chat-feed
  margin-bottom: auto
  background: rgba(0, 0, 0, 0.2)
  padding: 1rem
  border-radius: $radius-panel
//   max-height: 400px
//   overflow-y: auto
.message
  margin-bottom: 0.75rem
  padding-block: 0.75rem
  padding-inline: 1rem
  text-align: left
  border-radius: $radius-panel
  // border: 1px solid gray
  box-shadow: $box-shadow-stein
.level-circle
  width: 50px
  height: 50px
  border-radius: 50%
  background-color: #f2f2f2
</style>
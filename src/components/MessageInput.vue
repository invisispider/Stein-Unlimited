<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/index'
import { getFirestoreInstance, fireFunctions } from '@/services/firebaseconfig';
import { collection, query, where, getDocs } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions';

const submitMessage= httpsCallable(fireFunctions, 'submitMessage');

const db = getFirestoreInstance();

const text = ref('')
const store = useStore()

const canSubmit = computed(() => text.value.length > 0 && text.value.length <= 2500)

const postMessage = async () => {
  const user = store.displayName
  if (!user) {
    alert("Who Goes There? - must have a name.")
  }
  const today = new Date().toISOString().split('T')[0]

  const q = query(
    collection(db, 'messages'),
    where('uid', '==', store.uid),
    where('timestamp', '>=', new Date(today))
  )
  const existing = await getDocs(q)

  if (!existing.empty) {
    alert("You can only post once per day.")
    return
  }

  try {
    await submitMessage({
      uid: store.uid,
      displayName: store.displayName,
      text: text.value,
    });
    console.log("Success");
  } catch (err) {
    alert("Message failed: " + err);
  }

  text.value = ''
}
</script>

<template>
  <form @submit.prevent="postMessage">
    <textarea v-model="text" :maxlength="2500" placeholder="Write your message..." />
    <button type="submit" :disabled="!canSubmit">Post Message</button>
  </form>
</template>

<style scoped lang="scss">
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 1rem;
}
</style>

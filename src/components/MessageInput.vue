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

const errorMessage = ref('');

const postMessage = async () => {
  const user = store.displayName
  if (!user) {
    errorMessage.value = "You must have a name - who Goes There?"
  }
  const today = new Date().toISOString().split('T')[0]

  const q = query(
    collection(db, 'messages'),
    where('uid', '==', store.uid),
    where('timestamp', '>=', new Date(today))
  )
  const existing = await getDocs(q)

  if (!existing.empty) {
    errorMessage.value = "You know the rules. One post per day."
    return
  }

  try {
    await submitMessage({
      level: store.level || 'Infrared',
      displayName: store.displayName,
      text: text.value,
    });
    errorMessage.value = "Sent"
  } catch (err) {
    errorMessage.value = "Message failed: " + err 
  }

  text.value = ''
}

</script>
<template>
  <form @submit.prevent="postMessage">
    <div v-text="errorMessage"></div>
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

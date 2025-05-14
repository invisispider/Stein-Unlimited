<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/index';
// import axios from 'axios';
import { isValidName } from '@/utils/validator';
import AvatarSelector from '@/components/AvatarSelector.vue';


const store = useStore()
// const userId = ref(null);
const userMessage = ref('');
const displayName = ref(store.displayName || '');
const isEditing = ref(false)
const canEditName = ref(true);

onMounted(() => {
    if (!displayName.value) {
        isEditing.value = true // auto-enable editing if no name yet
    }
})

const startEdit = () => {
    isEditing.value = true
}

const saveName = async () => {
    const trimmedName = displayName.value.trim()

    if(!isValidName(trimmedName)) {
        alert('Invalid name. Use only letters, number, _ . - and ax 30 characters.')
        return
    }

    try {
        // await axios.post('api/user/update-name', {
        //     userId: store.uid,
        //     displayName: trimmedName,
        // })

        store.setUser({ displayName: trimmedName });

        isEditing.value = false
        canEditName.value = false // optionally block edits for a period
        alert('Name updated!')
    } catch (err) {
        console.error('Error updating name:', err)
        alert('Error updating name.')
    }

}

// const rainbowMe = () => {
    // @TODO figure out how to serve time to the whole site so we can show
    // the time script at the top, 
    // we want all 8 color themes (special releases on zenCycle)
    // THen we want a rainbow/seasonal theme that changes colors/styles
    // with the Habits
    // store.setStyleMode('rainbow');
// }
</script>
<template>
    <div class="user-dashboard">
        <h2>Hi {{ store.displayName }}!</h2>
        <p>{{ store.email }}</p>
        <div v-if="isEditing">
            <input v-model="displayName" placeholder="Enter your display name" />
            <button @click="saveName">Save</button>
            <button @click="isEditing=false">Cancel</button>
        </div>

        <div v-else>
            <button :disabled="!canEditName" @click="startEdit">Change Name</button>
        </div>
        <div>{{ userMessage }}</div>
        <p style="text-transform: capitalize;">You 💜 {{ store.styleMode }} Theme</p>
        <!-- <p>Want to synch your theme with the calendar? Try <button @click.prevent="rainbowMe">Season Theme</button></p> -->
        <!-- <div>{{ props.errorMessage }}</div> -->
         <AvatarSelector />
        <h4>You have {{ store.points.toString() }} points.</h4>
        <!-- <h3>Go to <RouterLink style="display: inline;" to="/Talk">Talk</RouterLink> to play with the others.</h3> -->
    </div>
</template>
<style lang="sass">
// .user-dashboard
</style>
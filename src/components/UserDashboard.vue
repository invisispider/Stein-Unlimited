<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/index';
import { isValidName } from '@/utils/validator';
import AvatarSelector from '@/components/AvatarSelector.vue';
import { updateUser } from '@/services/api';

const store = useStore()
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
        store.setUser({ displayName: trimmedName });

        isEditing.value = false
        canEditName.value = false // optionally block edits for a period
        // alert('Name updated!')
        await updateUser({ uid: store.uid, displayName: trimmedName })
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
const showRules = ref(false);
</script>
<template>
    <div class="user-dashboard">
        <h2>User: <span class="pedantic">{{ store.displayName }}</span></h2>
        <div v-if="isEditing">
            <input v-model="displayName" placeholder="Enter your display name" />
            <button @click="saveName">Save</button>
            <button @click="isEditing=false">Cancel</button>
        </div>
        <div v-else>
            <button :disabled="!canEditName" @click="startEdit">Change Name</button>
        </div>
        <h4>You have {{ store.points.toString() }} points.</h4>
        <!-- <p>{{ store.email }}</p> -->
        <div>{{ userMessage }}</div>
        <p style="text-transform: capitalize;">💚 {{ store.styleMode }} Theme 💜</p>
        <!-- <p>Want to synch your theme with the calendar? Try <button @click.prevent="rainbowMe">Season Theme</button></p> -->
        <!-- <div>{{ props.errorMessage }}</div> -->
          <h4>Select Level:</h4>
        <AvatarSelector />
        <h4 class="chat-rules-button" @click="showRules=!showRules">CHAT RULES</h4>
        <div v-show="showRules" class="chat-rules" @click="showRules=!showRules">
            <ol style="text-align: left;">
                <li>No spam or hack or link, just Talk</li>
                <li>Users can post one message under 2500 characters per day</li>
                <li>Must create a name and select a <RouterLink to="/Integral" style="color: teal; cursor: pointer;">Level</RouterLink> to post</li>
                <li>Try to indicate the Altitude expressed in the post, not your overall Level</li>
                <li>Don't go crazy and try to break the UI - it has safeguards and you could be banned</li>
            </ol>
            <hr />
            <strong>Uses:</strong> 
            <hr />
            <ul style="text-align: left;">
                <li>Further the aims of <RouterLink to="/" style="color: teal; cursor: pointer;">Stein unLimited</RouterLink></li>
                <li>Discuss Adam's <RouterLink to="/Videos" style="color: teal; cursor: pointer;">Videos</RouterLink>, <RouterLink to="/Technomancy" style="color: teal; cursor: pointer;">Code</RouterLink>, or <RouterLink to="/Music" style="color: teal; cursor: pointer;">Music</RouterLink></li> 
                <li>Talk to or about other users benevolently</li>
                <li><RouterLink to="/Integral" style="color: teal; cursor: pointer;">Integral Theory</RouterLink> and <RouterLink to="/UnThinkMe" style="color: teal; cursor: pointer;">unThinkMe</RouterLink> discussion</li>
                <li>Share something beautiful, funny, or inspiring</li>
                <li>Comment on this site or request features</li>
                <li>Critique recent <RouterLink to="/Beacon" style="color: teal; cursor: pointer;">Beacon</Routerlink> submissions</li>
                <li>Comment on <RouterLink to="/Time" style="color: teal; cursor: pointer;">unLimited Time</RouterLink> system</li>
                <li>Suggest socials / web sites without links or code</li>
            </ul>
            This is an experimental game.<br>
            Serious contact info and links on <RouterLink to="/" style="color: teal; cursor: pointer;">Home Page</RouterLink>.
            
        </div>
    </div>
</template>
<style lang="sass">
// .user-dashboard
.chat-rules-button
    cursor: pointer
    &:hover
        color: red
.chat-rules
    margin-inline: auto
    text-align: center
    max-width: 60ch
    padding-bottom: 10px
</style>
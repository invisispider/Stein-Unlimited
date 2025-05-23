<script lang="ts" setup>
import UserDashboard from '@/components/UserDashboard.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import MessageInput from '@/components/MessageInput.vue';
document.title = "Talk ~ Stein unLimited"
// ONLY LOAD LAST 75 MESSAGES, WITH MY INTRO PINNED
</script>
<template>
    <div class="talk-component">
        <div class="dashboard-wrapper">
            <UserDashboard />
            <MessageInput />
        </div>
        <ChatWindow/>
    </div>
</template>
<style lang="sass">
.dashboard-wrapper
    margin-bottom: auto
.talk-component
    margin-inline: auto
    padding-inline: 5em
    margin-top: 4em
    max-width: 40em
    display: flex
    gap: 2rem
    flex-direction: column
    // justify-content: center
    align-items: center
    // background: rgb(122, 122, 50)
    // height: 100vh
.chat-window
    // background-color: orange
    flex: 2
.user-dashboard
    flex: 1
@media screen and (min-width: 1200px)
    .talk-component
        display: grid
        grid-template-columns: 1fr 1fr
        min-width: 100vw
</style>
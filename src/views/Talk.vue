<script lang="ts" setup>
import UserDashboard from '@/components/UserDashboard.vue';

</script>
<template>
    <div class="talk-component">
        <div class="chat-window">
            <p>CHAT WINDOW</p>
        </div>
        <div class="user-profile">
            <UserDashboard />
        </div>
    </div>
</template>
<style lang="sass">
.talk-component
    margin-inline: auto
    padding-inline: 5em
    margin-top: 4em
    max-width: 40em
    display: flex
    flex-direction: column
    // justify-content: center
    align-items: center
    background: rgb(122, 122, 50)
    // height: 100vh
.chat-window
    background-color: orange
.user-profile
    // background-color: blue
</style>
<script setup lang="ts"></script>
<template>
    <div class="beacon-container">
        <div class="beacon-image">
        </div>
        <div>
            <h2>Beacon: The Revelation Complex</h2>
            <p><em>Join the People Upstairs and a group of unwitting participants in an 
                AI mind-control facility called The Revelation Complex.
            </em></p>
            <p>I've written the same science fiction novel eight times instead of a bunch of different things.
                The last version was published as <a href="https://www.goodreads.com/en/book/show/33115117" target="_blank">"The Spiral Stairs."</a>
            </p>
            <p>
                The final version will be published in a progressive release format <RouterLink to="/Beacon">here.</RouterLink>
                This allows me to write at my own pace without needing to finish the entire 
                project, and I can use community feedback in real time to guide the process.
            </p>
        <!-- <div class="flex-vertical"> -->
        </div>
    </div>
</template>
<style lang="sass" scoped>
@use "@/assets/css/utility"
.beacon-container
    box-shadow: 1px 1px gray, -1px -1px gray
    display: flex
    flex-direction: column
.beacon-image
    background-image: url("@/assets/img/spiralstairs.jpeg")
    background-repeat: no-repeat
    background-size: contain
    background-position: center
    min-width: 40vw
    min-height: 50vh
    margin: 1rem
    padding: 0
@include utility.breakpoint(l)
    h2
        text-align: center
    .beacon-container
        flex-direction: row
        // &:nth-child(2)
            // align-content: center
            
    .beacon-image
        justify-content: space-around
        margin-inline: auto
        padding-block: 1rem
        margin-block: 5rem
        // padding: 1em
        // *
            // padding: 1em
        // img
            // object-fit: none
</style>

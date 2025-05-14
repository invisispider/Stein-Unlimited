<script setup lang="ts"></script>
<template>
    <div class="beacon-container">
        <p>I've written the same science fiction novel eight times instead of a bunch of different things.
            The last version was published as <a href="https://www.goodreads.com/en/book/show/33115117" target="_blank">"The Spiral Stairs."</a>
        </p>
        <div class="beacon-image">
            <img src="@/assets/img/spiralstairs.jpeg" />
            <div class="flex-vertical">
                <h4>Beacon: The Revelation Complex</h4>
                <em>Join the People Upstairs and a group of unwitting participants in an 
                    AI mind-control facility called The Revelation Complex.
                </em>
            </div>
        </div>
        <p>
            The final version will be published in a progressive release format <RouterLink to="/Beacon">here.</RouterLink>
            This allows me to write at my own pace without needing to finish the entire 
            project, and I can use community feedback in real time to guide the process.
        </p>
    </div>
</template>
<style lang="sass" scoped>
.beacon-image
    box-shadow: 1px 1px gray, -1px -1px gray
    display: flex
    // padding: 1em
    *
        padding: 1em
    img
        object-fit: none
.flex-vertical
    *
        margin: 0
</style>

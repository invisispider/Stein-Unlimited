<script setup></script>
<template>
    <div class="float-image-left" 
        style="padding-block: 2em;">
        <img class="float-image" 
            src="@/assets/img/bookjacket.jpg" 
        />
        <div class="guidebook-items">
            <div class="guidebook-title">unThinkMe wrote a book!</div>
            <div style="margin-bottom: 1em;">A full guide to Integral Theory covering the full map of consciousness.</div>
            <div>
                <a href="https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness/dp/B0GR7L1LLK">
                Available now on Amazon
                </a>
            </div>
            <div class="guidebook-item">🎧 Audible Audiobook</div>
            <div class="guidebook-item">🖊️ Kindle ebook</div>
            <div class="guidebook-item">📖 Paperback</div>
            <div class="guidebook-item">✒️ Custom Paperback (coolest)</div>
            <div>Use our <RouterLink to="/Contact">Contact Form</RouterLink> to request a custom signed copy (including any requests)<br> 💳 $17 (<a href="https://venmo.com/u/unThinkMe-Adam">venmo</a>) plus shipping.</div>
        </div>
    </div>
</template>

<style lang="sass">
.guidebook-items
    text-align: center
.guidebook-item
    padding-block: 0.3em
.guidebook-title
    font-size-adjust: 1
    padding-block: 1em
</style>
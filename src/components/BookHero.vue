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
            <div class="guidebook-item"><a href="https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness/dp/B0GR7L1LLK">🎧 Audible Audiobook</a></div>
            <div class="guidebook-item"><a href="https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness/dp/B0GR7L1LLK">🖊️ Kindle ebook</a></div>
            <div class="guidebook-item"><a href="https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness/dp/B0GR7L1LLK">📖 Paperback</a></div>
            <div class="guidebook-item"><RouterLink to="/Contact">✒️ Custom Paperback (coolest)</RouterLink></div>
            <div>Use our <RouterLink to="/Contact">Contact Form</RouterLink> to request custom signed copy and sticker pack (including any requests)<br> 💳 $20 (<a href="https://venmo.com/u/unThinkMe-Adam">venmo</a>) + shipping.</div>
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
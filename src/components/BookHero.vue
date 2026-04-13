<script setup>
const amazonLink = "https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness/dp/B0GR7L1LLK";
const ebookLink = "https://www.amazon.com/unThinkMes-Guide-Integral-Theory-Consciousness-ebook/dp/B0GR8J4Y94/ref=tmm_kin_swatch_0";
const audibleLink = "https://www.audible.com/pd/unThinkMes-Guide-to-Integral-Theory-Audiobook/B0GWN9L9BT?qid=1776038319&sr=1-1";
const goodreadsLink = "https://www.goodreads.com/book/show/249300958-unthinkme-s-guide-to-integral-theory";
</script>
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
                <a :href="amazonLink" target="_blank">
                Available now on Amazon
                </a>
            </div>
            <div class="guidebook-item"><a :href="audibleLink" target="_blank">🎧 Audible Audiobook</a></div>
            <div class="guidebook-item"><a :href="ebookLink" target="_blank">🖊️ Kindle ebook</a></div>
            <div class="guidebook-item"><a :href="amazonLink" target="_blank">📖 Paperback</a></div>
            <div class="guidebook-item"><RouterLink :to="{ name: 'Contact', query: { mode: 'order' } }">✒️ Custom Paperback (coolest)</RouterLink></div>
            <a :href="goodreadsLink" target="_blank">Leave a GoodReads Review!</a>
            <div>Use our <RouterLink :to="{ name: 'Contact', query: { mode: 'order' } }">Contact Form</RouterLink> to request custom signed copy and sticker pack (including any requests)<br> 💳 $20 (<a href="https://venmo.com/u/unThinkMe-Adam">venmo</a>) + shipping.</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
div
    text-align: center
    // overflow-wrap: break-word
    max-width: 100%
.guidebook-items
    display: flex
    flex-direction: column
        // @media screen and (max-width: 500px)
.guidebook-item
    // word-wrap: break-word
    // max-width: 100vw
    padding-block: 0.3em
.guidebook-title
    font-size-adjust: 0.9
    line-height: 2em
    padding-block: 1em
</style>
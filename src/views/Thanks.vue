<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const type = computed(() => route.query.type || '');
</script>
<template> 
    <div class="thanks"> 
        <h1>Thank You</h1>
        <div v-if="type === 'order'">
            <h1>✅ Order received</h1>
            <p>
                <strong>Send payment via <a href="https://venmo.com/u/unThinkMe-Adam">Venmo to @unThinkMe-Adam</a></strong>
            </p>
            <p>If you're in a rush, please add $6 standard shipping for ordinary US domestic orders.</p> 
            <p>Once we receive your order, we'll calculate your total and send a confirmation to the email provided.</p>
            
            <p>Upon payment, your order should ship within three business days.</p>
            
            <p class="subtle">
                Thanks for supporting this project directly—it genuinely makes a difference.
            </p>
            <img style="width: 250px;" src="@/assets/img/venmo-qr.png" alt="venmo QR" />

        </div>
        <div v-else-if="type === 'business'">
            <h1>Message Received</h1>
            <p>We appreciate you reaching out.</p>
            <p>I’ll review your message and respond as soon as I can.</p>
        </div>
        <div v-else-if="type === 'general'">
            <!-- <h1>Got It</h1> -->
            <p>Thanks for the message — I appreciate you taking the time to reach out.</p>
        </div>
        <!-- <h1 v-show="!state">✅ Message received</h1> -->
        <!-- <p v-show="state"> -->
        <!-- Thanks for your order!<br> -->
        <!-- Send $X via Venmo to @unThinkMe-Adam and include your name.<br> -->
        <!-- Your book will ship within X days. -->
        <!-- </p> -->
        <p v-show="!type">
            It's possible that no message went through, sorry. 🔧
        </p>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>
<style lang="sass" scoped>
.thanks
    margin: auto

</style>
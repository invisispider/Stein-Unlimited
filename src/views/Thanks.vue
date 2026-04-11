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
                <strong>Send payment via Venmo to @unThinkMe-Adam</strong><br />
                    Include your name in the payment.
            </p>

            <p>Your order will ship within a few days.</p>

            <p class="subtle">
                Thanks for supporting this project directly—it genuinely makes a difference.
            </p>

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
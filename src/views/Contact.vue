<script setup lang="ts">
import { ref, computed } from 'vue';
import router from '@/router';
document.title = "Contact ~ Stein unLimited"
type Mode = 'business' | 'general' | 'order';
const mode = ref<Mode>('business');
// Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/mgopneap";

const isValidEmail = (email: string) =>{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// shared fields
const name = ref('');
const email = ref('');
const message = ref('');

// business
const subject = ref('Collaboration');

// order
const address = ref('');
const note = ref('');
const quantity = ref(1);
const errorMessage = ref('');
const isSubmitting = ref(false);
// computed subject line
const computedSubject = computed(() => {
  if (mode.value === 'business') return `[BIZ] ${subject.value} – ${name.value}`;
  if (mode.value === 'order') return `[ORDER] Signed Copy – ${name.value}`;
  return `[MSG] General – ${name.value}`;
});
const redirectUrl = computed(() => {
  return `https://steinunlimited.com/Thanks?type=${mode.value}`;
})

const handleSubmit = async () => {
  if (!name.value.trim()) {
    errorMessage.value = "Name is required";
    return;
  } 
  if (!isValidEmail(email.value)) {
    errorMessage.value = "Enter a valid email";
    return;
  } 
  if (!message.value.trim()) {
    errorMessage.value = "Message cannot be empty";
  }

  isSubmitting.value = true;
  errorMessage.value = "";
  if (mode.value==="order" && !address.value) {
    errorMessage.value = "Please provide an address for shipping calculation.";
    return;
  }
  if (mode.value==="order" && (!quantity.value || !Number.isFinite(quantity.value))) {
    errorMessage.value = "Please enter a valid Quantity for order requests.";
    return;
  }
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        subject: computedSubject.value,
        address: address.value,
        note: note.value,
        quantity: quantity.value
      })
    });

    if (res.ok) {
      router.push(`/Thanks?type=${mode.value}`);
    } else {
      const data = await res.json();
      errorMessage.value = data.errors?.[0]?.message || "Submission failed";
      console.error(data.errors);
    }
  } catch (e) {
    errorMessage.value = "Network error";
    console.error(e);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div id="contact">
    <h1>Contact</h1>
    <p style="margin-top: 1em;">Adam Loewen ~ unThinkMe ~ Stein unLmiited</p>
    <!-- Mode Selector -->
    <div class="mode-toggle">
      <button :class="{ active: mode==='business' }" @click="mode = 'business'">Business</button>
      <button :class="{ active: mode==='general' }" @click="mode = 'general'">Message</button>
      <button :class="{ active: mode==='order' }" @click="mode = 'order'">Purchase</button>
    </div>
    <p v-show="errorMessage" class="pedantic">{{ errorMessage }}</p>
    <!-- Form -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <input type="hidden" name="_redirect" :value="redirectUrl" />
      <div v-show="mode==='business'" class="contact-description">Professional inquiries and networking. Get in
        touch for holistic solutions.
      </div>
      <div v-show="mode==='general'" class="contact-description">We love feedback on the work, general questions,
        and often just weird stuff. Reach out and see if anything happens.
      </div>
      <div v-show="mode==='order'" class="contact-description">
        <h3 style="text-align: center;">The unThinkMe Corner Store</h3>
        <p>This is a fun, casual way you can 
        purchase Stein unLimited products and services, giving $0 to Jeff Bezos and other corporate giants. 
        </p>
        <p style="text-align: center;"><b>~Signature Pack~ unThinkMe's Guide
          to Integral Theory</b></p>
          <div class="flex" style="justify-content: center;" >
          <img src="@/assets/img/bookjacket.jpg" class="product-card" style="border-radius: 2%; margin-right: 5px;" />
          <img src="@/assets/img/sticker-AltitudesLevels-web.jpg" class="product-card" />
        </div>
          <p class="order-note" style="text-align: center;">
            Includes signed copy + optional message + bonus Levels sticker.
          </p>
        <b>$20 (+shipping)</b> 
          <p>Pick up your copy of the unThinkMe book directly from Adam through Venmo and
            US Postal, with the AWESOME Levels of Consciousness sticker, and a personal 
            message, OR spice things up with a Truth or Dare request. 
          </p>
        <p style="text-align: center;"><b>~Exclusive - Levels of Consciousness sticker~</b></p>
        <p>
          unThinkMe Altitudes Levels graphic can be purchased seperately while supplies
          last. Classic 3"x2" decal for laptops,
          water bottles, and perhaps less common places.
        </p>
          <b>$5 (+shipping)</b>
        <p style="text-align: center;"><b>~Holistic Music Lessons (remote)~</b></p>
          <p> Adam teaches holistic general music - voice, guitar, bass, piano, rhythm, performance, audio, 
          production, and also communicative, psychological, somatic, spiritual, and existential aspects of the practice.
        </p>
          <b>$30 / 30min negotiable.</b>
        <p>No commitment! Reach out if curious, very informal. For purchases, 
        we'll calculate shipping based on the address, we'll send payment request, and upon
        payment, item should ship within 1 or 2 business days, and then take forever to get there.
        </p>
      </div>
      <!-- hidden subject for Formspree -->
      <input type="hidden" name="_subject" :value="computedSubject" />

      <!-- Honeypot spam protection -->
      <input type="text" name="_gotcha" style="display:none" />

      <!-- Name -->
      <input v-model="name" type="text" name="name" placeholder="Name" :required="mode !== 'general'" />

      <!-- Email -->
      <input v-model="email" type="email" name="email" placeholder="Email" required />

      <!-- BUSINESS -->
      <div v-if="mode === 'business'" class="dropdown-selector">
        <select v-model="subject" name="topic">
          <option>Freelance / Contract Work</option>
          <option>Collaboration</option>
          <option>Speaking / Podcast</option>
          <option>Other</option>
        </select>

        <textarea v-model="message" name="message" placeholder="Message" required></textarea>
      </div>

      <!-- GENERAL -->
      <div v-if="mode === 'general'">
        <textarea v-model="message" name="message" placeholder="Say whatever you like"></textarea>
      </div>

      <!-- ORDER -->
      <div v-if="mode === 'order'" class="order-section">
        <input v-model="address" type="text" name="address" placeholder="Shipping Address" required />
        <div class="flex" style="justify-content: center;">
          <label for="quantity">Quantity</label>
          <input v-model.number="quantity" type="number" name="quantity" min="1" style="max-width: 15ch;" />
        </div>
        <textarea v-model="note" name="note" placeholder="Optional message for signing"></textarea>

      </div>

      <button type="submit">
        <span v-if="mode==='order'">Get Payment Instructions</span>
        <span v-else>Send Message</span>
      </button>

    </form>

  </div>
</template>

<style scoped lang="sass">
#contact
  align-self: center
  // max-width: 600px
  max-width: 100vw
  margin-top: 3.5rem
  // display: flex
  // flex-direction: column
  // border: 1px solid white
  box-shadow: 0 0 2px 1px white
  border-radius: 0.5em
  padding: 2em 1em
  @media screen and (min-width: 764px)
    padding: 2em 4em
.mode-toggle
  display: flex
  gap: 10px
  margin-bottom: 20px
  justify-content: space-evenly

  button
    padding: 0.2rem 0.8rem
    cursor: pointer
    border: 1px solid #ccc
    // background: white
    border-radius: 0.6rem
    &.active
      background: black
      color: white
    &:hover
      background: green

.contact-form
  display: flex
  flex-direction: column
  gap: 1em

input, textarea, select
  padding: 0.5rem 1rem
  border: 1px solid #ccc
  // max-width: 90vw
select
  justify-self: flex-start
.order-section
  display: flex
  flex-direction: column
  label
    align-self: center
    padding: 0 2em
    // justify-self: flex-start
  textarea
    margin-inline: auto

    // margin-block: auto
  *
    margin-block: 1em

textarea
  min-height: 10rem
  min-width: 250px
  width: max-content
  width: 100%
button
  padding: 0.5rem 1rem
  cursor: pointer
  // background: black
  // color: white
  border: none
  border-radius: 0.6rem

.order-note
  font-size: 0.9em
  opacity: 0.7
.dropdown-selector
  justify-content: space-evenly
  align-items: center
  display: flex
  flex-direction: column
  select
    margin-bottom: 1em

.contact-description
  font-size: 0.9em
  max-width: 60ch
  text-align: justify
.product-card
  max-width: 50%
  max-height: 400px
</style>
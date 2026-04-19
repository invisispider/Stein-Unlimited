<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

document.title = "Contact ~ Stein unLimited"
type Mode = 'business' | 'general' | 'order';
const mode = ref<Mode>('business');
// Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/mgopneap";
const validModes = ['business', 'general', 'order'];

const route = useRoute();
watch(
  () => route.query.mode,
  (qMode) => {
    const value = Array.isArray(qMode) ? qMode[0] : qMode;
    if (validModes.includes(value as Mode)) {
      mode.value = value as Mode;
    }
  },
  { immediate: true }
);

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
    <!-- Form -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <input type="hidden" name="_redirect" :value="redirectUrl" />
      <div v-show="mode==='business'" class="contact-description">
        <p>Professional inquiries and networking.</p> 
        <!-- <p>Services currently offered:</p>  -->
        <!-- <h2>Adam Loewen</h2> -->
        <ul>
          <li>Integral Speaking & Podcasts</li>
          <li>Software Development</li>
          <li>Regulated Industry Statistics & Data Technology</li>
          <!-- <li>Scripted voice acting</li> -->
          <li>Holistic Coaching</li>
          <!-- <li class="pedantic">Ecstatic Dance / Yoga Facilitator</li> -->
          <!-- <li class="pedantic">Holistic Therapy/Coaching/Consulting</li>/ -->
        </ul>
        <p>My professional (and beloved non-professional) work inhabits a large variety of contexts, and I would love for this website to provide a unifying focus.
          I do freelance contract work, temporary work, possibly more, and I offer everything I do as services here.
        </p> 
        <!-- <p>          
          I also do spiritual community things, and I'm a  
        </p> -->
        <p class="pedantic">Get in touch for unLimited solutions.</p>
      </div>
      <div v-show="mode==='general'" class="contact-description">We embrace and integrate feedback. 
        Reach out and see what happens. 
        <ul>
          <li>Give your 
        notes and opinions on the Beacon fiction series as it develops - evolutionary fiction</li>
          <li>Tell us how you like unLimited Time and the site itself</li>
          <li>General questions about us and Integral Theory</li>
          <li>Questions about products and services</li>
          <li>Often just weird stuff</li>
        </ul>
        
      </div>
      <div v-show="mode==='order'" class="contact-description">
        <h1 style="text-align: center;">unLimited Store</h1>
        <h3 style="text-align: center;">The best way to purchase unThinkMe products</h3>
        <p>Thank you for being here! We feel that you must be very kind and wise. 
          We aim to deliver a fast, smooth, and soulful commercial experience.
          Please give us feedback at any time on how we can improve your experience.
        </p>
        <h2 style="text-align:center;">unThinkMe's Guide to Integral Theory (book)</h2>
        <h2 style="text-align: center;">~Custom Paperback Pack~</h2>
        <p class="pedantic" style="text-align: center;">
          <b>$25</b> - Signed copy + full-size Levels sticker + (optional) Truth or Dare challenge + US shipping included
        </p>
          <div class="flex" style="justify-content: center;" >
          <img src="@/assets/img/bookjacket.jpg" class="product-card" style="border-radius: 2%; margin-right: 5px;" />
          <img src="@/assets/img/sticker-AltitudesLevels-web.jpg" class="product-card" />
        </div>
        <p>Pick up your copy of the unThinkMe book direct through Venmo and
          US Postage, with the AWESOME full-size Levels of Consciousness sticker, and a personalized 
          message from the author. Spice things up with a "Truth or Dare" request for YouTube or your message. 
          </p>
          <p class="pedantic"><b>Please note: for the first run of orders, there is a delay on stickers, so they will ship separately as stock arrives. Don't worry when your book arrives 
            without a sticker! We expect them on April 27th.</b>
          </p>
          <p class="order-note">We regret that for international orders, shipping rates may be high (we'll check with you). In that case,
        you may go with Amazon for shipping, and still reach out here for a sticker / personal request or message. We apologize for the inconvenience - 
        the audience is small but very global.
      </p>
        <p style="text-align: center;"><b>~Levels of Consciousness - individual stickers~</b><br>
          <b>Full-size: 3" x 6" - $7</b><br>
          <b>Mini-size: 1.5" x 3" - $4</b><br>
          <b>Sticker Pack: 1 Full, 2 Mini - $9</b><br>
          <span class="order-note">*prices include US shipping</span>
        </p>
        <p>
          Exclusive Altitudes Levels graphic stickers can also be purchased separately while supplies
          last. Decals are great for laptops, gear cases, water bottles, and less common places.
        </p>
          
        <!-- <p style="text-align: center;"><b>~Holistic Music Lessons (remote)~</b></p> -->
          <!-- <p> Adam teaches holistic general music - voice, guitar, bass, piano, rhythm, performance, audio, 
          production, and also communicative, psychological, somatic, spiritual, and existential aspects of the practice.
        </p> -->
          <!-- <b>$30 / 30min negotiable.</b> -->
        <p><b>No commitment! Reach out if curious.</b></p>
        <p>We take your order and satisfaction seriously. For purchases, we'll send a response with payment request. Upon
        payment, item should ship within 1 or 2 business days, then please allow standard shipping time. Don't forget 
        Truth or Dare / message request in the bottom section - or be sure and mention it before completing your order.</p>
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
    <p v-show="errorMessage" class="pedantic">{{ errorMessage }}</p>

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
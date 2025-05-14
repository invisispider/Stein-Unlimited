<script setup lang="ts">
// import { pageSelections } from '@/composables/landing-pages';
</script>
<template>
    <div id="namaste-div">
        <!-- <h5>Repeat: Love Is Okay</h5> -->
        <p>
            Thank you 🙏🏿 for Being with us. This is our living website.
            <span class="pedantic">Try the buttons at the top of the screen.</span> 
        </p>
            <!-- </p> -->

        <!-- <div class="kill-birds"> -->
            <!-- <div v-for="selection of pageSelections" class="bird" :key="selection.name" 
                :style="{ display: selection.name=='Namaste'?'none':'default'}" 
            >
                <router-link :to="'/landing/'+selection.name">
                <i class="material-icons bird">{{ selection.icon }}</i><span>{{ " "+selection.name }}</span>
                </router-link>
            </div> -->
        <!-- </div> -->
        <h2>Site Features:</h2>
        <!-- <h4>My Treasures:</h4> -->
        <RouterLink to="/Integral"><p class="bullet-point"><b style="display: block;">Integral Theory</b> Crash course in Ken Wilber's philosophy</p></RouterLink>
        <RouterLink to="/UnThinkMe"><p class="bullet-point"><b style="display: block;">unThinkMe</b> Integral Theory discussion videos</p></RouterLink>
        <RouterLink to="/Time"><p class="bullet-point"><b style="display: block;">unLimited Time</b> Progressive clock and calendar framework</p></RouterLink>
        <RouterLink to="/Music"><p class="bullet-point"><b style="display: block;">Music</b> Music instruction, peformance, and holistic coaching</p></RouterLink>
        <RouterLink to="/Beacon"><p class="bullet-point"><b style="display: block;">Beacon</b> A progressive-release science fiction mystery</p></RouterLink>
        <RouterLink to="/Videos"><p class="bullet-point"><b style="display: block;">Videos</b> Dusty old archive of Adam's music and comedy projects</p></RouterLink>
        <!-- <p><b><RouterLink to="/Crossword">Crossword: </RouterLink></b> An Integral Theory crossword puzzle for no reason that's pointless.</p> -->
        <!-- <p><b><RouterLink to="/Login">Wall Chat: </RouterLink></b>Realtime chat for logged in users. (request only).</p> -->
        <br>
        <p><b>Contribution: </b>We greatly appreciate any donations or investment opportunities! 
            You can donate via <a href="https://venmo.com/u/unThinkMe-Adam">Venmo.</a> 100% goes to business development.</p>
        <!-- <p>Stay tuned for updates and please reach out via email with any requests.</p> -->
        <div class="hero-image">
            <img src="@/assets/img/adam_med.png" class="adam-med">
        </div>
        <p><span style="font-size: xx-large;"><b>Adam Loewen</b></span> 
            is a yoga guy, technomancer, and head proprieter of Stein unLimited - this means software
            engineer, data analyst, multimedia artist, music teacher, and online philosopher on a never-ending quest
            to include more things he can do decently well.
        </p>
        <p> <RouterLink to="/Technomancy">Opportunities:</RouterLink> 
            Reach out with any work opportunities, collaborative inquiries, or just to say hi. 
            <!-- Sometimes we get a little slow, but we are  -->
            <!-- ever networking and trying to find meaningful work in this rapidly changing ecosystem.  -->
            Get in touch
            via <a href="mailto:adam.loewen@gmail.com">email</a> or other options below. 💚
        </p>
    </div>
</template>
<style lang="sass" scoped>
// .kill-birds
//     display: flex
//     flex-wrap: wrap
//     justify-content: space-evenly
//     // width: 100%
//     align-items: center
//     .bird
//         margin: 10px
//         justify-content: center
//         // :has(:not(i))
//             // display: none
//         a 
//             display: inline-flex
//             span
//                 align-self: center
#namaste-div
    p
        text-align: justify
    .stu
        p
            text-align: justify
</style>
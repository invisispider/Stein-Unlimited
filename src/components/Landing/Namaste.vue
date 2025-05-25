<script setup lang="ts">
// import { pageSelections } from '@/composables/landing-pages';
</script>
<template>
    <div id="namaste-div">
         <div class="float-image-left">
                <!-- <img src="@/assets/img/LOGO_steinunlimited_dark.webp"> -->
                <img src="@/assets/img/LOGO_steinunlimited.webp" class="float-image theme-image">
            <div>
                <h3>
                    Thank you 🙏🏿 for Being with us. This is our living website.
                    <span class="pedantic">Try the buttons at the top of the screen.</span> 
                </h3>
            </div>
        </div>
        <!-- <h5>Repeat: Love Is Okay</h5> -->
        <h2 class="text-center">Site Features:</h2>
        <!-- <h4>Treasures:</h4> -->
        <div class="navigation-cards">
            <RouterLink to="/Integral">
                <div class="home-navigation-card">
                    <b>Integral Theory</b> Crash course in Ken Wilber's philosophy
                </div>
            </RouterLink>
            <RouterLink to="/UnThinkMe">
                <div class="home-navigation-card">
                    <b>unThinkMe</b> Integral Theory discussion videos
                </div>
            </RouterLink>
            <RouterLink to="/Time">
                <div class="home-navigation-card">
                    <b>unLimited Time</b> Progressive clock and calendar framework
                </div>
            </RouterLink>
            <RouterLink to="/Music">
                <div class="home-navigation-card">
                    <b>Music</b> Music instruction, peformance, and holistic coaching
                </div>
            </RouterLink>
            <RouterLink to="/Beacon">
                <div class="home-navigation-card">
                    <b>Beacon</b> A progressive-release science fiction mystery
                </div>
            </RouterLink>
            <RouterLink to="/Videos">
                <div class="home-navigation-card">
                    <b>Videos</b> Dusty old archive of Adam's music and comedy projects
                </div>
            </RouterLink>
            <RouterLink to="/Crossword">
                <div class="home-navigation-card">
                    <b>Crossword: </b> An Integral Theory crossword puzzle that's currently pointless
                </div>
            </RouterLink>
            <RouterLink to="/Talk">
                <div class="home-navigation-card">
                    <b>Talk</b> Public message board with strict rules
                </div>
            </RouterLink>
        </div>
        <div class="float-image-left">
            <img src="@/assets/img/heroimage.webp" class="float-image">
            <div>
                <p><b>Contribution: </b>We greatly appreciate any donations or investment opportunities! 
                    You can donate via <a href="https://venmo.com/u/unThinkMe-Adam">Venmo.</a> 100% goes to business development.</p>
                <p><b>Adam Loewen</b> 
                    is a yoga guy, technomancer, and head proprieter of Stein unLimited - this means software
                    engineer, data analyst, multimedia artist, music teacher, and online philosopher on a never-ending quest
                    to include more things he can do decently well.
                </p>
                <p> <RouterLink to="/Technomancy">Opportunities:</RouterLink> 
                    Reach out with any work opportunities, collaborative inquiries, or just to say hi. 
                    Get in touch
                    via <a href="mailto:adam.loewen@gmail.com">email</a> or other options below. 💚
                </p>
            </div>
        </div>
    </div>
</template>

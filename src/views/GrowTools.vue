<script setup lang="ts">
import GrowDashboardMockup from '@/components/GrowTools/GrowDashboardMockup.vue';
import TestingChart from '@/components/GrowTools/TestingChart.vue';
import { useSocials } from '@/composables/socials';
document.title = "Adam Loewen | Regulated Industy Operations";
const { socials } = useSocials();
</script>
<template>
    <div class="gt-container">
        <section id="hero" class="gt-section gt-hero">
            <div class="gt-hero-left">
                <h1 class="gt-heading">Adam Loewen</h1>
                <p class="gt-tagline">
                    Google Sheets • Metrc Workflows • Reporting Automation • Custom Utilities
                </p>
                <h2 class="gt-subheading">Cannabis Reporting & Workflow Automation</h2>
                <p class="gt-text">Helping Oregon cannabis operators reduce spreadsheet chaos, automate reporting tasks, and improve operational visibility.</p>
                <div class="gt-avatar">
                    <img src="@/assets/img/mega-adam-avatar.webp" alt="Adam Loewen avatar">
                </div>
                <div style="display: flex;">
                    <a class="gt-button-2" href="#solutions">Example Tools</a>
                    <a href="/Contact" class="gt-button">Contact Me</a>
                </div>
                <p>
                    View my <a href="https://github.com/invisispider" target="_blank">GitHub projects</a>
                    , or my <a href="https://www.upwork.com/freelancers/~01527a09cdcfd75500" target="_blank" >Upwork Freelancer Profile</a>
                </p>
            </div>

            <div style="margin: auto;" class="gt-hero-right">

                <GrowDashboardMockup />

            </div>            

        </section>
        <section id="solutions" class="gt-section">
            <h2>Common operational problems I solve</h2>

            <TestingChart />

       
            <p>Cannabis teams have <b class="text-slate">NO TIME</b> for repetitive work in 
                <span class="text-slate"><b>spreadsheets, databases,</b> and <b>web exports.</b></span>
            </p>

            <div class="gt-card-container">

                <div class="gt-card">
                <header>Messy spreadsheets → structured systems</header>
                <p>Clean and standardize cultivation and inventory tracking systems built in Sheets or Excel.</p>
                <ul>
                    <li>duplicate cleanup</li>
                    <li>standard templates</li>
                    <li>inventory restructuring</li>
                </ul>
                </div>

                <div class="gt-card">
                <header>Operations → dashboards</header>
                <p>Turn fragmented operational data into clear KPIs and visual dashboards.</p>
                <ul>
                    <li>yield tracking</li>
                    <li>production trends</li>
                    <li>inventory visibility</li>
                </ul>
                </div>

                <div class="gt-card">
                <header>Metrc → reality alignment</header>
                <p>Reconcile Metrc data with real-world inventory and flag inconsistencies before they become problems.</p>
                <ul>
                    <li>validation checks</li>
                    <li>reconciliation tools</li>
                    <li>discrepancy detection</li>
                </ul>
                </div>

                <div class="gt-card">
                <header>Manual workflows → automation</header>
                <p>Automate repetitive reporting, syncing, and spreadsheet workflows using Apps Script and lightweight tooling.</p>
                <ul>
                    <li>scheduled reports</li>
                    <li>email summaries</li>
                    <li>workflow automation</li>
                </ul>
                </div>

                <div class="gt-card">
                <header>Field entry → mobile capture</header>
                <p>Simple mobile tools connected directly to spreadsheets for real-time operational updates.</p>
                <ul>
                    <li>harvest entry</li>
                    <li>QA logging</li>
                    <li>inventory updates</li>
                </ul>
                </div>

            </div>
        </section>
        <section id="clients" class="gt-section">
            <h2>Built for teams buried in spreadsheets</h2>

            <p>
                If your operations live in Excel, Google Sheets, PDFs, or Metrc exports —
                this is for you.
            </p>

            <ul>
                <li>Growers tracking inventory across multiple sheets</li>
                <li>Labs manually processing COAs and test results</li>
                <li>Operators reconciling Metrc vs reality</li>
                <li>Teams losing time to copy/paste reporting work</li>
            </ul>
        </section>
        <section class="gt-section">
            <h2>How it works</h2>

            <p>
                You send me a real workflow, spreadsheet, or report.
                I turn it into something that runs cleaner, faster, or automatically.
            </p>

            <ul>
                <li>Remove manual copy/paste work</li>
                <li>Standardize messy data</li>
                <li>Automate repetitive reporting</li>
                <li>Connect tools that don’t currently talk to each other</li>
            </ul>

            <p>
                Most fixes take the form of lightweight scripts, dashboards, or data pipelines.
            </p>
        </section>
        <section id="cta" class="gt-footer">    
            <h2>Get in Touch</h2>
            <p>Annoying or repetitive workflow? Need better reporting?</p>
            <p>Send an example and I’ll let you know whether it can be simplified or automated.</p>         
            <div style="margin-block: 3em;">
                <RouterLink class="gt-button" to="/Contact">Contact Form</RouterLink>
            </div>
            <div v-for="social in socials" :key="social.name" class="gt-socials">
                <a :href="social.url" target="_blank">
                <img :src="social.link" class="social">
                </a>
            </div>
            <div v-show="false">
                <p>Images Needed:</p>
                <ul>
                    <li>Dashboard screenshots/mockups</li>
                    <li>Spreadsheet screenshots</li>
                    <li>PDF →CSV example visual</li>
                    <li>Simple logo/wordmark (optional)</li>
                </ul>
                <p>Content Needed:</p>
                <ul>
                    <li>case studies</li>
                    <li>testimonials</li>
                    <li>recurring support plans</li>
                    <li>packaged utilities</li>
                    <li>niche products</li>
                    <li>Metrc integrations</li>
                </ul>
            </div>
            <a v-show="false" style="display: block; margin-block: 3em;" class="gt-back" href="/" >Stein unLimited Website Home</a>
        </section>
    </div>
</template>
<style lang="sass" scoped>
@use "sass:color"
$charcoal: #36454F
$slate: DarkSlateBlue
$muted-green: #6e7864
$soft-off-white: #FAF9F6
.text-slate
    color: $slate
.gt-container
    background-color: $soft-off-white
    color: $charcoal
    display: flex
    flex-direction: column
    ul
        padding-left: 0
        list-style-position: inside
.gt-section:nth-child(even)
    background-color: rgba(255,255,255,0.45)
.gt-section
    // min-height: 50vh
    border-bottom: 3px solid $muted-green
    width: min(1200px, 92%)
    margin-inline: auto
    padding: 1rem 0 3rem 0
.gt-heading
    width: 100%
    color: $charcoal
    font-size: clamp(2.8rem, 6vw, 5rem)
    line-height: 0.95
    font-weight: 800
.gt-subheading
    color: $muted-green
    font-size: clamp(1.3rem, 2vw, 2rem)
    margin-top: 1rem
    font-weight: 500
.gt-tagline, p, li, h3
    color: $charcoal
// .gt-dashboard

.gt-card-container
    display: grid
    justify-items: center
    @media screen and (min-width: 800px)
        grid-template-columns: 1fr 1fr
        gap: 1em
    .gt-card
        border-radius: 1em
        padding: 1.5rem
        background-color: white
        min-width: 380px
        max-width: 800px
        transition: transform 0.2s ease, box-shadow 0.2s ease
        border: 1px solid rgba(0,0,0,0.06)
        &:hover
            transform: translateY(-3px)
            box-shadow: 0 8px 24px rgba(0,0,0,0.08)
        header
            font-size: 1.3em
            border-bottom: 1px solid $charcoal
            padding-bottom: 1em
        h3
            font-size: 1em
            font-weight: normal
        p
            font-size: 1em
        ul
            font-size: 0.8em
        p, li
            line-height: 1.6
.gt-back
    margin-bottom: 2em
.gt-text
    align-self: center
    max-width: 50ch
    font-size: 1.05rem
    line-height: 1.7
.gt-button, .gt-button-2
    display: inline-flex
    align-items: center
    justify-content: center
    padding: 0.9rem 1.6rem
    border-radius: 999px
    margin: 1rem 1rem 1rem 0
    font-weight: 600
    transition: 0.2s ease
    color: $muted-green !important
    // align-self: center
    // width: max-content
    &:hover
        background-color: color.adjust($charcoal, $lightness: +55%)    
.gt-button
    background-color: color.adjust($charcoal, $lightness: +60%)
.gt-button-2
    border: 1px solid $charcoal
.gt-hero
    display: grid
    grid-template-columns: 1.1fr 0.9fr
    gap: 4rem
    align-items: center
    @media screen and (max-width: 900px)
        grid-template-columns: 1fr
.gt-hero-left
    border: 1px solid $soft-off-white
.gt-socials
    display: inline-flex
    *
        margin-inline: 1em
        max-width: 3em

@mixin sepia-filter($intensity: 5%)
  -webkit-filter: sepia($intensity)
  filter: sepia($intensity)         

.gt-avatar > img
  @include sepia-filter(26%)
  transition: filter 0.3s ease
  &:hover
    @include sepia-filter(0%)

.gt-avatar
    box-shadow: 0 0 15px $charcoal
    width: 170px
    height: 170px
    border-radius: 50%
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
    margin: 3em auto
    img
        width: 100%
        height: 100%
        object-fit: cover
.gt-tools
    display: grid
    justify-items: center
    align-items: center
    gap: 1em
    @media screen and (min-width: 700px)
        grid-template-columns: 1fr 1fr
    .gt-tool
        margin: 1em
        diplay: flex
        flex-direction: column
        padding: 0.5em 1em
        border-radius: 0.3em
        box-shadow: 0 0 5px $charcoal

</style>
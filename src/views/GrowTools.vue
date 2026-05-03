<script setup lang="ts">
import GrowDashboardMockup from '@/components/GrowTools/GrowDashboardMockup.vue';
import TestingChart from '@/components/GrowTools/TestingChart.vue';
import MetrcCleanupDemo from '@/components/GrowTools/MetrcCleanupDemo.vue';
import { useSocials } from '@/composables/socials';
document.title = "Adam Loewen | Cannabis Industy Operations";
const { socials } = useSocials();
</script>
<template>
    <div class="gt-container">
        <section id="hero" class="gt-section gt-hero">
            <div class="gt-hero-left">
                <h1 class="gt-heading">Adam Loewen</h1>
                <h2 class="gt-subheading">Cannabis Reporting & Workflow Automation</h2>
                <div class="gt-avatar">
                    <img src="@/assets/img/mega-adam-avatar.webp" alt="Adam Loewen avatar">
                </div>
                <p class="gt-text">Helping Oregon operators reduce spreadsheet chaos, clean up Metrc workflows, and automate repetitive tasks.
                    I come equipped with modern software skills and hands-on industry experience.
                </p>
                <a href="/Contact">Send Me a Workflow Problem</a>
                <div style="display: flex; justify-content: center;">
                    <a class="gt-button-2" href="#solutions">Example Tools</a>
                    <a href="/Contact" class="gt-button">Contact Me</a>
                </div>
                <p class="gt-text">
                    View my <a href="https://github.com/invisispider" target="_blank">GitHub projects</a>
                    , or <a href="https://www.upwork.com/freelancers/~01527a09cdcfd75500" target="_blank" >Upwork Freelancer Profile</a>
                </p>
                <!-- <p class="gt-tagline">
                    Google Sheets • Metrc Workflows • Reporting Automation • Custom Utilities
                </p> -->
                <!-- <p class="gt-text">
                Custom tooling built with modern web technologies,
                Google Apps Script, and lightweight automation systems.
                </p> -->
                <p class="gt-tagline">
                Vue • Python • Google Apps Script • Sheets Automation • Dashboards • Metrc Workflows
                </p>
            </div>
            <GrowDashboardMockup />
        </section>
        <section id="clients" class="gt-section">
            <h2>Built for teams who think structurally</h2>
            <p class="gt-tagline">
                If your operations overview is split between spreadsheets, PDFs, and Metrc exports —
                this is for you. Do any of these sound familiar?
            </p>
            <ul>
                <li>Repetitive manual copy/paste tasks</li>
                <li>Inflexible lab COAs and app exports</li>
                <li>Multiple "sources of truth"</li>
                <li>Patchwork fixes to inventory discrepancies</li>
                <li>Emergency late night inventory audits</li>
            </ul>
            <p class="gt-text">Most producers care about their products deeply, but they figure out their data systems as they go. They sometimes 
            miss out on time, money, and stress-saving best practices that other players already take advantage of.
            </p>
            <p class="gt-text">We want software that scales, software that shows the business information at a glance, 
                that says exactly what the status of everything is, that suggests ways we can improve. Pull up your yields,
                top figures, averages, and alerts. Compare the realtime performance of strains, procedures, or partners.
            </p>
        </section>
        <section id="solutions" class="gt-section">
            <h2>Problems and Solutions</h2>
            <div class="gt-card-container">
                <div class="gt-card">
                <header>Messy spreadsheets → structured systems</header>
                    <p>Clean and standardize cultivation inventory tracking in Sheets or Excel.</p>
                    <ul>
                        <li>clean up errors, formulas, and duplicates</li>
                        <li>Apps Script to import and compare reports</li>
                        <li>automated template generation</li>
                        <li>future-proof data design</li>
                    </ul>
                </div>
                <div class="gt-card">
                    <header>Operations → dashboards</header>
                    <p>Turn fragmented operational data into clear KPIs and visual dashboards.</p>
                    <ul>
                        <li>track yields, trends, and inventory</li>
                        <li>increase data visibility and efficiency</li>
                        <li>custom aggregate and summary stats</li>
                        <li>integrate BI, Charts, Tableau, JS, Python</li>
                    </ul>
                </div>
                <div class="gt-card">
                    <header>Manual workflows → automation</header>
                    <p>Automate repetitive updating and syncing, using Apps Script and lightweight tooling.</p>
                    <ul>
                        <li>email lab result summaries</li>
                        <li>automated Metrc report updates</li>
                        <li>spreadsheet reset/duplication</li>
                    </ul>
                    </div>
                <div class="gt-card">
                    <header>Sticky laptop → mobile capture</header>
                    <p>Browser-based UIs enable onsite mobile users to update source data in real-time.</p>
                    <ul>
                        <li>QA and compliance logging</li>
                        <li>clone propagation</li>
                        <li>harvest entry</li>
                        <li>waste disposal</li>
                    </ul>
                </div>
            </div>
        </section>
        <TestingChart />
        <section class="gt-section">
            <h2>Example Project Description</h2>
            
            <div class="gt-card">
                <header>Lab COAs → Structured Operational Data</header>
                <p><b>Problem:</b><br>
                    Many labs offer unique formatted lab reports, 
                    designed for human reading, not data extraction.
                    Producer manually copies test results 
                    from PDFs, which is time-consuming and error-prone.
                </p>
                <p><b>Solution:</b><br>
                    Python-based extraction tool to:
                </p>
                <ul>
                    <li>parse multiple lab PDF layouts</li>
                    <li>normalize test result formats</li>
                    <li>convert reports into structured CSV data</li>
                    <li>update existing plant/package records</li>
                </ul>
                <img src="@/assets/img/growtools_workflow.webp" alt="Workflow example" class="gt-workflow-img" />
                <p>
                    <b>Result:</b> <br>Reduced manual data entry 
                    and improved product quality metrics visibility.
                    As production scales, it becomes increasingly difficult to manage a huge archive of 
                    reports with different formats. 
                    <span style="font-weight: 600;" class="text-slate">
                    It's time to get ahead of this problem once you 
                    start to notice it.</span>
                </p>
            </div>
            <a
                href="https://github.com/invisispider/pdf-coa-to-csv"
                target="_blank"
                class="gt-button-2"
            >
                View on GitHub
            </a>
        </section>
        <section class="gt-section">
            <h2>How it works</h2>
            <p>No expensive platform migration required.
            Most improvements build on tools your team already uses.
            </p>
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
            <p>Most fixes take the form of lightweight scripts, dashboards, or data pipelines.</p>
            <p>Cannabis teams have <b class="text-slate">NO TIME</b> for repetitive work in 
                <span class="text-slate"><b>spreadsheets, databases,</b> and <b>web exports.</b></span>
            </p>
        </section>
        <MetrcCleanupDemo />
        <section id="cta" class="gt-section gt-footer">    
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
<style lang="sass">
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
    max-width: 100vw
    overflow-x: scroll
    ul
        padding-left: 0
        list-style-position: inside
.gt-section:nth-child(even)
    background-color: rgba(255,255,255,0.5)
.gt-section
    border-bottom: 1px solid rgba(0,0,0,0.08)
    width: min(1200px, 92%)
    max-width: 60ch
    margin-inline: auto
    // padding: 0
    @media screen and (min-width: 600px)
        padding: 4rem 1rem
    @media screen and (min-width: 1100px)
        max-width: 80ch
.gt-heading
    width: 100%
    color: $charcoal
    font-size: clamp(2.8rem, 6vw, 5rem)
    line-height: 0.95
    font-weight: 800
.gt-subheading
    color: $muted-green
    font-size: clamp(1.3rem, 2vw, 2rem)
    font-weight: 500
.gt-tagline
    color: $slate
p, li, h3
    color: $charcoal

.gt-card-container
    display: grid
    justify-items: center
    gap: 1em
    @media screen and (min-width: 800px)
        grid-template-columns: 1fr 1fr
    .gt-card
        border-radius: 1em
        padding: 1.5rem
        background-color: white
        width: 100%
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
    &:hover
        background-color: color.adjust($charcoal, $lightness: +55%)    
.gt-button
    background-color: color.adjust($charcoal, $lightness: +60%)
.gt-button-2
    border: 1px solid $charcoal
.gt-hero
    display: grid
    align-items: center
    grid-template-columns: 1fr
    @media screen and (min-width: 600px)
        gap: 4rem
    @media screen and (min-width: 900px)
        grid-template-columns: 1.1fr 0.9fr
.gt-hero-left
    align-self: flex-start
    border: 1px solid $soft-off-white
    .gt-button
        justify-self: center
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
    @include sepia-filter(56%)

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
        display: flex
        flex-direction: column
        padding: 0.5em 1em
        border-radius: 0.3em
        box-shadow: 0 0 5px $charcoal

.gt-table-wrapper
    width: 100%
    overflow-x: auto
    table
        max-width: 100%
        margin-inline: auto
        border-collapse: collapse
        width: 500px
        font-size: clamp(1rem, 2vw, 2rem)
    td:hover, th:hover
        background-color: rgba(0,0,0,0.3)
.gt-workflow-img
    width: 100%
    // margin: 1em 0
    // padding: 1em 0
    // display: block
    border-radius: 1rem
    border: 1px solid rgba(0,0,0,0.08)
    box-shadow: 0 4px 18px rgba(0,0,0,0.06)
</style>
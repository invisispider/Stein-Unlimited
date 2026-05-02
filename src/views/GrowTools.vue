<script setup lang="ts">
import GrowDashboardMockup from '@/components/GrowDashboardMockup.vue';
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
                <!-- <h4>Independent automation and reporting tools for growers, processors, labs, and dispensaries.</h4> -->
                <p class="gt-text">Helping Oregon cannabis operators reduce spreadsheet chaos, automate reporting tasks, and improve operational visibility.</p>
                <!-- <RouterLink class="gt-button" to="/Contact">
                    Tell Me About Your Workflow 
                </RouterLink> -->
                <div class="gt-avatar">
                    <img src="@/assets/img/mega-adam-avatar.webp" alt="Adam Loewen avatar">
                </div>
                <div style="display: flex;">
                    <a class="gt-button-2" href="tools">Example Tools</a>
                    <a href="/Contact" class="gt-button">Contact Me</a>
                </div>
                    <!-- <p>GitHub links, Short Loom/screen recordings</p> -->
            </div>
            <div style="margin: auto;" class="gt-hero-right">
                <GrowDashboardMockup />
                <!-- <ul>
                    <li>inventory chart</li>
                    <li>spreadsheet preview</li>
                    <li>KPI cards</li>
                    <li>reconciliation warnings</li>
                </ul> -->
            </div>            
        </section>
        <section id="tools" class="gt-section">
            <h2>Services</h2>
            <p>Focused operational tooling for cannabis businesses 
                using spreadsheets, Metrc exports, PDFs, and reporting workflows.</p>
            <div class="gt-card-container">
                <div class="gt-card">
                    <header>Lab Data Conversion</header>
                    <h3></h3>
                Convert PDF lab reports into clean spreadsheets, CSVs, and searchable datasets.
                    <p></p>
                Potential examples:
                    <ul>
                        <li>COA extraction</li>
                        <li>bulk report processing</li>
                        <li>CSV normalization</li>
                        <li>automated reporting pipelines</li>
                    </ul>
                    <p>Suggested visual: PDF → Table transformation graphic.</p>
                </div>            
                <div class="gt-card">
                    <header>Spreadsheet Cleanup & Standardization</header>
                    <h3>Fix messy cultivation spreadsheets, standardize inventory tracking, and improve reporting reliability.</h3>
                    <p>Potential examples:</p>
                    <ul>
                        <li>duplicate cleanup</li>
                        <li>inventory structure</li>
                        <li>standard templates</li>
                        <li>reporting consistency</li>
                    </ul>
                    <p>Suggested visual: before/after spreadsheet comparison.</p>
                </div>
                <div class="gt-card">
                    <header>Dashboards & Operational Visibility</header>
                    <h3>Inventory summaries, production metrics, KPI dashboards, and operational reporting tailored to your workflow.</h3>
                    <p>Potential examples:</p>
                    <ul>
                        <li>yield tracking</li>
                        <li>production trends</li>
                        <li>inventory snapshots</li>
                        <li>mobile-friendly dashboards</li>
                    </ul>
                    <p>Suggested visual: dashboard KPI cards.</p>
                </div>
                <div class="gt-card">
                    <header>Metrc Validation & Reconciliation</header>
                    <h3>Catch formatting issues, mismatches, and reporting errors before they become operational problems.</h3>
                    <p>Potential examples:</p>
                    <ul>
                        <li>inventory reconciliation</li>
                        <li>package validation</li>
                        <li>import formatting</li>
                        <li>discrepancy checks</li>
                    </ul>
                    <p>Suggested visual: warning/errors panel.</p>                
                </div>
                <div class="gt-card">
                    <header>Google Sheets Automation</header>
                    <h3>Apps Scripts, scheduled reports, automated notifications, exports, and workflow integrations.</h3>
                    <p>Potential examples:</p>
                    <ul>
                        <li>email summaries</li>
                        <li>scheduled syncs</li>
                        <li>triggered workflows</li>
                        <li>reporting automation</li>
                    </ul>
                    <p>Suggested visual: automation flow diagram.</p>
                </div>
                <div class="gt-card">
                    <header>Mobile Data Entry Tools</header>
                    <h3>Simple mobile-friendly interfaces connected directly to operational spreadsheets and reporting systems.</h3>
                    <p>Potential examples:</p>
                    <ul>
                        <li>harvest entry</li>
                        <li>inventory updates</li>
                        <li>QA tracking</li>
                        <li>field logging</li>
                    </ul>
                    <p>Suggested visual: mobile mockup.</p>
                </div>
            </div>
        </section>
        <section id="examples" class="gt-section">
            <h2>Example Tools</h2>
            <div class="gt-tools">
                <div class="gt-tool">
                    <h3>Test Results to Spreadsheets</h3>
                    <p>Testing labs often put out PDF reports where it's difficult to simply "grab what you want"
                        and bring it into your own inventory tracking system.
                    </p>
                    <p>I work with labs and other licensees to connect systems for seamless and automated 
                        test reporting.
                    </p>
                </div>
                <div class="gt-tool">
                    <h3>Metrc Automation</h3>
                    <p>With or without an API key, I know of many ways to automate Metrc reporting, data 
                        reconciliation, and client log-in.
                    </p>
                    <p>Instead of being another data layer, we make your system work directly, and play 
                        nicely, with state regulatory tracking.
                    </p>
                </div>
                <div class="gt-tool">
                    <h3>Reporting Dashboard</h3>
                    <p>I can take your existing, proprietary data system (often spreadsheets) and use it to 
                        power real-time visual reporting in a single-source dashboard.
                    </p>
                    <p>See visual comparisons of your strains, their potency, productivity, and hardiness - the 
                        oft-neglected cultivation KPI figures can drive decisions that set your brand apart.
                    </p>
                </div>
                <div class="gt-tool">
                    <h3>Compliance Validation</h3>
                    <p>Small human errors can lead to major fines. I can install Apps Scripts and validation to your 
                        existing system to check your numbers against Metrc and other data sources.
                    </p>
                    <p>Being "fully compliant" ultimately means that your Metrc account perfectly reflects your 
                        facility reality on the ground. I can get us considerably closer.
                    </p>
                </div>
                <div class="gt-tool">
                    <h3>Metrc Recovery</h3>
                    <p>Lots of things can go wrong as you scale up - oops, every single entry with a 
                        mispelling has to be re-entered. 
                    </p>
                    <p>I can help you to recover from these issues, 
                        and also to design future-proof systems that scale with you.
                    </p>
                </div>
                <div class="gt-tool">
                    <h3>Yield Tracking</h3>
                    <p>Everyone has their own system. I don't want to change your system. I want 
                        to help your system work, no matter what happens.
                    </p>
                    <p>I can consult with you on the best ways to track and check your inventory, 
                        adding many automations and quality-of-life upgrades.
                    </p>

                </div>
                <!-- <p>Each should include:</p> -->
                <!-- <ul>
                    <li>screenshot</li>
                    <li>1 sentence outcome</li>
                    <li>optionally GitHub/demo link</li>
                </ul> -->
            </div>
        </section>
        <section id="clients" class="gt-section">
            <h2>Who This Is For</h2>
            <p>✅ Small cannabis operations using spreadsheets and manual workflows</p>
            <ul>
                <li>Growers</li>
                <li>Extraction Labs</li>
                <li>Processors</li>
                <li>Dispensaries</li>
            </ul>
        </section>
        <section id="process" class="gt-section">
            <h2>Process</h2>
            <p>1. Review Current Workflow</p>
            <p>Understand the reporting or operational bottleneck.</p>
            <p>2. Build Lightweight Solution</p>
            <p>Create an automation, dashboard, cleanup process, or reporting tool.</p>
            <p>3. Save Time & Reduce Friction</p>
            <p>Reduce repetitive work and improve visibility.</p>
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
$slate: #708090
$muted-green: #6e7864
$soft-off-white: #FAF9F6
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
.gt-avatar
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
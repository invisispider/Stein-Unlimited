<script setup lang="ts">
import GrowDashboardMockup from '@/components/GrowTools/GrowDashboardMockup.vue';
import TestingChart from '@/components/GrowTools/TestingChart.vue';
import MetrcCleanupDemo from '@/components/GrowTools/MetrcCleanupDemo.vue';
import { useSocials } from '@/composables/socials';
document.title = "Adam Loewen | Cannabis Industry Data Ops";
const { socials } = useSocials();
</script>
<template>
    <div class="gt-container">
        <p class="gt-head-banner">
        Web GUI • Python • Apps Script • Google Workspace Automation • Dashboards • Metrc Workflows
        </p>
        <section id="hero" class="gt-section gt-hero">
            <div class="gt-hero-left">
                <div class="gt-avatar">
                    <img src="@/assets/img/mega-adam-avatar.webp" alt="Adam Loewen avatar">
                </div>
                <h1 class="gt-heading">Adam Loewen</h1>
                <h2 class="gt-subheading">Cannabis Reporting & Workflow Automation</h2>
                <p class="gt-text" style="margin-inline: auto; max-width: 45ch;">
                    Helping Oregon operators reduce spreadsheet chaos, clean up Metrc workflows, and automate repetitive tasks.
                    I come equipped with modern software skills and hands-on industry experience. Reach out and send me your workflow problem!
                </p>
                <div style="display: flex; justify-content: center;">
                    <a class="gt-button-2" href="#solutions">Example Tools</a>
                    <a href="/Contact" class="gt-button">Contact Me</a>
                </div>
                <p class="gt-text">
                    View me on <a href="https://github.com/invisispider" target="_blank">GitHub</a>
                     or <a href="https://www.upwork.com/freelancers/~01527a09cdcfd75500" target="_blank" >Upwork</a>
                </p>
            </div>
            <GrowDashboardMockup />
        </section>
        <section id="clients" class="gt-section" style="text-align: left;">
            <h2>Built for teams who think structurally</h2>
            <p class="text-slate">
                Are your data operations split between spreadsheets, PDFs, and Metrc exports?
            </p>
            <ul class="gt-text">
                <li>Repetitive copy/paste tasks</li>
                <li>Inflexible apps and exports</li>
                <li>Multiple sources of truth</li>
                <li>Patchwork discrepancy repair</li>
                <li>Late night inventory audits</li>
            </ul>
            <p class="gt-text">Producers care about their products and data, but are slow to develop systems. 
                Align with time, money, and stress-saving best practices that other players already take advantage of.
                Software that scales, software that shows business information at a glance, 
                and suggests pathways to improvement. Pull up yields,
                top figures, averages, and alerts. Compare realtime performance of strains, procedures, and partners.
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
            <header>Lab COAs → Structured Operational Data</header>
            
            <p><b>Problem:</b></p>
            <p class="gt-text">Many labs offer unique formatted lab reports, 
                designed for human reading, not data extraction.
                Producer manually copies test results 
                from PDFs, which is time-consuming and error-prone.
            </p>
            <p><b>Solution:</b></p>
            <p class="gt-text">
                Python-based extraction tool to:
            </p>
            <ul class="gt-text">
                <li>parse multiple lab PDF layouts</li>
                <li>normalize test result formats</li>
                <li>convert reports into structured CSV data</li>
                <li>update existing plant/package records</li>
            </ul>
            <img src="@/assets/img/growtools_workflow.webp" alt="Workflow example" class="gt-workflow-img" />
            <p><b>Result:</b></p>
            <p class="gt-text">Reduced manual data entry 
                and improved product quality metrics visibility.
                As production scales, it becomes increasingly difficult to manage a huge archive of 
                reports with different formats. 
                <span class="gt-text text-slate" style="font-weight: 600;">
                It's time to get ahead of the problem once you 
                start to notice it.</span>
            </p>
            <a
                href="https://github.com/invisispider/pdf-coa-to-csv"
                target="_blank"
                class="gt-button-2"
            >
                View on GitHub
            </a>
        </section>
        <section class="gt-section" style="text-align: left;">
            <h2 style="text-align: center;">How it works</h2>
            <p class="gt-text">No expensive platform migration required.
            Most improvements build on tools your team already uses.
            </p>
            <p class="gt-text">
                You send me a real workflow, spreadsheet, or report.
                I turn it into something that runs cleaner, faster, or automatically.
            </p>
            <ul class="gt-text">
                <li>Remove manual copy/paste work</li>
                <li>Standardize messy data</li>
                <li>Automate repetitive reporting</li>
                <li>Connect tools that don’t currently talk to each other</li>
            </ul>
            <p class="gt-text">Most fixes take the form of lightweight scripts, dashboards, or data pipelines.</p>
            <p class="gt-text">Cannabis teams have <b class="text-slate">no time</b> for repetitive work in 
                <span class="text-slate"><b>spreadsheets, databases,</b> and <b>web exports.</b></span>
            </p>
        </section>
        <MetrcCleanupDemo />
        <section id="cta" class="gt-section">    
            <h2>Get in Touch</h2>
            <p class="gt-text">Annoying or repetitive workflow? Need better reporting?
            Get in touch with an example or question.</p>         
            <div class="gt-button">
                <RouterLink to="/Contact">Contact Form</RouterLink>
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
            <RouterLink to="/" class="gt-button-2">Stein unLimited Home</RouterLink>
        </section>
        <footer>
            <div v-for="social in socials" :key="social.name" class="gt-socials">
                <a :href="social.url" target="_blank">
                <img :src="social.link" class="social">
                </a>
            </div>
        </footer>
    </div>
</template>
<style lang="sass">
@use "sass:color"
$gt-color-black-fg: #36454F
$gt-color-white-bg: #FAF9F6
$gt-color-cream: #f9f9f9
$gt-color-blue-soft: lightBlue
$gt-color-slate: DarkSlateBlue
$gt-color-green: #4a7c59
$gt-color-green-muted: #6e7864
$gt-color-green-bg: #e8f5e9
$gt-color-green-fg: #2e7d32
$gt-color-red-bg: #ffebee
$gt-color-red-fg: #d64545
$gt-color-orange: #c07a2c
$gt-color-soft: #FAF9F6

$gt-border: rgba(0,0,0,0.08)
$gt-hover: rgba(0,0,0,0.3)
$gt-hover-green: color.adjust($gt-color-green-fg, $lightness: +20%)

.gt-container
    background-color: $gt-color-white-bg
    color: $gt-color-black-fg
    display: flex
    flex-direction: column
    max-width: 100vw

    .success, .note-success
        background-color: $gt-color-green-bg
        color: $gt-color-green-fg
    .error, .note-error
        background-color: $gt-color-red-bg 
        color: $gt-color-red-fg

    .text-slate
        color: $gt-color-slate
        ul
            padding-left: 0
            list-style-position: inside
    .gt-section:nth-child(even)
        background-color: rgba(255,255,255,0.5)
    .gt-section
        border-bottom: 1px solid $gt-border
        width: min(1200px, 92%)
        margin-inline: auto
        @media screen and (min-width: 600px)
            padding: 4rem 1rem
        &:not(.gt-hero)
            max-width: 60ch
            @media screen and (min-width: 1100px)
                max-width: 80ch
        &> p
            padding-block: 1.2rem
            text-align: left
        &> h2
            text-align: center
        &> ul
            text-align: left
            
    .gt-head-banner
        position: absolute
        top: 0
        left: 0
        right: 0
        margin: 0
        padding: 1rem
        background: linear-gradient(to top left, $gt-color-slate,  black)
        color: $gt-color-green-bg

    .gt-heading
        width: 100%
        color: $gt-color-black-fg
        font-size: clamp(2.8rem, 6vw, 5rem)
        line-height: 0.95
        font-weight: 800
    .gt-subheading
        color: $gt-color-green-muted
        font-size: clamp(1.3rem, 2vw, 2rem)
        font-weight: 500
        line-height: normal
    .gt-tagline
        color: $gt-color-slate
    p, li, h3
        color: $gt-color-black-fg

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
            border: 1px solid $gt-border
            &:hover
                transform: translateY(-3px)
                box-shadow: 0 8px 24px rgba(0,0,0,0.08)
            header
                font-size: 1.3em
                border-bottom: 1px solid $gt-color-black-fg
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
    .gt-button, .gt-button-2, .gt-reset-button
        display: inline-flex
        align-items: center
        justify-content: center
        padding: 0.6rem 1.4rem
        border-radius: 999px
        margin: 1rem 1rem 1rem 0
        font-weight: 600
        font-size: 0.9rem
        transition: 0.2s ease
        border: 1px solid $gt-border
    .gt-button
        background-color: color.adjust($gt-color-black-fg, $lightness: +60%)
        &:hover
            background-color: color.adjust($gt-color-black-fg, $lightness: +55%)    
    .gt-button-2
        background-color: $gt-color-slate
        color: $gt-color-cream !important
        &:hover
            background-color: color.adjust($gt-color-slate, $lightness: +25%)    
    .gt-reset-button
        background-color: color.adjust($gt-color-blue-soft, $lightness: -25%)    
        &:hover
            background-color: $gt-color-blue-soft

    .gt-hero
        display: grid
        align-items: center
        grid-template-columns: 1fr
        margin-top: 6rem
        @media screen and (min-width: 1000px)
            margin-top: 3rem
            gap: 4rem
            grid-template-columns: 1fr 2fr
    .gt-hero-left
        align-self: flex-start
        .gt-button
            justify-self: center

    @mixin sepia-filter($intensity: 5%)
        -webkit-filter: sepia($intensity)
        filter: sepia($intensity)         

    .gt-avatar > img
        @include sepia-filter(46%)
        transition: filter 0.3s ease
        &:hover
            @include sepia-filter(26%)

    .gt-avatar
        box-shadow: 0 0 15px $gt-color-black-fg
        width: 170px
        height: 170px
        border-radius: 50%
        overflow: hidden
        display: flex
        align-items: center
        justify-content: center
        margin: 2em auto
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
            box-shadow: 0 0 5px $gt-color-black-fg


    .gt-table-wrapper
        width: 100%
        overflow-x: auto
        table
            max-width: 100%
            margin-inline: auto
            border-collapse: collapse
            width: 500px
            font-size: clamp(1rem, 2vw, 2rem)
        td:hover
            opacity: 0.7
            background-color: $gt-hover
        th:hover
            background-color: $gt-hover-green
    .gt-workflow-img
        width: 100%
        border-radius: 1rem
        border: 1px solid $gt-border
        box-shadow: 0 4px 18px $gt-border

    footer
        display: flex
        flex-wrap: wrap
        justify-content: center
        margin-block: 0
        padding-block: 1rem 0.3rem
        // background: linear-gradient(to top, black, $gt-color-slate)

    .gt-socials
        max-width: 100vw
        *
            margin-inline: 1rem
            max-width: 2.2rem
        img
            transition: scale 0.2s
        img:hover
            scale: 1.2


    .note-error, .note-success
        font-weight: 600
        border-radius: 2em
        padding: 0.5rem 1rem
        margin-bottom: 1rem
        max-width: 600px
        text-align: center
        margin-inline: auto
    .fade-enter-active
        transition: opacity 5s ease
    .fade-leave-active
        transition: opacity 0.25s ease
    .fade-enter-from,
    .fade-leave-to
        opacity: 0


    // Metrc Cleanup Section
    .gt-metrc-cleanup
        padding: 1rem
        background: $gt-color-cream
        border: 1px solid #ddd
        border-radius: 8px
        th, td
            padding: 0.5rem 1rem
            border: 1px solid #ccc
        td
            font-size: 1rem
            transition: all 0.75s ease
        th
            color: $gt-color-green-bg
            background-color: $gt-color-green-fg
        table
            border-collapse: collapse
            width: 100%
        button
            margin-inline: 1rem
        .material-icons
            vertical-align: middle
            margin-left: 0.1rem
            &:hover
                color: #000



    // Grow Dashboard Styles

    .dashboard
        overflow-x: scroll
        background: white
        border-radius: 1rem
        box-shadow: 0 10px 30px $gt-border
        @media screen and (max-width: 600px) 
            margin: 0
        @media screen and (min-width: 600px)
            padding: 1rem
    
        .kpi-grid
            display: grid
            grid-template-columns: repeat(4, 1fr)
            gap: 1rem
            margin-bottom: 1.5rem
    
        .kpi-card
            background: $gt-color-soft
            padding: 1rem
            border-radius: 0.8rem
            border: 1px solid $gt-border
            transition: transform 0.2s ease  
            &:hover
                transform: translateY(-2px)
    
        .kpi-label
            font-size: 0.75rem
            color: $gt-color-green-muted
        
        .kpi-value
            font-size: 1.4rem
            font-weight: 700
            color: $gt-color-black-fg
        
        .kpi-trend
            font-size: 0.75rem
            margin-top: 0.25rem
            color: $gt-color-green-muted
        
        .main-grid
            display: grid
            grid-template-columns: 2fr 1fr
            gap: 1rem
            margin-bottom: 1.5rem
    
        .panel
            background: $gt-color-soft
            border: 1px solid $gt-border
            border-radius: 0.8rem
            padding: 1rem
        
        .panel-title
            font-weight: 600
            margin-bottom: 0.8rem
            color: $gt-color-black-fg
        
        /* CHART */
        .chart
            display: flex
            align-items: flex-end
            gap: 6px
            height: 180px
            padding: 0.5rem 0

        .bar
            flex: 1
            background: linear-gradient(to top, $gt-color-green-muted, $gt-color-green)
            border-radius: 4px
            opacity: 0.8
            transition: opacity 0.2s ease
            &:hover
                opacity: 1
    
        .chart-caption
            font-size: 0.75rem
            color: $gt-color-green-muted
            margin-top: 0.5rem
        
        /* ALERTS */
        .alert
            font-size: 0.85rem
            margin-bottom: 0.5rem
            padding: 0.4rem 0.6rem
            border-radius: 0.4rem
            background: rgba(0,0,0,0.03)

        th, td
            text-align: left
            border-bottom: 1px solid $gt-border
            @media screen and (min-width: 600px)
                padding: 0.5rem

    .alert.ok
        color: $gt-color-green

    .alert.warning
        color: $gt-color-orange

    .alert.info
        color: $gt-color-green-muted
    
    .active
        color: $gt-color-green

    .pending
        color: $gt-color-orange

</style>
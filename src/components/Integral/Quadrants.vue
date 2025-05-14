<script setup lang="ts">
import {ref, computed} from "vue"
import { useMonitorSize } from '@/composables/monitor-size';
import injectMarkdown from "@/composables/injectMarkdown";
import integral_quadrants from "@/content/integral_quadrants.md?raw";

const htmlBase = injectMarkdown(integral_quadrants, "BASE SECTION");
const htmlHori = injectMarkdown(integral_quadrants, "HORI SECTION");
const htmlVert = injectMarkdown(integral_quadrants, "VERT SECTION");
const htmlUL = injectMarkdown(integral_quadrants, "UL SECTION");
const htmlUR = injectMarkdown(integral_quadrants, "UR SECTION");
const htmlLL = injectMarkdown(integral_quadrants, "LL SECTION");
const htmlLR = injectMarkdown(integral_quadrants, "LR SECTION");


type QuadRef = 'base'|'up-down'|'left-right'|'upper-left'|'upper-right'|'lower-left'|'lower-right'; 
const sizes = useMonitorSize();
const quadRef = ref('base')
const changeQuad = (sel: QuadRef) => {
    quadRef.value=sel
    window.scrollTo(0, 0);
}
const screenBig = computed(()=>{
    if(sizes.browserWidth.value > 475) {
        return true
    } else {
        return false
    }    
})
const emit = defineEmits(['next'])
</script>
<template>
    <div class="quads-container">
        <template v-if="quadRef==='base'">
            <h1 id="base">Quadrants</h1>
            <p class="desc">
                <span class="pedantic">Click map elements for more info.</span>
                Quadrants are like dimensions of consciousness, offering 
                four simultaneous perspectives on anything real. 
                Left is subjectivity, Right is objectivity,
                Upper is individuality, Lower is groups. A rainbow of Levels reflects across
                Upper-Left (UL) "I", LL "We", UR "It", and LR "Its", illustrating the emergence
                and interplay of remarkably similar themes 
                in the four inter-penetrating perspectives of self, culture, local and systemic nature. 
            </p>
        </template>
        <!-- width="757.66882"
        height="766.45337" -->
        <svg id="svg1"
            class="quadrants-svg"
            viewBox="0 0 757.66882 766.45337"
            version="1.1"
            inkscape:version="1.3.2 (091e20ef0f, 2023-11-25, custom)"
            sodipodi:docname="QuadrantsModel2.svg"
            inkscape:export-filename="../../../../../Videos/QuadrantsModel2.png"
            inkscape:export-xdpi="200"
            inkscape:export-ydpi="200"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs id="defs1" />
            <g
                id="layer1"
                inkscape:label="Layer 1"
                inkscape:groupmode="layer"
                transform="translate(-340.40192,0.39228249)"
                style="display:inline">
                <rect id="rect1"
                style="fill:#000000; cursor: pointer;"
                width="753.27649"
                height="766.45337"
                x="342.59808"
                y="-0.39228249"
                sodipodi:insensitive="true"
                @click="changeQuad('base')" />
                <g
                    id="g8"
                    class="circles"
                    sodipodi:insensitive="true">
                    <circle
                        id="circle1"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="320"
                        fill="#ffffff"
                        style="fill:#ffffff;fill-opacity:0.6" />
                    <circle
                        id="circle2"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="280"
                        fill="#800080"
                        style="fill:#800080;fill-opacity:0.6" />
                    <circle
                        id="circle3"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="240"
                        fill="#4b0082"
                        style="fill:#4b0082;fill-opacity:0.6" />
                    <circle
                        id="circle4"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="200"
                        fill="#008080"
                        style="fill:#008080;fill-opacity:0.6" />
                    <circle
                        id="circle5"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="160"
                        fill="#008000"
                        style="fill:#008000;fill-opacity:0.6" />
                    <circle
                        id="circle6"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="120"
                        fill="#ffa500"
                        style="fill:#ffa500;fill-opacity:0.6" />
                    <circle
                        id="circle7"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="80"
                        fill="#ff0000"
                        style="fill:#ff0000;fill-opacity:0.6" />
                    <circle
                        id="circle8"
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="40"
                        fill="#808080"
                        style="fill:#808080;fill-opacity:0.598715" 
                    />
                </g>
                <rect
                id="rect2"
                style="fill:#002525;fill-opacity:1;stroke-width:0.919193"
                width="640.1665"
                height="17.569132"
                x="399.7363"
                y="366.75562"
                sodipodi:insensitive="true" />
                <rect
                id="rect3"
                style="fill:#001c1c;fill-opacity:0.60766423;stroke-width:0.919017"
                width="639.92004"
                height="17.569132"
                x="-697.06543"
                y="710.45178"
                transform="rotate(-90)" />
                <text
                id="text4"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="614.91962"
                y="740.09967"
                sodipodi:insensitive="true"
                @click="changeQuad('up-down')"><tspan
                    id="tspan4"
                    class="quadrant-text"
                    sodipodi:role="line"
                    x="614.91962"
                    y="740.09967"
                    style="font-size:37.3333px;fill-opacity:1">COLLECTIVE</tspan></text>
                <text
                id="text5"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="-469.67712"
                y="390.17166"
                transform="rotate(-90)"
                sodipodi:insensitive="true"
                @click="changeQuad('left-right')"><tspan
                    id="tspan5"
                    class="quadrant-text"
                    sodipodi:role="line"
                    x="-469.67712"
                    y="390.17166"
                    style="font-size:37.3333px;fill-opacity:1">INTERNAL</tspan></text>
                <text
                id="text6"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="289.78571"
                y="-1050.3049"
                transform="rotate(90)"
                sodipodi:insensitive="true"
                @click="changeQuad('left-right')"><tspan
                    id="tspan6"
                    class="quadrant-text"
                    sodipodi:role="line"
                    x="289.78571"
                    y="-1050.3049"
                    style="font-size:37.3333px;fill-opacity:1">EXTERNAL</tspan></text>
                <text
                id="text3"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="614.91962"
                y="50.51125"
                sodipodi:insensitive="true"
                @click="changeQuad('up-down')"><tspan
                    id="tspan3"
                    class="quadrant-text"
                    sodipodi:role="line"
                    x="614.91962"
                    y="50.51125"
                    style="font-size:37.3333px;fill-opacity:1">INDIVIDUAL</tspan></text>
                <g class="quad-group" @click="changeQuad('upper-left')">
                    <title>Internal Individual UPPER LEFT "I/Me": 1-p singular</title>
                    <rect
                    id="rect8"
                    x="380"
                    y="100"
                    width="300"
                    height="160"
                    rx="20"
                    ry="20"
                    opacity="0.8"
                    class="quad-highlight shadow-box"
                    style="display:inline;opacity:0.899441;fill-opacity:1;stroke:none;stroke-width:0;stroke-dasharray:none" />
                    <text
                id="text7"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="477.10272"
                y="190.27974"><tspan
                    id="tspan7"
                    sodipodi:role="line"
                    x="477.10272"
                    y="190.27974">UL</tspan></text>
                    <text
                    id="text11"
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="438.8801"
                y="231.37941"
                @click="changeQuad('upper-left')"><tspan
                    id="tspan11"
                    sodipodi:role="line"
                    x="438.8801"
                    y="231.37941">1st person &quot;I&quot;</tspan></text>

                </g>
                <g class="quad-group" @click="changeQuad('lower-left')">
                <title>Internal Collective LOWER LEFT "You/We": second-person plural</title>
                <rect
                id="rect9"
                x="380"
                y="510"
                width="300"
                height="160"
                rx="20"
                ry="20"
                opacity="0.8"
                class="shadow-box quad-highlight"
                style="opacity:0.899441;fill-opacity:1" />
                <text
                id="text13"
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="423.10818"
                y="639.66559"><tspan
                    id="tspan13"
                    sodipodi:role="line"
                    x="423.10818"
                    y="639.66559">2-p plural &quot;We&quot;</tspan></text>                    
                    <text
                id="text10"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="483.28934"
                y="598.01611"><tspan
                    id="tspan10"
                    sodipodi:role="line"
                    x="483.28934"
                    y="598.01611">LL</tspan></text>

                </g>
                <g class="quad-group" @click="changeQuad('upper-right')">
                <title>External Individual UPPER RIGHT "It": third-person singular</title>
                <rect
                id="rect10"
                x="755"
                y="100"
                width="300"
                height="160"
                rx="20"
                ry="20"
                opacity="0.8"
                class="shadow-box quad-highlight"
                style="opacity:0.899441;fill-opacity:1" />
                <text
                    id="text8"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="847.49469"
                y="188.0836"
                @click="changeQuad('upper-right')"><tspan
                    id="tspan8"
                    sodipodi:role="line"
                    x="847.49469"
                    y="188.0836">UR</tspan></text>
                    <text
                id="text12"
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="803.87213"
                y="233.37941"
                @click="changeQuad('upper-right')"><tspan
                    id="tspan12"
                    sodipodi:role="line"
                    x="803.87213"
                    y="233.37941">3rd person &quot;It&quot;</tspan></text>

                </g>
                <g class="quad-group" @click="changeQuad('lower-right')">
                <title>External Collective LOWER RIGHT "Its/They": third-person plural</title>
                <rect
                id="rect11"
                x="755"
                y="510"
                width="300"
                height="160"
                rx="20"
                ry="20"
                opacity="0.8"
                class="shadow-box quad-highlight"
                style="opacity:0.899441;fill-opacity:1" />
                <text
                    id="text9"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="853.68134"
                y="600.21222"
                @click="changeQuad('lower-right')"><tspan
                    id="tspan9"
                    sodipodi:role="line"
                    x="853.68134"
                    y="600.21222">LR</tspan></text>
                    <text
                    id="text14"
                    class="fill-text"
                    xml:space="preserve"
                    style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                    x="803.23615"
                    y="639.66559"
                    @click="changeQuad('lower-right')"><tspan
                        id="tspan14"
                        sodipodi:role="line"
                        x="803.23615"
                        y="639.66559">3-p plural &quot;Its&quot;</tspan></text>
                </g>
            </g>
        </svg>
        <template v-if="quadRef==='base'">
            <div id="base" v-html="htmlBase"></div>
            <table>
                <tbody>
                <tr>
                    <th>UL: iNtuition</th>
                    <th>UR: Sensing</th>
                </tr>
                <tr>
                    <th>LL: Feeling</th>
                    <th>LR: Thinking</th>                        
                </tr>
                </tbody>
            </table>
            <p>As we observe repeatedly, each Quadrant can be viewed through a Quadrant, which 
                results in the compounded multiplicity of perspectives we encounter in Jungian types as well 
                as Quadrants. The "extraversion" and "superiority" of cognitive functions 
                give us Quadrants to view these Quadrants through. This is to say that many, or most,
                Typologies, or the Types Element itself, can largely be seen as another way of expressing 
                Quadrants, this case in human personality. 
            </p>
            <h3>States and Quadrants</h3>
            <p>
                Most descriptions of transcendental or spiritualized states of consciousness 
                seem to relate a dissolution of Quadrants as illusory. The enlightened being 
                has gone beyond self, become one with all of existence, experiences deep 
                interpenetrating communion with all sentient beings, vanishes into the unbounded
                infinite void of the kosmos, understands itself to be nothing but the eternal 
                awareness of material reality, feels the world and people around itself
                as its own skin, expresses radical loving compassion that sees deeper into you than you do, 
                is radiantly annointed with the light of creation. <b>Sound familiar?</b>
                Nearly all descriptions of spirituality across time and tradition involve transcending 
                the mentally constructed boundaries of Quadrants. In other words, nondual enlightenment 
                can be expressed as the experience of being entirely I, We, It, and Its, at once, 
                because this is always already the case.
                You are just as much the story of your life as you are a speck of Universe, just as much a 
                representative of humanity as you are a detatched observer. This is all One thing. 🍣 You.
            </p>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('left-right')">LEFT AND RIGHT QUADRANTS</h5>
            <h5 class="pedantic" style="cursor: pointer;" @click="emit('next')">TYPES</h5>
        </template>
        <template v-else-if="quadRef==='left-right'">
            <div id="lefft-right" v-html="htmlHori"></div>
            <h3>Meta-Levels of Quadrants</h3>
            <table v-if="screenBig" class="int-table disappear">
                <tbody>
                <tr>
                    <th>Analogy</th>
                    <th>Level</th>
                    <th>Bands</th>
                    <th>UL</th>
                    <th>UR</th>
                    <th>LL</th>
                    <th>LR</th>
                </tr>
                <tr class="cosmic-rays">
                    <td>Cosmic Rays</td>
                    <td>?</td>
                    <td></td>
                    <td colspan=4></td>
                </tr>
                <tr class="cosmic-rays">
                    <td>UV Range</td>
                    <td>Union</td>
                    <td>States</td>
                    <td colspan=4></td>
                </tr>
                <tr class="rainbow-me">
                    <td>Visible Light</td>
                    <td>Mind</td>
                    <td>Altitudes</td>
                    <td>Me</td>
                    <td>This</td>
                    <td>Us</td>
                    <td>Everything</td>
                </tr>
                <tr>
                    <td>Infrared</td>
                    <td>Life</td>
                    <td>Phylogeny</td>
                    <td>Instinct</td>
                    <td>Creature</td>
                    <td>Life</td>
                    <td>Earth</td>
                </tr>
                <tr>
                    <td>Microwave</td>
                    <td>Substance</td>
                    <td>Chemistry</td>
                    <td rowspan="2">Existence</td>
                    <td>Molecule</td>
                    <td rowspan="2">Forces</td>
                    <td>Star System</td>
                </tr>
                <tr>
                    <td>Radio</td>
                    <td>Matter</td>
                    <td>Physics</td>
                    <td>Atom</td>
                    <td>Universe</td>
                </tr>
                </tbody>
            </table>
            <p v-else class="pedantic">Turn device horizontal to view</p>
            <h3>Visible Spectrum of Mind</h3>
            <table v-if="screenBig" class="int-table disappear">
                <tbody>
                <tr>
                    <th>Analogy</th>
                    <th>Level</th>
                    <th>UL</th>
                    <th>UR</th>
                    <th>LL</th>
                    <th>LR</th>
                    <!-- <th></th> -->
                </tr>
                <tr class="cosmic-rays">
                    <td>Clearlight</td>
                    <td>12</td>
                    <td colspan=4>Nondual Unity</td>
                    <!-- <th rowspan=4>Third Tier</th> -->
                </tr>
                <tr class="t-ultraviolet">
                    <td>Ultraviolet</td>
                    <td>11</td>
                    <td>Witness</td>
                    <td>Consciousness</td>
                    <td>Oneness</td>
                    <td>Emptiness</td>
                </tr>
                <tr class="t-violet">
                    <td>Violet</td>
                    <td>10</td>
                    <td>Subtle</td>
                    <td>Psyche-Consciousness</td>
                    <td>Communion</td>
                    <td>Vision</td>
                </tr>
                <tr class="t-indigo">
                    <td>Indigo</td>
                    <td>9</td>
                    <td>Psychic</td>
                    <td>Psyche</td>
                    <td>Affinity</td>
                    <td>Intuition</td>
                </tr>
                <tr class="t-turquoise">
                    <td>Turquoise</td>
                    <td>8</td>
                    <td>Centauric</td>
                    <td>Psyche-Ego</td>
                    <td>Holonic</td>
                    <td>Holistic Mesh</td>
                    <!-- <th rowspan=2>Second Tier</th> -->
                </tr>
                <tr class="t-teal">
                    <td>Teal</td>
                    <td>7</td>
                    <td>Developer</td>
                    <td>Stage-Aware Ego</td>
                    <td>Integral</td>
                    <td>Growth Networks</td>
                </tr>
                <tr class="t-green">
                    <td>Green</td>
                    <td>6</td>
                    <td>Sensitive</td>
                    <td>Ironic Ego</td>
                    <td>Pluralistic Inclusion</td>
                    <td>Value Communities</td>
                    <!-- <th rowspan=6>First Tier</th> -->
                </tr>
                <tr class="t-orange">
                    <td>Orange</td>
                    <td>5</td>
                    <td>Rational Achiever</td>
                    <td>Earnest Ego</td>
                    <td>Contractual Order</td>
                    <td>Corporate States</td>
                </tr>
                <tr class="t-amber">
                    <td>Amber</td>
                    <td>4</td>
                    <td>Absolutist Myth</td>
                    <td>Conformist Personality</td>
                    <td>Dogma</td>
                    <td>Early Nations</td>
                </tr>
                <tr class="t-red">
                    <td>Red</td>
                    <td>3</td>
                    <td>Impulsive Opportunist</td>
                    <td>Selfish Personality</td>
                    <td>Legend</td>
                    <td>Feudal Empires</td>
                </tr>
                <tr class="t-magenta">
                    <td>Magenta</td>
                    <td>2</td>
                    <td>Magical Fantasy</td>
                    <td>Dependent Personality</td>
                    <td>Lore</td>
                    <td>Ethnic Tribes</td>
                </tr>
                <tr class="t-infrared">
                    <td>Infrared</td>
                    <td>1</td>
                    <td>Quadrant Fusion</td>
                    <td>Phenotypic Personality</td>
                    <td>Interaction</td>
                    <td>Survival Clans</td>
                </tr>
                </tbody>
            </table>
            <p v-else class="pedantic">Turn device horizontal to view</p>
            <h3>Developer Kosmos</h3>
            <!-- <p>is in every 
                respect just naturally how the kosmos works. We don't live in a kosmos that works 
                some other way where this defies reason.  -->
                <!-- it is amazing that we know anything about the origin of the galaxy, let alone the  -->
                <!-- Universe. At any rate, what we can observe is that  -->
            <p>
                The Big Bang differentiated 
                some sort of primordial singularity into molecules that would ultimately 
                form galaxies with planetary systems. We can assume this is normal.
                Any planet would produce life. Molecules tend to
                become organic if given the opportunity. It's not that Earth is particularly
                special, but that molecules are special. The kosmos is special, tending or falling 
                towards consciousness over time. 
                <!-- This is just another fundamental dynamic of how it works,  -->
                Just like how all matter attracts all other matter and we call that gravity, 
                how going fast makes time slow down and we call that relativity, 
                the kosmos is evolutionary and we call that Integral. 
                The kosmos has a sort of meta-magnetic nature, or morphogenetic field. It tends 
                up Levels. 
                <!-- It gets off on it or something.
                You are not some weird 
                crazy mutant. You are the mental being that kosmic code generates from nothing.  -->
                Earth molecules "want to" 
                wake up and come to life, because that's what planets do, because you want to. 
                <!-- Creation myths and Big Bang science are all true enough.   -->
                The Big Bang and ourselves have everything in common. We are created 
                in the image of our creator.
                It's not coincidence, but mutual expression. As kosmos,
                we're here learning about reality, because that's what matter would do if it 
                were smart, which it will be eventually. Like clockwork. 😶‍🌫️                
                </p>
            <!-- <p>
                For example, let's say you're angry at someone for being mean. It is easy 
                to identify the Interiority of that feeling of anger, and the Exteriority 
                of that person's behavior. And so you might say that this event has driven 
                a wedge between you and this person. But what is the nature of this wedge?
                You spend your time thinking about this person, this event, having intense 
                emotions, constructing mental arguments against them, you can't get them out
                of your head, it's like they are controlling you, it's like you're obsessed
                with them, so by being angry with this person,
                you have made them the most intensely intimate, passionate, and commited 
                relationship imaginable. You've given them your full attention.
                other person would. Now, having allowed that perspective into my own interior,
                rather than try and push it away, out of my reality, to the exterior, the whole 
                thing just doesn't bother me now. And ironically, by not trying to win this 
                person over, or change their perspective or attitude, but rather, just take them 
                and their relationship exactly as seriously as they do, I find that we thrive
                harmoniously as a collective.                 
            </p> -->
            <h3>Reality is Social Holons</h3>
            <p>
                Quarks seem to be some kind of informational vectors which
                assemble into the general vibe of a subatomic particle, whose interactions
                are atoms, which interact to form molecules. We have already traversed an 
                incomprehensible scale, but molecules can be assembled into organic forms, 
                which can be cells, such as the cells of your body, your brain cells, even.
                Each Level includes the previous Level into a
                greater system of order. 
                If you move your hand, you move the atoms of your hand,
                you make it the case that Earth produces people who move their hand, and you change 
                the entire universe into one in which a person moved their hand there. All at once. 
                Reality is simultaneous Levels of simultaneous Quadrants. 
                <!-- We're a stack of Levels in four Quadrants.
                Instinct Leveled up towards more complex, self-aware organisms. 
                Awareness Leveled up towards communication and social organization. 
                At this Level of organization, 
                Level 6 Green Meme, global communications technology grants an individual immediate access to humanity's general information.
                This is Level 7, where we organize that information into something coherent. Once we're 
                organized, we'll all be on the same page about where we're heading. -->
            </p>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('up-down')">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='up-down'">
            <div id="up-down" v-html="htmlVert"></div>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('upper-left')">NEXT</h5>
        </template>
        <template v-else-if="quadRef==='upper-left'">
            <div id="upper-left" v-html="htmlUL"></div>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('lower-left')">NEXT</h5>
        </template>
        <template v-else-if="quadRef==='lower-left'">
            <div id="lower-left" v-html="htmlLL"></div>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('upper-right')">NEXT</h5>
        </template>
        <template v-else-if="quadRef==='upper-right'">
            <div id="upper-right" v-html="htmlUR"></div>
            <h5 class="pedantic" style="cursor: pointer;" @click="changeQuad('lower-right')">NEXT</h5>
        </template>
        <template v-else-if="quadRef==='lower-right'">
            <div id="lower-right" v-html="htmlLR"></div>
            <h5 class="pedantic" style="cursor: pointer;" @click="emit('next')">TYPES</h5>
        </template>
    </div>
</template>
<style lang="sass" scoped>
table
    margin: auto
    td, th
        border: 1px solid white
        padding: 3px
.int-table
    font-size: smaller
    td, th
        border: none
        padding: 0
    @media screen and (min-width: 600px)
        td, th
            padding: 0.3em
    // td:nth-child(-n+3), th:nth-child(n-3)
    @media screen and (min-width: 850px)
        font-size: default
        td, th
            border: 1px solid white
            // padding: 0.2em
        
.fill-text, .shadow-box, .quadrant-text
    cursor: pointer

.quads-container
    // display: grid
    grid-template-columns: 1fr
    // grid-auto-rows: 1fr
    // p
        // text-align: center
    .quadrants-svg
        grid-area: quads
        max-width: 90vw
        max-height: 90vw
        border: 1px solid white
        border-radius: 12px
@media screen and (min-width: 700px)
    .quads-container
        // display: grid
        grid-template-areas: 'quads title' 'quads stats' 'quads desc' 'panel section'
        // grid-template-columns: 1fr 1fr
        grid-auto-flow: column
        .quadrants-svg            
            max-height: 50vw
            max-width: 50vw
            background: black
        .panel
            grid-area: panel
        .section
            grid-area: section
        h1
            grid-area: title
        .desc
            grid-area: desc
        // p, h1, h3, h4
            // display: block
            // margin: 0
.rainbow-me td
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 0, 255, 0.5), rgba(0, 0, 255, 0.5), rgba(0, 255, 0, 0.5), rgba(150, 40, 40, 0.5), rgba(255, 0, 0, 0.5), rgba(200, 50, 50, 0.5))
    // text-shadow: 1px 1px white, -1px -1px white
    // color: black
.cosmic-rays td
    background-color: white
    color: black
.t-ultraviolet
    background-color: rgb(213 181 255 / 50%)
    color: black
.t-violet
    background-color: rgb(168 102 255 / 50%)
    color: black
.t-indigo
    background-color: rgb(122 106 255 / 50%)
    color: black
.t-turquoise
    background-color: rgb(111 162 255 / 50%)
    color: black
.t-teal
    background-color: rgb(0 255 243 / 50%)
    color: black
.t-green
    background-color: rgba(0, 255, 0, 0.5)
    color: black
.t-orange
    background-color: rgb(255 155 84 / 50%)
    color: black
.t-amber
    background-color: rgb(251 186 66 / 50%)
    color: black
.t-red
    background-color: rgba(255, 100, 100, 0.5)
    color: black
.t-magenta
    background-color: rgb(255 90 242 / 50%)
    color: black
.t-infrared
    background-color: rgb(247 166 166 / 50%)
    color: black
.quad-highlight
    fill: #008080
.quadrant-text
    fill: white
.quadrant-text:hover
    fill: #55d5d5
    stroke: #fff
.quad-group:hover
    fill: white
    .quad-highlight
        fill: #55d5d5

</style>
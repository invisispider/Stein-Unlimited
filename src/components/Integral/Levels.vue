<script setup lang="ts">
import integral_levels from '@/content/integral_levels.md?raw';
import injectMarkdown from '@/composables/injectMarkdown';

const html = injectMarkdown(integral_levels);

const emit = defineEmits(['next', 'clearlight', 'ultraviolet', 'violet', 'indigo',
    'turquoise', 'teal', 'green', 'orange', 'amber', 'red', 'magenta', 'infrared'
]);
</script>
<template>
    <div class="levels">
        <h1>Levels</h1>
        <p> 
            The <b>Altitudes</b> rainbow below indicates the visible spectrum of consciousness, or
            Levels of holonic inclusion. These should align with 
            any measure of overall human development, or Line, and any specific measure of 
            evolutionary development in any Quadrant. 
            For simple discussion, we indicate to the left our <b>Four Selves mini-model</b>: generalized
            Levels of affinity as <b>Personality, Ego, Psyche,</b> and <b>Consciousness</b>.
            <span class="pedantic center">Click Levels for descriptions.</span>
        </p>
        <svg
        id="svg1"
        style="border:1px solid white;border-radius:12px;"
        viewBox="452 26 460 690"
        version="1.1"
        inkscape:version="1.3.2 (091e20ef0f, 2023-11-25, custom)"
        sodipodi:docname="AltitudesModel.svg"
        inkscape:export-filename="AltitudesModel.jpg"
        inkscape:export-xdpi="96"
        inkscape:export-ydpi="96"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <!-- <sodipodi:namedview
            id="namedview1"
            pagecolor="#505050"
            bordercolor="#ffffff"
            borderopacity="1"
            inkscape:showpageshadow="0"
            inkscape:pageopacity="0"
            inkscape:pagecheckerboard="1"
            inkscape:deskcolor="#505050"
            inkscape:document-units="px"
            inkscape:zoom="0.76229803"
            inkscape:cx="529.97644"
            inkscape:cy="268.26778"
            inkscape:window-width="1280"
            inkscape:window-height="688"
            inkscape:window-x="0"
            inkscape:window-y="0"
            inkscape:window-maximized="1"
            inkscape:current-layer="layer1"
            showguides="true" /> -->
        <defs
            id="defs1">
            <rect
            id="rect264"
            x="696.23301"
            y="563.41748"
            width="65.708738"
            height="89.475728" />
            <linearGradient
            id="linearGradient2"
            inkscape:collect="always">
            <stop
                id="stop2"
                style="stop-color:#ffffff;stop-opacity:1;"
                offset="0" />
            <stop
                id="stop4"
                style="stop-color:#b4a4d3;stop-opacity:1;"
                offset="0.06938774" />
            <stop
                id="stop22"
                style="stop-color:#3113a8;stop-opacity:1;"
                offset="0.21629943" />
            <stop
                id="stop5"
                style="stop-color:#112fee;stop-opacity:1;"
                offset="0.37341517" />
            <stop
                id="stop21"
                style="stop-color:#00abb8;stop-opacity:1;"
                offset="0.45975131" />
            <stop
                id="stop7"
                style="stop-color:#0f8c04;stop-opacity:1;"
                offset="0.54200578" />
            <stop
                id="stop8"
                style="stop-color:#f09824;stop-opacity:1;"
                offset="0.62426025" />
            <stop
                id="stop20"
                style="stop-color:#956126;stop-opacity:1;"
                offset="0.71115041" />
            <stop
                id="stop9"
                style="stop-color:#e90900;stop-opacity:1;"
                offset="0.79804057" />
            <stop
                id="stop6"
                style="stop-color:#990957;stop-opacity:1;"
                offset="0.87794334" />
            <stop
                id="stop3"
                style="stop-color:#c06a6a;stop-opacity:1;"
                offset="1" />
            </linearGradient>
            <linearGradient
            id="linearGradient3"
            inkscape:collect="always"
            xlink:href="#linearGradient2"
            x1="335.53397"
            y1="22.368948"
            x2="335.53397"
            y2="707.41748"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0.34542226,0,0,0.97948418,376.12163,14.484565)" />
        </defs>
        <g
            id="layer1"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer">
            <rect
                id="rect1"
            style="display:inline;fill:#000000;fill-opacity:1;stroke-width:0.942579;"
            width="460"
            height="690.68994"
            x="452.19073"
            y="25.115898"
            inkscape:label="background"
            sodipodi:insensitive="true" />
            <rect
            id="rect2"
            style="display:inline;fill:url(#linearGradient3);stroke-width:0.581666"
            width="82.579399"
            height="668.25549"
            x="492.02252"
            y="37.763958"
            inkscape:label="rainbow"
            sodipodi:insensitive="true" />
            <text
            id="text9" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#b54e64;fill-opacity:1"
            x="602.56311"
            y="68.699028"
            inkscape:label="1"
            sodipodi:insensitive="true"
            @click="emit('infrared')"><tspan
                id="tspan19"
                sodipodi:role="line"
                x="602.56311"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan291"
                sodipodi:role="line"
                x="602.56311"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan292"
                sodipodi:role="line"
                x="602.56311"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan293"
                sodipodi:role="line"
                x="602.56311"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan294"
                sodipodi:role="line"
                x="602.56311"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan295"
                sodipodi:role="line"
                x="602.56311"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan296"
                sodipodi:role="line"
                x="602.56311"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan297"
                sodipodi:role="line"
                x="602.56311"
                y="460.6987"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan298"
                sodipodi:role="line"
                x="602.56311"
                y="516.69867"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan299"
                sodipodi:role="line"
                x="602.56311"
                y="572.69861"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan300"
                sodipodi:role="line"
                x="602.56311"
                y="628.69855"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan20"
                sodipodi:role="line"
                x="602.56311"
                y="684.69849"
                style="font-size:37.3333px;line-height:1.5;fill:#b54e64;fill-opacity:1">1 INFRARED</tspan></text>
            <text
            id="text234" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#a3094d;fill-opacity:1"
            x="599.76703"
            y="68.699028"
            inkscape:label="2"
            sodipodi:insensitive="true"
            @click="emit('magenta')"><tspan
                id="tspan232"
                sodipodi:role="line"
                x="599.76703"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan273"
                sodipodi:role="line"
                x="599.76703"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan274"
                sodipodi:role="line"
                x="599.76703"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan275"
                sodipodi:role="line"
                x="599.76703"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan276"
                sodipodi:role="line"
                x="599.76703"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan277"
                sodipodi:role="line"
                x="599.76703"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan278"
                sodipodi:role="line"
                x="599.76703"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan279"
                sodipodi:role="line"
                x="599.76703"
                y="460.6987"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan280"
                sodipodi:role="line"
                x="599.76703"
                y="516.69867"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan281"
                sodipodi:role="line"
                x="599.76703"
                y="572.69861"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan234"
                sodipodi:role="line"
                x="599.76703"
                y="628.69855"
                style="font-size:37.3333px;line-height:1.5;fill:#a3094d;fill-opacity:1">2 MAGENTA</tspan></text>
            <text
            id="text222" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#df1305;fill-opacity:1"
            x="598.36896"
            y="68.699028"
            inkscape:label="3"
            sodipodi:insensitive="true"
            @click="emit('red')"><tspan
                id="tspan219"
                sodipodi:role="line"
                x="598.36896"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan256"
                sodipodi:role="line"
                x="598.36896"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan257"
                sodipodi:role="line"
                x="598.36896"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan258"
                sodipodi:role="line"
                x="598.36896"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan259"
                sodipodi:role="line"
                x="598.36896"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan260"
                sodipodi:role="line"
                x="598.36896"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan261"
                sodipodi:role="line"
                x="598.36896"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan262"
                sodipodi:role="line"
                x="598.36896"
                y="460.6987"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan263"
                sodipodi:role="line"
                x="598.36896"
                y="516.69867"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan222"
                sodipodi:role="line"
                x="598.36896"
                y="572.69861"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1">3 RED</tspan></text>
            <text
            id="text210" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#bb6626;fill-opacity:1"
            x="598.36896"
            y="68.699028"
            inkscape:label="4"
            sodipodi:insensitive="true"
            @click="emit('amber')"><tspan
                id="tspan206"
                sodipodi:role="line"
                x="598.36896"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan241"
                sodipodi:role="line"
                x="598.36896"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan242"
                sodipodi:role="line"
                x="598.36896"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan243"
                sodipodi:role="line"
                x="598.36896"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan244"
                sodipodi:role="line"
                x="598.36896"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan245"
                sodipodi:role="line"
                x="598.36896"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan246"
                sodipodi:role="line"
                x="598.36896"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan247"
                sodipodi:role="line"
                x="598.36896"
                y="460.6987"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan210"
                sodipodi:role="line"
                x="598.36896"
                y="516.69867"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1">4 AMBER</tspan></text>
            <text
            id="text185" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#e39722;fill-opacity:1"
            x="598.36896"
            y="68.699028"
            inkscape:label="5"
            sodipodi:insensitive="true"
            @click="emit('orange')"><tspan
                id="tspan180"
                sodipodi:role="line"
                x="598.36896"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan191"
                sodipodi:role="line"
                x="598.36896"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan192"
                sodipodi:role="line"
                x="598.36896"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan193"
                sodipodi:role="line"
                x="598.36896"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan194"
                sodipodi:role="line"
                x="598.36896"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan195"
                sodipodi:role="line"
                x="598.36896"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan196"
                sodipodi:role="line"
                x="598.36896"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan185"
                sodipodi:role="line"
                x="598.36896"
                y="460.6987"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1">5 ORANGE</tspan></text>
            <text
            id="text161" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#0e8f14;fill-opacity:1"
            x="596.97089"
            y="68.699028"
            inkscape:label="6"
            sodipodi:insensitive="true"
            @click="emit('green')"><tspan
                id="tspan155"
                sodipodi:role="line"
                x="596.97089"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan166"
                sodipodi:role="line"
                x="596.97089"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan167"
                sodipodi:role="line"
                x="596.97089"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan168"
                sodipodi:role="line"
                x="596.97089"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan169"
                sodipodi:role="line"
                x="596.97089"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan170"
                sodipodi:role="line"
                x="596.97089"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan161"
                sodipodi:role="line"
                x="596.97089"
                y="404.69873"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1">6 GREEN</tspan></text>
            <text
            id="text137" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#00abb7;fill-opacity:1"
            x="601.16504"
            y="68.699028"
            inkscape:label="7"
            sodipodi:insensitive="true"
            @click="emit('teal')"><tspan
                id="tspan130"
                sodipodi:role="line"
                x="601.16504"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1" /><tspan
                id="tspan141"
                sodipodi:role="line"
                x="601.16504"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1" /><tspan
                id="tspan142"
                sodipodi:role="line"
                x="601.16504"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1" /><tspan
                id="tspan143"
                sodipodi:role="line"
                x="601.16504"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1" /><tspan
                id="tspan144"
                sodipodi:role="line"
                x="601.16504"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1" /><tspan
                id="tspan149"
                sodipodi:role="line"
                x="601.16504"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#00abb7;fill-opacity:1">7 TEAL</tspan></text>
            <text
            id="text115" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#3e70e3;fill-opacity:1"
            x="599.76703"
            y="68.699028"
            inkscape:label="8"
            sodipodi:insensitive="true"
            @click="emit('turquoise')"><tspan
                id="tspan107"
                sodipodi:role="line"
                x="599.76703"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1" /><tspan
                id="tspan118"
                sodipodi:role="line"
                x="599.76703"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1" /><tspan
                id="tspan119"
                sodipodi:role="line"
                x="599.76703"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1" /><tspan
                id="tspan120"
                sodipodi:role="line"
                x="599.76703"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1" /><tspan
                id="tspan108"
                sodipodi:role="line"
                x="599.76703"
                y="292.69885"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1">8 TURQUOISE</tspan><tspan
                id="tspan115"
                sodipodi:role="line"
                x="599.76703"
                y="348.69879"
                style="font-size:37.3333px;line-height:1.5;fill:#3e70e3;fill-opacity:1" /></text>
            <text
            id="text94" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#4243e0;fill-opacity:1"
            x="598.36896"
            y="68.699028"
            inkscape:label="9"
            sodipodi:insensitive="true"
            @click="emit('indigo')"><tspan
                id="tspan85"
                sodipodi:role="line"
                x="598.36896"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan96"
                sodipodi:role="line"
                x="598.36896"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan97"
                sodipodi:role="line"
                x="598.36896"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan94"
                sodipodi:role="line"
                x="598.36896"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#4243e0;fill-opacity:1">9 INDIGO</tspan></text>
            <text
            id="text75" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#4f2af1;fill-opacity:1"
            x="580.19421"
            y="68.699028"
            inkscape:label="10"
            sodipodi:insensitive="true"
            @click="emit('violet')"><tspan
                id="tspan64"
                sodipodi:role="line"
                x="580.19421"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#4f2af1;fill-opacity:1" /><tspan
                id="tspan65"
                sodipodi:role="line"
                x="580.19421"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#4f2af1;fill-opacity:1" /><tspan
                id="tspan66"
                sodipodi:role="line"
                x="580.19421"
                y="180.69893"
                style="font-size:37.3333px;line-height:1.5;fill:#4f2af1;fill-opacity:1">10 VIOLET</tspan><tspan
                id="tspan75"
                sodipodi:role="line"
                x="580.19421"
                y="236.69888"
                style="font-size:37.3333px;line-height:1.5;fill:#4f2af1;fill-opacity:1" /></text>
            <text
            id="text54" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#7b65c0;fill-opacity:1"
            x="584.38837"
            y="68.699028"
            inkscape:label="11"
            sodipodi:insensitive="true"
            @click="emit('ultraviolet')"><tspan
                id="tspan55"
                sodipodi:role="line"
                x="584.38837"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5;fill:#7b65c0;fill-opacity:1" /><tspan
                id="tspan54"
                sodipodi:role="line"
                x="584.38837"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5;fill:#7b65c0;fill-opacity:1">11 ULTRAVIOLET</tspan></text>
            <text
            id="text303" class="levels-g"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#ffffff;fill-opacity:1"
            x="584.38837"
            y="68.699028"
            inkscape:label="12"
            sodipodi:insensitive="true"
            @click="emit('clearlight')"><tspan
                id="tspan302"
                sodipodi:role="line"
                x="584.38837"
                y="68.699028"
                style="font-size:37.3333px;line-height:1.5">12 CLEARLIGHT</tspan><tspan
                id="tspan303"
                sodipodi:role="line"
                x="584.38837"
                y="124.69898"
                style="font-size:37.3333px;line-height:1.5" /></text>
            <text
            id="text315"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;display:inline;fill:#b54e64;fill-opacity:1"
            x="627.72815"
            y="351.10678"
            inkscape:label="1"
            sodipodi:insensitive="true"><tspan
                id="tspan304"
                sodipodi:role="line"
                x="627.72815"
                y="351.10678"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan305"
                sodipodi:role="line"
                x="627.72815"
                y="383.10672"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan306"
                sodipodi:role="line"
                x="627.72815"
                y="415.10669"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan307"
                sodipodi:role="line"
                x="627.72815"
                y="447.10663"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan308"
                sodipodi:role="line"
                x="627.72815"
                y="479.10657"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan309"
                sodipodi:role="line"
                x="627.72815"
                y="511.10654"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan310"
                sodipodi:role="line"
                x="627.72815"
                y="543.10651"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan311"
                sodipodi:role="line"
                x="627.72815"
                y="575.10645"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan312"
                sodipodi:role="line"
                x="627.72815"
                y="607.10638"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan313"
                sodipodi:role="line"
                x="627.72815"
                y="639.10632"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan314"
                sodipodi:role="line"
                x="627.72815"
                y="671.10626"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1" /><tspan
                id="tspan315"
                sodipodi:role="line"
                x="627.72815"
                y="703.1062"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#b54e64;fill-opacity:1">default instinct</tspan></text>
            <text
            id="text326"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;display:inline;fill:#a3094d;fill-opacity:1"
            x="627.534"
            y="327.33981"
            inkscape:label="2"
            sodipodi:insensitive="true"><tspan
                id="tspan316"
                sodipodi:role="line"
                x="627.534"
                y="327.33981"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan317"
                sodipodi:role="line"
                x="627.534"
                y="359.33975"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan318"
                sodipodi:role="line"
                x="627.534"
                y="391.33972"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan319"
                sodipodi:role="line"
                x="627.534"
                y="423.33966"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan320"
                sodipodi:role="line"
                x="627.534"
                y="455.3396"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan321"
                sodipodi:role="line"
                x="627.534"
                y="487.33957"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan322"
                sodipodi:role="line"
                x="627.534"
                y="519.33954"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan323"
                sodipodi:role="line"
                x="627.534"
                y="551.33948"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan324"
                sodipodi:role="line"
                x="627.534"
                y="583.33942"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan325"
                sodipodi:role="line"
                x="627.534"
                y="615.33936"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1" /><tspan
                id="tspan326"
                sodipodi:role="line"
                x="627.534"
                y="647.33929"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#a3094d;fill-opacity:1">magic lore</tspan></text>
            <text
            id="text336"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#df1305;fill-opacity:1"
            x="628.52429"
            y="88.466019"
            inkscape:label="3"
            sodipodi:insensitive="true"><tspan
                id="tspan327"
                sodipodi:role="line"
                x="628.52429"
                y="88.466019"
                style="font-size:37.3333px;line-height:1.5;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan328"
                sodipodi:role="line"
                x="628.52429"
                y="144.46597"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan329"
                sodipodi:role="line"
                x="628.52429"
                y="200.46593"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan330"
                sodipodi:role="line"
                x="628.52429"
                y="256.46588"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan331"
                sodipodi:role="line"
                x="628.52429"
                y="312.46582"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan332"
                sodipodi:role="line"
                x="628.52429"
                y="368.46579"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan333"
                sodipodi:role="line"
                x="628.52429"
                y="424.46573"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan334"
                sodipodi:role="line"
                x="628.52429"
                y="480.4657"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan335"
                sodipodi:role="line"
                x="628.52429"
                y="536.46564"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1" /><tspan
                id="tspan336"
                sodipodi:role="line"
                x="628.52429"
                y="592.46558"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#df1305;fill-opacity:1">selfish legend</tspan></text>
            <text
            id="text345"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#bb6626;fill-opacity:1"
            x="629.12622"
            y="86.873787"
            inkscape:label="4"
            sodipodi:insensitive="true"><tspan
                id="tspan337"
                sodipodi:role="line"
                x="629.12622"
                y="86.873787"
                style="font-size:37.3333px;line-height:1.5;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan338"
                sodipodi:role="line"
                x="629.12622"
                y="142.87373"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan339"
                sodipodi:role="line"
                x="629.12622"
                y="198.87369"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan340"
                sodipodi:role="line"
                x="629.12622"
                y="254.87364"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan341"
                sodipodi:role="line"
                x="629.12622"
                y="310.8736"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan342"
                sodipodi:role="line"
                x="629.12622"
                y="366.87354"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan343"
                sodipodi:role="line"
                x="629.12622"
                y="422.8735"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan344"
                sodipodi:role="line"
                x="629.12622"
                y="478.87344"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1" /><tspan
                id="tspan345"
                sodipodi:role="line"
                x="629.12622"
                y="534.87341"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#bb6626;fill-opacity:1">myth member</tspan></text>
            <text
            id="text353"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#e39722;fill-opacity:1"
            x="628.52429"
            y="88.271843"
            inkscape:label="5"
            sodipodi:insensitive="true"><tspan
                id="tspan346"
                sodipodi:role="line"
                x="628.52429"
                y="88.271843"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan347"
                sodipodi:role="line"
                x="628.52429"
                y="144.27179"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan348"
                sodipodi:role="line"
                x="628.52429"
                y="200.27174"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan349"
                sodipodi:role="line"
                x="628.52429"
                y="256.2717"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan350"
                sodipodi:role="line"
                x="628.52429"
                y="312.27167"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan351"
                sodipodi:role="line"
                x="628.52429"
                y="368.27161"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan352"
                sodipodi:role="line"
                x="628.52429"
                y="424.27155"
                style="font-size:37.3333px;line-height:1.5;fill:#e39722;fill-opacity:1" /><tspan
                id="tspan353"
                sodipodi:role="line"
                x="628.52429"
                y="480.27151"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#e39722;fill-opacity:1">rational achiever</tspan></text>
            <text
            id="text367"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#0e8f14;fill-opacity:1"
            x="629.12622"
            y="86.873787"
            inkscape:label="6"
            sodipodi:insensitive="true"><tspan
                id="tspan361"
                sodipodi:role="line"
                x="629.12622"
                y="86.873787"
                style="font-size:37.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan362"
                sodipodi:role="line"
                x="629.12622"
                y="142.87373"
                style="font-size:21.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan363"
                sodipodi:role="line"
                x="629.12622"
                y="198.87369"
                style="font-size:21.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan364"
                sodipodi:role="line"
                x="629.12622"
                y="254.87364"
                style="font-size:21.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan365"
                sodipodi:role="line"
                x="629.12622"
                y="310.8736"
                style="font-size:21.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan366"
                sodipodi:role="line"
                x="629.12622"
                y="366.87354"
                style="font-size:21.3333px;line-height:1.5;fill:#0e8f14;fill-opacity:1" /><tspan
                id="tspan367"
                sodipodi:role="line"
                x="629.12622"
                y="422.8735"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#0e8f14;fill-opacity:1">sensitive pluralist</tspan></text>
            <text
            id="text373"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#00abb7;fill-opacity:1"
            x="628.52429"
            y="367.08737"
            inkscape:label="7"
            sodipodi:insensitive="true"><tspan
                id="tspan373"
                sodipodi:role="line"
                x="628.52429"
                y="367.08737"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#00abb7;fill-opacity:1">integral developer</tspan></text>
            <text
            id="text379"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#3e70e3;fill-opacity:1"
            x="627.72821"
            y="311.96115"
            inkscape:label="8"
            sodipodi:insensitive="true"><tspan
                id="tspan379"
                sodipodi:role="line"
                x="627.72821"
                y="311.96115"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#3e70e3;fill-opacity:1">holistic centaur</tspan></text>
            <text
            id="text383"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#4243e0;fill-opacity:1"
            x="628.52429"
            y="88.271843"
            inkscape:label="9"
            sodipodi:insensitive="true"><tspan
                id="tspan380"
                sodipodi:role="line"
                x="628.52429"
                y="88.271843"
                style="font-size:37.3333px;line-height:1.5;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan381"
                sodipodi:role="line"
                x="628.52429"
                y="144.27179"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan382"
                sodipodi:role="line"
                x="628.52429"
                y="200.27174"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4243e0;fill-opacity:1" /><tspan
                id="tspan383"
                sodipodi:role="line"
                x="628.52429"
                y="256.2717"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4243e0;fill-opacity:1">psychic intuitive</tspan></text>
            <text
            id="text387"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#4f2af1;fill-opacity:1"
            x="629.12622"
            y="88.271843"
            inkscape:label="10"
            sodipodi:insensitive="true"><tspan
                id="tspan384"
                sodipodi:role="line"
                x="629.12622"
                y="88.271843"
                style="font-size:37.3333px;line-height:1.5;fill:#4f2af1;fill-opacity:1" /><tspan
                id="tspan385"
                sodipodi:role="line"
                x="629.12622"
                y="144.27179"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4f2af1;fill-opacity:1" /><tspan
                id="tspan386"
                sodipodi:role="line"
                x="629.12622"
                y="200.27174"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4f2af1;fill-opacity:1">subtle visionary</tspan><tspan
                id="tspan387"
                sodipodi:role="line"
                x="629.12622"
                y="256.2717"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#4f2af1;fill-opacity:1" /></text>
            <text
            id="text389"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:37.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#7b65c0;fill-opacity:1"
            x="627.72815"
            y="145.60928"
            inkscape:label="11"
            sodipodi:insensitive="true"><tspan
                id="tspan389"
                sodipodi:role="line"
                x="627.72815"
                y="145.60928"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif;fill:#7b65c0;fill-opacity:1">causal witness</tspan></text>
            <text
            id="text33"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Bold';display:inline;fill:#ffffff;fill-opacity:1"
            x="628.33008"
            y="89.669907"
            inkscape:label="12"
            sodipodi:insensitive="true"><tspan
                id="tspan22"
                sodipodi:role="line"
                x="628.33008"
                y="89.669907"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif">nondual union</tspan><tspan
                id="tspan33"
                sodipodi:role="line"
                x="628.33008"
                y="121.66985"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:21.3333px;line-height:1.5;font-family:sans-serif;-inkscape-font-specification:sans-serif" /></text>
            <rect
            id="rect300"
            style="fill:#000000;fill-opacity:1;stroke-width:0.413859"
            width="1.0322881"
            height="629.14929"
            x="564.20074"
            y="37.728489"
            inkscape:label="firsttier" />
            <rect
            id="rect301"
            style="fill:#000000;fill-opacity:1.0;stroke-width:0.295012"
            width="1"
            height="330.01501"
            x="554.23328"
            y="37.719208"
            inkscape:label="secondtier" />
            <rect
            id="rect302"
            style="fill:#000000;fill-opacity:1.0;stroke-width:0.240753"
            width="1"
            height="219.78427"
            x="544.23303"
            y="37.747627"
            inkscape:label="thirdtier" />
            <text
            id="text1"
            xml:space="preserve"
            style="font-size:56.4435px;fill:#00e1ff;fill-opacity:1;stroke-width:1.32289"
            x="-639.83649"
            y="548.93536"
            inkscape:label="altitudes"
            transform="rotate(-90)"><tspan
                id="tspan1"
                x="-639.83649"
                y="548.93536"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:56.4435px;font-family:'URW Gothic';-inkscape-font-specification:'URW Gothic';fill:#000000;fill-opacity:1;stroke-width:1.32289"
                sodipodi:role="line">Altitudes</tspan></text>
                <text
            id="text398"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:21.2017px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:'Cantarell Light';letter-spacing:0.959054px;fill:#ffffff;fill-opacity:1;stroke-width:1.21583"
            x="-581.23804"
            y="578.50348"
            transform="matrix(0,-1.2158309,0.8224828,0,0,0)"
            inkscape:label="identity"
            sodipodi:insensitive="true"><tspan
                id="tspan398"
                sodipodi:role="line"
                x="-581.23804"
                y="578.50348"
                style="font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:21.2017px;font-family:Cantarell;-inkscape-font-specification:'Cantarell Light';letter-spacing:0.959054px;fill:#ffffff;fill-opacity:1;stroke-width:1.21583">  personality   ----     ego    ----     psyche   ------    consciousness</tspan></text>
                <text
            id="text399"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24px;line-height:1.5;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#000000;fill-opacity:1"
            x="361.819"
            y="86.994728"
            sodipodi:insensitive="true"><tspan
                id="tspan399"
                sodipodi:role="line"
                x="361.819"
                y="86.994728" /></text>
            <text
            id="text2"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;display:inline;fill:#000000;fill-opacity:1;stroke-width:1.32289"
            x="499.66086"
            y="659.2298"
            inkscape:label="altitudes"><tspan
                id="tspan2"
                x="499.66086"
                y="659.2298"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:1.32289"
                sodipodi:role="line">created by</tspan><tspan
                id="tspan4"
                x="499.66086"
                y="672.56317"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:1.32289"
                sodipodi:role="line">Ken Wilber</tspan><tspan
                id="tspan3"
                x="499.66086"
                y="685.89655"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:1.32289"
                sodipodi:role="line">altered by</tspan><tspan
                id="tspan6"
                x="499.66086"
                y="699.22992"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.6667px;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke-width:1.32289"
                sodipodi:role="line">unThinkMe</tspan></text>
            <text
            id="text7"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:12px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:end;letter-spacing:0.92px;text-anchor:end;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.14142;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            x="573.63983"
            y="48.402458"><tspan
                id="tspan13"
                sodipodi:role="line"
                x="573.63983"
                y="48.402458"
                style="font-size:12px;text-align:end;text-anchor:end;fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">1</tspan><tspan
                id="tspan14"
                sodipodi:role="line"
                x="573.63983"
                y="67.602455"
                style="font-size:12px;text-align:end;text-anchor:end;fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1" /></text>
            <text
            id="text8"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:12px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0.92px;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.14142;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            x="546.4184"
            y="48.578362"><tspan
                id="tspan8"
                sodipodi:role="line"
                x="546.4184"
                y="48.578362">3</tspan></text>
            <text
            id="text10"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:12px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:'Cantarell, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0.92px;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.14142;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            x="556.745"
            y="48.516891"><tspan
                id="tspan9"
                sodipodi:role="line"
                x="556.745"
                y="48.516891"
                style="font-size:12px;fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">2</tspan></text>
            <rect
            id="rect10"
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.126577;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1.0"
            width="10.750374"
            height="0.88941884"
            x="544.38104"
            y="256.65634" />
            <rect
            id="rect11"
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.125754;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1.0"
            width="10.600965"
            height="0.89024699"
            x="554.30127"
            y="367.80841" />
            <rect
            id="rect12"
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.123506;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            width="10.199626"
            height="0.8924948"
            x="564.34906"
            y="666.31183" />
            <text
            id="text16"
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:300;font-stretch:ultra-condensed;font-size:10.7946px;line-height:1.6;font-family:'Fira Sans Compressed';-inkscape-font-specification:'Fira Sans Compressed, Light Ultra-Condensed';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:end;letter-spacing:1.10861px;text-anchor:end;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.37545;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            x="553.70319"
            y="47.307228"
            transform="scale(0.97986534,1.0205484)"><tspan
                id="tspan17"
                sodipodi:role="line"
                x="554.81177"
                y="47.307228"
                style="font-style:normal;font-variant:normal;font-weight:200;font-stretch:ultra-condensed;font-size:10.7946px;font-family:Sans;-inkscape-font-specification:'Sans, Ultra-Light Ultra-Condensed';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:1.37545">Tier</tspan></text>
        </g>
        </svg>
        <h3>A Scale of Consciousness</h3>
        <p>Those familiar with Spiral Dynamics (SD) will note this model is very similar, 
            barring some stages and presentation elements. 
            Ken Wilber considers SD stages the values Line, expressing the same natural pattern of 
            Altitudes, which is an overall developmental Level basis. We present
            Wilber's concepts differently from how he does, but Altitudes is his current 
            (Wilber-5) Levels model.   
            We have given Wilber's Altitudes names like rational achiever and 
            integral developer to reflect the reality concept and 
            value currency of that Level. This reflects our own prioritization of those 
            themes (Think Feel Do) for simplicity.  
        </p>            
        <h3>UL Exercise</h3>
        <p style="margin-bottom: 0;">
            <b>Measure your Altitudes: ✈️</b>
            Don't worry, nobody is watching. 
            This is between you and yourself.  
            <!-- You should find a top Level you Think, a top Level you Feel, -->
            <!-- and a top Level you Do. It is our hypothesis that Think will always be higher than Feel, and Feel  -->
            <!-- higher than Do, but this logical mechanic assumption may be false.  -->
            You may consider "Your" Level 
            by the criteria of what you Think, Feel, Do, or an average of the three. 
            <span class="pedantic">Read through each Altitude description and determine if you 
            express that Level through your understanding, your values, and your actions in ordinary, everyday life, 
            most of the time.
            </span>
            We consider the Think 
            Line very liberal for defining people overall, and the Do Line relatively conservative.   
            An honest self-concept will yield few surprises. Most people 
            recognize their own stages easily.
        </p>
        <img alt="Lines Mini-Model Think Feel Do" class="square-banner" src="@/assets/img/LinesModel.png" />
        <p style="margin-top: 0; text-indent: 0;">
            <b>Think: </b>Does this stage make sense to you? Are you familiar with it? Does it describe the 
            sorts of things you think and talk about?
            <br><br>
            <b>Feel: </b>Does this stage represent a guiding truth or moral for you? 
            Does this stage express how you communicate and relate with people?
            <br><br>
            <b>Do: </b>Does this stage motivate what you generally do these days, most of the time? Are 
            you an agent of this stage, living it?
        </p>

        <div v-html="html"></div>

        <h5 class="pedantic" style="cursor: pointer;" @click="emit('infrared')">LEVEL DESCRIPTIONS</h5>
        <h5 class="pedantic" style="cursor: pointer;" @click="emit('next')">LINES</h5>

    </div>
</template>
<style lang="sass" scoped>
svg
    padding: 0
    justify-self: center
    margin: 0
    max-width: 90vw
    max-height: 95vh
    // border: 1px solid white
    // border-radius: 12px
.levels-g
    cursor: pointer
    :hover
        stroke: white
@media screen and (min-width: 350px)
    svg
        // max-width: 350px
        // max-height: 100vh
.center
    text-align: center
</style>
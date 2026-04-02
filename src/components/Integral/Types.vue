<script setup lang="ts">
import { AqalTypes } from "@/composables/Integral/aqal-types";
// import injectMarkdown from "@/composables/injectMarkdown";
// import integral_types from "@/content/integral_types.md?raw";
import { ref, watch } from "vue";

const emit = defineEmits(['next'])

const chosenType = ref<'base'|'gender'|'jungian'|'Archetypes'|'Astrology'|'Big Five'|'Myers-Briggs'|'Enneagram'>('base');
watch(chosenType, () => {
    window.scrollTo(0,0);
})

// const html = injectMarkdown(integral_types)
</script>
<template v-else-if="Selected == 'Types'">
    <div class="btn-group">
        <button @click="chosenType='base'">unThinkMe</button>
        <button @click="chosenType='gender'">Gender</button>
        <button @click="chosenType='jungian'">Jungian</button>
        <button v-for="tGet, index of AqalTypes" :key="index" 
        class="darken" @click="chosenType = index">{{ index }}</button>
    </div>
    <div v-if="chosenType=='base'" class="types-info">
        <h1>Types</h1>
        <p>One should really marvel at the history of our efforts to generate a simple map 
            of human personality tendencies, or Typology. It seems like such a 
            simple question: What are the different kinds of 
            people? What are the primary variables that define consciousness? 
            How do we model realtionships between various Types of people? 
            Integral Theory helps by pointing out the 
            distinction between Levels and Types, which is not well understood. 
            If Levels are <b>Vertical</b> stages of consciousness, 
            Types capture our <b>Horizontal</b> styles or preferences of consciousness.
            Types <em>should</em> be differences in comprehension that are non-developmental, or
            differences in the <em>way</em> people develop. 
            <span class="pedantic">Click buttons at the bottom for popular and relevant
                Typology summaries.</span>
        </p>
        <img alt="Types elemental tarot Mini-Model" class="square-banner" 
        src="@/assets/img/TypesModel.png" style="border: 1px solid white; border-radius: 12px;
        background-color: black; padding: 1em;" />
        <p>These token symbols are the Pentacles, Wands, Cups, and 
                Swords of Tarot myth, serving as a mini-model Typology placeholder.
            </p>
        <!-- <div v-html="html"></div> -->
        <h5 class="pedantic" style="cursor: pointer;" @click="chosenType='gender'">GENDER</h5>
    </div>
    <div v-else-if="chosenType=='gender'">
        <h3>Sexing Nature</h3>
        <p>
            Male and female is a duality 
            which appears to exist at every Level of reality, including sex, gender, and sexuality, all of 
            which occur at particular Levels. At the material Level, we have form and emptiness, matter and space,
            something and nothing. Substances have alkalinity, positive and negative charges, molecular 
            bonding. 
            As Life, we have a fundamental sexual essence, which is expressed 
            by DNA as genitals, as sperm and egg, as male and female hormones. Extremely simple creatures 
            tend to be more asexual, as sexual competition drives the evolution of more advanced features. 
            Sex mechanisms range from animal 
            to animal, but a sperm is a little pin that penetrates into the egg, just as the penis penetrates into a
            vagina. The female is like a home base, an openness to be filled, while the male is 
            more the one to go out seeking an emptiness to fill. We have no interest here in making 
            claims about how "males" and "females" <em>should</em> be, only observing how they 
            (and other) modal Types might affect consciousness development. 
            Even in our own super-ego, 
            or internalized self-parent structures, the female gives care and assurance, the male provides 
            challenge and structure. 
            As fun as it is, sexuality only exists to drive the evolution of Life, just as love or Eros can be said 
            to drive the Mind's evolution through Altitudes in a romantic or sexual way, extending all the way 
            to one's love relationship with God or the entire kosmos. What we are calling 
            sex here, or in Taoism, is actually duality itself. 
        </p>
        
        <h5 class="pedantic" style="cursor: pointer;" @click="chosenType='jungian'">JUNGIAN</h5>
    </div>
    <div v-else-if="chosenType=='jungian'">
        <h2>Your Brain does Four Things</h2>
        <p>
            Psychologist Carl Jung provided two Typologies we will explore here. 
            One of them ("Archetypes" section) presents the self as a system of   
            role playing archetypal built-in story character myths. In any 
            moment, our personality is invoking, or play-acting some collection of story characters. The 
            Typology we will explore here is the notion of four primary cognitive functions, and is the 
            basis of Myers-Briggs. 
            Conscious mental functioning is categorized into thinking, feeling, sensing, or intuiting. This 
            theory restates Quadrants and Tao ("Gender" section) in terms of cognitive functions.  
        </p>
        <p style="text-indent: 0;">
            <b>Intuition</b> looks inward to the subconscious, recognizing patterns, scanning, intuiting,
            innovating, thrill-seeking, expressing, facing things.
            UL "I," white eye of Tao.
        <br><br>
            <b>Sensing</b> looks outward at the environment, deductive, planning, organizing, tracking.
            UR "It," black eye of Tao.
        <br><br>
        <b>Thinking</b> looks outward to the conceptual abstract, inductive, strategizing, ordering, sense-making.
            LR "Its," black wave of Tao.
        <br><br>
        <b>Feeling</b> looks inward at relationships and affiliation, trust, morality, influence, charisma, cooperation.
            LL "We," white wave of Tao.
        </p>
        <p>
            Your core personality is shaped by mutually exclusive introverted and extraverted preferences 
            between these four functions, just as we might express 
            left or right handed, male or female gendered. 
            The four functions are considered equally valid and valuable ways to comprehend reality.
        </p>
        <!-- <h3>Introversion and Extraversion</h3>
        <p>
            Introverts 
            feel secure in their own ideas and notions, their own company, their own self-regulation, preferring 
            individualistic activities. The extravert feels secure in the collective knowledge and wisdom 
            and the give and take of energy through communication, working through community, reciprocity, 
            and collaboration.
        </p> -->
       
        <h3>But Is It Integral?</h3>
        <p> More Teal Meme thought and effort must be applied to Types, but one Integral observation 
            we can make is that <em>most</em> of these Typologies seem to point out 
            overlapping or similar traits and patterns, suggesting that they are either copying one another, 
            or pointing to universal truths. Further, as illustrated, these Types also intersect 
            with Quadrants, making us desire a functional Typology that is not heavily correlated with 
            the other Integral Elements. 
        </p>
        <table class="work-schedules">
            <tbody>
          <tr>
            <th>Quadrants</th>
            <th class="border-blue">UL</th>
            <th class="border-pink">UR</th>
            <th class="border-blue">LL</th>
            <th class="border-pink">LR</th>
          </tr>		
          <tr>
            <th>Tao Symbol</th>
            <td class="border-blue">White Eye</td>
            <td class="border-pink">Black Eye</td>
            <td class="border-blue">White Wave</td>
            <td class="border-pink">Black Wave</td>
          </tr> 		
          <tr>
            <th>Functions</th>
            <td>Intuiting</td>
            <td>Sensing</td>
            <td>Feeling</td>
            <td>Thinking</td>
          </tr>		
          <!-- <tr>
            <th>Big Five</th>
            <td>C</td>
            <td>C</td>
            <td>O/A/C/E</td>
            <td>O</td>
          </tr> -->
          <!-- <tr>
            <th>Enneagram</th>
            <td>7 8</td>
            <td>5 6</td>
            <td>2 3 4</td>
            <td>9 1</td>
          </tr> 	 -->
          <tr>
            <th>Elements</th>
            <td class="border-blue">Fire</td>
            <td class="border-pink">Earth</td>
            <td class="border-pink">Water</td>
            <td class="border-blue">Air</td>
          </tr> 	
          <!-- <tr>
            <th>Gender</th>
            <td>M/F</td>
            <td>F/M</td>
            <td>F</td>
            <td>M</td>
          </tr>	 -->
          <!-- <tr>
            <th>Material State</th>
            <td>Plasma</td>
            <td>Solid</td>
            <td>Liquid</td>
            <td>Gas</td>
        </tr> 		 -->
            <tr>
            <th>Tarot Cards</th>
            <td class="border-blue">Wands</td>
            <td class="border-pink">Pentacles</td>
            <td class="border-pink">Cups</td>
            <td class="border-blue">Swords</td>
        </tr> 		
        <tr>
            <th>Card-ass Cards</th>
            <td class="border-black">Clubs</td>
            <td class="border-red">Diamonds</td>
            <td class="border-red">Hearts</td>
            <td class="border-black">Spades</td>
            </tr> 					
          <tr>
            <th>Sorting Hat</th>
            <td>Gryffindor</td>
            <td>Slytherin</td>
            <td>Hufflepuff</td>
            <td>Ravenclaw</td>
          </tr> 		
        </tbody>
        </table>
        <p class="pedantic">Please correct me if I'm certainly wrong about these 
            mythological associations.  
            There will always be debate because 
            these are imaginary and there are multiple correct solutions.
        </p>
        <p>We must conclude for now that many "universal" typologies are redundant with Integral 
            Theory, and too methodologically flawed to adopt as primary vocabulary. Like Lines, Types are a lens, or way of slicing reality and consciousness 
            up to examine them and make them more comprehensible. If Lines take the 
            whole of reality and tear it into vertical strips of various length, Types is more like a shotgun, 
            drawing circles that capture roughly equal portions of the data. 
            It is a powerful and unique mechanic in theory. In the case of diagnosis,
            Types can devise thresholds and parameters for health and sickness. We could cover 
            various relevant popular theories like Adult Attachment Styles, Love Language, 
            and things like that. Among these, the Integral mind again seeks to find how they relate 
            to one another, and which among them includes the most reality in the least space.
        </p>
      
    </div>

    <div v-else class="types-model">
        <h2>Type System: {{ chosenType[0].toUpperCase() + chosenType.slice(1) }}</h2>
        <p>{{ AqalTypes[chosenType].description }}</p>
        <template v-for="t of AqalTypes[chosenType].types" :key="t.type">
            <h3>{{ t.type }}</h3>
            <p>{{ t.desc }}</p>
        </template>
        <!-- <h2>Verdict:</h2> -->
        <!-- <p>{{ AqalTypes[chosenType].setbacks }}</p> -->
    </div>
    <h5 v-if="chosenType=='base'" 
        class="pedantic" style="cursor: pointer;" @click="emit('next')">MAP</h5>
    <h5 v-else class="pedantic" style="cursor: pointer;" @click="chosenType='base'">TYPES</h5>

</template>
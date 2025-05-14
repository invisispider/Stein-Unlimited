<script setup lang="ts">
import { AqalTypes } from "@/composables/Integral/aqal-types";
import injectMarkdown from "@/composables/injectMarkdown";
import { ref, watch } from "vue";
import integral_types from "@/content/integral_types.md?raw";

const emit = defineEmits(['next'])

const chosenType = ref<'base'|'gender'|'jungian'|'Archetypes'|'Astrology'|'Big Five'|'Myers-Briggs'|'Enneagram'>('base');
watch(chosenType, () => {
    window.scrollTo(0,0);
})

const html = injectMarkdown(integral_types)
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
            simple question: what is my overall character? What are the different kinds of 
            people? What are the primary variables that define consciousness? 
            How do we model realtionships between various Types of people? What are 
            the categories and boundaries? Integral Theory helps by pointing out the 
            distinction between Levels and Types, which is not well understood. 
            If Levels are <b>Vertical</b> stages of consciousness, 
            Types capture our <b>Horizontal</b> styles or preferences of consciousness.
            They might be permanent, semi-permanent, or they might change circumstantially 
            without a constant pattern.
            Types <em>should</em> be differences in comprehension that are non-developmental, or
            differences in the <em>way</em> people develop. 
            <span class="pedantic">Click buttons at the bottom for popular and relevant
                Typology summaries.</span>
                The token symbols below are the Pentacles, Wands, Cups, and 
                Swords of Tarot myth, serving as a Typology placeholder. We'll sort that out later.
        </p>
        <img alt="Types elemental tarot Mini-Model" class="square-banner" 
        src="@/assets/img/TypesModel.png" style="border: 1px solid white; border-radius: 12px;
        background-color: black; padding: 1em;" />

        <div v-html="html"></div>
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
        <h3>Agency and Communion</h3>
        <p>                    
            <!-- The man may be more focused on
            practical needs, rather than social harmony. And thus will tend to introvert his feeling and extrovert his
            thinking. The female does the opposite, extraverting her feelings, while introverting her thinking. Now, let 
            me interrupt and say believe me, I'm not claiming there is some morality to this. I'm saying this is nature.
            This is reality. Morality comes from higher Levels. We're talking about Life here. Because let's say that in 
            this family of humans configured by sex and gender, that a boy is born with the same genetic code that caused 
            his mom to like his dad. Now he's wrong about being a boy, because he likes other boys, and boys like girls.
            Notice I'm talking like a baby. Dead giveaway. At the Level of biology, this is a boy. At the Level of sexuality, 
            there is attraction to males. There's no conflict or problem or paradox whatsoever. As we develop into more complex
            people with a more complex understanding of people, we will unlock a sort of duality of sex within ourselves, this 
            I can promise you. And that does not mean that it changes your genitals, your sexual preference, or your gender.
            Because we are talking about personality Types. What it means is that we need it to be socially acceptable for men 
            to extravert their feelings, 
            and for women to extrovert their thinking. Doing that more is helping us, and it helps for women 
            to be more individualistic and men to be more collectivist. The point is, it is Amber Meme absolutistic
            thinking which puts Europe at the center of the Universe, and the same which believes every Level of a holon
            has to be uniformly gendered, not as God prefers but forced by human personalities, and also fundamentally 
            viewing male as superior in every case. This not only stunts our development psychologically, but on the
            much more subtle level of personality, it stunts our capacities as mental beings.  -->
            The "spiraling" of Spiral 
            Dynamics (similar to Altitudes), or the back and forth tendency of each Level, is a movement between gendered 
            concepts of agency ♂️ and communion ♀️. Odd-numbered stages express more individualistic and
            practical, while even-numbered stages are more collectivist and abstract. Development 
            requires an integration of masculine and feminine internalized 
            projections, or animus and anima (quite literally at Level 9). This does not imply transgenderism or androgyny, 
            particularly. Rather, genitals come from the biological Life Level, gender forms 
            atop sex through Magenta ♀️ and Red ♂️ Personality concepts, sexual relationships and family form atop gender 
            and relate to Amber ♀️ and Orange ♂️ needs and interests. Gender and sexual experimentation
            are often Green ♀️. Cognitive and character ambidextrousness is Second Tier.
        </p>
        <!-- <h3></h3> -->
        <!-- <p> -->
            <!-- gender, and sometimes it will be into the other as your gender. Development is certainly transgender, as it is 
            trans-anything.  -->
            <!-- We stress these concepts, as perhaps commentary, in that spiritual legend may try to 
            elevate sex, or gender, or relationships, to some sort of supreme or absolute level of importance.
            In these legends, romantic love is enlightenment, higher Levels are sexual in nature 
            and grant sexual abilities. Likewise, Amber religion sees cis gender and nuclear family as holy and sacred.
            Our suggestion to these people is that sexual (psycho-sexual) Levels are sexual in nature. Higher Levels are 
            higher Level, and while we've already said they have a gender dynamic within development, the sexual and power 
            dynamics are Magenta and Red. Relationships and loyalty and true love are Amber and Orange Meme. People at higher 
            Altitudes will continue to participate in those activities just like normal, just as they still eat and poop.
            They can have their heart broken. They enjoy having sex. Higher Levels transcend and include lower Levels.  
        </p> -->
        <h3>☯️ Taoism ☯️</h3>
        <p>
            Taoism is a religion of simple, elegant nonduality. 
            Tao can be translated as the Way. 
            As in, the Way of things.
            A balance of opposing dualistic principles (Yin and Yang) is the Way to enlightenment. 
            But also, a Map shows the Way. Like AQALALATAS, the Tao symbol models the nature of reality. 
            <!-- Notice that the Quadrants are divided by a cross, or swastika, and this is also not coincidental. -->
            Like other spiritual quaternities (Quadrants, mandala, 
            cross, swastika, elements), the Tao
            applies to every Level. 
            <!-- As we said, Levels 
            all have a sense of "sex," "gender," "orientation," or simply duality. -->
            A circle represents reality. A wave cuts the circle in half through the middle. This wave divides 
            reality into
            a light half, filled in white with form, and a black half reflected in the 
            symmetrical empty space. 
            White is male yang, opposed to female yin. 
            A single dot, or eye, 
            penetrates the center of each wave, suggesting they enfold within one another, 
            immanent or interpenetrating -- or simply, they 
            two are One. The overall wavelike shape suggests spinning, mixing, or a cycle.
            White is interior, the light of consciousness, experience. 
            Everything people are conscious of is white, LL. 
            Everything I'm conscious of is the tiny white dot, UL.
            The ultimate nature of existence is unkown, the black wave, LR.
            The ultimate nature of me is unkown, my black dot, UR.
            The waves reflect one another, as reality appears to be whatever 
            we understand it to be. What we understand it to be must increasingly reflect 
            what it actually is. As society brings light to nature,
            my little light goes into my little darkness.
            </p>
            <table class="work-schedules">
            <tbody><tr>
                <th>Quadrant</th>
                <td>UL "I"</td>
                <td>UR "It"</td>
                <td>LL "We"</td>
                <td>LR "Its"</td>
            </tr>
            <tr>
                <th>Tao</th>
                <td>White Eye</td>
                <td>Black Eye</td>
                <td>White Wave</td>
                <td>Black Wave</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>My Experience</td>
                <td>My Environment</td>
                <td>Humanity</td>
                <td>The Universe</td>
            </tr>
            <tr>
                <th>Jung Function</th>
                <td>Intuition</td>
                <td>Sensing</td>
                <td>Feeling</td>
                <td>Thinking</td>
            </tr></tbody>
        </table><br>
        <!-- <h3>I Made This All Up 🤣</h3> -->
        <p>
            I experience myself (white dot) within an abstract conception of reality (black wave) 
            directly, and as separate from culture (white wave) and 
            environment (black dot.) 
            I can gain known information from the big white, by asking people, reading books, 
            Google search. The darkness surrounding my lone white eye is the unknown.    
            Black is exterior, what we are conscious of, what we
            observe.
            The collective (white wave LL) can see my body and environment 
            (black eye UR) directly, and I see that I punch a hole in their conformity from my own perspective 
            by experiencing myself. 
            None of them are me. I'm the only white eye in the only black eye. 
            I'm a tiny part of their world, a tiny agent (black dot UR) or source (white wave LL), a 
            tiny tiny part of objective reality (black wave LR.) 
            The Tao from anyone's individual perspective is just a small disruption in a great unkown, 
            unless we remove the lens, and experience reality as an integrated whole, the Tao, One without 
            Other, and no Quadrants. 
        </p>
        <br>
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
        <h3>Introversion and Extraversion</h3>
        <p>
            Introverts 
            feel secure in their own ideas and notions, their own company, their own self-regulation, preferring 
            individualistic activities. The extravert feels secure in the collective knowledge and wisdom 
            and the give and take of energy through communication, working through community, reciprocity, 
            and collaboration.
        </p>
        <h3>Dominant Cognitive Function</h3>
        <p>
            Primary introversion or extraversion tendency applies to 
            the dominant function (sensing, intuiting, feeling, or thinking). 
            This is what your brain does best, or what 
            you prefer and feel secure doing. 
            <!-- That function is balanced out with 
            less preferred functions, or you would be dysfunctional overall.  -->
        </p>
        <h3>Secondary Function</h3>
        <p>
            The secondary cognitive function provides the balance of an inverse to the extraversion 
            or introversion of the dominant. It will also cross the horizontal axis (Individual/Collective) 
            of the Quadrants, between the Judging functions of Thinking and Feeling, versus 
            the Perceiving functions of Sensing and Intuiting. 
        <!-- </p> -->
        <!-- <p>ESxP: -->
            If your dominant function is extraverted sensing (Se), your secondary function is 
            introverted feeling (Fi) or thinking (Ti). 
        <!-- </p> -->
        <!-- <p>IxTP: -->
            If your dominant function is introverted thinking (Ti), your secondary function 
            is extraverted sensing (Se) or intuiting (Ie). 
        </p>
        <h3>Inferior Functions</h3>
        <p>
            In whatever case, the two functions left out are your tertiary and inferior functions.
            Your brain prefers the dominant function and its compensatory secondary, and these are 
            ocassionally supplemented with 
            the remaining two functions. 
        </p>
        <h3>Shadow Functions</h3>
        <p>
            The remaining eight combinations, with reversed I/E, may be considered possibilities 
            that are atypical of your personality. This means that out of sixteen potential 
            functions, we all tend to get by almost entirely using eight, or only half of them. 
            We may discover interesting truths by attempting to access these alien "shadow" functions 
            within ourselves -- these modes that other people use and we don't. We may also observe 
            that the sixteen possibilities are also another way of stating Quadrants within Quadrants,
            or aspects of Tao in relation to one another.                    
        </p>
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
          <!-- <tr>
            <th>I</th>
            <td>Don't</td>
            <td>Have</td>
            <td>A</td>
            <td>Girlfriend</td>
          </tr> 		 -->
          <!-- <tr>
            <th>Temperament</th>
            <td>Choleric</td>
            <td>Melancholic</td>
            <td>Phlegmatic</td>
            <td>Sanguine</td>
          </tr> 		 -->
          <!-- <tr>
            <th>Seasons</th>
            <td>Summer</td>
            <td>Autumn</td>
            <td>Winter</td>
            <td>Spring</td>
          </tr> --></tbody>
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
        <h3>Integral Typology</h3>
        <p>
            Nevertheless, it is hard to believe that the uniqueness of  
            any old person, remaining with them their whole life, can not be more 
            easily categorized in terms of commonality and difference with large 
            percentages of the population of the most salient factors.
            This would lead to enormous insights 
            into the nature of Mind and Personality. 
            For now, Integral adopts these various unrelated Type systems, while also 
            uniquely drawing attention to a more critical appreciation of the problem.
        </p>
    </div>

    <div v-else class="types-model">
        <h2>Type System: {{ chosenType[0].toUpperCase() + chosenType.slice(1) }}</h2>
        <p>{{ AqalTypes[chosenType].description }}</p>
        <template v-for="t of AqalTypes[chosenType].types" :key="t.type">
            <h3>{{ t.type }}</h3>
            <p>{{ t.desc }}</p>
        </template>
        <h2>Verdict:</h2>
        <p>{{ AqalTypes[chosenType].setbacks }}</p>
    </div>
    <h5 v-if="chosenType=='base'" 
        class="pedantic" style="cursor: pointer;" @click="emit('next')">MAP</h5>
    <h5 v-else class="pedantic" style="cursor: pointer;" @click="chosenType='base'">TYPES</h5>

</template>
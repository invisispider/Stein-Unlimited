<script setup lang="ts">
import { ref, watch } from "vue";
import { AqalLines } from "@/composables/Integral/aqal-lines";
const emit = defineEmits(['next'])
// interface LineInfo {
//     line: string,
//     name: string,
//     description: string,
//     author: string,
//     stages: {},
//     notes: string,
// }
const lineInfo = ref({
    line: "",
    name: "",
    description: "",
    author: "",
    stages: {},
    notes: "",
});
const resetLineInfo = () => {
    lineInfo.value = {
        line: "",
        name: "",
        description: "",
        author: "",
        stages: {},
        notes: "",
    }
}
const toggleLine = (sel: string) => {
    let temp = AqalLines.filter((line) => line.name == sel).pop();
    if (temp!==undefined) {
        lineInfo.value = temp;
    }
}
watch(lineInfo, ()=>{
    window.scrollTo(0,0);
})
</script>
<template>
    <div class="btn-group">
        <button @click="resetLineInfo">unThinkMe</button>
        <button v-for="tGet, index of AqalLines" :key="index" @click="toggleLine(tGet.name)">{{ tGet.line
            }}</button>
    </div>
    <template v-if="lineInfo.line">
        <h2>{{ lineInfo.line }}</h2>
        <h3>{{ lineInfo.name }}</h3>
        <h3>Author: {{ lineInfo.author }}</h3>
        <p>{{ lineInfo.description }}</p>
        <h2>Stages:</h2>
        <div v-for="({title, desc}, id) of lineInfo.stages" :key="id">
            <h4>{{ id }}: {{ title }}</h4>
            <p>{{ desc }}</p>
        </div>
        <h2>Notes:</h2>
        <p>{{ lineInfo.notes }}</p>
    </template>
    <template v-else>
        <h1>Lines</h1>
        <p>Particular aspects of consciousness develop somewhat independently.
            These can be called developmental Lines, Streams, or multiple intelligences.  
            Like Waves (Levels), Streams emphasises the fluid and co-influencing nature 
            of these structures of the developmental self.  
            <span class="pedantic">Buttons along the bottom outline some prominent
            Lines.</span>
        </p>
        <img alt="Lines Mini-Model Think Feel Do" class="mini-model" src="@/assets/img/LinesModel.png" style="margin-bottom:1em;" />
        <h3>The Nature of Intelligence</h3>
        <p>A Line models any developmental structure. 
            Observe Lines in comments such as: <b>I'd like to improve my sense of 
            humor. I want to be beautiful. I should get in shape. Reading is fun-da-mental. 
            I can't decide whether to spend more time connecting, or buckle down on career. 
            We've got to figure out what we're doing. The system 
            needs better leadership. We've come to understand subatomic 
            particles, and we're building models of the quantum level.</b> These are abstract Lines, 
            but psychologists chart the development of particularly central expressions of maturity, 
            complexity, sensitivity, and self-awareness. We will focus first on the Cognitive Line, 
            because "raw intelligence" tends to limit most other Lines.
            Cognitive tracks the growth of the ability to comprehend (Think) 
            articulately. High intelligence is necessary, but not always sufficient,
            for higher development. You can view Jean Piaget's Cognitive stage model below,
            along with other stage models that could be consider core "intelligences."
            The commonly accepted, wonderfully one-dimensional standard is Intelligence Quotient.
            IQ is a numerical proxy for overall cognitive ability, centered on a 100 average
            and most accurate in commonplace range.
            We often use Emotional Intelligence Quotient, EQ, alongside IQ. 
            This allows us to view cognitive development in terms of two factors, or Lines, 
            rather than just one. 
        </p>
        <h3>Anything that Develops is a Line</h3> 
        <p>
            We commonly understand intelligence to refer to several inter-related aspects of a 
            person. Intelligence, and Levels, can be modeled with one Line, two Lines, or any 
            number of Lines. The granularity of each scope yields application-specific insights. 
            Psychologist <b>Howard Gardner</b> popularized the concept of <b>Multiple Intelligences,</b>
            and proposed <b>eight of them:</b>
        </p>
        <div style="list-style-type: none;margin-bottom:2em;"><b>
            Visual-spatial<br>
            Linguistic-verbal<br>
            Logical-mathematical<br>
            Body-kinesthetic<br>
            Musical<br>
            Interpersonal<br>
            Intrapersonal<br>
            Naturalistic</b>
        </div>
        <p>
            We could consider lines an inexaustible ocean of highly 
            specific memetic talents (like the Badges you get in Cub Scouts), and that could 
            yield a very interesting analysis. Every report card A, every karate 
            belt, every factory upgrade, can be considered a symbolic line development. In terms 
            of comprehending reality and consciousness, particular Lines 
            are more fundamental, holistic, or essential than others. This Element, like Types,
            remains somewhat unrefined and pluralistic - there are many right answers. We need to update 
            orthodox empirical approaches by factoring in all five Elements. Integral Theory can 
            help to coordinate and inter-relate the research being done within each Element.
        </p>
        <h3>Smarty Pants 👖</h3>
        <p>
            You 
            may call someone "smart" because they are socially adept, technically 
            proficient, intellectually profound, considerate, inventive, 
            witty, detail-oriented, on top of practical matters, ahead of the game, or because 
            their pants look nice.  
            People with outstanding cognitive intelligence may 
            be socially inept, absent-minded, irresponsible, morally despicable, and often called "stupid." What's going on here? 🤔
            Lines are not created equal. The ability to speak clearly is more essential than the 
            ability to tie a cherry stem inside your mouth. There is a notion of centrality to certain 
            Lines. Excellent overall physical health is more essential 
            to your humanity than specifically how well you tap dance. 
            At the highest tap dance Levels, you will require health, body awareness, sensitivity, and control,
            as well as the specific methods of tap practice. Tap dancing also requires 
            general development of kinesthetic, musical, and aesthetic Lines. 
        </p>
        <h3>We Are Islands 🏝️</h3>
        <p>
            While it may 
            feel that we have strayed from the topic of comprehending reality into personality 
            profiling, the Integral theorist should take care to observe the philosophical gravity 
            of Lines; to develop particular abilities through practice (practically everything 
            a person does on purpose) results in different conceptions of reality. No matter 
            what overall Level I believe I'm expressing, I can only comprehend this with my dominant 
            Lines, and I probably will not comprehend advanced expressions of other Lines communicated 
            by others. It may help us feel less alone if we can appreciate people for their 
            developed Lines, and forgive the others.
        </p>

        <h3>Primary Integral Lines</h3>
        <p>
            Ken Wilber names anywhere 
            from a handful to ten of these more central or pertinent Lines, and over a hundred that have 
            been studied overall. 
            An academic or scientist needs to clearly define their Line and its particular 
            context in human development. We philosophical generalists do not require expertise 
            in the work of numerous developmental psychologists, but the notion of independent developmental 
            Lines recapitulating Level patterns is one of Integral Theory's five 
            central mechanics. Stage model theorists were generally pre-Integral, so they did 
            not know they were contributing to Lines. Their stage models were to be considered in 
            isolation. When you look at the together, all at once, the Altitudes Level pattern 
            emerges. Developmental models overlap with one another, as Altitudes. As for the specific
            scope or count of primary Lines, the boundaries, redundancy, and overlap of these 
            categories, we require an Integral approach at the research level.
        </p>
        <h3>Stage Theory Altitudes</h3>
        <p>Altitudes are a system of archetypal 
            meta-meme Levels 
            which all Lines develop through. To illustrate this, we turn to the work of
            many of the major names in developmental psychology. 
            In the Integral Psychograph pictured below, all of these independent 
            stage models display an uncanny horizontal thematic equivalence.
            <span class="pedantic">Image originally from Integral Life resources. If you're having 
            trouble reading it, use the buttons at the bottom of the screen to 
            navigate the individual models pictured in the Psychograph.</span> 
        </p>
        <img alt="Integral Psychograph" class="mini-model" src="@/assets/img/kwlines.jpg" />
        <p>
            The Altitudes system relates these overlapping universals and enables
            developmentalists (everyone who learns or teaches) to compare 
            development across Lines. Far from nit-picking definitions of intelligence, 
            we should appreciate the urgency of the observation 
            that self, culture, and civiliation are all generated by these underlying holonic stage 
            stacks of knowing, feeling, and being.
        </p>                
        <h3>Home Cooked 🍳 Three-Line Mini-Model</h3>
        <img alt="Lines Mini-Model Think Feel Do" class="square-banner" src="@/assets/img/LinesModel.png" />
        <span><b>
            Think</b> is a proxy for various Cognitive, Worldview, Spiritual, 
            and Self Lines. <br><b>Feel</b> reflects Values, Needs, Moral, 
            Affect, and Emotional Lines. <br><b>Do</b> generalizes 
            Lines like Kinesthetic, Spatial, Aesthetic, and Interpersonal.<br><br>
        </span>
        <p>
            We can generalize Lines for the utmost simplicity in 
            everyday Altitudes assessment. If we are trying to place which
            Level we "are," three Lines is a mandatory minimum.
            Consider the case 
            where an organization or
            individual preaches a Level, or claims to represent it, but their actions 
            are contradictory. They may "get" the Level, and agree with it, but 
            then why not Do it? 🤷🏿‍♂️ 
            First, the 
            Level must be recognized, comprehended, discussed, and pondered as an 
            abstract idea that you Think. It then becomes visible in
            real world environments, cultures, and interactions, stirring us to Feel it 
            internally and identify with it as values. Finally, 
            this motivates us to express the Level through lifestyle, behavior, 
            baseline functioning, and social roles. 
            When developmental work is deliberate, Think, Feel, and Do should occur in order.
            From a higher Level, we may consider the opposite
            approach: start people behaving at the new Level, which will cause them 
            to see first-hand why it matters, and finally they will come to understand 
            the moving parts of the paradigm through participation.
            Teachers and parents (particularly Green) are tempted by this seemingly 
            faster and more dignified approach, treating children and new hires as perfect 
            "equals." A student doesn't appreciate what they haven't 
            earned, doesn't care about what they can't comprehend, and doesn't want to do 
            anything they don't care about. A more 
            Integral style of leadership and education meets the student, as an "equal," at
            their Level, and the process should flow from mind to heart to application. Take 
            special care that Integral is an all-inclusive, non-elitist movement. 
            It is common for Teal to express Shadow by trying to Grow Up other people.
            Healthy Teal <em>includes</em> all Levels, in self and in others, and it leads by 
            example.
        </p>
        <h3>Min-Maxing Uneven Development</h3>
        <p>
            It is possible to be at advanced Levels in 
            some Lines, and underdeveloped in others, allowing people to specialize. 
            An athlete is clearly developing <em>something</em> about their 
            person or intelligence, as is a salesman, an analyst, a navy seal, a trophy wife,
            influencer, chessmaster, 
            or grunge bassist. Their talent might not be particularly in a highly developed IQ.  
            A person's talent indicates 
            their dominant Lines. It does <em>not</em> indicate that they are equally advanced 
            in all Lines. ⚠️ Take care in selecting teachers and role models. A 
            movie star got there by being great at acting. A guru might be charismatic 
            and persuasive above all. They might be quite spiritual 
            and dumb as a stump. A politician is diplomatic. A comedian is quite funny.  
            There is no reason to assume any 
            of these people are safe or good or smart or wise or not, based solely on a
            high Level in their primary specialization.
        </p>
        <h3>Shadow of Excellence</h3>
        <p>A hallowing reminder of Lines is that a role model or hero is probably advanced 
            in some particularly visible Lines, such as charisma, abilities, genius intellect, or 
            spirituality. The Shadow side of that hero figure which is being 
            compensated for may potentially be 
            underdeveloped moral values, regressed psychosexual development, or pathology concerning
            interpersonal power and control. Some of them are monsters. Most heroes turn out to be 
            utterly normal, flawed, boring people <em>other than</em> the thing they do 
            extremely well. On the other hand, don't commit the opposite fallacy: being good at 
            something doesn't make you bad at everything else. Being smart doesn't make you 
            socially inept. Being beautiful doesn't make you evil. People can have a lot of major 
            Lines at high Levels. This is the explicit goal of the Level 7 integral developer. 
            Until an Integral theory is adopted, we have no numbers to back up these commonsense observations,
            but we at least have models and vocabulary so that we can begin to test the
            possibilities presented here.
        </p>              
        <h3>⚔️ Integral Dungeons & Dragons 🛡️
        </h3>
        <p>For fans of tabletop gaming, consider 
            an RPG stat sheet. Your individual stats are your Lines. When you
            Level up as a whole character (Altitudes) your individual attribute stats will 
            also develop <em>somewhat</em> independently. A min-maxed character is 
            advanced in a couple of Lines, with most at low stages. This allows 
            low-Level characters to be OP in specialized circumstances. 😋 Your Quadrant 
            view is like your 
            alignment, with lawful in the Lower Quadrants and Good in the Left Quadrants.
            Race and class are Types. Any status effects or buffs would be States. Isn't 
            it funny that a group of game developers had to model "adventurers" 
            with little knowledge of contemporary psychological theory and no institutional 
            prejudice, and through their intuition and practical experimentation, they 
            found an efficient way to present an entire developmental character in a basic 
            Integral theory.
        </p>
        <img alt="video game character stats" class="invert stu-banner" src="@/assets/img/sotnsheet.gif" />
        <h3>Integral Lines</h3>
        <p>While Lines are a methodologically superb way of analyzing specific strengths of 
            a human being, including moral, cognitive, care and concern, self sense, 
            and worldview, Integral does not currently recognize a satisfactory standard
            set of Lines. The Integral 
            Psychograph chart is not intended to be comprehensive, 
            exhaustive, or anything more than an essay to set important major 
            Line research side by side and illustrate the overlap as Altitudes. 
            It is not entirely 
            necessary to study developmental psychology - you can get away with a Mini-Model, 
            Spiral Dynamics, Altitudes, or any major Line, as long as you bear in mind
            that various aspects of individuals show up at different Altitudes in varying 
            contexts.
        </p>
        <h3>Exploring Line Models</h3>
        <p>The IQ/EQ system is a Level 5 Orange rational Lines system. Multiple Intelligences propose  
            a Level 6 Green pluralistic Lines system that is Integral-friendly. The Integral stage favors 
            the theoretical consistency and comprehensibility of stage models. The examples below can 
            be considered pioneering attempts at universal 
            Levels systems, similar to Altitudes. The key distinction 
            between Levels and a major Line (such as Cognition or Worldview), is that Levels apply to 
            every Line and occur in all four Quadrants.
            For the sake of scientific rigor, as 
            opposed to philosophical completeness, Line theorists research and analyze specific 
            criteria of a particular aspect of a person, making universal Levels only 
            possible in a meta-analysis of Line research.
        </p>
        <h5 class="pedantic" style="cursor: pointer;" @click="toggleLine('Worldview Structures')">WORLDVIEW LINE</h5>
        <h5 class="pedantic" style="cursor: pointer;" @click="emit('next')">QUADRANTS</h5>
    </template>
</template>
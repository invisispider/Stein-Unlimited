import { d as defineComponent, r as ref, C as computed, h as createElementBlock, j as createBaseVNode, w as withDirectives, E as vShow, y as openBlock, _ as _export_sfc, q as createTextVNode, m as createVNode, F as createStaticVNode, a4 as BookHero, Q as Fragment, S as renderList, n as withModifiers, af as normalizeStyle, l as unref, a2 as watch, t as toDisplayString, a9 as watchEffect, k as createCommentVNode, X as createBlock } from "./index-BBZgqMci.js";
import { u as useMonitorSize } from "./monitor-size-ExHOgnku.js";
import { i as injectMarkdown } from "./injectMarkdown-C1QkDyKF.js";
const AqalLevels = [
  {
    number: "1",
    color: "infrared",
    desc: "default instinct",
    currency: "Instinct leads us to pursue pleasure, safety, and comfort.",
    emergence: `Tribal packs of hunter gatherers with fire and hand tools
         depict an endless cycle of feast and famine in primitive carvings and paintings.
         This is the base default of 
         the human animal. It is found everywhere, but no longer as a sole or dominant Level. 
         Linguistic communication begets Magenta, so Infrared is currently isolated 
         to infants, the infirm, and extremely rare remote tribes. 
         Instinct is coded by genetic expression rather than socialization. 
         Just outside of the visible spectrum of Mind (culture and language,) 
         Infrared marks the evolutionary fulcrum's transition from biological life 
         to socialized Mind.`,
    relate: `Besides infancy, Infrared is mostly only seen in people 
         undergoing severe hardship, senility, abuse, neglect, or illness.`,
    values: `Proto-linguistic and pre-conceptual, Infrared nevertheless begins 
         to break the fusion of self and environment experienced by animals, creating Quadrants. Programmed by 
         instinctual habit and mimmickery, it pursues gratification of instinctual bodily needs.`,
    age: "200,000+ years old.",
    frequency: "0.01% global population.",
    influence: "Negligable influence."
  },
  {
    number: "2",
    color: "magenta",
    desc: "magic lore",
    currency: "Cultural lore and gossip is shared between people.",
    age: "About 25,000 years old.",
    frequency: "10% global population.",
    influence: "1% influence.",
    values: `As a person learns language, they learn to perceive reality in terms of 
        conceptual relatedness. Words force us to think in discrete concepts. Magenta 
        begins to understand relatedness, but does not yet differentiate between correct and 
        incorrect relationships, thus a river is named River, the river is angry, if I write 
        River in the sand and scratch it out, I curse the River to the same fate. This person 
        is starting to perceive the LL Quadrant, or a sense of other, and likewise, this is 
        applied not only to people, but to nature. 
        Superstition arises from a sort of conceptual fusion where 
        anything related is equated. 
        Magical animism assumes that things have spirits, 
        and those spirits have a will and intention and power that one can make an appeal to.`,
    emergence: `Small farming villages and travelling bands solidified around spiritual 
        lore. Lore is generally received without question, as the capacity for suspicion 
        hasn't fully developed. In pure form, 
        the people of this village actually live in a magical fantasy, 
        because that is their comprehension of reality. Developing social roles and rules, 
        the people become fluent, and have a worshipful attitude towards language 
        and its power. In developing the social concept, 
        the social attitude is applied towards nature, so that the world becomes 
        a sort of parent, or Great Mother, and this generally has a parentlike 
        spirit, often demanding sacrifice, and punishing at whim. Art becomes widespread 
        in the form of music, painting, fashions, ceremonies, and spiritual medicines, including 
        sentimental items, amulets, tools, weapons, 
        and practical items. Landmark totems and temples become cultural centers.`,
    relate: `Magenta is mostly seen in the beliefs and behaviors of toddlers, 
        with power objects like blankets and dolls, invisible friends, and strange 
        ideas about the world that they aren't terribly serious about. It can also be 
        seen in adult superstition 
        and petitionary or victim relationship toward one's environment. 
        Magenta helps us understand the primitive roots of how we 
        form concepts, how we emotionally communicate, and comprehend 
        the world and other people. It all starts here. In modern times, Magenta 
        has access to modern information sources, and understands rational facts in a 
        whimsical, fantastic way. 
        Magical fantasy and the sense of things having spirits, however incorrect, 
        is entirely native, natural, and healthy to the human psyche. All functions of our person 
        are built on top of magical fantasy lore linguistic connections that we took in as 
        children. We invite moderners to explore their own sense of the spirits in 
        nature, nostalgic possessions, ancestors, personal medicine, and 
        sacred rituals. It is poor mental health to repress lower Levels. 
        Remember, all medications are tested against a 
        placebo. Magical "medicine," or believing incorrectly you've taken medicine, 
        is scientifically proven effective in all clinical trials. 
        Belief heals the body in real life.`
  },
  {
    number: "3",
    color: "red",
    desc: "selfish legend",
    currency: "Power and control over others, legendary relics, symbols of affiliation.",
    age: "7000 years old.",
    frequency: "20% global population.",
    influence: "5% influence.",
    values: `Legend can be seen as a bridge between magic lore and mythic absolutes. 
        Legend does not offer universal notions of reality, but rather excellent examples of 
        particular principles, as in the Odyssey of Homer. Legends empower us 
        to be clever and strong and powerful and fair and sexually attractive by modeling the father, the hero, the villain, the seductress, 
        the wizard, and even the ego. We worship archetypal personalities as the highest ideals, 
        and it is believed that we can channel and invoke these ancestral dieties. The 
        epic tragedy, the tall tale, the fable, the legend, is born. Legend is concerned with the 
        superlative and miraculous, often ad absurdum. If we 
        were sticklers, we might call Red Personality-ish instead of selfish or egotist. Red is 
        the height of the Personality 
        affinity, and only the birthplace of Ego. This self is a thing that believes whatever it wants, 
        nobody tells it what to do, it only cares 
        about what relates to itself, it is helpful when it wants something. Like an angsty 
        adolescent, it mostly wants 
        to be epic, hardcore, virile, badass, or left alone to keep believing its own legend.`,
    emergence: `As social communities grow and begin to undertake more ambitious 
        projects, militarism and personal courage become essential. Physical prowess and 
        aggression are valued, often celebrated in duels, challenges, and rites of 
        passage that serve as the basis for symbolic and psychosexual self-promotion. 
        This results in a deeply unsettling desensitization to human 
        suffering, for the equal sake of warrior, victim, and leadership. Programs of desensitization stunt 
        emotion and intellect and enable great feats of will and heartless cruelty. True 
        interpersonal power is experienced for the first time, with mass campaigns of 
        murder, slavery, and cruelty at the hands of despot clan lords or god kings. Central leadership 
        enables the building of great monuments, pyramids, fine artifacts, relics, and scrolls, 
        as well as awe-inspiring public festivals and ceremonies. Legends of 
        ancestral heroes and kings, mythic chimeras, regional dieties, or elemental gods, perhaps 
        the celestial bodies themselves, become the 
        prevailing oral tradition, and represent the earliest literary works that we can 
        access today. Legends empowered humanity to their ultimate glory, 
        and led to their prophesied world conquest. Here we are.`,
    relate: `The healthy and unhealthy aspects of Red can be seen in atheletics teams 
        and their fans, with a worshipful attitude towards the greatness 
        of one arbitrary regional team physically challenging 
        another in a winner-take-all scenario. Red is the individuation of self and other, 
        resulting in 
        immediate preference for self (or Personality.) Children at Red 
        begin to resist, defy, or even deceive or bully the parent. This rebel 
        without a cause attitude may largely dissipate through socialization, or remain 
        a subdued character trait. Petty acts of theft and vandalism, fights, antisocial stunts, sneakiness, 
        needless defiance, and perversion are common in adolescence, and serve as the legend 
        of schoolyard or neighborhood. Modern Red adults are often deemed ignorant or 
        low class, and associated with racism, sexism, and extremist beliefs. Selfish, 
        here, does not mean self-maximizing (Orange) Ego, with high self-esteem and 
        a neutral worldview. We mean narcissistic, impulsive, reactive, 
        and in our culture, self-destructive. Globally, we see that genocide, slavery, 
        trafficking, terrorism, and narcissistic legends abound as the governing principle of 
        many locales. 
        In yourself, you may understand Red as the mythos or cult of personality that exists 
        around you and your life. It may be your self-indulgent side, your petty, contrary, feisty, outrageous, ridiculous, 
        honest, or pushy side. 
        Red loves to party, and is appropriate for adult sexual expression as well. 
        It remains in our nature as we develop, and we must not be ashamed or repress 
        this Level's power god, as it will continue to inform your personal confidence and 
        sense of agency. Healthy Red expresses 
        intense personal warmth and respect, familial comfort, safety, indulgence, and personal loyalty. Red 
        is the truest expression of your unique personality prior 
        to the sobering and domesticating effects of the self-scrutinizing (Amber) super-ego.`
  },
  {
    number: "4",
    color: "amber",
    desc: "myth member",
    currency: "Absolutist certainty, faith, universal principles, mythical membership.",
    values: `Having individuated self from others, Amber seeks belongingness 
        through membership, and a social entity and superego cause us to seek validation through 
        public participation. 
        Social roles dictate all personal responsibility. The Amber truth claim is always that 
        somebody, or some document, has the authority of being correct. This feudal 
        relationship extends to knowledge, sexuality, spirituality, and personal choice. 
        Amber is obligated to fully trust and comply with the social heirarchy. 
        Beaurocracy, cronyism, and a fascinaton with affectations, 
        manners, and tradition reign supreme. 
        The desire to fit in and rally around socially agreeable universals 
        both creates, and is satisfied by, organized religion. 
        Dogmatic and beaurocratic, major religions offer placement, purpose, and community 
        under absolute notions of right and wrong based on inspired mythology. 
        These are not local legends, but a model of perfection, and the collected 
        history, wisdom, and culture of the chosen people. Prophets 
        reveal the words of the one true God, and these are tampered with by generations 
        of motivated scribes. The canon is all the information anyone will ever need, 
        and all other unmistakably similar religions are wrong and evil. Take care that not all religious 
        expression is Amber, and many of us pass 
        through and integrate Amber without any religious membership. It exists in 
        schools, military, corporate workplaces, and other institutions and communities, with "us versus them" 
        thinking, "old fashioned" values, moral preaching, and herd mentality.`,
    age: "2400 years old.",
    frequency: "40% global population.",
    influence: "25% influence.",
    emergence: `Small warring kingdoms unite and enjoy massive social expansion under the umbrella 
        of increasingly universal regional religions, arriving at great wisdom through adoption 
        and incorporation of myths into a grand narrative explaining for everyone the 
        nature and origin of the universe, of good and evil, the meaning of life, the way to be, 
        and the way to organize society. It does not accomplish this 
        in a clear, comprehensible way, which is why an attitude of faith 
        and loyalty towards the document itself is essential. The ultimate 
        virtue is spreading the one true religion, getting others onboard the membership 
        before worrying too much about practicing what you preach. 
        Education systems arise to support evangelism and propaganda. 
        Literacy and written works become commonplace. Technology is expanded through public works and 
        infrastructure. Networks of trade and politics deliver diverse foods, tools, torture devices, servants, and ideas. 
        Great accomplishments in literature, music, theater, painting, architecture, and sculpture celebrate the divine and 
        encourage symbolic worship and devotion.`,
    relate: `While Amber is readily apparent and self-identifying in the religiously 
        devout peoples of everywhere, clearly the bulk of Earth's population, it may be more 
        difficult to see the way myth continues to operate within Orange and Green culture, in forms of 
        proud and deliberate honorable behaviors, virtue signaling, behaviors of social 
        othering, recitation of facts without theoretical comprehension, clique-like behavior, rationalization, social codes 
        and strongly held convictions. Amber often expresses in close family and romance as interpersonal 
        worship, devotion, and loyalty.`
  },
  {
    number: "5",
    color: "orange",
    desc: "rational achiever",
    currency: "Rationality, Wealth, fame, status, trophy goods, accolades.",
    age: "350 years old.",
    frequency: "30% global population.",
    influence: "45% influence.",
    values: `Orange is modernity, individualism, and a sense of personal responsibility for 
        comprehending reality. Pragmatic and materialistic, the purpose of life is to compete and succeed and take 
        home the prize. This satisfies my wife that I'm a decent father. It drives up the numbers, 
        and the GDP, and civilization marches forward, 
        technology innovates, science learns how the world works, and the individual is free to do whatever they 
        want as long as they keep it off my lawn. Everyone deserves equal rights and protections. 
        Reasonable dissent and disagreement are just fine. 
        Trying to sort out the really big questions never bore much fruit, while science 
        yields both answers and progress. 
        All of superstition and belief are most probably coping mechanisms, coming from 
        a need to feel special, curated by exploitative tyrants.`,
    emergence: `In the West, the birth of Orange can be described in terms 
        of Rennaissance, Enlightenment, Industrial Revolution, and Revolutionary War. 
        Religious feudal empires had 
        become so specialized that the intellectual 
        elite were discovering inevitable facts and principles about the world that contradict 
        the religious hegemony of the sciences. Social movements and underground 
        literature called the social order itself into question. As rational truth 
        breaks the tide, compelling greater numbers, the people revolt and form a 
        reason-based representative democracy based on liberty, due process, and freedom 
        of belief and expression. Separation of church and state is mandated by law, and human 
        intellect explodes, with massive advancement in applied disciplines, thought, 
        and secular arts and entertainment. Technological revolutions bring 
        modern medicine, transportation, and a total overhaul of human lifestyle. Laissez-faire capitalism 
        enables widespread personal wealth and global military leadership. The conditions of Orange poverty 
        are superior to those of the wealthiest lords of Amber feudal castes. Orange demands 
        go-getter motivation, charisma, and resiliency. It is described as a cynical, amoral rat race with winners and losers, 
        unfair competition, and litigiousness. 
        Psychology and psychiatry emerge in earnest. Inebriants relieve symptoms for now. 
        This is not a new problem. Nobody ever cared how commoners felt before. 
        Meanwhile, Orange invents 
        the landmark achievement that spells certain doom for principle-avoidant rational pragmatism - a bomb that 
        ends civilization.`,
    relate: `Orange will be relatable to most people. 
        The fundamental conceit of our culture is that a person can know reality 
        through reason, logic, and education. We are educated in schools 
        that teach science, math, history, language, and what amounts to a liberal education for  
        a national citizen. individualism is a given. 
        Rationality and objectivity have a global, 
        as opposed to regional, scope. Orange has moved 
        into the abstract and cerebral Right Quadrants, and the notion of universal governing principles (LR) 
        ought to be compatible with repeated observation (UR) by qualified individuals (UL) and these 
        will be validated by a community (LL) of competent peer review.  
        As a rational person reconciling yourself with pre-rational superstitions, consider that 
        Amber doesn't conceptually "get" the notion of the LR, 
        so "proof" doesn't exactly mean anything. The mythic believer 
        is compelled to accept only notions which feel morally correct "in the heart," which 
        circulates blood and does not feel emotions. 
        It actually requires a youth spent in a quality school to become genuinely capable of 
        comprehending nature. Amber keeps their children out of schools that 
        teach rational facts and methodologies. 
        Orange is far from the top, but it is configured, for the first 
        time, to test the truthiness of myths, and describe universal 
        patterns. The best articulation of Orange (and Orange Shadow) 
        can be found in Ayn Rand's philosophical literary fiction. Orange 
        is certain, which is tempting, but we must remember that this 
        is partial certainty, through a lens. We can, once again, deconstruct the 
        lens. The rational self, and the rational world, must open themselves to the critics, 
        the ignored, the dismissed, the oppressed, the disposessed and unseen, and 
        stage models of consciousness.`
  },
  {
    number: "6",
    color: "green",
    desc: "sensitive pluralist",
    currency: "Influence, awareness, inclusivity, open-mindedness, irony.",
    age: "150 years old.",
    frequency: "10% global population.",
    influence: "15% influence.",
    values: `Green sees the limitations of Orange pragmatism and competition, and tends to use subtle, high-brow irony 
        to express that. Self-deprecation and fourth wall breaking characterize Green. Hipsters 
        dress that way because they don't care about appearances. Rationality produces a truth which 
        doesn't indicate who we are, what we should do, what the 
        universe is, how it should be conceptualized, what consciousness is, what happiness is, 
        what love is, what anything is, why it is, or what it means. Science has become a 
        mythic totem itself, a reason for everything that I don't fully understand, a tool to 
        prove opinions to make money. Science never said 
        what to do with science, or how to conceptualize our findings. We have hidden assumptions. Green 
        reaches into a greater, global LL Quadrant, and sees the archetypal universality of 
        individual humanity, a vision of global familyhood, if we 
        can just get with the program and kill those hidden assumptions. A compassionate race 
        of cared-for beings who don't compete and exploit and lie and spam and scam and sue and murder one another.`,
    emergence: `Rooted in postmodernism and existentialism, mainstream Green was emblamized 
        in the counter-cultural psychedelic revolutions of the 1960's. Communications and network technology become the 
        foundation of Green's global village, where social influence is a currency and everybody knows marketing, 
        diplomacy, and critical theory. Notice the democratization of information provided by the internet, allowing 
        any and all grassroots or propagandist information sources, and the utter demise of media "objectivity." Green has come 
        to recognize, and often participate in, the global awakening of consciousness. Corporate interest has 
        developed to a degree of wealth and influence 
        at the scale of many small nations. The political interests 
        of citizens are falling behind the financial interests of corporations, often global in scope, 
        and often destroying Earth's ecosystem. 
        In a world where geographic boundaries mean less and less, where decentralized 
        currency may overtake national currency, we stress an attitude not of competition, but of empathy. We 
        aren't trying to scare you off and mind our own business. We're in this together.`,
    relate: `The multiplicity of simulacra offered by internet and social media is a global Green cultural meta. 
        Green dominates academia and mainstream media, now reaching into primary schools. 
        Sustainabilility, safe spaces, and identity representation are expected. Businesses have inclusivity quotas and sensitivity training. 
        We get a constant treadmill of new terms for 
        hate expression concepts and group identity descriptors. Is this the dreaded "Mean" Green Meme, or 
        does the rise of everyday public criticism act more like Amber 
        membership in Green, or Orange exploitation of Green? We blame Green for protests 
        that devolve into riots due to the inclusion of Red, 
        which only happens because Green is Level-blind, nonheirarchical, and considers everyone equal 
        regardless of merit or competence. 
        Green does not like placing "labels" on people, often labeling this behavior "labeling" and 
        the perpetrators "labelers." Green places Teal in the category of "people who like to place 
        people in categories so they can think less of them," so they can think less of them. 
        Because Teal considers some perspectives deeper or wider than others, Green considers itself superior to Teal, 
        and it cannot be made to see this performative self-contradiction. 
        The pluralist will refuse to try on a lens that ranks how much 
        you are capable of caring about. 
        It will deconstruct Altitudes and seek out questionable trivia 
        associated with the movement. 
        The need for a map of reality exposes a childish wish for 
        control and certainty, for finding purpose in something grand and special. 
        Denying the evolutionary growth heirarchy of consciousness 
        precludes Green from exerting much power, or establishing peaceable 
        global governance. Nevertheless, Green's currency is influence, and it 
        has been influential. It now faces major backlash from lower Levels. 
        We should encourage Green's leadership, and work together 
        to inspire progress. A more healthy and solid Green is 
        really the only way to prevent a massive global resurgence of lower Levels.`
  },
  {
    number: "7",
    color: "teal",
    desc: "integral developer",
    currency: `Levels of consciousness, paradigms, personal and social evolution.`,
    values: `Self, world, and culture are evolutionary systems which develop through 
        stages of consistent and recognizable structural patterns. Teal is open-minded, flexing and flowing, adapting, and ever 
        thirsty for learning, connecting, and comprehending. Teal is the first Level that is self-aware 
        of Levels, making Second Tier a monumental leap in relatability, occupational flexibility, and 
        resiliency. Teal experiments heavily 
        with personal, interpersonal, and social development, guided and inspired by awareness of Levels. 
        Unfortunately, it quickly finds that Teal is the only stage that wants to know what stage it is, what stages are, 
        and how to get to the next and highest stages. This interest seems oddly unique to Teal. Convincing others 
        to change, Growing and Waking Up others, are impossible. 
        Teal must lead by example. Teal has a benevolent worldview and abundance mentality, seeing 
        life as not fundamentally 
        problematic, malevolent, or impossible. Teal expresses latently at this time, as it is 
        frowned upon in every First Tier context. As with any emerging stage, Teal 
        is often an outsider, yearning for authentic peers.`,
    age: "Emerging currently.",
    frequency: "1% global population.",
    influence: "1% influence.",
    emergence: `An integral or integrative stage is found as the final stage in many accepted Line models, 
        though the stage is always rare in populations. It is unclear whether Teal will display a massive public social revolution 
        like First Tier Levels. 
        It seems more the case that Teal is an invisible hand operating 
        upon and within the First Tier. Second Tier efforts and sentiments are apparent in the world now, but 
        there is nothing resembling a culture, social order, or movement. It seems to resist assembling that way. 
        We hope to incorporate into partnerships and networks that express Teal values, and are quite open to social 
        outcomes.`,
    relate: `You can be sure that someone who understands Integral Theory, finds it agreeable, and uses it in 
        their life (Think Feel Do) is Teal. But of course, not everyone at this Level is 
        aware of Integral Theory. We consider Integral a beacon to those who 
        see reality as overlapping, interwoven evolutionary systems. Teal has many 
        advanced interests, 
        and is considered intellectual, worldly, experienced, and 
        well read. They often present in a plain, nondescript way that says as little as possible. They are 
        warm, lucid, often ironic or humorous, calm, measured, patient, thoughtful, emotionally intelligent, and socially giving. 
        They may also be seen as 
        eccentric, intense, inscrutible, overly cerebral, judgmental, or trying too hard. They often express some interest 
        in rational forms of spirituality. They tend towards progressive lifestyles, often with specific diets, 
        exercise programs, therapies, numerous hobbies and activities, and a massive workload. The certain 
        indicator of Teal is when they draw charts and tables everywhere that include everything.`
  },
  {
    number: "8",
    color: "turquoise",
    desc: "holistic centaur",
    currency: "Integral perspectives, spiritual and flow States.",
    age: "Currently emerging.",
    frequency: "0.01% global population.",
    influence: "1% influence.",
    values: `Intuitive optimization of inter-related patterns. Turquoise remains Level-aware, and we would assert that 
        Turquoise is also States and Quadrants aware, though that may mean different things depending on their 
        particular personal flavor of Turquoise. Just as Teal was able to individuate Levels, Turquoise is undergoing an 
        integration of Levels with a holonic evolutionary view of the kosmos. State practices may occur at any Level for 
        various reasons, but at Turquoise, spiritual practice becomes logically inevitable. The depths of 
        Psyche beckon, and being open-minded and curious, Turquoise is familiar with transcendental literature and notions by now.`,
    emergence: `Just as Orange finds rationality and Green applies rationality to rationality to discover more 
        truly rational rationality, Teal discovers Levels, and is fascinated with them, but still Teal does not 
        grasp the full meaning and applicability of Levels. This is not merely a scale of human potential, 
        it is the structural essense of thought itself, a true map of the construction of reality. 
        While again, not everyone at these Levels has access to this chart or these concepts, Teal is 
        intuitively aware of something resembling Levels, and Turquoise is aware of the whole 
        Integral Theory, though again that might not mean Ken Wilber's version of it. Just as Orange scientists 
        can squabble and debate over particulars and ultimately be on the same page at the rational Level of consciousness, 
        anyone with a deep and applied comprehension of Levels, Quadrants, and States, could be considered Turquoise.`,
    relate: `Turquoise may be the most elusive to find or spot in the wild. Certainly there is no culture or movement. 
        This is a person who is extremely intellectually literate, and will seem inevitably spiritual, in a way that is not 
        at all based on their beliefs, or their claims, but seems to exude more from their words, personality, and actions. 
        This is the highest stage included in nearly any Line stage system. A random sample of people 
        might yield Second Tier Levels at a significant enough rate that Second Tier could be detected. Third Tier is so 
        rare that even if people at these Levels did show up in a sample, they would stand out as extreme outliers and would 
        go into the slush pile with people who scribbled all over the assessment, tore it up, or put the same answer for every 
        question. Turquoise won't show up in random samples. You have to look for it. For Third Tier, you have to really 
        be motivated. You can do it. Namaste.`
  },
  {
    number: "9",
    color: "indigo",
    desc: "psychic intuitive",
    currency: "Perreneal wisdom, Waking Up practices, Psychic States.",
    values: `Psychic refers to direct personal awareness of the psyche. A psychic State of consciousness can be achieved 
        somewhat readily, though it will not be recognized at such unless it is quite deep or profound. This realm of States 
        tends to measure low Alpha and Theta brainwaves, suggesting a somewhat dreamlike waking experience, and is often 
        described in terms of a dissolution of boundaries and identities, a sense of waking up to oneness with the environment, the body, 
        the world, a diety. This can lend a sense of subtle radiation or aura, an extreme sense of novelty in the mundane, 
        a childlike sense of profound wonder and vulnerability. These states can be accessed within months of daily meditative 
        practice for most people, or can occur spontaneously, through intellection and will, and through communication. 
        If a person is generally coming from the Second Tier, and they learn to regularly access this state, so that their Psyche 
        is now actively communicating with Ego in daily life, and Ego keeps coming back, this is entry-Level 
        transcendental mysticism.`,
    age: "",
    frequency: "",
    influence: "",
    emergence: `There is no major social or technological movement for any of the Third Tier Levels, though this may 
        be debated. Psychic States of consciousness are described in some of the earliest writings we know of, and it seems 
        safe to assume that Psychic States have always been relatively commonplace. Legitimate Psychic State-specific 
        practices remain active mainly in the context of indiginous spiritualities, as well as in alternative, new age, and 
        occult interests and therapies. Psychic States appear to have played a major role in the formation and administration 
        of Magenta and Red Meme Civilizations, often guided or led by priests, priest-kings, god-kings, sorcerors, shamans, 
        prophets, oracles, and seers, who often underwent intensive State practice training, including rites of passage, vision 
        quests, trials, and snake taming. At any rate, we are suggesting that the path forward from Turquoise naturally leads 
        to this plasmoid State of the mind, the psychic bands, where our most primitive assumptions are dissolved and understood 
        to be illusory. Though people have historically learned to hack this State, it occurs naturally and properly, for everyone, 
        as the Level after Turquoise.`,
    relate: `This is a highly spiritual person, desiring to increase the spiritualness (State) of the present moment. 
        Direct control of the brain, typically slowing it down or practicing meditation, is an aspect of the lifestyle, and the 
        lifestyle will reflect a sincere and earnest dedication to maintaining connection to the spiritual. Intuitive forces and 
        visions may lead one to pursue strange activities, perhaps spontaneous poses or dances, creating drawings or words that 
        seem important though it isn't clear yet why. Always chasing the question mark, Indigo is the seeker. 
        `
  },
  {
    number: "10",
    color: "violet",
    desc: "subtle visionary",
    currency: "Purification, communion with deity, Subtle States.",
    values: `This would be a person who is naturally advancing from Indigo, and so are gaining access to increasingly 
        advanced states of consciousness, pushing deep into Theta range. The waking world is recognized as interpenetrating archetypes, 
        and each moment feels illuminated with the light of the absolute. In classical art, this was depicted as a halo. Violet 
        largely experiences reality as Psyche, not just aware of it but the sense of self, or affinity, is with the Psyche. 
        This affinity is classically often depicted as a relationship between self and deity, or the spirit of the universe, or God. 
        It is the feeling expressed by the statement, I and the Father are One. This is what the experience feels like to a religious 
        person. We describe it in terms of the Ego and Psyche Levels coming into alignment, and the light of consciousness beginning 
        to shine cleanly through. Eastern and African sources will describe it various other ways. Descriptions do not help a person 
        to experience it, though many have tried and tried valiently, and this again, exerted a major force on the history of civilization.`,
    age: "",
    frequency: "",
    influence: "",
    emergence: `Clearly a human potential, but at the point where Violet would be commonplace, we are living in an entirely 
        different sort of world.`,
    relate: `This person would not be accessible to someone who was not seeking them, in general. There might not be anything 
        recognizable about them. They might seem ordinary. They likely exist in a community centered around spiritual work. They 
        likely spend a lot of time practicing States, possibly training or teaching as well.`
  },
  {
    number: "11",
    color: "ultraviolet",
    desc: "causal witness",
    currency: "Oneness, stillness, emptiness, liberation.",
    values: "The true nature of the Self. Enlightenment.",
    age: "",
    frequency: "",
    influence: "",
    emergence: `In individuals, the Causal State can be understood for the layman to be the goal of meditation, and perhaps 
        the point of religion. It appears to be a State of ego-like witnessing, while the mind is thinking nothing, sensing nothing, 
        completely undisturbed and silent, in the Delta range, and still the sense of someone being there, watching, remains. As a 
        description, this might sound unremarkable to an Ego that has never experienced Consciousness as Consciousness. For the 
        individual, it is described as the ultimate comprehension, the supreme answer, the ultimate release from suffering, the 
        recognition of God, a comprehension of being the entire universe, a complete and total release from the tragedy of humanity 
        and consequence into a realm of heavenly bliss in the form of eternal, active, urgently creative nothingness. This is 
        englightenment, properly. Full awakening to the true nature of what you actually are. All you have to do is pay very, very 
        close attention.`,
    relate: `It is likely that this person existing today is a teacher, their lifestyle is based around spiritual practice 
        and related activities. It is likely this person lives in isolation, or in an isolated community.`
  },
  {
    number: "12",
    color: "clearlight",
    desc: "nondual union",
    currency: "All currencies are valued and not valued.",
    values: "Present embodied awareness of the ground of being.",
    age: "",
    frequency: "",
    influence: "",
    emergence: `Generally considered ultimate or true englightenment, this "fourth" State (turiyatita) is most often the culmination of a dedicated practice 
        within a rigorous and highly specific tradition. It can be argued that the nondual State or kosmic union is the true 
        mode of perception of various historic prophets and messiahs and gurus. It can also be argued that 
        only Eastern practices, particularly Buddhism and yoga, clearly describe a distinct nondual State and provide instruction for accessing it.`,
    relate: `To be frank, if Clearlight were a culture, or technological paradigm, this is happening long after anything resembling 
        what we call history, the human being and Earth are barely recognizable, and Integral Theory is unnecessary. 
        If you are wondering how to tell the difference between the nondual and causal State, that is more or less a matter of specialization. 
        As I understand, nondual is an integration of causal, subtle, and gross realms, so that the enlightened State is 
        experienced not only within the practice, but within all activities, all the time. We never said we were right - this is just 
        our best attempt to describe higher realities beyond our own insight. We should certainly expect new Levels to emerge beyond the visible 
        spectrum, the analogical gamma and x-rays. This means we have fundamentally transcended humanity, people, and history, we have 
        become something new and unfathomable, and the Levels past 
        Clearlight entering deep UV wavelengths should be just as transformative as the onset of Life on Earth and the divergence 
        of social people from animals.  
        Inevitably, the evolutionary view implies that whatever I am will be transcended and included into 
        something categorically more conscious, sensitive, and intelligent.`
  }
];
const _hoisted_1$7 = { class: "quads-container" };
const _hoisted_2$7 = {
  id: "svg1",
  class: "quadrants-svg",
  viewBox: "0 0 757.66882 766.45337",
  version: "1.1",
  "inkscape:version": "1.3.2 (091e20ef0f, 2023-11-25, custom)",
  "sodipodi:docname": "QuadrantsModel2.svg",
  "inkscape:export-filename": "../../../../../Videos/QuadrantsModel2.png",
  "inkscape:export-xdpi": "200",
  "inkscape:export-ydpi": "200",
  "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
  "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
};
const _hoisted_3$6 = {
  id: "layer1",
  "inkscape:label": "Layer 1",
  "inkscape:groupmode": "layer",
  transform: "translate(-340.40192,0.39228249)",
  style: { "display": "inline" }
};
const _hoisted_4$3 = { class: "int-table disappear" };
const _hoisted_5$3 = { class: "pedantic" };
const _hoisted_6$3 = {
  key: 0,
  class: "int-table disappear"
};
const _hoisted_7$1 = {
  key: 1,
  class: "pedantic"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Quadrants",
  setup(__props) {
    const sizes = useMonitorSize();
    const quadRef = ref("base");
    const changeQuad = (sel) => {
      quadRef.value = sel;
      window.scrollTo(0, 0);
    };
    const screenBig = computed(() => {
      if (sizes.browserWidth.value > 475) {
        return true;
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        _cache[37] || (_cache[37] = createBaseVNode("h1", { id: "base" }, "Quadrants", -1)),
        (openBlock(), createElementBlock("svg", _hoisted_2$7, [
          _cache[34] || (_cache[34] = createBaseVNode("defs", { id: "defs1" }, null, -1)),
          createBaseVNode("g", _hoisted_3$6, [
            createBaseVNode("rect", {
              id: "rect1",
              style: { "fill": "#000000", "cursor": "pointer" },
              width: "753.27649",
              height: "766.45337",
              x: "342.59808",
              y: "-0.39228249",
              "sodipodi:insensitive": "true",
              onClick: _cache[0] || (_cache[0] = ($event) => changeQuad("base"))
            }),
            _cache[31] || (_cache[31] = createBaseVNode("g", {
              id: "g8",
              class: "circles",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("circle", {
                id: "circle1",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "320",
                fill: "#ffffff",
                style: { "fill": "#ffffff", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle2",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "280",
                fill: "#800080",
                style: { "fill": "#800080", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle3",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "240",
                fill: "#4b0082",
                style: { "fill": "#4b0082", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle4",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "200",
                fill: "#008080",
                style: { "fill": "#008080", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle5",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "160",
                fill: "#008000",
                style: { "fill": "#008000", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle6",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "120",
                fill: "#ffa500",
                style: { "fill": "#ffa500", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle7",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "80",
                fill: "#ff0000",
                style: { "fill": "#ff0000", "fill-opacity": "0.6" }
              }),
              createBaseVNode("circle", {
                id: "circle8",
                opacity: "0.7",
                cx: "720",
                cy: "377",
                r: "40",
                fill: "#808080",
                style: { "fill": "#808080", "fill-opacity": "0.598715" }
              })
            ], -1)),
            _cache[32] || (_cache[32] = createBaseVNode("rect", {
              id: "rect2",
              style: { "fill": "#002525", "fill-opacity": "1", "stroke-width": "0.919193" },
              width: "640.1665",
              height: "17.569132",
              x: "399.7363",
              y: "366.75562",
              "sodipodi:insensitive": "true"
            }, null, -1)),
            _cache[33] || (_cache[33] = createBaseVNode("rect", {
              id: "rect3",
              style: { "fill": "#001c1c", "fill-opacity": "0.60766423", "stroke-width": "0.919017" },
              width: "639.92004",
              height: "17.569132",
              x: "-697.06543",
              y: "710.45178",
              transform: "rotate(-90)"
            }, null, -1)),
            createBaseVNode("text", {
              id: "text4",
              "xml:space": "preserve",
              style: { "font-size": "37.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
              x: "614.91962",
              y: "740.09967",
              "sodipodi:insensitive": "true",
              onClick: _cache[1] || (_cache[1] = ($event) => changeQuad("up-down"))
            }, _cache[14] || (_cache[14] = [
              createBaseVNode("tspan", {
                id: "tspan4",
                class: "quadrant-text",
                "sodipodi:role": "line",
                x: "614.91962",
                y: "740.09967",
                style: { "font-size": "37.3333px", "fill-opacity": "1" }
              }, "COLLECTIVE", -1)
            ])),
            createBaseVNode("text", {
              id: "text5",
              "xml:space": "preserve",
              style: { "font-size": "37.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
              x: "-469.67712",
              y: "390.17166",
              transform: "rotate(-90)",
              "sodipodi:insensitive": "true",
              onClick: _cache[2] || (_cache[2] = ($event) => changeQuad("left-right"))
            }, _cache[15] || (_cache[15] = [
              createBaseVNode("tspan", {
                id: "tspan5",
                class: "quadrant-text",
                "sodipodi:role": "line",
                x: "-469.67712",
                y: "390.17166",
                style: { "font-size": "37.3333px", "fill-opacity": "1" }
              }, "INTERNAL", -1)
            ])),
            createBaseVNode("text", {
              id: "text6",
              "xml:space": "preserve",
              style: { "font-size": "37.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
              x: "289.78571",
              y: "-1050.3049",
              transform: "rotate(90)",
              "sodipodi:insensitive": "true",
              onClick: _cache[3] || (_cache[3] = ($event) => changeQuad("left-right"))
            }, _cache[16] || (_cache[16] = [
              createBaseVNode("tspan", {
                id: "tspan6",
                class: "quadrant-text",
                "sodipodi:role": "line",
                x: "289.78571",
                y: "-1050.3049",
                style: { "font-size": "37.3333px", "fill-opacity": "1" }
              }, "EXTERNAL", -1)
            ])),
            createBaseVNode("text", {
              id: "text3",
              "xml:space": "preserve",
              style: { "font-size": "37.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1" },
              x: "614.91962",
              y: "50.51125",
              "sodipodi:insensitive": "true",
              onClick: _cache[4] || (_cache[4] = ($event) => changeQuad("up-down"))
            }, _cache[17] || (_cache[17] = [
              createBaseVNode("tspan", {
                id: "tspan3",
                class: "quadrant-text",
                "sodipodi:role": "line",
                x: "614.91962",
                y: "50.51125",
                style: { "font-size": "37.3333px", "fill-opacity": "1" }
              }, "INDIVIDUAL", -1)
            ])),
            createBaseVNode("g", {
              class: "quad-group",
              onClick: _cache[6] || (_cache[6] = ($event) => changeQuad("upper-left"))
            }, [
              _cache[19] || (_cache[19] = createBaseVNode("title", null, 'Internal Individual UPPER LEFT "I/Me": 1-p singular', -1)),
              _cache[20] || (_cache[20] = createBaseVNode("rect", {
                id: "rect8",
                x: "380",
                y: "100",
                width: "300",
                height: "160",
                rx: "20",
                ry: "20",
                opacity: "0.8",
                class: "quad-highlight shadow-box",
                style: { "display": "inline", "opacity": "0.899441", "fill-opacity": "1", "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none" }
              }, null, -1)),
              _cache[21] || (_cache[21] = createBaseVNode("text", {
                id: "text7",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "85.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1" },
                x: "477.10272",
                y: "190.27974"
              }, [
                createBaseVNode("tspan", {
                  id: "tspan7",
                  "sodipodi:role": "line",
                  x: "477.10272",
                  y: "190.27974"
                }, "UL")
              ], -1)),
              createBaseVNode("text", {
                id: "text11",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "29.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1" },
                x: "438.8801",
                y: "231.37941",
                onClick: _cache[5] || (_cache[5] = ($event) => changeQuad("upper-left"))
              }, _cache[18] || (_cache[18] = [
                createBaseVNode("tspan", {
                  id: "tspan11",
                  "sodipodi:role": "line",
                  x: "438.8801",
                  y: "231.37941"
                }, '1st person "I"', -1)
              ]))
            ]),
            createBaseVNode("g", {
              class: "quad-group",
              onClick: _cache[7] || (_cache[7] = ($event) => changeQuad("lower-left"))
            }, _cache[22] || (_cache[22] = [
              createBaseVNode("title", null, 'Internal Collective LOWER LEFT "You/We": second-person plural', -1),
              createBaseVNode("rect", {
                id: "rect9",
                x: "380",
                y: "510",
                width: "300",
                height: "160",
                rx: "20",
                ry: "20",
                opacity: "0.8",
                class: "shadow-box quad-highlight",
                style: { "opacity": "0.899441", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("text", {
                id: "text13",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "29.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
                x: "423.10818",
                y: "639.66559"
              }, [
                createBaseVNode("tspan", {
                  id: "tspan13",
                  "sodipodi:role": "line",
                  x: "423.10818",
                  y: "639.66559"
                }, '2-p plural "We"')
              ], -1),
              createBaseVNode("text", {
                id: "text10",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "85.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
                x: "483.28934",
                y: "598.01611"
              }, [
                createBaseVNode("tspan", {
                  id: "tspan10",
                  "sodipodi:role": "line",
                  x: "483.28934",
                  y: "598.01611"
                }, "LL")
              ], -1)
            ])),
            createBaseVNode("g", {
              class: "quad-group",
              onClick: _cache[10] || (_cache[10] = ($event) => changeQuad("upper-right"))
            }, [
              _cache[25] || (_cache[25] = createBaseVNode("title", null, 'External Individual UPPER RIGHT "It": third-person singular', -1)),
              _cache[26] || (_cache[26] = createBaseVNode("rect", {
                id: "rect10",
                x: "755",
                y: "100",
                width: "300",
                height: "160",
                rx: "20",
                ry: "20",
                opacity: "0.8",
                class: "shadow-box quad-highlight",
                style: { "opacity": "0.899441", "fill-opacity": "1" }
              }, null, -1)),
              createBaseVNode("text", {
                id: "text8",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "85.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
                x: "847.49469",
                y: "188.0836",
                onClick: _cache[8] || (_cache[8] = ($event) => changeQuad("upper-right"))
              }, _cache[23] || (_cache[23] = [
                createBaseVNode("tspan", {
                  id: "tspan8",
                  "sodipodi:role": "line",
                  x: "847.49469",
                  y: "188.0836"
                }, "UR", -1)
              ])),
              createBaseVNode("text", {
                id: "text12",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "29.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1" },
                x: "803.87213",
                y: "233.37941",
                onClick: _cache[9] || (_cache[9] = ($event) => changeQuad("upper-right"))
              }, _cache[24] || (_cache[24] = [
                createBaseVNode("tspan", {
                  id: "tspan12",
                  "sodipodi:role": "line",
                  x: "803.87213",
                  y: "233.37941"
                }, '3rd person "It"', -1)
              ]))
            ]),
            createBaseVNode("g", {
              class: "quad-group",
              onClick: _cache[13] || (_cache[13] = ($event) => changeQuad("lower-right"))
            }, [
              _cache[29] || (_cache[29] = createBaseVNode("title", null, 'External Collective LOWER RIGHT "Its/They": third-person plural', -1)),
              _cache[30] || (_cache[30] = createBaseVNode("rect", {
                id: "rect11",
                x: "755",
                y: "510",
                width: "300",
                height: "160",
                rx: "20",
                ry: "20",
                opacity: "0.8",
                class: "shadow-box quad-highlight",
                style: { "opacity": "0.899441", "fill-opacity": "1" }
              }, null, -1)),
              createBaseVNode("text", {
                id: "text9",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "85.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
                x: "853.68134",
                y: "600.21222",
                onClick: _cache[11] || (_cache[11] = ($event) => changeQuad("lower-right"))
              }, _cache[27] || (_cache[27] = [
                createBaseVNode("tspan", {
                  id: "tspan9",
                  "sodipodi:role": "line",
                  x: "853.68134",
                  y: "600.21222"
                }, "LR", -1)
              ])),
              createBaseVNode("text", {
                id: "text14",
                class: "fill-text",
                "xml:space": "preserve",
                style: { "font-size": "29.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
                x: "803.23615",
                y: "639.66559",
                onClick: _cache[12] || (_cache[12] = ($event) => changeQuad("lower-right"))
              }, _cache[28] || (_cache[28] = [
                createBaseVNode("tspan", {
                  id: "tspan14",
                  "sodipodi:role": "line",
                  x: "803.23615",
                  y: "639.66559"
                }, '3-p plural "Its"', -1)
              ]))
            ])
          ])
        ])),
        _cache[38] || (_cache[38] = createBaseVNode("p", { class: "desc" }, ' Quadrants are like dimensions of consciousness, offering four simultaneous perspectives on anything real. Left is subjectivity, Right is objectivity, Upper is individuality, Lower is groups. A rainbow of Levels reflects across Upper-Left (UL) "I", LL "We", UR "It", and LR "Its", illustrating the emergence and interplay of remarkably similar themes in the four inter-penetrating perspectives of self, culture, local and systemic nature. ', -1)),
        _cache[39] || (_cache[39] = createBaseVNode("h3", null, "Meta-Levels of Quadrants", -1)),
        withDirectives(createBaseVNode("table", _hoisted_4$3, _cache[35] || (_cache[35] = [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Analogy"),
              createBaseVNode("th", null, "Level"),
              createBaseVNode("th", null, "Bands"),
              createBaseVNode("th", null, "UL"),
              createBaseVNode("th", null, "UR"),
              createBaseVNode("th", null, "LL"),
              createBaseVNode("th", null, "LR")
            ]),
            createBaseVNode("tr", { class: "cosmic-rays" }, [
              createBaseVNode("td", null, "Cosmic Rays"),
              createBaseVNode("td", null, "?"),
              createBaseVNode("td"),
              createBaseVNode("td", { colspan: "4" })
            ]),
            createBaseVNode("tr", { class: "cosmic-rays" }, [
              createBaseVNode("td", null, "UV Range"),
              createBaseVNode("td", null, "Union"),
              createBaseVNode("td", null, "States"),
              createBaseVNode("td", { colspan: "4" })
            ]),
            createBaseVNode("tr", { class: "rainbow-me" }, [
              createBaseVNode("td", null, "Visible Light"),
              createBaseVNode("td", null, "Mind"),
              createBaseVNode("td", null, "Altitudes"),
              createBaseVNode("td", null, "Me"),
              createBaseVNode("td", null, "This"),
              createBaseVNode("td", null, "Us"),
              createBaseVNode("td", null, "Everything")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Infrared"),
              createBaseVNode("td", null, "Life"),
              createBaseVNode("td", null, "Phylogeny"),
              createBaseVNode("td", null, "Instinct"),
              createBaseVNode("td", null, "Creature"),
              createBaseVNode("td", null, "Life"),
              createBaseVNode("td", null, "Earth")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Microwave"),
              createBaseVNode("td", null, "Substance"),
              createBaseVNode("td", null, "Chemistry"),
              createBaseVNode("td", { rowspan: "2" }, "Existence"),
              createBaseVNode("td", null, "Molecule"),
              createBaseVNode("td", { rowspan: "2" }, "Forces"),
              createBaseVNode("td", null, "Star System")
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, "Radio"),
              createBaseVNode("td", null, "Matter"),
              createBaseVNode("td", null, "Physics"),
              createBaseVNode("td", null, "Atom"),
              createBaseVNode("td", null, "Universe")
            ])
          ], -1)
        ]), 512), [
          [vShow, screenBig.value]
        ]),
        withDirectives(createBaseVNode("p", _hoisted_5$3, "Turn device horizontal to view", 512), [
          [vShow, !screenBig.value]
        ]),
        _cache[40] || (_cache[40] = createBaseVNode("h3", null, "Visible Spectrum of Mind", -1)),
        screenBig.value ? (openBlock(), createElementBlock("table", _hoisted_6$3, _cache[36] || (_cache[36] = [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Analogy"),
              createBaseVNode("th", null, "Level"),
              createBaseVNode("th", null, "UL"),
              createBaseVNode("th", null, "UR"),
              createBaseVNode("th", null, "LL"),
              createBaseVNode("th", null, "LR")
            ]),
            createBaseVNode("tr", { class: "cosmic-rays" }, [
              createBaseVNode("td", null, "Clearlight"),
              createBaseVNode("td", null, "12"),
              createBaseVNode("td", { colspan: "4" }, "Nondual Unity")
            ]),
            createBaseVNode("tr", { class: "t-ultraviolet" }, [
              createBaseVNode("td", null, "Ultraviolet"),
              createBaseVNode("td", null, "11"),
              createBaseVNode("td", null, "Witness"),
              createBaseVNode("td", null, "Consciousness"),
              createBaseVNode("td", null, "Oneness"),
              createBaseVNode("td", null, "Emptiness")
            ]),
            createBaseVNode("tr", { class: "t-violet" }, [
              createBaseVNode("td", null, "Violet"),
              createBaseVNode("td", null, "10"),
              createBaseVNode("td", null, "Subtle"),
              createBaseVNode("td", null, "Psyche-Consciousness"),
              createBaseVNode("td", null, "Communion"),
              createBaseVNode("td", null, "Vision")
            ]),
            createBaseVNode("tr", { class: "t-indigo" }, [
              createBaseVNode("td", null, "Indigo"),
              createBaseVNode("td", null, "9"),
              createBaseVNode("td", null, "Psychic"),
              createBaseVNode("td", null, "Psyche"),
              createBaseVNode("td", null, "Affinity"),
              createBaseVNode("td", null, "Intuition")
            ]),
            createBaseVNode("tr", { class: "t-turquoise" }, [
              createBaseVNode("td", null, "Turquoise"),
              createBaseVNode("td", null, "8"),
              createBaseVNode("td", null, "Centauric"),
              createBaseVNode("td", null, "Psyche-Ego"),
              createBaseVNode("td", null, "Holonic"),
              createBaseVNode("td", null, "Holistic Mesh")
            ]),
            createBaseVNode("tr", { class: "t-teal" }, [
              createBaseVNode("td", null, "Teal"),
              createBaseVNode("td", null, "7"),
              createBaseVNode("td", null, "Developer"),
              createBaseVNode("td", null, "Stage-Aware Ego"),
              createBaseVNode("td", null, "Integral"),
              createBaseVNode("td", null, "Growth Networks")
            ]),
            createBaseVNode("tr", { class: "t-green" }, [
              createBaseVNode("td", null, "Green"),
              createBaseVNode("td", null, "6"),
              createBaseVNode("td", null, "Sensitive"),
              createBaseVNode("td", null, "Ironic Ego"),
              createBaseVNode("td", null, "Pluralistic Inclusion"),
              createBaseVNode("td", null, "Value Communities")
            ]),
            createBaseVNode("tr", { class: "t-orange" }, [
              createBaseVNode("td", null, "Orange"),
              createBaseVNode("td", null, "5"),
              createBaseVNode("td", null, "Rational Achiever"),
              createBaseVNode("td", null, "Earnest Ego"),
              createBaseVNode("td", null, "Contractual Order"),
              createBaseVNode("td", null, "Corporate States")
            ]),
            createBaseVNode("tr", { class: "t-amber" }, [
              createBaseVNode("td", null, "Amber"),
              createBaseVNode("td", null, "4"),
              createBaseVNode("td", null, "Absolutist Myth"),
              createBaseVNode("td", null, "Conformist Personality"),
              createBaseVNode("td", null, "Dogma"),
              createBaseVNode("td", null, "Early Nations")
            ]),
            createBaseVNode("tr", { class: "t-red" }, [
              createBaseVNode("td", null, "Red"),
              createBaseVNode("td", null, "3"),
              createBaseVNode("td", null, "Impulsive Opportunist"),
              createBaseVNode("td", null, "Selfish Personality"),
              createBaseVNode("td", null, "Legend"),
              createBaseVNode("td", null, "Feudal Empires")
            ]),
            createBaseVNode("tr", { class: "t-magenta" }, [
              createBaseVNode("td", null, "Magenta"),
              createBaseVNode("td", null, "2"),
              createBaseVNode("td", null, "Magical Fantasy"),
              createBaseVNode("td", null, "Dependent Personality"),
              createBaseVNode("td", null, "Lore"),
              createBaseVNode("td", null, "Ethnic Tribes")
            ]),
            createBaseVNode("tr", { class: "t-infrared" }, [
              createBaseVNode("td", null, "Infrared"),
              createBaseVNode("td", null, "1"),
              createBaseVNode("td", null, "Quadrant Fusion"),
              createBaseVNode("td", null, "Phenotypic Personality"),
              createBaseVNode("td", null, "Interaction"),
              createBaseVNode("td", null, "Survival Clans")
            ])
          ], -1)
        ]))) : (openBlock(), createElementBlock("p", _hoisted_7$1, "Turn device horizontal to view"))
      ]);
    };
  }
});
const Quadrants = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-bf3bffaf"]]);
const _hoisted_1$6 = { class: "levels" };
const _hoisted_2$6 = {
  id: "svg1",
  style: { "border": "1px solid white", "border-radius": "12px" },
  viewBox: "452 26 460 690",
  version: "1.1",
  "inkscape:version": "1.3.2 (091e20ef0f, 2023-11-25, custom)",
  "sodipodi:docname": "AltitudesModel.svg",
  "inkscape:export-filename": "AltitudesModel.jpg",
  "inkscape:export-xdpi": "96",
  "inkscape:export-ydpi": "96",
  "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
  "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
};
const _hoisted_3$5 = {
  id: "layer1",
  "inkscape:label": "Layer 1",
  "inkscape:groupmode": "layer"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Levels",
  emits: [
    "next",
    "clearlight",
    "ultraviolet",
    "violet",
    "indigo",
    "turquoise",
    "teal",
    "green",
    "orange",
    "amber",
    "red",
    "magenta",
    "infrared"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _cache[55] || (_cache[55] = createBaseVNode("h1", null, "Levels", -1)),
        _cache[56] || (_cache[56] = createBaseVNode("p", null, [
          createTextVNode(" The "),
          createBaseVNode("b", null, "Altitudes"),
          createTextVNode(" rainbow below indicates the visible spectrum of consciousness, or Levels of holonic inclusion. These should align with any measure of overall human development, or Line, and any specific measure of evolutionary development in any Quadrant. For simple discussion, we indicate to the left our "),
          createBaseVNode("b", null, "Four Selves mini-model"),
          createTextVNode(": generalized Levels of affinity as "),
          createBaseVNode("b", null, "Personality, Ego, Psyche,"),
          createTextVNode(" and "),
          createBaseVNode("b", null, "Consciousness"),
          createTextVNode(". ")
        ], -1)),
        (openBlock(), createElementBlock("svg", _hoisted_2$6, [
          _cache[54] || (_cache[54] = createBaseVNode("defs", { id: "defs1" }, [
            createBaseVNode("rect", {
              id: "rect264",
              x: "696.23301",
              y: "563.41748",
              width: "65.708738",
              height: "89.475728"
            }),
            createBaseVNode("linearGradient", {
              id: "linearGradient2",
              "inkscape:collect": "always"
            }, [
              createBaseVNode("stop", {
                id: "stop2",
                style: { "stop-color": "#ffffff", "stop-opacity": "1" },
                offset: "0"
              }),
              createBaseVNode("stop", {
                id: "stop4",
                style: { "stop-color": "#b4a4d3", "stop-opacity": "1" },
                offset: "0.06938774"
              }),
              createBaseVNode("stop", {
                id: "stop22",
                style: { "stop-color": "#3113a8", "stop-opacity": "1" },
                offset: "0.21629943"
              }),
              createBaseVNode("stop", {
                id: "stop5",
                style: { "stop-color": "#112fee", "stop-opacity": "1" },
                offset: "0.37341517"
              }),
              createBaseVNode("stop", {
                id: "stop21",
                style: { "stop-color": "#00abb8", "stop-opacity": "1" },
                offset: "0.45975131"
              }),
              createBaseVNode("stop", {
                id: "stop7",
                style: { "stop-color": "#0f8c04", "stop-opacity": "1" },
                offset: "0.54200578"
              }),
              createBaseVNode("stop", {
                id: "stop8",
                style: { "stop-color": "#f09824", "stop-opacity": "1" },
                offset: "0.62426025"
              }),
              createBaseVNode("stop", {
                id: "stop20",
                style: { "stop-color": "#956126", "stop-opacity": "1" },
                offset: "0.71115041"
              }),
              createBaseVNode("stop", {
                id: "stop9",
                style: { "stop-color": "#e90900", "stop-opacity": "1" },
                offset: "0.79804057"
              }),
              createBaseVNode("stop", {
                id: "stop6",
                style: { "stop-color": "#990957", "stop-opacity": "1" },
                offset: "0.87794334"
              }),
              createBaseVNode("stop", {
                id: "stop3",
                style: { "stop-color": "#c06a6a", "stop-opacity": "1" },
                offset: "1"
              })
            ]),
            createBaseVNode("linearGradient", {
              id: "linearGradient3",
              "inkscape:collect": "always",
              "xlink:href": "#linearGradient2",
              x1: "335.53397",
              y1: "22.368948",
              x2: "335.53397",
              y2: "707.41748",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "matrix(0.34542226,0,0,0.97948418,376.12163,14.484565)"
            })
          ], -1)),
          createBaseVNode("g", _hoisted_3$5, [
            _cache[26] || (_cache[26] = createBaseVNode("rect", {
              id: "rect1",
              style: { "display": "inline", "fill": "#000000", "fill-opacity": "1", "stroke-width": "0.942579" },
              width: "460",
              height: "690.68994",
              x: "452.19073",
              y: "25.115898",
              "inkscape:label": "background",
              "sodipodi:insensitive": "true"
            }, null, -1)),
            _cache[27] || (_cache[27] = createBaseVNode("rect", {
              id: "rect2",
              style: { "display": "inline", "fill": "url(#linearGradient3)", "stroke-width": "0.581666" },
              width: "82.579399",
              height: "668.25549",
              x: "492.02252",
              y: "37.763958",
              "inkscape:label": "rainbow",
              "sodipodi:insensitive": "true"
            }, null, -1)),
            createBaseVNode("text", {
              id: "text9",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#b54e64", "fill-opacity": "1" },
              x: "602.56311",
              y: "68.699028",
              "inkscape:label": "1",
              "sodipodi:insensitive": "true",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("infrared"))
            }, _cache[14] || (_cache[14] = [
              createBaseVNode("tspan", {
                id: "tspan19",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan291",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan292",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan293",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan294",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan295",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan296",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan297",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "460.6987",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan298",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "516.69867",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan299",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "572.69861",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan300",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "628.69855",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan20",
                "sodipodi:role": "line",
                x: "602.56311",
                y: "684.69849",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#b54e64", "fill-opacity": "1" }
              }, "1 INFRARED", -1)
            ])),
            createBaseVNode("text", {
              id: "text234",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#a3094d", "fill-opacity": "1" },
              x: "599.76703",
              y: "68.699028",
              "inkscape:label": "2",
              "sodipodi:insensitive": "true",
              onClick: _cache[1] || (_cache[1] = ($event) => emit("magenta"))
            }, _cache[15] || (_cache[15] = [
              createBaseVNode("tspan", {
                id: "tspan232",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan273",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan274",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan275",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan276",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan277",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan278",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan279",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "460.6987",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan280",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "516.69867",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan281",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "572.69861",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan234",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "628.69855",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#a3094d", "fill-opacity": "1" }
              }, "2 MAGENTA", -1)
            ])),
            createBaseVNode("text", {
              id: "text222",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#df1305", "fill-opacity": "1" },
              x: "598.36896",
              y: "68.699028",
              "inkscape:label": "3",
              "sodipodi:insensitive": "true",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("red"))
            }, _cache[16] || (_cache[16] = [
              createBaseVNode("tspan", {
                id: "tspan219",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan256",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan257",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan258",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan259",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan260",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan261",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan262",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "460.6987",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan263",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "516.69867",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan222",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "572.69861",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }, "3 RED", -1)
            ])),
            createBaseVNode("text", {
              id: "text210",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#bb6626", "fill-opacity": "1" },
              x: "598.36896",
              y: "68.699028",
              "inkscape:label": "4",
              "sodipodi:insensitive": "true",
              onClick: _cache[3] || (_cache[3] = ($event) => emit("amber"))
            }, _cache[17] || (_cache[17] = [
              createBaseVNode("tspan", {
                id: "tspan206",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan241",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan242",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan243",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan244",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan245",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan246",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan247",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "460.6987",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan210",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "516.69867",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }, "4 AMBER", -1)
            ])),
            createBaseVNode("text", {
              id: "text185",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#e39722", "fill-opacity": "1" },
              x: "598.36896",
              y: "68.699028",
              "inkscape:label": "5",
              "sodipodi:insensitive": "true",
              onClick: _cache[4] || (_cache[4] = ($event) => emit("orange"))
            }, _cache[18] || (_cache[18] = [
              createBaseVNode("tspan", {
                id: "tspan180",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan191",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan192",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan193",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan194",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan195",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan196",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan185",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "460.6987",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }, "5 ORANGE", -1)
            ])),
            createBaseVNode("text", {
              id: "text161",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#0e8f14", "fill-opacity": "1" },
              x: "596.97089",
              y: "68.699028",
              "inkscape:label": "6",
              "sodipodi:insensitive": "true",
              onClick: _cache[5] || (_cache[5] = ($event) => emit("green"))
            }, _cache[19] || (_cache[19] = [
              createBaseVNode("tspan", {
                id: "tspan155",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan166",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan167",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan168",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan169",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan170",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan161",
                "sodipodi:role": "line",
                x: "596.97089",
                y: "404.69873",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }, "6 GREEN", -1)
            ])),
            createBaseVNode("text", {
              id: "text137",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#00abb7", "fill-opacity": "1" },
              x: "601.16504",
              y: "68.699028",
              "inkscape:label": "7",
              "sodipodi:insensitive": "true",
              onClick: _cache[6] || (_cache[6] = ($event) => emit("teal"))
            }, _cache[20] || (_cache[20] = [
              createBaseVNode("tspan", {
                id: "tspan130",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan141",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan142",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan143",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan144",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan149",
                "sodipodi:role": "line",
                x: "601.16504",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#00abb7", "fill-opacity": "1" }
              }, "7 TEAL", -1)
            ])),
            createBaseVNode("text", {
              id: "text115",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#3e70e3", "fill-opacity": "1" },
              x: "599.76703",
              y: "68.699028",
              "inkscape:label": "8",
              "sodipodi:insensitive": "true",
              onClick: _cache[7] || (_cache[7] = ($event) => emit("turquoise"))
            }, _cache[21] || (_cache[21] = [
              createBaseVNode("tspan", {
                id: "tspan107",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan118",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan119",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan120",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan108",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "292.69885",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, "8 TURQUOISE", -1),
              createBaseVNode("tspan", {
                id: "tspan115",
                "sodipodi:role": "line",
                x: "599.76703",
                y: "348.69879",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#3e70e3", "fill-opacity": "1" }
              }, null, -1)
            ])),
            createBaseVNode("text", {
              id: "text94",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#4243e0", "fill-opacity": "1" },
              x: "598.36896",
              y: "68.699028",
              "inkscape:label": "9",
              "sodipodi:insensitive": "true",
              onClick: _cache[8] || (_cache[8] = ($event) => emit("indigo"))
            }, _cache[22] || (_cache[22] = [
              createBaseVNode("tspan", {
                id: "tspan85",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4243e0", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan96",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4243e0", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan97",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4243e0", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan94",
                "sodipodi:role": "line",
                x: "598.36896",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4243e0", "fill-opacity": "1" }
              }, "9 INDIGO", -1)
            ])),
            createBaseVNode("text", {
              id: "text75",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#4f2af1", "fill-opacity": "1" },
              x: "580.19421",
              y: "68.699028",
              "inkscape:label": "10",
              "sodipodi:insensitive": "true",
              onClick: _cache[9] || (_cache[9] = ($event) => emit("violet"))
            }, _cache[23] || (_cache[23] = [
              createBaseVNode("tspan", {
                id: "tspan64",
                "sodipodi:role": "line",
                x: "580.19421",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4f2af1", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan65",
                "sodipodi:role": "line",
                x: "580.19421",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4f2af1", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan66",
                "sodipodi:role": "line",
                x: "580.19421",
                y: "180.69893",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4f2af1", "fill-opacity": "1" }
              }, "10 VIOLET", -1),
              createBaseVNode("tspan", {
                id: "tspan75",
                "sodipodi:role": "line",
                x: "580.19421",
                y: "236.69888",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4f2af1", "fill-opacity": "1" }
              }, null, -1)
            ])),
            createBaseVNode("text", {
              id: "text54",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#7b65c0", "fill-opacity": "1" },
              x: "584.38837",
              y: "68.699028",
              "inkscape:label": "11",
              "sodipodi:insensitive": "true",
              onClick: _cache[10] || (_cache[10] = ($event) => emit("ultraviolet"))
            }, _cache[24] || (_cache[24] = [
              createBaseVNode("tspan", {
                id: "tspan55",
                "sodipodi:role": "line",
                x: "584.38837",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#7b65c0", "fill-opacity": "1" }
              }, null, -1),
              createBaseVNode("tspan", {
                id: "tspan54",
                "sodipodi:role": "line",
                x: "584.38837",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#7b65c0", "fill-opacity": "1" }
              }, "11 ULTRAVIOLET", -1)
            ])),
            createBaseVNode("text", {
              id: "text303",
              class: "levels-g",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#ffffff", "fill-opacity": "1" },
              x: "584.38837",
              y: "68.699028",
              "inkscape:label": "12",
              "sodipodi:insensitive": "true",
              onClick: _cache[11] || (_cache[11] = ($event) => emit("clearlight"))
            }, _cache[25] || (_cache[25] = [
              createBaseVNode("tspan", {
                id: "tspan302",
                "sodipodi:role": "line",
                x: "584.38837",
                y: "68.699028",
                style: { "font-size": "37.3333px", "line-height": "1.5" }
              }, "12 CLEARLIGHT", -1),
              createBaseVNode("tspan", {
                id: "tspan303",
                "sodipodi:role": "line",
                x: "584.38837",
                y: "124.69898",
                style: { "font-size": "37.3333px", "line-height": "1.5" }
              }, null, -1)
            ])),
            _cache[28] || (_cache[28] = createBaseVNode("text", {
              id: "text315",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "display": "inline", "fill": "#b54e64", "fill-opacity": "1" },
              x: "627.72815",
              y: "351.10678",
              "inkscape:label": "1",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan304",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "351.10678",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan305",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "383.10672",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan306",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "415.10669",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan307",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "447.10663",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan308",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "479.10657",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan309",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "511.10654",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan310",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "543.10651",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan311",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "575.10645",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan312",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "607.10638",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan313",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "639.10632",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan314",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "671.10626",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan315",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "703.1062",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#b54e64", "fill-opacity": "1" }
              }, "default instinct")
            ], -1)),
            _cache[29] || (_cache[29] = createBaseVNode("text", {
              id: "text326",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "display": "inline", "fill": "#a3094d", "fill-opacity": "1" },
              x: "627.534",
              y: "327.33981",
              "inkscape:label": "2",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan316",
                "sodipodi:role": "line",
                x: "627.534",
                y: "327.33981",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan317",
                "sodipodi:role": "line",
                x: "627.534",
                y: "359.33975",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan318",
                "sodipodi:role": "line",
                x: "627.534",
                y: "391.33972",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan319",
                "sodipodi:role": "line",
                x: "627.534",
                y: "423.33966",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan320",
                "sodipodi:role": "line",
                x: "627.534",
                y: "455.3396",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan321",
                "sodipodi:role": "line",
                x: "627.534",
                y: "487.33957",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan322",
                "sodipodi:role": "line",
                x: "627.534",
                y: "519.33954",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan323",
                "sodipodi:role": "line",
                x: "627.534",
                y: "551.33948",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan324",
                "sodipodi:role": "line",
                x: "627.534",
                y: "583.33942",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan325",
                "sodipodi:role": "line",
                x: "627.534",
                y: "615.33936",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan326",
                "sodipodi:role": "line",
                x: "627.534",
                y: "647.33929",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#a3094d", "fill-opacity": "1" }
              }, "magic lore")
            ], -1)),
            _cache[30] || (_cache[30] = createBaseVNode("text", {
              id: "text336",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#df1305", "fill-opacity": "1" },
              x: "628.52429",
              y: "88.466019",
              "inkscape:label": "3",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan327",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "88.466019",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan328",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "144.46597",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan329",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "200.46593",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan330",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "256.46588",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan331",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "312.46582",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan332",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "368.46579",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan333",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "424.46573",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan334",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "480.4657",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan335",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "536.46564",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan336",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "592.46558",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#df1305", "fill-opacity": "1" }
              }, "selfish legend")
            ], -1)),
            _cache[31] || (_cache[31] = createBaseVNode("text", {
              id: "text345",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#bb6626", "fill-opacity": "1" },
              x: "629.12622",
              y: "86.873787",
              "inkscape:label": "4",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan337",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "86.873787",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan338",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "142.87373",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan339",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "198.87369",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan340",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "254.87364",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan341",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "310.8736",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan342",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "366.87354",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan343",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "422.8735",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan344",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "478.87344",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan345",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "534.87341",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#bb6626", "fill-opacity": "1" }
              }, "myth member")
            ], -1)),
            _cache[32] || (_cache[32] = createBaseVNode("text", {
              id: "text353",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#e39722", "fill-opacity": "1" },
              x: "628.52429",
              y: "88.271843",
              "inkscape:label": "5",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan346",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "88.271843",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan347",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "144.27179",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan348",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "200.27174",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan349",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "256.2717",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan350",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "312.27167",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan351",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "368.27161",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan352",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "424.27155",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#e39722", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan353",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "480.27151",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#e39722", "fill-opacity": "1" }
              }, "rational achiever")
            ], -1)),
            _cache[33] || (_cache[33] = createBaseVNode("text", {
              id: "text367",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#0e8f14", "fill-opacity": "1" },
              x: "629.12622",
              y: "86.873787",
              "inkscape:label": "6",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan361",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "86.873787",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan362",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "142.87373",
                style: { "font-size": "21.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan363",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "198.87369",
                style: { "font-size": "21.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan364",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "254.87364",
                style: { "font-size": "21.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan365",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "310.8736",
                style: { "font-size": "21.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan366",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "366.87354",
                style: { "font-size": "21.3333px", "line-height": "1.5", "fill": "#0e8f14", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan367",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "422.8735",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#0e8f14", "fill-opacity": "1" }
              }, "sensitive pluralist")
            ], -1)),
            _cache[34] || (_cache[34] = createBaseVNode("text", {
              id: "text373",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#00abb7", "fill-opacity": "1" },
              x: "628.52429",
              y: "367.08737",
              "inkscape:label": "7",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan373",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "367.08737",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#00abb7", "fill-opacity": "1" }
              }, "integral developer")
            ], -1)),
            _cache[35] || (_cache[35] = createBaseVNode("text", {
              id: "text379",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#3e70e3", "fill-opacity": "1" },
              x: "627.72821",
              y: "311.96115",
              "inkscape:label": "8",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan379",
                "sodipodi:role": "line",
                x: "627.72821",
                y: "311.96115",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#3e70e3", "fill-opacity": "1" }
              }, "holistic centaur")
            ], -1)),
            _cache[36] || (_cache[36] = createBaseVNode("text", {
              id: "text383",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#4243e0", "fill-opacity": "1" },
              x: "628.52429",
              y: "88.271843",
              "inkscape:label": "9",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan380",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "88.271843",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4243e0", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan381",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "144.27179",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4243e0", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan382",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "200.27174",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4243e0", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan383",
                "sodipodi:role": "line",
                x: "628.52429",
                y: "256.2717",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4243e0", "fill-opacity": "1" }
              }, "psychic intuitive")
            ], -1)),
            _cache[37] || (_cache[37] = createBaseVNode("text", {
              id: "text387",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#4f2af1", "fill-opacity": "1" },
              x: "629.12622",
              y: "88.271843",
              "inkscape:label": "10",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan384",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "88.271843",
                style: { "font-size": "37.3333px", "line-height": "1.5", "fill": "#4f2af1", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan385",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "144.27179",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4f2af1", "fill-opacity": "1" }
              }),
              createBaseVNode("tspan", {
                id: "tspan386",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "200.27174",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4f2af1", "fill-opacity": "1" }
              }, "subtle visionary"),
              createBaseVNode("tspan", {
                id: "tspan387",
                "sodipodi:role": "line",
                x: "629.12622",
                y: "256.2717",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#4f2af1", "fill-opacity": "1" }
              })
            ], -1)),
            _cache[38] || (_cache[38] = createBaseVNode("text", {
              id: "text389",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "37.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#7b65c0", "fill-opacity": "1" },
              x: "627.72815",
              y: "145.60928",
              "inkscape:label": "11",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan389",
                "sodipodi:role": "line",
                x: "627.72815",
                y: "145.60928",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif", "fill": "#7b65c0", "fill-opacity": "1" }
              }, "causal witness")
            ], -1)),
            _cache[39] || (_cache[39] = createBaseVNode("text", {
              id: "text33",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "display": "inline", "fill": "#ffffff", "fill-opacity": "1" },
              x: "628.33008",
              y: "89.669907",
              "inkscape:label": "12",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan22",
                "sodipodi:role": "line",
                x: "628.33008",
                y: "89.669907",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif" }
              }, "nondual union"),
              createBaseVNode("tspan", {
                id: "tspan33",
                "sodipodi:role": "line",
                x: "628.33008",
                y: "121.66985",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "21.3333px", "line-height": "1.5", "font-family": "sans-serif", "-inkscape-font-specification": "sans-serif" }
              })
            ], -1)),
            _cache[40] || (_cache[40] = createBaseVNode("rect", {
              id: "rect300",
              style: { "fill": "#000000", "fill-opacity": "1", "stroke-width": "0.413859" },
              width: "1.0322881",
              height: "629.14929",
              x: "564.20074",
              y: "37.728489",
              "inkscape:label": "firsttier"
            }, null, -1)),
            _cache[41] || (_cache[41] = createBaseVNode("rect", {
              id: "rect301",
              style: { "fill": "#000000", "fill-opacity": "1.0", "stroke-width": "0.295012" },
              width: "1",
              height: "330.01501",
              x: "554.23328",
              y: "37.719208",
              "inkscape:label": "secondtier"
            }, null, -1)),
            _cache[42] || (_cache[42] = createBaseVNode("rect", {
              id: "rect302",
              style: { "fill": "#000000", "fill-opacity": "1.0", "stroke-width": "0.240753" },
              width: "1",
              height: "219.78427",
              x: "544.23303",
              y: "37.747627",
              "inkscape:label": "thirdtier"
            }, null, -1)),
            _cache[43] || (_cache[43] = createBaseVNode("text", {
              id: "text1",
              "xml:space": "preserve",
              style: { "font-size": "56.4435px", "fill": "#00e1ff", "fill-opacity": "1", "stroke-width": "1.32289" },
              x: "-639.83649",
              y: "548.93536",
              "inkscape:label": "altitudes",
              transform: "rotate(-90)"
            }, [
              createBaseVNode("tspan", {
                id: "tspan1",
                x: "-639.83649",
                y: "548.93536",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "56.4435px", "font-family": "'URW Gothic'", "-inkscape-font-specification": "'URW Gothic'", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
                "sodipodi:role": "line"
              }, "Altitudes")
            ], -1)),
            _cache[44] || (_cache[44] = createBaseVNode("text", {
              id: "text398",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "300", "font-stretch": "normal", "font-size": "21.2017px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Light'", "letter-spacing": "0.959054px", "fill": "#ffffff", "fill-opacity": "1", "stroke-width": "1.21583" },
              x: "-581.23804",
              y: "578.50348",
              transform: "matrix(0,-1.2158309,0.8224828,0,0,0)",
              "inkscape:label": "identity",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan398",
                "sodipodi:role": "line",
                x: "-581.23804",
                y: "578.50348",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "300", "font-stretch": "normal", "font-size": "21.2017px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Light'", "letter-spacing": "0.959054px", "fill": "#ffffff", "fill-opacity": "1", "stroke-width": "1.21583" }
              }, " personality ---- ego ---- psyche ------ consciousness")
            ], -1)),
            _cache[45] || (_cache[45] = createBaseVNode("text", {
              id: "text399",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "24px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000", "fill-opacity": "1" },
              x: "361.819",
              y: "86.994728",
              "sodipodi:insensitive": "true"
            }, [
              createBaseVNode("tspan", {
                id: "tspan399",
                "sodipodi:role": "line",
                x: "361.819",
                y: "86.994728"
              })
            ], -1)),
            _cache[46] || (_cache[46] = createBaseVNode("text", {
              id: "text2",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "10.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "display": "inline", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
              x: "499.66086",
              y: "659.2298",
              "inkscape:label": "altitudes"
            }, [
              createBaseVNode("tspan", {
                id: "tspan2",
                x: "499.66086",
                y: "659.2298",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "10.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
                "sodipodi:role": "line"
              }, "created by"),
              createBaseVNode("tspan", {
                id: "tspan4",
                x: "499.66086",
                y: "672.56317",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "10.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
                "sodipodi:role": "line"
              }, "Ken Wilber"),
              createBaseVNode("tspan", {
                id: "tspan3",
                x: "499.66086",
                y: "685.89655",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "10.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
                "sodipodi:role": "line"
              }, "altered by"),
              createBaseVNode("tspan", {
                id: "tspan6",
                x: "499.66086",
                y: "699.22992",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "10.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "fill": "#000000", "fill-opacity": "1", "stroke-width": "1.32289" },
                "sodipodi:role": "line"
              }, "unThinkMe")
            ], -1)),
            _cache[47] || (_cache[47] = createBaseVNode("text", {
              id: "text7",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "12px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "text-align": "end", "letter-spacing": "0.92px", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "1.14142", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              x: "573.63983",
              y: "48.402458"
            }, [
              createBaseVNode("tspan", {
                id: "tspan13",
                "sodipodi:role": "line",
                x: "573.63983",
                y: "48.402458",
                style: { "font-size": "12px", "text-align": "end", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-opacity": "1" }
              }, "1"),
              createBaseVNode("tspan", {
                id: "tspan14",
                "sodipodi:role": "line",
                x: "573.63983",
                y: "67.602455",
                style: { "font-size": "12px", "text-align": "end", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-opacity": "1" }
              })
            ], -1)),
            _cache[48] || (_cache[48] = createBaseVNode("text", {
              id: "text8",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "12px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "letter-spacing": "0.92px", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "1.14142", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              x: "546.4184",
              y: "48.578362"
            }, [
              createBaseVNode("tspan", {
                id: "tspan8",
                "sodipodi:role": "line",
                x: "546.4184",
                y: "48.578362"
              }, "3")
            ], -1)),
            _cache[49] || (_cache[49] = createBaseVNode("text", {
              id: "text10",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "12px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell, Normal'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "letter-spacing": "0.92px", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "1.14142", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              x: "556.745",
              y: "48.516891"
            }, [
              createBaseVNode("tspan", {
                id: "tspan9",
                "sodipodi:role": "line",
                x: "556.745",
                y: "48.516891",
                style: { "font-size": "12px", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-opacity": "1" }
              }, "2")
            ], -1)),
            _cache[50] || (_cache[50] = createBaseVNode("rect", {
              id: "rect10",
              style: { "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0.126577", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1.0" },
              width: "10.750374",
              height: "0.88941884",
              x: "544.38104",
              y: "256.65634"
            }, null, -1)),
            _cache[51] || (_cache[51] = createBaseVNode("rect", {
              id: "rect11",
              style: { "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0.125754", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1.0" },
              width: "10.600965",
              height: "0.89024699",
              x: "554.30127",
              y: "367.80841"
            }, null, -1)),
            _cache[52] || (_cache[52] = createBaseVNode("rect", {
              id: "rect12",
              style: { "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0.123506", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              width: "10.199626",
              height: "0.8924948",
              x: "564.34906",
              y: "666.31183"
            }, null, -1)),
            _cache[53] || (_cache[53] = createBaseVNode("text", {
              id: "text16",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "300", "font-stretch": "ultra-condensed", "font-size": "10.7946px", "line-height": "1.6", "font-family": "'Fira Sans Compressed'", "-inkscape-font-specification": "'Fira Sans Compressed, Light Ultra-Condensed'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "text-align": "end", "letter-spacing": "1.10861px", "text-anchor": "end", "fill": "#000000", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "1.37545", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              x: "553.70319",
              y: "47.307228",
              transform: "scale(0.97986534,1.0205484)"
            }, [
              createBaseVNode("tspan", {
                id: "tspan17",
                "sodipodi:role": "line",
                x: "554.81177",
                y: "47.307228",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "200", "font-stretch": "ultra-condensed", "font-size": "10.7946px", "font-family": "Sans", "-inkscape-font-specification": "'Sans, Ultra-Light Ultra-Condensed'", "font-variant-ligatures": "normal", "font-variant-caps": "normal", "font-variant-numeric": "normal", "font-variant-east-asian": "normal", "stroke-width": "1.37545" }
              }, "Tier")
            ], -1))
          ])
        ])),
        createBaseVNode("h5", {
          class: "pedantic",
          style: { "cursor": "pointer" },
          onClick: _cache[12] || (_cache[12] = ($event) => emit("infrared"))
        }, "LEVEL DESCRIPTIONS"),
        createBaseVNode("h5", {
          class: "pedantic",
          style: { "cursor": "pointer" },
          onClick: _cache[13] || (_cache[13] = ($event) => emit("next"))
        }, "LINES")
      ]);
    };
  }
});
const Levels = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-917f9075"]]);
const _imports_0$2 = "/assets/aqalalatas-C6_92Bkf.png";
const _hoisted_1$5 = { class: "integral-map" };
const _hoisted_2$5 = { class: "map-container" };
const _hoisted_3$4 = ["onClick"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Map",
  emits: ["next", "hrf"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const regions = [
      { top: "0%", left: "0%", width: "33%", height: "100%", hrf: "Levels" },
      { top: "0%", left: "33%", width: "33%", height: "40%", hrf: "Types" },
      { top: "40%", left: "33%", width: "33%", height: "60%", hrf: "Lines" },
      { top: "0%", left: "66%", width: "33%", height: "50%", hrf: "States" },
      { top: "50%", left: "66%", width: "33%", height: "50%", hrf: "Quadrants" }
    ];
    const handleClick = (hrf) => {
      emit("hrf", hrf);
      window.scrollTo(0, 0);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(BookHero),
        _cache[1] || (_cache[1] = createStaticVNode('<h1>Map</h1><p><b>Stein unLimited</b> presents our own unique visual models of Ken Wilber&#39;s <b>Integral Theory</b>. Each Element is covered in depth in the book. <span class="pedantic"> Top buttons select <b>Elements.</b></span></p><h2>The Five Elements</h2><h4>Reality = <span class="hilight">AQALALATAS</span><br><span class="hilight">A</span>ll { <span class="hilight">Q</span>uadrants, <span class="hilight">L</span>evels, <span class="hilight">L</span>ines, <span class="hilight">T</span>ypes, <span class="hilight">S</span>tates } </h4>', 4)),
        createBaseVNode("div", _hoisted_2$5, [
          _cache[0] || (_cache[0] = createBaseVNode("img", {
            class: "integral-banner",
            src: _imports_0$2
          }, null, -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(regions, (region) => {
            return createBaseVNode("div", {
              key: region.hrf,
              class: "region",
              style: normalizeStyle({
                top: region.top,
                left: region.left,
                width: region.width,
                height: region.height
              }),
              onClick: withModifiers(($event) => handleClick(region.hrf), ["prevent"])
            }, null, 12, _hoisted_3$4);
          }), 64))
        ])
      ]);
    };
  }
});
const integral_states_info = `## [ORDINARY SECTION]

# Ordinary States

---

### Three Bodies

All people experience a host of minor ordinary States, but there are three Major States (or realms, or bodies) of consciousness that we enter every day: **Waking, Dreaming,** and **Deep Sleep.** Those States where you are ordinarily unconscious can be accessed through spiritual practice, exposing entire realms of deep meaning and revealing transcendent modes of knowing and being. The realm, or embodiedness, of REM dream states is called Subtle, and this includes lucid dreams and similar phenomena. Likewise, Causal States take place in a realm of total emptiness prior to time or the manifestation of form, and resemble NREM deep sleep, with self-reflecting conscious (Witness) being the only content. What we call Gross States are all States like this one - where you are in a physical body in this physical world, and you cannot leave your body or fantasize anything into being. There is a persistent feeling of disconnectedness, desperation, lostness, and not having or being enough. Using waking States to access Subtle and Causal States is recognized in meditative traditions to cure this ailment in a certain sense by creating a long term sense of Oneness and harmony with all of creation and with the flow of time. These States are called Nondual, final enlightenment, integrating all three realms into a single conscious experience.

### Waking

For almost all adults, waking consciousness takes place in the Alpha and Beta brainwave range, or Gross realm. Transcendental spiritual states are only accessed at random and very infrequently. Consciousness is lost in nearly all stages of sleep. Obviously, this does not mean that our reality lacks for variety. In Waking consciousness, we find States ranging from boredom to elation, rage to agony to bliss to embarrassment to intellectual overdrive. It is terribly important to realize, like the existentialists and psychoanalysts, that our dreaming mind and our causal consciousness play an invisible role in constructing our self and our reality, influencing all waking State experiences behind the scenes. Integral Spiritual work encourages Waking Up to all three realms, including being more awake and participatory in Waking states. We may also discuss **Non-Ordinary** or Altered States, which could include rare States caused by extreme challenge, or by intoxication. Entheogens can help a person access altered States which may run parallel to or expose themm to Subtle and Causal States. Some people consider these plants and fungi both "medicine" and "teacher" (of spiritual States.) The Integral perspective is typically to recognize that entheogens play a sort of "gateway" role in accessing spirituality, and may be used for long term Waking Up therapies. We also stress that our most recommended paths to Spirit are non-entheogenic routes, as we feel that quality meditative practice very quickly gets a person to deeper and much purer (but perhaps less exciting) endogenous transcendental States than the chemical path would typically yield in a similar time frame. I'm going to sound like a broken record here, but we need Integral methodology to connect good science being done on spiritual States (which is scant but ever improving) with goo science being done on entheogens (often illegal.) Integral includes psychedelia as one of many paths.

### Dreaming

For most people, dreams are like the great vast ocean sprawling endlessly from their coastal town. What's out there? Who knows. Probably a whole lot of nothing. But the sailors know. We may feel that dreams tell us nothing. Dreams don't matter. They don't "really" happen. It doesn't matter what happens in a dream. It's all in your head. When we consciously dream, we are inhabiting a world of the mind's creation, in an imaginary body. Whatever is there, and whatever happens, is because an unconscious, invisible part of yourself is putting it there right now. Isn't that intriguing? Look that thing right in the eye. Let it terrify you. It doesn't matter, right? Everything that happens here is just yourself. These buildings, these other people, it's all You. Are you not the slightest bit curious who this other person is, living in the hidden places of your mind? Well, this is them talking to you. This stuff is all here for a reason. You are finally communicating with your entire Self. We may deepen this relationship in many ways. We can analyze our dreams, searching for puns and clues and hints, and they sure are in there. That invisible person is a genius. It's a real puzzle, and everything is significant. Have you ever just asked that person to come out? Go into a dream and say you want to talk to them. What will happen? We may pursue lucid dream practices and various other forms of sleep meditation, so that we can be more stable, present, and in control. We may also take on meditative practices, which can incude dreams from the waking state (generally sitting, but also Psychic States which blend Subtle and Gross.) Ultimately, we may recognize the dream work as Subtle State practice, and this may inspire us to pursue even deeper practices, which bring the consciousness or awakeness into a space even beyond the dreaming mind. The dream rolls away to total empty nothingness, and you're the only thing still here. You are the emptiness.

### Deep Sleep

It may be difficult to imagine this seeming paradox of being totally awake and totally asleep at the same time (and keep in mind this is not easy stuff to put into words!) Consider this wonderful analogy: when we are fully asleep, we say we are "unconscious." We are not awake, alert, or present, but if someone comes and kicks you, you wake up. Someone was awake enough that they can be roused by commotion. If you are unconscious you can't hear or feel anything. Even in deep sleep, you are awake enough that you continue breathing, and moving through sleep cycle stages, and you might even move around "unconsciously." So yet again, we have an "invisible" person living inside our mind. Somebody is listening for the alarm to go off. Imagine being that somebody. It's just listening to silence, feeling nothing. It's the cells in your brain just being alive and saying you are here. In deep sleep, we are Delta consciousness, just pure listening to silence, seeing nothing. You spend a lot of time paying attention to this, and it occurs to you that this never goes away. This is all there is. It's just the consciousness. And then the dreams and the symbols and the Subtle body, *that invisible guy,* and then the real body comes back and here's the world again, and I'm laying in bed or sitting on my mat, and I remember all the stuff in the "real" world. The whole time, it's still just that Witness. That's all there is. It's in space. It's in that other person, in the crickets, in the rain. All there is is just looking at it. It's always just the Witnessing of itself. If something terrible happens, you can always just roll right back out, to the beginning, to before anything existed, and you've changed nothing. Just shut the game off because you're finished with it. Oh, but you aren't finished with it. Why would you be? Because You are just the self-aware space of the kosmos. You are attached to nothing. We enter this world and we play the kosmically-informed part that we play, because it is our choice, because just imagine if more of us understood this? Imagine the suffering that could be saved, and the joy that could be had. In the relative world, that goes away from the lights switch off. Where the only certainty is negative outcomes from attachment. Imagine if it was entirely, entirely your unpressured, abstract choice to be here. You could be free, but you love people, and it would be funny if your whole deal was that you teach this because you love them. You can reveal that all three realms resonate together to create this moment, and they can be visible, and you can be free. Integral culture creates a space for these Subtle and Causal bodies (perhaps your literal soul and Spirit.) Crazy people talk about this, but this is not crazy. This is Integral Spirituality. 

## [BRAINWAVES SECTION]

# Brainwave States

---

There is a strong desire for transpersonal mystical States to provide scientific backing. One measure which is evident and easily comprehensible is EEG (electroencephalography). We can explore Branwave ranges and how they correspond to Major Ordinary States of consciousness, and also how those might correspond to an overlapping comparitive religious progression of milestones along the path of Waking Up.

### Frequency Ranges

We can generalize electrical brainwave activity into bands of frequency. The Beta band is characteristic of alert, high energy activity. Alpha States are relaxed, able to step back and look at the bigger picture, calm and ambivalent. Most of us are only conscious as Alpha and Beta patterns. We act as Ego and Personalities in an objective world, or Gross realm. There are forms of intelligence that seem to be produced by faster waves, particularly various forms of social fluency. As a rule of thumb, more intelligent thoughts come from slower brainwaves. The unpressured mind is able to make outstanding connections, and visualize and concretize enormous abstractions with an intuitive sense of clarity. Theta patterns, accessed through practice and conscious dreaming, introduce visionary fantasy, disembodiedness, structural dissolution and creation. There are also other relevant brainwave ranges, including Gamma, but I feel we lack the research and understanding to positively include them in this model. Extremely advanced meditation practices, often focused on compassion, produce these faster patterns, which otherwise only occur in intense or extreme circumstances. More consistently, we see a Delta pattern, the slowest waves, or near-total cessation of activity, in other highly advanced forms of meditation accessing Causal States.

### BETA

During the day when we take care of responsibilities, we use the awake, alert, responsive, productive Beta range. These brainwaves consume high energy, and can lead to stress, depletion, and poor health. We require rest or else we'll start talking about Gamma waves!

### ALPHA

In a mellow, restful, or playful state of mind, we show more Alpha range. Deeper in this range, we reach the edge of sleep (hypnagogic state). Alpha is absorptive, synthesizing, and creative. Sometimes, to solve a problem, you just need to take a break.

### THETA

Early meditation trials showed meditators entering Alpha brain states, but it was discovered that more advanced meditators get into Theta ranges. These are brainwaves that dominate the dream state and show up more heavily in children. A Theta waking state is indicative of access to Psychic (and possibly Subtle) States. Most of us only experience Theta while dreaming, and tend to sleep through or forget our dreams, which happen several times a night for almost everyone. Most of us have scant dream recall and few or infrequent lucid dreams. This is normal. Some of us lucid dream every night and approach Theta states with the same awareness and recall that we have throughout the day. Lucid dreams by night and Psychic States by day tend to coarise. This is the Level of Identity as Psyche. It's the ultimate character of the relationship between everything Ego does and doesn't know. Sweetest dreams and worst nightmares, treasures and dragons. It is uncommon for a person to believe in or take seriously this very real and fundamental fact of human life. Those who do should be called spiritual, or nature and deity mystics, in an Integral sense. In these individuals, neglect of Personality and Ego (Shadow) are also common. At this level of practice, serious Shadow work, with assistance, is highly recommended.

### DELTA

The baseline hum of sentient living being. We experience a small amount of Delta (all by itself) when we are in deep dreamless sleep. Totally unconscious. The most advanced meditators in particular traditions (and also Ken Wilber) can display the ability to consciously access pure Delta States while still awake and aware. This appears to be the physical basis of what is commonly called spiritual enlightenment, nondual union, or transcendence. To experience Consciousness itself, without any forms or content or anything, is to see the truest and deepest version of yourself, and also the world, as One. You and every other living being are identical at this level, thus the actual nature of yourself is that you are the Universe. This core exists before anything, always, no matter what happens to a person, or everyone, no matter what happens in the story, this thing is simply here, watching. Those who experience constant consciousness through waking, dreaming, and deep sleep, every day, realize every Level, awake or at least present, all the time. This Nondual being is considered full enlightenment, or the "fourth state", turiyatita. To describe this sort of thing in plain language completely fails to convey States that take decades for very dedicated experts with help to access if they are lucky. Words do not impart what it is to vibe with the entire cosmos and perceive the oneness of all existence, but what we hope to convey is that this is not mere mystical speculation. It has been observed and reported all throughout the world, throughout history. It may be interpreted countless ways, but this is real. 

## [SELVES SECTION]

# Self Affinity

---

As a transcendental mystic accesses higher States and State realms, it is common to experience changes to the sense of self and identity. We are identifying more and more with the embodiedness of the higher State. Ultimately, the goal of Integral spiritual practice is to fully become, or integrate, the deepest realms of embodiment, without abandoning any. At this point, the State has become a stage, or state-structure, or state-stage (come on, Ken). If the individual is interpreting the State through Turquoise, we can consider these higher State identities as Levels Indigo, Violet, Ultraviolet, and Clearlight (Altitudes corresponding to Psychic, Subtle, Causal, and Nondual state-structures.) Here, we standardize these shifting State identities into common, non-religious wording which intuitively line up with the Brainwaves and Spiritual States.

### SELF 1: PERSONALITY

Typical children and those up to Amber identify with Personality. The personality is a character that you play right now to get things. Children have no self-monitoring, so they are pure personality. Much of their work is to gain self-awareness in order to understand and control their impulsivity. As adults, we use personalities in the roles that we play to fulfill our responsibilities. If overused, a person can start to feel selfless or ungrounded. Being pure personality as an adult is not well tolerated, generally considered a regressed development or personality disorder.

### SELF 2: EGO

Ego or I is a self-aware, reasonable agent. It understands its motives, it loves and hates and respects and tolerates, it governs the use of personalities, and it is ever focused on the way that it is perceived, appreciated, and responded to by others. Ego is neither good nor bad. Ironically, Ego is the judge of that. Ego is the controller of Personality. Our concept of adulthood generally describes prevalent, healthy ego. Nevertheless, this is another functional construction, and the problem of ego is that it mistakes itself for the actual Self, or the whole of comprehended reality, which is found at deeper identities.

### SELF 3: PSYCHE

The Psyche is the total mind, and can be experienced as a sense of identity as all that is arising, and all that is unseen. Disruptions in the psyche, originally called hysteria and psychosis, are the visible symptoms of mental illness, so psychologists such as Freud and Jung attempted to map and comprehend its intricate depths. As you gain awareness of how the Psyche functions, you see that it is the source of concepts and feelings and even your imaginary concepts of other people's internal realities. It is your style, your dreams, and your soul. A person who begins to identify as Psyche, or is Psyche-aware, having Psychic States of consciousness, has fairly direct consciousness of their own process of constructing reality. The Psyche is senior to Ego. It contains and constructs Ego. It is a deeper, more true version of the self. It includes more of the subconscious and unconscious, and an awakened holistic view of this moment. Through this lens, we may learn to access the depths of Subtle realms, and experience the totality of reality as a manifested diety, showering you in the glory of your own buried treasure. This is the truest experience of form, to inhabit the root archetypes which blossom into the story of your life and the history of creation.

### SELF 4: CONSCIOUSNESS

There is one thing that is always here, whether we are waking, dreaming, or sleeping. That is consciousness. How do you know to wake up when someone kicks you? Something is awake, listening, and that's actually you. A witness to this everything. Witnessing the simple nondual feeling of being. Common to all sentient creatures, ever birthing and evolving forms. I Am, you are, and we have always been the creator of the Universe. It is being us, you, and I. We are the self-aware physical matter of Big Bang, the singing and dancing planet Earth, the history of Mind. If you could spend eternity in utter infinite formless nothingness, you would come to be and live and evolve and Wake Up this reality. And so it is. The Simple Feeling of Being is common to all moments, even unconscious. This is the deepest core of yourself and everything, your true identity. The Self.

### The Consensus Trance

We cannot access higher affinities or coordinations of the mind as long as we continue to identify with the lower. We are conscious of a person, constructed into a person, viewing through a person, receiving feedback. We have learned and coordinated through training to never access States of utter freedom and bliss, creative brilliance, weeping joy, and other-worldly visions. Society reinforces this "Matrix," not as a deliberate mental prison, but simply because so few of us recognize the signficance of States that we are more or less culturally blind to them.

### Trans-Rational Mysticism

Integral provides a mono-mythic, universal donor theory of States and recommends meditation for the practice of Waking Up. State practices are available to all people, not just the religious or dead. These classically spiritual states of consciousness will become more commonplace as spirit unfolds, and will produce new stages of human development. Religion and romantic idealism view spirituality as a thing of the past that we have lost through corrupting development. Integral sees the past for what it was, Levels, and enlightenment as a future evolutionary potential. Looking back through history, it seems these spiritual States have driven much of the civilization of our world. 

## [SPIRITUAL SECTION]

# Spiritual States

---

In this model, we are specifically talking about a generalized progression of State-stages, that is, stages of States, classically achieved through spiritual practice, typically meditation. Each of these States can be thought of as a Body, or Realm, as they entirely occupy your sensory experience and awareness while you are practicing successfully. Transcendental States can be experienced by anyone at any time, but to acquire them as Traits, or to be able to access the State at will at any time, requires a very intense effort to achieve. Each is experienced as a sort of reversal to the rules and the nature of reality. Each is often described as an epiphany, a communion with a higher identity or being, often intense, harsh, terrifying, disruptive, but nevertheless resulting in the person feeling as though they have awoken from a dream into a greater reality, that they are able to face everything they were never able to face before, that this experience was intensely life changing and impactful.

### GROSS

This is our typical awareness. Our body. The material environment. Our personal concerns and worries, our stories, our people of interest. Our work. Our activities. Our stories. All the stories that everybody has. This is the gross realm, or State.

### PSYCHIC

Not to be confused with paranormal abilities, it means psyche-aware. At this point, a person may maintain bodily thought and awareness, but a sort of daydreaming causes them to identify more with consciousness and their total holistic and ideological environment. If Psychic States are practiced regularly, a person becomes considerably more lucid, they may display forms of genius and high vulnerability. Psychic States, as the gateway to deeper practices, can be shocking, startling, and terrifying. They can lead to re-traumatization experiences, bizarre bodily phenomena, and general spooky stuff.

### SUBTLE

The Subtle is an entire realm of pure mind. One way to hypothetically describe this state is that it is like dreaming while fully awake. Both parts are on at once. It takes a long time to enter, discover, and maintain these States. This is deep into the practice. A person who spends a lot of time in Subtle States is psyche-aware. They are self-aware of how their reality is constructed by stories and memes, or archetypes.

### CAUSAL

This is the most-Subtle, or Causal, body or State realm. A person in this State will show practically no Beta or Alpha brainwaves, and they will describe dropping out of body and mind and becoming the pure essence of reality itself. This is the typical form of spiritual enlightenment, ultimate oneness, gnosis, or godhead. The self truly sees, once and for all, that it is nothing else besides the self, looking at the self. The Witness. No matter what happens, this is here, everywhere, forever. I am this. Infinite. Empty. Everything and everybody you know, every story, this whole dang thing is You. You crawled out of the ocean, you set this whole thing up. Its very funny. It is definintely not words, though, and it is definintely not knowledge. Talking about it is only an attempt to point out, or translate, one State from within another.

### NONDUAL

It's always a little funny for a middling student of meditation to attempt to describe the ultimate culmination and fulfillment of the practice. But this is what Integral is all about. It is to shed some basic light, and lend some basic categories, to this whole thing that is the ultimate freedom, the ultimate bliss and surrender, the ultimate meaning of life, the universe, and everything. I will attempt to spoil the ending for both of us, with the understanding that I'm not entirely sure that I stayed awake through the second half of the picture. The Causal State reveals the ultimate essence of the self and reality, a sort of singularity. The Nondual State is then integrating Causal into Waking, bringing that State into the world, as the world, as the most active agent and the most passive, emotionally-invested observer. This is a fully awake and enlightened person, if they stay that way, all the time. Constant consciousness through waking, dreaming, and deep sleep, and the ability to silence the entire brain at will. Exceedingly rare, also everpresent and always already realized. 🫥 `;
const _hoisted_1$4 = { class: "states-container" };
const _hoisted_2$4 = {
  id: "states-model",
  viewBox: "0 60 434.55936 480.71686",
  version: "1.1",
  "inkscape:version": "1.3.2 (091e20ef0f, 2023-11-25, custom)",
  "sodipodi:docname": "StatesModel.svg",
  "inkscape:export-filename": "StatesModel.png",
  "inkscape:export-xdpi": "96",
  "inkscape:export-ydpi": "96",
  "xml:space": "preserve",
  "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
  "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
};
const _hoisted_3$3 = {
  id: "layer1",
  "inkscape:label": "Layer 1",
  "inkscape:groupmode": "layer",
  transform: "translate(-248.16876,-4.3980366)",
  style: { "display": "inline", "border-radius": "12px" }
};
const _hoisted_4$2 = {
  id: "g12",
  transform: "translate(24.401287,-132.47546)",
  style: { "display": "inline", "fill-opacity": "1" }
};
const _hoisted_5$2 = {
  id: "text8",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "244.06317",
  y: "544.85376"
};
const _hoisted_6$2 = {
  id: "text9",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "241.85153",
  y: "457.25189"
};
const _hoisted_7 = {
  id: "text10",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "241.867",
  y: "357.24945"
};
const _hoisted_8 = {
  id: "text11",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "243.61609",
  y: "266.56757"
};
const _hoisted_9 = {
  id: "text25",
  "xml:space": "preserve",
  style: { "display": "inline", "paint-order": "stroke fill markers", "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1" },
  x: "411.79178",
  y: "229.05826",
  transform: "translate(-100.93892,-126.55447)"
};
const _hoisted_10 = {
  id: "g25",
  transform: "translate(-100.93892,-126.55447)",
  style: { "display": "inline", "fill": "#ff9955", "paint-order": "stroke fill markers" },
  "sodipodi:insensitive": "true"
};
const _hoisted_11 = {
  id: "text21",
  "xml:space": "preserve",
  style: { "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#c099f4", "fill-opacity": "1", "paint-order": "stroke fill markers" },
  x: "424.61035",
  y: "558.72089"
};
const _hoisted_12 = {
  id: "text22",
  "xml:space": "preserve",
  style: { "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
  x: "423.05743",
  y: "476.43652"
};
const _hoisted_13 = {
  id: "text23",
  "xml:space": "preserve",
  style: { "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#c099f4", "fill-opacity": "1", "paint-order": "stroke fill markers" },
  x: "423.96707",
  y: "375.98697"
};
const _hoisted_14 = {
  id: "text24",
  "xml:space": "preserve",
  style: { "font-size": "18.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#c099f4", "fill-opacity": "1", "paint-order": "stroke fill markers" },
  x: "433.26907",
  y: "284.85797"
};
const _hoisted_15 = {
  id: "g18",
  transform: "rotate(32.382452,404.56363,585.51757)",
  style: { "display": "inline" }
};
const _hoisted_16 = {
  id: "text13",
  "xml:space": "preserve",
  style: { "font-size": "14.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000" },
  x: "108.99459",
  y: "486.36197",
  transform: "rotate(-15.736262)"
};
const _hoisted_17 = {
  id: "text14",
  "xml:space": "preserve",
  style: { "font-size": "14.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000" },
  x: "153.3195",
  y: "393.20193",
  transform: "rotate(-17.411215)"
};
const _hoisted_18 = {
  id: "text15",
  "xml:space": "preserve",
  style: { "font-size": "14.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000" },
  x: "162.17647",
  y: "325.54593",
  transform: "rotate(-21.082726)"
};
const _hoisted_19 = {
  id: "text16",
  "xml:space": "preserve",
  style: { "font-size": "14.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000" },
  x: "130.68169",
  y: "242.11737",
  transform: "rotate(-18.003706)"
};
const _hoisted_20 = {
  id: "g5",
  transform: "translate(114.17919,-174.68186)",
  style: { "display": "inline", "stroke-width": "3", "stroke-dasharray": "none" },
  "inkscape:label": "grosspyschicsubtl",
  "sodipodi:insensitive": "true"
};
const _hoisted_21 = {
  id: "text1",
  "xml:space": "preserve",
  style: { "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "382.11453",
  y: "610.90247"
};
const _hoisted_22 = {
  id: "text5",
  "xml:space": "preserve",
  style: { "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "395.6539",
  y: "561.27686"
};
const _hoisted_23 = {
  id: "text3",
  "xml:space": "preserve",
  style: { "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "396.47995",
  y: "514.02985"
};
const _hoisted_24 = {
  id: "text4",
  "xml:space": "preserve",
  style: { "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "392.15906",
  y: "454.97736"
};
const _hoisted_25 = {
  id: "text2",
  "xml:space": "preserve",
  style: { "font-size": "21.3333px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "2.11252px", "display": "inline", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "398.98199",
  y: "395.31964"
};
const _hoisted_26 = {
  id: "text19",
  "xml:space": "preserve",
  style: { "font-size": "17.3333px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "display": "inline", "fill-opacity": "1" },
  x: "385.03699",
  y: "-522.8584",
  transform: "rotate(74.001885)",
  "inkscape:label": "spritiualpracti"
};
const _hoisted_27 = {
  id: "text47",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "start", "letter-spacing": "0.92px", "text-anchor": "start", "display": "inline", "fill": "#000000", "fill-opacity": "1", "stroke": "#e7b500", "stroke-width": "0", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "510.50623",
  y: "295.13605"
};
const _hoisted_28 = {
  id: "text48",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "start", "letter-spacing": "0.92px", "text-anchor": "start", "display": "inline", "fill": "#000000", "fill-opacity": "1", "stroke": "#e7b500", "stroke-width": "0", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "528.50439",
  y: "353.5126"
};
const _hoisted_29 = {
  id: "text49",
  "xml:space": "preserve",
  style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "line-height": "1.6", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "start", "letter-spacing": "0.92px", "text-anchor": "start", "display": "inline", "fill": "#000000", "fill-opacity": "1", "stroke": "#e7b500", "stroke-width": "0", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-dasharray": "none", "stroke-opacity": "1" },
  x: "494.1463",
  y: "401.66351"
};
const _hoisted_30 = {
  id: "text50",
  "xml:space": "preserve",
  style: { "font-size": "26.6667px", "line-height": "1.2", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "text-align": "center", "letter-spacing": "0.92px", "text-anchor": "middle", "display": "inline", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
  x: "553.56616",
  y: "469.91791"
};
const _hoisted_31 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "States",
  emits: ["ordinary", "brainwaves", "selves", "spiritual", "next"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const htmlSpiritual = injectMarkdown(integral_states_info, "SPIRITUAL SECTION");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[31] || (_cache[31] = createBaseVNode("h1", null, "States of Consciousness", -1)),
        _cache[32] || (_cache[32] = createBaseVNode("p", null, [
          createBaseVNode("span", { class: "pedantic" }, "Click map elements for more information."),
          createTextVNode(" This map displays all major categories of conscious State experience, illustrating the relationship between Ordinary States and a generalized progression of meditative spiritual States. We also map UR Quadrant brainwave states (electroencephalograph, EEG) to the described UL State experience. ")
        ], -1)),
        (openBlock(), createElementBlock("svg", _hoisted_2$4, [
          _cache[30] || (_cache[30] = createBaseVNode("defs", { id: "defs1" }, [
            createBaseVNode("linearGradient", {
              id: "linearGradient44",
              "inkscape:collect": "always"
            }, [
              createBaseVNode("stop", {
                id: "stop44",
                style: { "stop-color": "#c90047", "stop-opacity": "1" },
                offset: "0"
              }),
              createBaseVNode("stop", {
                id: "stop50",
                style: { "stop-color": "#428a35", "stop-opacity": "1" },
                offset: "0.39856303"
              }),
              createBaseVNode("stop", {
                id: "stop46",
                style: { "stop-color": "#1344a8", "stop-opacity": "1" },
                offset: "0.5427416"
              }),
              createBaseVNode("stop", {
                id: "stop47",
                style: { "stop-color": "#956dff", "stop-opacity": "1" },
                offset: "0.87829214"
              }),
              createBaseVNode("stop", {
                id: "stop45",
                style: { "stop-color": "#c5c5c5", "stop-opacity": "1" },
                offset: "1"
              })
            ]),
            createBaseVNode("linearGradient", {
              id: "linearGradient45",
              "inkscape:collect": "always",
              "xlink:href": "#linearGradient44",
              x1: "334.78207",
              y1: "247.22925",
              x2: "334.78207",
              y2: "619.77795",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "matrix(1.0933637,0,0,1,73.12827,-170.68186)"
            })
          ], -1)),
          createBaseVNode("g", _hoisted_3$3, [
            _cache[26] || (_cache[26] = createBaseVNode("rect", {
              id: "rect1",
              style: { "display": "inline", "fill": "#000000", "stroke-width": "0.603278" },
              width: "434.57373",
              height: "480.72748",
              x: "248.16399",
              y: "4.392283",
              "sodipodi:insensitive": "true"
            }, null, -1)),
            _cache[27] || (_cache[27] = createBaseVNode("path", {
              id: "path25",
              style: { "display": "inline", "fill": "#1d0b31", "fill-opacity": "1" },
              d: "m 357.25575,443.38706 c -2.01088,1.62943 -7.66205,2.87744 -6.03261,4.88832 1.62944,2.01086 7.66204,-2.87745 6.03261,-4.88832 -1.38522,-1.70948 -25.25503,-0.20283 -28.28198,-8.26297 -0.54595,-1.45378 -0.81657,-3.24143 -0.17465,-4.65545 1.2635,-2.78322 2.0832,-0.99681 4.59723,-1.72647 5.90165,-1.71288 10.16863,-8.44181 15.16883,-9.89307 1.81814,-0.52769 3.82581,0.91394 4.59723,-1.72647 0.58067,-1.98744 -0.15524,-4.13817 -0.23287,-6.20725 -0.13412,-3.57508 0.1505,-4.35381 -3.39471,-7.64264 -0.37949,-0.35205 -1.08048,0.27219 -1.55182,0.0582 -4.11505,-1.86811 -0.56246,-1.65797 -6.32369,-2.87077 -4.07259,-0.85731 -5.47117,-5.00063 -9.54376,-5.85794 -2.02613,-0.42652 -4.18113,0.65939 -6.20726,0.23287 -2.26529,-0.47687 -4.05841,-2.3939 -6.32369,-2.87077 -3.49024,-0.73472 -7.73336,1.81275 -10.92093,-1.14428 -1.0757,-0.99791 -1.37337,-10.4152 -0.46574,-12.41453 1.66654,-3.67103 4.66901,-3.85166 7.58442,-4.94652 2.45185,-0.92079 3.52254,-5.51935 5.97439,-6.44014 8.4934,-3.18965 19.60519,3.85536 24.59617,-7.13874 0.42795,-0.94268 0.12452,-2.09678 -0.11644,-3.10363 -1.10285,-4.60847 -4.78813,-6.39641 -9.60198,-7.40977 -1.01307,-0.21326 -2.2213,0.658 -3.10362,0.11644 -3.4202,-2.09932 -1.42129,-4.91787 -6.44014,-5.97439 -1.01307,-0.21326 -2.10989,0.40676 -3.10363,0.11643 -2.42225,-0.7077 -2.21985,-5.05494 -3.33649,-6.09082 -0.78836,-0.73134 -7.61909,0.14019 -4.77188,-2.92898 0.75882,-0.81796 6.87725,-0.0352 7.75907,-0.29109 2.22319,-0.64525 3.86763,-2.69125 6.09083,-3.3365 1.98848,-0.57713 4.39133,0.76188 6.20725,-0.23287 1.51519,-0.83 -2.36445,-5.49418 -3.3365,-6.09082 -3.55025,-2.17914 -8.3523,-1.75705 -11.03735,-4.24793 -7.49879,-6.95648 1.14441,2.08914 -5.00475,-9.13623 -0.88507,-1.6157 -10.96882,-8.46728 -12.76383,-8.84515 -1.01307,-0.21326 -2.27154,0.7324 -3.10363,0.11643 -2.08022,-1.53991 -2.99087,-4.27237 -4.88831,-6.0326 -0.64259,-0.59612 -5.98066,-3.16556 -7.93373,-4.36435 -2.20581,-1.35392 -3.8976,-3.69675 -6.38191,-4.42258 -1.98746,-0.58066 -4.16313,0.56254 -6.20726,0.23287 -1.45494,-0.23464 -5.33684,-4.49745 -4.88831,-6.03261 1.73105,-5.92495 1.28086,-1.54829 7.64263,-3.39471 2.2232,-0.64525 3.92367,-2.52264 6.09083,-3.3365 7.79169,-2.92613 31.8028,1.65053 38.79537,-1.45544 1.33804,-0.59433 1.80029,-2.36283 2.98719,-3.22007 1.2589,-0.90923 3.20167,0.37131 4.65545,-0.17466 8.14457,-3.05864 -7.52423,-15.69874 -8.39947,-16.77887 -1.41401,-1.74502 -2.34551,-4.47184 -4.88831,-6.0326 -1.95085,-1.19743 -7.00127,-1.8814 -7.93373,-4.36436 -0.59132,-1.57456 -0.8528,-8.45618 1.2025,-9.3691 1.89227,-0.84052 4.19359,0.24902 6.20727,-0.23287 1.42388,-0.34077 1.5633,-2.87932 2.98719,-3.22008 4.87157,-1.16582 12.2845,1.98032 13.79168,-5.1794 1.69043,-8.03019 -0.67735,-18.05517 -0.9897,-26.38085 -0.0582,-1.55181 0.96381,-3.59932 -0.17465,-4.65545 -0.37949,-0.35204 -1.08048,0.2722 -1.55182,0.0582 -1.33315,-0.60521 -1.81472,-2.5766 -3.22006,-2.98719 -2.62819,-0.76786 -6.81842,1.48081 -9.31089,0.3493 -3.17736,-1.44241 -3.50742,-4.95731 -4.94653,-7.58441 -0.7034,-1.28407 -2.70533,-1.61657 -3.22007,-2.9872 -4.17031,-11.10468 11.09248,-10.03563 16.60422,-13.05492 0.74622,-0.40877 4.11842,-1.83868 4.53901,-3.27828 0.73428,-2.51324 -0.52758,-15.32988 -0.58217,-15.51815 -0.40809,-1.40607 -2.42026,-1.76086 -3.22006,-2.98719 -1.25595,-1.92571 -2.13072,-5.89253 -3.39473,-7.64264 -1.71446,-2.37379 -4.84051,-3.52173 -6.44012,-5.97439 -0.89421,-1.37107 -0.94005,-3.1616 -1.72647,-4.59723 -1.05509,-1.92609 -3.54425,-2.70044 -4.8301,-4.48079 -1.39076,-1.9256 -9.17781,-12.70447 -9.89307,-15.16884 -0.36625,-1.26193 -0.86684,-6.49079 -0.29109,-7.75907 1.308,-2.88125 8.66001,-13.49444 11.89057,-14.43208 2.41139,-0.69988 5.34769,0.40879 7.75907,-0.29108 2.2232,-0.64526 3.86764,-2.69125 6.09082,-3.33651 2.27743,-0.66099 5.63612,0.65189 7.75908,-0.29109 1.33803,-0.59433 1.70313,-2.51667 2.98719,-3.22006 1.81594,-0.99475 4.21879,0.34426 6.20727,-0.23287 5.34329,-1.55083 5.93956,-3.33082 12.29808,-3.56937"
            }, null, -1)),
            createBaseVNode("text", {
              id: "text12",
              class: "hover-states",
              "xml:space": "preserve",
              style: { "cursor": "pointer", "display": "inline", "fill-opacity": "1", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "26.6667px", "line-height": "1.2", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "center", "letter-spacing": "0.92px", "text-anchor": "middle", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
              x: "318.50504",
              y: "595.02509",
              transform: "translate(24.40129,-124.47546)",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("ordinary"))
            }, _cache[24] || (_cache[24] = [
              createBaseVNode("tspan", {
                id: "tspan12",
                "sodipodi:role": "line",
                x: "318.96503",
                y: "595.02509",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "26.6667px", "line-height": "1.2", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "center", "text-anchor": "middle", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" }
              }, "ORDINARY", -1)
            ])),
            createBaseVNode("g", _hoisted_4$2, [
              createBaseVNode("text", _hoisted_5$2, [
                createBaseVNode("tspan", {
                  id: "tspan8",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "244.06317",
                  y: "544.85376",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("ordinary"))
                }, "Sleep")
              ]),
              createBaseVNode("text", _hoisted_6$2, [
                createBaseVNode("tspan", {
                  id: "tspan9",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "241.85153",
                  y: "457.25189",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
                  onClick: _cache[2] || (_cache[2] = ($event) => emit("ordinary"))
                }, "Dreaming")
              ]),
              createBaseVNode("text", _hoisted_7, [
                createBaseVNode("tspan", {
                  id: "tspan10",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "241.867",
                  y: "357.24945",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
                  onClick: _cache[3] || (_cache[3] = ($event) => emit("ordinary"))
                }, "Relaxing")
              ]),
              createBaseVNode("text", _hoisted_8, [
                createBaseVNode("tspan", {
                  id: "tspan11",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "243.61609",
                  y: "266.56757",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "18.6667px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
                  onClick: _cache[4] || (_cache[4] = ($event) => emit("ordinary"))
                }, "Alert")
              ])
            ]),
            createBaseVNode("text", _hoisted_9, [
              createBaseVNode("tspan", {
                id: "tspan25",
                class: "hover-states violet",
                "sodipodi:role": "line",
                x: "411.79178",
                y: "229.05826",
                style: { "cursor": "pointer", "font-size": "18.6667px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
                onClick: _cache[5] || (_cache[5] = ($event) => emit("brainwaves"))
              }, "BRAINWAVES")
            ]),
            createBaseVNode("g", _hoisted_10, [
              createBaseVNode("text", _hoisted_11, [
                createBaseVNode("tspan", {
                  id: "tspan21",
                  class: "hover-states violet",
                  "sodipodi:role": "line",
                  x: "424.61035",
                  y: "558.72089",
                  style: { "cursor": "pointer", "font-size": "18.6667px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[6] || (_cache[6] = ($event) => emit("brainwaves"))
                }, "Delta")
              ]),
              createBaseVNode("text", _hoisted_12, [
                createBaseVNode("tspan", {
                  id: "tspan22",
                  class: "hover-states violet",
                  "sodipodi:role": "line",
                  x: "423.05743",
                  y: "476.43652",
                  style: { "cursor": "pointer", "font-size": "18.6667px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[7] || (_cache[7] = ($event) => emit("brainwaves"))
                }, "Theta")
              ]),
              createBaseVNode("text", _hoisted_13, [
                createBaseVNode("tspan", {
                  id: "tspan23",
                  class: "hover-states violet",
                  "sodipodi:role": "line",
                  x: "423.96707",
                  y: "375.98697",
                  style: { "cursor": "pointer", "font-size": "18.6667px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[8] || (_cache[8] = ($event) => emit("brainwaves"))
                }, "Alpha")
              ]),
              createBaseVNode("text", _hoisted_14, [
                createBaseVNode("tspan", {
                  id: "tspan24",
                  class: "hover-states violet",
                  "sodipodi:role": "line",
                  x: "433.26907",
                  y: "284.85797",
                  style: { "cursor": "pointer", "font-size": "18.6667px", "fill-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[9] || (_cache[9] = ($event) => emit("brainwaves"))
                }, "Beta")
              ])
            ]),
            createBaseVNode("g", _hoisted_15, [
              createBaseVNode("text", _hoisted_16, [
                createBaseVNode("tspan", {
                  id: "tspan13",
                  class: "hover-states blue",
                  "sodipodi:role": "line",
                  x: "108.99459",
                  y: "486.36197",
                  style: { "cursor": "pointer", "font-size": "14.6667px", "fill-opacity": "1" },
                  onClick: _cache[10] || (_cache[10] = ($event) => emit("selves"))
                }, "Consciousness")
              ]),
              createBaseVNode("text", _hoisted_17, [
                createBaseVNode("tspan", {
                  id: "tspan14",
                  class: "hover-states blue",
                  "sodipodi:role": "line",
                  x: "153.3195",
                  y: "393.20193",
                  style: { "cursor": "pointer", "font-size": "14.6667px", "fill-opacity": "1" },
                  onClick: _cache[11] || (_cache[11] = ($event) => emit("selves"))
                }, "Psyche")
              ]),
              createBaseVNode("text", _hoisted_18, [
                createBaseVNode("tspan", {
                  id: "tspan15",
                  class: "hover-states blue",
                  "sodipodi:role": "line",
                  x: "162.17647",
                  y: "325.54593",
                  style: { "cursor": "pointer", "font-size": "14.6667px", "fill-opacity": "1" },
                  onClick: _cache[12] || (_cache[12] = ($event) => emit("selves"))
                }, "Ego")
              ]),
              createBaseVNode("text", _hoisted_19, [
                createBaseVNode("tspan", {
                  id: "tspan16",
                  class: "hover-states blue",
                  "sodipodi:role": "line",
                  x: "130.68169",
                  y: "242.11737",
                  style: { "cursor": "pointer", "font-size": "14.6667px", "fill-opacity": "1" },
                  onClick: _cache[13] || (_cache[13] = ($event) => emit("selves"))
                }, "Personality")
              ]),
              _cache[25] || (_cache[25] = createBaseVNode("text", {
                id: "text17",
                "xml:space": "preserve",
                style: { "font-size": "14.6667px", "line-height": "1.5", "font-family": "Cantarell", "-inkscape-font-specification": "Cantarell", "letter-spacing": "0.92px", "fill": "#000000" },
                x: "168.81166",
                y: "186.92825",
                transform: "rotate(-21.829702)"
              }, null, -1))
            ]),
            _cache[28] || (_cache[28] = createBaseVNode("path", {
              id: "path6",
              style: { "display": "inline", "opacity": "1", "fill": "url(#linearGradient45)", "fill-opacity": "1", "stroke-width": "0.993358", "stroke-dasharray": "none" },
              d: "M 433.94576,445.36452 553.41454,77.597236 670.97507,445.30251",
              "sodipodi:nodetypes": "ccc"
            }, null, -1)),
            createBaseVNode("g", _hoisted_20, [
              createBaseVNode("text", _hoisted_21, [
                createBaseVNode("tspan", {
                  id: "tspan1",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "382.11453",
                  y: "610.90247",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[14] || (_cache[14] = ($event) => emit("spiritual"))
                }, "NONDUAL")
              ]),
              createBaseVNode("text", _hoisted_22, [
                createBaseVNode("tspan", {
                  id: "tspan5",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "395.6539",
                  y: "561.27686",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[15] || (_cache[15] = ($event) => emit("spiritual"))
                }, "CAUSAL")
              ]),
              createBaseVNode("text", _hoisted_23, [
                createBaseVNode("tspan", {
                  id: "tspan3",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "396.47995",
                  y: "514.02985",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[16] || (_cache[16] = ($event) => emit("spiritual"))
                }, "SUBTLE")
              ]),
              createBaseVNode("text", _hoisted_24, [
                createBaseVNode("tspan", {
                  id: "tspan4",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "392.15906",
                  y: "454.97736",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[17] || (_cache[17] = ($event) => emit("spiritual"))
                }, "PSYCHIC")
              ]),
              createBaseVNode("text", _hoisted_25, [
                createBaseVNode("tspan", {
                  id: "tspan2",
                  class: "hover-states",
                  "sodipodi:role": "line",
                  x: "398.98199",
                  y: "395.31964",
                  style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "21.3333px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                  onClick: _cache[18] || (_cache[18] = ($event) => emit("spiritual"))
                }, "GROSS")
              ])
            ]),
            createBaseVNode("text", _hoisted_26, [
              createBaseVNode("tspan", {
                id: "tspan19",
                class: "hover-states blue",
                "sodipodi:role": "line",
                x: "385.03699",
                y: "-522.8584",
                style: { "cursor": "pointer", "font-size": "17.3333px", "line-height": "1.6", "fill-opacity": "1" },
                onClick: _cache[19] || (_cache[19] = ($event) => emit("spiritual"))
              }, "spiritual practice ")
            ]),
            createBaseVNode("text", _hoisted_27, [
              createBaseVNode("tspan", {
                id: "tspan47",
                class: "hover-states black",
                "sodipodi:role": "line",
                x: "510.50623",
                y: "295.13605",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#e7b500", "cursor": "pointer", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1" },
                onClick: _cache[20] || (_cache[20] = ($event) => emit("spiritual"))
              }, "awakening")
            ]),
            createBaseVNode("text", _hoisted_28, [
              createBaseVNode("tspan", {
                id: "tspan48",
                class: "hover-states black",
                "sodipodi:role": "line",
                x: "528.50439",
                y: "353.5126",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#e7b500", "stroke-width": "0", "cursor": "pointer", "stroke-dasharray": "none", "stroke-opacity": "1" },
                onClick: _cache[21] || (_cache[21] = ($event) => emit("spiritual"))
              }, "vision")
            ]),
            createBaseVNode("text", _hoisted_29, [
              createBaseVNode("tspan", {
                id: "tspan49",
                class: "hover-states black",
                "sodipodi:role": "line",
                x: "494.1463",
                y: "401.66351",
                style: { "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "16px", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "fill-opacity": "1", "stroke": "#e7b500", "stroke-width": "0", "stroke-dasharray": "none", "stroke-opacity": "1", "cursor": "pointer" },
                onClick: _cache[22] || (_cache[22] = ($event) => emit("spiritual"))
              }, "enlightenment")
            ]),
            createBaseVNode("text", _hoisted_30, [
              createBaseVNode("tspan", {
                id: "tspan6",
                class: "hover-states",
                "sodipodi:role": "line",
                x: "557.28613",
                y: "469.91791",
                style: { "cursor": "pointer", "font-style": "normal", "font-variant": "normal", "font-weight": "bold", "font-stretch": "normal", "font-size": "26.6667px", "line-height": "1.2", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Bold'", "text-align": "center", "text-anchor": "middle", "fill-opacity": "1", "stroke": "#000000", "stroke-width": "3", "stroke-dasharray": "none", "stroke-opacity": "1", "paint-order": "stroke fill markers" },
                onClick: _cache[23] || (_cache[23] = ($event) => emit("spiritual"))
              }, "SPIRITUAL ")
            ]),
            _cache[29] || (_cache[29] = createBaseVNode("text", {
              id: "text26",
              "xml:space": "preserve",
              style: { "font-style": "normal", "font-variant": "normal", "font-weight": "100", "font-stretch": "normal", "font-size": "12px", "line-height": "1.4", "font-family": "Cantarell", "-inkscape-font-specification": "'Cantarell Thin'", "text-align": "start", "letter-spacing": "0.92px", "text-anchor": "start", "display": "inline", "fill": "#195449", "fill-opacity": "1", "stroke": "#ffffff", "stroke-width": "1.14142", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-opacity": "1" },
              x: "500.56219",
              y: "33.722771"
            }, null, -1))
          ])
        ])),
        createBaseVNode("div", {
          style: { "margin-top": "2em" },
          innerHTML: unref(htmlSpiritual)
        }, null, 8, _hoisted_31)
      ]);
    };
  }
});
const States = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7550f2bc"]]);
const _imports_0$1 = "/assets/LinesModel-BVW9Ad51.png";
const AqalLines = [
  {
    "name": "Worldview Structures",
    "line": "Worldview",
    "author": "Jean Gebser",
    "description": 'The groundbreaking Swiss philosopher Jean Gebser introduced a developmental model in his         influential work "The Ever-Present Origin," describing fluid, spectrum-like mutations to the         structure of consciousness that result from inadequacy dealing with more complex problems.',
    "notes": "Gebser's model suggests that these stages are not necessarily linear or hierarchical but can coexist within individuals and societies to varying degrees. Additionally, Gebser argues that humanity is currently undergoing a transition towards a more integral consciousness, where all previous stages are integrated and synthesized.",
    "stages": {
      "1": {
        "title": "Archaic",
        "desc": "This stage represents humanity's earliest consciousness, characterized by an instinctual, primal awareness. It's a state of undifferentiated unity with nature, lacking self-awareness or reflective thought."
      },
      "2": {
        "title": "Magical",
        "desc": "In the magical stage, consciousness is marked by a mythical worldview, where humans perceive themselves as part of a magical, interconnected universe. This stage is characterized by a fluidity between inner and outer realities and a belief in the power of symbols and rituals."
      },
      "3": {
        "title": "Mythical",
        "desc": "The mythical stage involves the emergence of structured myths and narratives that help humans make sense of the world. This stage is characterized by a dualistic perspective, with a tendency to perceive reality in terms of binaries (good vs. evil, light vs. dark)."
      },
      "4": {
        "title": "Rational",
        "desc": "The rational stage is marked by the development of analytical thinking, logic, and scientific inquiry. It represents a shift towards a more objective, linear view of reality, emphasizing reason and empirical evidence."
      },
      "5": {
        "title": "Integral",
        "desc": "The integral stage transcends and includes the previous stages, integrating their insights while surpassing their limitations. It involves a holistic, multidimensional perception of reality, where individuals experience a deep sense of interconnectedness and unity."
      }
    }
  },
  {
    "name": "Spiral Dynamics",
    "line": "Values",
    "author": "Don Beck and Christopher Cowan",
    "description": 'Spiral Dynamics is a theory of human development and cultural evolution that emphasizes the dynamic interaction between individual and collective values and worldviews. Developed by Clare W. Graves and further popularized by Don Beck and Christopher Cowan, Spiral Dynamics describes a series of stages or "memes" through which both individuals and societies evolve.',
    "notes": "Spiral Dynamics suggests that individuals and societies develop in response to environmental, social, and existential challenges. Different stages may coexist within a society or individual, with dominant memes influencing behavior and values. The theory emphasizes the importance of understanding and respecting the diversity of human perspectives and values.",
    "stages": {
      "1": {
        "title": "Beige Meme (Survival Sense)",
        "desc": "This is the earliest and most basic stage of development, characterized by a focus on basic survival needs such as food, shelter, and safety. Individuals at this stage are primarily concerned with meeting their immediate physical needs."
      },
      "2": {
        "title": "Purple Meme (Tribal Order)",
        "desc": "In this stage, individuals form strong group bonds based on kinship, family, and tradition. Beliefs and behaviors are guided by superstition, ritual, and loyalty to the tribe or community."
      },
      "3": {
        "title": "Red Meme (Impulsive Power)",
        "desc": "At this stage, individuals assert their independence and pursue their own desires and interests without regard for societal norms or rules. Power, dominance, and immediate gratification are prioritized."
      },
      "4": {
        "title": "Blue Meme (Purposeful Order)",
        "desc": "In the blue stage, individuals seek structure, order, and stability. They adhere to rigid rules, moral codes, and religious beliefs to maintain social cohesion and uphold traditional values."
      },
      "5": {
        "title": "Orange Meme (Strategic Enterprise)",
        "desc": "This stage is characterized by a focus on achievement, innovation, and individual success. Rationality, competition, and material wealth are valued, and individuals seek personal advancement and progress."
      },
      "6": {
        "title": "Green Meme (Sensitive Self)",
        "desc": "In the green stage, individuals emphasize empathy, equality, and social justice. They value inclusivity, diversity, and environmental sustainability, and seek to create a more egalitarian and compassionate society."
      },
      "7": {
        "title": "Yellow Meme (Integrative FlexFlow)",
        "desc": "At this stage, individuals develop a more holistic and systemic perspective. They recognize the complexity and interconnectedness of all systems and embrace uncertainty and paradox. Creativity, adaptability, and integration of diverse perspectives are valued."
      },
      "8": {
        "title": "Turquoise Meme (Global Holistic)",
        "desc": "This is the highest stage identified in Spiral Dynamics, characterized by a deep sense of spiritual interconnectedness and universal empathy. Individuals at this stage transcend ego boundaries and work towards collective well-being and planetary consciousness."
      }
    }
  },
  {
    "name": "Child Cognitive Stages",
    "line": "Cognitive",
    "author": "Jean Piaget",
    "description": "Pioneering psychologist Jean Piaget proposed a theory that outlines distinct stages of intellectual growth in children.         This is among the more commonly taught and recognized developmental stage theories.         This is an example of a model that captures early stages, but requires supplementing higher         stages from theorists who study adult development.",
    "notes": "Children progress through these stages in a fixed order, each stage building upon the achievements of the previous. Individual differences and cultural factors influence the pace and extent of development within each stage.",
    "stages": {
      "1": {
        "title": "Sensorimotor Stage (Birth to 2 years)",
        "desc": "Infants learn about the world through their senses and motor activities. They develop object permanence, understanding that objects continue to exist even when they are out of sight. Early language development begins."
      },
      "2": {
        "title": "Preoperational Stage (2 to 7 years)",
        "desc": "Children start to use symbols to represent objects and ideas, evident in pretend play and language development. Thinking is egocentric, meaning children struggle to see things from others' perspectives. They lack the concept of conservation, understanding that quantity remains the same despite changes in shape or arrangement."
      },
      "3": {
        "title": "Concrete Operational Stage (7 to 11 years)",
        "desc": "Children develop the ability to think logically about concrete events and objects. They understand conservation and begin to grasp concepts like reversibility and the ability to mentally manipulate objects. Thinking becomes less egocentric as children start to understand the perspectives of others."
      },
      "4": {
        "title": "Formal Operational Stage (11 years and older)",
        "desc": "Adolescents and adults gain the ability to think abstractly and hypothetically. They can engage in deductive reasoning, problem-solving, and hypothetical-deductive reasoning. Abstract thinking allows for exploration of moral, philosophical, and scientific concepts."
      }
    }
  },
  {
    "name": "Constructive Developmental Theory",
    "line": "Orders",
    "author": "Robert Keegan",
    "description": 'Developmental psychologist Robert Kegan proposed a theory of adult development known as the "Orders of Consciousness."',
    "notes": "Kegan's theory suggests that individuals progress through these orders of consciousness over time, with each stage representing a more complex and nuanced understanding of the self and the world. However, not everyone reaches the higher orders of consciousness, and progression may be influenced by various factors such as life experiences, relationships, and cultural context.",
    "stages": {
      "1": {
        "title": "Impulsive Mind (Order 1)",
        "desc": "Entirely impulse and reflex, or instinct. Lacking consistent object permanence and concept of other."
      },
      "2": {
        "title": "Instrumental Mind (Order 2)",
        "desc": "People are instrumental, little capacity for empathy or compassion. Rules are rigid and absolute."
      },
      "3": {
        "title": "Socialized Mind (Order 3)",
        "desc": "Individuals at this stage are largely shaped by the norms, values, and expectations of their social environment. They conform to societal roles and expectations without questioning them. Identity is primarily defined by social roles, relationships, and external factors."
      },
      "4": {
        "title": "Self-Authoring Mind (Order 4)",
        "desc": "Individuals begin to differentiate themselves from their social context and develop a sense of self with unique values, beliefs, and goals. They can reflect on their own experiences, perspectives, and choices, taking responsibility for their actions. Identity becomes more internalized and self-directed, less dependent on external validation."
      },
      "5": {
        "title": "Self-Transforming Mind (Order 5)",
        "desc": "At this stage, individuals recognize the fluidity and complexity of identity and meaning. They are open to exploring multiple perspectives and integrating contradictory aspects of themselves and the world. Identity becomes more flexible and inclusive, capable of embracing paradox and ambiguity."
      }
    }
  },
  {
    "name": "Emergent Cyclical Theory",
    "line": "Graves",
    "author": "Clare Graves",
    "description": `Clare W. Graves was a psychologist who proposed a theory of human development known         as the "Emergent, Cyclical Levels of Existence Theory" or simply the "Graves Model." This model         was the basis for Spiral Dynamics. While his model doesn't neatly fit into discrete stages like some other developmental theories, it describes a series of emergent levels of existence characterized by different value systems and worldviews.`,
    "notes": "Graves suggested that individuals and societies can transition between these levels in response to changing environmental conditions and existential challenges. His model emphasizes the dynamic and cyclical nature of human development, with each level building upon and transcending the previous ones.",
    "stages": {
      "1": {
        "title": "Survivalistic",
        "desc": "At this level, the primary focus is on meeting basic survival needs such as food, shelter, and safety. Individuals at this stage are primarily concerned with immediate gratification and avoiding danger."
      },
      "2": {
        "title": "Tribalistic",
        "desc": "As societies become more stable, individuals move to this level where they seek belonging and security within a group or tribe. Loyalty to the group and adherence to its norms and traditions are paramount."
      },
      "3": {
        "title": "Egocentric",
        "desc": "In this stage, individuals assert their independence and autonomy. They strive to express their own identity and assert their needs and desires, often at the expense of others."
      },
      "4": {
        "title": "Authoritarian",
        "desc": "At this level, there's a strong emphasis on order, structure, and control. Individuals seek security through conformity to established rules and authority figures."
      },
      "5": {
        "title": "Strategic",
        "desc": "Individuals at this level become more open to change and innovation. They develop the ability to think strategically and adapt to changing circumstances in pursuit of personal and collective goals."
      },
      "6": {
        "title": "Communitarian",
        "desc": "At this stage, individuals value cooperation, harmony, and social justice. They prioritize the well-being of the community and seek to create a more inclusive and egalitarian society."
      },
      "7": {
        "title": "Systemic",
        "desc": "This level is characterized by a holistic understanding of complex systems and interconnectedness. Individuals at this stage recognize the interdependence of various social, economic, and environmental factors and work towards creating sustainable solutions."
      }
    }
  },
  {
    "name": "Integral Yoga",
    "line": "Spiritual",
    "author": "Sri Aurobindo",
    "description": "Sri Aurobindo, an Indian philosopher, yogi, and spiritual leader, proposed a comprehensive framework of spiritual evolution and consciousness development. His model outlines stages of consciousness that individuals may progress through on their journey towards spiritual awakening and self-realization.",
    "notes": "Aurobindo's model suggests that individuals can progress through these stages of consciousness over multiple lifetimes or through dedicated spiritual practice and inner transformation. He emphasizes the importance of integrating and transcending each stage to realize the full potential of human existence and achieve spiritual enlightenment.",
    "stages": {
      "1": {
        "title": "Physical Consciousness",
        "desc": "At this stage, individuals are primarily identified with their physical bodies and the material world. Consciousness is limited to sensory experiences and bodily needs, with little awareness of higher realities."
      },
      "2": {
        "title": "Vital Consciousness",
        "desc": "In the vital stage, individuals become more aware of their emotional and vital energies. Desires, emotions, and impulses dominate consciousness, driving behavior and decision-making."
      },
      "3": {
        "title": "Mental Consciousness",
        "desc": "The mental stage represents the emergence of rational and analytical thinking. Individuals develop the capacity for logic, reason, and abstract thought, allowing for problem-solving and intellectual exploration."
      },
      "4": {
        "title": "Psychic Consciousness",
        "desc": "The psychic stage involves the awakening of the inner or spiritual essence within individuals. They become attuned to their inner guidance, intuition, and higher purpose, seeking deeper meaning and connection with the divine."
      },
      "5": {
        "title": "Spiritual Consciousness",
        "desc": "At the spiritual stage, individuals experience a profound union with the Divine or ultimate reality. Consciousness expands beyond the individual self to embrace the interconnectedness of all existence. Love, compassion, and wisdom guide thoughts, feelings, and actions."
      }
    }
  },
  {
    "name": "Ego Development",
    "line": "Loevinger",
    "author": "Jane Loevinger",
    "description": "Jane Loevinger was a psychologist known for her theory of ego development, which describes stages of ego development and maturity across the lifespan.",
    "notes": "Loevinger's model suggests that ego development is a lifelong process characterized by increasing complexity and maturity. Individuals may progress through these stages at different rates and may not necessarily reach the highest stages of development.",
    "stages": {
      "1": {
        "title": "Presocial Stage (Infancy)",
        "desc": "At this stage, the ego is undifferentiated, and the individual is primarily focused on meeting basic needs such as feeding, sleeping, and comfort. There's little awareness of self as separate from others."
      },
      "2": {
        "title": "Symbiotic Stage (Infancy to Early Childhood)",
        "desc": "In this stage, the individual begins to differentiate the self from others but still relies heavily on caregivers for security and validation. The sense of self is closely tied to external relationships and attachments."
      },
      "3": {
        "title": "Impulsive Stage (Early Childhood)",
        "desc": "During this stage, individuals develop a sense of autonomy and begin to assert their own desires and preferences. However, their actions are often impulsive and driven by immediate gratification without much consideration for consequences."
      },
      "4": {
        "title": "Self-Protective Stage (Childhood to Adolescence)",
        "desc": "At this stage, individuals become more aware of social norms and rules. They focus on protecting themselves from harm and seek security through conformity to external standards and authority figures."
      },
      "5": {
        "title": "Conformist Stage (Adolescence to Adulthood)",
        "desc": "In this stage, individuals strive for acceptance and belonging within their peer groups and social circles. They conform to societal norms and expectations to gain approval and avoid rejection."
      },
      "6": {
        "title": "Self-Aware Stage (Adulthood)",
        "desc": "At this stage, individuals develop a more nuanced understanding of themselves and others. They reflect on their own thoughts, feelings, and motivations, and begin to question societal norms and values."
      },
      "7": {
        "title": "Conscientious Stage (Adulthood)",
        "desc": "In this stage, individuals prioritize personal growth, integrity, and responsibility. They strive for authenticity and moral integrity in their actions and relationships."
      },
      "8": {
        "title": "Individualistic Stage (Adulthood)",
        "desc": "At this stage, individuals embrace their uniqueness and autonomy. They pursue their own goals and values independently of societal expectations, and are open to exploring diverse perspectives and experiences."
      },
      "9": {
        "title": "Autonomous Stage (Adulthood)",
        "desc": "In this stage, individuals experience a deep sense of inner freedom and self-actualization. They are self-directed, adaptable, and able to maintain a strong sense of identity while remaining open to growth and change."
      }
    }
  }
];
const _hoisted_1$3 = { class: "btn-group" };
const _hoisted_2$3 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Lines",
  emits: ["next"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const lineInfo = ref({
      line: "",
      name: "",
      description: "",
      author: "",
      stages: {},
      notes: ""
    });
    const resetLineInfo = () => {
      lineInfo.value = {
        line: "",
        name: "",
        description: "",
        author: "",
        stages: {},
        notes: ""
      };
    };
    const toggleLine = (sel) => {
      let temp = AqalLines.filter((line) => line.name == sel).pop();
      if (temp !== void 0) {
        lineInfo.value = temp;
      }
    };
    watch(lineInfo, () => {
      window.scrollTo(0, 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("button", { onClick: resetLineInfo }, "unThinkMe"),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(AqalLines), (tGet, index) => {
            return openBlock(), createElementBlock("button", {
              key: index,
              onClick: ($event) => toggleLine(tGet.name)
            }, toDisplayString(tGet.line), 9, _hoisted_2$3);
          }), 128))
        ]),
        lineInfo.value.line ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("h2", null, toDisplayString(lineInfo.value.line), 1),
          createBaseVNode("h3", null, toDisplayString(lineInfo.value.name), 1),
          createBaseVNode("h3", null, "Author: " + toDisplayString(lineInfo.value.author), 1),
          createBaseVNode("p", null, toDisplayString(lineInfo.value.description), 1),
          _cache[2] || (_cache[2] = createBaseVNode("h2", null, "Stages:", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(lineInfo.value.stages, ({ title, desc }, id) => {
            return openBlock(), createElementBlock("div", { key: id }, [
              createBaseVNode("h4", null, toDisplayString(id) + ": " + toDisplayString(title), 1),
              createBaseVNode("p", null, toDisplayString(desc), 1)
            ]);
          }), 128)),
          _cache[3] || (_cache[3] = createBaseVNode("h2", null, "Notes:", -1)),
          createBaseVNode("p", null, toDisplayString(lineInfo.value.notes), 1)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _cache[4] || (_cache[4] = createStaticVNode('<h1>Lines</h1><p>Particular aspects of consciousness develop somewhat independently. These can be called developmental Lines, Streams, or multiple intelligences. Like Waves (Levels), Streams emphasises the fluid and co-influencing nature of these structures of the developmental self. <span class="pedantic">Buttons along the bottom outline some prominent Lines.</span></p><img alt="Lines Mini-Model Think Feel Do" class="mini-model" src="' + _imports_0$1 + '" style="margin-bottom:1em;"><span><b> Think</b> is a proxy for various Cognitive, Worldview, Spiritual, and Self Lines. <br><b>Feel</b> reflects Values, Needs, Moral, Affect, and Emotional Lines. <br><b>Do</b> generalizes Lines like Kinesthetic, Spatial, Aesthetic, and Interpersonal.<br><br></span><h3>Exploring Line Models</h3><p>The IQ/EQ system is a Level 5 Orange rational Lines system. Multiple Intelligences propose a Level 6 Green pluralistic Lines system that is Integral-friendly. The Integral stage favors the theoretical consistency and comprehensibility of stage models. The examples below can be considered pioneering attempts at universal Levels systems, similar to Altitudes. The key distinction between Levels and a major Line (such as Cognition or Worldview), is that Levels apply to every Line and occur in all four Quadrants. For the sake of scientific rigor, as opposed to philosophical completeness, Line theorists research and analyze specific criteria of a particular aspect of a person, making universal Levels only possible in a meta-analysis of Line research. </p>', 6)),
          createBaseVNode("h5", {
            class: "pedantic",
            style: { "cursor": "pointer" },
            onClick: _cache[0] || (_cache[0] = ($event) => toggleLine("Worldview Structures"))
          }, "WORLDVIEW LINE"),
          createBaseVNode("h5", {
            class: "pedantic",
            style: { "cursor": "pointer" },
            onClick: _cache[1] || (_cache[1] = ($event) => emit("next"))
          }, "QUADRANTS")
        ], 64))
      ], 64);
    };
  }
});
const _imports_0 = "/assets/TypesModel-D_O4FbkI.png";
const AqalTypes = {
  "Big Five": {
    "description": "Based on five somewhat independent personality factors, this is perhaps         the most simple and scientifically verified measure of personality.",
    "types": {
      1: {
        "type": "Extraversion",
        "desc": "Energized by others."
      },
      2: {
        "type": "Agreeableness",
        "desc": "Allow others to control."
      },
      3: {
        "type": "Neuroticism",
        "desc": "Reactivity, irrationality, emotional instability."
      },
      4: {
        "type": "Conscientiousness",
        "desc": "Thoughtfulness, patience, responsibility."
      }
    },
    "setbacks": "Widely tested, accepted, and used to assess personality factors, but limited         as an expression of Integral Types by lack of theoretical grounding and comprehensiveness."
  },
  "Myers-Briggs": {
    "description": "Popular system in common usage, preferred         because it assumes no development. Criticized for scientific and statistical methodology. The deeper theory to it is         compelling. J/P tells whether S/N (Perceiving functions) or T/F (Judging functions)         will be extraverted, while the other is introverted. The other middle term is your auxilliary,         the two middle terms not indicated by your type comprise your tertiary and inferior functions. These are the four main things         your brain tends to do by habit.         ",
    "types": {
      1: {
        "type": "Extraversion/Introversion",
        "desc": "Prefer social or personal experience."
      },
      2: {
        "type": "Sensing/iNtuition",
        "desc": "Perceiving the sense details or mental concepts and associations."
      },
      3: {
        "type": "Thinking/Feeling",
        "desc": "Judgment based on felt values or objective consideration."
      },
      4: {
        "type": "Judging/Perceiving",
        "desc": "Preference between acquiring information or coming to conclusions."
      }
    },
    "setbacks": "Highly disputed scientific integrity. Integral and Jungian compatible,         but ignores thus correlates with Levels. Difficult to use and comprehend. One of the best, unfortunately.         Possibly does not capture or apply to Second Tier Levels, as these often express preference to deliberately alter         their native cognitive functions in introverted and extraverted ways. These Types         seem to capture personality accurately, but it quickly becomes subjective and         interpretive how to make decisions based on         MB Types, or how to use them for specific situations, personalities, and interactions.         In the discussion of Myers-Briggs, like Enneagram and indeed Integral Theory,         we find that most discussions focus on the abstraction layer of the model itself, and         people have difficulty translating the things they ordinarily think and care about         into this system's language."
  },
  "Archetypes": {
    "description": "Jung's notion of people playing collective story roles as personnae uses a nascent         sort of memetics to approach the Psyche. The Psyche recognizes and generates story to help          us make sense of our world. Thus, our reality recapitulates the most basic stories we tell. Under          the hood of Mind, we are pattern recognition. The patterns which emerge are the familiar ones we keep coming          back to and creating everywhere. The Type system arising from this is a collection of common and recognizable          story character roles.",
    "types": {
      1: {
        "type": "Innocent",
        "desc": "Exhibits happiness, goodness, optimism, safety, romance, and youth."
      },
      2: {
        "type": "Everyman",
        "desc": "Seeks connection and belonging. Supportive, faithful and down-to-earth."
      },
      3: {
        "type": "Hero",
        "desc": "On a mission to make the world better. Courageous, intrepid, inspiring."
      },
      4: {
        "type": "Rebel",
        "desc": "Questions authority and breaks rules. Craves rebellion and revolution."
      },
      5: {
        "type": "Explorer",
        "desc": "Sets out for travel, risk, discovery, and the thrill of new experiences."
      },
      6: {
        "type": "Creator",
        "desc": "Imaginative, inventive and driven to build things of enduring meaning and value."
      },
      7: {
        "type": "Ruler",
        "desc": "Creates order from chaos. Controlling and stern, responsible and organized."
      },
      8: {
        "type": "Magician",
        "desc": "Wishes to create wonder and bring dreams to life. Visionary and spiritual."
      },
      9: {
        "type": "Lover",
        "desc": "Sultry, attracting intimate moments, passion, loyalty, and betrayal."
      },
      10: {
        "type": "Caregiver",
        "desc": "Protects and cares for others. Compassionate, nurturing and generous."
      },
      11: {
        "type": "Jester",
        "desc": "Brings joy through humor, fun, and irreverence. Mischievous."
      },
      12: {
        "type": "Sage",
        "desc": "Delivers insight and wisdom, serves as thoughtful mentor or advisor."
      }
    },
    "setbacks": "These are ways of characterizing people in terms of what they think, feel, and do, so it is a          wonderful Type system. It is somewhat loose, or arbitrary, certainly interpretive to the core,          so it would be difficult to develop this model to integrate with concepts outside of Jungian alchemy          and psychoanalysis.          Refers to Magenta core content often without reference to the          depth dimension (Level) of the current observation."
  },
  "Enneagram": {
    "description": "Unique system of roughly equal-represented personality archetypes. Originally         and traditionally based on humble thought experiments observing typical monk behaviors,         this model nevertheless is comprehensive, descriptive, and widely used,         helping people conceptualize self, others, and relationships. Types and meta-Types of this         model resemble the dynamics of other models, but features are split into units of three, rather than         two or four.",
    "types": {
      1: {
        "type": "1 Reformer",
        "desc": "Rational, idealistic, principaled, purposeful, self-controlled."
      },
      2: {
        "type": "2 Helper",
        "desc": "Caring, demonstrative, generous, people-pleasing, emotionally possessive."
      },
      3: {
        "type": "3 Achiever",
        "desc": "Success-oriented, pragmatic, adaptive, excelling, driven, image-conscious."
      },
      4: {
        "type": "4 Individualist",
        "desc": "Sensitive, withdrawn, expressive, dramatic, self-absorbed, temperamental."
      },
      5: {
        "type": "5 Investigator",
        "desc": "Intense, cerebral, perceptive, innovative, secretive, isolated."
      },
      6: {
        "type": "6 Loyalist",
        "desc": "Committed, security-oriented, engaging, responsible, anxious, suspicious."
      },
      7: {
        "type": "7 Enthusiast",
        "desc": "Busy, fun-loving spontaneous, versatile, distractible, scattered."
      },
      8: {
        "type": "8 Challenger",
        "desc": "Powerful, dominating, self-confident, decisive, willful, confrontational."
      },
      9: {
        "type": "9 Peacemaker",
        "desc": "Easygoing, self-effacing, receptive, reassuring, agreeable, complacent."
      }
    },
    "setbacks": "Major vertical confusion. Type names vary widely. Complicated, or detailed.         Can be used for personal development in interesting ways, though methodologies vary and         efficacy is disputed."
  },
  "Astrology": {
    "description": `Based on birthday and pre-scientific observation of celestial bodies,         astrology is commonly used in contemporary expressions of Magenta and Red through Green Meme, and         celebrated for it's lack of predictive power and theoretical validity, or being, "just for fun."         Because it is superstitious and incorrect in its presumptions, it does not threaten         me by having correct or incorrect interpretations. It does not succesfully label people or         put them into imaginary boxes and heirarchical categories (only greedy patriarchs do that),         it does so unsuccessfully, ironically,         self-deprecatingly, and self-assuredly, or Green.`,
    "types": {
      1: {
        "type": "Aries",
        "desc": "Competetive but insecure."
      },
      2: {
        "type": "Taurus",
        "desc": "Loyal but stubborn."
      },
      3: {
        "type": "Gemini",
        "desc": "Versatile but impatient."
      },
      4: {
        "type": "Cancer",
        "desc": "Passionate but uncommunicative."
      },
      5: {
        "type": "Leo",
        "desc": "Confident but dominating."
      },
      6: {
        "type": "Virgo",
        "desc": "Perfectionist but self-critical."
      },
      7: {
        "type": "Libra",
        "desc": "Empathetic but indecisive."
      },
      8: {
        "type": "Scorpio",
        "desc": "Intense but secretive."
      },
      9: {
        "type": "Sagittarius",
        "desc": "Spontaneous but flighty."
      },
      10: {
        "type": "Capricorn",
        "desc": "Goal-oriented but forgiving."
      },
      11: {
        "type": "Aquarius",
        "desc": "Philosophical but detatched."
      },
      12: {
        "type": "Pisces",
        "desc": "Whimsical but over-sensitive."
      }
    },
    "setbacks": "Pre-scientific and empirically untrue. Nevertheless, Western and         Eastern astrology have enjoyed endless widespread fascination, sales,         and usage as the general public's chosen personality typology.         It is in that sense more analogous to a fun holiday tradition myth than         a proper Type system. Nevertheless, many people today continue to publish and sell         books elaborating and exploring this system and its intracacies from magical,         mythical, rational, sensitive, and integral perspectives."
  }
};
const _hoisted_1$2 = { class: "btn-group" };
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$2 = {
  key: 0,
  class: "types-info"
};
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = { key: 2 };
const _hoisted_6$1 = {
  key: 3,
  class: "types-model"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Types",
  emits: ["next"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const chosenType = ref("base");
    watch(chosenType, () => {
      window.scrollTo(0, 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => chosenType.value = "base")
          }, "unThinkMe"),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => chosenType.value = "gender")
          }, "Gender"),
          createBaseVNode("button", {
            onClick: _cache[2] || (_cache[2] = ($event) => chosenType.value = "jungian")
          }, "Jungian"),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(AqalTypes), (tGet, index) => {
            return openBlock(), createElementBlock("button", {
              key: index,
              class: "darken",
              onClick: ($event) => chosenType.value = index
            }, toDisplayString(index), 9, _hoisted_2$2);
          }), 128))
        ]),
        chosenType.value == "base" ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          _cache[7] || (_cache[7] = createStaticVNode('<h1>Types</h1><p>One should really marvel at the history of our efforts to generate a simple map of human personality tendencies, or Typology. It seems like such a simple question: What are the different kinds of people? What are the primary variables that define consciousness? How do we model realtionships between various Types of people? Integral Theory helps by pointing out the distinction between Levels and Types, which is not well understood. If Levels are <b>Vertical</b> stages of consciousness, Types capture our <b>Horizontal</b> styles or preferences of consciousness. Types <em>should</em> be differences in comprehension that are non-developmental, or differences in the <em>way</em> people develop. <span class="pedantic">Click buttons at the bottom for popular and relevant Typology summaries.</span></p><img alt="Types elemental tarot Mini-Model" class="square-banner" src="' + _imports_0 + '" style="border:1px solid white;border-radius:12px;background-color:black;padding:1em;"><p>These token symbols are the Pentacles, Wands, Cups, and Swords of Tarot myth, serving as a mini-model Typology placeholder. </p>', 4)),
          createBaseVNode("h5", {
            class: "pedantic",
            style: { "cursor": "pointer" },
            onClick: _cache[3] || (_cache[3] = ($event) => chosenType.value = "gender")
          }, "GENDER")
        ])) : chosenType.value == "gender" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          _cache[8] || (_cache[8] = createBaseVNode("h3", null, "Sexing Nature", -1)),
          _cache[9] || (_cache[9] = createBaseVNode("p", null, [
            createTextVNode(' Male and female is a duality which appears to exist at every Level of reality, including sex, gender, and sexuality, all of which occur at particular Levels. At the material Level, we have form and emptiness, matter and space, something and nothing. Substances have alkalinity, positive and negative charges, molecular bonding. As Life, we have a fundamental sexual essence, which is expressed by DNA as genitals, as sperm and egg, as male and female hormones. Extremely simple creatures tend to be more asexual, as sexual competition drives the evolution of more advanced features. Sex mechanisms range from animal to animal, but a sperm is a little pin that penetrates into the egg, just as the penis penetrates into a vagina. The female is like a home base, an openness to be filled, while the male is more the one to go out seeking an emptiness to fill. We have no interest here in making claims about how "males" and "females" '),
            createBaseVNode("em", null, "should"),
            createTextVNode(" be, only observing how they (and other) modal Types might affect consciousness development. Even in our own super-ego, or internalized self-parent structures, the female gives care and assurance, the male provides challenge and structure. As fun as it is, sexuality only exists to drive the evolution of Life, just as love or Eros can be said to drive the Mind's evolution through Altitudes in a romantic or sexual way, extending all the way to one's love relationship with God or the entire kosmos. What we are calling sex here, or in Taoism, is actually duality itself. ")
          ], -1)),
          createBaseVNode("h5", {
            class: "pedantic",
            style: { "cursor": "pointer" },
            onClick: _cache[4] || (_cache[4] = ($event) => chosenType.value = "jungian")
          }, "JUNGIAN")
        ])) : chosenType.value == "jungian" ? (openBlock(), createElementBlock("div", _hoisted_5$1, _cache[10] || (_cache[10] = [
          createStaticVNode('<h2>Your Brain does Four Things</h2><p> Psychologist Carl Jung provided two Typologies we will explore here. One of them (&quot;Archetypes&quot; section) presents the self as a system of role playing archetypal built-in story character myths. In any moment, our personality is invoking, or play-acting some collection of story characters. The Typology we will explore here is the notion of four primary cognitive functions, and is the basis of Myers-Briggs. Conscious mental functioning is categorized into thinking, feeling, sensing, or intuiting. This theory restates Quadrants and Tao (&quot;Gender&quot; section) in terms of cognitive functions. </p><p style="text-indent:0;"><b>Intuition</b> looks inward to the subconscious, recognizing patterns, scanning, intuiting, innovating, thrill-seeking, expressing, facing things. UL &quot;I,&quot; white eye of Tao. <br><br><b>Sensing</b> looks outward at the environment, deductive, planning, organizing, tracking. UR &quot;It,&quot; black eye of Tao. <br><br><b>Thinking</b> looks outward to the conceptual abstract, inductive, strategizing, ordering, sense-making. LR &quot;Its,&quot; black wave of Tao. <br><br><b>Feeling</b> looks inward at relationships and affiliation, trust, morality, influence, charisma, cooperation. LL &quot;We,&quot; white wave of Tao. </p><p> Your core personality is shaped by mutually exclusive introverted and extraverted preferences between these four functions, just as we might express left or right handed, male or female gendered. The four functions are considered equally valid and valuable ways to comprehend reality. </p><h3>But Is It Integral?</h3><p> More Teal Meme thought and effort must be applied to Types, but one Integral observation we can make is that <em>most</em> of these Typologies seem to point out overlapping or similar traits and patterns, suggesting that they are either copying one another, or pointing to universal truths. Further, as illustrated, these Types also intersect with Quadrants, making us desire a functional Typology that is not heavily correlated with the other Integral Elements. </p><table class="work-schedules"><tbody><tr><th>Quadrants</th><th class="border-blue">UL</th><th class="border-pink">UR</th><th class="border-blue">LL</th><th class="border-pink">LR</th></tr><tr><th>Tao Symbol</th><td class="border-blue">White Eye</td><td class="border-pink">Black Eye</td><td class="border-blue">White Wave</td><td class="border-pink">Black Wave</td></tr><tr><th>Functions</th><td>Intuiting</td><td>Sensing</td><td>Feeling</td><td>Thinking</td></tr><tr><th>Elements</th><td class="border-blue">Fire</td><td class="border-pink">Earth</td><td class="border-pink">Water</td><td class="border-blue">Air</td></tr><tr><th>Tarot Cards</th><td class="border-blue">Wands</td><td class="border-pink">Pentacles</td><td class="border-pink">Cups</td><td class="border-blue">Swords</td></tr><tr><th>Card-ass Cards</th><td class="border-black">Clubs</td><td class="border-red">Diamonds</td><td class="border-red">Hearts</td><td class="border-black">Spades</td></tr><tr><th>Sorting Hat</th><td>Gryffindor</td><td>Slytherin</td><td>Hufflepuff</td><td>Ravenclaw</td></tr></tbody></table><p class="pedantic">Please correct me if I&#39;m certainly wrong about these mythological associations. There will always be debate because these are imaginary and there are multiple correct solutions. </p><p>We must conclude for now that many &quot;universal&quot; typologies are redundant with Integral Theory, and too methodologically flawed to adopt as primary vocabulary. Like Lines, Types are a lens, or way of slicing reality and consciousness up to examine them and make them more comprehensible. If Lines take the whole of reality and tear it into vertical strips of various length, Types is more like a shotgun, drawing circles that capture roughly equal portions of the data. It is a powerful and unique mechanic in theory. In the case of diagnosis, Types can devise thresholds and parameters for health and sickness. We could cover various relevant popular theories like Adult Attachment Styles, Love Language, and things like that. Among these, the Integral mind again seeks to find how they relate to one another, and which among them includes the most reality in the least space. </p>', 9)
        ]))) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("h2", null, "Type System: " + toDisplayString(chosenType.value[0].toUpperCase() + chosenType.value.slice(1)), 1),
          createBaseVNode("p", null, toDisplayString(unref(AqalTypes)[chosenType.value].description), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(AqalTypes)[chosenType.value].types, (t) => {
            return openBlock(), createElementBlock(Fragment, {
              key: t.type
            }, [
              createBaseVNode("h3", null, toDisplayString(t.type), 1),
              createBaseVNode("p", null, toDisplayString(t.desc), 1)
            ], 64);
          }), 128))
        ])),
        chosenType.value == "base" ? (openBlock(), createElementBlock("h5", {
          key: 4,
          class: "pedantic",
          style: { "cursor": "pointer" },
          onClick: _cache[5] || (_cache[5] = ($event) => emit("next"))
        }, "MAP")) : (openBlock(), createElementBlock("h5", {
          key: 5,
          class: "pedantic",
          style: { "cursor": "pointer" },
          onClick: _cache[6] || (_cache[6] = ($event) => chosenType.value = "base")
        }, "TYPES"))
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  id: "info-panel",
  class: "info-panel"
};
const _hoisted_2$1 = { class: "btn-group-int" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = { style: { "margin-top": "2em" } };
const _hoisted_5 = { style: { "font-size": "large" } };
const _hoisted_6 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InfoPanel",
  props: {
    selectedProp: {},
    levelSetter: {},
    stateSetter: {}
  },
  emits: ["toggle", "true"],
  setup(__props, { emit: __emit }) {
    const htmlBrainwaves = injectMarkdown(integral_states_info, "BRAINWAVES SECTION");
    const emit = __emit;
    const props = __props;
    const Selected = props.selectedProp;
    const levelSet = /* @__PURE__ */ new Set([
      "infrared",
      "magenta",
      "red",
      "amber",
      "orange",
      "green",
      "teal",
      "turquoise",
      "indigo",
      "violet",
      "ultraviolet",
      "clearlight",
      "base"
    ]);
    const scrollToModal = () => {
      var _a, _b;
      const idPanelChild = (_b = (_a = document.getElementById("info-panel")) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.nextElementSibling;
      if (idPanelChild) {
        idPanelChild.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    };
    const levelInfo = ref({
      number: "",
      color: "",
      desc: "",
      age: "",
      influence: "",
      frequency: "",
      values: "",
      currency: "",
      emergence: "",
      relate: ""
    });
    const toggleLevel = (sel) => {
      if (!levelSet.has(sel)) {
        return;
      }
      if (sel === "base") {
        levelInfo.value = {
          number: "",
          color: "",
          desc: "",
          age: "",
          influence: "",
          frequency: "",
          values: "",
          currency: "",
          emergence: "",
          relate: ""
        };
        emit("true");
        scrollToModal();
      } else {
        let temp = AqalLevels.filter((obj) => obj.color == sel).pop();
        if (temp !== void 0) {
          levelInfo.value = temp;
          emit("true");
          scrollToModal();
        }
      }
    };
    watchEffect(() => {
      toggleLevel(props.levelSetter);
      scrollToModal();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        unref(Selected) == "Levels" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(AqalLevels), ({ color, number }) => {
              return openBlock(), createElementBlock("button", {
                key: color,
                onClick: withModifiers(($event) => toggleLevel(color), ["stop"])
              }, toDisplayString(number), 9, _hoisted_3$1);
            }), 128))
          ]),
          !levelInfo.value.color ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[0] || (_cache[0] = createBaseVNode("h2", { style: { "margin-top": "2em" } }, "Altitudes system", -1)),
            _cache[1] || (_cache[1] = createBaseVNode("h2", null, "Levels of consciousness are meta-memes or super-patterns that govern the thoughts, values, and behavior of people. ", -1))
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("h1", _hoisted_4, [
              createTextVNode("Level " + toDisplayString(levelInfo.value.number) + " " + toDisplayString(levelInfo.value.color.toUpperCase()) + " ", 1),
              createBaseVNode("span", _hoisted_5, toDisplayString(levelInfo.value.desc), 1)
            ]),
            withDirectives(createBaseVNode("h4", null, [
              createTextVNode(toDisplayString(levelInfo.value.age), 1),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createTextVNode(" " + toDisplayString(levelInfo.value.frequency), 1),
              _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
              createTextVNode(" " + toDisplayString(levelInfo.value.influence), 1)
            ], 512), [
              [vShow, levelInfo.value.frequency !== ""]
            ]),
            _cache[4] || (_cache[4] = createBaseVNode("h3", null, "Reality: ", -1)),
            createBaseVNode("p", null, toDisplayString(levelInfo.value.values), 1)
          ], 64))
        ], 64)) : unref(Selected) == "States" ? (openBlock(), createElementBlock("div", {
          key: 1,
          style: { "margin-top": "2em" },
          innerHTML: unref(htmlBrainwaves)
        }, null, 8, _hoisted_6)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1 = { class: "integral-wrapper article-font" };
const _hoisted_2 = { class: "home-changer-int" };
const _hoisted_3 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Integral",
  setup(__props) {
    document.title = "Integral Theory ~ Stein unLimited";
    const modeSelectorButtons = ["Map", "States", "Levels", "Lines", "Quadrants", "Types"];
    const Selected = ref("Map");
    const SelectButton = (btn) => {
      Selected.value = btn;
      window.scrollTo(0, 0);
    };
    const levelInfo = ref({
      number: "",
      color: "",
      desc: "",
      values: "",
      emergence: "",
      relate: ""
    });
    const showInfo = ref(false);
    const toggle = () => {
      showInfo.value = !showInfo.value;
      window.scrollTo(0, 0);
    };
    const levelSet = /* @__PURE__ */ new Set([
      "infrared",
      "magenta",
      "red",
      "amber",
      "orange",
      "green",
      "teal",
      "turquoise",
      "indigo",
      "violet",
      "ultraviolet",
      "clearlight",
      "base"
    ]);
    const toggleLevel = (sel) => {
      if (!levelSet.has(sel)) {
        console.error("Invalid level: ${sel}");
        return;
      }
      if (sel === "base") {
        levelInfo.value = {
          number: "",
          color: "",
          desc: "",
          values: "",
          emergence: "",
          relate: ""
        };
        showInfo.value = true;
      } else {
        let temp = AqalLevels.filter((obj) => obj.color == sel).pop();
        if (temp !== void 0) {
          levelInfo.value = temp;
          showInfo.value = true;
        }
      }
    };
    const selState = ref("ordinary");
    const toggleState = (sel) => {
      selState.value = sel;
      showInfo.value = true;
    };
    watch(selState, () => {
      if (showInfo.value === true && document.getElementById("info-panel") !== null) {
        document.getElementById("info-panel").scroll(0, 0);
      }
    });
    watch(levelInfo, () => {
      if (showInfo.value === true && document.getElementById("info-panel") !== null) {
        document.getElementById("info-panel").scroll(0, 0);
      }
    });
    const handleRegionClick = (hrf) => {
      Selected.value = hrf;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        showInfo.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          selectedProp: Selected.value,
          levelSetter: levelInfo.value.color,
          stateSetter: selState.value,
          onClick: toggle,
          onToggle: toggle,
          onTrue: _cache[0] || (_cache[0] = ($event) => showInfo.value = true)
        }, null, 8, ["selectedProp", "levelSetter", "stateSetter"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(modeSelectorButtons, (btn) => {
            return createBaseVNode("a", {
              key: btn,
              onClick: ($event) => SelectButton(btn)
            }, toDisplayString(btn), 9, _hoisted_3);
          }), 64))
        ]),
        _cache[23] || (_cache[23] = createBaseVNode("h1", null, null, -1)),
        Selected.value == "Map" ? (openBlock(), createBlock(_sfc_main$5, {
          key: 1,
          onNext: _cache[1] || (_cache[1] = ($event) => SelectButton("States")),
          onHrf: handleRegionClick
        })) : Selected.value == "Quadrants" ? (openBlock(), createBlock(Quadrants, {
          key: 2,
          onNext: _cache[2] || (_cache[2] = ($event) => SelectButton("Types"))
        })) : Selected.value == "Levels" ? (openBlock(), createBlock(Levels, {
          key: 3,
          onInfrared: _cache[3] || (_cache[3] = ($event) => toggleLevel("infrared")),
          onMagenta: _cache[4] || (_cache[4] = ($event) => toggleLevel("magenta")),
          onRed: _cache[5] || (_cache[5] = ($event) => toggleLevel("red")),
          onAmber: _cache[6] || (_cache[6] = ($event) => toggleLevel("amber")),
          onOrange: _cache[7] || (_cache[7] = ($event) => toggleLevel("orange")),
          onGreen: _cache[8] || (_cache[8] = ($event) => toggleLevel("green")),
          onTeal: _cache[9] || (_cache[9] = ($event) => toggleLevel("teal")),
          onTurquoise: _cache[10] || (_cache[10] = ($event) => toggleLevel("turquoise")),
          onIndigo: _cache[11] || (_cache[11] = ($event) => toggleLevel("indigo")),
          onViolet: _cache[12] || (_cache[12] = ($event) => toggleLevel("violet")),
          onUltraviolet: _cache[13] || (_cache[13] = ($event) => toggleLevel("ultraviolet")),
          onClearlight: _cache[14] || (_cache[14] = ($event) => toggleLevel("clearlight")),
          onNext: _cache[15] || (_cache[15] = ($event) => SelectButton("Lines"))
        })) : Selected.value == "Types" ? (openBlock(), createBlock(_sfc_main$2, {
          key: 4,
          onNext: _cache[16] || (_cache[16] = ($event) => SelectButton("Map"))
        })) : Selected.value == "Lines" ? (openBlock(), createBlock(_sfc_main$3, {
          key: 5,
          onNext: _cache[17] || (_cache[17] = ($event) => SelectButton("Quadrants"))
        })) : Selected.value == "States" ? (openBlock(), createBlock(States, {
          key: 6,
          onOrdinary: _cache[18] || (_cache[18] = ($event) => toggleState("ordinary")),
          onBrainwaves: _cache[19] || (_cache[19] = ($event) => toggleState("brainwaves")),
          onSelves: _cache[20] || (_cache[20] = ($event) => toggleState("selves")),
          onSpiritual: _cache[21] || (_cache[21] = ($event) => toggleState("spiritual")),
          onNext: _cache[22] || (_cache[22] = ($event) => SelectButton("Levels"))
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};

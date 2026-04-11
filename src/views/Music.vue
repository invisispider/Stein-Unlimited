<script setup lang="ts">
import { ref } from 'vue';

// import ThousandPlusPlaylist from "@/components/ThousandPlusPlaylist.vue";
document.title = "Music Lessons with Adam";
// const showPlaylist = ref(true);
const steinPlayers = ref(false);
const toggleSteinPlayers = () => steinPlayers.value = !steinPlayers.value;
</script>
<template>
	<div id="music-main">
		<h1 class="glow double-width">Music Teacher ~ Adam Loewen</h1>
		<div class="headban fadeInUp shadow-me">
			<h3>🎤 Voice</h3>
			<h3>🎹 Piano</h3>
			<h3>🎸 Guitar</h3>
			<h3>♟️ Bass</h3>
			<h3>🧹 Ukelele</h3>
			<h3>🥁 Drums</h3>
			<h3>🖋️ Songwriting</h3>
			<h3>🎼 Music Theory</h3>
			<h3>🎙️ Recording</h3>
			<h3>🎯 Coaching</h3>
			<h3>⚕️ Music Therapy</h3>
			<img class="stu-banner" src="@/assets/img/musicbusinesscardF.webp" />
		</div>
		<h4 style="margin-block: 0.6em;">☑️ Performances and Events</h4> 
		<h4 style="margin-block: 0.6em;">☑️ Remote Online Coaching</h4>
		<h4 style="margin-block: 0.6em;">☑️ Private/Group Lessons in Portland</h4>
		<div v-if="steinPlayers" class="stein-players">
			<iframe style="border: 0;"
				src="https://bandcamp.com/EmbeddedPlayer/album=2892329347/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
				seamless>
			</iframe>
			<a href="https://thesteinsound.bandcamp.com/album/shades">Shades by Stein</a>
		</div>
		<h4
			class="double-width" 
			style="cursor: pointer;" 
			@click="toggleSteinPlayers"
			>Listen to Adam's band Stein
		</h4>
		<h2 class="">Benefits</h2>
		<div class="benefits">
			<p>Abstract expression of your feelings and personality</p>
			<p>Growth / Abundance mindset enables confidence and positivity</p>
			<p>Perform with peers in a supportive setting</p>
			<p>Fun, affirming style celebrates all levels</p>
			<p>Unlock what lies hidden within you</p>
		</div>
		<h2 class="">Skills</h2>
		<div class="benefits">
			<p>Master notation reading and theory</p>
			<p>Critical self-awareness and goal-setting</p>
			<p>Breath, posture and healthy habits</p>
			<p>Learn any style, any artist, any song</p>
			<p><b>Beyond playing instruments:</b> universalizing methodology</p>
		</div>
		<RouterLink style="margin-bottom: 1em;;" to="Integral">
			🧩 The Integral / Holistic Approach
		</RouterLink>
		<h2 class="" style="">Teaching Experience</h2>
		<!-- <h4> -->
		<table>
			<thead></thead>
			<tbody class="experience-table">
				<tr>
					<td>Harmony Road Instructor</td>
					<th>WESTSIDE MUSIC SCHOOL</th>
				</tr>
				<tr>
					<td>Teacher</td>
					<th>MY VOICE MUSIC</th>
				</tr>
				<tr>
					<td>Teacher</td>
					<th>VANCOUVER MUSIC ACADEMY</th>
				</tr>
				<tr>
					<td>Studio Volunteer</td>
					<th>BOYS & GIRLS CLUB</th>
				</tr>
				<tr>
					<td>Facillitator</td>
					<th>COMMUNITY YOGA</th>
				</tr>
				<tr>
					<td>Holistic Teacher</td>
					<th>STEIN UNLIMITED</th>
				</tr>
			</tbody>
		</table>
		<!-- </h4> -->
		<h2>Read about me in
			<a href="https://www.bigrapidsnews.com/news/article/evart-music-teacher-provides-osceola-county-fun-17741370.php"
			target="_blank">Big Rapids News.</a>
		</h2>
		<h2 class="double-width glow">Testimonials</h2>
		<div class="testimonials">
			<div class="testimonial">
				"Our daughter has made great progress with piano under Adam's
				instruction. He is encouraging, motivating, and she loves coming to
				class each week. We would highly recommend him!"
			</div>
			<img class="kid-image" src="@/assets/img/kidpiano.jpg" />
			<!-- <img class="kid-image" src="@/assets/img/kidsplash.jpg" /> -->
			<img class="kid-image" src="@/assets/img/kidfest.jpg" />
			<div class="testimonial">
				"There are no shortcuts in music. Adam is a teacher with an effective
				grasp of musicality in addition to the patience to teach this art
				form. I support and recommend this teacher for your student."
			</div>
			<img class="kid-image" src="@/assets/img/kiddrum.jpg" />
			<img class="kid-image" src="@/assets/img/kiddrum2.jpg" />
			<div class="testimonial">
				"My name is Owen. I play the drums. Adam is a very good teacher. He
				helps me learning new songs and is patient with me."
			</div>
			<!-- <img class="kid-image" src="@/assets/img/kidpiano2.jpg" /> -->
			<img class="kid-image" src="@/assets/img/kidguitar.jpg" />
			<img class="kid-image" src="@/assets/img/paintpiano.jpg" />
			<!-- <img class="kid-image" src="@/assets/img/kidpiano3.jpg" /> -->
			<div class="testimonial">
				"Adam has been a patient and encouraging teacher. He even helped my son
				print his own song, 'The Mason Jam', so he could 'sell' copies. We
				love watching Mason's love for music grow and we have Adam to thank
				for that."
			</div>
		</div>
		<h2 class="double-width">Story</h2>
		<p class="bio">Adam didn’t grow up in a musical household. As a kid, he was
			into video games, cartooning, and filmmaking. He enjoyed playing trumpet 
			in school band, but insecurity kept him from practicing at home.
			It wasn’t until high school, when he bought a guitar on a whim, that music 
			really took hold — and never really let go.
		</p><p class="bio">
			He learned by jamming with his friend James, working through online tabs 
			and method books, and absorbing rock history. Over time, he became a prolific 
			songwriter, recording more than a thousand demo songs. At first, he kept 
			everything private — writing, recording, and even “releasing” albums no one 
			ever heard. These songs were confessional, surreal, and often tangled with 
			contradictory themes and moods.
		</p><p class="bio">
			His first recording project, <em>Kitty Blue</em> (as Ante Meridiem) was  
			a synth-heavy frollick through youthful grief and heartbreak. It was followed by 
			<em>There You Are,</em> an acoustic collection featuring layered guitars 
			and raw, contemplative lyrics. Home recording felt like a sort of wizardry - creating
			this huge bank of personal spells and summoning incantations from thin air!
		</p><p class="bio">			
			At the University of Montana, Adam joined local bands and expanded  
			into jazz, classical, and more obscure genres. He gave up on trumpet. 
			He learned production techniques in professional studios through collaboration 
			and volunteering. There were many projects and albums, gigging, touring,
			music videos - but it was never enough. The truth was, Adam struggled a great 
			deal with singing, confidence, and leadership. 
		</p><p class="bio">	
			It became harder and harder to defend himself, to make excuses, to apologize 
			- until finally, he was forced to acknowledge the real issue: that 
			musical ability is not what makes a human being worthy of love. 
			He stopped 
			playing for many years, and instead, opened up to the many things 
			which cannot be depicted on a treble clef. Twenty years after embarking down 
			this path, Adam began to have the experience of enjoying his own 
			singing for the first time. That, above all, is what Adam aspires to 
			deliver to his students, because he knows firsthand the 
			many factors that can lead to apparent success or failure. 
		</p><p class="bio">			
			In his thirties, Adam became the kind of teacher that he never had for himself - 
			mentoring kids and adults 
			through schools and community programs in Portland and Vancouver.
			He lived in a shared art house, hosted regular concert parties, and 
			created a strong community that was wholesome, vulnerable, and connected.
			This living, churning engine of collective harmony and growth mattered deeply to the 
			many people involved, even if it didn't always pay the bills.
		</p><p class="bio">			
			Today, Adam plays, sings, and teaches for joy. He offers experimental 
			sessions combining music with yoga, dance, improv, and mindfulness
			to achieve a unique form of integrative therapy. He children 
			develop personality and creativity, and supports adults in reaching 
			long-held musical ambitions. 
		</p><p class="bio">
			<b>Whatever you practice, you get better at.</b> You can 
			get better and better at playing music in a way that is frustrating and 
			unsatisfying. You can get outstandingly good at not being ready, at awaiting 
			discovery, at convincing yourself that you aren't a star and don't want to be. 
			We are whole people, not just instrumentalists.
			When you're ready to stop holding back, Adam's right there with ya!
			Sincerely, the secret to the whole thing is this: 
			<em>It's okay for you to sing. You like to sing. Everybody wants you to sing 
				because you're great at it. They can't wait to hear you. They're gonna love it.</em>
		</p>
		<h2 class="double-width glow">Adam's Music</h2>
		<h2>Watch a playlist of cover songs and original home recordings.
			<a href="https://www.youtube.com/watch?v=j4BOaxU6zvk&list=PL-HrctEZpo50_xIks89Gi_2TA__wYh00l"
				target="_blank">ThousandPlus Playlist</a>
		</h2>
		<h2>Read about Adam's rock band and see performance videos:
			<RouterLink to="Videos">
				Stein unLimited Video Archive.
			</RouterLink>
		</h2>
	</div>
</template>
<style lang="sass" scoped>
@use "@/assets/css/utility"
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
@font-face
	font-family: "lhandw"
	src: url(@/assets/fonts/lhandw.ttf) format("truetype")

#music-main
	// max-width: 100vw
	margin: 2em 0
	display: flex
	flex-direction: column
	justify-content: center
	// text-shadow: 3px 3px 3px #50d
.headban
	max-width: 100vw
	min-height: 200px
	background-image: url("@/assets/img/smileyOutline.png"), url("@/assets/img/cabworkr.png")
	background-size: 9em
	background-repeat: no-repeat
	background-position: bottom left, top right
	display: flex
	justify-content: center
	flex-wrap: wrap
	padding-inline: 20%
	h3
		margin: 0.4em

.testimonials
	// display: grid
	// grid-template-rows
	justify-content: space-evenly
	.testimonial
		display: flex
		flex-direction: column
		font-family: 'lhandw'
.kid-image
	border: 1px solid #a996b9
	border-radius: 20px
	margin: 15px
	filter: sepia(40%)
	-webkit-filter: sepia(40%)
	max-width: 300px
	border-radius: 7px
	min-height: 300px
	max-height: 10vh

.double-width
	text-align: center
	border-radius: 6px
	align-content: center
	padding: 1rem
	margin: 0.2rem
	@include utility.breakpoint(m)
		padding: 1rem 10rem
		margin: 2rem auto

.stein-players
	display: flex
	flex-direction: column
	max-width: 100vw
	align-items: center
	iframe
		max-width: 80vw
		max-width: 88vw

.inline
	display: inline-flex
	margin: auto
h2
	font-size: 1.7em
h4, p
	font-family: Poppins
	
h2, h1
	font-family: 'Lobster', cursive
.testimonial
	padding: 1em
.testimonial, p, h4, h3
	margin-inline: auto
	max-width: 800px
	font-size: 1.2em
.stu-banner
	max-width: 100%
	width: 300px
	margin-block: 30px

.benefits
	list-style: none
	li
		margin-block: auto
h2 a, h2 router-link
	text-decoration: none

.bio
	max-width: 70ch
	text-align: justify
	text-justify: inter-word
	text-indent: 3em
	margin-block: 0.3em
.experience-table
	font-size-adjust: +0.65
	td 
		text-align: right
	th
		text-align: left
	th:before
		content: " -| "
</style>

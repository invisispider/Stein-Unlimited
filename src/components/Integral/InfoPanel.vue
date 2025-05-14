<script setup lang="ts">
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import { watchEffect, ref } from "vue";
import integral_states_info from "@/content/integral_states_info.md?raw";
import injectMarkdown from '@/composables/injectMarkdown';

const htmlOrdinary = injectMarkdown(integral_states_info, 'ORDINARY SECTION');
const htmlBrainwaves = injectMarkdown(integral_states_info, 'BRAINWAVES SECTION');
const htmlSelves = injectMarkdown(integral_states_info, 'SELVES SECTION');
const htmlSpiritual = injectMarkdown(integral_states_info, 'SPIRITUAL SECTION');

const emit = defineEmits(['toggle', 'true']);
const props = defineProps<{
    selectedProp: string,
    levelSetter: string,
    stateSetter: StatesType,
}>()

const Selected = props.selectedProp;
type Level = 'infrared'|'magenta'|'red'|'amber'|'orange'|'green'|'teal'|'turquoise'|'indigo'|'violet'|'ultraviolet'|'clearlight'|'base';
const levelSet = new Set<Level>([
    'infrared', 'magenta', 'red', 'amber', 'orange', 'green', 'teal', 'turquoise', 'indigo', 'violet', 'ultraviolet', 'clearlight', 'base'
    ]);
const scrollToModal = () => {
    const idPanelChild = document.getElementById('info-panel')?.firstElementChild?.nextElementSibling
    if (idPanelChild) {
        // idPanel.scrollTop = 0;
        idPanelChild.scrollIntoView({ block: "end", behavior: 'smooth'});

    }
}
const levelInfo = ref({
    number: '', 
    color: '', 
    desc: '', 
    age: '',
    influence: '',
    frequency: '',
    values: '', 
    currency: '',
    emergence: '',
    relate: ''
});
const toggleLevel = (sel: string) => {
    if (!levelSet.has(sel as Level)) {
        // console.error('Invalid level: ${sel}');
        return;
    }
    if (sel === 'base') {
        levelInfo.value = {
            number: '', 
            color: '', 
            desc: '', 
            age: '',
            influence: '',
            frequency: '',
            values: '', 
            currency: '',
            emergence: '',
            relate: ''
        };
        emit('true');
        scrollToModal()
    } else {
        let temp = AqalLevels.filter((obj)=>obj.color==sel).pop();
        if (temp!==undefined) {
            levelInfo.value = temp;
            emit('true')
            scrollToModal()
        }
    }
}
const statesType = ['ordinary', 'brainwaves', 'selves', 'spiritual'] as const
const toggleState = (sel: typeof statesType[number]) => {
    selState.value = sel;
    emit('true')
    scrollToModal()
}
// const sel = ref(props.stateSetter);
const selState = ref<typeof statesType[number]>('ordinary');
watchEffect(()=>{
    // let col = levelInfo.value.color;
    toggleLevel(props.levelSetter);
    scrollToModal();
    if (statesType.includes(props.stateSetter as any)) {
        toggleState(props.stateSetter);
        scrollToModal();
    }
})
type StatesType = typeof statesType[number];


</script>
<template>
    <div id="info-panel" class="info-panel">
        <template v-if="Selected == 'Levels'">
            <div class="btn-group-int">
            <button v-for="{color, number} of AqalLevels" :key="color"
                @click.stop="toggleLevel(color)"
            >{{number}}</button>
            </div>
        
            <template v-if="!levelInfo.color">
                <h2 style="margin-top: 2em;">Altitudes system</h2>
                <h2>Levels of consciousness are meta-memes or super-patterns
                    that govern the thoughts, values, and behavior of people.
                </h2>
            </template>
            <template v-else>
                <h1 style="margin-top: 2em;">Level {{ levelInfo.number }} {{ levelInfo.color.toUpperCase() }}
                    <span style="font-size: large;">{{ levelInfo.desc }}</span>
                </h1>
                <h4 v-show="levelInfo.frequency!==''">{{ levelInfo.age }}<br>
                {{ levelInfo.frequency }}<br>
                {{ levelInfo.influence }}</h4>
                <h4><b>Currency: </b>{{  levelInfo.currency }}</h4>
                <h3>Reality: </h3>
                <p>{{ levelInfo.values }}</p>
                <h3>Emergence: </h3>
                <p>{{ levelInfo.emergence }}</p>
                <h3>In Your World: </h3>
                <p>{{  levelInfo.relate }}</p>
            </template>
        </template>
        <template v-else-if="Selected == 'States'">
            <div class="btn-group-int">
            <button v-for="st of statesType" :key="st"
                @click.stop="toggleState(st)">{{st}}</button>
            </div>
            <br>
            <div  v-if="selState==='ordinary'" style="margin-top: 2em;"
                v-html="htmlOrdinary"
            ></div>
            <div  v-else-if="selState==='brainwaves'" style="margin-top: 2em;"
                v-html="htmlBrainwaves"
            ></div>
            <div  v-else-if="selState==='selves'" style="margin-top: 2em;"
                v-html="htmlSelves"
            ></div>
            <div  v-else style="margin-top: 2em;"
                v-html="htmlSpiritual"
            ></div>

        </template>
    </div>
</template>

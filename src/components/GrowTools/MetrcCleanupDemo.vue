<script setup lang="ts">
import { computed, ref } from 'vue';
interface MetrcData {
  tag: string;
  strain: string;
  weight: number | null;
  metrc: number | null;
}
const mockMetrcData: MetrcData[] = [
  { tag: "1A40603002B120041", strain: "Zkittlez", weight: 501, metrc: 501 },
  { tag: "1A40603002B120042", strain: "Zkittlez", weight: 450, metrc: 450 },
  { tag: "1A40603002B120043", strain: "Zkitlez", weight: null, metrc: 380 },
  { tag: "1A40603002B120044", strain: "Zkittlez", weight: 448, metrc: 448 },
  { tag: "1A40603002B120048", strain: "Zkittlez", weight: 511, metrc: 510 },
  { tag: "1A40603002B120045", strain: "Zkittlez", weight: 456, metrc: 456 },
  { tag: "1A40603002B120045", strain: "(#4)Zkittlez", weight: 305, metrc: 305 },
  { tag: "1A40603002B120046", strain: "Zkittlez", weight: 189, metrc: 189 },
  { tag: "1A40603002B120047", strain: "Skittlez", weight: 12, metrc: 120 },
  { tag: "1A40603002B120045", strain: "Zkittlez", weight: 405, metrc: 405 },
  { tag: "1A40603002B120045", strain: "Zkittlez", weight: 288, metrc: 288 },
  { tag: "1A40603002B120045", strain: "Zkittlez", weight: 420, metrc: 420 },
];
const rows = ref<MetrcData[]>([...mockMetrcData]);
const resetData = () => {
  rows.value = [...mockMetrcData];
}
const isStrainError = (item: typeof mockMetrcData[0]) => {
  return item.strain !== "Zkittlez";
}
const isWeightError = (item: typeof mockMetrcData[0]) => {
  return (
    item.weight == null ||
    item.metrc == null ||
    item.weight !== item.metrc
    )
}
const cleanupData = async () => {
    for (let i = 0; i < rows.value.length; i++) {
        
        const item = rows.value[i];
        
        let fixedStrain = item.strain;
        let fixedWeight = item.weight;

        if (item.strain !== "Zkittlez") {
            fixedStrain = "Zkittlez";
        }
        if (item.weight !== item.metrc) {
            fixedWeight = item.metrc;
        }

        rows.value[i] = {
            ...item,
            strain: fixedStrain,
            weight: fixedWeight
        }
      
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}

const discrepancyCount = computed(() => {
  return rows.value.filter(item =>
    isStrainError(item) || isWeightError(item)
  ).length
})

const isClean = computed(() => discrepancyCount.value === 0)
</script>
<template>
    <div class="gt-metrc-cleanup" style="overflow-x: scroll;">
        <h2>Metrc Cleanup</h2>
        <p>Simple visual demo of automated Metrc validation.</p>
        <transition name="fade" mode="out-in">
          <p v-if="!isClean" key="errors" class="note-error">{{ discrepancyCount }} discrepancies found!</p>
          <p v-else key="success" class="note-success">All records match Metrc data.</p>
        </transition>
        <div class="gt-table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Strain</th>
                        <th>Weight</th>
                        <th>Metrc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rows" :key="item.tag">
                        <td>{{ item.tag }}</td>
                        <td :class="{ error: isStrainError(item)}">{{ item.strain }}
                            <span v-if="isStrainError(item)" class="material-icons" title="typo">error</span>
                        </td>
                        <td :class="{ error: isWeightError(item)}">{{ item.weight }}
                            <span v-if="isWeightError(item)" class="material-icons" title="wrong weight">error</span>
                        </td>
                        <td>{{ item.metrc }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    <button class="gt-button" @click="cleanupData">Cleanup</button>
    <button class="gt-reset-button" @click="resetData">Reset</button>
    </div>
</template>

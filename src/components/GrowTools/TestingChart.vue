<script lang="ts" setup>
import { ref, computed } from "vue"
import type { ApexOptions } from "apexcharts";

const stage = ref(0)

const nextStage = () => {
  if (stage.value < 2) {
    stage.value++
  } else {
    stage.value = 0
  }
}


const rawPdfMock = `
LAB REPORT (PDF)
----------------
THC-A: 18.2%
THC: 1.1%
CBD: 0.3%
Moisture: 9.8%
`

const csvData = [
  { name: "THC-A", value: 18.2 },
  { name: "THC", value: 1.1 },
  { name: "CBD", value: 0.3 },
  { name: "Moisture", value: 9.8 },
]

const chartSeries = computed(() => [
  {
    name: "Value %",
    data: csvData.map(d => d.value),
  },
])

const chartOptions: ApexOptions = {
  chart: {
    toolbar: { show: false },
    background: "transparent",
  },
  xaxis: {
    categories: csvData.map(d => d.name),
  },
  stroke: {
    curve: "smooth" as const,
    width: 2,
  },
  dataLabels: { enabled: false },
  colors: ["DarkSlateBlue"],
}
</script>
<template>
  <div class="demo-card">
    <div class="demo-header">
      <div class="demo-title">
      <span class="material-icons">description</span>
        <h3>Lab Report → CSV Extraction</h3>
      </div>
    </div>

    <transition name="fade-slide" mode="out-in">
      <div :key="stage" class="demo-section">
        <template v-if="stage === 0">
          <h4>Raw PDF</h4>
          <pre class="pdf">{{ rawPdfMock }}</pre>
        </template>
        <template v-else-if="stage === 1">
          <h4>Extracted StructuredData</h4>
          <div class="gt-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in csvData" :key="row.name">
                  <td>{{ row.name }}</td>
                  <td>{{ row.value }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template v-else>
          <h4>Generated Dashboard</h4>
          <div class="demo-chart">
            <apexchart
              type="bar"
              height="250"
              :options="chartOptions"
              :series="chartSeries"
              />
          </div>
        </template>        
      </div>
    </transition>
    <button class="transform-btn" @click="nextStage">
      {{ 
        stage === 0 
        ? "Extract Data"
        : stage === 1
        ? "Generate Dashboard"
        : "Reset"
      }}
    </button>
  </div>
</template>
<style lang="sass" scoped>
$muted-green: #6e7864
@use "sass:color"
.demo-card
  border: 1px solid #ccc
  border-radius: 12px
  padding: 1rem
  margin-bottom: 1.5rem
  background: white
  min-height: 620px
  display: flex
  flex-direction: column
.demo-header
  justify-content: center
  display: flex
  align-items: center
  gap: 0.5rem
  cursor: pointer
.demo-header h3
  flex: 1
.demo-section
  margin-top: 1rem
.pdf
  background: #f5f5f5
  padding: 1rem
  font-family: monospace
  white-space: pre
table
  width: 100%
  border-collapse: collapse
$soft-off-white: #FAF9F6
td, th
  border-bottom: 1px solid #ddd
  padding: 0.5rem
  &:hover
    background-color: color.scale($soft-off-white, $lightness: -1%)
td
  color: darkSlateBlue
  font-weight: 300
.transform-btn
  margin-inline: auto
  margin-block: auto 1em
  padding: 0.7rem 1.2rem
  border-radius: 2rem
  font-weight: 600
  cursor: pointer
  background: $muted-green
  color: white
  transition: 0.2s ease
  &:hover
    background: color.scale($muted-green, $lightness: 20%)

.fade-slide-enter-active,
.fade-slide-leave-active
  transition: all 0.35s ease

.fade-slide-enter-from,
.fade-slide-leave-to
  opacity: 0
  transform: translateY(10px)

.demo-chart
  margin-top: 1rem

.demo-title
  display: flex
  align-items: center
  gap: 0.5rem
</style>

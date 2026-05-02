<script lang="ts" setup>
import { ref, computed } from "vue"
import type { ApexOptions } from "apexcharts";

const expanded = ref(false)

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

    <!-- Header -->
    <div class="demo-header" @click="expanded = !expanded">
      <span class="material-icons">description</span>
      <h3>Lab Report → CSV Extraction</h3>
      <span class="toggle">{{ expanded ? "Collapse" : "View" }}</span>
    </div>

    <!-- BEFORE -->
    <div class="demo-section">
      <h4>Before (PDF)</h4>
      <pre class="pdf">{{ rawPdfMock }}</pre>
    </div>

    <!-- AFTER -->
    <div v-if="expanded" class="demo-section">
        <h4>After (Structured Data)</h4>
        
    <!-- CHART -->
    <div v-if="expanded" class="demo-chart">
        <!-- ApexChart goes here -->
        <apexchart
        type="bar"
        height="250"
        :options="chartOptions"
        :series="chartSeries"
        />
    </div>
      <table>
        <tbody>
          <tr>
            <th>Test</th>
            <th>Value</th>
          </tr>
          <tr v-for="row in csvData" :key="row.name">
            <td>{{ row.name }}</td>
            <td>{{ row.value }}%</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>
<style lang="sass" scoped>
@use "sass:color"

.demo-card
  border: 1px solid #ccc
  border-radius: 12px
  padding: 1rem
  margin-bottom: 1.5rem
  background: white

.demo-header
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
    // font-size: 120%

td
  color: darkSlateBlue
  font-weight: 300
</style>

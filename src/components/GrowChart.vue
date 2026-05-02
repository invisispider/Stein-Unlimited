<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts"

const series = [
  {
    name: "Yield",
    data: [40, 55, 62, 48, 70, 82, 74],
  },
]

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    background: "transparent",
  },

  stroke: {
    curve: "smooth",
    width: 3,
  },

  dataLabels: {
    enabled: false,
  },

  grid: {
    borderColor: "rgba(0,0,0,0.08)",
  },

  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },

  theme: {
    monochrome: {
      enabled: true,
      color: "#6e7864",
    },
  },
}
</script>

<template>
  <VueApexCharts
    type="area"
    height="220"
    :options="chartOptions"
    :series="series"
  />
</template>
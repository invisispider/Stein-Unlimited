<script setup lang="ts">
import GrowChart from '@/components/GrowTools/GrowChart.vue';

const kpis = [
  { label: 'Active Packages', value: '2,481', trend: '+4.2%' },
  { label: 'Pending COAs', value: '12', trend: '-2 today' },
  { label: 'Validation Errors', value: '3', trend: '-1 fixed' },
  { label: 'Weekly Yield', value: '148.2 lbs', trend: '+6.1%' },
]

const chartData = [40, 55, 62, 48, 70, 82, 74]

const table = [
  { id: 1, package: 'PKG-221', strain: 'Blue Dream', status: 'Active', qty: '14.2g' },
  { id: 2, package: 'PKG-847', strain: 'GMO', status: 'Pending', qty: '8.1g' },
  { id: 3, package: 'PKG-109', strain: 'Gelato', status: 'Active', qty: '22.4g' },
]
</script>
<template>
  <div class="dashboard">

    <!-- KPI ROW -->
    <div class="kpi-grid">
      <div v-for="kpi in kpis" :key="kpi.label"
      class="kpi-card" >
        <div class="kpi-label">{{ kpi.label }}</div>
        <div class="kpi-value">{{ kpi.value }}</div>
        <div v-if="kpi.trend" class="kpi-trend" >
          {{ kpi.trend }}
        </div>
      </div>
    </div>

    <!-- MAIN GRID -->
    <div class="main-grid">

      <!-- CHART -->
      <div class="panel chart-panel">
        
        <GrowChart />

        <!-- CHART -->
        <div class="panel chart-panel">
            <div class="panel-title">Weekly Yield Trend</div>

            <div class="chart">
            <div
                v-for="(bar, i) in chartData"
                :key="i"
                class="bar"
                :style="{ height: bar + '%' }"
            />
            </div>

            <div class="chart-caption">
            Simulated production output (lbs)
            </div>
        </div>
      </div>
      <!-- ALERTS -->
      <div class="panel alert-panel">
        <div class="panel-title">System Alerts</div>

        <div class="alert warning">
          ⚠ Inventory mismatch detected in PKG-847
        </div>

        <div class="alert ok">
          ✓ Metrc sync completed (last 24h)
        </div>

        <div class="alert warning">
          ⚠ 12 COA reports pending normalization
        </div>

        <div class="alert info">
          ℹ 3 spreadsheets auto-updated
        </div>
      </div>
    </div>

    <div class="panel-title">Recent Inventory</div>
    <div class="gt-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Strain</th>
            <th>Status</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table" :key="row.id">
            <td>{{ row.package }}</td>
            <td>{{ row.strain }}</td>
            <td :class="row.status.toLowerCase()">{{ row.status }}</td>
            <td>{{ row.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
</template>

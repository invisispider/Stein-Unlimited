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

    <!-- TABLE -->
    <div class="panel table-panel">
      <div class="panel-title">Recent Inventory</div>

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

<style lang="sass" scoped>
$charcoal: #36454F
$soft: #FAF9F6
$muted: #6e7864
$border: rgba(0,0,0,0.08)
$green: #4a7c59
$orange: #c07a2c

.dashboard
  padding: 1rem
  background: white
  border-radius: 1rem
  box-shadow: 0 10px 30px rgba(0,0,0,0.08)

.kpi-grid
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 1rem
  margin-bottom: 1.5rem

.kpi-card
  background: $soft
  padding: 1rem
  border-radius: 0.8rem
  border: 1px solid $border
  transition: transform 0.2s ease

  &:hover
    transform: translateY(-2px)

.kpi-label
  font-size: 0.75rem
  color: $muted

.kpi-value
  font-size: 1.4rem
  font-weight: 700
  color: $charcoal

.kpi-trend
  font-size: 0.75rem
  margin-top: 0.25rem
  color: $muted

.main-grid
  display: grid
  grid-template-columns: 2fr 1fr
  gap: 1rem
  margin-bottom: 1.5rem

.panel
  background: $soft
  border: 1px solid $border
  border-radius: 0.8rem
  padding: 1rem

.panel-title
  font-weight: 600
  margin-bottom: 0.8rem
  color: $charcoal

/* CHART */
.chart
  display: flex
  align-items: flex-end
  gap: 6px
  height: 180px
  padding: 0.5rem 0

.bar
  flex: 1
  background: linear-gradient(to top, $muted, $green)
  border-radius: 4px
  opacity: 0.8
  transition: opacity 0.2s ease

  &:hover
    opacity: 1

.chart-caption
  font-size: 0.75rem
  color: $muted
  margin-top: 0.5rem

/* ALERTS */
.alert
  font-size: 0.85rem
  margin-bottom: 0.5rem
  padding: 0.4rem 0.6rem
  border-radius: 0.4rem
  background: rgba(0,0,0,0.03)

.alert.ok
  color: $green

.alert.warning
  color: $orange

.alert.info
  color: $muted

/* TABLE */
.table-panel
  overflow-x: auto

table
  width: 100%
  border-collapse: collapse

th, td
  text-align: left
  padding: 0.5rem
  border-bottom: 1px solid $border

.active
  color: $green

.pending
  color: $orange
</style>
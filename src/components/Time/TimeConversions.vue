<script setup>
const props = defineProps(["showChart"]);
const emit = defineEmits(["clock", "calendar"]);
</script>
<template>
  <div class="conversion-table">
    <table v-if="props.showChart == 'clock'" style="cursor: pointer;" 
      @click="emit('clock')">
      <tbody>
      <tr>
        <th colSpan="4">SEWMI Clock</th>
      </tr>
      <tr>
        <th class="th-blue">Day</th>
        <th class="th-blue">8.64 Events</th>
      </tr>
      <tr>
        <th class="th">Event</th>
        <th class="th">10 Sessions</th>
      </tr>
      <tr>
        <th class="th">Session</th>
        <th class="th">10 Whiles</th>
      </tr>
        <tr>
          <th class="th">While</th>
          <th class="th">10 Moments</th>
        </tr>
        <tr>
          <th class="th">Moment</th>
          <th class="th">10 Instants</th>
        </tr>
        <tr>
          <th class="th">Instant</th>
          <th class="th">=Second</th>
        </tr>
      </tbody>
    </table>
    <table v-if="props.showChart == 'habit'" style="cursor: pointer;" @click="emit('calendar')">
      <tbody>
      <tr>
        <th colSpan="4">Calendar Date</th>
      </tr>
      <tr>
        <th class="th">newZen</th>
        <th class="th">~5 Days</th>
      </tr>
      <tr>
        <th class="th">Historical Era</th>
        <th class="th">10,000 BC</th>
      </tr>
      <tr>
        <th class="th">Year</th>
        <th class="th">8 Habits</th>
      </tr>
      <tr>
        <th class="th">Habit</th>
        <th class="th">45 Days</th>
      </tr>
      <tr>
        <th class="th">Cycle</th>
        <th class="th">5 Days</th>
      </tr>
      <tr>
        <th class="th-blue">Year</th>
        <th class="th-blue">360 Days</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

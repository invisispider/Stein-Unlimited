<script setup lang="ts">
</script>
<template>
  <div id="loading">
    <img src="@/assets/img/spinner.gif" />
  </div>
</template>
<style lang="sass">
#loading
  filter: invert(1)
  // position: absolute
  z-index: 100
  background-color: white
  height: 100%
  width: 100%
  text-align: center
  line-height: 100%
  img
    border-radius: 6px
    position: relative
    margin: auto
    margin-top: 20%
</style>

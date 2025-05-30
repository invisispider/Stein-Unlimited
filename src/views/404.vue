<script lang="ts">
export default {
  name: "FourOhFour",
};
document.title = "404 | Uh Oh Oh No";
</script>
<template>
  <div class="fourohfour login-page">
    The pants is in another castle.😜
    <RouterLink to="/"><button>Home</button></RouterLink>
  </div>
</template>
<style lang="sass">
.fourohfour
  font-size: 2em
  padding: 2em
  margin: auto
.fourohfour a, .fourohfour router-link
  text-decoration: none
</style>

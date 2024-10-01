<script>
export default {
  name: "language-selector",

  data() {
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="languages"/>
</template>

<style scoped>

</style>
<script>
import Toolbar from './public/components/toolbar.component.vue'

export default {
  name: 'App',

  components: {
    Toolbar
  }
}

</script>

<template>
  <nav class="nav">
    <toolbar/>
  </nav>
  <main class="main">
    <router-view/>
  </main>
</template>

<style scoped>

</style>

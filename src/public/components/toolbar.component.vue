<script>
import LanguageSelector from './language-selector.component.vue'

export default {
  name: "toolbar",

  components: {
    LanguageSelector
  }
}
</script>

<template>
  <pv-toolbar class="navbar__container">
    <template #start>
      <div class="navbar__logo">
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" alt="hign-logo" />
      </div>
    </template>

    <template #center>
      <span class="navbar__title">
        Hartford Institute for Geriatric Nursing
      </span>
    </template>

    <template #end>
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link to="">
            <pv-button>
              Home
            </pv-button>
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link to="">
            <pv-button>
              Examiner Performance Overview
            </pv-button>
          </router-link>
        </li>

        <li class="navbar__item">
          <language-selector/>
        </li>
      </ul>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.navbar__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px;
}

.navbar__logo img {
  width: 90%;
  height: 50px;
}

.navbar__title {
  text-align: center;
}

.navbar__list {
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  gap: 20px;
}

@media screen and (min-width: 768px) {
  .navbar__container {
    flex-direction: row;
    align-items: center;
  }

  .navbar__title {
    text-align: center;
  }

  .navbar__list {
    flex-direction: row;
  }
}

</style>
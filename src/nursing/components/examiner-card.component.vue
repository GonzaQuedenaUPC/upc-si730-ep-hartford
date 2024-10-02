<script>
import Examiner from "../models/examiner.entity.js";

export default {
  name: "examiner-card",

  props: {
    examiner: {
      type: Examiner,
      required: true
    },
    assignedExamCount: {
      type: Number,
      required: true,
      default: 0
    },
    averageExamScore: {
      type: Number,
      required: true,
      default: 0
    }
  },

  methods: {
    getFullName() {
      return `${this.examiner.firstName} ${this.examiner.lastName}`;
    }
  }

}
</script>

<template>
  <pv-card class="card" style="width: 30%; margin: 1rem;">
    <template #header>
      <h2 class="card__header">{{ getFullName() }}</h2>
    </template>

    <template #title>
      <h4 class="card__title">NPI: {{ examiner.nationalProviderIdentifier }}</h4>
    </template>

    <template #subtitle>
      <p class="card__subtitle">Mental State Exam Performance</p>
    </template>

    <template #content>
      <div class="card__info">
        <p><strong>Current Assigned Mental State Exam Count: </strong> {{ assignedExamCount }}</p>
        <p><strong>Average Assigned Mental State Exam Total Score: </strong> {{ averageExamScore }}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>
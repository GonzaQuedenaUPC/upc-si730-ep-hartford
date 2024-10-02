<script>
import MentalStateExamService from "../services/mental-state-exam.service.js";
import MentalStateExam from "../models/mental-state-exam.entity.js";

export default {
  name: "mental-state-exam",

  components: {
    MentalStateExamService
  },

  data() {
    return {
      examCount: 0,
      lowestScore: 0,
      highestScore: 0,
      averageScore: 0,
      mentalStateExams:[],
      mentalSateExamApi: new MentalStateExamService(),
    }
  },

  methods: {

    buildMentalStateExamFromResponse(response) {
      return response.map(exam => {
         return new MentalStateExam (
            exam.id,
            exam.patientId,
            exam.examinerId,
            exam.examDate,
            parseInt(exam.orientationScore),
            parseInt(exam.registrationScore),
            parseInt(exam.attentionScore),
            parseInt(exam.attentionAndCalculationsScore),
            parseInt(exam.recallScore),
            parseInt(exam.languageScore)
        );
      });
    },

    loadExamData() {
      const totalScores = this.mentalStateExams.map(exam => {
        return (exam.orientationScore || 0)
            + (exam.registrationScore || 0)
            + (exam.attentionAndCalculationsScore || 0)
            + (exam.recallScore || 0)
            + (exam.languageScore || 0);
      });

      console.log(totalScores)

      this.examCount = totalScores.length;
      this.highestScore = Math.max(...totalScores);
      this.lowestScore = Math.min(...totalScores);
      this.averageScore = (totalScores.reduce((a, b) => a + b, 0) / this.examCount).toFixed(2);
      console.log(this.averageScore);
    }
  },

  created() {
    this.mentalSateExamApi.getAll()
        .then(response => {
          this.mentalStateExams = this.buildMentalStateExamFromResponse(response.data);

          this.loadExamData();
        })
        .catch(err => this.errors.push(err))
  }
}
</script>

<template>
  <div class="card">
    <pv-card style="width: 25rem; overflow: hidden" class="card__container">

      <template #title>
        <h3 class="card__title">Mental State Exam Analytics</h3>
      </template>

      <template #subtitle>
        <h4 class="card__subtitle">Score Analytics</h4>
      </template>

      <template #content>
        <div class="card__info">
          <p>Exam Count: {{ this.examCount }}</p>
          <p>Highest Score: {{ this.highestScore }}</p>
          <p>Lowest Score: {{ this.lowestScore }}</p>
          <p>Average Score: {{ this.averageScore }}</p>
        </div>
      </template>

    </pv-card>
  </div>
</template>

<style scoped>

.card {
  display: flex;
  justify-content: center;
}

.card__container {
  width: 30%;
  text-align: left;
}

</style>
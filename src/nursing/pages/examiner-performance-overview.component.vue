<script>
import ExaminerService from "../services/examiner.service.js";
import MentalStateExamService from "../services/mental-state-exam.service.js";

import ExaminerCard from '../components/examiner-card.component.vue';
import Examiner from "../models/examiner.entity.js";

export default {
  name: "examiner-performance-overview",

  components: {
    ExaminerCard
  },

  data() {
    return {
      examiners: [],
      examinerApi: new ExaminerService(),

      exams: [],
      mentalStateExamApi: new MentalStateExamService(),
    }
  },

  methods: {

    getAssignedExams(id) {
      return this.exams.filter(exam => exam.examinerId === id);
    },

    calculateAssignedExamCount(assignedExams) {
      return assignedExams.length || 0;
    },

    calculateAverageExamScore(assignedExams) {
      const totalScoreSum = assignedExams.reduce(
          (sum, exam) =>
              sum +
              (parseInt(exam.orientationScore) || 0) +
              (parseInt(exam.registrationScore) || 0) +
              (parseInt(exam.attentionAndCalculationScore) || 0) +
              (parseInt(exam.recallScore) || 0) +
              (parseInt(exam.languageScore) || 0),
          0
      );
      const assignedExamCount = this.calculateAssignedExamCount(assignedExams);

      return assignedExamCount > 0 ? parseFloat((totalScoreSum / assignedExamCount).toFixed(2)) : 0;
    },

    updateExaminerWithMetrics(examiner, assignedExamCount, averageExamScore) {
      const updatedExaminer = new Examiner(
          examiner.id,
          examiner.firstName,
          examiner.lastName,
          examiner.nationalProviderIdentifier
      );
      updatedExaminer.assignedExamCount = assignedExamCount;
      updatedExaminer.averageExamScore = averageExamScore;

      return updatedExaminer;
    },

    calculateExamMetricsForExaminers() {
      this.examiners = this.examiners.map(examiner => {
        const assignedExams = this.getAssignedExams(examiner.id);
        const assignedExamCount = this.calculateAssignedExamCount(assignedExams);
        const averageExamScore = this.calculateAverageExamScore(assignedExams);

        return this.updateExaminerWithMetrics(examiner, assignedExamCount, averageExamScore);
      });
    },

    buildExaminerFromApiResponse(response) {
      return response.map(examiner => {
        return new Examiner (
            examiner.id,
            examiner.firstName,
            examiner.lastName,
            examiner.nationalProviderIdentifier
        );
      });
    },

    fetchExaminers() {
      return this.examinerApi.getAll()
          .then(response => {
            //building examiner objects from response
            return this.buildExaminerFromApiResponse(response.data);
          });
    },

    fetchExams() {
      return this.mentalStateExamApi.getAll()
          .then(response => {
            return response.data;
          });
    },

    loadExaminersAndExamsData() {

      this.fetchExaminers()
          .then(examiners => {
            this.examiners = examiners;
            //loading exams after examiners
            return this.fetchExams();
          })
          .then(exams => {
            this.exams = exams;
            //calculating metrics after loading exams
            this.calculateExamMetricsForExaminers();
          })
          .catch(err => {
            console.error("Error loading data:", err);
          });
    },
  },

  created() {
    this.loadExaminersAndExamsData();
  }
}
</script>

<template>
  <div class="cards">
    <examiner-card v-for="examiner in examiners" :key="examiner.id" :examiner="examiner"
                   :assigned-exam-count="examiner.assignedExamCount" :average-exam-score="examiner.averageExamScore"/>
  </div>
</template>

<style scoped>

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
}

</style>
<script>
import MentalStateExamCard from "../../nursing/components/mental-state-exam-card.component.vue";

export default {
  name: "home",

  components: {
    MentalStateExamCard
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Welcome to HIGN</h1>
      <mental-state-exam-card/>
    </div>
  </div>
</template>

<style scoped>

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

</style>
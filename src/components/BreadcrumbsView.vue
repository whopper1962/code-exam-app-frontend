<template>
  <div>
    <ul>
      <li
        v-for="(exam, index) in exams"
        :key="`exam_${index}`"
      >
        <a @click="tabClicked(index)">
          {{ index + 1 }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    exams: [Array],
  },
  computed: {
    selectedExamNumber: {
      get() {
        return this.value;
      },
      set(clickedIndex) {
        this.$emit("input", clickedIndex);
      },
    },
  },
  methods: {
    tabClicked(clickedIndex) {
      this.selectedExamNumber = clickedIndex;
    },
  },
};
</script>

<style scoped>
</style>

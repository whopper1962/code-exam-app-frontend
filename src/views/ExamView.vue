<template>
  <div>
    <h3>Exams</h3>
    <template v-for="(exam, index) in exams">
      <div class="exam-main-content" :key="`exam_${index}`">
        <div class="exam-explanation-box">
          {{ exam.explanation }}
        </div>
        <PrismEditor
          v-model="inputed[index].code"
        />
      </div>
    </template>
  </div>
</template>

<script>
import PrismEditor from '@/components/CodeEditor';
export default {
  components: {
    PrismEditor
  },
  data () {
    return {
      exams: [
        {
          explanation: 'Solve this quiz.'
        }
      ],
      inputed: []
    };
  },
  created () {
    this.getExams();
  },
  methods: {
    getExams () {
      for (let i = 0, len = this.exams.length; i < len; i++) {
        this.inputed.push({
          memo: '',
          code: 'console.log("Hello World");'
        });
      }
    }
  }
}
</script>

<style scoped>
.exam-explanation-box {
  border: solid rgb(181, 181, 181);
  margin: 5px 0px;
  padding: 10px;
  text-align: left;
}
.exam-main-content {
  border: solid rgb(181, 181, 181);
  padding: 10px;
}
.exam-memo {
}
</style>
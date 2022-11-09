<template>
  <div>
    <BreadcrumbsView
      v-model="selectedExamIndex"
      :exams="exams"
    />
    <template v-for="(exam, index) in exams">
      <div
        class="exam-main-content"
        v-show="selectedExamIndex === index"
        :key="`exam_${index}`"
      >
        <h2 class="exam-title">{{ exam.title }}</h2>
        <div class="exam-explanation-box">
          {{ exam.explanation }}
        </div>
        <PrismEditor
          v-model="inputed[index].code"
        />
        <div class="exam-memo-textarea-wrapper">
          <textarea
            rows="6"
            v-model="inputed[index].memo"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import PrismEditor from '@/components/CodeEditor';
import BreadcrumbsView from '@/components/BreadcrumbsView';

export default {
  components: {
    PrismEditor,
    BreadcrumbsView
  },
  data () {
    return {
      exams: [
        {
          title: 'Variable',
          explanation: 'Solve this quiz.'
        },
        {
          title: 'Function',
          explanation: 'Solve this quiz.'
        },
        {
          title: 'Class',
          explanation: 'Solve this quiz.'
        },
        {
          title: 'Title3',
          explanation: 'Solve this quiz.'
        },
        {
          title: 'Title4',
          explanation: 'Solve this quiz.'
        },
        {
          title: 'Title5',
          explanation: 'Solve this quiz.'
        }
      ],
      inputed: [],
      selectedExamIndex: 0
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
.exam-main-content {
  border: solid rgb(181, 181, 181);
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
.exam-title {
  margin: 0px 0px 10px 10px;
  text-align: left;
}
.exam-explanation-box {
  border: solid rgb(181, 181, 181);
  border-radius: 8px;
  margin: 0px 0px 10px 0px;
  padding: 10px;
  text-align: left;
}
.exam-memo-textarea-wrapper {
  width: 100%;
}
.exam-memo-textarea-wrapper textarea {
  border:5px solid rgb(181, 181, 181);;
  border-radius: 8px;
  width:100%;
  margin:10px 0px 0px 0px;
  padding:1%;
  box-sizing: border-box;
  resize: none;
}
</style>
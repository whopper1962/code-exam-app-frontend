<template>
  <div>
    <h3>Exams</h3>
    <div class="exam-main-content">
      <div class="exam-explanation-box">
        {{ examContent }}
      </div>
      <PrismEditor/>
    </div>
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
      examContent: 'Solve this quiz.'
    };
  },
  created () {},
  methods: {}
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
</style>
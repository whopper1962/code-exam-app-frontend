<template>
  <div class="submit-page-area">
    <button
      class="submit-button"
      @click="$emit('submit')"
    >
      Submit!
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
.submit-page-area {
  border: solid rgb(181, 181, 181);
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>
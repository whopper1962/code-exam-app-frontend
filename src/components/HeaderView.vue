<template>
<div class="topnav">
  <router-link
    class="main-title"
    :to="{
      name: 'WELCOME_VIEW'
    }"
  >
    Code-Exam
  </router-link>
  <router-link
    v-for="(item, index) in headerItems"
    :key="`item_${index}`"
    :to="{
      name: item.name
    }"
  >
    {{ item.label }}
  </router-link>
</div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    headerItems () {
      return [
        {
          name: 'EXAM_VIEW',
          label: 'Exam'
        }
      ];
    }
  },
  methods: {}
}
</script>

<style scoped>
.topnav {
  margin: 0;
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
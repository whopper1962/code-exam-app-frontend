<template>
  <div id="app">
    <HeaderView/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView';

export default {
  components: {
    HeaderView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.main-content {
  margin: 10px;
}
</style>

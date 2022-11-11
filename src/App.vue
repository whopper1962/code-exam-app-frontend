<template>
  <div id="app">
    <NavigationBar/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';

export default {
  components: {
    NavigationBar
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

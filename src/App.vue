<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { sites } from "./data/sites.js";

export default {
  name: "app",
  data() {
    return {
      sites
    };
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

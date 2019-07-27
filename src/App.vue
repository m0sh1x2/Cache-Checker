<template>
  <div id="app">
    <SiteStatus :sites="sites" />
  </div>
</template>

<script>
import SiteStatus from "./components/SiteStatus";
import { sites } from "./data/sites.js";

export default {
  name: "app",
  data() {
    return {
      sites
    };
  },
  components: {
    SiteStatus: SiteStatus
  }
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

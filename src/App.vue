<template>
  <v-app id="app">
    <page-header />
    <router-view></router-view>
    <page-footer />
  </v-app>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";

import { sites } from "./data/sites.js";

export default {
  name: "app",
  data() {
    return {
      sites
    };
  },
  components: {
    PageHeader,
    PageFooter
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
}
</style>

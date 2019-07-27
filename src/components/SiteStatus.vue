<template>
  <div>
    <h2>Site Status</h2>
    <p class="appSite" v-for="site in sites" :key="site.key">{{site.url}} - {{site.status}}</p>
  </div>
</template>

<script>
export default {
  // name: ["SiteStatus"],
  props: ["sites"],
  methods: {}
};
</script>

<style scoped>
.appSite {
  border: 1px solid black;
  box-shadow: 1px 1px 2px #ccc;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  width: 20vw;
}
</style>

<template>
  <div>
    <site-item v-for="n in 10" :key="n"></site-item>
  </div>
</template>

<script>
import SiteItem from "@/components/Sites/SiteItem";

export default {
  name: "sites",
  components: { SiteItem },
  data() {
    return {
      siteList: [
        { id: 1, }
      ]
    };
  }
};
</script>

<style>
</style>

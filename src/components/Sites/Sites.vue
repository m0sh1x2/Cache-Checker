<template>
  <div>
    <site-item v-for="theSite in siteData" :key="theSite.id" :siteData="theSite"></site-item>
  </div>
</template>

<script>
import SiteItem from "@/components/Sites/SiteItem";

export default {
  name: "sites",
  components: { SiteItem },
  data() {
    return {
      siteData: [
        {
          id: 1,
          siteUrl: "https://news.ycombinator.com",
          lastChecked: "Checked 18 seconds ago",
          siteInfoStatus: null
        },
        {
          id: 2,
          siteUrl: "https://lobste.rs/",
          lastChecked: "Checked 32 seconds ago",
          siteInfoStatus: null
        },
        {
          id: 3,
          siteUrl: "https://softuni.bg",
          lastChecked: "Checked 5 seconds ago",
          siteInfoStatus: null
        },
        {
          id: 4,
          siteUrl: "https://www.zdnet.com/",
          lastChecked: "Checked 1 second ago",
          siteInfoStatus: null
        }
      ]
    };
  }
};
</script>

<style>
</style>

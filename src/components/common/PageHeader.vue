<template>
  <div>
    <h1>test</h1>
    <v-icon>mdi-anchor</v-icon>Icon ?
  </div>
</template>

<script>
export default {
  name: "page-header",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" }
      ]
    };
  }
};
</script>

<style>
</style>

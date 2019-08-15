<template>
  <div>
    <page-drawer :drawer="openDrawer" />

    <v-toolbar>
      <v-icon @click.stop="openDrawer = !openDrawer">mdi-menu</v-icon>

      <v-toolbar-title>Cache Checker</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>

        <template v-if="loggedIn">
          <v-btn text to="/logout">Logout</v-btn>
        </template>

        <template v-else>
          <v-btn text to="/login">Login</v-btn>
          <v-btn text to="/register">Register</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import PageDrawer from "@/components/common/PageDrawer";

export default {
  name: "page-header",
  components: {
    PageDrawer
  },
  data() {
    return {
      loggedIn: false,
      openDrawer: true
    };
  }
};
</script>

<style>
</style>

<template>
  <div>
    <page-drawer :drawer="openDrawer"></page-drawer>

    <v-toolbar>
      <v-icon @click.stop="openDrawer = !openDrawer">mdi-menu</v-icon>

      <v-toolbar-title>Cache Checker</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>

        <template v-if="isAuthenticated">
          <v-btn text to="/add">Add</v-btn>
          <v-btn text to="/sites">List Sites</v-btn>
          <v-btn text @click="logout()">Logout</v-btn>
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
import { EventBus } from "@/event-bus";

import PageDrawer from "@/components/common/PageDrawer";
import { logoutUser } from "@/services/authServices";

export default {
  name: "page-header",
  components: {
    PageDrawer
  },
  data() {
    return {
      openDrawer: null
    };
  },
  methods: {
    logout() {
      EventBus.$emit("logged-out");

      logoutUser();
    }
  }
};
</script>

<style>
</style>

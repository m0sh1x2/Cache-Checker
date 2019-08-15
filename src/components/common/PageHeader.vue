<template>
  <div>
    <v-toolbar>
      <v-btn text @click="loggedIn=!loggedIn">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

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
export default {
  name: "page-header",
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style>
</style>

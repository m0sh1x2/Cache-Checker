<template>
  <div>
    <v-icon>fas fa-circle-notch fa-spin</v-icon>
    <v-list-item @click>
      <v-list-item-avatar>
        <v-icon class="grey lighten-1 white--text">mdi-loading</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="'https://news.ycombinator.com'"></v-list-item-title>
        <v-list-item-subtitle v-text="'Last Check 18 seconds ago'"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>


<script>
export default {
  name: "site-item",
  props: []
};
</script>

<style scoped>
</style>
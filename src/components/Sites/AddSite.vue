<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col></v-col>
      <v-col>
        <form>
          <h2>Check your site</h2>
          <v-sheet elevation="12" class="pa-12">
            <v-text-field
              v-model="siteUrl"
              :label="label"
              :placeholder="placeholder"
              :loading="loading"
              :disabled="disabled"
              clearable
              outlined
            ></v-text-field>
            <v-btn block @click="loading = !loading" color="green">Check</v-btn>
          </v-sheet>
        </form>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "add-site",
  data() {
    return {
      siteUrl: "",
      placeholder: "https://news.ycombinator.com",
      loading: false,
      label: "URL",
      persistentHint: true,
      clearable: true,
      disabled: false
    };
  }
};
</script>

<style scoped>
</style>

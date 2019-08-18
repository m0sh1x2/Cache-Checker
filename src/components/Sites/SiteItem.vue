<template>
  <div>
    <v-list-item @click>
      <v-list-item-avatar>
        <v-icon class="grey lighten-1 white--text">mdi-application</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="siteData.siteUrl"></v-list-item-title>
        <v-list-item-subtitle v-text="siteData.lastChecked"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action @click="fakeLoading()">
        <v-btn icon>
          <v-icon v-if="isLoading">fas fa-circle-notch fa-spin</v-icon>
          <template v-else>
            <!-- <v-icon>mdi-cellphone-link</v-icon> -->
            <v-icon>mdi-cloud-check</v-icon>
          </template>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>


<script>
export default {
  name: "site-item",
  props: ["siteData"],
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    // Remove the FakeLoading when implementing the external requests.
    // This is here only for design idea purpose.
    fakeLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, Math.random() * 5000);
    }
  },
  created() {
    this.fakeLoading();
  }
};
</script>

<style scoped>
</style>
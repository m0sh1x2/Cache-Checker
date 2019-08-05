<template>
  <v-card height="150">
    <v-footer absolute class="font-weight-medium">
      <v-flex text-center xs12>
        {{ new Date().getFullYear() }} —
        <strong>Cache Checker</strong>
      </v-flex>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "page-footer"
};
</script>

<style>
</style>

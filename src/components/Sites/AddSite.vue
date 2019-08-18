<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col></v-col>
      <v-col>
        <form @submit.prevent="submit">
          <h2>Check your site</h2>
          <v-sheet elevation="12" class="pa-12">
            <v-text-field
              v-model="$v.siteUrl.$model"
              :label="label"
              :placeholder="placeholder"
              :loading="loading"
              :disabled="disabled"
              :coutner="counter"
              clearable
              outlined
            ></v-text-field>
            <v-btn block @click="submitCheckForm" color="green" :disabled="$v.$invalid">Check</v-btn>
          </v-sheet>
        </form>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { setTimeout } from "timers";
import {
  required,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";

export default {
  name: "add-site",
  data() {
    return {
      siteUrl: "http://",
      counter: 32,
      placeholder: "https://news.ycombinator.com",
      loading: false,
      label: "URL",
      persistentHint: true,
      clearable: true,
      disabled: false,
      submitStatus: null
    };
  },
  methods: {
    submitCheckForm() {
      if (this.$v.$invalid) {
        this.submitStatus = false;
      } else {
        this.disabled = true;
        this.loading = true;
        this.submitStatus = true;

        setTimeout(() => {
          this.loading = false;
          this.disabled = false;
          this.submitStatus = false;
        }, 1500);
      }
    },
    validateField() {
      this.$refs.form.validate();
    }
  },
  validations: {
    siteUrl: {
      required,
      minLength: minLength(7),
      // 253 characters is the maximum length of full domain name, including dots
      // 253 + https:// = 261 characters
      maxLength: maxLength(261)
    }
  }
};
</script>

<style scoped>
</style>

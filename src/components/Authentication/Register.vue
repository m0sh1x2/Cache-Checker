<template>
  <div>
    <form autocomplete="false">
      <v-text-field v-model="$v.username.$model" :counter="10" label="Username"></v-text-field>
      <v-text-field v-model="$v.password.$model" type="password" label="Password"></v-text-field>
      <v-text-field v-model="$v.email.$model" type="email" label="Username"></v-text-field>
      <v-btn class="mr-4" @click="submit">Register</v-btn>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import axios from "axios";
import { config } from "@/config/config";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(32)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(64)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      let authString = btoa(`${config.appKey}:${config.appSecret}`);

      this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
      this.$http.post(`/user/${config.appKey}`, {
        username: this.username,
        password: this.password
      });

      console.log("Submited");
    }
  }
};
</script>

<style>
</style>

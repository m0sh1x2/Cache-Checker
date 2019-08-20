<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <form>
          <v-text-field
            v-model="$v.username.$model"
            :counter="16"
            label="Username"
            :error-messages="usernameErrors"
          ></v-text-field>
          <v-text-field
            v-model="$v.password.$model"
            type="password"
            label="Password"
            :error-messages="passwordErrors"
          ></v-text-field>
          <v-text-field
            v-model="$v.email.$model"
            type="email"
            label="Email"
            :error-messages="emailErrors"
          ></v-text-field>
          <v-btn class="mr-4" @click="submit">Register</v-btn>
        </form>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

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
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required");
      !this.$v.username.minLength &&
        errors.push("Username must contain at least 6 characters");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password should contain at least 8 characters");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Email is required");
      !this.$v.email.email && errors.push("The email is invalid");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();

      // let authString = btoa(`${config.appKey}:${config.appSecret}`);

      // this.$http.defaults.headers.post["Authorization"] = `Basic ${authString}`;
      // this.$http.post(`/user/${config.appKey}`, {
      //   username: this.username,
      //   password: this.password,
      //   email: this.email
      // });

      console.log("Submited");
    }
  }
};
</script>

<style>
</style>

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
            label="Password"
            type="password"
            :error-messages="passwordErrors"
          ></v-text-field>
          <v-btn block color="info" @click="submit">Login</v-btn>
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

export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(16)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(64)
    }
  },
  computed: {
    // TODO: This repeats in Register Component - FIx it!
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
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style>
</style>

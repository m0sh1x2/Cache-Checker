<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <form>
          <v-sheet elevation="12" class="pa-12">
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
          </v-sheet>
        </form>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { authenticate } from "@/services/authServices";
import { EventBus } from "@/event-bus";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  mixins: [authenticate],
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

      this.login(this.username, this.password).then(user => {
        EventBus.$emit("logged-in", user._kmd.authtoken);
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>

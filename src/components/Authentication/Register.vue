<template>
  <div>
    <h1>Register Component</h1>
    <form>
      <input v-model="$v.username.$model" type="text" name id />
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
export default {
  data() {
    return {
      username: "John",
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
  }
};
</script>

<style>
</style>

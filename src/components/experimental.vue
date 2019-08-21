<template>
  <v-container>
    <h1>Experimental Component</h1>

    <p @click="increment(10)">{{getCounter}}</p>

    <input type="text" v-model="value" />
    <p>{{getValue}}</p>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "experimental",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCounter", "getValue"]),
    value: {
      get() {
        return this.$store.state.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    ...mapActions(["increment"]),
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }

    // increment() {
    //   this.$store.commit("increment");
    // }
  }
};
</script>
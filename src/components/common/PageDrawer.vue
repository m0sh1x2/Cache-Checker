<template>
  <div>
    <v-navigation-drawer v-model="drawer" :stateless="true" absolute>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-btn @click="triggerDrawer()" color="grey lighten-2" block>Close</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon> -->
    <!-- <v-btn @click="triggerDrawer()">test</v-btn> -->
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "fa-home" },
        { title: "Profile", icon: "fa-users" },

        { title: "About", icon: "fa-info-circle" }
      ]
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getDrawer;
      },
      set() {
        // this.$store.dispatch("updateDrawer");`
      }
    }
  },
  methods: {
    // ...mapActions["updateDrawer"],
    triggerDrawer() {
      this.$store.dispatch("updateDrawer");
      console.log(this.$store.getters.getDrawer);
      // console.log(this.$store.getters.getDrawer);
      // this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      // EventBus.$emit("i-got-clicked", this.clickCount);
    }
  }
};
</script>
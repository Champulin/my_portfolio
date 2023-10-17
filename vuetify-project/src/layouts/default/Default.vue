<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-layout>
      <default-bar />
      <!-- <v-spacer /> -->
      <v-main>
        <default-view />
      </v-main>
    </v-layout>
    <default-footer />
  </v-app>
</template>

<script lang="js" setup>
import DefaultBar from "../components/HeaderComponent.vue";
import DefaultFooter from "../components/FooterComponent.vue";
import DefaultView from "./View.vue";
</script>
<style>
.navbar {
  overflow: hidden;
  background-color: #333;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .content {
  padding-top: 60px;
}

/* Add responsiveness - will stack on top of each other when less than 600px */
@media screen and (max-width: 600px) {
  .navbar,
  .v-navigation-drawer {
    flex-direction: column;
  }
}
</style>

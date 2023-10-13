<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-layout>
      <default-bar />
      <!-- <v-spacer /> -->
      <v-main>
        <default-view />
      </v-main>
      <!-- <default-footer /> -->
    </v-layout>
  </v-app>
</template>

<script lang="js" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
// import DefaultFooter from "./AppFooter.vue";
</script>

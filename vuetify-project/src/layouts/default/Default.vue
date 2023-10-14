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
import DefaultBar from "@/components/HeaderComponent.vue";
import DefaultFooter from "@/components/FooterComponent.vue";
import DefaultView from "./View.vue";
</script>

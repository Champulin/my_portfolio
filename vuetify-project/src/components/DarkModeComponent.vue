<template>
  <v-btn @click="toggleTheme">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const icon = ref("mdi-weather-night");

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  icon.value = theme.global.current.value.dark
    ? "mdi-weather-night"
    : "mdi-weather-sunny";
};
</script>

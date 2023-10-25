<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-earth" v-bind="props"></v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, i) in languages"
        :key="i"
        @click="changeLanguage(item.code)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      languages: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("/localdb.json");
      const data = await response.json();
      this.languages = data.languages;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  setup() {
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return { changeLanguage };
  },
};
</script>

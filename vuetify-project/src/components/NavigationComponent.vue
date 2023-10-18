<template>
  <v-tabs>
    <v-tab>
      <router-link :to="'/'" class="button-style">
        {{ $t("navBar.home") }}
      </router-link>
    </v-tab>
    <v-tab id="menuBtns" v-for="(button, index) in navButtons" :key="index">
      <router-link :to="'/#' + button.href" class="button-style">
        {{ $t("navBar." + button.sectionName) }}
      </router-link>
    </v-tab>
  </v-tabs>
</template>

<script lang="js">
export default {
    props: ['navButtons'],
  methods: {
  scrollTo(sectionName) {
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
}
  }
}
</script>
<style scoped>
.v-tabs {
  align-items: center;
  justify-content: center;
  height: 50%;
}
</style>

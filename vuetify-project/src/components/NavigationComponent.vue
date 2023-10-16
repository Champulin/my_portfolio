<template>
  <v-tabs>
    <v-tab id="menuBtns" v-for="(button, index) in navButtons" :key="index">
      <a @click="scrollTo(button.sectionName)" class="button-style">
        {{ $t("message." + button.sectionName) }}
      </a>
    </v-tab>
  </v-tabs>
</template>
<script lang="js">
export default {
    props: ['navButtons'],
  methods: {
      scrollTo(sectionName) {
      this.$refs[sectionName].scrollIntoView({ behavior: 'smooth' });
    },
}}
</script>
<style scoped>
.v-tabs {
  align-items: center;
  justify-content: center;
  height: 50%;
}
</style>

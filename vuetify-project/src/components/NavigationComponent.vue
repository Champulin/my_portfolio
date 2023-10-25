<template>
  <v-tabs>
    <router-link :to="'/'" class="button-style">
      <v-tab>
        {{ $t("navBar.home") }}
      </v-tab>
    </router-link>
    <div id="menuBtns" v-for="(button, index) in navButtons" :key="index">
      <router-link :to="'/#' + button.href" class="button-style">
        <v-tab>
          {{ $t("navBar." + button.sectionName) }}
        </v-tab>
      </router-link>
    </div>
  </v-tabs>
</template>
<script lang="js">
export default {
    props: ['navButtons'],
  methods: {
  scrollTo(sectionName) {
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
    },
  }
}
</script>
<style scoped>
.v-tabs {
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: auto;
  padding: 0;
  .button-style {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    background-color: transparent;
    color: #343a40;
    border-radius: 50px;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;

    :hover {
      background-color: #343a40;
      color: #f8f9fa;
      transform: scale(1.05);
    }
  }
}
</style>

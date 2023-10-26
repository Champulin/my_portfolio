<template>
  <div id="about" class="navigation-hook"></div>
  <v-container class="about-container">
    <v-row class="title">
      <h1>{{ title }}</h1>
    </v-row>
    <v-row class="row resume-paragraph">
      <p v-html="intro"></p>
      <p v-html="about"></p>
    </v-row>
  </v-container>
</template>

<script lang="js">
export default {
  computed: {
    title() {
      return this.$t('aboutMe.aboutTitle');
    },
    intro() {
      return this.$t('aboutMe.introParagraph').split('\n').join('<br>');
    },
    about() {
      return this.$t('aboutMe.aboutParagraph').split('\n').join('<br>');
    }
  },
  async mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth > 960;
    }
  },
};
</script>
<style scoped>
.resume-paragraph {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
@media screen and (max-width: 960px) {
  h1 {
    font-size: 1.3rem;
  }
}
</style>

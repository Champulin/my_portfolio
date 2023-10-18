<template>
  <div class="about-container container">
    <div class="title">
      <h2>{{ $t("aboutMe.aboutTitle") }}</h2>
    </div>
    <div class="row resume-paragraph">
      <p v-html="$t('aboutMe.introParagraph').split('\n').join('<br>')"></p>
      <p v-html="$t('aboutMe.aboutParagraph').split('\n').join('<br>')"></p>
    </div>
  </div>
</template>

<script lang="js">
export default {
    data() {
        return {

        };
    },
    async mounted() {
        window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    }, methods: {
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
</style>

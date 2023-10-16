<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HomeProfile />
  <section class="container">
    <AboutMe />
    <Projects />
  </section>
</template>

<script lang="js" setup>
import HomeProfile from "@/components/HomeProfile.vue"
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/ProjectsComponent.vue";
</script>
<style scoped>
.container {
  width: min(100%, 512px);
  margin: auto;
}
</style>

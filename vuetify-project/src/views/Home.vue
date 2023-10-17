<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HomeProfile />
  <section class="container">
    <AboutMe />
    <Projects />
    <WorkExperience />
  </section>
  <site-in-development />
</template>

<script lang="js" setup>
import HomeProfile from "@/components/HomeProfile.vue"
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/ProjectsComponent.vue";
import SiteInDevelopment from '@/components/SiteInDevelopment.vue';

import WorkExperience from "@/components/WorkExperienceComponent.vue";
</script>
<style scoped>
.container {
  width: min(100%, 512px);
  margin: auto;
}
</style>

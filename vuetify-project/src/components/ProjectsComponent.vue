<template>
  <div id="projects" class="projects-container container">
    <div class="title">
      <h1>Projects</h1>
    </div>

    <v-card
      max-width="100%"
      v-for="(project, index) in projects"
      :key="index"
      class="project-card mx-auto projects"
    >
      <div class="project-image">
        <a @click.prevent="openInNewTab(project.href)">
          <v-img :src="project.image" alt="Project Image"> </v-img>
        </a>
      </div>
      <v-card-title>{{ project.name }}</v-card-title>
      <v-card-subtitle>{{ project.techStack }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          {{ $t("message.aboutTitle") }}
        </v-btn>
        <v-spacer> </v-spacer>
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ project.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-card-text class="tech-container">
        <span>Features </span>
        <p>{{ project.features }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="js">
export default {
  data() {
    return {
      projects: [],
      show: false,
    };
  },
  methods: {
    openInNewTab(href) {
      window.open(href, "_blank");
    }
  },
  async mounted() {
    try {
      const response = await fetch("/localdb.json");
      const data = await response.json();
      this.projects = data.projects;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
</script>
<style scoped>
.projects {
  padding-bottom: 2rem;
}
.v-card-subtitle {
  white-space: pre-wrap;
}
.project-card {
  margin: auto;
}
</style>

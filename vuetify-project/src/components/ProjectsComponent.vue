<template>
  <div id="projects" class="projects-container container" v-if="projects">
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
          {{ $t("message.knowMore") }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggleCard(index)"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show[index]">
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
      show: [], // Initialize show as an empty array
      projects: [], // Initialize projects as an empty array
    };
  },
  methods: {
    openInNewTab(href) {
      window.open(href, "_blank");
    },
    toggleCard(index) {
      this.show[index] = !this.show[index];
    },
  },
  async mounted() {
    try {
      const response = await fetch("/localdb.json");
      const data = await response.json();
      this.projects = data.projects;
        this.show = new Array(this.projects.length).fill(false);
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

<template>
  <div id="projects" class="navigation-hook"></div>
  <v-container class="projects-container container" v-if="projects">
    <v-row class="title">
      <h1>{{ title }}</h1>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, index) in projects"
        :key="index"
        class="v-col-12 v-col-sm-12 v-col-md-6 v-col-lg-4"
      >
        <card-component
          :itemTittle="item.clientName"
          :itemSubtitle="$t(item.translationKey + '.features')"
          :expandMsg="expandMsg"
          :itemImage="item.image"
          :itemContent="$t(item.translationKey + '.description')"
          :itemHref="item.href"
          :index="index"
          :underText="item.techStack"
          :itemAltImg="item.alt"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import CardComponent from './CardComponent.vue';
export default {
  components: {
    CardComponent
  },
  data() {
    return {
      projects: [],
      expandMsg: this.$t('componentMessages.knowMore'),
      title: this.$t('navBar.projects'),
    };
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
<style scoped></style>

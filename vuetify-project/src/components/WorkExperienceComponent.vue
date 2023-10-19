<template>
  <v-container
    id="work-experience"
    class="work-container container"
    v-if="workExperiences"
  >
    <v-row>
      <h1>{{ title }}</h1>
    </v-row>
    <v-row v-for="(item, index) in workExperiences" :key="index">
      <card-component
        :itemTittle="item.companyName"
        :itemSubtitle="
          $t(item.translationKey + '.position') + ' (' + item.duration + ')'
        "
        :expandMsg="expandMsg"
        :itemImage="item.companyLogo"
        :itemContent="$t(item.translationKey + '.description')"
        :itemTasks="item.tasks"
        :itemTranslationKey="item.translationKey + '.tasks'"
        :itemHref="item.href"
        :index="index"
        :underText="item.techStack"
      />
    </v-row>
  </v-container>
</template>
<script lang="js">
import CardComponent from '@/components/CardComponent.vue'
export default {
  components: {
    CardComponent
  },
  data() {
    return {
      workExperiences: [],
      expandMsg: this.$t('componentMessages.knowMore'),
      title: this.$t('navBar.workExperience'),
    };
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.workExperiences = data.workExperience;
      console.log(this.workExperiences);
    }catch(error) {
      console.error('An error occurred:', error);
    }
  }
}
</script>
<style></style>

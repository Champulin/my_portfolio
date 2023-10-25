<template>
  <div id="work-experience" class="navigation-hook"></div>
  <v-container class="work-container container" v-if="workExperiences">
    <v-row>
      <h1>{{ title }}</h1>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, index) in workExperiences"
        :key="index"
        class="card-container v-col-12 v-col-sm-12 v-col-md-6 v-col-lg-6"
      >
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
          :itemAltImg="item.alt"
        />
      </v-col>
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
    }catch(error) {
      console.error('An error occurred:', error);
    }
  }
}
</script>
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-img {
  height: 100%;
}
</style>

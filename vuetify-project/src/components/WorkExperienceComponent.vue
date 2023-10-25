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
        class="card-container"
        cols="12"
        sm="6"
        md="6"
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
.v-row {
  /* width: min(100%, 40vw); */
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

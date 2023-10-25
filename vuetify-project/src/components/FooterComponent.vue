<template>
  <v-footer class="= d-flex flex-column">
    <div class="first-footer d-flex align-center w-100">
      <strong> {{ connectMsg }}</strong>
      <v-btn
        v-for="socials in socialMedia"
        :key="socials"
        class="mx-4"
        :icon="socials.icon"
        :href="socials.href"
        target="_blank"
        size="small"
      ></v-btn>
    </div>
    <div class="px-4 py-2 bg-black text-center w-100">
      2023 —
      <strong>Created with Vue/Vuetify 3</strong>
    </div>
  </v-footer>
</template>

<script lang="js">

export default {

  data() {
    return {
      socialMedia: [],
      connectMsg: this.$t("componentMessages.connect"),
      copyrightMsg: this.$t(
        "componentMessages.createdWith"
      ),
    }
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.socialMedia = data.socialMedia;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
};
</script>
<style scoped>
.first-footer {
  /* color: #747171; */
  justify-content: center;
}
.first-footer strong {
  display: flex;
  /* margin-right: 10px; */
}
.v-footer {
  padding: 0;
  background-color: rgba(138, 201, 215, 0.9);
}
.v-btn {
  color: #4c948c;
  /* background-color: #343a40; */
  border-color: #343a40;
}
</style>

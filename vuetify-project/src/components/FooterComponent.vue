<template>
  <footer class="= d-grid d-column">
    <div class="first-footer d-flex align-center w-100 rem-1.5">
      <strong> Connect with me on social networks!</strong>
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
      {{ new Date().getFullYear() }} —
      <strong>Created with Vue/Vuetify 3</strong>
    </div>
  </footer>
</template>

<script lang="js">

export default {

  data() {
    return {
      socialMedia: [],
    }
  },
  async mounted() {
    try {
      const response = await fetch('/localdb.json');
      const data = await response.json();
      this.socialMedia = data.socialMedia;
      console.log(this.navButtons);
    } catch (error) {
      console.error('An error occurred:', error);
    }
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style scoped>
.first-footer {
  color: #747171;
  justify-content: center;
}
.first-footer strong {
  display: flex;
  margin-right: 10px;
}
.v-footer {
  padding: 0;
  background-color: rgb(136, 150, 150);
}
.v-btn {
  color: #4c948c;
  background-color: #343a40;
  border-color: #343a40;
}
</style>

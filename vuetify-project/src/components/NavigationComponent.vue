<template>
  <v-tabs>
    <v-tab id="menuBtns" v-for="(button, index) in navButtons" :key="index">
      <router-link :to="button.href" class="button-style">
        {{ button.sectionName }}
      </router-link> </v-tab
    >4
  </v-tabs>
</template>
<script lang="js">
export default {
    props: ['navButtons'],
}
</script>
<style scoped>
.v-tabs {
  align-items: center;
  justify-content: center;
  height: 50%;
}
.button-style {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: #343a40;
  border-radius: 50px; /* This will give the buttons a rounded look */
  transition: background-color 0.3s ease, transform 0.2s ease-in-out; /* Added transform transition */
}

.button-style:hover {
  background-color: #343a40;
  color: #f8f9fa;
  transform: scale(
    1.05
  ); /* Slightly increase the size of the button on hover */
}
</style>

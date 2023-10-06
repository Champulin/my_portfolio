<template>
  <v-card id="profile_pic">
    <v-avatar>
      <v-img cover src="@/assets/logo_photo.png" />
    </v-avatar>
    <v-card-title>
      <h1 class="text-h2 font-weight-bold">Vicente Zurita</h1>
    </v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
//
</script>
<style>
#profile_pic {
  display: flex;
  height: 45%;
  width: 70%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
}

.v-avatar {
  height: 200px !important;
  width: 200px !important;
  margin: auto;
}
</style>

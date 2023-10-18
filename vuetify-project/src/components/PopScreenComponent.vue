<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Site in Development</v-card-title>
      <v-card-text>
        <p>{{ popMsg }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeDialog">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      popMsg: this.$t("popUp.popMsg"),
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Site in Development</v-card-title>
      <v-card-text>
        <p>
          This site is currently in development. Some features may not be
          available yet.
        </p>
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
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

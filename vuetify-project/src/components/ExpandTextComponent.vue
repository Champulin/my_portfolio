<template>
  <v-card-actions>
    <v-btn color="orange-lighten-2" variant="text">
      {{ $t("message.knowMore") }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      @click="toggleCard(index)"
    ></v-btn>
  </v-card-actions>
  <v-expand-transition>
    <div v-show="show[index]">
      <v-divider></v-divider>
      <v-card-text>
        {{ textBox }}
      </v-card-text>
    </div>
  </v-expand-transition>
</template>
<script lang="js">
export default {
    props: {
        textBox: String,
        index: Number
    },
    data() {
        return {
             show:[],// Initialize show as an empty array
        };
    },
    async mounted() {
        try {
            const response = await fetch("/localdb.json");
            const data = await response.json();
            this.projects = data.projects;
            this.show = new Array(this.projects.length).fill(false);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    },
    methods: {
        toggleCard(index) {
            this.show[index] = !this.show[index];
        },
    }
};
</script>
<style></style>

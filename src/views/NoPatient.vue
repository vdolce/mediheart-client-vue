<template>
  <!-- Introduction Card -->
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="750px"
  >
    <v-card-title>
      <v-icon large left> mdi-clipboard-account-outline </v-icon>
      <span class="text-h6 font-weight-light">Welcome to MediHeart !</span>
    </v-card-title>

    <v-card-text class="text-h6">
      <p>Hi! Tell us something more about you.</p>
    </v-card-text>

    <v-card-actions class="mt-6 mb-4 justify-center">
      <v-btn class="mx-2" fab dark medium color="secondary">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NoPatient",

  computed: {},
};
</script>

<style scoped>
</style>

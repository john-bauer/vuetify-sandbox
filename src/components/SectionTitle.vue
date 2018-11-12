<template>
  <div class="c-section-title">
    <div class="grey2">
      <v-container>
        <h1 class="display-2">{{ title }}</h1>
        <p class="subheading">{{ description }}</p>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style>

</style>

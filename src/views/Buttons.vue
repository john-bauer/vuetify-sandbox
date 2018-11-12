<template>
  <div class="app-buttons">
    <SectionTitle
    title="Buttons"
    description="this is a description about buttons and how great they are"/>
    <v-container grid-list-md>
      <v-layout row wrap>
        <!-- SMALL -->
        <h1 class="headline" secondary>Button Colors and Sizes</h1>
        <v-flex xs12>
          <v-btn small color="success">Success</v-btn>
          <v-btn small color="error">Error</v-btn>
          <v-btn small color="warning">Warning</v-btn>
          <v-btn small color="info">Info</v-btn>
        </v-flex>
        <v-flex xs12>
          <v-btn color="success">Success</v-btn>
          <v-btn color="error">Error</v-btn>
          <v-btn color="warning">Warning</v-btn>
          <v-btn color="info">Info</v-btn>
        </v-flex>
        <v-flex xs12>
          <v-btn large color="success">Success</v-btn>
          <v-btn large color="error">Error</v-btn>
          <v-btn large color="warning">Warning</v-btn>
          <v-btn large color="info">Info</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import SectionTitle from '../components/SectionTitle.vue';

export default {
  components: {
    SectionTitle,
  },
};
</script>

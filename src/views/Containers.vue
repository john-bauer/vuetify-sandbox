<template>
  <div class="app-containers">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
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

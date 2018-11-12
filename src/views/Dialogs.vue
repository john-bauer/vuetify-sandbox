<template>
  <div class="about">
    <SectionTitle
    title="Dialogs"
    description="this is a description about dialogs and how great they are"
    />
          <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>

          <v-card-text>
    <v-form v-model="valid">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
    </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>
<script>

import SectionTitle from '../components/SectionTitle.vue';

export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

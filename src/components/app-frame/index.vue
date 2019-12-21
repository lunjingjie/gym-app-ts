<template>
  <div>
    <v-app-bar
        :src="darkFlag ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : ''"
        app
        color="top_bar"
        flat
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../../../public/img/app/frame/frame-logo.png"
            transition="scale-transition"
            width="32"
        />
        <h2>GYM</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn
          icon
          text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
          text
          icon
          @click="changeMode"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
    </v-content>
    <v-bottom-navigation
        fixed
        :value="activeBtn"
        grow
        color="teal"
    >
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class AppFrame extends Vue {
    private activeBtn: number = 1;
    private darkFlag: boolean = this.$vuetify.theme.dark;

    changeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkFlag = this.$vuetify.theme.dark;
    }
  }
</script>

<template>
  <v-app>
    <app-frame></app-frame>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import AppFrame from "@/components/app-frame/index.vue";

  @Component({
    components: {
      AppFrame,
    }
  })
  export default class App extends Vue {
  }
</script>

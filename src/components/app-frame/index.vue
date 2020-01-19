<template>
  <div>
    <v-app-bar
        app
        color="top_bar"
        flat
        class="elevation-1"
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
        <h2 style="font-size: 17px;">GYMLIFE</h2>
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
    <router-view style="padding-top: 60px;" class="mx-3" :style="{height: height - 98 + 'px'}" />
    <v-card
        height="75"
        class="elevation-2"
        style="position: fixed; bottom: 0px; width: 100%;"
    >
      <v-layout row class="px-3">
        <v-flex class="text-center">
          <div>
            <v-btn @click="bottomBarBtnIndex = 'checkIn'"
                   icon style="font-weight: bold; margin-top: -4px;"
                   width="60"
                   height="60"
                   :color="bottomBarBtnIndex === 'checkIn' ? 'bottom_bar_select' : 'bottom_bar_bg'"
            >
              <div>
                <div>
                  <v-icon style="font-size: 20px;">mdi-calendar-check-outline</v-icon>
                </div>
                <div style="font-size: 12px;">打卡1</div>
              </div>
            </v-btn>
          </div>
        </v-flex>

        <v-flex class="text-center">
          <div>
            <v-btn @click="bottomBarBtnIndex = 'chart'"
                   icon style="font-weight: bold; margin-top: -4px;"
                   width="60"
                   height="60"
                   :color="bottomBarBtnIndex === 'chart' ? 'bottom_bar_select' : 'bottom_bar_bg'"
            >
              <div>
                <div>
                  <v-icon style="font-size: 20px;">mdi-chart-bar</v-icon>
                </div>
                <div style="font-size: 12px;">统计</div>
              </div>
            </v-btn>
          </div>
        </v-flex>

        <v-flex class="text-center">
          <div>
            <v-btn @click="bottomBarBtnIndex = 'book'"
                   icon style="font-weight: bold; margin-top: -4px;"
                   width="60"
                   height="60"
                   :color="bottomBarBtnIndex === 'book' ? 'bottom_bar_select' : 'bottom_bar_bg'"
            >
              <div>
                <div>
                  <v-icon style="font-size: 20px;">mdi-book-open-page-variant</v-icon>
                </div>
                <div style="font-size: 12px;">教程</div>
              </div>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class AppFrame extends Vue {
    private darkFlag: boolean = this.$vuetify.theme.dark;
    private bottomBarBtnIndex: string = 'checkIn';
    private height: number = 0;

    mounted() {
      this.height = document.body.clientHeight;
      this.$router.push('/gymCheckIn');
    }

    changeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkFlag = this.$vuetify.theme.dark;
    }
  }
</script>

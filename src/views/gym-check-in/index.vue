<template>
  <div>
    <v-card style="border-radius: 5px;" class="ma-2" height="100%">
      <v-row>
        <v-col cols="12">
          <v-row
              align="center"
              justify="center"
              :style="{height: height - 200 + 'px'}"
          >
<!--            <v-btn class="mx-2" fab outlined dark color="primary" width="150" height="150">-->
<!--              <v-icon dark>mdi-android</v-icon>-->
<!--            </v-btn>-->
            <div style="width: 150px; height: 150px; border: 8px solid #b1ff69; border-radius: 150px;">
              <div style="position: relative; top: 38px; left: 30px; font-size: 29px; font-weight: bold;">{{currentTime}}</div>
              <div style="position: relative; top: 38px; left: -7px; font-size: 14px; width: 150px; text-align: center;">第1次</div>
              <div style="position: relative; top: 38px; left: 42px; font-size: 14px;">健身打卡</div>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import dayjs from 'dayjs';

  @Component
  export default class GymCheckIN extends Vue {
    private loading: boolean = false;
    private loader: any = null;
    private height: number = 0;
    private currentTime: string = '';
    private timeInterval: any = null;

    mounted() {
      this.height = document.body.clientHeight;
      this.currentTime = dayjs().format('HH:mm');
      this.setTimeInterval();
    }

    setTimeInterval() {
      this.timeInterval = setInterval(() => {
        this.currentTime = dayjs().format('HH:mm');
      }, 1000);
    }

    destroyed() {
      if (this.timeInterval) {
        clearInterval(this.timeInterval);
      }
    }
  }
</script>

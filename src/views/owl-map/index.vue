<template>
  <div>
    <l-map
      :options="{ zoomControl: false, attributionControl: false }"
      ref="map"
      :center.sync="mapCenter"
      :zoom.sync="mapZoom"
      :max-zoom="16"
      class="map-div"
      style="z-index: 0;"
      @leaflet:load="initMapInstance"
    >
      <template v-for="(enp, idx) in enpList">
        <enp-marker :key="idx"
                    :enp="enp"
                    @openDialog="openDialog"
        ></enp-marker>
      </template>
      <l-tile-layer url="http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga"/>
    </l-map>
    <v-card style="position: absolute; top: 10px; left: 15px;" class="pa-2 elevation-5">
      <v-autocomplete v-model="enpSelect"
                      color="#1565C0"
                      :items="enpSelectList"
                      required
                      hide-details
                      clearable
                      class="custom-auto-class"
                      cache-items
                      style="padding-top: 0px; margin-top: 0px;"
                      no-data-text="没有找到搜索企业"
                      placeholder="快速搜索企业"
                      @click:clear="clearEnp"
                      prepend-icon="mdi-magnify">
      </v-autocomplete>
    </v-card>
    <div style="position: absolute; top: 10px; right: 10px;">
      <v-card style="text-align: center;" class="px-1 py-1 elevation-5">
        <div style="font-size: 12px; color: #8e8e8e;">正常</div>
        <div style="font-weight: bold; color: #00C853;">{{totalInfo.normal}}</div>
      </v-card>
      <v-card style="text-align: center;" class="px-1 py-1 mt-2 elevation-5">
        <div style="font-size: 12px; color: #8e8e8e;">数据缺失</div>
        <div style="font-weight: bold; color: #69F0AE;">{{totalInfo.lackOfData}}</div>
      </v-card>
      <v-card style="text-align: center;" class="px-1 py-1 mt-2 elevation-5">
        <div style="font-size: 12px; color: #8e8e8e;">离线</div>
        <div style="font-weight: bold; color: #757575;">{{totalInfo.offline}}</div>
      </v-card>
    </div>
    <v-bottom-sheet v-model="enpDetail" persistent>
      <v-card class="pa-3">
        <v-layout row>
          <span style="font-size: 14px; color: #449AFD; font-weight: 700;">{{currentEnp.enterpriseName}}</span>
        </v-layout>
        <v-layout row>
          <span style="font-size: 10px; color: #8A8A8A;">{{currentEnp.dataTime}}</span>
        </v-layout>
        <v-layout row class="text-xs-center mt-3">
          <v-flex xs3>
            <div style="font-size: 30px; font-weight: 500;" :style="{ color: scoreColor(currentEnp.score) }">
              {{currentEnp.score === null ? '/' : currentEnp.score}}
            </div>
            <div style="font-size: 10px; color: #8A8A8A; font-weight: 300;">
              评分
            </div>
          </v-flex>
          <v-divider vertical class="my-2"></v-divider>
          <v-flex xs3 style="padding-top: 10px;">
            <div style="font-size: 15px; color: #00A73C; font-weight: 500;">
              {{currentEnp.productLineCount === null ? '/' : currentEnp.productLineCount}}
            </div>
            <div style="font-size: 10px; color: #8A8A8A; font-weight: 300;">
              生产线
            </div>
          </v-flex>
          <v-flex xs3 style="padding-top: 10px;">
            <div style="font-size: 15px; font-weight: 500;" :style="{ color: stateColor(currentEnp.state) }">
              {{currentEnp.state === null ? '/' : currentEnp.state}}
            </div>
            <div style="font-size: 10px; color: #8A8A8A; font-weight: 300;">
              状态
            </div>
          </v-flex>
          <v-flex xs3 style="padding-top: 10px;">
            <div style="font-size: 15px; color: #D40124; font-weight: 500;">
              {{!currentEnp.alarmDataVOs ? '/' : currentEnp.alarmDataVOs.length}}
            </div>
            <div style="font-size: 10px; color: #8A8A8A; font-weight: 300;">
              违规告警
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-bottom-sheet>
    <v-snackbar
      top
      v-model="snackbar"
      :timeout="timeout"
    >
      未查询到该企业信息
    </v-snackbar>
    <v-dialog
      v-model="dialog"
      persistent
      class="custom-dialog"
    >
      <div style="text-align: center; height: 50px;">
        <v-progress-circular
          size="28"
          indeterminate
          color="#1867C0"
        ></v-progress-circular>
        <span style="font-weight: bold; font-size: 15px;">
          数据加载中...
        </span>
      </div>
    </v-dialog>
  </div>
</template>
<script>
  import api from '@/api/example';
  import 'leaflet/dist/leaflet.css';
  import LMap from 'vue2-leaflet/src/components/LMap.vue';
  import LTileLayer from 'vue2-leaflet/src/components/LTileLayer.vue';
  import EnpMarker from './enpMarker/index.vue';

  export default {
    name: 'OwlMap',
    components: {
      EnpMarker,
      LMap,
      LTileLayer,
    },
    data() {
      return {
        dialog: false,
        mapInstance: null,
        mapZoom: 13,
        mapCenter: [23.028762, 113.122717],
        enpList: [],
        enpSelect: '',
        enpDetail: false,
        allEnpDetailList: [],
        currentEnp: {},
        snackbar: false,
        timeout: 3000,
        timeInterval: null,
        fitFlag: true,
      };
    },
    mounted() {
      this.dialog = true;
      this.getEnpList();
      this.getAllEnpDetailList();
      this.timeInterval = setInterval(() => {
        this.getEnpList();
        this.getAllEnpDetailList();
      }, 30000);
    },
    computed: {
      totalInfo() {
        return {
          normal: this.enpList.filter(item => item.isCurrent === '正常').length,
          lackOfData: this.enpList.filter(item => item.isCurrent === '数据缺失').length,
          offline: this.enpList.filter(item => item.isCurrent === '离线').length,
        };
      },
      enpSelectList() {
        return this.enpList.map(item => ({
          text: item.name,
          value: item.enterpriseId,
        }));
      },
    },
    watch: {
      enpSelect(enpId) {
        if (enpId) {
          const arr = this.allEnpDetailList.filter(item => item.enterpriseId === enpId);
          if (arr.length > 0) {
            this.currentEnp = { ...arr[0] };
            this.enpDetail = true;
            const arr1 = this.enpList.filter(item => item.enterpriseId === enpId);
            this.fitBoundsEnp([[arr1[0].lat, arr1[0].lng]]);
          } else {
            this.snackbar = true;
          }
        }
      },
    },
    methods: {
      clearEnp() {
        this.fitBoundsEnp(this.enpList.map(item => [item.lat, item.lng]));
      },
      initMapInstance() {
        this.mapInstance = this.$refs.map.mapObject;
      },
      async getEnpList() {
        try {
          const { data } = await api.allEnpList();
          this.enpList = data.filter(item => item.lat !== null && item.lng !== null);
          if (this.fitFlag) {
            this.fitBoundsEnp(this.enpList.map(item => [item.lat, item.lng]));
            this.fitFlag = false;
          }
          this.dialog = false;
        } catch (e) {
          this.dialog = false;
        }
      },
      async getAllEnpDetailList() {
        const { data } = await api.allEnpDetailList();
        this.allEnpDetailList = data;
      },
      fitBoundsEnp(marker) {
        this.mapInstance.fitBounds(marker);
      },
      openDialog(enpId) {
        this.enpDetail = true;
        const arr = this.allEnpDetailList.filter(item => item.enterpriseId === enpId);
        if (arr.length > 0) {
          this.currentEnp = { ...arr[0] };
        }
      },
      scoreColor(data) {
        if (data < 60) {
          return '#D40124';
        }
        return '#00A73C';
      },
      stateColor(data) {
        if (data === '正常') {
          return '#00C853';
        }
        if (data === '数据缺失') {
          return '#69F0AE';
        }
        if (data === '离线') {
          return '#757575';
        }
        return '';
      },
    },
    destroyed() {
      clearInterval(this.timeInterval);
    },
  };
</script>
<style scoped>
  .map-div {
    width: 100%;
    height: 100vh;
  }
</style>
<style>
  .custom-auto-class .v-menu__content {
    top: 40px !important;
    left: 0px !important;
    width: 130px;
  }
  .custom-dialog .v-dialog {
    box-shadow: none;
  }
</style>

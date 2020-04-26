<template>
  <div>
    <l-marker
      ref="site"
      :lat-lng="[enp.lat, enp.lng]"
      :key="enp.enterpriseId"
      @click="openDialog(enp.enterpriseId)"
    >
      <l-icon
        :icon-anchor="[10, 30]"
        :icon-size="[14.5, 14.5]"
        style="opacity: 1;"
        class-name="icon_color"
      >
        <v-icon :color="setColor(enp.isCurrent)">mdi-map-marker</v-icon>
      </l-icon>
    </l-marker>
  </div>
</template>
<script>
  import LMarker from 'vue2-leaflet/src/components/LMarker.vue';
  import LIcon from 'vue2-leaflet/src/components/LIcon.vue';

  export default {
    name: 'EnpMarker',
    components: {
      LMarker,
      LIcon,
    },
    data() {
      return {
        colorArr: {
          正常: '#00C853',
          数据缺失: '#69F0AE',
          离线: '#757575',
        },
      };
    },
    props: {
      enp: Object,
    },
    methods: {
      setColor(isCurrent) {
        return this.colorArr[isCurrent];
      },
      openDialog(enpId) {
        this.$emit('openDialog', enpId);
      },
    },
  };
</script>

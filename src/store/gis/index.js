import { make } from 'vuex-pathify';

const state = {
  // 所选中河涌或站点
  selectItemId: null,
  mainLayerType: {
    1: {
      value: 1,
      text: '河涌',
      color: 'yellow darken-1',
      icon: 'mdi-waves',
    },
    6: {
      value: 6,
      text: '站点',
      color: 'yellow darken-1',
      icon: 'mdi-map-marker',
    },
    8: {
      value: 8,
      text: '湖泊',
      color: 'yellow darken-1',
      icon: 'mdi-map-marker',
    },
  },
  envType: {
    2: {
      value: 2,
      text: '水闸',
      color: 'yellow darken-1',
      icon: 'mdi-wall',
      iconColor: 'blue darken-1',
    },
    3: {
      text: '排水口',
      icon: 'mdi-water-pump',
      color: 'yellow darken-1',
      value: 3,
      iconColor: 'orange',
    },
    4: {
      text: '工业园区',
      icon: 'mdi-factory',
      color: 'yellow darken-1',
      value: 4,
      iconColor: 'teal',
    },
    5: {
      text: '污水处理站',
      icon: 'mdi-cup-water',
      color: 'yellow darken-1',
      value: 5,
      iconColor: 'purple',
    },
    7: {
      text: '泵站',
      icon: 'mdi-engine-outline',
      color: 'yellow darken-1',
      value: 7,
      iconColor: 'green',
    },
  },
};
const actions = {};
const mutations = {};

export default ({
  namespaced: true,
  state,
  mutations: {
    ...make.mutations(state),
    ...mutations,
  },
  actions,
});

import { make } from 'vuex-pathify';
import mutations from './mutation';
import actions from './action';

const state = {
  // 平台名称
  // 水环境标准
  // 气环境标准
  // 开发环境地址
  // 集成测试环境地址
  // 生产环境地址
};

export default ({
  namespaced: true,
  state,
  mutations: {
    ...make.mutations(state),
    ...mutations,
  },
  actions,
});

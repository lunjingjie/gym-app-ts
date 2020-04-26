/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import test from './test';
import gis from './gis';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pathify.plugin],
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    test,
    gis,
  },
});

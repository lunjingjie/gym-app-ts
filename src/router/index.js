import Vue from 'vue';
import Router from 'vue-router';
import routerList from './routeList';

Vue.use(Router);

export default new Router({
  history: true,
  routes: routerList,
});

// 权限控制根据实际项目组件、业务返回值进行判断

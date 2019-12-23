import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // 顶部栏背景颜色
        top_bar: '#fff',
        // 中部内容背景颜色
        content_bg: '#000',
        // 底部栏按钮、文字背景颜色
        bottom_bar_bg: '#606060',
        // 底部栏按钮选中颜色
        bottom_bar_select: '#1976D2',
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        top_bar: '#282828',
        content_bg: '#212121',
        bottom_bar_bg: '#909090',
        bottom_bar_select: '#fff',
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
    // dark: true,
  },
});

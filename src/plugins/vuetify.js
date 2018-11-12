import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    white: '#FFFFFF',
    grey1: '#FAFAFA',
    grey2: '#F5F5F5',
    grey3: '#EEEEEE',
    grey4: '#E0E0E0',
    grey5: '#BDBDBD',
    grey6: '#757575',
    grey7: '#616161',
    grey8: '#424242',
    grey9: '#212121',
  },
  customProperties: true,
  iconfont: 'md',
});

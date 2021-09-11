import Vue from 'vue';
import Vuetify from 'vuetify/lib';

export default new Vuetify({
    theme: {
        themes: {
          light: {        
            primary: '#007885',
            secondary: '#ec407a',
            error: '#EF5350',
            success: '#4caf50',
            background:'#fff'    
          }
        },
      },
  })

  Vue.use(Vuetify);
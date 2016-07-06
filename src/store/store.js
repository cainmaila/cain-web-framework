import Vue from 'vue'
import Vuex from 'vuex'
import demoModule from './modules/vuexDemoModule.js';
import jscookModule from './modules/jscookDemoModule.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        demoModule,
        jscookModule,
    },
})

import Vue from 'vue';
import { alert, navbar, dropdown } from 'vue-strap';
import VueRouter from 'vue-router';
// import Vuex from 'vuex'
//自己做的vue Component
import HeaderMod from 'header_Mod';
import HomeMod from 'home_Mod';
import MyComponent1 from 'myComponent_MOD';
import MyComponent2 from 'myComponent2_MOD';

import store from 'myStore';
import { incrementCounter, jscookCounter, jscookRest} from 'mySction';
import { getCount, getJsCookCount } from 'myGetters';

Vue.use(VueRouter);
// Vue.use(Vuex);
// 全域注册
Vue.component('v-alert', alert);
Vue.component('navbar', navbar);

const app = {
    data: function() {
        return {
            
        }
    },
    components: {
        'headerMod': HeaderMod,
        // 'myComponent2': MyComponent2,
    },
    methods: {
        vueDemoClick:function(){
            this.incrementCounter(10);
        }, 
    },
    store,
    vuex: {
        actions: {
            incrementCounter,
            jscookCounter,
            jscookRest,
        },
        getters: {
            getCount,
            getJsCookCount,
        },
    },
};

const router = new VueRouter({
    hashbang: false //網址不出!符號
});

router.map({
    '/': {
        name: 'home',
        component: HomeMod
    },
    'page1': {
        name: 'page1',
        component: MyComponent1
    },
    'page2': {
        name: 'page2',
        component: MyComponent2
    },
})
router.redirect({
    '*': '/'
})
router.start(app, '#app');

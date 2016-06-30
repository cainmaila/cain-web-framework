console.log('Wooo!!');

//js-cook test!!
//https://github.com/js-cookie/js-cookie
let myCookies = Cookies.get('myCookies');
myCookies = myCookies === void 0 ? 0 : myCookies * 1;
myCookies += 1;
Cookies.set('myCookies', myCookies);

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
import { incrementCounter } from 'mySction';
import { getCount } from 'myGetters';

Vue.use(VueRouter);
// Vue.use(Vuex);
// 全域注册
Vue.component('v-alert', alert);
Vue.component('navbar', navbar);

const app = {
    data: function() {
        return {
            my_cookies: myCookies
        }
    },
    components: {
        'headerMod': HeaderMod,
        // 'myComponent2': MyComponent2,
    },
    methods: {
        cookiesAdd: function() {
            this.my_cookies += 1;
            Cookies.set('myCookies', this.my_cookies);
        },
        cookiesRest: function() {
            Cookies.remove('myCookies');
            this.my_cookies = 0;
        },
        vueDemoClick:function(){
            this.increment(10);
        }, 
    },
    store: store,
    vuex: {
        actions: {
            increment: incrementCounter,
        },
        getters: {
            // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
            counterValue: getCount,
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

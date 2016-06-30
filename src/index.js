console.log('Wooo!!');

//js-cook test!!
//https://github.com/js-cookie/js-cookie
let myCookies = Cookies.get('myCookies');
myCookies = myCookies === void 0 ? 0 : myCookies * 1;
myCookies += 1;
Cookies.set('myCookies', myCookies);

import Vue from 'vue';
import { alert, navbar, dropdown} from 'vue-strap';
import VueRouter from 'vue-router';
//自己做的vue Component
import HeaderMod from 'header_Mod';
import HomeMod from 'home_Mod';
import MyComponent1 from 'myComponent_MOD';
import MyComponent2 from 'myComponent2_MOD';

Vue.use(VueRouter);
// 全域注册
Vue.component('v-alert', alert);
Vue.component('navbar', navbar);
// Vue.component('dropdown', dropdown);

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
        }
    }
};

const router = new VueRouter({
    hashbang: false //網址不出!符號
});

router.map({
    '/': {
        name:'home',
        component: HomeMod
    },
    'page1':{
        name:'page1',
        component: MyComponent1
    },
    'page2':{
        name:'page2',
        component: MyComponent2
    },
})
router.redirect({
    '*': '/'
})
router.start(app, '#app');

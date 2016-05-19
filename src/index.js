console.log('Wooo!!');

//js-cook test!!
//https://github.com/js-cookie/js-cookie
let myCookies = Cookies.get('myCookies');
myCookies = myCookies === void 0 ? 0 : myCookies * 1;
myCookies += 1;
Cookies.set('myCookies', myCookies);

import Vue from "Vue";

new Vue({
    el: '#app',
    data: {
        my_cookies: myCookies
    },
    methods: {
        cookiesAdd: function() {
        	this.my_cookies+=1;
        	Cookies.set('myCookies', this.my_cookies);
        },
        cookiesRest:function(){
        	Cookies.remove('myCookies');
        	this.my_cookies = 0;
        }
    }
})

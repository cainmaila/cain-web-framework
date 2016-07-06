/**
 * js-cook modules demo版型
 */

let myCookies = Cookies.get('myCookies');
myCookies = myCookies === void 0 ? 0 : myCookies * 1;
// myCookies += 1;
Cookies.set('myCookies', myCookies);

import { JSCOOK_DEMO_EVENT, JSCOOK_REST_DEMO_EVENT} from 'myEvents';

const state = {
    count: myCookies,
}

const mutations = {
    [JSCOOK_DEMO_EVENT](state, count) {
        state.count += count;
        Cookies.set('myCookies', state.count);
    },
    [JSCOOK_REST_DEMO_EVENT](state) {
        state.count = 0;
        Cookies.set('myCookies', 0);
    },
}

export default {
    state,
    mutations
}

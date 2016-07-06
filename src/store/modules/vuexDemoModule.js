/**
 * vuex modules demo版型
 */

import { VUEX_DEMO_EVENT } from 'myEvents';

const state = {
    count: 0,
}

const mutations = {
    [VUEX_DEMO_EVENT](state, count) {
        state.count += count;
    },
}

export default {
    state,
    mutations
}

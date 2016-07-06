import {VUEX_DEMO_EVENT, JSCOOK_DEMO_EVENT, JSCOOK_REST_DEMO_EVENT} from 'myEvents';
export const incrementCounter = function({
	dispatch,
	state
}, count) {
	dispatch(VUEX_DEMO_EVENT, count)
}

export const jscookCounter = function({
	dispatch
}, count) {
	dispatch(JSCOOK_DEMO_EVENT, count)
}

export const jscookRest = function({
	dispatch
}, count) {
	dispatch(JSCOOK_REST_DEMO_EVENT)
}
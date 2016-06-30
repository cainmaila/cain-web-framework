export const incrementCounter = function({
	dispatch,
	state
}, amount) {
	dispatch('INCREMENT', amount)
}
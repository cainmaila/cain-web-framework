export const addCoolies = ({ dispatch},num) => {
	console.log(num); 
	dispatch('ADD_COOLIES', num) 
};

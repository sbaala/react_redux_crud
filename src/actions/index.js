
export const selectUser = (user) => {
	console.log("user clicked"+user);
	
	return {
		type:"USER_SELECTED",
		payload:user
	}
};
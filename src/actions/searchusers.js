
export const searchUsers = (userFilter) => {
	console.log("user clicked"+userFilter);
	
	return {
		type:"USER_SEARCH",
		payload:userFilter
	}
};
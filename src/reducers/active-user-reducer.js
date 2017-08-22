export default function( state=null, action ){
	
	switch(action.type) {
		
		case 'USER_SEARCH':		
			return action.payload;
			break;
		
	}
	return state;



}
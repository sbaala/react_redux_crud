import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import ActiveUserReducer from './active-user-reducer'
import LoginUsersReducer from './reducer-loginusers'



const allReducers = combineReducers({
	
	users:UserReducer,
	activeUser:ActiveUserReducer,
	loginUsers:LoginUsersReducer
	
	
});

export default allReducers;
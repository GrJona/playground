import { combineReducers } from 'redux';
import {currentUser} from "./users.reducer";
import { auth } from "./authentication.reducer";


const rootReducer = combineReducers({ currentUser, auth });


export default rootReducer;

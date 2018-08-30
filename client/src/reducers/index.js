import { combineReducers } from 'redux';
import { currentUser } from './users.reducer';
import authData from './authentication.reducer';

const rootReducer = combineReducers({ currentUser, authData });

export default rootReducer;

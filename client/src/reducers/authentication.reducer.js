import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from '../../../../../../Library/Caches/typescript/3.0/node_modules/redux';

export const auth = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      console.log('in login request reducer');
      return {
        loggingIn: true,
        loggedIn: false,
        userEmail: action.email
      };

    case actionTypes.LOGIN_SUCCESS:
      console.log('in login success reducer');
      return {
        loggingIn: false,
        loggedIn: true,
        userEmail: action.email
      };
    case actionTypes.LOGOUT:
      return {
        loggingIn: false,
        loggedIn: false,
        userEmail: ''
      };
    default:
      return state;
  }
};

export const token = (state = '', action) => {
  if (action.type === actionTypes.SET_TOKEN) {
    return action.token;
  }
  return state;
};

const authData = combineReducers({ auth, token });

export default authData;

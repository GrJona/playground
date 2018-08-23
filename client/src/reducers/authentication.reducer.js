import * as actionTypes from '../actions/actionTypes';

export const auth = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
        userEmail: action.email
      };

    case actionTypes.LOGIN_SUCCESS:
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

import * as actionTypes from '../actions/actionTypes';

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        user: action.user
      };
    default:
      return state;
  }
};

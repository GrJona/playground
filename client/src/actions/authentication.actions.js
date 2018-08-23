import axios from 'axios';
import * as actionTypes from './actionTypes';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './users.actions';
import { setAuthToken } from '../utils/setAuthToken';

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginRequest(email));
    return axios
      .post('/api/users/login', { email, password })
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decodedUserData = jwt_decode(token);
        dispatch(loginSuccess(email))
        dispatch(setCurrentUser(decodedUserData));
      })
      .catch(error => dispatch(loginFailure(error)));
  };
};

const loginRequest = email => ({
  type: actionTypes.LOGIN_REQUEST,
  email
});

export const loginSuccess = email => ({
  type: actionTypes.LOGIN_SUCCESS,
  email
});

const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILTURE,
  error
});

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch({
    type: actionTypes.LOGOUT
  })
  dispatch(setCurrentUser({}));
};

export const register = (name, email, password) => {
  return dispatch => {
    dispatch(registerRequest(email));
    return axios
      .post('/api/users/register', { name, email, password })
      .then(res => dispatch(registerSuccess(email)))
      .catch(error => dispatch(registerFailure(error)));
  };
};

const registerRequest = email => ({
  type: actionTypes.REGISTER_REQUEST,
  email
});

const registerSuccess = email => ({
  type: actionTypes.REGISTER_SUCCESS,
  email
});

const registerFailure = error => ({
  type: actionTypes.REGISTER_FAILTURE,
  error
});

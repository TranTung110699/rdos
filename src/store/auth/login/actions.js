import {
  API_ERROR,
  AUTHORIZATION_USER,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  TOKEN_STATUS_INVALID,
} from "./actionTypes";

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

export const loginSuccess = (user, auth, authUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { user, auth, authUser },
  };
};
export const authorizationUser = () => {
  return {
    type: AUTHORIZATION_USER,
    payload: {},
  };
};

export const logoutUser = (auth) => {
  return {
    type: LOGOUT_USER,
    payload: { auth },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const setTokenStatusInvalid = (tokenStatusInvalid) => {
  return {
    type: TOKEN_STATUS_INVALID,
    payload: { tokenStatusInvalid },
  };
};

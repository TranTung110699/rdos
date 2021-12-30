import {
  API_ERROR_CUSTOMER,
  AUTHORIZATION_USER_CUS,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_USER,
  CUSTOMER_LOGOUT_USER,
  CUSTOMER_LOGOUT_USER_SUCCESS,
  TOKEN_STATUS_INVALID_CUSTOMER,
} from "./actionTypes";

export const customerLoginUser = (user, history) => {
  return {
    type: CUSTOMER_LOGIN_USER,
    payload: { user, history },
  };
};

export const customerLoginSuccess = (user, auth, authCustomer) => {
  return {
    type: CUSTOMER_LOGIN_SUCCESS,
    payload: { user, auth, authCustomer },
  };
};
export const authorizationUserCus = () => {
  return {
    type: AUTHORIZATION_USER_CUS,
    payload: {},
  };
};

export const customerLogoutUser = (auth) => {
  return {
    type: CUSTOMER_LOGOUT_USER,
    payload: { auth },
  };
};

export const customerLogoutUserSuccess = () => {
  return {
    type: CUSTOMER_LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiErrorCus = (error) => {
  return {
    type: API_ERROR_CUSTOMER,
    payload: error,
  };
};

export const setTokenStatusInvalidCustomer = (tokenStatusInvalidCustomer) => {
  return {
    type: TOKEN_STATUS_INVALID_CUSTOMER,
    payload: { tokenStatusInvalidCustomer },
  };
};

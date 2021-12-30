import {
  API_ERROR_CUSTOMER,
  AUTHORIZATION_USER_CUS,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_USER,
  CUSTOMER_LOGOUT_USER,
  CUSTOMER_LOGOUT_USER_SUCCESS,
  TOKEN_STATUS_INVALID_CUSTOMER,
} from "./actionTypes";
import {loadStateCustomer} from "../../localStorage";
import axios from "axios";

const initialState = {
  error: "",
  loading: false,
  authCustomer: loadStateCustomer() || {},
  auth: false,
  tokenStatusInvalidCustomer: false,
};

const loginCustomer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_LOGIN_USER:
      return (state = { ...state, loading: true });
    case AUTHORIZATION_USER_CUS:
      return Object.assign({}, state, {
        auth: false,
        loading: true,
      });
    case CUSTOMER_LOGIN_SUCCESS:
      if (action.payload.user) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.user.data.token}`;
      }
      return Object.assign({}, state, {
        authCustomer: action.payload.user,
        loading: false,
        auth: true,
      });
    case CUSTOMER_LOGOUT_USER:
      delete axios.defaults.headers.common["Authorization"];
      return {
        ...state,
        auth: action.payload.auth,
        loading: false,
      };
    case CUSTOMER_LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authCustomer: {},
      };
    case TOKEN_STATUS_INVALID_CUSTOMER:
      return {
        ...state,
        tokenStatusInvalidCustomer: action.payload.tokenStatusInvalidCustomer,
      };
    case API_ERROR_CUSTOMER:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginCustomer;

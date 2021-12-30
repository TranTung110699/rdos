import {
  API_ERROR,
  AUTHORIZATION_USER,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  TOKEN_STATUS_INVALID,
} from "./actionTypes";
import { loadState } from "../../localStorage";
import axios from "axios";

const initialState = {
  error: "",
  loading: false,
  authUser: loadState() || {},
  auth: false,
  tokenStatusInvalid: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return (state = { ...state, loading: true });
    case AUTHORIZATION_USER:
      return Object.assign({}, state, {
        auth: false,
        loading: true,
      });
    case LOGIN_SUCCESS:
      if (action.payload.user) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.user.data.token}`;
      }
      return Object.assign({}, state, {
        authUser: action.payload.user,
        loading: false,
        auth: true,
      });
    case LOGOUT_USER:
      delete axios.defaults.headers.common["Authorization"];
      return {
        ...state,
        auth: action.payload.auth,
        loading: false,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authUser: {},
      };
    case TOKEN_STATUS_INVALID:
      return {
        ...state,
        tokenStatusInvalid: action.payload.tokenStatusInvalid,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default login;

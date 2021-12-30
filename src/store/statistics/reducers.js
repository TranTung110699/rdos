import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const topThankUser = {
  dataTopThanks: [],
};
const topThank = (state = topThankUser, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TOP_THANK:
      state = { ...state };
      break;
    case actionTypes.GET_ALL_TOP_THANK_SUCCESS:
      state = { ...state, dataTopThanks: action.payload };
      break;
    case actionTypes.GET_ALL_TOP_THANK_ERROR:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export const Statistics = combineReducers({
  topThank,
});

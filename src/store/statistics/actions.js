import * as actionTypes from "./actionTypes";

export const getAllTopThank = (payload) => ({
  type: actionTypes.GET_ALL_TOP_THANK,
  payload: payload,
});
export const getAllTopThankSuccess = (response) => {
  return {
    type: actionTypes.GET_ALL_TOP_THANK_SUCCESS,
    payload: response,
  };
};
export const getAllTopThankError = (error) => {
  return {
    type: actionTypes.GET_ALL_TOP_THANK_ERROR,
    payload: error,
  };
};

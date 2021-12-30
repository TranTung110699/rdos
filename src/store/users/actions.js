import * as actionTypes from "./actionTypes";

export const updateProfileRequest = (payload) => {
  return {
    type: actionTypes.UPDATE_PROFILE_REQUEST,
    payload: payload,
  };
};
export const updateProfileSuccess = (response) => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    payload: response,
  };
};
export const updateProfileError = (error) => {
  return {
    type: actionTypes.UPDATE_PROFILE_ERROR,
    payload: error,
  };
};

export const getInfoRequest = () => {
  return {
    type: actionTypes.GET_INFO_REQUEST,
  };
};
export const getInfoUserSuccess = (response) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: response,
  };
};
export const getInfoUserError = (error) => {
  return {
    type: actionTypes.GET_USERS_ERROR,
    payload: error,
  };
};

export const getAllFriend = () => ({
  type: actionTypes.GET_ALL_FRIEND,
});
export const getAllFriendSuccess = (response) => {
  return {
    type: actionTypes.GET_ALL_FRIEND_SUCCESS,
    payload: response,
  };
};
export const getAllFriendError = (error) => {
  return {
    type: actionTypes.GET_ALL_FRIEND_ERROR,
    payload: error,
  };
};

export const editProfile = (user) => {
  return {
    type: actionTypes.EDIT_PROFILE,
    payload: { user },
  };
};
export const profileSuccess = (msg) => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    payload: msg,
  };
};
export const profileError = (error) => {
  return {
    type: actionTypes.PROFILE_ERROR,
    payload: error,
  };
};

export const getPersonalUser = () => ({
  type: actionTypes.GET_PERSONAL_USER,
});

export const getPersonalUserId = (id) => ({
  type: actionTypes.GET_PERSONAL_USER_ID,
  userId: id,
});

export const getPersonalUserSuccess = (response) => ({
  type: actionTypes.GET_PERSONAL_USER_SUCCESS,
  payload: response,
});

export const apiError = (response) => ({
  type: actionTypes.GET_PERSONAL_USER_ERROR,
  payload: response,
});

const initialState = {
  error: "",
  success: "",
};
export const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE:
      state = { ...state };
      break;
    case actionTypes.PROFILE_SUCCESS:
      state = { ...state, success: action.payload };
      break;
    case actionTypes.PROFILE_ERROR:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const updateProfileUser = {
  dataUpdateUser: [],
};

const updateProfile = (state = updateProfileUser, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_REQUEST:
      return { ...state };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, updateUser: action.payload };
    case actionTypes.UPDATE_PROFILE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const getInfoUser = {
  dataInfoUser: [],
};

const infoUser = (state = getInfoUser, action) => {
  switch (action.type) {
    case actionTypes.GET_INFO_REQUEST:
      return { ...state };
    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, dataInfoUser: action.payload };
    case actionTypes.GET_USERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const getAllFriend = {
  dataFriends: [],
};
const Friend = (state = getAllFriend, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FRIEND:
      state = { ...state };
      break;
    case actionTypes.GET_ALL_FRIEND_SUCCESS:
      state = { ...state, dataFriends: action.payload };
      break;
    case actionTypes.GET_ALL_FRIEND_ERROR:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

const initialState = {
  personal: [],
  userId: null,
};

const Personal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PERSONAL_USER:
      state = { ...state };
      break;
    case actionTypes.GET_PERSONAL_USER_ID:
      state = { ...state, userId: action.userId };
      break;
    case actionTypes.GET_PERSONAL_USER_SUCCESS:
      state = { ...state, personal: action.payload };
      break;
    case actionTypes.GET_PERSONAL_USER_ERROR:
      state = { ...state, error: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export const User = combineReducers({
  updateProfile,
  infoUser,
  Friend,
  Personal,
});


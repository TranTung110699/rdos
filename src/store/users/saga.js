import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

import {
  put,
  call,
  takeLatest,
  select,
  takeEvery,
  all,
  fork,
} from "redux-saga/effects";
import { apiUrls } from "../../apis/api";
import Request from "../../apis/Request";

import { getFirebaseBackend } from "../../helpers/firebase_helper";
import {
  postFakeProfile,
  postJwtProfile,
} from "../../helpers/fakebackend_helper";

function* updateProfile({ payload }) {
  try {
    const response = yield call(
      Request.postApi,
      apiUrls.updateProfile,
      payload
    );
    yield put(actions.updateProfileSuccess(response));
  } catch (error) {
    yield put(actions.updateProfileError(error));
  }
}
function* watchUpdateProfile() {
  yield takeLatest(actionTypes.UPDATE_PROFILE_REQUEST, updateProfile);
}

function* getAllFriend() {
  try {
    const response = yield call(Request.getApi, apiUrls.getAllFriend, {});
    yield put(actions.getAllFriendSuccess(response.data));
  } catch (error) {
    yield put(actions.getAllFriendError(error));
  }
}
export function* watchGetAllFriend() {
  yield takeEvery(actionTypes.GET_ALL_FRIEND, getAllFriend);
}

function* getInfoUser() {
  try {
    const response = yield call(Request.getApi, apiUrls.getInfoUser, {});
    yield put(actions.getInfoUserSuccess(response));
  } catch (error) {
    yield put(actions.getInfoUserError(error));
  }
}
function* watchInfoUserData() {
  yield takeLatest(actionTypes.GET_INFO_REQUEST, getInfoUser);
}

const fireBaseBackend = getFirebaseBackend();

function* editProfile({ payload: { user } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.editProfileAPI,
        user.username,
        user.idx
      );
      yield put(actions.profileSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtProfile, "/post-jwt-profile", {
        username: user.username,
        idx: user.idx,
      });
      yield put(actions.profileSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(postFakeProfile, "/post-fake-profile", {
        username: user.username,
        idx: user.idx,
      });
      yield put(actions.profileSuccess(response));
    }
  } catch (error) {
    yield put(actions.profileError(error));
  }
}
export function* watchProfile() {
  yield takeEvery(actionTypes.EDIT_PROFILE, editProfile);
}

function* getPersonalUser() {
  try {
    const urlIdPersonal = yield select(
      (state) => state?.User?.Personal?.userId
    );
    const pageIndex = 1;
    const pageSize = 5;
    const response = yield call(
      Request.getApi,
      apiUrls.postPersonal(urlIdPersonal),
      {
        pageIndex,
        pageSize,
      }
    );
    yield put(actions.getPersonalUserSuccess(response));
  } catch (error) {
    yield put(actions.apiError(error));
  }
}

export function* watchPersonalUser() {
  yield takeEvery(actionTypes.GET_PERSONAL_USER, getPersonalUser);
}

const sagaUser = [
  watchGetAllFriend(),
  watchUpdateProfile(),
  watchInfoUserData(),
  watchProfile(),
  watchPersonalUser(),
];

export default sagaUser;

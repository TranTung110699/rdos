import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { AUTHORIZATION_USER, LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, authorizationUser, loginSuccess } from "./actions";
import { clearState, saveState } from "../../localStorage";
import { apiUrls } from "../../../apis/api";
import Request from "../../../apis/Request";

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(Request.post, apiUrls.loginUsername, {username: user.username, password: user.password});
    if (response.status === false) {
      yield put(apiError(response));
    }
    if (response.data.token) {
      // localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response, false, true));

      yield saveState(response);
      yield put(authorizationUser(true));
      history.push('/'+response.data.user.role);
      yield setTimeout(() => {
        clearState();
        history.push('/timeout')
      }, 3600000*8)
    }


  } catch (error) {
    yield put(apiError(error));
  }
}

function* authorization({ payload: { user, history } }) {
  try {
    const json = yield call(Request.post, apiUrls.loginUsername, {username: user.username, password: user.password});
    yield setTimeout(() => {
      saveState(json.data);
      history.push('/')
    }, 3000)
    yield put(loginSuccess(json.data, false, true));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* logoutUser() {
  try {
    clearState();
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchAuthorizationRedirect() {
  yield takeEvery(AUTHORIZATION_USER, authorization);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

const sagaAuth = [
  watchUserLogin(),
  watchAuthorizationRedirect(),
  watchUserLogout(),
];

export default sagaAuth;

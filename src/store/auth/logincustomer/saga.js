import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  AUTHORIZATION_USER_CUS,
  CUSTOMER_LOGIN_USER,
  CUSTOMER_LOGOUT_USER,
} from "./actionTypes";
import {apiErrorCus, authorizationUserCus, customerLoginSuccess} from "./actions";
import {clearStateCustomer, saveStateCustomer} from "../../localStorage";
import { apiUrls } from "../../../apis/api";
import Request from "../../../apis/Request";
import {authorizationUser, loginSuccess} from "../login/actions";

function* customerLoginUser({ payload: { user, history } }) {
  try {
    const response = yield call(Request.postCus, apiUrls.loginCustomer, {username: user.username, password: user.password});
    if (response.status === false) {
      yield put(apiErrorCus(response));
    }
    if (response.data.token) {
      //localStorage.setItem("authCustomer", JSON.stringify(response));
      yield put(customerLoginSuccess(response, false, true));

      yield saveStateCustomer(response);
      yield put(authorizationUserCus(true));
      console.log("authCustomer: "+response.data.user.role);
      history.push('/customer-home');
    }
    // yield saveState(user);
    // yield put(authorizationUser(user, history));
  } catch (error) {
    yield put(apiErrorCus(error));
  }
}

function* authorizationCus({ payload: { user, history } }) {
  try {
    const json = yield call(Request.postCus, apiUrls.loginCustomer, {username: user.username, password: user.password});
    yield setTimeout(() => {
      saveStateCustomer(json.data);
      history.push('/')
    }, 3000)
    yield put(customerLoginSuccess(json.data, false, true));
  } catch (e) {
    yield put(apiErrorCus(e));
  }
}

function* customerLogoutUser() {
  try {
    clearStateCustomer();
  } catch (error) {
    yield put(apiErrorCus(error));
  }
}

export function* watchCustomerLogin() {
  yield takeEvery(CUSTOMER_LOGIN_USER, customerLoginUser);
}

export function* watchAuthorizationRedirectCus() {
  yield takeEvery(AUTHORIZATION_USER_CUS, authorizationCus);
}

export function* watchCustomerLogout() {
  yield takeEvery(CUSTOMER_LOGOUT_USER, customerLogoutUser);
}

const sagaAuthCustomer = [
  watchCustomerLogin(),
  watchAuthorizationRedirectCus(),
  watchCustomerLogout(),
];

export default sagaAuthCustomer;

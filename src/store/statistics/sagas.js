import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { apiUrls } from "../../apis/api";
import Request from "../../apis/Request";

function* getAllTopThanks({ payload }) {
  try {
    const response = yield call(Request.postApi, apiUrls.listTopThank, payload);
    yield put(actions.getAllTopThankSuccess(response));
  } catch (error) {
    yield put(actions.getAllTopThankError(error));
  }
}

export function* watchGetAllTopThank() {
  yield takeEvery(actionTypes.GET_ALL_TOP_THANK, getAllTopThanks);
}

const sagaStatistics = [watchGetAllTopThank()];

export default sagaStatistics;

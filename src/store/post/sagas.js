import {
  takeEvery,
  fork,
  put,
  all,
  call,
  takeLatest,
} from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { apiUrls } from "../../apis/api";
import Request from "../../apis/Request";
import {POST_MARK_AS_READ_REQUEST} from "./actionTypes";
import {getConfirmedOrderError} from "./actions";

function* postNumberCustomer({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postOpenTable,
        payload
    );
    if (response){
      yield put(actions.postNumberCustomerSuccess(response));
    }
    return response;
  } catch (error) {
    yield put(actions.postNumberCustomerError(error));
  }
}

export function* watchPostNumberCustomer() {
  yield takeEvery(actionTypes.POST_NUMBER_CUSTOMER, postNumberCustomer);
}

function* postCloseTable({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postCloseTableApi,
        payload
    );
    if (response){
      yield  put(actions.postCloseTableSuccess(response));
    }
  } catch (error) {
    yield put(actions.postCloseTableError(error));
  }
}

export function* watchPostCloseTable() {
  yield takeLatest(actionTypes.POST_CLOSE_TABLE_REQUEST, postCloseTable);
}

function* postMarkAsRead({ payload }) {
  try {
    const response = yield call(
        Request.getApi,
        apiUrls.postMarkAsReadApi,
        payload
    );
    if (response){
      yield  put(actions.postMarkAsReadSuccess(response));
    }
  } catch (error) {
    yield put(actions.postMarkAsReadError(error));
  }
}

export function* watchPostMarkAsRead() {
  yield takeLatest(actionTypes.POST_MARK_AS_READ_REQUEST, postMarkAsRead);
}

function* getQueueOrder({ payload }) {
  try {
    const response = yield call(
        Request.getApi,
        apiUrls.getQueueOrderApi,
        payload
    );
    if (response){
      yield  put(actions.getQueueOrderSuccess(response.data));
      console.log(response.data);
    }
  } catch (error) {
    yield put(actions.getQueueOrderError(error));
  }
}

export function* watchGetQueueOrder() {
  yield takeLatest(actionTypes.GET_QUEUE_ORDER_REQUEST, getQueueOrder);
}


function* postCancelQueueOrder({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postCancelQueueOrderApi,
        payload
    );
    if (response){
      yield  put(actions.postCancelQueueOrderSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postCancelQueueOrderError(error));
  }
}

export function* watchPostCancelQueueOrder() {
  yield takeLatest(actionTypes.POST_CANCEL_QUEUE_ORDER_REQUEST, postCancelQueueOrder);
}


function* postConfirmQueueOrder({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postConfirmQueueOrderApi,
        payload
    );
    if (response){
      yield  put(actions.postConfirmQueueOrderSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postConfirmQueueOrderError(error));
  }
}

export function* watchPostConfirmQueueOrder() {
  yield takeLatest(actionTypes.POST_CONFIRM_QUEUE_ORDER_REQUEST, postConfirmQueueOrder);
}


function* getConfirmedOrder({ payload }) {
  try {
    const response = yield call(
        Request.getApi,
        apiUrls.getConfirmedOrderApi,
        payload
    );
    if (response){
      yield  put(actions.getConfirmedOrderSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.getConfirmedOrderError(error));
  }
}

export function* watchGetConfirmedQueueOrder() {
  yield takeLatest(actionTypes.GET_CONFIRMED_ORDER_REQUEST, getConfirmedOrder);
}

function* postDeleteItem({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postDeleteItemApi,
        payload
    );
    if (response){
      yield  put(actions.postDeleteItemSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postDeleteItemError(error));
  }
}

export function* watchPostDeleteItem() {
  yield takeLatest(actionTypes.POST_DELETE_ITEM_REQUEST, postDeleteItem);
}


function* postDeleteQueueItem({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postDeleteQueueItemApi,
        payload
    );
    if (response){
      yield  put(actions.postDeleteQueueItemSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postDeleteQueueItemError(error));
  }
}

export function* watchPostDeleteQueueItem() {
  yield takeLatest(actionTypes.POST_DELETE_QUEUE_ITEM_REQUEST, postDeleteQueueItem);
}

function* postChangeTable({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postChangeTableApi,
        payload
    );
    if (response){
      yield  put(actions.postChangeTableSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postChangeTableError(error));
  }
}

export function* watchPostChangeTable() {
  yield takeLatest(actionTypes.POST_CHANGE_TABLE_REQUEST, postChangeTable);
}

function* postUpdateDrink({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postUpdateDrinkApi,
        payload
    );
    if (response){
      yield  put(actions.postUpdateDrinkSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postUpdateDrinkError(error));
  }
}

export function* watchPostUpdateDrink() {
  yield takeLatest(actionTypes.POST_UPDATE_DRINK_REQUEST, postUpdateDrink);
}

function* postDeleteDrink({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postDeleteItemCheckList,
        payload
    );
    if (response){
      yield  put(actions.postDeleteDrinkSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postDeleteDrinkError(error));
  }
}

export function* watchPostDeleteDrink() {
  yield takeLatest(actionTypes.POST_DELETE_DRINK_REQUEST, postDeleteDrink);
}

function* postCustomizeNumber({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postCustomizeOrder,
        payload
    );
    if (response){
      yield  put(actions.postCustomizeNumberSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postCustomizeNumberError(error));
  }
}

export function* watchPostCustomizeNumber() {
  yield takeLatest(actionTypes.POST_CUSTOMIZE_NUMBER_REQUEST, postCustomizeNumber);
}


function* postCustomizeQueue({ payload }) {
  try {
    const response = yield call(
        Request.postApi,
        apiUrls.postCustomizeQueue,
        payload
    );
    if (response){
      yield  put(actions.postCustomizeQueueSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.postCustomizeQueueError(error));
  }
}

export function* watchPostCustomizeQueue() {
  yield takeLatest(actionTypes.POST_CUSTOMIZE_QUEUE_REQUEST, postCustomizeQueue);
}

const sagaPost = [
  watchPostNumberCustomer(),
  watchPostCloseTable(),
  watchPostMarkAsRead(),
  watchGetQueueOrder(),
  watchPostCancelQueueOrder(),
  watchPostConfirmQueueOrder(),
  watchGetConfirmedQueueOrder(),
  watchPostDeleteItem(),
  watchPostChangeTable(),
  watchPostDeleteQueueItem(),
  watchPostUpdateDrink(),
  watchPostDeleteDrink(),
  watchPostCustomizeNumber(),
  watchPostCustomizeQueue()
];

export default sagaPost;

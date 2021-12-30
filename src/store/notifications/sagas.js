import { put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { apiUrls } from "../../apis/api";
import Request from "../../apis/Request";
import {postUpdateTableSuccess} from "./actions";
import {clearState} from "../localStorage";

function* totalOfNotification() {
  try {
    const response = yield call(
        Request.getApi,
        apiUrls.totalOfNotifications,
        {}
    );
    yield put(actions.totalOfNotificationsSuccess(response.data));
  } catch (error) {
    yield put(actions.totalOfNotificationsError(error));
  }
}
export function* watchTotalOfNotifications() {
  yield takeEvery(
      actionTypes.TOTAL_OF_NOTIFICATIONS_REQUEST,
      totalOfNotification
  );
}

//all notifications
function* allNotification({ payload }) {
  try {
    const response = yield call(
        Request.getApi,
        apiUrls.getAllNotifications,
        payload
    );
    if(response){
      yield put(actions.getAllNotificationSuccess(response));
      console.log(response)
    }
  } catch (error) {
    yield put(actions.getAllNotificationError(false));
  }
}
export function* watchGetNotifications() {
  yield takeEvery(actionTypes.GET_ALL_NOTIFICATION, allNotification);
}

//all table
function* allTable({payload: p}) {
  try {
    const response = yield call(Request.getApi,apiUrls.getAllTables, {page: p, pageSize: 100});
    if(response){
      yield put(actions.getAllTableSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.getAllTableError(error));
  }
}

export function* watchGetAllTable() {
  yield takeEvery(actionTypes.GET_ALL_TABLE_REQUEST, allTable);
}

//get table by id
function* TableByID({ payload }) {
  try {
    const response = yield call(Request.getApi,apiUrls.getTableByID,payload);
    if(response){
      yield put(actions.getTableSuccess(response.data));
    }
    return response;
  } catch (error) {
    yield put(actions.getTableError(error));
  }
}


export function* watchGetTableByID() {
  yield takeEvery(actionTypes.GET_TABLE_REQUEST, TableByID);
}


//get Log Out
function* LogOut({ payload }) {
  try {
    const response = yield call(Request.getApi,apiUrls.getLogOutApi,payload);
    if(response){
      yield put(actions.getLogOutSuccess(response.message));
      clearState();
    }
  } catch (error) {
    yield put(actions.getLogOutError(error));
  }
}


export function* watchGetLogOut() {
  yield takeEvery(actionTypes.GET_LOG_OUT_REQUEST, LogOut);
}

//update table by id
function* UpdateTableByID({ payload }) {
  try {
    const response = yield call(Request.postApi,apiUrls.postUpdateTable,payload);
    if(response){
      yield put(actions.postUpdateTableSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.getTableError(error));
  }
}

export function* watchPostUpdateTableByID() {
  yield takeEvery(actionTypes.POST_UPDATE_TABLE_REQUEST, UpdateTableByID);
}
// get check list
function* getCheckListPrepare({payload: p}) {
  try {
    const response = yield call(Request.getApi,apiUrls.getCheckListApi,  {table_id: p ,status:"prepare"});
    if(response){
      yield put(actions.getCheckListPrepareSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.getCheckListPrepareError(error));
  }
}


export function* watchGetCheckListPrepare() {
  yield takeEvery(actionTypes.GET_CHECK_LIST_PREPARE_REQUEST, getCheckListPrepare);
}
// get check list food
function* getCheckListFoodPrepare({payload: p}) {
  try {
    const response = yield call(Request.getApi,apiUrls.getFoodList,  {table_id: p,status:"prepare"});
    if(response){
      yield put(actions.getCheckListFoodPrepareSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.getCheckListFoodPrepareError(error));
  }
}


export function* watchGetCheckListFoodPrepare() {
  yield takeEvery(actionTypes.GET_CHECK_LIST_FOOD_PREPARE_REQUEST, getCheckListFoodPrepare);
}

// get check list
function* getCheckListComplete({payload: p}) {
  try {
    const response = yield call(Request.getApi,apiUrls.getCheckListApi,  {table_id: p,status:"completed"});
    if(response){
      yield put(actions.getCheckListCompleteSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.getCheckListCompleteError(error));
  }
}

export function* watchGetCheckListComplete() {
  yield takeEvery(actionTypes.GET_CHECK_LIST_COMPLETE_REQUEST, getCheckListComplete);
}

// get check list food comp
function* getCheckListFoodComplete({payload: p}) {
  try {
    const response = yield call(Request.getApi,apiUrls.getFoodList,  {table_id: p,status:"completed"});
    if(response){
      yield put(actions.getCheckListFoodCompleteSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.getCheckListFoodCompleteError(error));
  }
}

export function* watchGetCheckListFoodComplete() {
  yield takeEvery(actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_REQUEST, getCheckListFoodComplete);
}
// get close table
function* getCloseTable({ payload }) {
  try {
    const response = yield call(Request.getApi,apiUrls.getCloseTableApi,payload);
    if(response){
      yield put(actions.getCloseTableSuccess(response.data));

    }
  } catch (error) {
    yield put(actions.getCloseTableError(error));
  }
}


export function* watchGetCloseTable() {
  yield takeEvery(actionTypes.GET_CLOSE_TABLE_REQUEST, getCloseTable);
}
// post delete item
function* postDeleteItem({ payload }) {
  try {
    const response = yield call(Request.postApi,apiUrls.postDeleteItem,payload);
    if(response){
      yield put(actions.postDeleteItemSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(actions.postDeleteItemError(error));
  }
}


export function* watchPostDeleteItem() {
  yield takeEvery(actionTypes.POST_DELETE_ITEM_REQUEST, postDeleteItem);
}


//get Search Item
function* SearchItem({ payload:{q,table_id} }) {
  try {
    const response = yield call(Request.getApi,apiUrls.getSearchItem,{q:q , table_id: table_id});
    if(response){
      yield put(actions.getSearchItemSuccess(response.data));
    }
    console.log(response);
  } catch (error) {
    yield put(actions.getSearchItemError(error));
  }
}


export function* watchGetSearchItem() {
  yield takeEvery(actionTypes.GET_SEARCH_ITEM_REQUEST, SearchItem);
}

//get Detail Item
function* DetailItem({ payload }) {
  try {
    const response = yield call(Request.getApi,apiUrls.getDataDetailItem,payload);
    if(response){
      yield put(actions.getDetailItemSuccess(response));
    }
    console.log(response);
  } catch (error) {
    yield put(actions.getDetailItemError(error));
  }
}


export function* watchGetDetailItem() {
  yield takeEvery(actionTypes.GET_DETAIL_ITEM_REQUEST, DetailItem);
}

//post Insert Item
function* InsertItem({ payload }) {
  try {
    const response = yield call(Request.postApi,apiUrls.postInsertItem,payload);
    if(response){
      yield put(actions.postInsertItemSuccess(response));
    }
  } catch (error) {
    yield put(actions.postInsertItemError(error));
  }
}


export function* watchInsertItem() {
  yield takeEvery(actionTypes.POST_INSERT_ITEM_REQUEST, InsertItem);
}

const sagaNotificatons = [
  watchTotalOfNotifications(),
  watchGetNotifications(),
  watchPostUpdateTableByID(),
  watchGetAllTable(),
  watchGetTableByID(),
  watchGetLogOut(),
  watchGetCheckListComplete(),
  watchGetCheckListPrepare(),
  watchGetCheckListFoodPrepare(),
  watchGetCheckListFoodComplete(),
  watchPostDeleteItem(),
  watchGetCloseTable(),
  watchGetSearchItem(),
  watchGetDetailItem(),
  watchInsertItem()
];

export default sagaNotificatons;

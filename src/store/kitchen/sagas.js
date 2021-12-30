import { put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { apiUrls } from "../../apis/api";
import Request from "../../apis/Request";

//all notifications receptionist
function* allNotificationKitchen({payload: p}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.getNotificationsKitchen,
            {page: p, pageSize: 10, receiver: 'kitchen manager'}
        );
        yield put(actions.getAllNotificationKitchenSuccess(response));
        console.log("noti Kitchen: "+ response.data)
    } catch (error) {
        yield put(actions.getAllNotificationKitchenError(error));
    }
}
export function* watchGetNotificationsKitchen() {
    yield takeEvery(actionTypes.GET_ALL_NOTIFICATION_KITCHEN, allNotificationKitchen);
}

//mask as read Kitchen
function* maskAsReadKit({payload}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.maskAsReadKitchenApi,
            {receiver: "kitchen manager"}
        );
        yield put(actions.maskAsReadKitchenSuccess(response.data));
        console.log("mask as read kitchen: "+ response.data)
    } catch (error) {
        yield put(actions.maskAsReadKitchenError(error));
    }
}
export function* watchMaskAsReadKit() {
    yield takeEvery(actionTypes.MASK_AS_READ_KITCHEN_REQUEST, maskAsReadKit);
}

//all dish in confirm
function* allDishInConfirmKit({payload: p}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.viewAllDishOfConfirmOrderApi,
            {page: p, pageSize: 10, status: "prepare"}
        );
        yield put(actions.getAllDishInConfirmSuccess(response));
        console.log("all dish in confirm: "+ response.data)
    } catch (error) {
        yield put(actions.getAllDishInConfirmError(error));
    }
}
export function* watchAllDishInConfirmKit() {
    yield takeEvery(actionTypes.GET_ALL_DISH_IN_CONFIRM_REQUEST, allDishInConfirmKit);
}

//all dish in confirm
function* allDishInCompletedKit({payload: p}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.viewAllDishOfConfirmOrderApi,
            {page: p, pageSize: 10, status: "completed"}
        );
        yield put(actions.getAllDishInCompletedSuccess(response));
        console.log("all dish in Completed: "+ response.data)
    } catch (error) {
        yield put(actions.getAllDishInCompletedError(error));
    }
}
export function* watchAllDishInCompletedKit() {
    yield takeEvery(actionTypes.GET_ALL_DISH_IN_COMPLETED_REQUEST, allDishInCompletedKit);
}

//update status of dish
function* updateStatusOfDishKit({payload: ge}) {
    try {
        const response = yield call(
            Request.postApi,
            apiUrls.updateStatusOfDishApi,
            {_id: ge}
        );
        yield put(actions.updateStatusOfDishSuccess(response.data));
        console.log("update status of dish : "+ response.data);
        window.open(response.data)
    } catch (error) {
        yield put(actions.updateStatusOfDishError(error));
    }
}
export function* watchUpdateStatusOfDishKit() {
    yield takeEvery(actionTypes.UPDATE_STATUS_OF_DISH_REQUEST, updateStatusOfDishKit);
}

//all list item
function* allListItemKit({payload: {q, page, pageSize}}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.viewListItemApi,
            {q: q, page: page, pageSize: pageSize}
        );
        yield put(actions.getAllListItemSuccess(response));
        console.log("all list item: "+ response.data)
    } catch (error) {
        yield put(actions.getAllListItemError(error));
    }
}
export function* watchAllListItemKit() {
    yield takeEvery(actionTypes.GET_ALL_LIST_ITEM_REQUEST, allListItemKit);
}

//update item can be serve
function* updateItemCanBeServeKit({payload: {it, isSoldOut}}) {
    try {
        const response = yield call(
            Request.getApi,
            apiUrls.updateItemCanBeServeApi,
            {item_id: it, is_sold_out: isSoldOut}
        );
        yield put(actions.updateItemCanServeSuccess(response.data));
        console.log("update item Can Serve: "+ response.data)
    } catch (error) {
        yield put(actions.updateItemCanServeError(error));
    }
}
export function* watchUpdateItemCanBeServeKit() {
    yield takeEvery(actionTypes.UPDATE_ITEM_CAN_SERVE_REQUEST, updateItemCanBeServeKit);
}

//delete item confirm
function* deleteItemConfirmKit({payload: {id, oId, caId, itId}}) {
    try {
        const response = yield call(
            Request.postApi,
            apiUrls.deleteItemInConfirmListApi,
            {_id: id, order_id: oId, category_id: caId, item_id: itId}
        );
        yield put(actions.deleteItemConfirmSuccess(response.data));
        console.log("delete item Confirm: "+ response.data)
    } catch (error) {
        yield put(actions.deleteItemConfirmError(error));
    }
}
export function* watchDeleteItemConfirmKit() {
    yield takeEvery(actionTypes.DELETE_ITEM_CONFIRM_REQUEST, deleteItemConfirmKit);
}

const sagaKitchen = [
    watchGetNotificationsKitchen(),
    watchMaskAsReadKit(),
    watchAllDishInConfirmKit(),
    watchAllDishInCompletedKit(),
    watchUpdateStatusOfDishKit(),
    watchAllListItemKit(),
    watchUpdateItemCanBeServeKit(),
    watchDeleteItemConfirmKit(),
];

export default sagaKitchen;
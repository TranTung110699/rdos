import * as actionTypes from "./actionTypes";

//all notifications kitchen
export const getAllNotificationKitchen = (payload) => ({
    type: actionTypes.GET_ALL_NOTIFICATION_KITCHEN,
    payload: payload,
});
export const getAllNotificationKitchenSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_NOTIFICATION_SUCCESS_KITCHEN,
        payload: response,
    };
};
export const getAllNotificationKitchenError = (error) => {
    return {
        type: actionTypes.GET_ALL_NOTIFICATION_ERROR_KITCHEN,
        payload: error,
    };
};

//mask as read
export const maskAsReadKitchenRequest = (payload) => ({
    type: actionTypes.MASK_AS_READ_KITCHEN_REQUEST,
    payload: payload,
});
export const maskAsReadKitchenSuccess = (response) => {
    return {
        type: actionTypes.MASK_AS_READ_KITCHEN_SUCCESS,
        payload: response,
    };
};
export const maskAsReadKitchenError = (error) => {
    return {
        type: actionTypes.MASK_AS_READ_KITCHEN_ERROR,
        payload: error,
    };
};

//all dish in confirm order
export const getAllDishInConfirmRequest = (payload) => ({
    type: actionTypes.GET_ALL_DISH_IN_CONFIRM_REQUEST,
    payload: payload,
});
export const getAllDishInConfirmSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_DISH_IN_CONFIRM_SUCCESS,
        payload: response,
    };
};
export const getAllDishInConfirmError = (error) => {
    return {
        type: actionTypes.GET_ALL_DISH_IN_CONFIRM_ERROR,
        payload: error,
    };
};

//all dish in completed order
export const getAllDishInCompletedRequest = (payload) => ({
    type: actionTypes.GET_ALL_DISH_IN_COMPLETED_REQUEST,
    payload: payload,
});
export const getAllDishInCompletedSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_DISH_IN_COMPLETED_SUCCESS,
        payload: response,
    };
};
export const getAllDishInCompletedError = (error) => {
    return {
        type: actionTypes.GET_ALL_DISH_IN_COMPLETED_ERROR,
        payload: error,
    };
};

//update status of dish
export const updateStatusOfDishRequest = (payload) => ({
    type: actionTypes.UPDATE_STATUS_OF_DISH_REQUEST,
    payload: payload,
});
export const updateStatusOfDishSuccess = (response) => {
    return {
        type: actionTypes.UPDATE_STATUS_OF_DISH_SUCCESS,
        payload: response,
    };
};
export const updateStatusOfDishError = (error) => {
    return {
        type: actionTypes.UPDATE_STATUS_OF_DISH_ERROR,
        payload: error,
    };
};

//view list item
export const getAllListItemRequest = (q, page, pageSize) => ({
    type: actionTypes.GET_ALL_LIST_ITEM_REQUEST,
    payload: {q, page, pageSize},
});
export const getAllListItemSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_LIST_ITEM_SUCCESS,
        payload: response,
    };
};
export const getAllListItemError = (error) => {
    return {
        type: actionTypes.GET_ALL_LIST_ITEM_ERROR,
        payload: error,
    };
};

// update item can serve
export const updateItemCanServeRequest = (it, isSoldOut) => ({
    type: actionTypes.UPDATE_ITEM_CAN_SERVE_REQUEST,
    payload: {it, isSoldOut},
});
export const updateItemCanServeSuccess = (response) => {
    return {
        type: actionTypes.UPDATE_ITEM_CAN_SERVE_SUCCESS,
        payload: response,
    };
};
export const updateItemCanServeError = (error) => {
    return {
        type: actionTypes.UPDATE_ITEM_CAN_SERVE_ERROR,
        payload: error,
    };
};

// delete item in confirm list
export const deleteItemConfirmRequest = (id, oId, caId, itId) => ({
    type: actionTypes.DELETE_ITEM_CONFIRM_REQUEST,
    payload: {id, oId, caId, itId},
});
export const deleteItemConfirmSuccess = (response) => {
    return {
        type: actionTypes.DELETE_ITEM_CONFIRM_SUCCESS,
        payload: response,
    };
};
export const deleteItemConfirmError = (error) => {
    return {
        type: actionTypes.DELETE_ITEM_CONFIRM_ERROR,
        payload: error,
    };
};
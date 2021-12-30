import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

//all notifications kitchen
const allNotificationsKitchenReducer = {
    allNotificationsKitchen: [],
};
const getAllNotificationsKitchen = (state = allNotificationsKitchenReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_NOTIFICATION_KITCHEN:
            return { ...state };
        case actionTypes.GET_ALL_NOTIFICATION_SUCCESS_KITCHEN:
            return { ...state, allNotificationsKitchen: action.payload };
        case actionTypes.GET_ALL_NOTIFICATION_ERROR_KITCHEN:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//maskAsReadRe
const maskAsReadKitReducer = {
    maskAsReadKit: [],
};
const maskAsReadKitchen = (state = maskAsReadKitReducer, action) => {
    switch (action.type) {
        case actionTypes.MASK_AS_READ_KITCHEN_REQUEST:
            return { ...state };
        case actionTypes.MASK_AS_READ_KITCHEN_SUCCESS:
            return { ...state, maskAsReadKit: action.payload };
        case actionTypes.MASK_AS_READ_KITCHEN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all Dish in confirm
const allDishInConfirmReducer = {
    allDishInConfirm: [],
};
const allDishInConfirmKitchen = (state = allDishInConfirmReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_DISH_IN_CONFIRM_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_DISH_IN_CONFIRM_SUCCESS:
            return { ...state, allDishInConfirm: action.payload };
        case actionTypes.GET_ALL_DISH_IN_CONFIRM_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all Dish in complete
const allDishInCompleteReducer = {
    allDishInComplete: [],
};
const allDishInCompleteKitchen = (state = allDishInCompleteReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_DISH_IN_COMPLETED_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_DISH_IN_COMPLETED_SUCCESS:
            return { ...state, allDishInComplete: action.payload };
        case actionTypes.GET_ALL_DISH_IN_COMPLETED_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//update status of dish
const updateStatusOfDishReducer = {
    allUpdateStatusOfDish: [],
};
const updateStatusOfDishKitchen = (state = updateStatusOfDishReducer, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATUS_OF_DISH_REQUEST:
            return { ...state };
        case actionTypes.UPDATE_STATUS_OF_DISH_SUCCESS:
            return { ...state, allUpdateStatusOfDish: action.payload };
        case actionTypes.UPDATE_STATUS_OF_DISH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all list item
const viewAllItemReducer = {
    allViewAllItem: [],
};
const viewAllItemKitchen = (state = viewAllItemReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_LIST_ITEM_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_LIST_ITEM_SUCCESS:
            return { ...state, allViewAllItem: action.payload };
        case actionTypes.GET_ALL_LIST_ITEM_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//update item can be serve
const updateItemCanBeServeReducer = {
    allUpdateItemCanBeServe: [],
};
const updateItemCanBeServeKitchen = (state = updateItemCanBeServeReducer, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ITEM_CAN_SERVE_REQUEST:
            return { ...state };
        case actionTypes.UPDATE_ITEM_CAN_SERVE_SUCCESS:
            return { ...state, allUpdateItemCanBeServe: action.payload };
        case actionTypes.UPDATE_ITEM_CAN_SERVE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//delete item confirm
const deleteItemConfirmReducer = {
    allDeleteItemConfirm: [],
};
const deleteItemConfirmKitchen = (state = deleteItemConfirmReducer, action) => {
    switch (action.type) {
        case actionTypes.DELETE_ITEM_CONFIRM_REQUEST:
            return { ...state };
        case actionTypes.DELETE_ITEM_CONFIRM_SUCCESS:
            return { ...state, allDeleteItemConfirm: action.payload };
        case actionTypes.DELETE_ITEM_CONFIRM_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const Kitchen = combineReducers({
    getAllNotificationsKitchen,
    maskAsReadKitchen,
    allDishInConfirmKitchen,
    allDishInCompleteKitchen,
    updateStatusOfDishKitchen,
    viewAllItemKitchen,
    updateItemCanBeServeKitchen,
    deleteItemConfirmKitchen,
});
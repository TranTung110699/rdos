import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

//all Category
const allCategoryReducer = {
    allCategories: [],
};

const getAllCategory = (state = allCategoryReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CATEGORY_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_CATEGORY_SUCCESS:
            state =  { ...state, allCategories: action.payload };
        case actionTypes.GET_ALL_CATEGORY_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all Menu
const allMenuReducer = {
    allMenu: [],
};

const getAllMenu = (state = allMenuReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_MENU_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_MENU_SUCCESS:
            state =  { ...state, allMenu: action.payload };
        case actionTypes.GET_ALL_MENU_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//add to cart
const addToCartMenuReducer = {
    dataAddToCartMenu: [],
};

const addToCartMenu = (state = addToCartMenuReducer, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART_MENU_REQUEST:
            return { ...state };
        case actionTypes.ADD_TO_CART_MENU_SUCCESS:
            return { ...state, dataAddToCartMenu: action.payload };
        case actionTypes.ADD_TO_CART_MENU_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all Search
const allSearchReducer = {
    allSearch: [],
};

const getAllSearch = (state = allSearchReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SEARCH_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_SEARCH_SUCCESS:
            state =  { ...state, allSearch: action.payload };
        case actionTypes.GET_ALL_SEARCH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//call waiter
const dataPostCallWaiterReducer = {
    dataPostCallWaiter: [],
};

const postCallWaiter = (state = dataPostCallWaiterReducer, action) => {
    switch (action.type) {
        case actionTypes.POST_CALL_WAITER_REQUEST:
            return { ...state };
        case actionTypes.POST_CALL_WAITER_SUCCESS:
            return { ...state, dataPostCallWaiter: action.payload };
        case actionTypes.POST_CALL_WAITER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//call payment
const dataPostCallPaymentReducer = {
    dataPostCallPayment: [],
};

const postCallPayment = (state = dataPostCallPaymentReducer, action) => {
    switch (action.type) {
        case actionTypes.POST_CALL_PAYMENT_REQUEST:
            return { ...state };
        case actionTypes.POST_CALL_PAYMENT_SUCCESS:
            return { ...state, dataPostCallPayment: action.payload };
        case actionTypes.POST_CALL_PAYMENT_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//send Feedback
const sendFeedbackReducer = {
    dataSendFeedback: [],
};

const sendFeedback = (state = sendFeedbackReducer, action) => {
    switch (action.type) {
        case actionTypes.SEND_FEEDBACK_REQUEST:
            return { ...state };
        case actionTypes.SEND_FEEDBACK_SUCCESS:
            return { ...state, dataSendFeedback: action.payload };
        case actionTypes.SEND_FEEDBACK_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//get food in combo
const getFoodInComboReducer = {
    dataFoodInCombo: [],
};

const getFoodInCombo = (state = getFoodInComboReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_FOOD_IN_COMBO_REQUEST:
            return { ...state };
        case actionTypes.GET_FOOD_IN_COMBO_SUCCESS:
            return { ...state, dataFoodInCombo: action.payload };
        case actionTypes.GET_FOOD_IN_COMBO_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//add to cart
const addToCartReducer = {
    dataAddToCart: [],
};

const addToCart = (state = addToCartReducer, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART_REQUEST:
            return { ...state };
        case actionTypes.ADD_TO_CART_SUCCESS:
            return { ...state, dataAddToCart: action.payload };
        case actionTypes.ADD_TO_CART_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//get cart
const getCartReducer = {
    dataCart: [],
};

const getCart = (state = getCartReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_CART_REQUEST:
            return { ...state };
        case actionTypes.GET_CART_SUCCESS:
            return { ...state, dataCart: action.payload };
        case actionTypes.GET_CART_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//delete from cart
const deleteFromCartReducer = {
    dataDeleteFromCart: [],
};

const deleteFromCart = (state = deleteFromCartReducer, action) => {
    switch (action.type) {
        case actionTypes.DELETE_FROM_CART_REQUEST:
            return { ...state };
        case actionTypes.DELETE_FROM_CART_SUCCESS:
            return { ...state, dataDeleteFromCart: action.payload };
        case actionTypes.DELETE_FROM_CART_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//delete all from cart
const deleteAllFromCartReducer = {
    dataDeleteAllFromCart: [],
};

const deleteAllFromCart = (state = deleteAllFromCartReducer, action) => {
    switch (action.type) {
        case actionTypes.DELETE_ALL_FROM_CART_REQUEST:
            return { ...state };
        case actionTypes.DELETE_ALL_FROM_CART_SUCCESS:
            return { ...state, dataDeleteAllFromCart: action.payload };
        case actionTypes.DELETE_ALL_FROM_CART_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//send order
const sendOrderReducer = {
    dataSendOrder: [],
};

const sendOrder = (state = sendOrderReducer, action) => {
    switch (action.type) {
        case actionTypes.SEND_ORDER_REQUEST:
            return { ...state };
        case actionTypes.SEND_ORDER_SUCCESS:
            return { ...state, dataSendOrder: action.payload };
        case actionTypes.SEND_ORDER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//view order
const viewOrderReducer = {
    allViewOrder: [],
};

const getViewOrder = (state = viewOrderReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_VIEW_ORDER_REQUEST:
            return { ...state };
        case actionTypes.GET_VIEW_ORDER_SUCCESS:
            state =  { ...state, allViewOrder: action.payload };
        case actionTypes.GET_VIEW_ORDER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//check queue order
const checkQueueOrderReducer = {
    allQueueOrder: [],
};

const getCheckQueueOrder = (state = checkQueueOrderReducer, action) => {
    switch (action.type) {
        case actionTypes.CHECK_QUEUE_ORDER_REQUEST:
            return { ...state };
        case actionTypes.CHECK_QUEUE_ORDER_SUCCESS:
            state =  { ...state, allQueueOrder: action.payload };
        case actionTypes.CHECK_QUEUE_ORDER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//view complete drink
const viewCompleteDrinkReducer = {
    allViewCompleteDrink: [],
};

const getViewCompleteDrink = (state = viewCompleteDrinkReducer, action) => {
    switch (action.type) {
        case actionTypes.VIEW_COMPLETE_DRINK_REQUEST:
            return { ...state };
        case actionTypes.VIEW_COMPLETE_DRINK_SUCCESS:
            state =  { ...state, allViewCompleteDrink: action.payload };
        case actionTypes.VIEW_COMPLETE_DRINK_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//view complete food
const viewCompleteFoodReducer = {
    allViewCompleteFood: [],
};

const getViewCompleteFood = (state = viewCompleteFoodReducer, action) => {
    switch (action.type) {
        case actionTypes.VIEW_COMPLETE_FOOD_REQUEST:
            return { ...state };
        case actionTypes.VIEW_COMPLETE_FOOD_SUCCESS:
            state =  { ...state, allViewCompleteFood: action.payload };
        case actionTypes.VIEW_COMPLETE_FOOD_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const Customer = combineReducers({
    getAllCategory,
    getAllMenu,
    addToCartMenu,
    getAllSearch,
    postCallWaiter,
    postCallPayment,
    sendFeedback,
    getFoodInCombo,
    addToCart,
    getCart,
    deleteFromCart,
    deleteAllFromCart,
    sendOrder,
    getViewOrder,
    getCheckQueueOrder,
    getViewCompleteDrink,
    getViewCompleteFood
});

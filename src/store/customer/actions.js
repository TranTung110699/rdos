import * as actionTypes from "./actionTypes";

//all category
export const getAllCategoryRequest = (payload) => ({
    type: actionTypes.GET_ALL_CATEGORY_REQUEST,
    payload: payload,
});
export const getAllCategorySuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_CATEGORY_SUCCESS,
        payload: response,
    };
};
export const getAllCategoryError = (error) => {
    return {
        type: actionTypes.GET_ALL_CATEGORY_ERROR,
        payload: error,
    };
};

//all menu
export const getAllMenuRequest = (payload) => ({
    type: actionTypes.GET_ALL_MENU_REQUEST,
    payload: payload,
});
export const getAllMenuSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_MENU_SUCCESS,
        payload: response,
    };
};
export const getAllMenuError = (error) => {
    return {
        type: actionTypes.GET_ALL_MENU_ERROR,
        payload: error,
    };
};

//add to cart menu
export const addToCartMenuRequest = (id, q, note, dish, cost) => {
    return {
        type: actionTypes.ADD_TO_CART_MENU_REQUEST,
        payload: {id, q, note, dish, cost},
    };
};
export const addToCartMenuSuccess = (response) => {
    return {
        type: actionTypes.ADD_TO_CART_MENU_SUCCESS,
        payload: response,
    };
};
export const addToCartMenuError = (error) => {
    return {
        type: actionTypes.ADD_TO_CART_MENU_ERROR,
        payload: error,
    };
};

//all search
export const getAllSearchRequest = (se, tid) => ({
    type: actionTypes.GET_ALL_SEARCH_REQUEST,
    payload: {se, tid},
});
export const getAllSearchSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_SEARCH_SUCCESS,
        payload: response,
    };
};
export const getAllSearchError = (error) => {
    return {
        type: actionTypes.GET_ALL_SEARCH_ERROR,
        payload: error,
    };
};

//call Waiter
export const postCallWaiterRequest = (payload) => {
    return {
        type: actionTypes.POST_CALL_WAITER_REQUEST,
        payload: payload,
    };
};
export const postCallWaiterSuccess = (response) => {
    return {
        type: actionTypes.POST_CALL_WAITER_SUCCESS,
        payload: response,
    };
};
export const postCallWaiterError = (error) => {
    return {
        type: actionTypes.POST_CALL_WAITER_ERROR,
        payload: error,
    };
};

//call Payment
export const postCallPaymentRequest = () => {
    return {
        type: actionTypes.POST_CALL_PAYMENT_REQUEST,
        // payload: payload,
    };
};
export const postCallPaymentSuccess = (response) => {
    return {
        type: actionTypes.POST_CALL_PAYMENT_SUCCESS,
        payload: response,
    };
};
export const postCallPaymentError = (error) => {
    return {
        type: actionTypes.POST_CALL_PAYMENT_ERROR,
        payload: error,
    };
};

//send Feedback
export const sendFeedbackRequest = (payload) => {
    return {
        type: actionTypes.SEND_FEEDBACK_REQUEST,
        payload: payload,
    };
};
export const sendFeedbackSuccess = (response) => {
    return {
        type: actionTypes.SEND_FEEDBACK_SUCCESS,
        payload: response,
    };
};
export const sendFeedbackError = (error) => {
    return {
        type: actionTypes.SEND_FEEDBACK_ERROR,
        payload: error,
    };
};

//get Food in combo
export const getFoodInComboRequest = (payload) => {
    return {
        type: actionTypes.GET_FOOD_IN_COMBO_REQUEST,
        payload: payload,
    };
};
export const getFoodInComboSuccess = (response) => {
    return {
        type: actionTypes.GET_FOOD_IN_COMBO_SUCCESS,
        payload: response,
    };
};
export const getFoodInComboError = (error) => {
    return {
        type: actionTypes.GET_FOOD_IN_COMBO_ERROR,
        payload: error,
    };
};

//add to cart
export const addToCartRequest = (payload) => {
    return {
        type: actionTypes.ADD_TO_CART_REQUEST,
        payload: payload,
    };
};
export const addToCartSuccess = (response) => {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS,
        payload: response,
    };
};
export const addToCartError = (error) => {
    return {
        type: actionTypes.ADD_TO_CART_ERROR,
        payload: error,
    };
};

//get cart
export const getCartRequest = (payload) => {
    return {
        type: actionTypes.GET_CART_REQUEST,
        payload: payload,
    };
};
export const getCartSuccess = (response) => {
    return {
        type: actionTypes.GET_CART_SUCCESS,
        payload: response,
    };
};
export const getCartError = (error) => {
    return {
        type: actionTypes.GET_CART_ERROR,
        payload: error,
    };
};

//delete from cart
export const deleteFromCartRequest = (payload) => {
    return {
        type: actionTypes.DELETE_FROM_CART_REQUEST,
        payload: payload,
    };
};
export const deleteFromCartSuccess = (response) => {
    return {
        type: actionTypes.DELETE_FROM_CART_SUCCESS,
        payload: response,
    };
};
export const deleteFromCartError = (error) => {
    return {
        type: actionTypes.DELETE_FROM_CART_ERROR,
        payload: error,
    };
};

//delete all from cart
export const deleteAllFromCartRequest = (payload) => {
    return {
        type: actionTypes.DELETE_ALL_FROM_CART_REQUEST,
        payload: payload,
    };
};
export const deleteAllFromCartSuccess = (response) => {
    return {
        type: actionTypes.DELETE_ALL_FROM_CART_SUCCESS,
        payload: response,
    };
};
export const deleteAllFromCartError = (error) => {
    return {
        type: actionTypes.DELETE_ALL_FROM_CART_ERROR,
        payload: error,
    };
};

//send Order
export const sendOrderRequest = () => {
    return {
        type: actionTypes.SEND_ORDER_REQUEST,
        // payload: payload,
    };
};
export const sendOrderSuccess = (response) => {
    return {
        type: actionTypes.SEND_ORDER_SUCCESS,
        payload: response,
    };
};
export const sendOrdertError = (error) => {
    return {
        type: actionTypes.SEND_ORDER_ERROR,
        payload: error,
    };
};

// view order
export const getViewOrderRequest = (payload) => ({
    type: actionTypes.GET_VIEW_ORDER_REQUEST,
    payload: payload,
});
export const getViewOrderSuccess = (response) => {
    return {
        type: actionTypes.GET_VIEW_ORDER_SUCCESS,
        payload: response,
    };
};
export const getViewOrderError = (error) => {
    return {
        type: actionTypes.GET_VIEW_ORDER_ERROR,
        payload: error,
    };
};

// check queue order
export const checkQueueOrderRequest = (payload) => ({
    type: actionTypes.CHECK_QUEUE_ORDER_REQUEST,
    payload: payload,
});
export const checkQueueOrderSuccess = (response) => {
    return {
        type: actionTypes.CHECK_QUEUE_ORDER_SUCCESS,
        payload: response,
    };
};
export const checkQueueOrderError = (error) => {
    return {
        type: actionTypes.CHECK_QUEUE_ORDER_ERROR,
        payload: error,
    };
};

// view complete drink
export const viewCompleteDrinkRequest = (tbid, s) => ({
    type: actionTypes.VIEW_COMPLETE_DRINK_REQUEST,
    payload: {tbid, s},
});
export const viewCompleteDrinkSuccess = (response) => {
    return {
        type: actionTypes.VIEW_COMPLETE_DRINK_SUCCESS,
        payload: response,
    };
};
export const viewCompleteDrinkError = (error) => {
    return {
        type: actionTypes.VIEW_COMPLETE_DRINK_ERROR,
        payload: error,
    };
};

// view complete food
export const viewCompleteFoodRequest = (tbid, s) => ({
    type: actionTypes.VIEW_COMPLETE_FOOD_REQUEST,
    payload: {tbid, s},
});
export const viewCompleteFoodSuccess = (response) => {
    return {
        type: actionTypes.VIEW_COMPLETE_FOOD_SUCCESS,
        payload: response,
    };
};
export const viewCompleteFoodError = (error) => {
    return {
        type: actionTypes.VIEW_COMPLETE_FOOD_ERROR,
        payload: error,
    };
};
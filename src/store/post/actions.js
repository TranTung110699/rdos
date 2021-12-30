import * as actionTypes from "./actionTypes";
import {POST_MARK_AS_READ_REQUEST} from "./actionTypes";

export const postNumberCustomerRequest = (payload) => {
  return {
    type: actionTypes.POST_NUMBER_CUSTOMER,
    payload: payload,
  };
};
export const postNumberCustomerSuccess = (response) => {
  return {
    type: actionTypes.POST_NUMBER_CUSTOMER_SUCCESS,
    payload: response,
  };
};
export const postNumberCustomerError = (error) => {
  return {
    type: actionTypes.POST_NUMBER_CUSTOMER_ERROR,
    payload: error,
  };
};


export const postCloseTableRequest = (payload) => {
  return {
    type: actionTypes.POST_CLOSE_TABLE_REQUEST,
    payload: payload,
  };
};
export const postCloseTableSuccess = (response) => {
  return {
    type: actionTypes.POST_CLOSE_TABLE_SUCCESS,
    payload: response,
  };
};
export const postCloseTableError = (error) => {
  return {
    type: actionTypes.POST_CLOSE_TABLE_ERROR,
    payload: error,
  };
};

export const postMarkAsReadRequest = (payload) => {
  return {
    type: actionTypes.POST_MARK_AS_READ_REQUEST,
    payload: payload,
  };
};
export const postMarkAsReadSuccess = (response) => {
  return {
    type: actionTypes.POST_MARK_AS_READ_SUCCESS,
    payload: response,
  };
};
export const postMarkAsReadError = (error) => {
  return {
    type: actionTypes.POST_MARK_AS_READ_ERROR,
    payload: error,
  };
};


export const getQueueOrderRequest = (payload) => {
  return {
    type: actionTypes.GET_QUEUE_ORDER_REQUEST,
    payload: payload,
  };
};
export const getQueueOrderSuccess = (response) => {
  return {
    type: actionTypes.GET_QUEUE_ORDER_SUCCESS,
    payload: response,
  };
};
export const getQueueOrderError = (error) => {
  return {
    type: actionTypes.GET_QUEUE_ORDER_ERROR,
    payload: error,
  };
};


export const postCancelQueueOrderRequest = (payload) => {
  return {
    type: actionTypes.POST_CANCEL_QUEUE_ORDER_REQUEST,
    payload: payload,
  };
};
export const postCancelQueueOrderSuccess = (response) => {
  return {
    type: actionTypes.POST_CANCEL_QUEUE_ORDER_SUCCESS,
    payload: response,
  };
};
export const postCancelQueueOrderError = (error) => {
  return {
    type: actionTypes.POST_CANCEL_QUEUE_ORDER_ERROR,
    payload: error,
  };
};


export const postConfirmQueueOrderRequest = (payload) => {
  return {
    type: actionTypes.POST_CONFIRM_QUEUE_ORDER_REQUEST,
    payload: payload,
  };
};
export const postConfirmQueueOrderSuccess = (response) => {
  return {
    type: actionTypes.POST_CONFIRM_QUEUE_ORDER_SUCCESS,
    payload: response,
  };
};
export const postConfirmQueueOrderError = (error) => {
  return {
    type: actionTypes.POST_CONFIRM_QUEUE_ORDER_ERROR,
    payload: error,
  };
};


export const getConfirmedOrderRequest = (payload) => {
  return {
    type: actionTypes.GET_CONFIRMED_ORDER_REQUEST,
    payload: payload,
  };
};
export const getConfirmedOrderSuccess = (response) => {
  return {
    type: actionTypes.GET_CONFIRMED_ORDER_SUCCESS,
    payload: response,
  };
};
export const getConfirmedOrderError = (error) => {
  return {
    type: actionTypes.GET_CONFIRMED_ORDER_ERROR,
    payload: error,
  };
};

export const postDeleteItemRequest = (payload) => {
  return {
    type: actionTypes.POST_DELETE_ITEM_REQUEST,
    payload: payload,
  };
};
export const postDeleteItemSuccess = (response) => {
  return {
    type: actionTypes.POST_DELETE_ITEM_SUCCESS,
    payload: response,
  };
};
export const postDeleteItemError = (error) => {
  return {
    type: actionTypes.POST_DELETE_ITEM_ERROR,
    payload: error,
  };
};


export const postDeleteQueueItemRequest = (payload) => {
  return {
    type: actionTypes.POST_DELETE_QUEUE_ITEM_REQUEST,
    payload: payload,
  };
};
export const postDeleteQueueItemSuccess = (response) => {
  return {
    type: actionTypes.POST_DELETE_QUEUE_ITEM_SUCCESS,
    payload: response,
  };
};
export const postDeleteQueueItemError = (error) => {
  return {
    type: actionTypes.POST_DELETE_QUEUE_ITEM_ERROR,
    payload: error,
  };
};


export const postChangeTableRequest = (payload) => {
  return {
    type: actionTypes.POST_CHANGE_TABLE_REQUEST,
    payload: payload,
  };
};
export const postChangeTableSuccess = (response) => {
  return {
    type: actionTypes.POST_CHANGE_TABLE_SUCCESS,
    payload: response,
  };
};
export const postChangeTableError = (error) => {
  return {
    type: actionTypes.POST_CHANGE_TABLE_ERROR,
    payload: error,
  };
};


export const postUpdateDrinkRequest = (payload) => {
  return {
    type: actionTypes.POST_UPDATE_DRINK_REQUEST,
    payload: payload,
  };
};
export const postUpdateDrinkSuccess = (response) => {
  return {
    type: actionTypes.POST_UPDATE_DRINK_SUCCESS,
    payload: response,
  };
};
export const postUpdateDrinkError = (error) => {
  return {
    type: actionTypes.POST_UPDATE_DRINK_ERROR,
    payload: error,
  };
};


export const postDeleteDrinkRequest = (payload) => {
  return {
    type: actionTypes.POST_DELETE_DRINK_REQUEST,
    payload: payload,
  };
};
export const postDeleteDrinkSuccess = (response) => {
  return {
    type: actionTypes.POST_DELETE_DRINK_SUCCESS,
    payload: response,
  };
};
export const postDeleteDrinkError = (error) => {
  return {
    type: actionTypes.POST_DELETE_DRINK_ERROR,
    payload: error,
  };
};


export const postCustomizeNumberRequest = (payload) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_NUMBER_REQUEST,
    payload: payload,
  };
};
export const postCustomizeNumberSuccess = (response) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_NUMBER_SUCCESS,
    payload: response,
  };
};
export const postCustomizeNumberError = (error) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_NUMBER_ERROR,
    payload: error,
  };
};



export const postCustomizeQueueRequest = (payload) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_QUEUE_REQUEST,
    payload: payload,
  };
};
export const postCustomizeQueueSuccess = (response) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_QUEUE_SUCCESS,
    payload: response,
  };
};
export const postCustomizeQueueError = (error) => {
  return {
    type: actionTypes.POST_CUSTOMIZE_QUEUE_ERROR,
    payload: error,
  };
};
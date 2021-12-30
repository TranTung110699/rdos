import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import {POST_MARK_AS_READ_REQUEST} from "./actionTypes";

const dataPostNumberCustomerReducer = {
  dataPostNumberCustomer: [],
};


const postNumberCustomer= (state = dataPostNumberCustomerReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_NUMBER_CUSTOMER:
      return { ...state };
    case actionTypes.POST_NUMBER_CUSTOMER_SUCCESS:
      return { ...state, dataPostNumberCustomer: action.payload };
    case actionTypes.POST_NUMBER_CUSTOMER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataPostCloseTableReducer = {
  dataPostCloseTable: [],
};

const postCloseTable= (state = dataPostCloseTableReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CLOSE_TABLE_REQUEST:
      return { ...state };
    case actionTypes.POST_CLOSE_TABLE_SUCCESS:
      return { ...state, dataPostCloseTable: action.payload };
    case actionTypes.POST_CLOSE_TABLE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataPostMarkAsReadReducer = {
  dataPostMarkAsRead: [],
};

const postMarkAsRead= (state = dataPostMarkAsReadReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_MARK_AS_READ_REQUEST:
      return { ...state };
    case actionTypes.POST_MARK_AS_READ_SUCCESS:
      return { ...state, dataPostMarkAsRead: action.payload };
    case actionTypes.POST_MARK_AS_READ_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataGetQueueOrderReducer = {
  dataGetQueueOrder: [],
};

const getQueueOrder= (state = dataGetQueueOrderReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_QUEUE_ORDER_REQUEST:
      return { ...state };
    case actionTypes.GET_QUEUE_ORDER_SUCCESS:
      return { ...state, dataGetQueueOrder: action.payload };
    case actionTypes.GET_QUEUE_ORDER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataPostCancelQueueOrderReducer = {
  dataPostCancelQueueOrder: [],
};

const postCancelQueueOrder= (state = dataPostCancelQueueOrderReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CANCEL_QUEUE_ORDER_REQUEST:
      return { ...state };
    case actionTypes.POST_CANCEL_QUEUE_ORDER_SUCCESS:
      return { ...state, dataPostCancelQueueOrder: action.payload };
    case actionTypes.POST_CANCEL_QUEUE_ORDER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataPostConfirmQueueOrderReducer = {
  dataPostConfirmQueueOrder: [],
};

const postConfirmQueueOrder= (state = dataPostConfirmQueueOrderReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CONFIRM_QUEUE_ORDER_REQUEST:
      return { ...state };
    case actionTypes.POST_CONFIRM_QUEUE_ORDER_SUCCESS:
      return { ...state, dataPostConfirmQueueOrder: action.payload };
    case actionTypes.POST_CONFIRM_QUEUE_ORDER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataGetConfirmedOrderReducer = {
  dataGetConfirmedOrder: [],
};

const getConfirmedOrder= (state = dataGetConfirmedOrderReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CONFIRMED_ORDER_REQUEST:
      return { ...state };
    case actionTypes.GET_CONFIRMED_ORDER_SUCCESS:
      return { ...state, dataGetConfirmedOrder: action.payload };
    case actionTypes.GET_CONFIRMED_ORDER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataPostDeleteItemReducer = {
  dataPostDeleteItem: [],
};

const postDeleteItem= (state = dataPostDeleteItemReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_DELETE_ITEM_REQUEST:
      return { ...state };
    case actionTypes.POST_DELETE_ITEM_SUCCESS:
      return { ...state, dataPostDeleteItem: action.payload };
    case actionTypes.POST_DELETE_ITEM_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataPostDeleteQueueItemReducer = {
  dataPostDeleteQueueItem: [],
};

const postDeleteQueueItem= (state = dataPostDeleteQueueItemReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_DELETE_QUEUE_ITEM_REQUEST:
      return { ...state };
    case actionTypes.POST_DELETE_QUEUE_ITEM_SUCCESS:
      return { ...state, dataPostDeleteQueueItem: action.payload };
    case actionTypes.POST_DELETE_QUEUE_ITEM_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataPostChangeTableReducer = {
  dataPostChangeTable: [],
};

const postChangeTable= (state = dataPostChangeTableReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CHANGE_TABLE_REQUEST:
      return { ...state };
    case actionTypes.POST_CHANGE_TABLE_SUCCESS:
      return { ...state, dataPostChangeTable: action.payload };
    case actionTypes.POST_CHANGE_TABLE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataPostUpdateDrinkReducer = {
  dataPostUpdateDrink: [],
};

const postUpdateDrink= (state = dataPostUpdateDrinkReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_UPDATE_DRINK_REQUEST:
      return { ...state };
    case actionTypes.POST_UPDATE_DRINK_SUCCESS:
      return { ...state, dataPostUpdateDrink: action.payload };
    case actionTypes.POST_UPDATE_DRINK_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const dataPostDeleteDrinkReducer = {
  dataPostDeleteDrink: [],
};

const postDeleteDrink= (state = dataPostDeleteDrinkReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_DELETE_DRINK_REQUEST:
      return { ...state };
    case actionTypes.POST_DELETE_DRINK_SUCCESS:
      return { ...state, dataPostDeleteDrink: action.payload };
    case actionTypes.POST_DELETE_DRINK_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const dataPostCustomizeNumberReducer = {
  dataPostCustomizeNumber: [],
};

const postCustomizeNumber= (state = dataPostCustomizeNumberReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CUSTOMIZE_NUMBER_REQUEST:
      return { ...state };
    case actionTypes.POST_CUSTOMIZE_NUMBER_SUCCESS:
      return { ...state, dataPostCustomizeNumber: action.payload };
    case actionTypes.POST_CUSTOMIZE_NUMBER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const dataPostCustomizeQueueReducer = {
  dataPostCustomizeNumber: [],
};

const postCustomizeQueue= (state = dataPostCustomizeQueueReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_CUSTOMIZE_QUEUE_REQUEST:
      return { ...state };
    case actionTypes.POST_CUSTOMIZE_QUEUE_SUCCESS:
      return { ...state, dataPostCustomizeQueue: action.payload };
    case actionTypes.POST_CUSTOMIZE_QUEUE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const Posts = combineReducers({
  postNumberCustomer,
  postCloseTable,
  postMarkAsRead,
  getQueueOrder,
  postCancelQueueOrder,
  postConfirmQueueOrder,
  getConfirmedOrder,
  postDeleteItem,
  postChangeTable,
  postDeleteQueueItem,
  postUpdateDrink,
  postDeleteDrink,
  postCustomizeNumber,
  postCustomizeQueue
});
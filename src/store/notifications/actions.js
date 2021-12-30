import * as actionTypes from "./actionTypes";

//total new notifications
export const totalOfNotificationsRequest = (payload) => {
  return {
    type: actionTypes.TOTAL_OF_NOTIFICATIONS_REQUEST,
    payload: payload,
  };
};
export const totalOfNotificationsSuccess = (response) => {
  return {
    type: actionTypes.TOTAL_NOTIFICATIONS_SUCCESS,
    payload: response,
  };
};
export const totalOfNotificationsError = (error) => {
  return {
    type: actionTypes.TOTAL_NOTIFICATIONS_ERROR,
    payload: error,
  };
};

//all notifications
export const getAllNotification = (payload) => ({
  type: actionTypes.GET_ALL_NOTIFICATION,
  payload: payload,
});
export const getAllNotificationSuccess = (response) => {
  return {
    type: actionTypes.GET_ALL_NOTIFICATION_SUCCESS,
    payload: response,
  };
};
export const getAllNotificationError = (error) => {
  return {
    type: actionTypes.GET_ALL_NOTIFICATION_ERROR,
    payload: error,
  };
};


//Log out
export const getLogOutRequest = (payload) => ({
  type: actionTypes.GET_LOG_OUT_REQUEST,
  payload: payload,
});
export const getLogOutSuccess = (response) => {
  return {
    type: actionTypes.GET_LOG_OUT_SUCCESS,
    payload: response,
  };
};
export const getLogOutError = (error) => {
  return {
    type: actionTypes.GET_LOG_OUT_ERROR,
    payload: error,
  };
};


//all table
export const getAllTableRequest = (payload) => ({
  type: actionTypes.GET_ALL_TABLE_REQUEST,
  payload: payload,
});
export const getAllTableSuccess = (response) => {
  return {
    type: actionTypes.GET_ALL_TABLE_SUCCESS,
    payload: response,
  };
};
export const getAllTableError = (error) => {
  return {
    type: actionTypes.GET_ALL_TABLE_ERROR,
    payload: error,
  };
};


// get table by id
export const getTableRequest = (payload) => ({
  type: actionTypes.GET_TABLE_REQUEST,
  payload: payload,
});
export const getTableSuccess = (response) => {
  return {
    type: actionTypes.GET_TABLE_SUCCESS,
    payload: response,
  };
};
export const getTableError = (error) => {
  return {
    type: actionTypes.GET_TABLE_ERROR,
    payload: error,
  };
};

// post update table by id
export const postUpdateTableRequest = (payload) => ({
  type: actionTypes.POST_UPDATE_TABLE_REQUEST,
  payload: payload,
});
export const postUpdateTableSuccess = (response) => {
  return {
    type: actionTypes.POST_UPDATE_TABLE_SUCCESS,
    payload: response,
  };
};
export const postUpdateTableError = (error) => {
  return {
    type: actionTypes.POST_UPDATE_TABLE_ERROR,
    payload: error,
  };
};


// get check list
export const getCheckListPrepareRequest = (payload) => ({
  type: actionTypes.GET_CHECK_LIST_PREPARE_REQUEST,
  payload: payload,
});
export const getCheckListPrepareSuccess = (response) => {
  return {
    type: actionTypes.GET_CHECK_LIST_PREPARE_SUCCESS,
    payload: response,
  };
};
export const getCheckListPrepareError = (error) => {
  return {
    type: actionTypes.GET_CHECK_LIST_PREPARE_ERROR,
    payload: error,
  };
};


// get check list
export const getCheckListCompleteRequest = (payload) => ({
  type: actionTypes.GET_CHECK_LIST_COMPLETE_REQUEST,
  payload: payload,
});
export const getCheckListCompleteSuccess = (response) => {
  return {
    type: actionTypes.GET_CHECK_LIST_COMPLETE_SUCCESS,
    payload: response,
  };
};
export const getCheckListCompleteError = (error) => {
  return {
    type: actionTypes.GET_CHECK_LIST_COMPLETE_ERROR,
    payload: error,
  };
};

// get check list food Pre
export const getCheckListFoodPrepareRequest = (payload) => ({
  type: actionTypes.GET_CHECK_LIST_FOOD_PREPARE_REQUEST,
  payload: payload,
});
export const getCheckListFoodPrepareSuccess = (response) => {
  return {
    type: actionTypes.GET_CHECK_LIST_FOOD_PREPARE_SUCCESS,
    payload: response,
  };
};
export const getCheckListFoodPrepareError = (error) => {
  return {
    type: actionTypes.GET_CHECK_LIST_FOOD_PREPARE_ERROR,
    payload: error,
  };
};


// get check list food Complete
export const getCheckListFoodCompleteRequest = (payload) => ({
  type: actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_REQUEST,
  payload: payload,
});
export const getCheckListFoodCompleteSuccess = (response) => {
  return {
    type: actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_SUCCESS,
    payload: response,
  };
};
export const getCheckListFoodCompleteError = (error) => {
  return {
    type: actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_ERROR,
    payload: error,
  };
};


// get close table
export const getCloseTableRequest = (payload) => ({
  type: actionTypes.GET_CLOSE_TABLE_REQUEST,
  payload: payload,
});
export const getCloseTableSuccess = (response) => {
  return {
    type: actionTypes.GET_CLOSE_TABLE_SUCCESS,
    payload: response,
  };
};
export const getCloseTableError = (error) => {
  return {
    type: actionTypes.GET_CLOSE_TABLE_ERROR,
    payload: error,
  };
};

// post delete item
export const postDeleteItemRequest = (payload) => ({
  type: actionTypes.POST_DELETE_ITEM_REQUEST,
  payload: payload,
});
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

// get search item
export const getSearchItemRequest = (q,table_id) => ({
  type: actionTypes.GET_SEARCH_ITEM_REQUEST,
  payload: {q,table_id},
});
export const getSearchItemSuccess = (response) => {
  return {
    type: actionTypes.GET_SEARCH_ITEM_SUCCESS,
    payload: response,
  };
};
export const getSearchItemError = (error) => {
  return {
    type: actionTypes.GET_SEARCH_ITEM_ERROR,
    payload: error,
  };
};

// get detail item
export const getDetailItemRequest = (payload) => ({
  type: actionTypes.GET_DETAIL_ITEM_REQUEST,
  payload: payload,
});
export const getDetailItemSuccess = (response) => {
  return {
    type: actionTypes.GET_DETAIL_ITEM_SUCCESS,
    payload: response,
  };
};
export const getDetailItemError = (error) => {
  return {
    type: actionTypes.GET_DETAIL_ITEM_ERROR,
    payload: error,
  };
};
// post Insert item
export const postInsertItemRequest = (payload) => ({
  type: actionTypes.POST_INSERT_ITEM_REQUEST,
  payload: payload,
});
export const postInsertItemSuccess = (response) => {
  return {
    type: actionTypes.POST_INSERT_ITEM_SUCCESS,
    payload: response,
  };
};
export const postInsertItemError = (error) => {
  return {
    type: actionTypes.POST_INSERT_ITEM_ERROR,
    payload: error,
  };
};

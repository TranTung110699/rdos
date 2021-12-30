import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const totalNotificationsReducer = {
  totalNotifications: [],
};
const totalOfNotifications = (state = totalNotificationsReducer, action) => {
  switch (action.type) {
    case actionTypes.TOTAL_OF_NOTIFICATIONS_REQUEST:
      return { ...state };
    case actionTypes.TOTAL_NOTIFICATIONS_SUCCESS:
      return { ...state, totalNotifications: action.payload };
    case actionTypes.TOTAL_NOTIFICATIONS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

//all notifications
const allNotificationsReducer = {
  allNotifications: [],
};
const getAllNotifications = (state = allNotificationsReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_NOTIFICATION:
      return { ...state };
    case actionTypes.GET_ALL_NOTIFICATION_SUCCESS:
      return { ...state, allNotifications: action.payload };
    case actionTypes.GET_ALL_NOTIFICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const allTableReducer = {
  allTables: [],
};

const getAllTable = (state = allTableReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TABLE_REQUEST:
      return { ...state };
    case actionTypes.GET_ALL_TABLE_SUCCESS:
      state =  { ...state, allTables: action.payload };
    case actionTypes.GET_ALL_TABLE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const TableReducer = {
  TableByID: [],
};

const getTable = (state = TableReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_TABLE_REQUEST:
      return { ...state };
    case actionTypes.GET_TABLE_SUCCESS:
      state =  { ...state, TableByID: action.payload };
    case actionTypes.GET_TABLE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const LogOutReducer = {
  dataLogOut: [],
};

const LogOut = (state = LogOutReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_LOG_OUT_REQUEST:
      return { ...state };
    case actionTypes.GET_LOG_OUT_SUCCESS:
      state =  { ...state, dataLogOut: action.payload };
    case actionTypes.GET_LOG_OUT_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


const TableUpdateReducer = {
  UpdateTableByID: [],
};

const postUpdateTable = (state = TableUpdateReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_UPDATE_TABLE_REQUEST:
      return { ...state };
    case actionTypes.POST_UPDATE_TABLE_SUCCESS:
      state =  { ...state, UpdateTableByID: action.payload };
    case actionTypes.POST_UPDATE_TABLE_ERROR:
      return { ...state,UpdateTableByID: action.payload };
    default:
      return state;
  }
};


const CheckListPrepareReducer = {
  dataCheckListPrepare: [],
};

const getCheckListPrepare = (state = CheckListPrepareReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CHECK_LIST_PREPARE_REQUEST:
      return { ...state };
    case actionTypes.GET_CHECK_LIST_PREPARE_SUCCESS:
      state =  { ...state, dataCheckListPrepare: action.payload };
    case actionTypes.GET_CHECK_LIST_PREPARE_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};

const CheckListCompleteReducer = {
  dataCheckListComplete: [],
};

const getCheckListComplete = (state = CheckListCompleteReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CHECK_LIST_COMPLETE_REQUEST:
      return { ...state };
    case actionTypes.GET_CHECK_LIST_COMPLETE_SUCCESS:
      state =  { ...state, dataCheckListComplete: action.payload };
    case actionTypes.GET_CHECK_LIST_COMPLETE_ERROR:
      return { ...state,dataCheckList: action.payload };
    default:
      return state;
  }
};


const CheckListFoodPrepareReducer = {
  dataCheckListFoodPrepare: [],
};

const getCheckListFoodPrepare = (state = CheckListFoodPrepareReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CHECK_LIST_FOOD_PREPARE_REQUEST:
      return { ...state };
    case actionTypes.GET_CHECK_LIST_FOOD_PREPARE_SUCCESS:
      state =  { ...state, dataCheckListFoodPrepare: action.payload };
    case actionTypes.GET_CHECK_LIST_FOOD_PREPARE_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};


const CheckListFoodCompleteReducer = {
  dataCheckListFoodComplete: [],
};

const getCheckListFoodComplete = (state = CheckListFoodCompleteReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_REQUEST:
      return { ...state };
    case actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_SUCCESS:
      state =  { ...state, dataCheckListFoodComplete: action.payload };
    case actionTypes.GET_CHECK_LIST_FOOD_COMPLETE_ERROR:
      return { ...state,dataCheckList: action.payload };
    default:
      return state;
  }
};

const CloseTableReducer = {
  dataCloseTable: [],
};

const getCloseTable = (state = CloseTableReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_CLOSE_TABLE_REQUEST:
      return { ...state };
    case actionTypes.GET_CLOSE_TABLE_SUCCESS:
      state =  { ...state, dataCloseTable: action.payload };
    case actionTypes.GET_CLOSE_TABLE_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};


const DeleteItemReducer = {
  dataDeleteItem: [],
};

const postDeleteItem = (state = DeleteItemReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_DELETE_ITEM_REQUEST:
      return { ...state };
    case actionTypes.POST_DELETE_ITEM_SUCCESS:
      state =  { ...state, dataDeleteItem: action.payload };
    case actionTypes.POST_DELETE_ITEM_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};

const SearchItemReducer = {
  dataSearchItem: [],
};

const getSearchItem = (state = SearchItemReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_ITEM_REQUEST:
      return { ...state };
    case actionTypes.GET_SEARCH_ITEM_SUCCESS:
      state =  { ...state, dataSearchItem: action.payload };
    case actionTypes.GET_SEARCH_ITEM_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};


const DetailItemReducer = {
  dataDetailItem: [],
};

const getDetailItem = (state = DetailItemReducer, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_ITEM_REQUEST:
      return { ...state };
    case actionTypes.GET_DETAIL_ITEM_SUCCESS:
      state =  { ...state, dataDetailItem: action.payload };
    case actionTypes.GET_DETAIL_ITEM_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};


const InsertItemReducer = {
  dataInsertItem: [],
};

const postInsertItem = (state = InsertItemReducer, action) => {
  switch (action.type) {
    case actionTypes.POST_INSERT_ITEM_REQUEST:
      return { ...state };
    case actionTypes.POST_INSERT_ITEM_SUCCESS:
      state =  { ...state, dataInsertItem: action.payload };
    case actionTypes.POST_INSERT_ITEM_ERROR:
      return { ...state,error: action.payload };
    default:
      return state;
  }
};




export const Notification = combineReducers({
  totalOfNotifications,
  getAllNotifications,
  getAllTable,
  getTable,
  getCheckListPrepare,
  getCheckListComplete,
  getCheckListFoodPrepare,
  getCheckListFoodComplete,
  postUpdateTable,
  LogOut,
  postDeleteItem,
  getCloseTable,
  getSearchItem,
  getDetailItem,
  postInsertItem
});

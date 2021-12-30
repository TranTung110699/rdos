import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

//all notifications receptionist
const allNotificationsReceptionistReducer = {
    allNotificationsReceptionist: [],
};
const getAllNotificationsReceptionist = (state = allNotificationsReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_NOTIFICATION_RECEPTIONIST:
            return { ...state };
        case actionTypes.GET_ALL_NOTIFICATION_SUCCESS_RECEPTIONIST:
            return { ...state, allNotificationsReceptionist: action.payload };
        case actionTypes.GET_ALL_NOTIFICATION_ERROR_RECEPTIONIST:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all feedback
const allFeedbackReducer = {
    allFeedback: [],
};
const getAllFeedback = (state = allFeedbackReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_FEEDBACK_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_FEEDBACK_SUCCESS:
            return { ...state, allFeedback: action.payload };
        case actionTypes.GET_ALL_FEEDBACK_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//maskAsReadRe
const maskAsReadReReducer = {
    maskAsReadRe: [],
};
const maskAsReadReceptionist = (state = maskAsReadReReducer, action) => {
    switch (action.type) {
        case actionTypes.MASK_AS_READ_REQUEST:
            return { ...state };
        case actionTypes.MASK_AS_READ_SUCCESS:
            return { ...state, maskAsReadRe: action.payload };
        case actionTypes.MASK_AS_READ_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all table re
const allTableReceptionistReducer = {
    allTableReceptionist: [],
};
const getAllTableReceptionist = (state = allTableReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_SUCCESS:
            return { ...state, allTableReceptionist: action.payload };
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//all table re
const allTableReceptionistNoPagesizeReducer = {
    allTableReceptionistNoPagesize: [],
};
const getAllTableReceptionistNoPagesize = (state = allTableReceptionistNoPagesizeReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_REQUEST:
            return { ...state };
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_SUCCESS:
            return { ...state, allTableReceptionistNoPagesize: action.payload };
        case actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//add table
const postAddTableReceptionistReducer = {
    addTableReceptionist: [],
};
const postAddTableReceptionist = (state = postAddTableReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.ADD_TABLE_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.ADD_TABLE_RECEPTIONIST_SUCCESS:
            return { ...state, addTableReceptionist: action.payload };
        case actionTypes.ADD_TABLE_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//delete table
const postDeleteTableReceptionistReducer = {
    deleteTableReceptionist: [],
};
const postDeleteTableReceptionist = (state = postDeleteTableReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TABLE_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.DELETE_TABLE_RECEPTIONIST_SUCCESS:
            return { ...state, deleteTableReceptionist: action.payload };
        case actionTypes.DELETE_TABLE_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//generate table
const getGenerateTableReceptionistReducer = {
    generateTableReceptionist: [],
};
const getGenerateTableReceptionist = (state = getGenerateTableReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_TABLE_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GENERATE_TABLE_RECEPTIONIST_SUCCESS:
            return { ...state, generateTableReceptionist: action.payload };
        case actionTypes.GENERATE_TABLE_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//edit table
const postEditTableReceptionistReducer = {
    editTableReceptionist: [],
};
const postEditTableReceptionist = (state = postEditTableReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.EDIT_TABLE_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.EDIT_TABLE_RECEPTIONIST_SUCCESS:
            return { ...state, editTableReceptionist: action.payload };
        case actionTypes.EDIT_TABLE_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//list confirm order re
const listConfirmOrderReceptionistReducer = {
    listConfirmOrderReceptionist: [],
};
const getListConfirmOrderReceptionist = (state = listConfirmOrderReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_SUCCESS:
            return { ...state, listConfirmOrderReceptionist: action.payload };
        case actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//detail confirm order re
const detailConfirmOrderReceptionistReducer = {
    detailConfirmOrderReceptionist: [],
};
const getDetailConfirmOrderReceptionist = (state = detailConfirmOrderReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_SUCCESS:
            return { ...state, detailConfirmOrderReceptionist: action.payload };
        case actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//enter voucher
const enterVoucherReceptionistReducer = {
    enterVoucherReceptionist: [],
};
const postEnterVoucherReceptionist = (state = enterVoucherReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_SUCCESS:
            return { ...state, enterVoucherReceptionist: action.payload };
        case actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//invoice completed order
const invoiceCompletedReceptionistReducer = {
    invoiceCompletedReceptionist: [],
};
const getInvoiceCompletedReceptionist = (state = invoiceCompletedReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_SUCCESS:
            return { ...state, invoiceCompletedReceptionist: action.payload };
        case actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//list paid order re
const listPaidOrderReceptionistReducer = {
    listPaidOrderReceptionist: [],
};
const getListPaidOrderReceptionist = (state = listPaidOrderReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_SUCCESS:
            return { ...state, listPaidOrderReceptionist: action.payload };
        case actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

//customize number of item
const customizeNumberOfItemReceptionistReducer = {
    listCustomizeNumberOfItemReceptionist: [],
};
const postCustomizeNumberOfItemReceptionist = (state = customizeNumberOfItemReceptionistReducer, action) => {
    switch (action.type) {
        case actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_REQUEST:
            return { ...state };
        case actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_SUCCESS:
            return { ...state, listCustomizeNumberOfItemReceptionist: action.payload };
        case actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const Receptionist = combineReducers({
    getAllNotificationsReceptionist,
    getAllFeedback,
    maskAsReadReceptionist,
    getAllTableReceptionist,
    getAllTableReceptionistNoPagesize,
    postAddTableReceptionist,
    postDeleteTableReceptionist,
    getGenerateTableReceptionist,
    postEditTableReceptionist,
    getListConfirmOrderReceptionist,
    getDetailConfirmOrderReceptionist,
    postEnterVoucherReceptionist,
    getInvoiceCompletedReceptionist,
    getListPaidOrderReceptionist,
    postCustomizeNumberOfItemReceptionist,
});

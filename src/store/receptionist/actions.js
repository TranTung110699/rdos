import * as actionTypes from "./actionTypes";

//all notifications receptionist
export const getAllNotificationReceptionist = (payload) => ({
    type: actionTypes.GET_ALL_NOTIFICATION_RECEPTIONIST,
    payload: payload,
});
export const getAllNotificationReceptionistSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_NOTIFICATION_SUCCESS_RECEPTIONIST,
        payload: response,
    };
};
export const getAllNotificationReceptionistError = (error) => {
    return {
        type: actionTypes.GET_ALL_NOTIFICATION_ERROR_RECEPTIONIST,
        payload: error,
    };
};

//all feedback
export const getAllFeedbackRequest = (payload) => ({
    type: actionTypes.GET_ALL_FEEDBACK_REQUEST,
    payload: payload,
});
export const getAllFeedbackSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_FEEDBACK_SUCCESS,
        payload: response,
    };
};
export const getAllFeedbackError = (error) => {
    return {
        type: actionTypes.GET_ALL_FEEDBACK_ERROR,
        payload: error,
    };
};

//mask as read
export const maskAsReadRequest = (payload) => ({
    type: actionTypes.MASK_AS_READ_REQUEST,
    payload: payload,
});
export const maskAsReadSuccess = (response) => {
    return {
        type: actionTypes.MASK_AS_READ_SUCCESS,
        payload: response,
    };
};
export const maskAsReadError = (error) => {
    return {
        type: actionTypes.MASK_AS_READ_ERROR,
        payload: error,
    };
};

//all table re
export const getAllTableReRequest = (payload) => ({
    type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const getAllTableReSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const getAllTableReError = (error) => {
    return {
        type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//all table no pageSize re
export const getAllTableReNoPageSizeRequest = (payload) => ({
    type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_REQUEST,
    payload: payload,
});
export const getAllTableReNoPageSizeSuccess = (response) => {
    return {
        type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_SUCCESS,
        payload: response,
    };
};
export const getAllTableReNoPageSizeError = (error) => {
    return {
        type: actionTypes.GET_ALL_TABLE_RECEPTIONIST_NO_PAGESIZE_ERROR,
        payload: error,
    };
};

//add table re
export const addTableReRequest = (payload) => ({
    type: actionTypes.ADD_TABLE_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const addTableReSuccess = (response) => {
    return {
        type: actionTypes.ADD_TABLE_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const addTableReError = (error) => {
    return {
        type: actionTypes.ADD_TABLE_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//delete table re
export const deleteTableReRequest = (payload) => ({
    type: actionTypes.DELETE_TABLE_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const deleteTableReSuccess = (response) => {
    return {
        type: actionTypes.DELETE_TABLE_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const deleteTableReError = (error) => {
    return {
        type: actionTypes.DELETE_TABLE_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//generate table re
export const generateTableReRequest = (payload) => ({
    type: actionTypes.GENERATE_TABLE_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const generateTableReSuccess = (response) => {
    return {
        type: actionTypes.GENERATE_TABLE_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const generateTableReError = (error) => {
    return {
        type: actionTypes.GENERATE_TABLE_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//edit table re
export const editTableReRequest = (payload) => ({
    type: actionTypes.EDIT_TABLE_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const editTableReSuccess = (response) => {
    return {
        type: actionTypes.EDIT_TABLE_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const editTableReError = (error) => {
    return {
        type: actionTypes.EDIT_TABLE_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//get list confirm order recep
export const getListConfirmOrderReRequest = (payload) => ({
    type: actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const getListConfirmOrderReSuccess = (response) => {
    return {
        type: actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const getListConfirmOrderReError = (error) => {
    return {
        type: actionTypes.GET_LIST_CONFIRM_ORDER_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//get detail confirm order recep
export const getDetailConfirmOrderReRequest = (payload) => ({
    type: actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const getDetailConfirmOrderReSuccess = (response) => {
    return {
        type: actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const getDetailConfirmOrderReError = (error) => {
    return {
        type: actionTypes.GET_DETAIL_CONFIRM_ORDER_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//enter voucher
export const postEnterVoucherReRequest = (payload) => ({
    type: actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const postEnterVoucherReSuccess = (response) => {
    return {
        type: actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const postEnterVoucherReError = (error) => {
    return {
        type: actionTypes.POST_ENTER_VOUCHER_RECEPTIONIST_ERROR,
        payload: error,
    };
};

// invoice the complete order
export const getInvoiceCompletedOrderReRequest = (payload) => ({
    type: actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const getInvoiceCompletedOrderReSuccess = (response) => {
    return {
        type: actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const getInvoiceCompletedOrderReError = (error) => {
    return {
        type: actionTypes.GET_INVOICE_COMPLETED_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//get list paid order recep
export const getListPaidOrderReRequest = (payload) => ({
    type: actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_REQUEST,
    payload: payload,
});
export const getListPaidOrderReSuccess = (response) => {
    return {
        type: actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const getListPaidOrderReError = (error) => {
    return {
        type: actionTypes.GET_LIST_PAID_ORDER_RECEPTIONIST_ERROR,
        payload: error,
    };
};

//customize number of item in order
export const postCustomizeNumberItemReRequest = (id, itemId, s) => ({
    type: actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_REQUEST,
    payload: {id, itemId, s},
});
export const postCustomizeNumberItemReSuccess = (response) => {
    return {
        type: actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_SUCCESS,
        payload: response,
    };
};
export const postCustomizeNumberItemReError = (error) => {
    return {
        type: actionTypes.POST_CUSTOMIZE_NUMBER_ITEM_RECEPTIONIST_ERROR,
        payload: error,
    };
};
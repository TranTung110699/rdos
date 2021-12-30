import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "reactstrap";
import {logoutUser} from "../../store/auth/login/actions";
import {setTokenStatusInvalid} from "../../store/auth/login/actions";
import {customerLogoutUser} from "../../store/auth/logincustomer/actions";

const ModalWarrningToken = () => {
    const dispatch = useDispatch();
    const tokenStatusInvalid = useSelector(
        (state) => state.Login.tokenStatusInvalid
    );
    const closeDialog = () => {
        dispatch(setTokenStatusInvalid(""));
        dispatch(logoutUser(true));
    };

    return (
        <Modal
            isOpen={!!tokenStatusInvalid}
            toggle={() => {
                closeDialog();
            }}
        >
            <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                    Oops!
                </h5>
                <button
                    type="button"
                    onClick={() => {
                        closeDialog();
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {(window.location.pathname === "/loading") ? (<h5>Mật khẩu hoặc tài khoản không đúng</h5>) :
                    (window.location.pathname === "/customer-login") ? (<h5>Bàn chưa được mở</h5>) :
                        (<h5>Đã xảy ra lỗi</h5>)}
            </div>
            <div className="modal-footer">
                {(window.location.pathname === "/loading") ? (
                        <button
                            type="button"
                            onClick={() => {
                                dispatch(logoutUser(false));
                            }}
                            className="btn btn-secondary waves-effect"
                            data-dismiss="modal"
                        >
                            Tiếp Tục.
                        </button>
                    ) :
                    (window.location.pathname === "/customer-login") ? (
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(customerLogoutUser(false));
                                }}
                                className="btn btn-secondary waves-effect"
                                data-dismiss="modal"
                            >
                                Tiếp Tục.
                            </button>
                        ) :
                        (
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch(logoutUser(false));
                                    dispatch(customerLogoutUser(false));
                                }}
                                className="btn btn-secondary waves-effect"
                                data-dismiss="modal"
                            >
                                Tiếp Tục.
                            </button>
                        )}
            </div>
        </Modal>
    );
};

export default ModalWarrningToken;

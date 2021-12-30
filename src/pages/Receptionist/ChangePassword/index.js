import React, {useEffect, useState, Component} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect, useDispatch} from "react-redux";

import "../../../assets/scss/custom/pages/receptionist/receptionist.scss";

import Header from "../HeaderReception";
import NotFound from "../../Authentication/Page401";
import {withNamespaces} from "react-i18next";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {Modal} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {authHeaderGetApi, authHeaderGetApiCus} from "../../../helpers/jwt-token-access/auth-token-header";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";
import failAudio from "../../../assets/audio/incorrect.swf.mp3";

// Import menuDropdown

const ChangePassword = (props) => {

    const [userName, setUserName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [openChangePasswordFalse, setOpenChangePasswordFalse] = useState(false);
    const [openBlank, setOpenBlank] = useState(false);

    const [role, setrole] = useState([]);
    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }

    }, []);

    console.log('role :' + role);

    const menu = {
        menuChoose: '0',
    }

    const [successOn] = useSound(
        dingAudio,
        { volume: 1 }
    );

    const [failOn] = useSound(
        failAudio,
        { volume: 1 }
    );
    return (
        <div>

                <div>
                    <div>
                        <Header item={menu}/>
                        <div style={{
                            marginTop: '100px',
                            marginBottom: '60px',
                            paddingTop: '30px',
                            paddingBottom: '100px',
                            backgroundColor: '#ffffff',
                            width: '20%',
                            marginLeft: '40%',
                            borderRadius: '10px',
                        }}
                             className="table-responsive">
                            <div align="center">
                                <h1 style={{
                                    fontFamily: 'Cabin',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    fontSize: '23px',
                                    lineHeight: '25px',
                                    color: 'black',
                                }}>Đổi mật khẩu</h1>
                            </div>
                            <div className="p-5">

                                <div className="form-horizontal"
                                    // onValidSubmit={(e, v) => {
                                    //     handleValidSubmit(e, v)
                                    // }}
                                >

                                    <div className="form-group change-password" style={{fontFamily: 'Cabin'}}>
                                        <label>Tên đăng nhập</label>
                                        <input name="username"
                                               className="form-control change-password-input"
                                               placeholder="Nhập tên đăng nhập"
                                               type="text"
                                               required
                                               onChange={(e) => {
                                                   setUserName(e.target.value)
                                               }}
                                        />
                                    </div>

                                    <div className="form-group change-password" style={{fontFamily: 'Cabin'}}>
                                        <label>Mật khẩu cũ</label>
                                        <input name="old-password"
                                               type="password"
                                               className="form-control change-password-input"
                                               required
                                               placeholder="Nhập mật khẩu cũ"
                                               onChange={(e) => {
                                                   setOldPassword(e.target.value)
                                               }}
                                        />
                                    </div>

                                    <div className="form-group change-password" style={{fontFamily: 'Cabin'}}>
                                        <label>Mật khẩu mới</label>
                                        <input name="new-password"
                                               type="password"
                                               className="form-control change-password-input"
                                               required
                                               placeholder="Nhập mật khẩu mới"
                                               onChange={(e) => {
                                                   setNewPassword(e.target.value)
                                               }}
                                        />
                                    </div>

                                    <div className="form-group change-password" style={{fontFamily: 'Cabin'}}>
                                        <label>Xác nhận mật khẩu mới</label>
                                        <input name="re-new-password"
                                               type="password"
                                               className="form-control change-password-input"
                                               required
                                               placeholder="Nhập mật khẩu mới"
                                               onChange={(e) => {
                                                   setReNewPassword(e.target.value)
                                               }}
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <button style={{
                                            backgroundColor: '#FCBC3A',
                                            color: '#000000',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            borderRadius: '10px',
                                            fontFamily: 'Cabin',
                                            border: '1px solid #FCBC3A'
                                        }} className="btn btn-primary btn-block waves-effect waves-light"
                                                onClick={() => {
                                                    setOpenChangePassword(true);
                                                    successOn()
                                                    setTimeout(() => {
                                                        window.location.reload();
                                                        setOpenChangePassword(false);
                                                        props.history.push('/receptionist-change-password')
                                                    }, 2000)
                                                }}
                                        >Đổi mật khẩu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openChangePassword}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Bạn đã đổi mật khẩu thành công !</b>
                            </div>
                        </div>
                    </Modal>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openChangePasswordFalse}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-exclamation bx-tada text-danger"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Bạn đã nhập sai, vui lòng nhập lại !</b>
                            </div>
                        </div>
                    </Modal>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openBlank}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-exclamation bx-tada text-danger"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>{(userName === '') ? "Vui lòng nhập Tên người dùng !" :
                                (oldPassword === '') ? "Vui lòng nhập Mật khẩu cũ !" :
                                    (newPassword === '') ? "Vui lòng nhập Mật khẩu mới !" :
                                        (reNewPassword === '') ? "Vui lòng nhập Xác nhận lại mật khẩu mới !" :
                                            (oldPassword === newPassword) ? "Mật khẩu mới không được trùng Mật khẩu cũ !" :
                                                (newPassword !== reNewPassword) ? "Xác nhận mật khẩu sai !" :
                                                    "Vui lòng không bỏ trống !"}
                            </b>
                            </div>
                        </div>
                    </Modal>
                    <Footer/>
                </div>

        </div>
    )
}

export default ChangePassword;
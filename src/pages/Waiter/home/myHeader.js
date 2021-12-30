import {Link, withRouter} from "react-router-dom";
import React, {useState} from "react";
import {connect} from "react-redux";
import {getLogOutRequest} from "../../../store/notifications/actions";
import {apiError} from "../../../store/auth/login/actions";

// scss
import "../../../assets/scss/custom/pages/waiter/header.scss";
//image
import Profile from "../../../assets/images/waiter/profile.png";
import home from  "../../../assets/images/waiter/home.png";
import  Search from "../../../assets/images/customer/wine.png"
const MyHeader = (props) => {

    const [toggle,setToggle] = useState(false);

    const toggleBtn = () =>{
        setToggle(!toggle);
    }

    const logout = () => {
        props.getLogOutRequest();
    }



    return(
        <div className="MyHeader">
            <Link to="/waiter-view-all-table" className="div-table-code">
                <img style={{width: '23px', height: '25px'}} src={home}/>
            </Link>
            <div className="title_header">
                <p>{ "Trang Chủ" }</p>
            </div>

            <div className="toggle-logout">
                <img onClick={toggleBtn} style={{width: '25px', height: '26px'}} src={Profile}/>
                <div className="dropdown-content" style={{zIndex: '100',display: toggle == true? "block" : "none"  }}>
                    <Link to="/login" onClick={logout}>Đăng xuất</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dataLogout : state.Notification.LogOut.dataLogOut
    };
};

export default withRouter(connect(mapStateToProps, {getLogOutRequest,apiError})(MyHeader));
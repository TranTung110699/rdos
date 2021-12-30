import React, {useState} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import {logoutUser} from "../../store/auth/login/actions";
import {Link, withRouter} from "react-router-dom";
import {withNamespaces} from "react-i18next";
import {connect, shallowEqual, useSelector} from "react-redux";
import profile from "../../assets/images/receptionist/profile.png";

const ProfileMenu = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <React.Fragment>
            <Dropdown
                isOpen={menu}
                toggle={() => setMenu(!menu)}
                className="d-inline-block"
            >
                <DropdownToggle
                    className="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    tag="button"
                >
                    <div className="logo logo-dark d-flex menu-type-a-re">
                        <div className="d-flex menu-type-re">
                            <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                 className="avatar-sm profile-user-wid mr-2">
                                <div align="center"
                                     className="avatar-title rounded-circle header-re-icon">
                                    <img src={profile} className="icon-button-menu"/>
                                </div>
                            </div>
                            <div style={{marginTop: '-5px'}} className="square-text-button-re"><b>Quản lý bếp</b></div>
                            <i style={{color: "#000000"}} className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
                        </div>
                    </div>

                </DropdownToggle>
                <DropdownMenu right>
                    <div className="dropdown-divider"></div>
                    <button
                        className="dropdown-item"
                        onClick={() => {
                            props.history.push('/login')
                        }}
                        className="dropdown-item"
                    >
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"/>
                        <span>Đăng xuất</span>
                    </button>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

const mapStatetoProps = (state) => {
    const {error, success} = state.Profile;
    const {authUser} = state.Login;
    return {error, success, authUser};
};

export default withRouter(
    connect(mapStatetoProps)(withNamespaces()(ProfileMenu))
);
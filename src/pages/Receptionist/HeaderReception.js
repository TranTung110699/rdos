import React, {useState} from "react";

import {connect} from "react-redux";

import {Link} from "react-router-dom";
import "../../assets/scss/custom/pages/receptionist/receptionist.scss";

// Import menuDropdown
import NotificationDropdown from "./NotificationDropdown";
import ProfileMenu from "./ProfileMenu";

//i18n
import NotificationFooter from "./NotificationFooter";
import carousel from "../../assets/images/receptionist/carousel.png";
import awards from "../../assets/images/receptionist/awards.png";
import tableManage from "../../assets/images/receptionist/display-spacing.png";
import bell from "../../assets/images/customer/bell.png";

const Header = (props) => {
    const [menuChoose] = useState(props.item.menuChoose);
    return (
        <React.Fragment>
            <header id="page-topbar" className="background-header">
                <div className="navbar-header top-header thanks-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <label>
                                <input
                                    type="radio"
                                    value={'1'}
                                    id={'1'}
                                    style={{display: 'none'}}
                                    name="menuCheck"
                                    className="check-menu"
                                    checked={menuChoose === '1'}
                                />
                                <Link to="/receptionist-home" className="logo logo-dark d-flex menu-type-a-re">
                                    <button className="d-flex menu-type-re">
                                        <NotificationFooter/>
                                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                             className="avatar-sm profile-user-wid mr-2">
                                            <div align="center"
                                                 className="avatar-title rounded-circle header-re-icon">
                                                <img src={carousel} className="icon-button-menu-re"/>
                                            </div>
                                        </div>
                                        <div className="square-text-button-re"><b>Xem Order</b></div>
                                    </button>
                                </Link>
                            </label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <label>
                                <input
                                    type="radio"
                                    value={'2'}
                                    id={'2'}
                                    style={{display: 'none'}}
                                    name="menuCheck"
                                    className="check-menu"
                                    checked={menuChoose === '2'}
                                />
                                <Link to="/receptionist-feedback" className="logo logo-dark d-flex menu-type-a-re">
                                    <button className="d-flex menu-type-re">
                                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                             className="avatar-sm profile-user-wid mr-2">
                                            <div align="center"
                                                 className="avatar-title rounded-circle header-re-icon">
                                                <img src={awards} className="icon-button-menu"/>
                                            </div>
                                        </div>
                                        <div className="square-text-button-re"><b>Xem Đánh giá</b></div>
                                    </button>
                                </Link>
                            </label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <label>
                                <input
                                    type="radio"
                                    value={'3'}
                                    id={'3'}
                                    style={{display: 'none'}}
                                    name="menuCheck"
                                    className="check-menu"
                                    checked={menuChoose === '3'}
                                />
                                <Link to="/receptionist-manage" className="logo logo-dark d-flex menu-type-a-re">
                                    <button className="d-flex menu-type-re">
                                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                             className="avatar-sm profile-user-wid mr-2">
                                            <div align="center"
                                                 className="avatar-title rounded-circle header-re-icon">
                                                <img src={tableManage} className="icon-button-menu"/>
                                            </div>
                                        </div>
                                        <div className="square-text-button-re"><b>Quản lý bàn</b></div>
                                    </button>
                                </Link>
                            </label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <div style={{marginTop: '-10px'}}><NotificationDropdown/></div>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <label><ProfileMenu/></label>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

// const mapStatetoProps = state => {
//     const { layoutType,showRightSidebar, leftMenu } = state.Layout;
//     return { layoutType,showRightSidebar,leftMenu };
// };

// export default connect(mapStatetoProps, { showRightSidebarAction,toggleLeftmenu })(withNamespaces()(Header));
export default Header;
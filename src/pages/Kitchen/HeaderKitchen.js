import React, {useState} from "react";

import {Link} from "react-router-dom";
import "../../assets/scss/custom/pages/kitchen/kitchen.scss";

// Import menuDropdown
import NotificationDropdown from "./NotificationDropDown";
import ProfileMenu from "./ProfileMenu";

//i18n
import {withNamespaces} from 'react-i18next';
import imageItem from "../../assets/images/customer/logo-web.jpg";
// import NotificationFooter from "./NotificationFooter";
import carousel from "../../assets/images/receptionist/carousel.png";
import ereader from "../../assets/images/customer/ereader.png";
import tableManage from "../../assets/images/receptionist/display-spacing.png";
import NotificationFooter from "./NotificationFooter";

const HeaderKitchen = (props) => {
    const [kitchenChoose] = useState(props.item.kitchenChoose);
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
                                    name="kitchenCheck"
                                    className="check-menu"
                                    checked={kitchenChoose === '1'}
                                />
                                <Link to="/kitchen-home" className="logo logo-dark d-flex menu-type-a-re">
                                    <button className="d-flex menu-type-re">
                                        <NotificationFooter/>
                                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                             className="avatar-sm profile-user-wid mr-2">
                                            <div align="center"
                                                 className="avatar-title rounded-circle header-re-icon">
                                                <img src={carousel} className="icon-button-menu-re"/>
                                            </div>
                                        </div>
                                        <div className="square-text-button-re"><b>Danh sách món</b></div>
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
                                    name="kitchenCheck"
                                    className="check-menu"
                                    checked={kitchenChoose === '2'}
                                />
                                <Link to="/kitchen-menu" className="logo logo-dark d-flex menu-type-a-re">
                                    <button className="d-flex menu-type-re">
                                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                             className="avatar-sm profile-user-wid mr-2">
                                            <div align="center"
                                                 className="avatar-title rounded-circle header-re-icon">
                                                <img style={{width: '21px', height: '16px'}} src={ereader}
                                                     className="icon-button-menu"/>
                                            </div>
                                        </div>
                                        <div className="square-text-button-re"><b>Quản lý Menu</b></div>
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

export default HeaderKitchen;

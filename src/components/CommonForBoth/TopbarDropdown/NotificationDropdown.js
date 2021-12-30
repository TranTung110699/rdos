import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import * as actions from "../../../store/notifications/actions";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
//Import scss
import "../../../assets/scss/custom/pages/thanks/post-thanks.scss";
import { connect } from "react-redux";

import NotificationCard from "./NotificationCard";

//i18n
import { withNamespaces } from "react-i18next";

const NotificationDropdown = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const pageIndex = 1;
  const pageSize = 20;
  useEffect(() => {
    props.dispatch(actions.totalOfNotificationsRequest());
    props.dispatch(actions.getAllNotification({ pageIndex, pageSize }));
  }, []);
  const totalsOfNotification =
    props?.totalsOfNotification?.[0]?.new_notification;

  const handleChangeMenu = (value) => {
    setMenu(value);
  };
  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada"></i>
          <span className="badge badge-danger badge-pill">
            {totalsOfNotification}
          </span>
        </DropdownToggle>

        <DropdownMenu
          className="dropdown-menu dropdown-menu-lg dropdown-thanks-notification p-0"
          right
        >
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {props.t("Thông báo")} </h6>
              </Col>
              <div className="col-auto">
                <a href="#!" className="small">
                  {" "}
                  Đánh dấu xem hết
                </a>
              </div>
            </Row>
          </div>
          <PerfectScrollbar style={{ height: "500px" }}>
            {props?.allNotification?.data?.map((notification) => (
              <NotificationCard
                key={notification.thank_id}
                data={notification}
                userId={notification.sender.user_id}
                menu={handleChangeMenu}
              />
            ))}
            <div className="p-2 border-top">
              <Link
                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                to="#"
              >
                {props.t("Xem thêm")}
              </Link>
            </div>
          </PerfectScrollbar>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalsOfNotification:
      state.Notification.totalOfNotifications.totalNotifications,
    allNotification: state.Notification.getAllNotifications.allNotifications,
  };
};

export default withNamespaces()(connect(mapStateToProps)(NotificationDropdown));

import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import moment from "moment";
import { Link, Switch } from "react-router-dom";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import { connect } from "react-redux";

const NotificationCard = (props) => {
  moment.locale("vi");
  const { data, friends, userId,menu } = props;

  const friend = friends.find((item) => item.user_id === userId);

  const handleChangeMenu = (value) =>{
    if(!menu) return;
    menu(value);
  }

  return (
    <SimpleBar key={data.thank_id}>
      <Link
        to={{
          pathname: `/thanks-detail/${data.thank_id}`
        }}
        className="text-reset notification-item"
        onClick={() =>handleChangeMenu(false)}
      >
        <div className="media">
          <img
            src={friend?.avatar}
            className="mr-3 rounded-circle avatar-xs"
            alt="user-pic"
          />
          <div className="media-body">
            <div className="menu-notification">
              <h6 className="mt-0 mb-0">{data.sender.name}</h6>
              <p className="mb-0 mr-2 ml-2 font-size-11">
                {"gửi lời cảm ơn bạn"}
              </p>
            </div>
            <div className="font-size-12 text-muted">
              <p className="mb-0">
                <i className="mdi mdi-clock-outline"></i>
                {moment(data.updated_at).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </SimpleBar>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.User?.Friend?.dataFriends,
  };
};

export default connect(mapStateToProps)(NotificationCard);

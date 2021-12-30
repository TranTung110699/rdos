import React, {useState, useEffect} from "react";
import SimpleBar from "simplebar-react";
import {Link, Switch} from "react-router-dom";
import {connect} from "react-redux";


const NotificationCard = (props) => {

    const {data, dataTable, userId} = props;

    const getYoutubeLikeToDisplay = (millisec) => {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + "h" + minutes + "p";
        }
        if (minutes != "") {
            return minutes + "p";
        }
        return "vừa xong";
    }

    return (
        <SimpleBar key={data._id}>
            <div
                className="text-reset notification-item"
            >
                <div className="media" style={{backgroundColor: (data.read === false) ? "#FFEFCD" : "white"}}>
                    <div className="media-body">
                        <div className="menu-notification d-flex">
                            {(data.read === false) ? (
                                    <p className="col-1"><i style={{color: "green"}}
                                                            className="bx bx-up-arrow-circle bx-tada"></i></p>) :
                                (null)}
                            <p style={{fontFamily: 'Cabin'}} className="mt-0 mb-0 col-8 font-size-15">
                                {data.title}
                            </p>
                            <p style={{fontFamily: 'Cabin', color: '#DC4040', textAlign: 'right'}} className="mt-0 mb-0 mr-0 col-3 font-size-15">
                                {getYoutubeLikeToDisplay(Date.now() - Date.parse(data.created_at))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleBar>
    );
};


const mapStateToProps = (state) => {
    return {
        dataTable: state.Notification?.getAllTable?.allTables
    };
};

export default connect(mapStateToProps)(NotificationCard);

import React, {useState, useEffect} from "react";
import {Link, useLocation, withRouter} from "react-router-dom";
import NotFound from "../../Authentication/Page401";
import {connect} from "react-redux";
import Header from  "../home/myHeader";
import {getAllNotification} from "../../../store/notifications/actions";
import {apiError} from "../../../store/auth/login/actions";
import {postMarkAsReadRequest} from "../../../store/post/actions";
//scss
import "../../../assets/scss/custom/pages/waiter/notification.scss";
//image
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import TableNav from "./TableNav";

const Notification = (props) => {
    const [role, setrole] = useState([]);
    const [notification, setnotification] = useState([
        {
            "_id": "60d1c7139b42000044003072",
            "user_id": "60bcd6ef911e000042003ec5",
            "user_fulname": "Bàn 1",
            "read": false,
            "title": "Gọi phục vụ",
            "content": "Goi nuoc loc",
            "receiver": "waiter",
            "ts": 1624360723,
            "updated_at": "2021-06-22T11:18:43.902000Z",
            "created_at": "2021-06-22T11:18:43.902000Z"
        },
        {
            "_id": "60d1f8243c570000fe0072d2",
            "user_id": "60bcd6ef911e000042003ec5",
            "user_fulname": "Bàn 1",
            "read": false,
            "title": "Gọi phục vụ",
            "content": "Goi nuoc loc",
            "receiver": "waiter",
            "ts": 1624373284,
            "updated_at": "2021-06-22T14:48:04.708000Z",
            "created_at": "2021-06-22T14:48:04.708000Z"
        },
        {
            "_id": "60d1f8813c570000fe0072d3",
            "user_id": "60bcd6ef911e000042003ec5",
            "user_fulname": "Bàn 1",
            "read": false,
            "title": "Gọi phục vụ",
            "content": "Goi nuoc loc",
            "receiver": "waiter",
            "ts": 1624373377,
            "updated_at": "2021-06-22T14:49:37.217000Z",
            "created_at": "2021-06-22T14:49:37.217000Z"
        },
        {
            "_id": "60d1f8923c570000fe0072d4",
            "user_id": "60bcd6ef911e000042003ec5",
            "user_fulname": "Bàn 1",
            "read": false,
            "title": "Gọi phục vụ",
            "content": "Goi nuoc loc",
            "receiver": "waiter",
            "ts": 1624373394,
            "updated_at": "2021-06-22T14:49:54.018000Z",
            "created_at": "2021-06-22T14:49:54.018000Z"
        },
        {
            "_id": "60d1fb873c570000fe0072d5",
            "user_id": "60bcd6ef911e000042003ec5",
            "user_fulname": "Bàn 1",
            "read": false,
            "title": "Gọi phục vụ",
            "content": "Goi nuoc loc",
            "receiver": "waiter",
            "ts": 1624374151,
            "updated_at": "2021-06-22T15:02:31.221000Z",
            "created_at": "2021-06-22T15:02:31.221000Z"
        }
    ]);

    const location  = useLocation();

    const {dataNotification} = props;

    console.log(dataNotification.data);

    const value = {
        // table_id:location.state._id,
        // page: 1,
        // pageSize: 5,
    }

    function load(){
        props.getAllNotification(value);
    }
    let x = false;
    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.postMarkAsReadRequest(value);
        // load()
        // dataNotification.data = null;

    }, []);


    const table = {
        // _id: location.state._id,
        // username: location.state.username,
        navChoose: '1',
    }

    return(
        <React.Fragment>
            <div className="display-customer">

                    <div className="container_detail">
                        <div style={{
                            position: 'fixed',
                            width: '100%',
                            zIndex: '100',
                            backgroundColor:'#ffffff'
                        }}>
                            <Header/>
                            <TableNav item={table}/>
                        </div>
                        <div style={{textAlign: "center", justifyContent: "center", paddingTop: '140px'}}>
                            <div className="list-Item-Notification">
                                {notification.map((d, index) => (
                                        <div className="item-form" style={d.read == false ? {backgroundColor: "#EEEEEE", paddingLeft:'10px'} : {backgroundColor: "#FFEFCD", paddingLeft:'10px'} } key={index}>
                                            <span style={{
                                                fontFamily: 'Cabin',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}>{d.title}</span>
                                            <span style={{
                                                fontFamily: 'Cabin',
                                                fontSize: '14px',
                                                fontWeight: 'normal',
                                                paddingLeft:'10px'
                                            }}>{d.content}</span>
                                            {/*{d.read === false ?  <span></span> : ''}*/}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                <Footer/>
            </div>
            <div className="none-display-customer">
                <Invalid/>
            </div>

        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    return {
        dataNotification: state.Notification.getAllNotifications.allNotifications,
        dataMarkAsRead: state.Posts.postMarkAsRead.dataPostMarkAsRead
    };
};

export default withRouter(connect(mapStateToProps,{postMarkAsReadRequest,getAllNotification,apiError}) (Notification));
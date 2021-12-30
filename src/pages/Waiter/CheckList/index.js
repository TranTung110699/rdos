import React, {useState, useEffect} from "react";
import {useLocation, withRouter} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import NotFound from "../../Authentication/Page401";
import Header from "../home/myHeader";
import TableNav from "../DetailTable/TableNav";
//scss
import "../../../assets/scss/custom/pages/waiter/header.scss";
import "../../../assets/scss/custom/pages/waiter/checkList.scss";
import {connect} from "react-redux";
import {
    postDeleteDrinkRequest,

    postUpdateDrinkRequest
} from "../../../store/post/actions";
import {apiError} from "../../../store/auth/login/actions";
import {
    getCheckListCompleteRequest,
    getCheckListPrepareRequest,
} from "../../../store/notifications/actions";
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";

function CheckList(props) {

    const {dataCheckListPreparePage} = props;

    const {dataCheckListCompletePage} = props;

    const [displayStatus, setStatus] = useState("prepare");

    const [tableChoose, setTableChoose] = useState('1');

    const location = useLocation();

    const [drinkOrder, setDrinkOrder] = useState( [
        {
            "_id": "60e2e5bf04000000a7004829",
            "table_id": "60bf956e37610000b8004ec6",
            "table_name": "Bàn 2",
            "item_name": "Coca",
            "quantity": 2,
            "status": "prepare",
            "category_id": "60c244a6e06b000084000b44",
            "updated_at": "2021-07-05T10:58:07.269000Z",
            "created_at": "2021-07-05T10:58:07.269000Z"
        }
    ]);

    function deleteItem(item) {
        props.postDeleteDrinkRequest(item);

    }

    const [role, setrole] = useState([]);

    function updateDrink(id) {
        const drinkID = {
            _id: id
        }
        props.postUpdateDrinkRequest(drinkID);

    }

    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.getCheckListPrepareRequest(location.state._id);
    }, []);

    const table = {
        // _id: location.state._id,
        // username: location.state.username,
        navChoose: '5',
    }

    return (
        <React.Fragment>
            <div className="display-customer">

                    <div className="container_checkList">
                        <div style={{
                            position: 'fixed',
                            width: '100%',
                            zIndex: '100',
                            backgroundColor: '#ffffff'
                        }}>
                            <Header/>
                            <TableNav item={table}/>
                        </div>
                        <div style={{
                            textAlign: "center",
                            justifycontent: "center",
                            marginBottom: "30px",
                            paddingTop: '140px'
                        }}>
                            <div className="checkList-btn">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={'1'}
                                        id={'1'}
                                        style={{opacity: '0'}}
                                        name="tableCheck"
                                        className="check-list"
                                        onChange={(e) => (
                                            setTableChoose(e.target.value),
                                                setStatus("prepare")

                                        )}
                                        checked={tableChoose === '1'}
                                    />
                                    <div className="item" onClick={() => {
                                        // props.getCheckListPrepareRequest(location.state._id);

                                    }}>Đang chuẩn bị
                                    </div>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={'2'}
                                        id={'2'}
                                        style={{opacity: '0'}}
                                        name="tableCheck"
                                        className="check-list"
                                        onChange={(e) => (
                                            setTableChoose(e.target.value),
                                                setStatus("completed")
                                        )}
                                        checked={tableChoose === '2'}
                                    />
                                    <div className="item" onClick={() => {
                                        // props.getCheckListCompleteRequest(location.state._id);

                                    }}>Hoàn thành
                                    </div>
                                </label>

                            </div>
                            {(displayStatus === "prepare") ? (
                                <div>
                                    <PerfectScrollbar>
                                        <div className="list-Item_checkList">
                                            {drinkOrder.map((d, index) => (
                                                    <div className="item-form-checkList" key={index}>
                                                        <span style={{
                                                            fontFamily: 'Cabin',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}>{d.item_name}</span>
                                                        <span>{d.quantity}</span>
                                                        <div className="save-button" onClick={() => {
                                                            // updateDrink(d._id);
                                                            // setTimeout(() => {
                                                            //     props.getCheckListPrepareRequest(location.state._id);
                                                            // }, 500)

                                                        }
                                                        }>Xác Nhận
                                                        </div>
                                                        <div className="contain_button_cl" onClick={() => {
                                                            deleteItem(d);
                                                            // setTimeout(() => {
                                                            //     props.getCheckListPrepareRequest(location.state._id);
                                                            // }, 500)
                                                        }
                                                        }>
                                                            <div
                                                                className="delete_contain_button_detail avatar-title rounded-circle">
                                                                <div className="delete-icon-button">x</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </PerfectScrollbar>

                                </div>
                            ) : (
                                <div>
                                    <PerfectScrollbar>
                                        <div className="list-Item_checkList">
                                            {drinkOrder.map((d, index) => (
                                                <div className="item-form-checkList d-flex" key={index}>
                                                    <div align="left" className="col-6" style={{
                                                        fontFamily: 'Cabin',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        {d.item_name}
                                                    </div>
                                                    <div align="center" className="col-2">{d.quantity}</div>
                                                    <div align="right" className="col-4">
                                                        {d.status === 'prepare' ? (
                                                            <i style={{color: "#FCBC3A", fontSize: '20px'}}
                                                               className="bx bx-hourglass bx-spin"></i>
                                                        ) : (
                                                            <i style={{color: "green", fontSize: '20px'}}
                                                               className="bx bx-check bx-tada"></i>
                                                        )}
                                                    </div>
                                                </div>
                                                )
                                            )}
                                        </div>
                                    </PerfectScrollbar>
                                </div>
                            )}

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
        dataCheckListPreparePage: state.Notification.getCheckListPrepare.dataCheckListPrepare,
        dataCheckListCompletePage: state.Notification.getCheckListComplete.dataCheckListComplete,
    };
};


export default withRouter(connect(mapStateToProps, {
    postDeleteDrinkRequest,
    postUpdateDrinkRequest,
    getCheckListPrepareRequest,
    getCheckListCompleteRequest,
    apiError
})(CheckList));
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
    getCheckListCompleteRequest, getCheckListFoodCompleteRequest, getCheckListFoodPrepareRequest,
    getCheckListPrepareRequest,
} from "../../../store/notifications/actions";
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";

function Food(props) {

    const {dataCheckListPreparePage} = props;

    console.log(dataCheckListPreparePage);

    const {dataCheckListCompletePage} = props;

    const [displayStatus, setStatus] = useState("prepare");

    const [tableChoose, setTableChoose] = useState('1');

    const location = useLocation();

    const [role, setrole] = useState([]);

    const [foodCheck, setFoodCheck] = useState([
        {
            "_id": "60f07870d96d8f256627fec5",
            "table_id": "60d60daa983dd412f1555305",
            "table_name": "Bàn 1",
            "item_id": "60ec23b569698f3742470de8",
            "item_name": "Ba chỉ bò",
            "quantity": 1,
            "status": "completed",
            "category_id": "60ec23b569698f3742470de2",
            "cat_id": "60ec23b569698f3742470de2",
            "category": [
                {
                    "_id": {
                        "$oid": "60ec23b569698f3742470de2"
                    },
                    "name": "combo"
                }
            ]
        }
    ]);

    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.getCheckListFoodPrepareRequest(location.state._id);
    }, []);

    const table = {
        // _id: location.state._id,
        // username: location.state.username,
        navChoose: '6',
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
                                        // props.getCheckListFoodPrepareRequest(location.state._id);

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
                                        // props.getCheckListFoodCompleteRequest(location.state._id);

                                    }}>Hoàn thành
                                    </div>
                                </label>

                            </div>
                            {(displayStatus === "prepare") ? (
                                <div>
                                    <PerfectScrollbar>
                                        <div style={{height: '450px'}} className="list-Item_checkList">
                                            {foodCheck.map((d, index) => (
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
                            ) : (
                                <div>
                                    <PerfectScrollbar>
                                        <div style={{height: '450px'}} className="list-Item_checkList">
                                            {foodCheck.map((d, index) => (
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
        dataCheckListPreparePage: state.Notification.getCheckListFoodPrepare.dataCheckListFoodPrepare,
        dataCheckListCompletePage: state.Notification.getCheckListFoodComplete.dataCheckListFoodComplete,
    };
};
export default withRouter(connect(mapStateToProps, {
    postDeleteDrinkRequest,
    postUpdateDrinkRequest,
    getCheckListFoodPrepareRequest,
    getCheckListFoodCompleteRequest,
    apiError
})(Food));
import React, {useState, Component, useEffect} from "react";

//Import scss
import "../../../assets/scss/custom/pages/customer/detail.scss";
import {Link} from "react-router-dom";

import Invalid from "../Invalid";
import left from "../../../assets/images/customer/chevron-left-o.png";
import * as actions from "../../../store/customer/actions";
import PerfectScrollbar from "react-perfect-scrollbar";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import ereader from "../../../assets/images/customer/ereader.png";

const CheckDrink = props => {

    const [displayStatus, setStatus] = useState("prepare");

    const [tableChoose, setTableChoose] = useState('1');
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

    useEffect(() => {
        // props.dispatch(actions.viewCompleteDrinkRequest(props.authCustomer.data.user.user_id, displayStatus));
    }, []);

    console.log("view order test: " + props?.allViewCompleteDrink?.data);

    const backPage = () => {
        props.history.goBack();
    }
    return (
        <React.Fragment>
            <div className="display-customer">
                <div className="header-menu">
                    <div className="d-flex">
                        <div className="home-icon col-2">
                            <div onClick={backPage}>
                                <img style={{width: '22px', height: '22px'}} src={left} className="icon-button"/>
                            </div>
                        </div>
                        <div align="center" className="menu-search col-8">
                            <div className="mt-2 mb-2">
                                <span className="avatar-title bg-light span-table">
                                    <div className="div-table">Kiểm đồ uống</div>
                                </span>
                            </div>
                        </div>
                        <div align="right" className="home-icon col-2">
                        </div>
                    </div>

                    <div>
                        <div align="center" style={{
                            height: '80px',
                            backgroundColor: '#F8F8FB',
                            paddingTop: '10px',
                            paddingBottom: '50px',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <div className="view-complete-btn">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={'1'}
                                        id={'1'}
                                        style={{opacity: '0'}}
                                        name="tableCheck"
                                        className="view-complete"
                                        onChange={(e) => (
                                            setTableChoose(e.target.value),
                                                setStatus("prepare")
                                                // props.dispatch(actions.viewCompleteDrinkRequest(props.authCustomer.data.user.user_id, 'prepare'))
                                        )}
                                        checked={tableChoose === '1'}
                                    />
                                    <div className="item-complete">Đang chuẩn bị</div>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={'2'}
                                        id={'2'}
                                        style={{opacity: '0'}}
                                        name="tableCheck"
                                        className="view-complete"
                                        onChange={(e) => (
                                            setTableChoose(e.target.value),
                                                setStatus("completed")
                                                // props.dispatch(actions.viewCompleteDrinkRequest(props.authCustomer.data.user.user_id, 'completed'))
                                        )}
                                        checked={tableChoose === '2'}
                                    />
                                    <div className="item-complete">Hoàn thành</div>
                                </label>

                            </div>
                        </div>
                        <div style={{marginTop: '20px'}} className="cover-list">
                            <div className="side-list-menu">
                                <PerfectScrollbar className="list-menu">
                                    {drinkOrder.map((comd, index) => (
                                        <div className="item-form-complete d-flex" key={index}>
                                            <div align="left" className="col-6" style={{
                                                fontFamily: 'Cabin',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}>
                                                {comd.item_name}
                                            </div>
                                            <div align="center" className="col-2">{comd.quantity}</div>
                                            <div align="right" className="col-4">
                                                {comd.status === 'prepare' ? (
                                                    <i style={{color: "#FCBC3A", fontSize: '20px'}}
                                                       className="bx bx-hourglass bx-spin"></i>
                                                ) : (
                                                    <i style={{color: "green", fontSize: '20px'}}
                                                       className="bx bx-check bx-tada"></i>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </PerfectScrollbar>
                            </div>
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
};
const mapStateToProps = (state) => {
    const {authCustomer} = state.LoginCustomer;
    return {
        authCustomer,
        dataCategory: state.Customer.getAllCategory.allCategories,
        dataMenu: state.Customer.getAllMenu.allMenu,
        allViewOrder: state.Customer.getViewOrder.allViewOrder,
        allViewCompleteDrink: state.Customer.getViewCompleteDrink.allViewCompleteDrink,
    };
};

export default withNamespaces()(connect(mapStateToProps)(CheckDrink));
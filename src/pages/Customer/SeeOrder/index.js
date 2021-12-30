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

const SeeOrder = props => {

    const [detailOrder, setDetailOrder] = useState({
        "_id": "60e2e5bf04000000a700482a",
        "table_id": "60bf956e37610000b8004ec6",
        "table_name": "Bàn 2",
        "number_of_customer": 7,
        "status": "confirmed",
        "item": [
            {
                "_id": "60e2e42504000000a700481e",
                "table_id": "60bf956e37610000b8004ec6",
                "item_id": "60c244acc861000091001532",
                "quantity": 3,
                "note": "aa",
                "dish_in_combo": null,
                "total_cost": 387000,
                "updated_at": "2021-07-05T10:51:17.250000Z",
                "created_at": "2021-07-05T10:51:17.250000Z",
                "detail_item": {
                    "_id": "60c244acc861000091001532",
                    "name": "Combo nướng 129k",
                    "cost": 129000,
                    "description": null,
                    "image": "http://165.227.99.160/image/nuong-129.png",
                    "hotpot": true,
                    "category_id": "60c244a6e06b000084000b42",
                    "is_sold_out": false
                }
            },
            {
                "_id": "60e2e42804000000a700481f",
                "table_id": "60bf956e37610000b8004ec6",
                "item_id": "60c244acc861000091001535",
                "quantity": 1,
                "note": "aa",
                "dish_in_combo": null,
                "total_cost": 10000,
                "updated_at": "2021-07-05T10:51:20.838000Z",
                "created_at": "2021-07-05T10:51:20.838000Z",
                "detail_item": {
                    "_id": "60c244acc861000091001535",
                    "name": "Coca",
                    "cost": 10000,
                    "description": null,
                    "image": "http://165.227.99.160/image/lau.png",
                    "hotpot": false,
                    "category_id": "60c244a6e06b000084000b42"
                }
            }
        ],
        "total_cost": 397000,
        "ts": 1625482687,
        "updated_at": "2021-07-05T11:21:43.171000Z",
        "created_at": "2021-07-05T10:58:07.269000Z"
    });

    useEffect(() => {
        // props.dispatch(actions.getViewOrderRequest(props.authCustomer.data.user.user_id));
    }, []);

    console.log("view order test: " + props?.allViewOrder?.data);

    return (
        <React.Fragment>
            <div className="display-customer">
                <div className="header-menu">
                    <div className="d-flex">
                        <div className="home-icon col-2">
                            <Link to="/customer-home">
                                <img style={{width: '22px', height: '22px'}} src={left} className="icon-button"/>
                            </Link>
                        </div>
                        <div align="center" className="menu-search col-8">
                            <div className="mt-2 mb-2">
                                <span className="avatar-title bg-light span-table">
                                    <div className="div-table">Món đã gọi</div>
                                </span>
                            </div>
                        </div>
                        <div align="right" className="home-icon col-2">
                        </div>
                    </div>

                    <div>
                        <div align="center" style={{
                            height: '120px',
                            backgroundColor: '#F8F8FB',
                            paddingTop: '15px',
                            paddingBottom: '50px',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <b style={{
                                fontStyle: 'normal',
                                fontSize: '18px',
                                fontFamily: 'Cabin',
                                lineHeight: '25px',
                            }}>Số người: 3</b>
                            <div style={{
                                fontStyle: 'normal',
                                fontSize: '16px',
                                fontFamily: 'Cabin',
                                lineHeight: '20px',
                            }}>Tổng tiền: <b>{detailOrder.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd</b></div>
                            <div>
                                <Link to="/customer-check-food">
                                    <button className="menu-button-checklist">
                                        <div align='center' className="text-button-checklist">
                                            Kiểm món ăn
                                        </div>
                                    </button>
                                </Link>
                                <Link to="/customer-check-drink">
                                    <button className="menu-button-checklist">
                                        <div align='center' className="text-button-checklist">
                                            Kiểm đồ uống
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div style={{marginTop: '20px', paddingBottom: '50px'}} className="cover-list">
                            <div className="side-list-menu">
                                <PerfectScrollbar className="list-menu">
                                    {detailOrder.item?.map((so, index) => (
                                        <Link to={`/customer-detail-confirm-order/${so?._id}`}>
                                            <div style={{width:'96%'}} className="item-menu d-flex">
                                                <div className="col-12 d-flex menu-item-bar">
                                                    <div align="left" className="col-12 d-flex">
                                                        <div className="col-10">
                                                            <div className="item-name"><b>{so?.detail_item?.name}</b></div>
                                                            <div
                                                                className="item-cost ">{(so?.total_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                            </div>
                                                        </div>
                                                        <div align='right' className="col-2" style={{
                                                            fontFamily: 'Cabin',
                                                            fontStyle: 'normal',
                                                            fontWeight: 'bold',
                                                            fontSize: '16px',
                                                            lineHeight: '17px',
                                                            textAlign: 'right',
                                                            color: '#1E1C19',
                                                            marginTop:'auto',
                                                            marginBottom:'auto'
                                                        }}>{so?.quantity}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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
        allViewOrder: state.Customer.getViewOrder.allViewOrder
    };
};

export default withNamespaces()(connect(mapStateToProps)(SeeOrder));
import React, {useEffect, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";

import "../../../assets/scss/custom/pages/receptionist/receptionist.scss";

import {Link, useParams} from "react-router-dom";
import Header from "../HeaderReception";
import NotFound from "../../Authentication/Page401";
import chevonRight from "../../../assets/images/receptionist/chevron-down.png";
import mathMinus from "../../../assets/images/receptionist/math-minus.png";
import mathPlus from "../../../assets/images/receptionist/math-plus.png";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import * as actions from "../../../store/receptionist/actions";
import {withNamespaces} from "react-i18next";
import {authHeaderGetApi} from "../../../helpers/jwt-token-access/auth-token-header";
import {Modal} from "reactstrap";
import ReactPaginate from "react-paginate";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";
import payAudio from "../../../assets/audio/ka-ching.mp3";
import firebase from "../../../helpers/firebase";
import {Button, Col, Input, Row} from "reactstrap/es";

// Import menuDropdown

const OrderList = (props) => {


    let statusState = [
        {id: 's1', code: "confirmed", name: "Đã confirm"},
        {id: 's2', code: "paid", name: "Đã thanh toán"}
    ];

    const [displayStatus, setStatus] = useState("confirmed");
    const [voucher, setVoucher] = useState(0);
    const [_id, setOrderId] = useState('');
    const [openInvoiceConfirm, setOpenInvoiceConfirm] = useState(false);

    console.log("status: " + displayStatus)
    console.log("id: " + _id)
    console.log("voucher: " + voucher)

    const data = {_id, voucher};

    console.log("data: " + data)

    const [orderState, setOrderState] = useState([]);
    const [itemState, setItemState] = useState([]);

    const [pageSize] = useState(10)

    const [page, setPage] = useState(1)
    const pageCount = Math.ceil(props?.listConfirmOrderReceptionist?.total / pageSize);
    const changePage = ({selected}) => {
        setPage(selected + 1);
        props.dispatch(actions.getListConfirmOrderReRequest(selected + 1));
    };

    const [pageComplete, setPageComplete] = useState(1)
    const numberOfButtons = Math.ceil(props?.listPaidOrderReceptionist?.total / pageSize);

    const onButtonClick = (type) => {

    };

    console.log("page Select: ")

    const [role, setrole] = useState([]);
    const [orderDetail, setOrderDetail] = useState({
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
                "quantity": 7,
                "note": "aa",
                "dish_in_combo": null,
                "total_cost": 210000,
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
                "quantity": 7,
                "note": "aa",
                "dish_in_combo": null,
                "total_cost": 210000,
                "updated_at": "2021-07-05T10:51:20.838000Z",
                "created_at": "2021-07-05T10:51:20.838000Z",
                "detail_item": {
                    "_id": "60c244acc861000091001535",
                    "name": "Lẩu",
                    "cost": 40000,
                    "description": null,
                    "image": "http://165.227.99.160/image/lau.png",
                    "hotpot": false,
                    "category_id": "60c244a6e06b000084000b42"
                }
            }
        ],
        "total_cost": 60000,
        "ts": 1625482687,
        "updated_at": "2021-07-05T11:21:43.171000Z",
        "created_at": "2021-07-05T10:58:07.269000Z"
    });
    const [orderComplete, setOrderComplete] = useState([
        {
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
                    "quantity": 7,
                    "note": "aa",
                    "dish_in_combo": null,
                    "total_cost": 210000,
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
                    "quantity": 7,
                    "note": "aa",
                    "dish_in_combo": null,
                    "total_cost": 210000,
                    "updated_at": "2021-07-05T10:51:20.838000Z",
                    "created_at": "2021-07-05T10:51:20.838000Z",
                    "detail_item": {
                        "_id": "60c244acc861000091001535",
                        "name": "Lẩu",
                        "cost": 40000,
                        "description": null,
                        "image": "http://165.227.99.160/image/lau.png",
                        "hotpot": false,
                        "category_id": "60c244a6e06b000084000b42"
                    }
                }
            ],
            "total_cost": 60000,
            "ts": 1625482687,
            "updated_at": "2021-07-05T11:21:43.171000Z",
            "created_at": "2021-07-05T10:58:07.269000Z"
        }
    ]);
    const [orderConfirm, setOrderConfirm] = useState( [
        {
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
                    "quantity": 7,
                    "note": "aa",
                    "dish_in_combo": null,
                    "total_cost": 210000,
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
                    "quantity": 7,
                    "note": "aa",
                    "dish_in_combo": null,
                    "total_cost": 210000,
                    "updated_at": "2021-07-05T10:51:20.838000Z",
                    "created_at": "2021-07-05T10:51:20.838000Z",
                    "detail_item": {
                        "_id": "60c244acc861000091001535",
                        "name": "Lẩu",
                        "cost": 40000,
                        "description": null,
                        "image": "http://165.227.99.160/image/lau.png",
                        "hotpot": false,
                        "category_id": "60c244a6e06b000084000b42"
                    }
                }
            ],
            "total_cost": 60000,
            "ts": 1625482687,
            "updated_at": "2021-07-05T11:21:43.171000Z",
            "created_at": "2021-07-05T10:58:07.269000Z"
        }
    ]);

    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.dispatch(actions.getListConfirmOrderReRequest(page));
        // props.dispatch(actions.getListPaidOrderReRequest(pageComplete));
        //props.dispatch(actions.getDetailConfirmOrderReRequest(table_id));


    }, []);

    console.log('role :' + role);

    const handleEnterVoucher = () => {
        successOn()
        props.dispatch(actions.postEnterVoucherReRequest({data}))
        setTimeout(() => {
            props.dispatch(actions.getDetailConfirmOrderReRequest(orderDetail._id))
        }, 1000)
    };

    const [matchTable, setMatchTable] = useState([]);
    const [checkedState, setCheckedState] = useState([]);

    console.log("checkedStateTestOrder: " + checkedState);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const testMatchTable = updatedCheckedState.map(
            (currentState, index) => {
                if (currentState === true) {
                    return "table_id[" + index + "]=" + (props?.listConfirmOrderReceptionist?.data[index].table_id);
                }
            },
        );
        setMatchTable(testMatchTable.filter(function (el) {
            return el != null;
        }));
    };

    console.log("matchTable: " + 'http://165.227.99.160/api/receptionist/order/confirm/match?' + matchTable.join("&"));
    const [toggleSwitch, settoggleSwitch] = useState(false);
    console.log("toggleSwitch: " + toggleSwitch);

    const [openMatchingSuccess, setOpenMatchingSuccess] = useState(false);
    const [openInvoiceSuccess, setOpenInvoiceSuccess] = useState(false);
    const [openMatchingFail, setOpenMatchingFail] = useState(false);
    const [noEditTable, setNoEditTable] = useState('none');

    const menu = {
        menuChoose: '1',
    }

    const [successOn] = useSound(
        dingAudio,
        {volume: 1}
    );

    const [payOn] = useSound(
        payAudio,
        {volume: 1}
    );
    return (
        <React.Fragment>

                <div>
                    <div className="display-receptionist">
                        <Header item={menu}/>
                        <div align="center" className="receptionist-order">
                            <div align="center" className="col-xl-6">
                                <div className="side-content">
                                    <div className="list-order-re">
                                        <b>
                                            Danh sách order
                                        </b>
                                    </div>
                                    <div className="ra-button-re d-flex">
                                        <div className="col-2"></div>
                                        <div className="col-8 d-flex">
                                            {statusState.map(result => (
                                                <div align="center" className="col-6" style={{width: '100%'}}>
                                                    <label style={{width: '100%'}}>
                                                        <input
                                                            type="radio"
                                                            id={result.id}
                                                            style={{opacity: '0'}}
                                                            className="status-check-re"
                                                            value={result.code}
                                                            name="statusValue"
                                                            checked={displayStatus === result.code}
                                                            // onChange={(e) => {
                                                            //     setStatus(e.target.value)
                                                            //     // props.dispatch(actions.getListConfirmOrderReRequest(page));
                                                            //     // props.dispatch(actions.getListPaidOrderReRequest(pageComplete));
                                                            //     // props.dispatch(actions.getDetailConfirmOrderReRequest())
                                                            // }}
                                                        /> <b
                                                        className="input-status-re">{result.name === "Đã confirm" ? "Đã xác nhận" : result.name}</b>
                                                        <div for={result.id} className="line-color"></div>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                    {(displayStatus === 'confirmed') ? (
                                        <div style={{backgroundColor: '#ffffff'}}>
                                            <PerfectScrollbar className="mh-55">
                                                {orderConfirm?.map((lco, i) => (
                                                    <div>
                                                        <label className="item-menu-re d-flex">
                                                            <input
                                                                onChange={() => {
                                                                    handleOnChange(i);
                                                                }}
                                                                checked={checkedState[i]}
                                                                type="checkbox"
                                                                id={lco.table_id}
                                                                value={lco.table_id}
                                                                name={lco.table_id}
                                                                style={{display: 'none'}}
                                                                className="check-re-order"
                                                                disabled={(toggleSwitch === true) ? false : true}
                                                            />
                                                            <div htmlFor={lco._id}
                                                                 className="col-11 d-flex menu-item-bar-re">
                                                                <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                                                     align="left" className="col-11 d-flex">
                                                                    <div align="center" className="col-4 item-cost-re">
                                                                        <b>{lco.order_code}</b>
                                                                    </div>
                                                                    <div align="center" className="col-4 item-cost-re">
                                                                        <b>{lco.table_name}</b>
                                                                    </div>
                                                                    <div align="center" className="col-4 item-name-re"
                                                                         style={{color: lco.status === "confirmed" ? "lightcoral" : "green"}}>
                                                                        {lco.status === "confirmed" ? "Đã xác nhận" : "Hoàn thành"}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-button-re col-1">
                                                                <Link onClick={(e) => {
                                                                    // window.location.pathname = '/receptionist-home/' + lco.table_id
                                                                    successOn()
                                                                    // props.dispatch(actions.getDetailConfirmOrderReRequest(lco._id))
                                                                    setOrderId(lco._id)
                                                                }}>
                                                                    <a
                                                                        style={{
                                                                            marginRight: 'auto',
                                                                            marginLeft: 'auto'
                                                                        }}
                                                                        className="avatar-xs">
                                                                        <div
                                                                            className="plus-background-color-re avatar-title rounded-circle">
                                                                            <img src={chevonRight}
                                                                                 className="plus-icon-button-re"/>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))
                                                }
                                            </PerfectScrollbar>
                                            <div className="d-flex" style={{height: '70px'}}>
                                                <div className="gop-hoa-don col-4 d-flex" align="left">
                                                    <ReactPaginate
                                                        previousLabel={
                                                            <img src={chevonRight}
                                                                 className="plus-icon-button-re-left-page"/>
                                                        }
                                                        nextLabel={
                                                            <img src={chevonRight}
                                                                 className="plus-icon-button-re-right-page"/>
                                                        }
                                                        pageCount={pageCount}
                                                        onPageChange={changePage}
                                                        containerClassName={"paginationBttns"}
                                                        previousLinkClassName={"previousBttn"}
                                                        nextLinkClassName={"nextBttn"}
                                                        disabledClassName={"paginationDisabled"}
                                                        activeClassName={"paginationActive"}
                                                    />
                                                </div>
                                                <div className="gop-hoa-don col-4" align="right">
                                                    <label style={{width: '50%'}}>
                                                        <input
                                                            className="check-all-button-matching"
                                                            type="checkbox"
                                                            onChange={() => {
                                                                settoggleSwitch(!toggleSwitch)
                                                                // setCheckedState(orderConfirm.length.fill(false))
                                                            }}
                                                            checked={(toggleSwitch === true) ? true : false}
                                                        />
                                                        <div className="choose-all-matching">
                                                            <div className="choose-text-matching">Chọn nhiều hóa đơn
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="gop-hoa-don col-4" align="right"
                                                     style={{height: '60px', alignItems: 'center'}}>
                                                    {(toggleSwitch === true) ? (
                                                        <button
                                                            onClick={() => {

                                                                setOpenMatchingSuccess(true)
                                                                successOn()
                                                                setTimeout(() => {
                                                                    setOpenMatchingSuccess(false)
                                                                    settoggleSwitch(false)
                                                                }, 1500)
                                                            }}
                                                            style={{
                                                                border: '1px solid #FCBC3A'
                                                            }}
                                                            className="button-gop-hoa-don">
                                                            <b className="text-gop-hoa-don">Gộp hóa đơn</b>
                                                        </button>
                                                    ) : (
                                                        <button style={{backgroundColor: '#6a7187'}}
                                                                className="button-gop-hoa-don" disabled={true}>
                                                            <b className="text-gop-hoa-don">Gộp hóa đơn</b>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{backgroundColor: '#ffffff'}}>
                                            <PerfectScrollbar className="mh-55">
                                                {orderComplete.data?.map((lpo, i) => (
                                                    <div>
                                                        <label className="item-menu-re d-flex">
                                                            <input
                                                                type="checkbox"
                                                                // checked={d.select}
                                                                id={lpo._id}
                                                                name={lpo._id}
                                                                style={{display: 'none'}}
                                                                className="check-re-order"
                                                                disabled={true}
                                                            />
                                                            <div htmlFor={lpo._id}
                                                                 className="col-11 d-flex menu-item-bar-re">
                                                                <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                                                     align="left" className="col-11 d-flex">
                                                                    <div align="center" className="col-4 item-cost-re">
                                                                        <b>{lpo.order_code}</b>
                                                                    </div>
                                                                    <div align="center" className="col-4 item-cost-re">
                                                                        <b>{lpo.table_name}</b>
                                                                    </div>
                                                                    <div align="center" className="col-4 item-name-re"
                                                                         style={{color: lpo.status === "confirmed" ? "lightcoral" : "green"}}>
                                                                        {lpo.status === "confirmed" ? "Đã xác nhận" : "Hoàn thành"}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-button-re col-1">
                                                                <Link onClick={(e) => {
                                                                    // window.location.pathname = '/receptionist-home/' + lco.table_id
                                                                    // props.dispatch(actions.getDetailConfirmOrderReRequest(lpo._id))
                                                                    setOrderId(lpo._id)
                                                                    successOn()
                                                                }}>
                                                                    <a
                                                                        style={{
                                                                            marginRight: 'auto',
                                                                            marginLeft: 'auto'
                                                                        }}
                                                                        className="avatar-xs">
                                                                        <div
                                                                            className="plus-background-color-re avatar-title rounded-circle">
                                                                            <img src={chevonRight}
                                                                                 className="plus-icon-button-re"/>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))
                                                }
                                            </PerfectScrollbar>
                                            <div className="d-flex" style={{height: '70px'}}>
                                                <div className="gop-hoa-don col-6 d-flex" align="left">
                                                    <div className="d-flex justify-content-center">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination">
                                                                <li className="page-item">
                                                                    <a
                                                                        style={{borderColor: '#FCBC3A'}}
                                                                        className="page-link"
                                                                        onClick={() => {
                                                                            onButtonClick("prev")
                                                                        }}
                                                                    >
                                                                        <img style={{width: "15px", height: "15px"}}
                                                                             src={chevonRight}
                                                                             className="plus-icon-button-re-left-page"/>
                                                                    </a>
                                                                </li>

                                                                {new Array(numberOfButtons).fill("").map((el, index) => (
                                                                    <li className={`page-item ${index + 1 === pageComplete ? "active-paging" : null}`}>
                                                                        <a
                                                                            className="page-link"
                                                                            onClick={() => {
                                                                                setPageComplete(index + 1)
                                                                                // props.dispatch(actions.getListPaidOrderReRequest(index + 1));
                                                                            }}
                                                                        >
                                                                            {index + 1}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                                <li className="page-item">
                                                                    <a
                                                                        style={{borderColor: '#FCBC3A'}}
                                                                        className="page-link"
                                                                        onClick={() => {
                                                                            onButtonClick("next")
                                                                        }}
                                                                    >
                                                                        <img style={{width: "15px", height: "15px"}}
                                                                             src={chevonRight}
                                                                             className="plus-icon-button-re-right-page"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                                <div className="gop-hoa-don col-6" align="right"
                                                     style={{height: '60px', alignItems: 'center'}}>
                                                    <button style={{backgroundColor: '#6a7187'}}
                                                            className="button-gop-hoa-don" disabled={true}>
                                                        <b className="text-gop-hoa-don">Gộp hóa đơn</b>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div align="center" className="col-xl-6">
                                <div className="side-content">
                                    <div className="list-order-re">
                                        <b>
                                            Chi tiết Order
                                        </b>
                                    </div>
                                    <div style={{height: '75px', backgroundColor: '#F8F8FB'}}
                                         className="ra-button-re d-flex">
                                        <div align="center" className="col-4 detail-order-re">
                                            <div className='detail-order-top-re'>Mã Order</div>
                                            <div
                                                className='detail-order-down-re'>{orderDetail.order_code}</div>
                                        </div>
                                        <div align="center" className="col-4 detail-order-re">
                                            <div className='detail-order-top-re'>Mã Bàn</div>
                                            <div
                                                className='detail-order-down-re'>{orderDetail.table_name}</div>
                                        </div>
                                        <div align="center" className="col-4 detail-order-re">
                                            <div className='detail-order-top-re'>Trạng thái</div>
                                            {orderDetail.done_dish === true ? (
                                                <div
                                                    style={{color: "blue"}}
                                                    className='detail-order-down-re'>
                                                    Phục vụ xong
                                                </div>
                                            ) : (
                                                <div
                                                    style={{color: (orderDetail.status === "confirmed" || orderDetail.status === "matching") ? "lightcoral" : "green"}}
                                                    className='detail-order-down-re'>
                                                    {orderDetail.status === "confirmed"
                                                        ? "Đã xác nhận" : orderDetail.status === "matching"
                                                            ? "Gộp đơn" : orderDetail.status === "completed"
                                                                ? "Hoàn thành" : null}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{backgroundColor: '#ffffff'}}>
                                        <PerfectScrollbar className="mh-55">
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                border: '0px solid #ffffff',
                                            }} className="card-order d-flex">
                                                <div align="left" className="col-3 card-detail-order-text">
                                                    <b>Món ăn</b>
                                                </div>
                                                <div align="left" className="col-2 card-detail-order-text">
                                                    <b>Giá tiền</b>
                                                </div>
                                                <div style={{paddingLeft: '0px'}} align="center"
                                                     className="col-2 card-detail-order-text">
                                                    <b>Số lượng</b>
                                                </div>
                                                <div align="right" className="col-2 card-detail-order-text">
                                                    <b>Tổng tiền</b>
                                                </div>
                                                <div style={{marginRight: '30px'}} align="right"
                                                     className="col-3 card-detail-order-text">
                                                    <b>Trạng thái</b>
                                                </div>
                                            </div>
                                            {orderDetail.item.map((it, i) => (
                                                    <div className="card-order d-flex">
                                                        <div align="left"
                                                             className="col-3 card-detail-order-text-child">
                                                            <div>{it?.detail_item?.name}</div>
                                                        </div>
                                                        <div align="left"
                                                             className="col-2 card-detail-order-text-child">
                                                            <div>{it?.detail_item?.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                                        </div>
                                                        <div style={{paddingLeft: '0px'}} align="center"
                                                             className="col-2 card-detail-order-text-child">
                                                            {(orderDetail.status === 'confirmed') ? (
                                                                <div style={{
                                                                    backgroundColor: '#ffffff',
                                                                    borderRadius: '30px'
                                                                }}
                                                                     className="d-flex">
                                                                    <div align="center" className="col-4">
                                                                        <a onClick={() => {
                                                                            if (it?.quantity > 0) {
                                                                                props.dispatch(actions.postCustomizeNumberItemReRequest(orderDetail._id, it?.item_id, 0))
                                                                                setTimeout(() => {
                                                                                    props.dispatch(actions.getDetailConfirmOrderReRequest(orderDetail._id))
                                                                                    setOrderId(orderDetail._id)
                                                                                }, 1000)
                                                                            }
                                                                        }}>
                                                                            <img src={mathMinus}/>
                                                                        </a>
                                                                    </div>
                                                                    <div align="center" className="col-4">
                                                                        {it?.quantity}
                                                                    </div>
                                                                    <div align="center" className="col-4">
                                                                        <a onClick={() => {
                                                                            props.dispatch(actions.postCustomizeNumberItemReRequest(orderDetail._id, it?.item_id, 1))
                                                                            setTimeout(() => {
                                                                                props.dispatch(actions.getDetailConfirmOrderReRequest(orderDetail._id))
                                                                                setOrderId(orderDetail._id)
                                                                            }, 1000)
                                                                        }}>
                                                                            <img src={mathPlus}/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div>{it?.quantity}</div>
                                                            )}
                                                        </div>
                                                        <div align="right"
                                                             className="col-2 card-detail-order-text-child">
                                                            <b>{it?.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>
                                                        </div>
                                                        <div align="right"
                                                             className="col-3 card-detail-order-text-child"
                                                             style={{
                                                                 color: (orderDetail.status == "confirmed" || orderDetail.status === "matching") ? "lightcoral" : "green",
                                                                 marginRight: '30px'
                                                             }}>
                                                            {orderDetail.status === "confirmed" ? "Đã xác nhận" : orderDetail.status === "matching" ? "Gộp đơn" : "Hoàn thành"}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </PerfectScrollbar>
                                        <div style={{height: '70px', width: '98%'}} className="d-flex">
                                            <div align="left" className="col-3">
                                                <div style={{
                                                    fontFamily: 'Cabin',
                                                    fontStyle: 'normal',
                                                    fontWeight: 'normal',
                                                    fontSize: '12px',
                                                    lineHeight: '15px',
                                                    color: '#000000',
                                                }}>Tổng tiền:
                                                </div>
                                                <div style={{
                                                    fontFamily: 'Cabin',
                                                    fontStyle: 'normal',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    lineHeight: '22px',
                                                    color: '#000000',
                                                }}>
                                                    {(orderDetail.new_total_cost !== undefined) ?
                                                        (orderDetail.new_total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) :
                                                        (orderDetail.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))}
                                                </div>
                                                {(orderDetail.new_total_cost !== undefined) ?
                                                    (<div
                                                        style={{
                                                            fontFamily: 'Cabin',
                                                            fontStyle: 'normal',
                                                            fontWeight: 'bold',
                                                            fontSize: '12px',
                                                            lineHeight: '15px',
                                                            color: '#000000',
                                                        }}
                                                    >
                                                        <div>Giá
                                                            gốc: {orderDetail.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                                        <div>Voucher: {orderDetail.voucher} %</div>
                                                    </div>) : (null)}
                                            </div>
                                            <div align="left" className="col-5">
                                                {(orderDetail.status === "confirmed" || orderDetail.status === "matching") ? (
                                                    <div>
                                                        <div className="d-flex">
                                                            <div>
                                                                <input style={{
                                                                    height: 45,
                                                                    width: '100%',
                                                                    borderRadius: '10px'
                                                                }}
                                                                       type="text"
                                                                       name="voucher"
                                                                       placeholder="Mã giảm giá..."
                                                                    //value={search}
                                                                       onChange={(e) => {
                                                                           if (e.target.value === "") {
                                                                               setVoucher(0)
                                                                               setNoEditTable('none')
                                                                           } else if (e.target.value <= 100 && e.target.value >= 0) {
                                                                               setVoucher(e.target.value)
                                                                               setNoEditTable('none')
                                                                           } else if (e.target.value.match(/[0-9]/g) === null) {
                                                                               setNoEditTable('block')
                                                                           } else {
                                                                               setNoEditTable('block')
                                                                           }

                                                                       }}
                                                                />
                                                            </div>
                                                            {noEditTable === 'block' ? (
                                                                <button
                                                                    disabled={true}
                                                                    style={{
                                                                        height: 45,
                                                                        width: 45,
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#6a7187',
                                                                        fontFamily: 'Cabin',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: 'bold',
                                                                        border: '1px solid #6a7187'
                                                                    }}
                                                                >
                                                                    Xác nhận
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={handleEnterVoucher}
                                                                    style={{
                                                                        height: 45,
                                                                        width: 45,
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#FCBC3A',
                                                                        fontFamily: 'Cabin',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: 'bold',
                                                                        border: '1px solid #FCBC3A'
                                                                    }}
                                                                >
                                                                    Xác nhận
                                                                </button>
                                                            )}
                                                        </div>
                                                        <div style={{display: noEditTable}}>
                                                            <i style={{
                                                                fontFamily: 'Cabin',
                                                                fontSize: '15px',
                                                                color: 'red'
                                                            }}>
                                                                Voucher 0% đến 100 %, hãy nhập lại
                                                            </i>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        style={{
                                                            height: 45,
                                                            width: 100,
                                                            borderRadius: '10px',
                                                            border: '2px solid #FCBC3A',
                                                            fontFamily: 'Cabin',
                                                            fontStyle: 'normal',
                                                            fontWeight: 'bold',
                                                            fontSize: '16px',
                                                            backgroundColor: '#FFEFCD',
                                                        }}
                                                    >
                                                        Voucher: {orderDetail.voucher} %
                                                    </div>
                                                )}
                                            </div>
                                            <Modal size="md" isOpen={openInvoiceConfirm}
                                                   toggle={() => setOpenInvoiceConfirm(false)} className="pt-5">
                                                <form align='center'
                                                      style={{
                                                          marginTop: '30px',
                                                          marginBottom: '30px',
                                                          borderRadius: '20px',
                                                      }}
                                                >
                                                    <div><b style={{fontSize: '20px', fontFamily: 'Cabin'}}>Các món
                                                        chưa xong vẫn xuất hóa đơn ?</b></div>
                                                    <div className="modal-body">
                                                        <Row>
                                                            <Col lg="6">
                                                                <div style={{width: '100%', paddingBottom: '20px'}}>
                                                                    <Button
                                                                        onClick={() => {
                                                                            props.dispatch(actions.getInvoiceCompletedOrderReRequest(_id))
                                                                            setOpenInvoiceSuccess(true)
                                                                            payOn()
                                                                            setTimeout(() => {
                                                                                setOpenInvoiceConfirm(false)
                                                                                props.history.push('/receptionist-home')
                                                                                setOpenInvoiceSuccess(false)
                                                                                // props.dispatch(actions.getListConfirmOrderReRequest(page));
                                                                                // props.dispatch(actions.getListPaidOrderReRequest(pageComplete));
                                                                                // props.dispatch(actions.getDetailConfirmOrderReRequest())
                                                                            }, 1500)
                                                                        }}
                                                                        style={{
                                                                            width: '80%',
                                                                            backgroundColor: '#FCBC3A',
                                                                            color: '#000000',
                                                                            border: '1px solid #FCBC3A'
                                                                        }}>
                                                                        <div style={{
                                                                            color: '#000000',
                                                                            fontWeight: 'bold',
                                                                            fontFamily: 'Cabin'
                                                                        }}>Xuất hóa đơn
                                                                        </div>
                                                                    </Button>
                                                                </div>
                                                            </Col>
                                                            <Col lg="6">
                                                                <div style={{width: '100%', paddingBottom: '20px'}}>
                                                                    <Button
                                                                        onClick={() => {
                                                                            setOpenInvoiceConfirm(false)
                                                                        }}
                                                                        style={{
                                                                            width: '80%',
                                                                            backgroundColor: '#EEEEEE',
                                                                            color: '#000000',
                                                                            border: '1px solid #EEEEEE'
                                                                        }}>
                                                                        <div style={{
                                                                            color: '#000000',
                                                                            fontWeight: 'bold',
                                                                            fontFamily: 'Cabin'
                                                                        }}>Không xuất
                                                                        </div>
                                                                    </Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </form>
                                            </Modal>
                                            <div align="right" className="col-4">
                                                {(orderDetail.status === "confirmed" || orderDetail.status === "matching")
                                                    ? (
                                                        <button
                                                            onClick={() => {
                                                                if (orderDetail.done_dish === true) {
                                                                    props.dispatch(actions.getInvoiceCompletedOrderReRequest(_id))
                                                                    setOpenInvoiceSuccess(true)
                                                                    payOn()
                                                                    setTimeout(() => {
                                                                        props.history.push('/receptionist-home')
                                                                        setOpenInvoiceSuccess(false)
                                                                        props.dispatch(actions.getListConfirmOrderReRequest(page));
                                                                        props.dispatch(actions.getListPaidOrderReRequest(pageComplete));
                                                                        props.dispatch(actions.getDetailConfirmOrderReRequest())
                                                                    }, 1500)
                                                                } else {
                                                                    setOpenInvoiceConfirm(true);
                                                                }
                                                            }}
                                                            style={{
                                                                backgroundColor: '#FCBC3A',
                                                                borderRadius: '10px',
                                                                height: '45px',
                                                                width: '100%',
                                                                border: '1px solid #FCBC3A'
                                                            }}>
                                                            <b style={{
                                                                fontFamily: 'Cabin',
                                                                fontStyle: 'normal',
                                                                fontWeight: '600',
                                                                fontSize: '13px',
                                                                lineHeight: '16px',
                                                                color: '#000000',
                                                            }}>Xuất hóa đơn</b>
                                                        </button>
                                                    )
                                                    : (
                                                        <button disabled={true} style={{
                                                            backgroundColor: '#6a7187',
                                                            borderRadius: '10px',
                                                            height: '45px',
                                                            width: '100%',
                                                            display: 'none'
                                                        }}>
                                                            <b style={{
                                                                fontFamily: 'Cabin',
                                                                fontStyle: 'normal',
                                                                fontWeight: '600',
                                                                fontSize: '13px',
                                                                lineHeight: '16px',
                                                                color: '#1E1C19',
                                                            }}>Xuất hóa đơn</b>
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openMatchingSuccess}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Gộp Order thành công !</b>
                            </div>
                        </div>
                    </Modal>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openInvoiceSuccess}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Xuất hóa đơn thành công !</b>
                            </div>
                        </div>
                    </Modal>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openMatchingFail}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "red", fontSize: '50px'}}
                               className="bx bx-calendar-exclamation bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Bạn phải chọn nhiều hơn 1 Order để gộp !</b>
                            </div>
                        </div>
                    </Modal>
                    <Footer/>
                </div>

        </React.Fragment>
    );
}
const mapStateToProps = (state) => {
    return {
        // totalsOfNotification:
        // state.Notification.totalOfNotifications.totalNotifications,
        listConfirmOrderReceptionist: state.Receptionist.getListConfirmOrderReceptionist.listConfirmOrderReceptionist,
        detailConfirmOrderReceptionist: state.Receptionist.getDetailConfirmOrderReceptionist.detailConfirmOrderReceptionist,
        enterVoucherReceptionist: state.Receptionist.postEnterVoucherReceptionist.enterVoucherReceptionist,
        invoiceCompletedReceptionist: state.Receptionist.getInvoiceCompletedReceptionist.invoiceCompletedReceptionist,
        listPaidOrderReceptionist: state.Receptionist.getListPaidOrderReceptionist.listPaidOrderReceptionist,
        listCustomizeNumberOfItemReceptionist: state.Receptionist.postCustomizeNumberOfItemReceptionist.listCustomizeNumberOfItemReceptionist,
    };
};

export default withNamespaces()(connect(mapStateToProps)(OrderList));
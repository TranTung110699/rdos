import React, {useState, Component, useEffect} from "react";

//Import scss
import "../../../assets/scss/custom/pages/customer/detail.scss";
import {Link} from "react-router-dom";

import Invalid from "../Invalid";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import * as actions from "../../../store/customer/actions";
import {authHeaderCus, authHeaderGetApiCus} from "../../../helpers/jwt-token-access/auth-token-header";
import left from "../../../assets/images/customer/chevron-left-o.png";
import trash from "../../../assets/images/customer/trash.png";
import PerfectScrollbar from "react-perfect-scrollbar";
import close from "../../../assets/images/customer/close.png";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {Modal} from "reactstrap";
import useSound from 'use-sound';
import wrongAudio from '../../../assets/audio/incorrect.swf.mp3';
import dingAudio from '../../../assets/audio/ding-sound-effect_2.mp3';

const Cart = (props) => {

    const [openLoadDe, setOpenLoadDe] = useState(false);
    const [openSendOrder, setOpenSendOrder] = useState(false);
    const [openLoadCheck, setOpenLoadCheck] = useState(false);

    const [itemInCart, setItemInCart] = useState({
        "table_id": "60bf956e37610000b8004ec6",
        "item_in_cart": [
            [
                {
                    "_id": "60c244acc861000091001532",
                    "name": "Combo nướng 129k",
                    "cost": 129000,
                    "description": null,
                    "image": "https://fv9-3.failiem.lv/thumb_show.php?i=xtuztk6cs&view",
                    "hotpot": true,
                    "category_id": "60c244a6e06b000084000b42",
                    "quantity": "3",
                    "note": "aa",
                    "total_cost": 387000,
                    "dish_in_combo": {
                        "dish1": "Bo",
                        "dish2": "Lon"
                    }
                }
            ]
        ],
        "total_cost": 387000
    });

    useEffect(() => {
        // props.dispatch(actions.getCartRequest());
    }, []);

    const backPage = () => {
        props.history.push("/customer-menu");
        props.dispatch(actions.getFoodInComboRequest());
    }

    console.log("test :" + props?.dataSendOrder)

    const [successOn] = useSound(
        dingAudio,
        { volume: 1 }
    );

    const [wrongOn] = useSound(
        wrongAudio,
        { volume: 1 }
    );

    return (
        <React.Fragment>
            <div className="display-customer">
                <div className="header-menu">
                    <div className="d-flex">
                        <div className="home-icon col-2">
                            <a onClick={backPage}>
                                <img style={{width: '22px', height: '22px'}} src={left} className="icon-button"/>
                            </a>
                        </div>
                        <div align="center" className="menu-search col-8">
                            <div className="mt-2 mb-2">
                                <span className="avatar-title bg-light span-table">
                                    <div className="div-table">Món đã chọn</div>
                                </span>
                            </div>
                        </div>
                        <div align="right" className="home-icon col-2">
                            <a onClick={() => {
                                // props.dispatch(actions.deleteAllFromCartRequest())
                                setOpenLoadDe(true);
                                setTimeout(() => {
                                    props.history.push('/customer-menu')
                                    // props.dispatch(actions.getFoodInComboRequest())
                                    setOpenLoadDe(false)
                                }, 1000)
                            }}>
                                <img style={{width: '19px', height: '21px'}} src={trash} className="icon-button"/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div align="center" style={{
                            height: '60px',
                            backgroundColor: '#F8F8FB',
                            paddingTop: '35px',
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
                        </div>
                        <div style={{marginTop: '20px'}} className="cover-list">
                            <div className="side-list-menu">
                                <PerfectScrollbar className="list-menu">
                                    {itemInCart.item_in_cart?.map((iic, index) => (
                                        <div className="item-menu d-flex">
                                            <div className="col-11 d-flex menu-item-bar">
                                                <Link style={{width: '100%'}} to={`/customer-detail-combo/${iic?._id}`}>
                                                    <div align="left" className="col-11 d-flex">
                                                        <div align="left" className="col-3" style={{marginLeft: '-12px'}}>
                                                            <img src="https://fv9-3.failiem.lv/thumb_show.php?i=xtuztk6cs&view" style={{border: '1px solid grey'}} alt="" height='65px' width='65px'/>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="item-name"><b>{iic?.name}</b></div>
                                                            <div
                                                                className="item-cost ">{(387000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                            </div>
                                                        </div>
                                                        <div align='right' className="col-1" style={{
                                                            fontFamily: 'Cabin',
                                                            fontStyle: 'normal',
                                                            fontWeight: 'bold',
                                                            fontSize: '16px',
                                                            lineHeight: '17px',
                                                            textAlign: 'right',
                                                            color: '#1E1C19',
                                                            paddingTop: '25px'
                                                        }}>3</div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="add-button col-1">
                                                <a onClick={() => {

                                                    setOpenLoadDe(true);
                                                    setTimeout(() => {
                                                        // props.dispatch(actions.getCartRequest())
                                                    }, 600)
                                                    setTimeout(() => {
                                                        setOpenLoadDe(false);
                                                        props.history.push("/customer-menu")
                                                    }, 1800)
                                                }}>
                                                    <div style={{
                                                        marginRight: 'auto',
                                                        marginLeft: 'auto'
                                                    }}
                                                         className="avatar-xs">
                                                        <div
                                                            className="plus-background-color avatar-title rounded-circle mt-2"
                                                            style={{backgroundColor: 'red'}}>
                                                            <img src={close} className="plus-icon-button"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    {itemInCart.item_in_cart?.length > 0 ? (null) : (
                                        <div align='center'>
                                            <b
                                                style={{
                                                    fontFamily: 'Cabin',
                                                    fontSize: '16px',
                                                }}
                                            >Bạn chưa chọn món nào</b>
                                            <div
                                                style={{
                                                    fontFamily: 'Cabin',
                                                    fontSize: '14px',
                                                }}
                                            >Hãy chọn món bạn thích nhé
                                            </div>
                                            <div align='center' onClick={() => {
                                                backPage()
                                            }}
                                                 style={{
                                                     backgroundColor: '#FCBC3A',
                                                     border: '1px solid #FCBC3A',
                                                     borderRadius: '10px',
                                                     height: '30px',
                                                     fontFamily: 'Cabin',
                                                     fontSize: '16px',
                                                     width: '60%'
                                                 }}
                                            >
                                                <b>Quay về menu</b>
                                            </div>
                                        </div>
                                    )}
                                </PerfectScrollbar>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart">
                    {itemInCart.item_in_cart.length > 0 ? (
                        <button className="cart-button d-flex"
                                style={{
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                }}
                                onClick={() => {
                                    setOpenSendOrder(true);
                                    successOn()
                                    setTimeout(() => {
                                        setOpenSendOrder(false);
                                        props.history.push('/customer-menu')
                                    }, 2000)

                                }}>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '17px',
                                color: '#1E1C19',
                                marginTop: 'auto',
                                marginBottom: 'auto'
                            }} align="left" className="col-6">
                                <b style={{color: '#000000'}}>{itemInCart.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd</b>
                            </div>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '17px',
                                color: '#1E1C19',
                                marginTop: 'auto',
                                marginBottom: 'auto'
                            }} align="right" className="col-6">
                                Gửi yêu cầu đặt món
                            </div>
                        </button>
                    ) : (<Footer/>)}
                </div>
                <Modal align="center" style={{
                    width: '150px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    height: '100px',
                    marginTop: '200px',
                    marginBottom: "auto",
                }} isOpen={openLoadDe}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-loader bx-spin"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Đang xóa!!!</b>
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
                }} isOpen={openSendOrder}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-calendar-check bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Đặt món thành công !</b>
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
                }} isOpen={openLoadCheck}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "red", fontSize: '50px'}}
                           className="bx bx-calendar-exclamation bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Phục vụ đang xử order trước đó !</b>
                        </div>
                    </div>
                </Modal>
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
        dataSearch: state.Customer.getAllSearch.allSearch,
        dataCart: state.Customer.getCart.dataCart,
        dataDeleteFromCart: state.Customer.deleteFromCart.dataDeleteFromCart,
        dataDeleteAllFromCart: state.Customer.deleteAllFromCart.dataDeleteAllFromCart,
        dataSendOrder: state.Customer.sendOrder.dataSendOrder,
        allQueueOrder: state.Customer.getCheckQueueOrder.allQueueOrder,
    };
};

export default withNamespaces()(connect(mapStateToProps)(Cart))
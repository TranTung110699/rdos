import React, {useState, useEffect} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {withRouter} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import NotFound from "../../Authentication/Page401";
import Header from "../home/myHeader";
import TableNav from "./TableNav";
import {
    getQueueOrderRequest,
    postCancelQueueOrderRequest,
    postCloseTableRequest,
    postConfirmQueueOrderRequest, postCustomizeQueueRequest, postDeleteQueueItemRequest
} from "../../../store/post/actions";
import {getSearchItemRequest, getTableRequest, postUpdateTableRequest} from "../../../store/notifications/actions";
import {connect} from "react-redux";
import {apiError} from "../../../store/auth/login/actions";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {Button, Modal} from "reactstrap";
//scss
import "../../../assets/scss/custom/pages/waiter/detailTable.scss";
//image
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import Search from "../../../assets/images/waiter/search.png";
import mathPlus from "../../../assets/images/customer/math-plus.png";
import mathMinus from "../../../assets/images/customer/math-minus.png";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";
import firebase from "../../../helpers/firebase";
import * as actions from "../../../store/receptionist/actions";

const ConfirmOrder = (props) => {
    const [role, setrole] = useState([]);

    const location = useLocation();

    const {dataTableByID} = props;

    const {dataUpdateTable} = props;

    const {dataQueueOrder} = props;

    const {dataSearchItem} = props;

    const [searchItem, setSearchItem] = useState('');

    const [openSearch, setOpenSearch] = useState(false);

    const [openLoadPa, setOpenLoadPa] = useState(false);

    const [openCancel, setOpenCancel] = useState(false);

    const [openDele, setOpenDele] = useState(false);

    const [open, setOpen] = useState(false);

    const searchClose = () => setOpenSearch(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [number, setNumber] = useState();
    const [queueOrder, setQueueOrder] = useState({
        "_id": "60ddef7e551800007d0037b6",
        "table_id": "60bf956e37610000b8004ec6",
        "table_name": "Bàn 2",
        "number_of_customer": 7,
        "status": "queue",
        "item": [
            {
                "_id": "60ddef79551800007d0037b5",
                "table_id": "60bf956e37610000b8004ec6",
                "item_id": "60c244acc861000091001532",
                "quantity": 7,
                "note": "aa",
                "dish_in_combo": [
                    "Bo",
                    "Lon"
                ],
                "total_cost": 903000,
                "updated_at": "2021-07-01T16:38:17.646000Z",
                "created_at": "2021-07-01T16:38:17.646000Z",
                "detail_item": {
                    "_id": "60c244acc861000091001532",
                    "name": "Combo nướng 129k",
                    "cost": 129000,
                    "description": null,
                    "image": "http://165.227.99.160/image/nuong-129.png",
                    "hotpot": true,
                    "category_id": "60c244a6e06b000084000b42"
                }
            }
        ],
        "total_cost": 903000,
        "ts": 1625157502,
        "updated_at": "2021-07-01T16:38:22.742000Z",
        "created_at": "2021-07-01T16:38:22.742000Z"
    });
    const customizeNumberSub = (item) => {
        const aItem = {
            _id: dataQueueOrder._id,
            item_id: item.item_id,
            status: 0
        }
        props.postCustomizeQueueRequest(aItem);
        setTimeout(() => {
            props.getQueueOrderRequest(value);
        }, 500)
    }

    const customizeNumberAdd = (item) => {
        const aItem = {
            _id: dataQueueOrder._id,
            item_id: item.item_id,
            status: 1
        }
        props.postCustomizeQueueRequest(aItem);
        setTimeout(() => {
            props.getQueueOrderRequest(value);
        }, 500)
    }

    const value = {
        // table_id: location.state._id,
        // number_of_customer: number,
    }


    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.getTableRequest(value);
        // props.getQueueOrderRequest(value);
        //
        // const todoRefPay = firebase.database().ref('waiter');
        // todoRefPay.on('value', (snapshot) => {
        //     if (snapshot.numChildren() > 0) {
        //         props.getTableRequest(value);
        //         props.getQueueOrderRequest(value);
        //     }
        // });

    }, [dataUpdateTable]);

    function postUpdateNumberCustomer() {
        props.postUpdateTableRequest(value)
        setOpen(false);
    }

    function redirect() {
        props.history.push('/waiter-view-all-table');
    }

    function postCloseTable() {
        props.postCloseTableRequest(value);
        setOpen(false);
        setTimeout(() => {
            redirect();
        }, 500)
    }

    const cancel = () => {
        const dataCancel = {
            _id: dataQueueOrder._id
        }
        props.postCancelQueueOrderRequest(dataCancel);
        setOpenCancel(true);
        setTimeout(() => {
            setOpenCancel(false);
            props.getTableRequest(value);
            props.getQueueOrderRequest(value);
            //window.location.reload();
        }, 1500)
    }

    const deleteQueueItem = (id) => {
        const itemDelete = {
            table_id: location.state._id,
            item_id: id
        }
        props.postDeleteQueueItemRequest(itemDelete);
        setOpenDele(true);
        setTimeout(() => {
            props.getTableRequest(value);
            props.getQueueOrderRequest(value);
            setOpenDele(false);
        }, 1500)
    }

    const confirm = () => {
        props.postConfirmQueueOrderRequest(value)
    }

    const table = {
        // _id: location.state._id,
        // username: dataTableByID.username,
        navChoose: '2',
    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    const [noEditTable, setNoEditTable] = useState('none');

    const [successOn] = useSound(
        dingAudio,
        { volume: 1 }
    );
    return (
        <React.Fragment>
            <div className="display-customer">

                    <div className="container_detail">
                        <div style={{
                            position: 'fixed',
                            width: '100%',
                            zIndex: '100',
                            backgroundColor: '#ffffff'
                        }}>
                            <Header/>
                            <TableNav item={table}/>
                        </div>
                        <div style={{paddingTop: '160px'}} className="number_customer_form">
                            <p align="center">Số Khách Tại Bàn: {dataTableByID.number_of_customer}</p>

                            <button className="btn1" onClick={postCloseTable}>Đóng Bàn</button>

                            <button className="btn2" onClick={handleClickOpen}>Sửa Số Khách</button>

                            <button className="btn3" onClick={() => {
                                setSearchItem('');
                                setOpenSearch(true);
                            }}>Thêm Món
                            </button>
                        </div>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title" className="dia_title">
                                <div align="center"><b>Nhập số khách</b></div>
                            </DialogTitle>
                            <DialogContent>
                                <div align="center">Nhập Từ 1 Đến {dataTableByID.max_customer}</div>
                            </DialogContent>
                            <DialogContent>
                                <input
                                    className="text_field"
                                    type="text"
                                    placeholder="Nhập Số Khách"
                                    onChange={event => {
                                        if(event.target.value.match(/[1-9]/g) === null){
                                            setNoEditTable("block")
                                        }else{
                                            setNoEditTable("none")
                                            setNumber(event.target.value)
                                        }
                                    }}
                                    required
                                    maxLength="2"
                                    onInput={maxLengthCheck}
                                />
                                <div style={{display: noEditTable}}>
                                    <i style={{
                                        fontFamily: 'Cabin',
                                        fontSize: '15px',
                                        color: 'red'
                                    }}>
                                        Số khách hàng không phù hợp
                                    </i>
                                </div>
                            </DialogContent>
                            <DialogActions>

                                <div align="center" style={{
                                    width: '100%',
                                }}>
                                    <button style={{
                                        backgroundColor: "#E5E5E5",
                                        color: "#1E1C19",
                                        width: '45%',
                                        borderRadius: '10px',
                                        height: '40px',
                                        border: '1px solid #E5E5E5',
                                        margin: '5px'
                                    }} onClick={handleClose} color="primary">
                                        Hủy
                                    </button>

                                    <button style={{
                                        backgroundColor: "#FCBC3A",
                                        color: "#1E1C19",
                                        width: '45%',
                                        borderRadius: '10px',
                                        height: '40px',
                                        border: '1px solid #FCBC3A',
                                        margin: '5px'
                                    }} onClick={postUpdateNumberCustomer} color="primary">
                                        Xác Nhận
                                    </button>
                                </div>

                            </DialogActions>
                        </Dialog>

                        <div style={{textAlign: "center", justifycontent: "center",height:"350px", paddingBottom: '50px'}}>
                            <PerfectScrollbar>
                                <div className="list-Item_detail">

                                    {queueOrder.item?.map((d, index) => (
                                            <div className="item-form-detail" key={index}>
                                                <div className="item-form-one">
                                                    <span style={{
                                                        fontFamily: 'Cabin',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold'
                                                    }}>{d.detail_item.name}</span>
                                                    <span style={{
                                                        fontSize: "12px", fontWeight: "normal",
                                                        lineHeight: "15px", fontFamily: 'Cabin'
                                                    }}>{d.total_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}VNĐ</span>
                                                </div>
                                                <div style={{display: 'flex', height: '35px', top:'calc(100%-35px)'}} className="save-button">
                                                    <span onClick={() => {
                                                        customizeNumberSub(d)
                                                    }}><img className="minus-button-waiter" src={mathMinus}/></span>
                                                    <span style={{
                                                        marginTop:'2px'
                                                    }}>{d.quantity}</span>
                                                    <span onClick={() => {
                                                        customizeNumberAdd(d)
                                                    }}><img className="plus-button-waiter" src={mathPlus}/></span>
                                                </div>
                                                <div className="contain_button_detail" onClick={() => {
                                                    deleteQueueItem(d.item_id)
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

                            <div className="btn-form">
                                <p className="btn_1" onClick={() => {
                                    cancel();

                                }}>Hủy</p>
                                <p className="btn_2" onClick={() => {
                                    successOn();
                                    confirm();
                                    setOpenLoadPa(true);
                                    setTimeout(() => {
                                        props.getTableRequest(value);
                                        props.getQueueOrderRequest(value);
                                        setOpenLoadPa(false);
                                    }, 1000)
                                }}>Xác Nhận</p>
                            </div>

                        </div>
                    </div>

                <Footer/>
                <Modal align="center" style={{
                    width: '350px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    height: '100px',
                    marginTop: '200px',
                    marginBottom: "auto",
                }} isOpen={openLoadPa}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-calendar-check bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Xác Nhận Thành Công</b>
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
                }} isOpen={openCancel}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-calendar-check bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Hủy Thành Công</b>
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
                }} isOpen={openDele}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-calendar-check bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Xóa Thành Công</b>
                        </div>
                    </div>
                </Modal>
                <Modal align="center" style={{
                    width: '350px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '150px',
                    marginBottom: "auto",
                }} isOpen={openSearch} toggle={searchClose}>

                    <div className="Search-item-form">
                        <h3 style={{margin: "15px 0"}}>Thêm Món</h3>
                        <div className="search-input">
                            <input className="search-input-field" type="text" onChange={(e) => {
                                setSearchItem(e.target.value);
                                props.getSearchItemRequest(e.target.value, location.state._id);
                            }} placeholder="Tìm kiếm..." autoFocus/>
                            <img style={{width: '20px', height: '20px'}} src={Search}/>
                        </div>
                        <div>
                            {searchItem != '' ? <div style={{textAlign: "center", justifycontent: "center"}}>
                                <PerfectScrollbar style={{height: '300px'}}>
                                    <div className="list-Item_detail">
                                        {dataSearchItem?.map((d, index) => (
                                                <div style={{height:'60px'}} className="item-form-detail" key={index}>
                                                    <img style={{marginTop: '-12px'}} src={d?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    <div style={{paddingTop: 'auto',paddingBottom:'auto'}} className="item-form-one">
                                                        <div style={{fontWeight: "bold", fontSize: "14px", fontFamily:'Cabin'}}>{d.name}</div>
                                                        <div style={{
                                                            fontSize: "12px",
                                                            fontWeight: "normal",
                                                            lineHeight: "15px",
                                                            fontFamily:'Cabin'
                                                        }}>{d.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}VNĐ</div>
                                                    </div>
                                                    <Link to={{
                                                        pathname: '/waiter-detail-table-detail-item',
                                                        state: {
                                                            _id: d._id,
                                                            table_id: location.state._id,
                                                            number_customer: dataTableByID.number_of_customer,
                                                        }
                                                    }}>
                                                        <div className="search_plus_button_detail"
                                                        ><p>+</p></div>
                                                    </Link>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </PerfectScrollbar>
                            </div> : ''}
                        </div>

                    </div>
                </Modal>
            </div>
            <div className="none-display-customer">
                <Invalid/>
            </div>

        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    return {
        dataUpdateTable: state.Notification.postUpdateTable.UpdateTableByID,
        dataTableByID: state.Notification.getTable.TableByID,
        dataQueueOrder: state.Posts.getQueueOrder.dataGetQueueOrder,
        dataSearchItem: state.Notification.getSearchItem.dataSearchItem,
    };
};

export default withRouter(connect(mapStateToProps, {
    getSearchItemRequest,
    postCustomizeQueueRequest,
    postDeleteQueueItemRequest,
    postConfirmQueueOrderRequest,
    postCancelQueueOrderRequest,
    getQueueOrderRequest,
    getTableRequest,
    postUpdateTableRequest,
    postCloseTableRequest,
    apiError
})(ConfirmOrder));

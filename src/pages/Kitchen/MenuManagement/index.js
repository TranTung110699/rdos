import React, {useEffect, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../../assets/scss/custom/pages/kitchen/kitchen.scss";

import Header from "../../Kitchen/HeaderKitchen";
import NotFound from "../../Authentication/Page401";
import * as actions from "../../../store/kitchen/actions";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import mathMinus from "../../../assets/images/receptionist/math-minus.png";
import mathPlus from "../../../assets/images/receptionist/math-plus.png";
import ReactPaginate from "react-paginate";
import chevonRight from "../../../assets/images/receptionist/chevron-down.png";
import trash from "../../../assets/images/receptionist/trashre.png";
import changeServe from "../../../assets/images/waiter/arrows-exchange.png";
import searchImg from "../../../assets/images/customer/search.png";
import {Modal} from "reactstrap";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";

const KitchenMenu = (props) => {
    const [search, setSearch] = useState('');
    const [openUpdateStatus, setOpenUpdateStatus] = useState(false);
    let statusState = [
        {id: 's1', code: "confirmed", name: "Đã confirm"},
        {id: 's2', code: "paid", name: "Đã thanh toán"}
    ];

    const [displayStatus, setStatus] = useState("confirmed");
    const [allListItem, setAllListItem] = useState([
        {
            "_id": "60e5c89e305d0000d000737c",
            "name": "Rượu nếp trắng 500ml",
            "cost": 50000,
            "description": "abc",
            "image": "http://165.227.99.160/image/nep-trang.png",
            "hotpot": false,
            "category_id": "60c083b495040000200069a3",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007062",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Ba chỉ bò",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007063",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Ba chỉ lợn",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007064",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Xúc xích",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007065",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Sụn",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007066",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Bắp bò",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007067",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Kim chi",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007068",
            "pid": [
                "60e5c89e305d0000d0007372",
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Rau củ quả",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db007069",
            "pid": [
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Gà",
            "is_sold_out": false
        },
        {
            "_id": "60e5c8ac7b530000db00706a",
            "pid": [
                "60e5c89e305d0000d0007373",
                "60e5c89e305d0000d0007374"
            ],
            "name": "Mực",
            "is_sold_out": false
        }
    ]);

    const [pageSize] = useState(10)

    const [page, setPage] = useState(1)
    const pageCount = Math.ceil(props?.allViewAllItem?.total / pageSize);
    const changePage = ({selected}) => {
        setPage(selected + 1);
        props.dispatch(actions.getAllListItemRequest(search,selected + 1,pageSize));
    };

    const [role, setrole] = useState([]);

    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.dispatch(actions.getAllListItemRequest(search,page,pageSize));
    }, []);

    console.log('role :' + role);

    const kitchen = {
        kitchenChoose: '2',
    }

    const [successOn] = useSound(
        dingAudio,
        { volume: 1 }
    );
    return (
        <React.Fragment>

                <div className="display-receptionist">
                    <Header item={kitchen}/>
                    <div align="center" className="kitchen-order">
                        <div align="center" className="col-xl-12">
                            <div className="side-content">
                                <div className="list-order-re">
                                    <div className="d-flex">
                                        <div className="col-5"></div>
                                        <div className="col-2">
                                            <h1 style={{
                                                fontFamily: 'Cabin',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                fontSize: '23px',
                                                lineHeight: '25px',
                                                color: 'black',
                                            }}>Menu</h1>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-4 d-flex">
                                            <div className="col-10 d-flex">
                                                <input style={{
                                                    height: '35px',
                                                    border: '1px solid #000000',
                                                    backgroundColor: '#eeeeee',
                                                    borderRight: '0px',
                                                    width: '100%',
                                                    fontSize:'15px',
                                                }} className="search-bar" type="text" name="search" placeholder="Tìm kiếm..."
                                                    value={search}
                                                       onChange={(e) => (
                                                           setSearch(e.target.value),
                                                               setPage(1),
                                                               props.dispatch(actions.getAllListItemRequest(e.target.value,page,pageSize))
                                                       )}
                                                />
                                                <div style={{
                                                    height: '35px',
                                                    border: '1px solid #000000',
                                                    borderLeft: '0px',
                                                    borderRadius: '0px 20px 20px 0px',
                                                    width: '100%',
                                                    backgroundColor: '#eeeeee',
                                                }} align="right" className="home-icon col-2">
                                                    <a>
                                                        <img style={{transform: 'matrix(-1,0,0,1,0,0)', marginTop: '5px'}}
                                                             src={searchImg} className="icon-button"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    paddingBottom: '20px',
                                }}>
                                    <div style={{
                                        backgroundColor: '#ffffff',
                                        border: '0px solid #ffffff',
                                    }} className="card-order d-flex">
                                        <div align="left" className="col-1 card-detail-order-text">
                                            <b>STT</b>
                                        </div>
                                        <div align="left" className="col-3 card-detail-order-text">
                                            <b>Mã món</b>
                                        </div>
                                        <div align="left" className="col-3 card-detail-order-text">
                                            <b>Tên món</b>
                                        </div>
                                        <div align="center"
                                             className="col-2 card-detail-order-text">
                                            <b>Hình ảnh</b>
                                        </div>
                                        <div align="center"
                                             className="col-1 card-detail-order-text">
                                            <b>Giá tiền</b>
                                        </div>
                                        <div align="left"
                                             className="col-2 card-detail-order-text">
                                            <b>Trạng thái</b>
                                        </div>
                                    </div>
                                    <div>
                                        {allListItem.map((it, i) => (
                                                <div style={{borderRadius:'20px'}} className="card-order d-flex">
                                                    <div align="left"
                                                         className="col-1 card-detail-order-text-child">
                                                        <div>{i + 1 + (page - 1) * 10}</div>
                                                    </div>
                                                    <div align="left"
                                                         className="col-3 card-detail-order-text-child">
                                                        <div>{it?._id}</div>
                                                    </div>
                                                    <div align="left"
                                                         className="col-3 card-detail-order-text-child">
                                                        <b>{it?.name}</b>
                                                    </div>
                                                    <div align="center"
                                                         className="col-2 card-detail-order-text-child">
                                                        <div>{(it?.image !== undefined) ? (<img src={it?.image} alt="" height="80px" width="80px"/>) : ("")}</div>
                                                    </div>
                                                    <div align="center"
                                                         className="col-1 card-detail-order-text-child">
                                                        <b>{(it?.cost !== undefined) ? (it?.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ("")}</b>
                                                    </div>
                                                    <div align="center"
                                                         className="col-2 card-detail-order-text-child">
                                                        <div className="d-flex">
                                                            <div style={{marginTop: 'auto', marginBottom: 'auto', marginRight: '30px'}}>
                                                                {(it?.is_sold_out === false) ? (
                                                                        <b style={{color: "green"}}>Còn hàng</b>)
                                                                    : <b style={{color: "red"}}>Hết hàng</b>}
                                                            </div>
                                                            <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                                                 className="avatar-xs profile-user-wid mr-3">
                                                                <a align="center"
                                                                   className="avatar-title rounded-circle"
                                                                   style={{
                                                                       backgroundColor: '#FFEFCD',
                                                                       border: '1px solid #FCBC3A'
                                                                   }}
                                                                   onClick={(e) => {
                                                                       if(it?.is_sold_out === false){
                                                                           props.dispatch(actions.updateItemCanServeRequest(it?._id, true))
                                                                       }else{
                                                                           props.dispatch(actions.updateItemCanServeRequest(it?._id, false))
                                                                       }
                                                                       successOn()
                                                                       setOpenUpdateStatus(true)
                                                                       setTimeout(() => {
                                                                           setOpenUpdateStatus(false)
                                                                           props.dispatch(actions.getAllListItemRequest(search,page,pageSize));
                                                                       }, 1500)
                                                                   }}
                                                                >
                                                                    <img style={{width: '21px', height: '15px'}} src={changeServe}
                                                                         className="icon-button-menu-manage-table"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className="mt-3">
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
                    }} isOpen={openUpdateStatus}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Thay đổi trạng thái thành công !</b>
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
        allDishInConfirm: state.Kitchen.allDishInConfirmKitchen.allDishInConfirm,
        allUpdateStatusOfDish: state.Kitchen.updateStatusOfDishKitchen.allUpdateStatusOfDish,
        allViewAllItem: state.Kitchen.viewAllItemKitchen.allViewAllItem,
        allUpdateItemCanBeServe: state.Kitchen.updateItemCanBeServeKitchen.allUpdateItemCanBeServe,
    };
};

export default withNamespaces()(connect(mapStateToProps)(KitchenMenu));
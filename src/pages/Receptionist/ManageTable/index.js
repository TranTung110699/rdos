import React, {useEffect, useState, Component} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect, useDispatch} from "react-redux";

import "../../../assets/scss/custom/pages/receptionist/receptionist.scss";

import {Link} from "react-router-dom";
import Header from "../HeaderReception";
import {Button, Col, Container, Input, Row, Table} from "reactstrap/es";
import NotFound from "../../Authentication/Page401";
import * as actions from "../../../store/receptionist/actions";
import {withNamespaces} from "react-i18next";
import moment from "moment";
import chevonRight from "../../../assets/images/receptionist/chevron-down.png";
import vector from "../../../assets/images/receptionist/Vector.png";
import trash from "../../../assets/images/receptionist/trashre.png";
import searchImg from "../../../assets/images/customer/search.png";
import AddTable from "./AddTable";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {Modal} from "reactstrap";
import ReactPaginate from "react-paginate";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";
import failAudio from "../../../assets/audio/incorrect.swf.mp3";

// Import menuDropdown

const ManageTable = (props) => {

    const [page, setPage] = useState(1)

    const [pageSize] = useState(10)

    const pageCount = Math.ceil(props?.allTableReceptionist?.total / pageSize);
    const changePage = ({selected}) => {
        setPage(selected + 1);
        props.dispatch(actions.getAllTableReRequest(selected + 1));
    };

    console.log("pageCurrrent: " + page)

    const [openAdd, setOpenAdd] = useState(false);

    const [openAddTable, setOpenAddTable] = useState(false);
    const [openDelTableSuccess, setOpenDelTableSuccess] = useState(false);
    const [openDelTableFail, setOpenDelTableFail] = useState(false);
    const [noEditTable, setNoEditTable] = useState('none');
    const [noEditTableTwo, setNoEditTableTwo] = useState('none');
    const [noEditMaxCus, setNoEditMaxCus] = useState('none');

    const handleSubmitAddTable = (data) => {
        props.dispatch(actions.addTableReRequest({data}));
        setOpenAdd(false);
        setOpenAddTable(true);
        successOn()
        setTimeout(() => {
            props.dispatch(actions.getAllTableReRequest(Math.ceil(props?.allTableReceptionist?.total / pageSize)));
            props.dispatch(actions.getAllTableReNoPageSizeRequest(pageSize));
            setOpenAddTable(false);
        }, 1000)
    };

    const [openEdit, setOpenEdit] = useState(false);
    console.log("openEdit: " + openEdit);

    const [table_id, setTableId] = useState('');
    const [table_number, setTableNumber] = useState('');
    const [max_customer, setMaxCustomer] = useState('');
    const [delTable, setDelTable] = useState('');
    console.log("table_id: " + table_id);
    console.log("table_number: " + table_number);
    console.log("max_customer: " + max_customer);

    const data = {table_id, table_number, max_customer};

    const [allTable, setAllTable] = useState( [
        {
            "_id": {
                "$oid": "60be275c98760000a8005e25"
            },
            "full_name": "Bàn 1",
            "username": "MB01",
            "password": "$2y$10$cpR47HSRQeEnFQAREaxvpuwbIhyohTBF6brXcT0oTxttkAkMMS3Ye",
            "is_active": true,
            "role": "t",
            "number_of_customer": 0,
            "remember_token": [
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpblwvdGFibGUiLCJpYXQiOjE2MjMwNzYyMjgsImV4cCI6MTYyMzA3NjUyOCwibmJmIjoxNjIzMDc2MjI4LCJqdGkiOiJsVW9mVmdrY0FXcnNCSHFTIiwic3ViIjoiNjBiZTI3NWM5ODc2MDAwMGE4MDA1ZTI1IiwicHJ2IjoiMWJmZmI5ZGU2MTY4OWM3MWZmODg3ZGE4NzRiYmQ2ODg1MWQ5Y2ViZSJ9.wJzy0DTpMunZONt4gWyozRJMORBYw6KbXFErlqbbAcE"
            ],
            "created_at": "2021-06-07 21:04:12",
            "updated_at": "2021-06-07 21:04:12"
        },
        {
            "_id": {
                "$oid": "60be275c98760000a8005e26"
            },
            "full_name": "Bàn 2",
            "username": "MB02",
            "password": "$2y$10$AhJPAV8aIrKfcIs/gHEWZ.3.xCg1QugzVmOcgfLJTAMByQM3m4DhO",
            "is_active": false,
            "role": "t",
            "number_of_customer": 0,
            "remember_token": [],
            "created_at": "2021-06-07 21:04:12",
            "updated_at": "2021-06-07 21:04:12"
        },
        {
            "_id": {
                "$oid": "60be275c98760000a8005e27"
            },
            "full_name": "Bàn 3",
            "username": "MB03",
            "password": "$2y$10$JxK33rmrnz2e4nRH.52caOJ5na9/d0YEGXYqXNq/okhx26pmgrKx.",
            "is_active": false,
            "role": "t",
            "number_of_customer": 0,
            "remember_token": [],
            "created_at": "2021-06-07 21:04:12",
            "updated_at": "2021-06-07 21:04:12"
        },
        {
            "_id": {
                "$oid": "60be275c98760000a8005e28"
            },
            "full_name": "Bàn 4",
            "username": "MB04",
            "password": "$2y$10$98jSdoKuGChXVK54fw7s7OqLYjZQc11MHRu4hMuu8aAUe13J1j9Lu",
            "is_active": false,
            "role": "t",
            "number_of_customer": 0,
            "remember_token": [],
            "created_at": "2021-06-07 21:04:12",
            "updated_at": "2021-06-07 21:04:12"
        },
        {
            "_id": {
                "$oid": "60be275d98760000a8005e29"
            },
            "full_name": "Bàn 5",
            "username": "MB05",
            "password": "$2y$10$rFMY.wsBqNp1EOpmlyYbx.tFbGmQqKCpqn9qecwZRO2MzvOIeb9u.",
            "is_active": false,
            "role": "t",
            "number_of_customer": 0,
            "remember_token": [],
            "created_at": "2021-06-07 21:04:13",
            "updated_at": "2021-06-07 21:04:13"
        }
    ]);

    const handleSubmitEditTable = () => {
        successOn()
        props.dispatch(actions.editTableReRequest({data}));
        setOpenEdit(false);
        setOpenAddTable(true);
        setTimeout(() => {
            props.dispatch(actions.getAllTableReRequest(page));
            props.dispatch(actions.getAllTableReNoPageSizeRequest(pageSize));
            setOpenAddTable(false);
        }, 1000)
    };

    const prevPage = () => {
        const pg = page === 1 ? 1 : page - 1
        setPage(pg)
        props.dispatch(actions.getAllTableReRequest(pg));
    }

    const nextPage = () => {
        const pg = page < Math.ceil(props?.allTableReceptionist?.total / pageSize) ? page + 1 : page
        setPage(pg)
        props.dispatch(actions.getAllTableReRequest(pg));
        // props.dispatch(actions.getAllNotificationReceptionist({ page, pageSize, receiver }));
    }

    const [role, setrole] = useState([]);
    useEffect(() => {
        // if (localStorage.getItem("authUser")) {
        //     const obj = JSON.parse(localStorage.getItem("authUser"));
        //     setrole(obj.data.user.role);
        // }
        // props.dispatch(actions.getAllTableReRequest(page));
        // props.dispatch(actions.getAllTableReNoPageSizeRequest(pageSize));
    }, []);

    console.log('role :' + role);
    console.log('roleabc :' + props?.allTableReceptionistNoPagesize?.data?.map((tab, index) => tab.full_name));

    const menu = {
        menuChoose: '3',
    }

    const [successOn] = useSound(
        dingAudio,
        { volume: 1 }
    );

    const [failOn] = useSound(
        failAudio,
        { volume: 1 }
    );

    return (
        <div>

                <div>
                    <div>
                        <Header item={menu}/>
                        <div style={{
                            marginTop: '100px',
                            marginBottom: '60px',
                            paddingTop: '30px',
                            paddingBottom: '30px',
                            backgroundColor: '#ffffff',
                            width: '90%',
                            marginLeft: 'calc(100% - 95%)',
                            borderRadius: '10px',
                        }} align="center"
                             className="table-responsive">
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
                                    }}>Quản lý bàn</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-4 d-flex">
                                    <div className="col-8 d-flex">
                                    </div>
                                    <div className="col-4">
                                        <button style={{
                                            backgroundColor: '#FCBC3A',
                                            borderRadius: '10px',
                                            height: '35px',
                                            width: '100%',
                                            border: '1px solid #FCBC3A'
                                        }}
                                                onClick={() => {
                                                    setOpenAdd(true)
                                                    // props.dispatch(actions.getAllTableReNoPageSizeRequest(props?.allTableReceptionistNoPagesize?.total));
                                                }}
                                        >
                                            <b style={{
                                                fontFamily: 'Cabin',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: '13px',
                                                lineHeight: '16px',
                                                color: '#000000',
                                            }}>Thêm bàn</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Table style={{width: '90%', marginTop: '10px'}} align="center"
                                   className="table mb-0">

                                <thead align="center" style={{
                                    backgroundColor: '#ffffff',
                                    color: 'black',
                                    fontFamily: 'Cabin',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: '15px',
                                    lineHeight: '16px',
                                }}>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên bàn</th>
                                    <th>Số lượng khách đang ngồi</th>
                                    <th>Số lượng khách tối đa</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody align="center" style={{backgroundColor: '#ffffff'}}>
                                {allTable.map((tabre, index) => (
                                    <tr style={{
                                        backgroundColor: '#F8F8FB',
                                        border: '5px solid #ffffff',
                                        fontFamily: 'Cabin',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '17px',
                                    }}>
                                        <th>
                                            <div className="table-th-manage-table">
                                                <div>{index + 1 + (page - 1) * 10}</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="table-th-manage-table">
                                                <div>{tabre.full_name}</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="table-th-manage-table">
                                                <div>{tabre.number_of_customer}</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="table-th-manage-table">
                                                <div>{tabre.max_customer}</div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="table-th-manage-table">
                                                {(tabre.is_active === true) ? (
                                                        <div style={{color: "green"}}>Mở</div>)
                                                    : <div style={{color: "red"}}>Đóng</div>}
                                            </div>
                                        </th>
                                        <th align="right">
                                            <div align="right" className="d-flex">
                                                <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                                     className="avatar-xs profile-user-wid mr-3">
                                                    <a align="center"
                                                       className="avatar-title rounded-circle"
                                                       style={{
                                                           backgroundColor: '#FFEFCD',
                                                           border: '1px solid #FCBC3A'
                                                       }}
                                                       onClick={(e) => {
                                                           // window.location.pathname = '/receptionist-manage/' + tabre._id
                                                           setOpenEdit(true)
                                                           setTableId(tabre._id)
                                                           // props.dispatch(actions.getAllTableReNoPageSizeRequest(props?.allTableReceptionistNoPagesize?.total));
                                                       }}
                                                    >
                                                        <img src={vector}
                                                             className="icon-button-menu-manage-table"/>
                                                    </a>
                                                </div>
                                                <div style={{
                                                    marginTop: 'auto',
                                                    marginBottom: 'auto',
                                                    width: '50%'
                                                }}>
                                                    <button style={{
                                                        backgroundColor: '#FCBC3A',
                                                        borderRadius: '30px',
                                                        height: '35px',
                                                        width: '100%',
                                                        border: '1px solid #FCBC3A'
                                                    }} onClick={() => {
                                                        props.dispatch(actions.generateTableReRequest(tabre._id))
                                                    }}
                                                    >
                                                        <b style={{
                                                            fontFamily: 'Cabin',
                                                            fontStyle: 'normal',
                                                            fontWeight: '600',
                                                            fontSize: '13px',
                                                            lineHeight: '16px',
                                                            color: '#000000',
                                                        }}>Tạo mã QR mới</b>
                                                    </button>
                                                </div>
                                                <div style={{marginTop: 'auto', marginBottom: 'auto'}}
                                                     className="avatar-xs profile-user-wid ml-3">
                                                    <a align="center"
                                                       className="avatar-title rounded-circle"
                                                       style={{
                                                           backgroundColor: '#FFD1D1',
                                                           border: '1px solid red'
                                                       }}
                                                       onClick={() => {
                                                           if (tabre.is_active === false) {
                                                               successOn()
                                                               props.dispatch(actions.deleteTableReRequest(tabre._id))
                                                               setDelTable(tabre.full_name)
                                                               setOpenDelTableSuccess(true)
                                                               setTimeout(() => {
                                                                   props.dispatch(actions.getAllTableReRequest(page));
                                                                   props.dispatch(actions.getAllTableReNoPageSizeRequest(pageSize));
                                                                   setOpenDelTableSuccess(false)
                                                               }, 1500)
                                                           } else {
                                                               failOn()
                                                               setOpenDelTableFail(true)
                                                               setTimeout(() => {
                                                                   setOpenDelTableFail(false)
                                                               }, 1500)
                                                           }
                                                       }}
                                                    >
                                                        <img src={trash}
                                                             className="icon-button-menu-manage-table"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
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
                    <AddTable
                        open={openAdd}
                        onClose={() => setOpenAdd(false)}
                        handleSubmitAddTable={handleSubmitAddTable}
                    />
                    <Modal size="md" isOpen={openEdit} toggle={() => setOpenEdit(false)} className="pt-5">
                        {props?.allTableReceptionist?.data?.map((tabre, index) => (tabre._id === table_id) ? (
                            <form align='center'
                                  style={{
                                      marginTop: '50px',
                                      marginBottom: '60px',
                                      borderRadius: '20px',
                                  }}
                            >
                                <div><b style={{fontSize: '20px', fontFamily: 'Cabin'}}>Sửa thông tin bàn</b></div>
                                <div className="modal-body">
                                    <Row>
                                        <Col lg="12">
                                            <div className="form-group row d-flex">
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-6 col-form-label"
                                                    align="left"
                                                    style={{
                                                        paddingLeft: '5%',
                                                        fontFamily: 'Cabin',
                                                        fontSize: '20px'
                                                    }}
                                                >
                                                    Bàn số: {tabre.full_name}
                                                </label>
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-6 col-form-label"
                                                    align="left"
                                                    style={{
                                                        paddingLeft: '5%',
                                                        fontFamily: 'Cabin',
                                                        fontSize: '20px'
                                                    }}
                                                >
                                                    Số khách tối đa: {tabre.max_customer}
                                                </label>
                                            </div>
                                        </Col>

                                        <Col lg="12">
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-6 col-form-label"
                                                    align="left"
                                                    style={{
                                                        paddingLeft: '5%',
                                                        fontFamily: 'Cabin',
                                                        fontSize: '20px'
                                                    }}
                                                >
                                                    Số bàn:
                                                </label>
                                                <div align='center'
                                                     style={{marginTop: '0px', marginBottom: '10px'}}
                                                     className="note-item">
                                                    <Input
                                                        style={{width: '90%', backgroundColor: '#FFEFCD'}}
                                                        type="text"
                                                        title="Bạn chỉ được nhập số lớn hơn 0"
                                                        name="table_number"
                                                        onChange={(e) => {
                                                            if (e.target.value > 0 &&
                                                                props?.allTableReceptionistNoPagesize?.data?.map((tab, index) => (tab._id !== table_id) ? tab.full_name : '').filter((tb, ind) => (tb === "Bàn "+e.target.value.replace(/^0+/, ''))).length === 0) {
                                                                setTableNumber(e.target.value.replace(/^0+/, ''))
                                                                setNoEditTable('none')
                                                                setNoEditTableTwo('none')
                                                            } else if(e.target.value.match(/[0-9]/g) === null){
                                                                setNoEditTableTwo('block')
                                                                setNoEditTable('none')
                                                            } else {
                                                                setNoEditTable('block')
                                                                setNoEditTableTwo('none')
                                                            }
                                                        }}
                                                        rows="5"
                                                        maxLength="50"
                                                        required
                                                    />
                                                </div>
                                                <div style={{display: noEditTable, paddingLeft: '5%'}}>
                                                    <i style={{
                                                        fontFamily: 'Cabin',
                                                        fontSize: '15px',
                                                        color: 'red'
                                                    }}>
                                                        Bàn đã tồn tại, hãy nhập lại
                                                    </i>
                                                </div>
                                                <div style={{display: noEditTableTwo, paddingLeft: '5%'}}>
                                                    <i style={{
                                                        fontFamily: 'Cabin',
                                                        fontSize: '15px',
                                                        color: 'red'
                                                    }}>
                                                        Chỉ được nhập số bàn(lớn hơn hoặc bằng 1)
                                                    </i>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg="12">
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="example-text-input"
                                                    className="col-md-6 col-form-label"
                                                    align="left"
                                                    style={{
                                                        paddingLeft: '5%',
                                                        fontFamily: 'Cabin',
                                                        fontSize: '20px'
                                                    }}
                                                >
                                                    Số khách tối đa:
                                                </label>
                                                <div align='center'
                                                     style={{marginTop: '0px', marginBottom: '10px'}}
                                                     className="note-item">
                                                    <Input
                                                        style={{width: '90%', backgroundColor: '#FFEFCD'}}
                                                        type="text"
                                                        title="Bạn chỉ được nhập số lớn hơn 0"
                                                        name="max_customer"
                                                        onChange={(e) => {
                                                            if (e.target.value > 0) {
                                                                setMaxCustomer(e.target.value.replace(/^0+/, ''))
                                                                setNoEditMaxCus('none')
                                                            } else if(e.target.value.match(/[0-9]/g) === null) {
                                                                setNoEditMaxCus('block')
                                                            } else {
                                                                setNoEditMaxCus('block')
                                                            }
                                                        }}
                                                        rows="5"
                                                        maxLength="50"
                                                        required
                                                    />
                                                </div>
                                                <div style={{display: noEditMaxCus, paddingLeft: '5%'}}>
                                                    <i style={{
                                                        fontFamily: 'Cabin',
                                                        fontSize: '15px',
                                                        color: 'red'
                                                    }}>
                                                        Số khách tối đa phải lớn hơn hoặc bằng 1
                                                    </i>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg="12">
                                            <div style={{width: '100%', paddingBottom: '20px'}}>
                                                <Button
                                                    onClick={handleSubmitEditTable}
                                                    style={{
                                                        width: '80%',
                                                        backgroundColor: (noEditMaxCus === 'none' && noEditTable === 'none' && table_number !== '' && max_customer !== '') ? '#FCBC3A' : '#eeeeee',
                                                        color: (noEditMaxCus === 'none' && noEditTable === 'none' && table_number !== '' && max_customer !== '') ? '#000000' : '#a7a7a7',
                                                    }}
                                                    disabled={(noEditMaxCus === 'none' && noEditTable === 'none' && noEditTableTwo === 'none' && table_number !== '' && max_customer !== '') ? false : true}>
                                                    <div style={{
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontFamily: 'Cabin'
                                                    }}>Sửa thông tin bàn
                                                    </div>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </form>) : (null)
                        )}
                    </Modal>
                    <Modal align="center" style={{
                        width: '350px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '100px',
                        marginTop: '200px',
                        marginBottom: "auto",
                    }} isOpen={openAddTable}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Yêu cầu được thực hiện !</b>
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
                    }} isOpen={openDelTableSuccess}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Đã xóa {delTable} thành công !</b>
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
                    }} isOpen={openDelTableFail}>
                        <div style={{backgroundColor: '#FFEFCD'}} align="center">
                            <i style={{color: "#FCBC3A", fontSize: '50px'}}
                               className="bx bx-calendar-check bx-tada"></i>
                            <div style={{
                                fontFamily: 'Cabin',
                                fontSize: '15px',
                            }}><b>Bàn đang mở không được xóa !</b>
                            </div>
                        </div>
                    </Modal>
                    <Footer/>
                </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        // totalsOfNotification:
        // state.Notification.totalOfNotifications.totalNotifications,
        allTableReceptionist: state.Receptionist.getAllTableReceptionist.allTableReceptionist,
        allTableReceptionistNoPagesize: state.Receptionist.getAllTableReceptionistNoPagesize.allTableReceptionistNoPagesize,
        addTableReceptionist: state.Receptionist.postAddTableReceptionist.addTableReceptionist,
        deleteTableReceptionist: state.Receptionist.postDeleteTableReceptionist.deleteTableReceptionist,
        generateTableReceptionist: state.Receptionist.getGenerateTableReceptionist.generateTableReceptionist,
        editTableReceptionist: state.Receptionist.postEditTableReceptionist.editTableReceptionist,
    };
};

export default withNamespaces()(connect(mapStateToProps)(ManageTable));
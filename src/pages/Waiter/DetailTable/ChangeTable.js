import React, {useState, useEffect} from "react";
import { useLocation, withRouter} from "react-router-dom";
import NotFound from "../../Authentication/Page401";
import Header from "../home/myHeader";
//scss
import "../../../assets/scss/custom/pages/waiter/changeTable.scss";
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {connect} from "react-redux";
import {postChangeTableRequest} from "../../../store/post/actions";
import {apiError} from "../../../store/auth/login/actions";
import {getCloseTableRequest} from "../../../store/notifications/actions";
import TableNav from "./TableNav";
import {Modal} from "reactstrap";

const ChangeTable = (props) => {
    const [role, setrole] = useState([]);

    const location = useLocation();

    const [openLoadPa, setOpenLoadPa] = useState(false);

    const {dataCloseTablePage} = props;

    const [tableId, setTableID] = useState();

    const [tableChoose, setTableChoose] = useState('');

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

    const changeTable = () => {
        const table = {
            from_table_id: location.state._id,
            to_table_id: tableId,
        }
        props.postChangeTableRequest(table);

    }

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            setrole(obj.data.user.role);
        }

        setTableID(null);

        props.getCloseTableRequest();
    }, []);


    const table = {
        // _id: location.state._id,
        // username: location.state.username,
        navChoose: '3',
    }

    return (
        <React.Fragment>
            <div className="display-customer">

                    <div className="container_detail">
                        <div style={{
                            position: 'fixed',
                            width: '100%',
                            zIndex: '100',
                            backgroundColor:'#ffffff'
                        }}>
                            <Header />
                            <TableNav item={table}/>
                        </div>
                        <div style={{textAlign: "center", justifyContent: "center", paddingTop: '140px'}}>
                            <div className="list">
                                {allTable?.map((d, index) => (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                value={d._id}
                                                id={d._id}
                                                style={{opacity: '0'}}
                                                name="tableCheck"
                                                className="check-table"
                                                onChange={(e) => (
                                                    setTableChoose(e.target.value),
                                                        setTableID(d._id)
                                                )}
                                                checked={tableChoose === d._id}
                                            />
                                            <div htmlFor={d._id} className="page">
                                                <div className="content_all">
                                                    <span className="two">{d.username}</span>
                                                </div>
                                            </div>
                                            {/*<div for={d._id} className="close-table-item"*/}
                                            {/*     // key={index}*/}
                                            {/*     // onClick={() => {*/}
                                            {/*     //     setTableID(d._id);*/}
                                            {/*     // }}*/}
                                            {/*>*/}
                                            {/*    <div for={d._id} className="page">*/}
                                            {/*        <div className="content_all">*/}
                                            {/*            <span className="two">{d.username}</span>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </label>

                                    )
                                )}
                            </div>

                            <p className="btn-change" onClick={()=>{

                                setOpenLoadPa(true);
                                setTimeout(() => {
                                    setOpenLoadPa(false)
                                    props.history.push("/waiter-view-all-table");

                                }, 1000)
                            }}>Đổi</p>
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
                        }}><b>Đổi bàn thành công</b>
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
        dataCloseTablePage: state.Notification.getCloseTable.dataCloseTable,
    };
};


export default withRouter(connect(mapStateToProps, {
    postChangeTableRequest,
    getCloseTableRequest,
    apiError
})(ChangeTable));
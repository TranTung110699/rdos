import React, {useState, useEffect} from "react";
import "../../../assets/scss/custom/pages/waiter/detailTable.scss";
import "../../../assets/scss/custom/pages/waiter/Confirmed.scss";
import {useLocation, withRouter} from "react-router-dom";
import NotFound from "../../Authentication/Page401";
import Header from "../home/myHeader";
import {connect} from "react-redux";
import {
    getConfirmedOrderRequest,
    postCustomizeNumberRequest, postDeleteItemRequest
} from "../../../store/post/actions";
import {apiError} from "../../../store/auth/login/actions";
import Invalid from "../../Customer/Invalid";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import TableNav from "./TableNav";
import mathMinus from "../../../assets/images/customer/math-minus.png";
import mathPlus from "../../../assets/images/customer/math-plus.png";

const ConfirmedOrder = (props) => {

    const [role, setrole] = useState([]);

    const location = useLocation();

    const value = {
        // table_id: location.state._id
    }

    const {dataConfirmedOrder} = props;
    const customizeNumberSub = (item) => {
        const aItem = {
            _id: dataConfirmedOrder._id,
            item_id: item.item_id,
            status: 0
        }
        props.postCustomizeNumberRequest(aItem);
        setTimeout(() => {
            props.getConfirmedOrderRequest(value);
        }, 500)
    }

    const customizeNumberAdd = (item) => {
        const aItem = {
            _id: dataConfirmedOrder._id,
            item_id: item.item_id,
            status: 1
        }
        props.postCustomizeNumberRequest(aItem);
        setTimeout(() => {
            props.getConfirmedOrderRequest(value);
        }, 500)

    }

    function deleteItem(id) {
        const value = {
            table_id: location.state._id,
            item_id: id
        }
        props.postDeleteItemRequest(value);
        setTimeout(() => {
            props.getConfirmedOrderRequest(value);
        }, 500)
    }

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            setrole(obj.data.user.role);
        }
        dataConfirmedOrder.item = []
        props.getConfirmedOrderRequest(value);


    }, []);

    const table = {
        // _id: location.state._id,
        // username: location.state.username,
        navChoose: '4',
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
                            <Header />
                            <TableNav item={table}/>
                        </div>
                        <div style={{textAlign: "center", paddingTop: '140px'}}>
                            <div className="list-Item">
                                {dataConfirmedOrder.item?.map((d, index) => (
                                        <div className="item-form-checkList" key={index}>
                                            <span style={{
                                                fontFamily: 'Cabin',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}>{d.detail_item.name}</span>
                                            <div style={{display: 'flex'}} className="save-button">
                                                <span onClick={() => {
                                                    customizeNumberSub(d)
                                                }}><img className="minus-button-waiter" src={mathMinus}/></span>
                                                <span>{d.quantity}</span>
                                                <span onClick={() => {
                                                    customizeNumberAdd(d)
                                                }}><img className="plus-button-waiter" src={mathPlus}/></span>
                                            </div>
                                            <div className="contain_button_ced" onClick={() => {
                                                deleteItem(d.item_id)
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
        dataConfirmedOrder: state.Posts.getConfirmedOrder.dataGetConfirmedOrder,
    };
};


export default withRouter(connect(mapStateToProps, {
    postCustomizeNumberRequest,
    postDeleteItemRequest,
    getConfirmedOrderRequest,
    apiError
})(ConfirmedOrder));
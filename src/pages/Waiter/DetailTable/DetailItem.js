import React, {useState, Component, useEffect} from "react";

//Import scss
import "../../../assets/scss/custom/pages/customer/detail.scss";
import { useLocation} from "react-router-dom";

import Invalid from "../../Customer/Invalid";
import {withNamespaces} from "react-i18next";
import {connect, useDispatch} from "react-redux";
import {
 getAllCategoryRequest, getCartRequest,
    getFoodInComboRequest,
} from "../../../store/customer/actions";
import left from "../../../assets/images/customer/chevron-left-o.png";
import mathMinus from "../../../assets/images/customer/math-minus.png";
import mathPlus from "../../../assets/images/customer/math-plus.png";
import check from "../../../assets/images/customer/play-list-check.png";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {Modal} from "reactstrap";
import {getDetailItemRequest, postInsertItemRequest} from "../../../store/notifications/actions";


const DetailItem = (props) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const _id = location.state._id;

    const table_id = location.state.table_id;

    console.log("comboId: " + _id);
    console.log("comboId detail: " + props?.dataFoodInCombo?.data);

    const item ={
        _id: _id,
        table_id: table_id
    }

    const [openNoti, setOpenNoti] = useState(false);

    const [openLoadDetail, setOpenLoadDetail] = useState(false);

    useEffect(() => {
        dispatch(getFoodInComboRequest({_id}));
        dispatch(getCartRequest());
        dispatch(getDetailItemRequest(item));
        dispatch(getAllCategoryRequest());
        setOpenLoadDetail(true);
        setTimeout(() => {
            setOpenLoadDetail(false);
        }, 2000)
    }, []);

    // const [minusAdd, setMinusAdd] = useState(1);

    function countUP(prev_data_attr) {
        setQuantity(prev_data_attr + 1);
        setCost(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).cost);
    }

    function countDown(prev_data_attr) {
        if (prev_data_attr > 1) {
            setQuantity(prev_data_attr - 1)
        }
        ;
        setCost(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).cost);
    }

    const backPage = () => {
        props.history.goBack();
        dispatch(getFoodInComboRequest());
    }

    const [item_id, setItem_id] = useState(_id);
    const [quantity, setQuantity] = useState(0);
    const [note, setNote] = useState('');
    const [dish_in_combo, setDish] = useState([]);
    const [cost, setCost] = useState(0);

    const [checkedState, setCheckedState] = useState([]);

    console.log("checkedStatetest: " + checkedState);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const testDish = updatedCheckedState.map(
            (currentState, index) => {
                if (currentState === true) {
                    return (props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).dish_in_combo[index].name);
                }
            },
        );
        setDish(testDish.filter(function (el) {
            return el != null;
        }));
    };

    console.log("test check: " + dish_in_combo);

    console.log("cost test: " + cost);
    console.log("noc test: " + quantity);
    console.log("note test: " + note);

    const data = {table_id,item_id, quantity,cost,dish_in_combo};

    const handleSubmit = () => {
        // if (props?.dataCart?.data?.item_in_cart?.filter((iic) => (iic._id !== _id &&
        //     iic.category_id === props?.dataCategory?.map((cat, i) => cat._id)[0])).length !== 0 && props?.dataDetailItem?.data?.filter((dfic) => dfic.category_id === props?.dataCategory?.map((cat, i) => cat._id)[0]).length !== 0) {
        //     setOpenNoti(true);
        //     setTimeout(() => {
        //         setOpenNoti(false)
        //     }, 2800)
        // } else {
        dispatch(postInsertItemRequest(data));
        setTimeout(() => {
            props.history.push(
                {
                    pathname: '/waiter-detail-table-confirm-order',
                    state:{
                        _id: table_id,
                    }
                }
            );
            dispatch(getFoodInComboRequest());
        }, 650)
        // }
    };

    const [show, setShow] = useState("none");
    const [hide, setHide] = useState("block");

    const handleDetail = () => {
        setShow("block");
        setHide("none");
        setCost(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).cost);
        setQuantity(location.state.number_customer);
        setCheckedState(props?.dataDetailItem?.data?.find((cb, i) => cb).dish_in_combo.map((diccb, indexcb) => (diccb.is_sold_out === false) ? false : null));
    };
    //
    // const handleDetailEditOtherCombo = () => {
    //     setShow("block");
    //     setHide("none");
    //     setCost(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).cost);
    //     setQuantity(props?.dataCart?.data?.item_in_cart?.filter((dc, i) => (dc._id === _id))[0].quantity);
    // };
    //
    // const handleDetailEditCombo = () => {
    //     setShow("block");
    //     setHide("none");
    //     setCost(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).cost);
    //     setQuantity(props.authCustomer.data.user.number_of_customer);
    //     setCheckedState(props?.dataDetailItem?.data?.find((cb) => cb).dish_in_combo.map((diccb, indexcb) => ((props?.dataCart?.data?.item_in_cart?.filter((dc, i) => (dc._id === _id))[0].dish_in_combo.filter((dicc, i) => (dicc === diccb.name)).length !== 0 && diccb.is_sold_out === false) ? true : (diccb.is_sold_out === false) ? false : null)));
    // };

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
                                <span style={{width: '150px'}} className="avatar-title bg-light span-table">
                                    <div className="div-table">
                                        {props?.dataDetailItem?.data?.map((d, i) => (d.dish_in_combo.length !== 0) ? (
                                                d.name)
                                            : (d.name))}
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div align="right" className="home-icon col-2">
                        </div>
                    </div>
                </div>
                {props?.dataDetailItem?.data?.map((d, i) => (d.dish_in_combo.length !== 0) ? (
                    <div>
                        <div align="center" className="image-item">
                            <img src={d.image} alt="" height="300px" width="300px"/>
                        </div>

                        <div align="center" style={{
                            height: '90px',
                            backgroundColor: '#F8F8FB',
                            paddingTop: '20px',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <b style={{
                                fontStyle: 'normal',
                                fontSize: '23px',
                                fontFamily: 'Cabin',
                                lineHeight: '25px',
                            }}>{(d.name)}</b>
                            <div
                                className="cost-item">{(d.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                            </div>
                            <div align="center" style={{display: hide}}>
                                <a onClick={handleDetail}>
                                    <div>Chi tiết</div>
                                    <i style={{color: "#FCBC3A", fontSize: '30px'}}
                                       className="bx bx-chevron-down-circle bx-tada"></i>
                                </a>
                            </div>
                        </div>
                        <div style={{display: show}} className="cover-list">
                            <div className="side-list-menu">
                                <div className="list-menu">
                                    <div className="list-item">
                                        <div className="d-flex">
                                            <div align="left" className="checkbox-dish">
                                                {d?.dish_in_combo?.map((dic, index) => (dic.is_sold_out === false) ? (
                                                    <div style={{paddingTop: '3px', paddingBottom: '3px'}}>
                                                        <label className='check-one d-flex' key={index}>
                                                            <input
                                                                id={dic._id}
                                                                name={dic.name}
                                                                value={dic.name}
                                                                onChange={() => {
                                                                    handleOnChange(index);
                                                                }}
                                                                type="checkbox"
                                                                className="check-once-input"
                                                                checked={checkedState[index]}
                                                            />
                                                            <div style={{display: 'flex'}} className="group-checkbox">
                                                                <div
                                                                    className="check-once-label mr-2"></div>
                                                                <div className="check-once-text">{dic.name}</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <label className='check-one d-flex' key={index}>
                                                            <input
                                                                id={dic._id}
                                                                name={dic.name}
                                                                value={dic.name}
                                                                // onChange={() => {
                                                                //     handleOnChange(index);
                                                                // }}
                                                                type="checkbox"
                                                                className="check-once-input"
                                                                checked={false}
                                                                disabled={true}
                                                            />
                                                            <div style={{display: 'flex'}} className="group-checkbox">
                                                                <div style={{opacity : '0'}}
                                                                     className="check-once-label mr-2"></div>
                                                                <div style={{opacity: '0.5'}} className="check-once-text">{dic.name}</div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="note-item" style={{width: '50%', marginTop: '0px'}}>
                                                <label style={{width: '100%'}}>
                                                    <input
                                                        className="check-all-button"
                                                        type="checkbox"
                                                        onChange={e => {
                                                            if (checkedState.filter((cs, i) => cs === false).length !== 0) {
                                                                // setCheckedState(new Array(props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).dish_in_combo.length).fill(true));
                                                                const updatedCheckedState = props?.dataDetailItem?.data?.find((cb, i) => cb).dish_in_combo.map((diccb, indexcb) => (diccb.is_sold_out === false) ? true : null);
                                                                setCheckedState(updatedCheckedState);
                                                                const testDish = updatedCheckedState.map(
                                                                    (currentState, index) => {
                                                                        if (currentState === true) {
                                                                            return (props?.dataDetailItem?.data?.find((cb) => (cb._id === _id)).dish_in_combo[index].name);
                                                                        }
                                                                    },
                                                                );
                                                                setDish(testDish.filter(function (el) {
                                                                    return el != null;
                                                                }));
                                                            } else {
                                                                setCheckedState(props?.dataDetailItem?.data?.find((cb, i) => cb).dish_in_combo.map((diccb, indexcb) => (diccb.is_sold_out === false) ? false : null));
                                                                setDish([]);
                                                            }
                                                        }}
                                                        checked={(checkedState.filter((cs, i) => cs === false).length !== 0) ? false : true}
                                                    />
                                                    <div className="choose-all">
                                                        <div className="choose-text">Chọn tất cả</div>
                                                    </div>
                                                </label>
                                                <div style={{fontFamily: 'Cabin', fontSize: '15px'}}><b>Chú
                                                    thích:</b>
                                                </div>
                                                <textarea
                                                    required
                                                    style={{
                                                        width: '90%',
                                                        height: '60%',
                                                        backgroundColor: '#FFEFCD',
                                                        border: '2px solid #FCBC3A',
                                                        borderRadius: '10px',
                                                        fontFamily: 'Cabin'
                                                    }}
                                                    className="introduce-profile note-input-item"
                                                    type="text"
                                                    rows="8"
                                                    maxLength="80"
                                                    placeholder="Chú thích...(VD:Ăn được cay, Không ăn được cay,...)"
                                                    name="note"
                                                    id="note"
                                                    onChange={(e) => (
                                                        setNote(e.target.value)
                                                    )}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div align="center" className="image-item">
                            <img src={d.image} alt="" height="300px" width="300px"/>
                        </div>

                        <div align="center" style={{
                            height: '90px',
                            backgroundColor: '#F8F8FB',
                            paddingTop: '20px',
                            paddingBottom: '50px',
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}>
                            <b style={{
                                fontStyle: 'normal',
                                fontSize: '23px',
                                fontFamily: 'Cabin',
                                lineHeight: '25px',
                            }}>{(d.name)}</b>
                            <div
                                className="cost-item">{(d.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                            </div>
                        </div>
                        <div style={{position: 'absolute'}} className="header-menu">
                            <div className="d-flex">
                                <div className="home-icon col-2">
                                </div>
                                <div align="center" className="menu-search col-8">
                                    <div style={{marginTop: '-20px'}}>
                                        <span style={{
                                            height: '50px',
                                            width: '120px',
                                            backgroundColor: '#FFEFCD',
                                            border: '1px solid #FCBC3A'
                                        }} className="avatar-title span-table">
                                            <div style={{
                                                backgroundColor: '#FFEFCD',
                                                borderRadius: '30px',
                                                width: '110px'
                                            }} className='d-flex'>
                                                <div align="center" className="col-4">
                                                    <a onClick={() => {
                                                        countDown(quantity)
                                                    }}><img src={mathMinus}/></a>
                                                </div>
                                                <div align="center" className="col-4"
                                                     style={{fontSize: '16px', color: '#000000'}}>{quantity}</div>
                                                <div align="center" className="col-4">
                                                    <a onClick={() => {
                                                        countUP(quantity)
                                                    }}><img src={mathPlus}/></a>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div align="right" className="home-icon col-2">
                                </div>
                            </div>
                        </div>
                        <div align='center' className="note-item" style={{width: '100%'}}>
                                <textarea
                                    style={{width: '90%', backgroundColor: '#FFEFCD', border: '2px solid #FCBC3A'}}
                                    className="introduce-profile note-input-item"
                                    type="text"
                                    rows="8"
                                    maxLength="80"
                                    placeholder="Chú thích..."
                                    name="note"
                                    id="note"
                                    onChange={(e) => (
                                        setNote(e.target.value)
                                    )}
                                ></textarea>
                        </div>
                    </div>
                ))}
                {props?.dataDetailItem?.data?.map((d, i) => (d.dish_in_combo.length !== 0) ? (
                    <div style={{display: show}}>
                        {checkedState.find((cs) => (cs === true)) ? (
                            <div className="cart">
                                <button onClick={handleSubmit} className="cart-button">
                                    <div className="text-cart-button">
                                        <img style={{width: '21px', height: '15px'}} src={check}
                                             className="icon-button mr-2"/>
                                        Thêm vào danh sách gọi món
                                    </div>
                                </button>
                            </div>
                        ) : (<Footer/>)}
                    </div>
                ) : (
                    <div>
                        {(quantity > 0) ? (
                            <div className="cart">
                                <button onClick={handleSubmit} className="cart-button">
                                    <div className="text-cart-button">
                                        <img style={{width: '21px', height: '15px'}} src={check}
                                             className="icon-button mr-2"/>
                                        Thêm vào Đơn Chờ Xác Nhận
                                    </div>
                                </button>
                            </div>
                        ) : (<Footer/>)}
                    </div>
                ))}
                <Modal align="center" style={{
                    width: '150px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    height: '100px',
                    marginTop: '200px',
                    marginBottom: "auto",
                }} isOpen={openLoadDetail}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "#FCBC3A", fontSize: '50px'}}
                           className="bx bx-loader bx-spin"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Chờ chút ...</b>
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
                }} isOpen={openNoti}>
                    <div style={{backgroundColor: '#FFEFCD'}} align="center">
                        <i style={{color: "red", fontSize: '50px'}}
                           className="bx bx-calendar-exclamation bx-tada"></i>
                        <div style={{
                            fontFamily: 'Cabin',
                            fontSize: '15px',
                        }}><b>Bạn đã chọn một Combo trước đó, vào giỏ hàng xóa và chọn lại !</b>
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
        // dataFoodInCombo: state.Customer.getFoodInCombo.dataFoodInCombo,
        // dataCart: state.Customer.getCart.dataCart,
        dataDetailItem: state.Notification.getDetailItem.dataDetailItem,
    };
};

export default withNamespaces()(connect(mapStateToProps)(DetailItem));
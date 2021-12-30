import {Link, useLocation, withRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import bell from "../../../assets/images/waiter/bell-big.png";
import clock from "../../../assets/images/waiter/sand-clock-big.png";
import arrow from "../../../assets/images/waiter/arrows-exchange-big.png";
import carousel from "../../../assets/images/waiter/carousel-big.png";
import listCheck from "../../../assets/images/waiter/play-list-check-big.png";
import food from "../../../assets/images/customer/food.png";
import firebase from "firebase";

const TableNav = (props) => {

    const location = useLocation();
    const database = firebase.database();

    let list = [];

    // database.ref('waiter/' + location.state._id).on('value', (snapshot) => {
    //         list = snapshot.numChildren();
    //     }
    // )

    const [tableChoose] = useState(props.item.navChoose);
    return (
        <div className="d-flex menu-bar-waiter">
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'1'}
                                id={'1'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '1'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-detail-table-notification',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={bell} className="icon-button-menu-waiter"/>

                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Thông báo</div>
                    </div>
                </button>
            </div>
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'2'}
                                id={'2'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '2'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-detail-table-confirm-order',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={clock} className="icon-button-menu-waiter"/>
                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Chờ xác nhận</div>
                    </div>
                </button>
            </div>
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'3'}
                                id={'3'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '3'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-detail-table-change-table',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={arrow} className="icon-button-menu-waiter"/>
                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Đổi bàn</div>
                    </div>
                </button>
            </div>
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'4'}
                                id={'4'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '4'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-detail-table-confirmed-order',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={carousel} className="icon-button-menu-waiter"/>
                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Món đã gọi</div>
                    </div>
                </button>
            </div>
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'5'}
                                id={'5'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '5'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-check-list',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={listCheck} className="icon-button-menu-waiter"/>
                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Đồ Uống</div>
                    </div>
                </button>
            </div>
            <div className="menu-type-a-waiter">
                <button className="menu-type-waiter">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value={'6'}
                                id={'6'}
                                style={{opacity: '0'}}
                                name="tableCheck"
                                className="check-nav"
                                checked={tableChoose === '6'}
                            />
                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                 className="avatar-sm profile-user-wid">
                                <div align="center"
                                     className="cate-background-color-waiter avatar-title rounded-circle">
                                    <Link to={{
                                        pathname: '/waiter-check-list-food',
                                        // state: {
                                        //     _id: props.item._id,
                                        //     username: props.item.username
                                        // }
                                    }}>
                                        <img src={listCheck} className="icon-button-menu-waiter"/>
                                    </Link>
                                </div>
                            </div>
                        </label>

                        <div className="square-text-button-waiter">Đồ Ăn</div>
                    </div>
                </button>
            </div>
        </div>

    );

}


export default TableNav;
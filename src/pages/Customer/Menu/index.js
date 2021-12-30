import React, {useState, Component, useEffect} from "react";

//Import scss
import "../../../assets/scss/custom/pages/customer/menu.scss";
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from "react-router-dom";
import {Link as ScLink} from "react-scroll";
import PerfectScrollbar from "react-perfect-scrollbar";
import * as actions from "../../../store/customer/actions";
import Invalid from "../Invalid";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import home from "../../../assets/images/customer/home.png";
import searchImg from "../../../assets/images/customer/search.png";
import food from "../../../assets/images/customer/food.png";
import bowl from "../../../assets/images/customer/bowl.png";
import coffee from "../../../assets/images/customer/coffee.png";
import shoppingCart from "../../../assets/images/customer/shopping-cart.png";
import mathMinus from "../../../assets/images/customer/math-minus.png";
import mathPlus from "../../../assets/images/customer/math-plus.png";
import beers from "../../../assets/images/customer/beer.png";
import wine from "../../../assets/images/customer/wine.png";
import chicken from "../../../assets/images/customer/chicken.png";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import {Modal} from "reactstrap";
import {addToCartMenuRequest, addToCartRequest, sendFeedbackRequest} from "../../../store/customer/actions";
import {authHeaderGetApiCus} from "../../../helpers/jwt-token-access/auth-token-header";

const CustomerMenu = (props) => {

    const [search, setSearch] = useState('');
    const [menuOpen, setMenuOpen] = useState("block");
    const [bsearch, setBsearch] = useState("block");
    const [asearch, setAsearch] = useState("none");
    const [openLoad, setOpenLoad] = useState(false);

    const [categoryMenu, setCategoryMenu] = useState([
        {
            "_id": "60c083b495040000200069a2",
            "name": "combo"
        },
        {
            "_id": "60c083b495040000200069a3",
            "name": "drink"
        },
        {
            "_id": "60c083b495040000200069a4",
            "name": "normal"
        },
        {
            "_id": "60c083b495040000200069a4",
            "name": "fast"
        },
        {
            "_id": "60c083b495040000200069a4",
            "name": "alcohol"
        },
        {
            "_id": "60c083b495040000200069a4",
            "name": "beer"
        }
    ]);
    const [listMenu, setListMenu] = useState({
        "combo": [
            {
                "_id": "60c083b9ee26000095002fd2",
                "name": "Combo nướng 129k",
                "cost": 129000,
                "description": null,
                "image": "https://fv9-3.failiem.lv/thumb_show.php?i=xtuztk6cs&view",
                "hotpot": true,
                "category_id": "60c083b495040000200069a2",
                is_sold_out : false,
                in_cart: true,
                quantity: 5
            },
            {
                "_id": "60c083b9ee26000095002fd2",
                "name": "Combo nướng 199k",
                "cost": 199000,
                "description": null,
                "image": "https://fv9-3.failiem.lv/thumb_show.php?i=xtuztk6cs&view",
                "hotpot": true,
                "category_id": "60c083b495040000200069a2",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ],
        "drink": [
            {
                "_id": "60c083b9ee26000095002fd9",
                "name": "Coca lon",
                "cost": 10000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=35xcrb8ku&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: true,
                quantity: 5
            },
            {
                "_id": "60c083b9ee26000095002fda",
                "name": "Bia lon",
                "cost": 15000,
                "description": null,
                "image": "https://fv9-3.failiem.lv/thumb_show.php?i=vcujbu3s9&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : true,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdb",
                "name": "Rượu táo mèo 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-4.failiem.lv/thumb_show.php?i=nwf9tbkmu&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdc",
                "name": "Rượu nếp trắng 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=b3q2wd7j7&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ],
        "fast": [
            {
                "_id": "60c083b9ee26000095002fd6",
                "name": "Khoai lang kén",
                "cost": 30000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fd7",
                "name": "Ngô chiên",
                "cost": 30000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fd8",
                "name": "Gà lắc",
                "cost": 50000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ],
        "normal": [
            {
                "_id": "60c083b9ee26000095002fd6",
                "name": "Khoai lang kén",
                "cost": 30000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fd7",
                "name": "Ngô chiên",
                "cost": 30000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fd8",
                "name": "Gà lắc",
                "cost": 50000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=m75wzduxn&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a4",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ],
        "alcohol": [
            {
                "_id": "60c083b9ee26000095002fd9",
                "name": "Coca lon",
                "cost": 10000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=35xcrb8ku&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fda",
                "name": "Bia lon",
                "cost": 15000,
                "description": null,
                "image": "https://fv9-3.failiem.lv/thumb_show.php?i=vcujbu3s9&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : true,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdb",
                "name": "Rượu táo mèo 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-4.failiem.lv/thumb_show.php?i=nwf9tbkmu&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdc",
                "name": "Rượu nếp trắng 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=b3q2wd7j7&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ],
        "beer": [
            {
                "_id": "60c083b9ee26000095002fd9",
                "name": "Coca lon",
                "cost": 10000,
                "description": null,
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=35xcrb8ku&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fda",
                "name": "Bia lon",
                "cost": 15000,
                "description": null,
                "image": "https://fv9-3.failiem.lv/thumb_show.php?i=vcujbu3s9&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : true,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdb",
                "name": "Rượu táo mèo 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-4.failiem.lv/thumb_show.php?i=nwf9tbkmu&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            },
            {
                "_id": "60c083b9ee26000095002fdc",
                "name": "Rượu nếp trắng 500ml",
                "cost": 50000,
                "description": "abc",
                "image": "https://fv9-2.failiem.lv/thumb_show.php?i=b3q2wd7j7&view",
                "hotpot": false,
                "category_id": "60c083b495040000200069a3",
                is_sold_out : false,
                in_cart: false,
                quantity: 0
            }
        ]
    });

    const openSearch = () => {
        setMenuOpen("none");
        setBsearch("none");
        setAsearch("block");
    };

    const closeSearch = () => {
        setMenuOpen("block");
        setBsearch("block");
        setAsearch("none");
    };

    useEffect(() => {
        // props.dispatch(actions.getAllCategoryRequest());
        // props.dispatch(actions.getAllMenuRequest());
        // props.dispatch(actions.getCartRequest());
        // // setOpenLoad(true);
        // // setTimeout(() => {
        // //     setOpenLoad(false);
        // // }, 1000)
        // if (props?.dataMenu?.combo !== undefined) {
        //     setOpenLoad(false)
        // } else {
        //     setOpenLoad(true)
        //     setTimeout(() => {
        //         setOpenLoad(false);
        //     }, 1000)
        // }
    }, []);

    // console.log("combo : " + props?.dataMenu?.combo);
    // console.log("menu : " + props?.dataMenu?.combo);

    return (
        <React.Fragment>
            <div style={{marginTop:'136px'}} className="display-customer">
                <div style={{top :'0'}} className="header-menu">
                    <div style={{height: '45px'}} className="d-flex">
                        <div className="home-icon col-2">
                            <Link to="/customer-home">
                                <img style={{width: '18px', height: '20px'}} src={home} className="icon-button"/>
                            </Link>
                        </div>
                        <div style={{display: menuOpen, marginTop: '5px'}} align="center" className="menu-search col-8">
                            <span style={{height: '35px'}} className="avatar-title bg-light span-table">
                                <div className="div-table">Menu</div>
                            </span>
                        </div>
                        <div style={{display: bsearch}} align="right" className="home-icon col-2">
                            <a onClick={openSearch}>
                                <img src={searchImg} className="icon-button"/>
                            </a>
                        </div>
                        <div style={{display: asearch, marginLeft: '12%', marginTop: '5px'}} align="right"
                             className="col-10">
                            <div className="d-flex">
                                <input className="search-bar" type="text" name="search" placeholder="Tìm kiếm..."
                                    // value={search}
                                       onChange={(e) => (
                                           setSearch(e.target.value)
                                               // props.dispatch(actions.getAllSearchRequest(e.target.value, props.authCustomer.data.user.user_id))
                                       )}
                                />
                                <div style={{backgroundColor: '#FFEFCD', height: '35px'}} align="right"
                                     className="home-icon col-2">
                                    <a onClick={closeSearch}>
                                        <img style={{transform: 'matrix(-1,0,0,1,0,0)', marginTop: '5px'}}
                                             src={searchImg} className="icon-button"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={(search === '') ? 'dis-cate' : 'none-dis-cate'}>
                        <div className="d-flex menu-bar">
                            {categoryMenu.map((category) => (
                                <div className="menu-type-a">
                                    <button className="menu-type">
                                        <div>{(category?.name === 'combo') ? (
                                                <div>
                                                    <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                                         className="avatar-sm profile-user-wid">
                                                        <ScLink
                                                            activeClass="active"
                                                            to="combo"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-136}
                                                            duration={500}
                                                            align="center"
                                                            className="cate-background-color avatar-title rounded-circle">
                                                            <img src={food} className="icon-button-menu"/>
                                                        </ScLink>
                                                    </div>
                                                    <div className="square-text-button">Combo Nướng</div>
                                                </div>
                                            ) :
                                            (category?.name === 'drink') ? (
                                                    <div>
                                                        <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                                             className="avatar-sm profile-user-wid">
                                                            <ScLink
                                                                activeClass="active"
                                                                to="drink"
                                                                spy={true}
                                                                smooth={true}
                                                                offset={-136}
                                                                duration={500}
                                                                align="center"
                                                                className="cate-background-color avatar-title rounded-circle">
                                                                <img src={coffee} className="icon-button-menu"/>
                                                            </ScLink>
                                                        </div>
                                                        <div className="square-text-button">Đồ uống</div>
                                                    </div>
                                                ) :
                                                (category?.name === 'normal') ? (
                                                        <div>
                                                            <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                                                 className="avatar-sm profile-user-wid">
                                                                <ScLink
                                                                    activeClass="active"
                                                                    to="normal"
                                                                    spy={true}
                                                                    smooth={true}
                                                                    offset={-136}
                                                                    duration={500}
                                                                    align="center"
                                                                    className="cate-background-color avatar-title rounded-circle">
                                                                    <img src={chicken} className="icon-button-menu"/>
                                                                </ScLink>
                                                            </div>
                                                            <div className="square-text-button">Gọi món</div>
                                                        </div>
                                                    ) :
                                                    (category?.name === 'fast') ? (
                                                            <div>
                                                                <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                                                     className="avatar-sm profile-user-wid">
                                                                    <ScLink
                                                                        activeClass="active"
                                                                        to="fast"
                                                                        spy={true}
                                                                        smooth={true}
                                                                        offset={-136}
                                                                        duration={500}
                                                                        align="center"
                                                                        className="cate-background-color avatar-title rounded-circle">
                                                                        <img src={bowl} className="icon-button-menu"/>
                                                                    </ScLink>
                                                                </div>
                                                                <div className="square-text-button">Đồ ăn kèm</div>
                                                            </div>
                                                        ) :
                                                        (category?.name === 'alcohol') ? (
                                                                <div>
                                                                    <div style={{marginRight: 'auto', marginLeft: 'auto'}}
                                                                         className="avatar-sm profile-user-wid">
                                                                        <ScLink
                                                                            activeClass="active"
                                                                            to="alcohol"
                                                                            spy={true}
                                                                            smooth={true}
                                                                            offset={-136}
                                                                            duration={500}
                                                                            align="center"
                                                                            className="cate-background-color avatar-title rounded-circle">
                                                                            <img src={wine} className="icon-button-menu"/>
                                                                        </ScLink>
                                                                    </div>
                                                                    <div className="square-text-button">Rượu</div>
                                                                </div>
                                                            ) :
                                                            (category?.name === 'beer') ? (
                                                                <div>
                                                                    <div style={{
                                                                        marginRight: 'auto',
                                                                        marginLeft: 'auto'
                                                                    }}
                                                                         className="avatar-sm profile-user-wid">
                                                                        <ScLink
                                                                            activeClass="active"
                                                                            to="beer"
                                                                            spy={true}
                                                                            smooth={true}
                                                                            offset={-136}
                                                                            duration={500}
                                                                            align="center"
                                                                            className="cate-background-color avatar-title rounded-circle">
                                                                            <img src={beers}
                                                                                 className="icon-button-menu"/>
                                                                        </ScLink>
                                                                    </div>
                                                                    <div className="square-text-button">Bia</div>
                                                                </div>
                                                            ) : null}</div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="cover-list-menu">
                    <div className="side-list-menu-menu">
                        <div className="list-menu-menu">
                            <div className={(search !== '') ? 'dis-search' : 'none-dis-search'}>
                                <div className="title-menu">Món bạn đang tìm là:</div>
                                {props?.dataSearch?.map((se, id) => se?.add_to_cart === false ? (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (se?.is_sold_out === false && se?.quantity === 0) ? '#EEEEEE' : (se?.is_sold_out === false && se?.in_cart > 0) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(se?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${se?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={se?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={se?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(se?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${se?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{se?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(se?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{se?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(se?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(se?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            <div className="avatar-xs">
                                                                {se?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{se?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {se?.quantity > 0 ? (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#FFEFCD',
                                                                        }}>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <Link to={`/customer-detail-combo/${se?._id}`}
                                                                  className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (se?.is_sold_out === false && se?.quantity === 0) ? '#EEEEEE' : (se?.is_sold_out === false && se?.quantity > 0) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(se?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${se?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={se?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={se?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(se?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${se?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{se?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(se?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{se?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(se?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(se?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {se?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (se?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(se?._id, se?.quantity - 1, '', [], se?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                            props.dispatch(actions.getAllSearchRequest(search, props.authCustomer.data.user.user_id));
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + se?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                            props.dispatch(actions.getAllSearchRequest(search, props.authCustomer.data.user.user_id));
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {se?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{se?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(se?._id, se?.quantity + 1, '', [], se?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                    props.dispatch(actions.getAllSearchRequest(search, props.authCustomer.data.user.user_id));
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className={(search === '') ? 'dis-menu' : 'none-dis-menu'}>
                                <div id="combo">
                                    <div className="title-menu"><b>Combo Nướng</b></div>
                                    {listMenu.combo.map((combo) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (combo?.is_sold_out === false && combo?.in_cart === false) ? '#EEEEEE' : (combo?.is_sold_out === false && combo?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(combo?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${combo?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={combo?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={combo?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(combo?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${combo?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{combo?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(combo?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{combo?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(combo?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(combo?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            <div className="avatar-xs">
                                                                {combo?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{combo?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {combo?.quantity > 0 ? (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#FFEFCD',
                                                                        }}>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <Link to={`/customer-detail-combo/${combo?._id}`}
                                                                  className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div><i>Vì Server đóng => fix cứng data, nên 1 vài chức năng ko hoạt động, click vào giữa các món để xem chi tiết</i></div>
                                <div id="drink">
                                    <div className="title-menu"><b>Đồ uống</b></div>
                                    {listMenu.drink?.map((drink) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (drink?.is_sold_out === false && drink?.in_cart === false) ? '#EEEEEE' : (drink?.is_sold_out === false && drink?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(drink?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${drink?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={drink?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={drink?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(drink?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${drink?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{drink?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(drink?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{drink?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(drink?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(drink?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {drink?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (drink?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(drink?._id, drink?.quantity - 1, '', [], drink?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + drink?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {drink?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{drink?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(drink?._id, drink?.quantity + 1, '', [], drink?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div id="normal">
                                    <div className="title-menu"><b>Gọi món</b></div>
                                    {listMenu.normal?.map((normal) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (normal?.is_sold_out === false && normal?.in_cart === false) ? '#EEEEEE' : (normal?.is_sold_out === false && normal?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(normal?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${normal?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={normal?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={normal?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(normal?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${normal?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{normal?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(normal?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{normal?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(normal?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(normal?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {normal?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (normal?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(normal?._id, normal?.quantity - 1, '', [], normal?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + normal?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {normal?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{normal?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(normal?._id, normal?.quantity + 1, '', [], normal?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div id="fast">
                                    <div className="title-menu"><b>Đồ ăn nhanh</b></div>
                                    {listMenu.fast?.map((fast) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (fast?.is_sold_out === false && fast?.in_cart === false) ? '#EEEEEE' : (fast?.is_sold_out === false && fast?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(fast?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${fast?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={fast?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={fast?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(fast?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${fast?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{fast?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(fast?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{fast?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(fast?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(fast?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {fast?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (fast?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(fast?._id, fast?.quantity - 1, '', [], fast?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + fast?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {fast?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{fast?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(fast?._id, fast?.quantity + 1, '', [], fast?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div id="alcohol" className="title-menu"><b>Rượu</b></div>
                                    {listMenu.alcohol?.map((alcohol) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (alcohol?.is_sold_out === false && alcohol?.in_cart === false) ? '#EEEEEE' : (alcohol?.is_sold_out === false && alcohol?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(alcohol?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${alcohol?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={alcohol?.image} alt="" height='80px'
                                                             width='80px'/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={alcohol?.image} alt="" height='80px'
                                                             width='80px'/>
                                                    </div>
                                                )}
                                                {(alcohol?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${alcohol?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{alcohol?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(alcohol?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{alcohol?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(alcohol?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(alcohol?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {alcohol?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (alcohol?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(alcohol?._id, alcohol?.quantity - 1, '', [], alcohol?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + alcohol?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {alcohol?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{alcohol?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(alcohol?._id, alcohol?.quantity + 1, '', [], alcohol?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div id="beer" className="title-menu"><b>Bia</b></div>
                                    {listMenu.beer?.map((beer) => (
                                        <div className="item-menu-other d-flex">
                                            <div style={{
                                                backgroundColor: (beer?.is_sold_out === false && beer?.in_cart === false) ? '#EEEEEE' : (beer?.is_sold_out === false && beer?.in_cart === true) ? '#FFEFCD' : '#CFCFCF'
                                            }} className="col-12 d-flex menu-item-bar">
                                                {(beer?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${beer?._id}`} align="left"
                                                          className="col-3"
                                                          style={{marginLeft: '-12px'}}>
                                                        <img src={beer?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </Link>
                                                ) : (
                                                    <div className="col-3"
                                                         style={{marginLeft: '-12px'}}>
                                                        <img src={beer?.image} alt="" height='65px' width='65px' style={{border: '1px solid grey'}}/>
                                                    </div>
                                                )}
                                                {(beer?.is_sold_out === false) ? (
                                                    <Link to={`/customer-detail-combo/${beer?._id}`} align="left"
                                                          className="col-7">
                                                        <div className="item-name"><b>{beer?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(beer?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div align="left" className="col-7">
                                                        <div className="item-name"><b>{beer?.name}</b></div>
                                                        <div
                                                            className="item-cost">{(beer?.cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnd
                                                        </div>
                                                    </div>
                                                )}
                                                <div align="center" className="other-item col-2">
                                                    {(beer?.is_sold_out === false) ? (
                                                        <div className="d-flex">
                                                            {beer?.quantity > 0 ? (
                                                                <div onClick={() => {
                                                                    if (beer?.quantity > 1) {
                                                                        props.dispatch(addToCartMenuRequest(beer?._id, beer?.quantity - 1, '', [], beer?.cost));
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 600)
                                                                    } else {
                                                                        fetch('http://165.227.99.160/api/customer/cart/item/delete?item_id[]=' + beer?._id, {
                                                                            method: 'POST',
                                                                            headers: authHeaderGetApiCus(),
                                                                        })
                                                                            .then(res => {
                                                                                if (res.ok) {
                                                                                    console.log('DELETE SUCCESS')
                                                                                } else {
                                                                                    console.log('DELETE FAILED')
                                                                                }
                                                                            })
                                                                            .then(data => console.log(data))
                                                                            .catch(error => console.log('ERROR'))
                                                                        setTimeout(() => {
                                                                            props.dispatch(actions.getAllCategoryRequest());
                                                                            props.dispatch(actions.getAllMenuRequest());
                                                                            props.dispatch(actions.getCartRequest());
                                                                        }, 650)
                                                                    }
                                                                }}
                                                                     className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{
                                                                            backgroundColor: '#ffffff',
                                                                            border: '2px solid #FCBC3A'
                                                                        }}>
                                                                        <img src={mathMinus}
                                                                             className="plus-icon-button"/>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-xs">
                                                                    <div
                                                                        className="plus-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="avatar-xs">
                                                                {beer?.quantity > 0 ? (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2">
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}>{beer?.quantity}</b>
                                                                    </div>
                                                                ) : (
                                                                    <div
                                                                        className="quantity-background-color avatar-title rounded-circle mt-2"
                                                                        style={{backgroundColor: '#eeeeee'}}
                                                                    >
                                                                        <b style={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            fontStyle: 'normal',
                                                                            fontFamily: 'Cabin',
                                                                            color: '#000000',
                                                                        }}></b>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={() => {
                                                                props.dispatch(addToCartMenuRequest(beer?._id, beer?.quantity + 1, '', [], beer?.cost));
                                                                setTimeout(() => {
                                                                    props.dispatch(actions.getAllCategoryRequest());
                                                                    props.dispatch(actions.getAllMenuRequest());
                                                                    props.dispatch(actions.getCartRequest());
                                                                }, 600)
                                                            }}
                                                                 className="avatar-xs">
                                                                <div
                                                                    className="plus-background-color avatar-title rounded-circle mt-2">
                                                                    <img src={mathPlus}
                                                                         className="plus-icon-button"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <b style={{
                                                                fontWeight: 'bold',
                                                                fontStyle: 'normal',
                                                                fontFamily: 'Cabin',
                                                                color: '#000000',
                                                            }}>Hết</b>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <Link to="/customer-cart">
                        <button className="cart-button">
                            <div className="text-cart-button"><img style={{width: '22px', height: '19px'}}
                                                                   src={shoppingCart} className="icon-button mr-2"/>Xem
                                danh sách món đã chọn
                            </div>
                        </button>
                    </Link>
                </div>
                <Modal align="center" style={{
                    width: '100px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    height: '100px',
                    marginTop: '200px',
                    marginBottom: "auto",
                }} isOpen={openLoad}>
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
        dataAddToCartMenu: state.Customer.addToCartMenu.dataAddToCartMenu,
        dataSearch: state.Customer.getAllSearch.allSearch,
        dataCart: state.Customer.getCart.dataCart,
        allQueueOrder: state.Customer.getCheckQueueOrder.allQueueOrder,
    };
};

export default withNamespaces()(connect(mapStateToProps)(CustomerMenu));
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../../assets/scss/custom/pages/kitchen/kitchen.scss";

import Header from "../../Kitchen/HeaderKitchen";
import NotFound from "../../Authentication/Page401";
import * as actions from "../../../store/kitchen/actions";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import mathMinus from "../../../assets/images/receptionist/math-minus.png";
import mathPlus from "../../../assets/images/receptionist/math-plus.png";
import ReactPaginate from "react-paginate";
import chevonRight from "../../../assets/images/receptionist/chevron-down.png";
import trash from "../../../assets/images/receptionist/trashre.png";
import moveRight from "../../../assets/images/waiter/move-right.png";
import { Modal } from "reactstrap";
import Footer from "../../../components/RdosCustomerLayout/Footer";
import useSound from "use-sound";
import dingAudio from "../../../assets/audio/applepay.mp3";
import firebase from "../../../helpers/firebase";
import { Link } from "react-router-dom";
import { authHeaderGetApi } from "../../../helpers/jwt-token-access/auth-token-header";

const OrderList = (props) => {
  const [openUpdateStatus, setOpenUpdateStatus] = useState(false);
  const [openDeleteStatus, setOpenDeleteStatus] = useState(false);
  let statusState = [
    { id: "s1", code: "prepare", name: "Chuẩn bị" },
    { id: "s2", code: "completed", name: "Hoàn thành" },
  ];

  const [outTimeServe, setOutTimeServe] = useState(false);

  const [displayStatus, setStatus] = useState("prepare");

  const [pageSize] = useState(10);

  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(props?.allDishInConfirm?.total / pageSize);
  const changePage = ({ selected }) => {
    setPage(selected + 1);
    props.dispatch(actions.getAllDishInConfirmRequest(selected + 1));
  };

  const [pageCompleted, setPageCompleted] = useState(1);
  const numberOfButtons = Math.ceil(props?.allDishInComplete?.total / pageSize);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (pageCompleted === 1) {
        setPageCompleted(1);
        props.dispatch(actions.getAllDishInCompletedRequest(1));
      } else {
        setPageCompleted(pageCompleted - 1);
        props.dispatch(actions.getAllDishInCompletedRequest(pageCompleted - 1));
      }
    } else if (type === "next") {
      if (numberOfButtons === pageCompleted) {
        setPageCompleted(pageCompleted);
        props.dispatch(actions.getAllDishInCompletedRequest(pageCompleted));
      } else {
        setPageCompleted(pageCompleted + 1);
        props.dispatch(actions.getAllDishInCompletedRequest(pageCompleted + 1));
      }
    }
  };

  const [role, setrole] = useState([]);
  const [allDishConfirm, setAllDishConfirm] = useState([
    {
      _id: "60e2e5bf04000000a7004829",
      table_id: "60bf956e37610000b8004ec6",
      table_name: "Bàn 2",
      item_name: "Khoai lang kén",
      quantity: 2,
      status: "prepare",
      category_id: "60c244a6e06b000084000b44",
      updated_at: "2021-07-05T10:58:07.269000Z",
      created_at: "2021-07-05T10:58:07.269000Z",
    },
  ]);

  useEffect(() => {
    // if (localStorage.getItem("authUser")) {
    //     const obj = JSON.parse(localStorage.getItem("authUser"));
    //     setrole(obj.data.user.role);
    // }
  }, []);

  console.log("role :" + role);

  const [matchFood, setMatchFood] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [toggleSwitch, settoggleSwitch] = useState(false);
  const [openMatchingSuccess, setOpenMatchingSuccess] = useState(false);
  const [openMatchingFail, setOpenMatchingFail] = useState(false);
  const [openMatchingFailOther, setOpenMatchingFailOther] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const testMatchTable = updatedCheckedState.map((currentState, index) => {
      if (currentState === true) {
        return "_id[" + index + "]=" + allDishConfirm[index]._id;
      }
    });
    setMatchFood(
      testMatchTable.filter(function (el) {
        return el != null;
      })
    );
  };

  console.log(
    "matchFood: " +
      "http://165.227.99.160/api/kitchen/item/export/many?" +
      matchFood.join("&")
  );

  const kitchen = {
    kitchenChoose: "1",
  };

  const [successOn] = useSound(dingAudio, { volume: 1 });

  return (
    <React.Fragment>
      <div className="display-receptionist">
        <Header item={kitchen} />
        <div align="center" className="kitchen-order">
          <div align="center" className="col-xl-12">
            <div className="side-content">
              <div align="center" className="list-order-re d-flex">
                <div className="col-4"></div>
                <div className="col-4">
                  <b>Danh sách món</b>
                </div>
                <div className="col-4 d-flex">
                  <div className="gop-hoa-don col-4" align="right">
                    <label style={{ width: "100%" }}>
                      <input
                        className="check-all-button-matching"
                        type="checkbox"
                        onChange={() => {
                          settoggleSwitch(!toggleSwitch);
                          setCheckedState(
                            new Array(allDishConfirm.length).fill(false)
                          );
                        }}
                        checked={toggleSwitch === true ? true : false}
                      />
                      <div className="choose-all-matching">
                        <div
                          style={{ paddingTop: "8px" }}
                          className="choose-text-matching"
                        >
                          Chọn nhiều món
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="col-8">
                    {toggleSwitch === true ? (
                      <button
                        style={{
                          height: "45px",
                          width: "100%",
                          backgroundColor: "#FCBC3A",
                          color: "#000000",
                          border: "1px solid #FCBC3A",
                          fontSize: "18px",
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          setOpenMatchingSuccess(true);
                          successOn();

                          setTimeout(() => {
                            setOpenMatchingSuccess(false);
                            settoggleSwitch(false);
                            setCheckedState(
                              new Array(allDishConfirm.length).fill(false)
                            );
                            setMatchFood([]);
                          });
                        }}
                      >
                        Xuất nhiều món
                      </button>
                    ) : (
                      <button
                        style={{
                          height: "45px",
                          width: "100%",
                          backgroundColor: "#eeeeee",
                          color: "#000000",
                          border: "1px solid #eeeeee",
                          fontSize: "18px",
                          borderRadius: "10px",
                        }}
                        disabled={true}
                      >
                        Xuất nhiều món
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="ra-button-re d-flex">
                <div className="col-2"></div>
                <div className="col-8 d-flex">
                  {statusState.map((result) => (
                    <div
                      align="center"
                      className="col-6"
                      style={{ width: "100%" }}
                    >
                      <label style={{ width: "100%" }}>
                        <input
                          type="radio"
                          id={result.id}
                          style={{ opacity: "0" }}
                          className="status-check-re"
                          value={result.code}
                          name="statusValue"
                          checked={displayStatus === result.code}
                          // onChange={(e) => {
                          //     setStatus(e.target.value)
                          //     props.dispatch(actions.getAllDishInConfirmRequest(page));
                          //     props.dispatch(actions.getAllDishInCompletedRequest(pageCompleted));
                          //     setCheckedState(new Array(props?.listConfirmOrderReceptionist?.data?.length).fill(false))
                          //     setMatchFood([])
                          //     settoggleSwitch(false)
                          // }}
                        />{" "}
                        <b className="input-status-re">{result.name}</b>
                        <div htmlFor={result.id} className="line-color"></div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="col-2"></div>
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0px solid #ffffff",
                  }}
                  className="card-order d-flex"
                >
                  <div align="left" className="col-1 card-detail-order-text">
                    <b>Mã order</b>
                  </div>
                  <div align="left" className="col-1 card-detail-order-text">
                    <b>Mã bàn</b>
                  </div>
                  <div align="left" className="col-2 card-detail-order-text">
                    <b>Tên món</b>
                  </div>
                  <div align="left" className="col-1 card-detail-order-text">
                    <b>Kiểu món</b>
                  </div>
                  <div
                    style={{ paddingLeft: "0px" }}
                    align="center"
                    className="col-1 card-detail-order-text"
                  >
                    <b>Số lượng</b>
                  </div>
                  <div align="center" className="col-3 card-detail-order-text">
                    <b>Ghi chú</b>
                  </div>
                  <div align="center" className="col-1 card-detail-order-text">
                    <b>Trạng thái</b>
                  </div>
                  <div align="center" className="col-1 card-detail-order-text">
                    <b>Xuất món</b>
                  </div>
                  <div align="center" className="col-1 card-detail-order-text">
                    <b>Xóa</b>
                  </div>
                </div>
                {displayStatus === "prepare" ? (
                  <div>
                    <div
                      style={{
                        width: "100%",
                        marginTop: "25px",
                        marginBottom: "15px",
                      }}
                    >
                      {allDishConfirm.map((it, i) => (
                        <div>
                          <label style={{ width: "100%" }}>
                            <input
                              onChange={() => {
                                handleOnChange(i);
                              }}
                              checked={checkedState[i]}
                              type="checkbox"
                              id={it._id}
                              value={it._id}
                              name={it._id}
                              style={{ display: "none" }}
                              className="check-re-order"
                              disabled={toggleSwitch === true ? false : true}
                            />
                            <div
                              style={{ borderRadius: "20px" }}
                              className={
                                it?.is_late === true
                                  ? "card-order-time-out col-12 d-flex"
                                  : "card-order col-12 d-flex"
                              }
                            >
                              <div
                                align="left"
                                className="col-1 card-detail-order-text-child"
                              >
                                <div>{it?.order_code}</div>
                              </div>
                              <div
                                align="left"
                                className="col-1 card-detail-order-text-child"
                              >
                                <b>{it?.table_name}</b>
                              </div>
                              <div
                                align="left"
                                className="col-2 card-detail-order-text-child"
                              >
                                <b>{it?.item_name}</b>
                              </div>
                              <div
                                align="left"
                                className="col-1 card-detail-order-text-child"
                              ></div>
                              <div
                                align="center"
                                className="col-1 card-detail-order-text-child"
                              >
                                <div>{it?.quantity}</div>
                              </div>
                              <div
                                align="center"
                                className="col-3 card-detail-order-text-child"
                              >
                                <b>{it?.note !== "" ? it?.note : null}</b>
                              </div>
                              <div
                                align="center"
                                className="col-1 card-detail-order-text-child"
                              >
                                {it?.is_late === true ? (
                                  <i style={{ color: "red" }}>Phục vụ trễ</i>
                                ) : (
                                  <b style={{ color: "#FCBC3A" }}>Chuẩn bị</b>
                                )}
                              </div>
                              <div
                                align="center"
                                className="col-1 card-detail-order-text-child"
                              >
                                <div
                                  style={{
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                  className="avatar-xs profile-user-wid mr-3"
                                >
                                  <a
                                    align="center"
                                    className="avatar-title rounded-circle"
                                    style={{
                                      backgroundColor: "#FFEFCD",
                                      border: "1px solid #FCBC3A",
                                    }}
                                    onClick={(e) => {
                                      props.dispatch(
                                        actions.updateStatusOfDishRequest(
                                          it?._id
                                        )
                                      );
                                      setOpenUpdateStatus(true);
                                      successOn();
                                      setCheckedState(
                                        new Array(
                                          props?.listConfirmOrderReceptionist?.data?.length
                                        ).fill(false)
                                      );
                                      setMatchFood([]);
                                      settoggleSwitch(false);
                                      setTimeout(() => {
                                        setOpenUpdateStatus(false);
                                        props.dispatch(
                                          actions.getAllDishInConfirmRequest(
                                            page
                                          )
                                        );
                                        props.dispatch(
                                          actions.getAllDishInCompletedRequest(
                                            pageCompleted
                                          )
                                        );
                                      }, 2000);
                                    }}
                                  >
                                    <img
                                      src={moveRight}
                                      className="icon-button-menu-manage-table"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div
                                align="center"
                                className="col-1 card-detail-order-text-child"
                              >
                                <div
                                  style={{
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                  className="avatar-xs profile-user-wid mr-3"
                                >
                                  <a
                                    align="center"
                                    className="avatar-title rounded-circle"
                                    style={
                                      it?.is_late === true
                                        ? {
                                            backgroundColor: "#ffffff",
                                            border: "1px solid red",
                                          }
                                        : {
                                            backgroundColor: "#FFD1D1",
                                            border: "1px solid red",
                                          }
                                    }
                                    onClick={() => {
                                      props.dispatch(
                                        actions.deleteItemConfirmRequest(
                                          it?._id,
                                          it?.order_id,
                                          it?.category_id,
                                          it?.item_id
                                        )
                                      );
                                      setOpenDeleteStatus(true);
                                      successOn();
                                      setCheckedState(
                                        new Array(
                                          props?.listConfirmOrderReceptionist?.data?.length
                                        ).fill(false)
                                      );
                                      setMatchFood([]);
                                      settoggleSwitch(false);
                                      setTimeout(() => {
                                        setOpenDeleteStatus(false);
                                        props.dispatch(
                                          actions.getAllDishInConfirmRequest(
                                            page
                                          )
                                        );
                                        props.dispatch(
                                          actions.getAllDishInCompletedRequest(
                                            pageCompleted
                                          )
                                        );
                                      }, 2000);
                                    }}
                                  >
                                    <img
                                      src={trash}
                                      className="icon-button-menu-manage-table"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <ReactPaginate
                        previousLabel={
                          <img
                            src={chevonRight}
                            className="plus-icon-button-re-left-page"
                          />
                        }
                        nextLabel={
                          <img
                            src={chevonRight}
                            className="plus-icon-button-re-right-page"
                          />
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
                ) : (
                  <div>
                    <div
                      style={{
                        width: "100%",
                        marginTop: "25px",
                        marginBottom: "15px",
                      }}
                    >
                      {props?.allDishInComplete?.data?.map((it, i) => (
                        <div
                          style={{ borderRadius: "20px" }}
                          className="card-order d-flex"
                        >
                          <div
                            align="left"
                            className="col-1 card-detail-order-text-child"
                          >
                            <div>{it?.order_code}</div>
                          </div>
                          <div
                            align="left"
                            className="col-1 card-detail-order-text-child"
                          >
                            <b>{it?.table_name}</b>
                          </div>
                          <div
                            align="left"
                            className="col-2 card-detail-order-text-child"
                          >
                            <b>{it?.item_name}</b>
                          </div>
                          <div
                            align="left"
                            className="col-1 card-detail-order-text-child"
                          >
                            <b>
                              {it?.category.map((ic) =>
                                ic.name === "combo"
                                  ? "Combo"
                                  : ic.name === "normal"
                                  ? "Món lẻ"
                                  : "Đồ ăn nhanh"
                              )}
                            </b>
                          </div>
                          <div
                            align="center"
                            className="col-1 card-detail-order-text-child"
                          >
                            <div>{it?.quantity}</div>
                          </div>
                          <div
                            align="center"
                            className="col-3 card-detail-order-text-child"
                          >
                            <b>{it?.note !== null ? it?.note : "(Không có)"}</b>
                          </div>
                          <div
                            align="center"
                            className="col-1 card-detail-order-text-child"
                          >
                            <b style={{ color: "green" }}>Hoàn thành</b>
                          </div>
                          <div
                            align="center"
                            className="col-1 card-detail-order-text-child"
                          >
                            <div
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                              className="avatar-xs profile-user-wid mr-3"
                            >
                              <a
                                align="center"
                                className="avatar-title rounded-circle"
                                style={{
                                  backgroundColor: "#FFEFCD",
                                  border: "1px solid #FCBC3A",
                                }}
                                onClick={(e) => {
                                  props.dispatch(
                                    actions.updateStatusOfDishRequest(it?._id)
                                  );
                                  setOpenUpdateStatus(true);
                                  successOn();
                                  setTimeout(() => {
                                    setOpenUpdateStatus(false);
                                    props.dispatch(
                                      actions.getAllDishInConfirmRequest(page)
                                    );
                                    props.dispatch(
                                      actions.getAllDishInCompletedRequest(
                                        pageCompleted
                                      )
                                    );
                                  }, 1500);
                                }}
                              >
                                <img
                                  src={moveRight}
                                  className="icon-button-menu-manage-table"
                                />
                              </a>
                            </div>
                          </div>
                          <div
                            align="center"
                            className="col-1 card-detail-order-text-child"
                          >
                            <div
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                              className="avatar-xs profile-user-wid mr-3"
                            >
                              <a
                                align="center"
                                className="avatar-title rounded-circle"
                                style={{
                                  backgroundColor: "#FFD1D1",
                                  border: "1px solid red",
                                }}
                                onClick={() => {
                                  props.dispatch(
                                    actions.deleteItemConfirmRequest(
                                      it?._id,
                                      it?.order_id,
                                      it?.category_id,
                                      it?.item_id
                                    )
                                  );
                                  setOpenDeleteStatus(true);
                                  successOn();
                                  setTimeout(() => {
                                    setOpenDeleteStatus(false);
                                    props.dispatch(
                                      actions.getAllDishInConfirmRequest(page)
                                    );
                                    props.dispatch(
                                      actions.getAllDishInCompletedRequest(
                                        pageCompleted
                                      )
                                    );
                                  }, 1500);
                                }}
                              >
                                <img
                                  src={trash}
                                  className="icon-button-menu-manage-table"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                style={{ borderColor: "#FCBC3A" }}
                                className="page-link"
                                onClick={() => {
                                  onButtonClick("prev");
                                }}
                              >
                                <img
                                  style={{ width: "15px", height: "15px" }}
                                  src={chevonRight}
                                  className="plus-icon-button-re-left-page"
                                />
                              </a>
                            </li>

                            {new Array(numberOfButtons)
                              .fill("")
                              .map((el, index) => (
                                <li
                                  className={`page-item ${
                                    index + 1 === pageCompleted
                                      ? "active-paging"
                                      : null
                                  }`}
                                >
                                  <a
                                    className="page-link"
                                    onClick={() => {
                                      setPageCompleted(index + 1);
                                      props.dispatch(
                                        actions.getAllDishInCompletedRequest(
                                          index + 1
                                        )
                                      );
                                    }}
                                  >
                                    {index + 1}
                                  </a>
                                </li>
                              ))}
                            <li className="page-item">
                              <a
                                style={{ borderColor: "#FCBC3A" }}
                                className="page-link"
                                onClick={() => {
                                  onButtonClick("next");
                                }}
                              >
                                <img
                                  style={{ width: "15px", height: "15px" }}
                                  src={chevonRight}
                                  className="plus-icon-button-re-right-page"
                                />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal
          align="center"
          style={{
            width: "350px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100px",
            marginTop: "200px",
            marginBottom: "auto",
          }}
          isOpen={openUpdateStatus}
        >
          <div style={{ backgroundColor: "#FFEFCD" }} align="center">
            <i
              style={{ color: "#FCBC3A", fontSize: "50px" }}
              className="bx bx-calendar-check bx-tada"
            ></i>
            <div
              style={{
                fontFamily: "Cabin",
                fontSize: "15px",
              }}
            >
              <b>Xuất phiếu thành công !</b>
            </div>
          </div>
        </Modal>
        <Modal
          align="center"
          style={{
            width: "350px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100px",
            marginTop: "200px",
            marginBottom: "auto",
          }}
          isOpen={openDeleteStatus}
        >
          <div style={{ backgroundColor: "#FFEFCD" }} align="center">
            <i
              style={{ color: "#FCBC3A", fontSize: "50px" }}
              className="bx bx-calendar-check bx-tada"
            ></i>
            <div
              style={{
                fontFamily: "Cabin",
                fontSize: "15px",
              }}
            >
              <b>Xóa món thành công !</b>
            </div>
          </div>
        </Modal>
        <Modal
          align="center"
          style={{
            width: "350px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100px",
            marginTop: "200px",
            marginBottom: "auto",
          }}
          isOpen={openMatchingFail}
        >
          <div style={{ backgroundColor: "#FFEFCD" }} align="center">
            <i
              style={{ color: "red", fontSize: "50px" }}
              className="bx bx-calendar-exclamation bx-tada"
            ></i>
            <div
              style={{
                fontFamily: "Cabin",
                fontSize: "15px",
              }}
            >
              <b>Bạn phải chọn nhiều hơn 1 món để gộp !</b>
            </div>
          </div>
        </Modal>
        <Modal
          align="center"
          style={{
            width: "350px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100px",
            marginTop: "200px",
            marginBottom: "auto",
          }}
          isOpen={openMatchingFailOther}
        >
          <div style={{ backgroundColor: "#FFEFCD" }} align="center">
            <i
              style={{ color: "red", fontSize: "50px" }}
              className="bx bx-calendar-exclamation bx-tada"
            ></i>
            <div
              style={{
                fontFamily: "Cabin",
                fontSize: "15px",
              }}
            >
              <b>Chỉ được gộp các món trong cùng order !</b>
            </div>
          </div>
        </Modal>
        <Modal
          align="center"
          style={{
            width: "350px",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100px",
            marginTop: "200px",
            marginBottom: "auto",
          }}
          isOpen={openMatchingSuccess}
        >
          <div style={{ backgroundColor: "#FFEFCD" }} align="center">
            <i
              style={{ color: "#FCBC3A", fontSize: "50px" }}
              className="bx bx-calendar-check bx-tada"
            ></i>
            <div
              style={{
                fontFamily: "Cabin",
                fontSize: "15px",
              }}
            >
              <b>Gộp món xuất món thành công !</b>
            </div>
          </div>
        </Modal>
        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    // totalsOfNotification:
    // state.Notification.totalOfNotifications.totalNotifications,
    allDishInConfirm: state.Kitchen.allDishInConfirmKitchen.allDishInConfirm,
    allDishInComplete: state.Kitchen.allDishInCompleteKitchen.allDishInComplete,
    allUpdateStatusOfDish:
      state.Kitchen.updateStatusOfDishKitchen.allUpdateStatusOfDish,
  };
};

export default withNamespaces()(connect(mapStateToProps)(OrderList));

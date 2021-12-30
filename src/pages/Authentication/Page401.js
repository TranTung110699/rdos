import React, { useEffect, useState } from "react";
import "../../assets/scss/custom/pages/Authentication/loading.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import error from "../../assets/images/error-img.png";

const Page401 = (props) => {
  const [role, setrole] = useState([]);

  useEffect(() => {
    // if (localStorage.getItem("authUser")) {
    //     const obj = JSON.parse(localStorage.getItem("authUser"));
    //     setrole(obj.data.user.role);
    // }
  }, [props.success]);

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium">
                  4<i className="bx bx-buoy bx-spin text-primary display-3"></i>
                  1
                </h1>
                <h4 className="text-center">
                  Xin lỗi, bạn không có quyền truy cập vào trang web này.
                </h4>
                <div className="mt-5 text-center">
                  {!localStorage.getItem("authUser") ? (
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="/login"
                    >
                      Quay trở lại trang Đăng nhập.
                    </Link>
                  ) : (
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to={"/login"}
                    >
                      Quay trở lại.
                    </Link>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8" xl="6">
              <div>
                <img src={error} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(connect()(Page401));

import React from 'react';

import {Row, Col, CardBody, Card, Alert, Container} from "reactstrap";

// Redux
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';

// availity-reactstrap-validation
import {AvForm, AvField} from 'availity-reactstrap-validation';

// actions
import {loginUser, apiError, logoutUser} from '../../store/auth/login/actions';

// import images
import profile from "../../assets/images/customer/logo-after-design.png";


const Login = (props) => {

    // handleValidSubmit
    function handleValidSubmit(event, values) {
        // props.loginUser(values, props.history);
    }

    return (
        <React.Fragment>
            <div className="home-btn d-none d-sm-block">
                <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
            </div>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-soft-primary">
                                    <Row style={{backgroundColor: '#ffffff'}}>
                                        <Col align='center' className="col-12 mt-3">
                                            <img style={{width:'138px', height: '120px'}} src={profile} alt="" className="img-fluid"/>
                                        </Col>
                                    </Row>
                                    <Row style={{backgroundColor: '#ffffff'}}>
                                        <Col align='center' className="col-12">
                                            <div className="p-4">
                                                <div style={{
                                                    color: '#FCBC3A',
                                                    fontSize: '22px',
                                                    fontStyle: 'normal',
                                                    fontWeight: 'bold',
                                                    fontFamily:'Cabin'
                                                }}>
                                                    Xin ch??o b???n !
                                                </div>
                                                <p style={{fontFamily:'Cabin'}}>????ng nh???p ????? ti???p t???c v???i RDOS.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <h3 align='center' style={{color: 'black', fontSize: '15px', fontFamily:'Cabin'}}>Restaurant Digital
                                            Order
                                            System</h3>
                                    </div>
                                    <div className="p-2">

                                        <AvForm className="form-horizontal" >

                                            {/*{props.error && props.error ? <Alert color="danger">{props.error}</Alert> : null}*/}

                                            {/*<div className="form-group" style={{fontFamily:'Cabin'}}>*/}
                                            {/*    <AvField name="username" label="T??n ????ng nh???p" className="form-control"*/}
                                            {/*             placeholder="Nh???p t??n ????ng nh???p" type="text" />*/}
                                            {/*</div>*/}

                                            {/*<div className="form-group" style={{fontFamily: 'Cabin'}}>*/}
                                            {/*    <AvField name="password" label="M???t kh???u" type="password"*/}
                                            {/*              placeholder="Nh???p m???t kh???u"/>*/}
                                            {/*</div>*/}

                                            <div className="mt-3"><i>(V?? Server ???? ????ng n??n fix c???ng c??c n??t ????? link ?????n trang)</i></div>
                                            <div className="mt-3">
                                                <button style={{
                                                    backgroundColor: '#FCBC3A',
                                                    color: '#000000',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    borderRadius: '10px',
                                                    fontFamily:'Cabin',
                                                    border: '1px solid #FCBC3A'
                                                }}
                                                        onClick={()=>{
                                                            props.history.push("/customer-login")
                                                        }}
                                                        className="btn btn-primary btn-block waves-effect waves-light"
                                                        type="submit">M??n h??nh Kh??ch h??ng(??i???n tho???i)
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <button style={{
                                                    backgroundColor: '#FCBC3A',
                                                    color: '#000000',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    borderRadius: '10px',
                                                    fontFamily:'Cabin',
                                                    border: '1px solid #FCBC3A'
                                                }}
                                                        onClick={()=>{
                                                            props.history.push("/waiter-view-all-table")
                                                        }}
                                                        className="btn btn-primary btn-block waves-effect waves-light"
                                                        type="submit">M??n h??nh Ph???c v???(??i???n tho???i)
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <button style={{
                                                    backgroundColor: '#FCBC3A',
                                                    color: '#000000',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    borderRadius: '10px',
                                                    fontFamily:'Cabin',
                                                    border: '1px solid #FCBC3A'
                                                }}
                                                        onClick={()=>{
                                                            props.history.push("/receptionist-home")
                                                        }}
                                                        className="btn btn-primary btn-block waves-effect waves-light"
                                                        type="submit">M??n h??nh Thu ng??n(desktop)
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <button style={{
                                                    backgroundColor: '#FCBC3A',
                                                    color: '#000000',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    borderRadius: '10px',
                                                    fontFamily:'Cabin',
                                                    border: '1px solid #FCBC3A'
                                                }}
                                                        onClick={()=>{
                                                            props.history.push("/kitchen-home")
                                                        }}
                                                        className="btn btn-primary btn-block waves-effect waves-light"
                                                        type="submit">M??n h??nh Qu???n l?? b???p(desktop)
                                                </button>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>?? {new Date().getFullYear()} RDOS. Crafted with
                                    <i style={{color: '#FCBC3A'}} className="mdi mdi-heart"></i> by <b>SWP490_G49</b>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}


const mapStatetoProps = state => {
    const {error} = state.Login;
    return {error};
}

export default withRouter(connect(mapStatetoProps, {loginUser, apiError})(Login));
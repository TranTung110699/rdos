import React from 'react';

import {Row, Col, CardBody, Card, Alert, Container} from "reactstrap";

// Redux
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';

// availity-reactstrap-validation
import {AvForm, AvField} from 'availity-reactstrap-validation';

// actions
import {customerLoginUser, apiErrorCus} from '../../store/auth/logincustomer/actions';

// import images
import profile from "../../assets/images/customer/logo-after-design.png";

const LoginCustomer = (props) => {

    // handleValidSubmit
    function handleValidSubmit(event, values) {
        // props.customerLoginUser(values, props.history);
    }

    let query = new URLSearchParams(window.location.search);

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
                                                    fontStyle: 'normal',
                                                    fontWeight: 'bold',
                                                    fontSize: '22px',
                                                    fontFamily: 'Cabin',
                                                    lineHeight: '27px',
                                                }}><b>Chào mừng bạn !</b></div>
                                                <p style={{
                                                    color: '#000000',
                                                    fontStyle: 'normal',
                                                    fontWeight: 'bold',
                                                    fontSize: '14px',
                                                    fontFamily: 'Cabin',
                                                    lineHeight: '17px',
                                                }}>Đến với Nhất nướng</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0 mt-2">
                                    <div align='center'>
                                        <div className="mb-4">
                                                <span style={{
                                                    width: '120px',
                                                    height: '34px',
                                                    background: '#EEEEEE',
                                                    borderRadius: '20px'
                                                }} className="avatar-title bg-light">
                                                    <div style={{
                                                        fontStyle: 'normal',
                                                        fontWeight: 'bold',
                                                        fontSize: '14px',
                                                        lineHeight: '17px',
                                                        textAlign: 'center',
                                                        color: '#1E1C19',
                                                        fontFamily:'Cabin',
                                                    }}>MB01</div>
                                                </span>
                                        </div>
                                    </div>
                                    <div className="p-2">

                                        <AvForm className="form-horizontal" >

                                            {/*{props.error && props.error ? <Alert color="danger">{props.error}</Alert> : null}*/}

                                            <div style={{display: 'none'}} className="form-group">
                                                <AvField name="username" label="Username" className="form-control"
                                                         placeholder="Enter username" type="text" required
                                                         value={query.get("username")}/>
                                            </div>

                                            <div style={{display: 'none'}} className="form-group">
                                                <AvField name="password" label="Password" type="password"
                                                         required placeholder="Enter Password"
                                                         value={query.get("password")}/>
                                            </div>

                                            <div className="mt-3">
                                                <button style={{
                                                    backgroundColor: '#FCBC3A',
                                                    color: '#000000',
                                                    borderRadius: '10px',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    fontFamily:'Cabin',
                                                    border: '1px solid #FCBC3A'
                                                }}
                                                        //code for demo
                                                        onClick={()=>{
                                                            props.history.push("/customer-home")
                                                        }}
                                                        className="btn btn-primary btn-block waves-effect waves-light"
                                                        type="submit">Tiếp tục
                                                </button>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>© {new Date().getFullYear()} RDOS. Crafted with
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
    const {errorcus} = state.LoginCustomer;
    return {errorcus};
}

export default withRouter(connect(mapStatetoProps, {customerLoginUser, apiErrorCus})(LoginCustomer));
import React, {useEffect, useState, Component} from "react";

import "../../../assets/scss/custom/pages/receptionist/receptionist.scss";

import {Button, Col, Container, Input, Modal, Row, Table} from "reactstrap/es";
import {Controller, useForm} from "react-hook-form";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import * as actions from "../../../store/receptionist/actions";

// Import menuDropdown

const AddTable = (props) => {

    const {open, onClose, handleSubmitAddTable} = props;
    const {handleSubmit, control} = useForm();
    const [noEditTable, setNoEditTable] = useState('none');
    const [noEditTableTwo, setNoEditTableTwo] = useState('none');
    const [noEditMaxCus, setNoEditMaxCus] = useState('none');
    const [table_number, setTableNumber] = useState('');
    const [max_customer, setMaxCustomer] = useState('');

    const submit = () => {
        const postData = {
            table_number: table_number,
            max_customer: max_customer,
        };
        handleSubmitAddTable(postData);
    };

    console.log("tesststt: " + props?.allTableReceptionistNoPagesize?.data?.map((tb) => tb.full_name))
    console.log("table_number_add: " + table_number);
    console.log("max_customer_add: " + max_customer);

    return (
        <Modal size="md" isOpen={open} toggle={onClose} className="pt-5">
            <form align='center'
                  style={{
                      marginTop: '50px',
                      marginBottom: '60px',
                      borderRadius: '20px',
                  }}
            >
                <div><b style={{fontSize: '20px', fontFamily: 'Cabin'}}>Thêm bàn</b></div>
                <div className="modal-body">
                    <Row>
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
                                            } else if(e.target.value.match(/[0-9]/g) === null){
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
                                    onClick={submit}
                                    style={{
                                        width: '80%',
                                        backgroundColor: '#FCBC3A',
                                        color: '#000000',
                                    }}
>
                                    <div style={{
                                        color: '#000000',
                                        fontWeight: 'bold',
                                        fontFamily: 'Cabin'
                                    }}>Thêm bàn
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </form>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        // totalsOfNotification:
        // state.Notification.totalOfNotifications.totalNotifications,
        allTableReceptionistNoPagesize: state.Receptionist.getAllTableReceptionistNoPagesize.allTableReceptionistNoPagesize,
    };
};

export default withNamespaces()(connect(mapStateToProps)(AddTable));
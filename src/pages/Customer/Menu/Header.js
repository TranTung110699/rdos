import React, {useEffect, useMemo, useState} from "react";

//Import scss
import "../../../assets/scss/custom/pages/customer/menu.scss";
import {Link} from "react-router-dom";
import {FormGroup} from "reactstrap/es";
import { Controller, useForm } from "react-hook-form";
import {Select} from "@material-ui/core";
import {connect, useSelector} from "react-redux";
import * as actions from "../../../store/customer/actions";
import {withNamespaces} from "react-i18next";

function HeaderMenu(props){

    const { control } = useForm();
    // const item = useSelector((state) => state?.Customer?.getAllMenu?.allMenu);
    const optionReceiver = useMemo(() => {
        return (props?.dataMenu?.combo?.map((combo) => ({
            username: combo.username,
        }))) && (props?.dataMenu?.drink?.map((drink) => ({
            username: drink.username,
        }))) && (props?.dataMenu?.fast?.map((fast) => ({
            username: fast.username,
        })));
    }, [props.dataMenu]);

    return (
        <React.Fragment>
            <div className="d-flex">
                <div className="home-icon col-2"><Link to="/customer-home"><div>(icon)</div><div>home</div></Link></div>
                <div align="center" className="menu-search col-8">
                    <FormGroup className="select2-container">
                        <Controller
                            control={control}
                            name="item"
                            render={({ onChange, value }) => (
                                <Select
                                    value={value}
                                    onChange={onChange}
                                    options={optionReceiver}
                                    classNamePrefix="select2-selection"
                                />
                            )}
                        />
                    </FormGroup>
                </div>
                <div className="table-header col-2">RDOS</div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        dataMenu: state.Customer.getAllMenu.allMenu,
    };
};
export default withNamespaces()(connect(mapStateToProps)(HeaderMenu));
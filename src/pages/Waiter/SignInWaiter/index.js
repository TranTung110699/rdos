import React, {useState, Component, useEffect} from "react";
import {Link} from 'react-router-dom';
//Import scss

function SignIn() {
    return(
        <React.Fragment>
            <div className="header">
                <h3>RDOS</h3>
            </div>

            <div style={{textAlign: "center"}}>
                <h1>Đăng Nhập</h1>

                    <input className="feild" type="text" name="userName" placeholder="Tài Khoản"/><br/>
                    <input className="feild" type="password" name="password" placeholder="Mật Khẩu"/><br/>
                   <Link to="/waiter-view-all-table">
                       <input type="submit" value="Login"/>
                   </Link>

            </div>
        </React.Fragment>
    )
};


export default SignIn;
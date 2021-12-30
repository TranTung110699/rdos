import React from "react";
import {Redirect} from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import NotFound from "../pages/Authentication/Page401";

import Loading from "../pages/Authentication/Loading";

// Customer Home page
import CustomerHome from "../pages/Customer/Home";

//Customer Menu page
import CustomerMenu from "../pages/Customer/Menu/index";

// Customer Invalid page
import Invalid from "../pages/Customer/Invalid";

import DetailCombo from "../pages/Customer/Detail/DetailCombo";
import App from "../App";
import Cart from "../pages/Customer/Cart";
import SeeOrder from "../pages/Customer/SeeOrder/index";
import DetailItemOrder from "../pages/Customer/SeeOrder/DetailOrder";
import Feedback from "../pages/Customer/Feedback";
import OrderList from "../pages/Receptionist/OrderList";
import ViewFeedback from "../pages/Receptionist/ViewFeedback";
import ViewAllTable from "../pages/Waiter/home";
import CheckList from "../pages/Waiter/CheckList/index";
import CheckListFood from "../pages/Waiter/CheckList/Food";
import ConfirmOrder from "../pages/Waiter/DetailTable/ConfirmOrder";
import ConfirmedOrder from "../pages/Waiter/DetailTable/ConfirmedOrder";
import ChangeTable from "../pages/Waiter/DetailTable/ChangeTable";
import Notification from "../pages/Waiter/DetailTable/Notification";
import KitchenOrderList from "../pages/Kitchen/OrderList/index";
import KitchenMenu from "../pages/Kitchen/MenuManagement";
import Timeout from "../pages/Authentication/Timeout";
import LoginCustomer from "../pages/Authentication/LoginCustomer";
import ManageTable from "../pages/Receptionist/ManageTable";
import DetailOrder from "../pages/Customer/SeeOrder/DetailOrder";
import DetailItem from "../pages/Waiter/DetailTable/DetailItem";
import ChangePassword from "../pages/Receptionist/ChangePassword";
import CheckDrink from "../pages/Customer/SeeOrder/CheckDrink";
import CheckFood from "../pages/Customer/SeeOrder/CheckFood";

// Waiter Page;

export const customerRoutes = [
    //Authentication
    {path: "/customer-login", component: LoginCustomer},

    //Customer
    {path: "/customer-menu", component: CustomerMenu},
    {path: "/customer-home", component: CustomerHome},
    {path: "/customer-detail-combo/:_id", component: DetailCombo},
    {path: "/customer-detail-confirm-order/:_id", component: DetailOrder},
    {path: "/customer-cart", component: Cart},
    {path: "/customer-see-order", component: SeeOrder},
    {path: "/customer-detail-item", component: DetailItemOrder},
    {path: "/customer-feedback", component: Feedback},
    {path: "/customer-check-drink", component: CheckDrink},
    {path: "/customer-check-food", component: CheckFood},
];

export const userRoutes = [

    //Receptionist
    {path: "/receptionist-home", component: OrderList},
    {path: "/receptionist-feedback", component: ViewFeedback},
    {path: "/receptionist-manage", component: ManageTable},
    {path: "/receptionist-change-password", component: ChangePassword},

    //Waiter Page
    // {path: "/waiter-sign-in-waiter" , component: SignIn},
    {path: "/waiter-view-all-table" , component: ViewAllTable},
    {path: "/waiter-check-list", component: CheckList},
    {path: "/waiter-check-list-food", component: CheckListFood},
    {path: "/waiter-detail-table-confirm-order" , component: ConfirmOrder},
    {path: "/waiter-detail-table-confirmed-order" , component: ConfirmedOrder},
    {path: "/waiter-detail-table-change-table" , component: ChangeTable},
    {path: "/waiter-detail-table-notification" , component: Notification},
    {path: "/waiter-detail-table-detail-item" , component: DetailItem},

    //path kitchen
    {path: "/kitchen-home", component: KitchenOrderList},
    {path:"/kitchen-menu" , component: KitchenMenu},
    // this route should be at the end of all other routes
    {path: "/r", exact: true, component: () => <Redirect to="/receptionist-home"/>},
    {path: "/w", exact: true, component: () => <Redirect to="/waiter-view-all-table"/>},
    {path: "/k", exact: true, component: () => <Redirect to="/kitchen-home"/>}
];

export const authRoutes = [
    {path: "/logout", component: Logout},
    {path: "/login", component: Login},
    {path: "/customer-login", component: LoginCustomer},
    {path: "/forget-password", component: ForgetPwd},
    {path: "/register", component: Register},
    {path: "/loading", component: Loading},
    {path: "/not-found", component: NotFound},
    {path: "/timeout", component: Timeout},
];

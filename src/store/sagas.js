import {all} from "redux-saga/effects";

//public
import sagaAccount from "./auth/register/saga";
import sagaAuth from "./auth/login/saga";
import sagaAuthCustomer from "./auth/logincustomer/saga";
import sagaForgetPassword from "./auth/forgetpwd/saga";
import sagaProfile from "./auth/profile/saga";
import sagaLayout from "./layout/saga";
import sagaUser from "./users/saga";
import sagaPost from "./post/sagas";
import sagaStatistics from "./statistics/sagas";
import sagaNotificatons from "./notifications/sagas";
import sagaCustomer from "./customer/sagas";
import sagaReceptionist from "./receptionist/sagas";
import sagaKitchen from "./kitchen/sagas";

export default function* rootSaga() {
    yield all([
        //public
        ...sagaAccount,
        ...sagaAuth,
        ...sagaAuthCustomer,
        ...sagaProfile,
        ...sagaForgetPassword,
        ...sagaLayout,
        ...sagaUser,
        ...sagaPost,
        ...sagaStatistics,
        ...sagaNotificatons,
        ...sagaCustomer,
        ...sagaReceptionist,
        ...sagaKitchen,
    ]);
}

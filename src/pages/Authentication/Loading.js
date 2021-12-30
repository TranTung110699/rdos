import React from "react";
import "../../assets/scss/custom/pages/Authentication/loading.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import {Link, useHistory, withRouter} from "react-router-dom";
import { useSnackbar } from "notistack";
import { logoutUser } from "../../store/auth/login/actions";

const Loading = () => {
  const login = useSelector((state) => state.Login);
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (login.loading === false && login.error.status === false) {
      enqueueSnackbar(
        `Xin lỗi, bạn không có quyền truy cập vào trang web này.
      `,
        {
          variant: "warning",
        }
      );
      dispatch(logoutUser(true));
      history.replace("/");
    }
  }, [login.loading, login.error.status]);
  return (
    <div className="example">
      <div className="loader">Loading...</div>
      <div className="text-center mt-4">Vui lòng đợi trong giây lát ...</div>
      {(!localStorage.getItem("authUser") ? (
          <Link
              className="btn btn-primary waves-effect waves-light"
              to="/login"
          >
            Quay trở lại trang Đăng nhập.
          </Link>
      ) : null)}
    </div>
  );
};

export default withRouter(connect()(Loading));

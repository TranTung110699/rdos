import axios from "axios";
import { getURL, simplifyParams } from "./common";
import {authHeader, authHeaderCus, authHeaderGetApiCus} from "../helpers/jwt-token-access/auth-token-header";
import { authHeaderGetApi } from "../helpers/jwt-token-access/auth-token-header";
import store from "../store";
import { logoutUser, setTokenStatusInvalid } from "../store/auth/login/actions";

axios.interceptors.request.use(
  (config) => Promise.resolve(config),
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(setTokenStatusInvalid(true));
    }
    return error;
  }
);
 class Request {
  constructor() {
    this.cancelToken = axios.CancelToken;
    this.source = this.cancelToken.source();
  }

  get(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return axios
      .get(urlProcess, {
        params: allParams,
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {});
  }

   getApi(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return  axios
      .get(urlProcess, {
        params: allParams,
        headers: authHeaderGetApi(),
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {});
  }

  post(url, params, config) {
    const key = `post-${url}`;
    const { urlProcess } = getURL(url, params);
    let formData = new FormData();
    Object.keys(params).forEach((key) => {
      simplifyParams(formData, key, params[key]);
    });

    return axios
      .post(urlProcess, formData, {
        headers: authHeader(),
      })
      .then((response) => {
        const ret = response;
        return ret;
      })
      .catch((error) => {});
  }

  postApi(url, params, config) {
    const key = `post-${url}`;
    const { urlProcess } = getURL(url, params);
    let formData = new FormData();
    Object.keys(params).forEach((key) => {
      simplifyParams(formData, key, params[key]);
    });

    return axios
      .post(urlProcess, formData, {
        headers: authHeaderGetApi(),
      })
      .then((response) => {
        const ret = response;
        return ret;
      })
      .catch((error) => {});
  }

  deleteApi(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return axios
      .delete(urlProcess, {
        params: allParams,
        headers: authHeaderGetApi(),
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {});
  }

  getCus(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return axios
        .get(urlProcess, {
          params: allParams,
          headers: authHeaderCus(),
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {});
  }

  getApiCus(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return axios
        .get(urlProcess, {
          params: allParams,
          headers: authHeaderGetApiCus(),
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {});
  }

  postCus(url, params, config) {
    const key = `post-${url}`;
    const { urlProcess } = getURL(url, params);
    let formData = new FormData();
    Object.keys(params).forEach((key) => {
      simplifyParams(formData, key, params[key]);
    });

    return axios
        .post(urlProcess, formData, {
          headers: authHeaderCus(),
        })
        .then((response) => {
          const ret = response;
          return ret;
        })
        .catch((error) => {});
  }

  postApiCus(url, params, config) {
    const key = `post-${url}`;
    const { urlProcess } = getURL(url, params);
    let formData = new FormData();
    Object.keys(params).forEach((key) => {
      simplifyParams(formData, key, params[key]);
    });

    return axios
        .post(urlProcess, formData, {
          headers: authHeaderGetApiCus(),
        })
        .then((response) => {
          const ret = response;
          return ret;
        })
        .catch((error) => {});
  }

  deleteApiCus(url, params) {
    const { urlProcess, allParams } = getURL(url, params);
    return axios
        .delete(urlProcess, {
          params: allParams,
          headers: authHeaderGetApiCus(),
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {});
  }

  actionCancel() {
    this.source.cancel("Operation canceled by the user.");
  }
}

export default new Request();

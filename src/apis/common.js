export const getURL = (url, params, headers) => {
  let localUrl = url;
  let localParams = params;
  let localHeaders = headers;
  localParams = localParams || {};
  if (!localUrl.startsWith("http") && !localUrl.startsWith("https")) {
    localUrl =
      process.env.REACT_APP_API_URL +
      (localUrl.startsWith("/") ? localUrl : `/${localUrl}`);
  }
  if (!localHeaders) {
    localHeaders = {};
  }

  const myHeaders = new Headers();
  Object.keys(localHeaders).forEach((key) => {
    myHeaders.append(key, localHeaders[key]);
  });
  return {
    urlProcess: localUrl,
    allParams: localParams,
    headersData: myHeaders,
  };
};

export const createFrom = (params, form) => {
  let localForm = form;
  if (!localForm) {
    localForm = new FormData();
  }
  if (!params) {
    return localForm;
  }
  Object.keys(params).forEach((key) => {
    this.simplifyParams(localForm, key, params[key]);
  });
  return localForm;
};

export const simplifyParams = (form, key, param) => {
  if (typeof param === "undefined" || param === null) return;

  if (typeof param !== "object" || param instanceof File) {
    form.append(key, param);
    return;
  }

  if (Array.isArray(param)) {
    param.forEach((value, i) => {
      simplifyParams(form, `${key}[${i}]`, value);
    });
  } else {
    Object.keys(param).forEach((subKey) => {
      simplifyParams(form, `${key}[${subKey}]`, param[subKey]);
    });
  }
};

import {clearState, loadState, loadStateCustomer} from "../../store/localStorage";

export const authHeader = () => {
  const obj = loadState();
  if (obj && obj.tokenId) {
    return { Authorization: obj.tokenId };
  } else {
    return {};
  }
};

export const authHeaderGetApi = () => {
  const obj = loadState();
  return { Authorization: `Bearer ${obj.data.token}` };
};

export const authHeaderCus = () => {
  const obj = loadStateCustomer();
  if (obj && obj.tokenId) {
    return { Authorization: obj.tokenId };
  } else {
    return {};
  }
};

export const authHeaderGetApiCus = () => {
  const obj = loadStateCustomer();
  return { Authorization: `Bearer ${obj.data.token}` };
};

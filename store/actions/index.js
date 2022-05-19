import { LOGGED_IN, LOGGED_OUT, SEARCH_VALUE } from "../types";
export const loginLayout = () => {
  return {
    type: LOGGED_IN,
  };
};
export const logoutLayout = () => {
  return {
    type: LOGGED_OUT,
  };
};
export const searchValue = () => {
  return {
    type: SEARCH_VALUE,
  };
};

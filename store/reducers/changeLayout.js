import { LOGGED_IN, LOGGED_OUT } from "../types";

const initialState = { isUser: false };
const changeTheLayout = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { isUser: !state.isUser };
    case LOGGED_OUT:
      return { isUser: state.isUser };
    default:
      return state.isUser;
  }
};
export default changeTheLayout;

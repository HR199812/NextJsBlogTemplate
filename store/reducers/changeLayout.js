const initialState = { isUser: false };
const changeTheLayout = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDOUT":
      return { state: state.isUser };
    case "LOGGEDIN":
      return { state: !state.isUser };
    default:
      return state;
  }
};
export default changeTheLayout;

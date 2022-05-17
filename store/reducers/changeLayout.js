const initialState = { isUser: false };
export default changeTheLayout = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDOUT":
      return { state: state.isUser };
    case "LOGGEDIN":
      return { state: !state.isUser };
  }
};

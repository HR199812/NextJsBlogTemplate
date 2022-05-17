const initialState = { isUser: false };
export default changeTheLayout = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDOUT":
      return (state.isUser = false);
    case "LOGGEDIN":
      return (state = true);
  }
};

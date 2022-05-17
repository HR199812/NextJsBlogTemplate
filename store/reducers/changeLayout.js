const initialState = false;
export default changeTheLayout = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDOUT":
      return (state = false);
    case "LOGGEDIN":
      return (state = true);
  }
};

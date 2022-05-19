import { SEARCH_VALUE } from "../types";

const initialState = { searchedValue: '' };
const searchValue = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return { searchedValue: action.payload };
    default:
      return searchedValue;
  }
};
export default searchValue;

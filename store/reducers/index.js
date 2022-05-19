import changeLayout from "./changeLayout";
import searchValue from "./searchValue";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeLayout,
  searchValue,
});
export default rootReducer;

import { AllUser, SingleUser, updateUser } from "./Curd";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AllUser,
  SingleUser,
  updateUser,
});

export default rootReducer;

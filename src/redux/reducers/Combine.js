import { AllUser, SingleUser } from "./Curd";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AllUser,
  SingleUser,
});

export default rootReducer;

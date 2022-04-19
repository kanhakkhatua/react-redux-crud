import { AllUser } from "./Curd";
import { SingleUser } from "./SingleUser";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AllUser,
  SingleUser,
});

export default rootReducer;

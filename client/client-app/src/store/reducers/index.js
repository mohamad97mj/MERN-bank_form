import { combineReducers } from "redux";
import authReducer from "./auth";
// import mainReducer from "./main";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  profile : profileReducer,
  // errors: mainReducer,
  // projects: profileReducer,
});

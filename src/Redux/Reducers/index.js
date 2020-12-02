import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import signupReducer from "./SignupReducer";
import techsReducer from "./Techsreducer";

export default combineReducers({
	userReducer, signupReducer, techsReducer,
});
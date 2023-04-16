import { combineReducers } from "redux";
import loginReducer from "./login";
import currentUserReducer from "./currentUser.js";
import questionsReducer from "./questions";
import usersReducer from "./users";

export default combineReducers({
    loginReducer, currentUserReducer, questionsReducer, usersReducer,
});
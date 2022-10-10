import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiStatus from './apiStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	apiStatus,
});

export default rootReducer;

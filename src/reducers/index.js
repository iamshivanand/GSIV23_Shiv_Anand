import moviesReducer from "./moviesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;

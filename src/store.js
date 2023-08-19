import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./reducers/moviesReducer";

const store = createStore(moviesReducer, compose(applyMiddleware(thunk)));

export default store;

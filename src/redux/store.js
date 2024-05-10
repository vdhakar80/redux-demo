import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
//window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__

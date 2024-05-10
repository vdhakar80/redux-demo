import { combineReducers } from "redux";
import { samosaReducer } from "./samosa/samosaReducer";
import { asyncReducer } from "./AsyncActions/asyncReducer";

export const rootReducer = combineReducers({
  samosa: samosaReducer,
  user: asyncReducer,
});

import { combineReducers } from "redux";
import IRootState from "./root-state";
import uiReducer from "./ui/ui-reducer";
import apiReducer from "./api/api-reducer";

export default combineReducers<IRootState>({
  ui: uiReducer,
  api: apiReducer,
});

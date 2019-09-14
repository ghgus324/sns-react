import { combineReducers } from "redux";
import IUIState from "./ui-state";
import login from "./login/reducer";

export default combineReducers<IUIState>({
  login,
});

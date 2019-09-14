import { applyMiddleware, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./root-reducer";
import IRootState from "./root-state";

export const initializeStore = (initailstate: IRootState | undefined, _: any) => {
  return createStore(
    RootReducer,
    initailstate,
    compose(
      applyMiddleware(thunk),
      devToolsEnhancer({})
    )
  );
};

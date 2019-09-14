import { Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IRootAction } from "./root-actions";
import IAPiState from "./api/api-state";
import IUiState from "./ui/ui-state";

export type IThunkDispatch = ThunkDispatch<IRootState, undefined, IRootAction>;

export type IThunkAction<R> = ThunkAction<R, IRootState, undefined, IRootAction>;

export interface IStore extends Store<IRootState, IRootAction> {
  dispatch: IThunkDispatch;
}

export default interface IRootState {
  ui: IUiState;
  api: IAPiState;
}

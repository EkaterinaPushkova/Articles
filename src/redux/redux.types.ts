import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type TRootStoreState = ReturnType<typeof import("./reducers").default>;

export type TDispatch<TAction extends Action = AnyAction> = ThunkDispatch<
  TRootStoreState,
  void,
  TAction
>;

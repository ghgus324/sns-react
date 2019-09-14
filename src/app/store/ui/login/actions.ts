import actionCreatorFactory from "typescript-fsa";
import { ILoginInfo } from "../../../models/loginInfo";

const actionCreator = actionCreatorFactory("react-sns-ui");

export const setLoginInfo = actionCreator<ILoginInfo>("SET_LOGIN_INFO");

//2개 이상 경우
//export const setLoginInfo = actionCreator<ILoginInfo>("SET_LOGIN_INFO");
//export const xxx = actionCreator<yyy>("SET_LOGIN_zzz");

export type LoginAction = ReturnType<typeof setLoginInfo>;

//2개이상 경우
//|ReturnType<typeof setLoginInfo>
//|ReturnType<typeof xxx>;

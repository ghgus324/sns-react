import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setLoginInfo } from "./actions";
import { INITIAL_STATE } from "./state";

export default reducerWithInitialState(INITIAL_STATE)
    .case(setLoginInfo, (state, payload) => {
        const isLogin = payload.id !== null;
        
        return { ...state, isLogin, ...payload};
    })
    .build();

export interface ILoginState {
    isLogin: boolean; //로그인 상태
    id: string | null;
    mail: string | null;
    gender: string | null;
}

export const INITIAL_STATE: ILoginState = {
    isLogin: false,
    id: null,
    mail: null,
    gender: null,
};
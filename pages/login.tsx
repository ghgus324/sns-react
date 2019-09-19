import * as React from "react";
import { IStore } from "../src/app/store/root-state";
import Router from "next/router";
import { Response } from "express";
import Login from "../src/app/pages/Login.container";
//import Login from "../src/app/modules/auth/Login";

export interface LoginProps {}

class LoginPage extends React.Component<LoginProps> {
  static async getInitialProps({ res, store }: { res: Response; store: IStore }) {
    const isServer = !!res;
    const { isLogin, id } = store.getState().ui.login;
    if (isLogin && id) {
      isServer ? res.redirect(302, "/") : Router.push("/");
      return;
    }

    return {};
  }
  render() {
    return <Login />;
  }
}

export default LoginPage;

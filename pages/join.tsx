import * as React from "react";
import { IStore } from "../src/app/store/root-state";
import Router from "next/router";
import { Response } from "express";
import Join from "../src/app/pages/Join.container";

export interface JoinProps {}

class JoinPage extends React.Component<JoinPage> {
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
    return <Join />;
  }
}

export default JoinPage;

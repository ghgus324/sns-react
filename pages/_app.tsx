import * as React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { initializeStore } from "../src/app/store";
import { IStore } from "../src/app/store/root-state";

interface IProps {
  url: string;
  store: IStore;
}

class MyApp extends App<IProps> {
  isBackHistory = false;
  cachedPageHeight: number[] = [];

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  //스크롤 위치
  routeChangeStart = () => {
    this.cachedPageHeight.push(document.documentElement.offsetHeight);
  };

  //화면이동 후 스크롤 위치를 지정
  routeChangeComplete = () => {
    //뒤로가기의 경우 스크롤 X
    if (!this.isBackHistory) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
    const html: HTMLHtmlElement | null = document.querySelector("html");
    if (html) {
      html.style.height = "initial";
    }
    this.isBackHistory = false;
  };

  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.routeChangeStart);
    Router.events.off("routeChangeComplete", this.routeChangeComplete);
  }

  componentDidMount() {
    Router.events.on("routeChangeStart", this.routeChangeStart);
    Router.events.on("routeChangeComplete", this.routeChangeComplete);

    Router.beforePopState(() => {
      this.isBackHistory = true;
      const html: HTMLHtmlElement | null = document.querySelector("html");
      if (html) {
        html.style.height = `${this.cachedPageHeight.pop()}px`;
      }
      return true;
    });
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default withRedux(initializeStore)(MyApp);

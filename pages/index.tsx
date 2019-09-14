import * as React from "react";
import { IStore } from "src/app/store/root-state";
import Link from "next/link";

export interface IndexProps {

}

export class Index extends React.Component<IndexProps> {
  static async getInitialProps({
    res,url,store}:{ res:Response; url:string; store:IStore; }) {

      const isServer = !!res;
      if(isServer){
        //비동기
        //1. await Promise.all([store.dispatch(fetchHairAsync({hairstyle_id:hairstyle}))]);
        //2. await store.dispatch(fetchHairAsync({hairstyle_id:hairstyle}));
        //동기인 경우 await 생략
      }
      return {url,store};
  }
  
  render(){
    return (
      <React.Fragment>
      <div>index page</div>
      <Link href="/cars">
      <a>test(cars)</a>
      </Link>
      <br/>
      <Link href="/login">
      <a>test(login)</a>
      </Link>
      </React.Fragment>
    );

  }

}
export default Index;
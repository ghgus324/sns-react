import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import http from "https";
import getConfig from "next/config";
import { Request } from "express";

const { serverruntimeConfig } = getConfig();

export let client: AxiosInstance;

export const initialize = (req?: Request) => {
  if (client) {
    return;
  }

  const config: AxiosRequestConfig = {
    timeout: 10000,
    httpsAgent: new http.Agent({
      //신뢰되지 않는 ssl통신을 허용할지
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    }),
  };
  if (req) {
    //serverside
    config.baseURL = serverruntimeConfig.ssrBffBaseUri;

    config.headers = req.headers;
  } else {
    //clientside
  }

  client = axios.create(config);

  if (process.env.useMockAPI) {
    require("./mockAPI")(client);
  }
};

// export const getHairstyleInfo = async(hairistyleId:number):Promise<AxiosResponse<IHairstyleInfoResult>>=>{
//     const path="/api/hairstyle";
//     const response = await client.get<IHairstyleInfoResult>(path,{params:{hairstyle_id:hairstyleId},});
//     return response;
// };

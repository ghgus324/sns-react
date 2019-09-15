import MockAdapter from "axios-mock-adapter";
import { AxiosInstance } from "axios";

//@see: https://github.com/ctimmerm/axios-mock-adapter
const mock = (client: AxiosInstance) => {
  const mock = new MockAdapter(client, { delayResponse: 500 });

  mock.onGet("/api/login/info", { params: { id: "id", pw: "pw" } }).reply(200, {
    id: "aaa",
    pw: "bbb",
    mail: "",
  });
};
export default mock;

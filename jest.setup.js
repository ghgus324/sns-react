const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const api = require("./src/app/lib/apiClient");

jest.mock("next/config", () => () => ({
  serverRuntimeConfig: {
    ssrBffBaseUri: process.env.SSR_BFF_BASE_URI || "http://localhost:3000",
  },
}));

api.initialize();
Enzyme.configure({ adapter: new Adapter() });

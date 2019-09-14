"use strict";
const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const express = express_1.default();
  express.get("*", (req, res) => handle(req, res));
  if (process.env.NODE_ENV === "development") {
    // const https = require("https");
    // //cookie 등
  }
  const server = express.listen(process.env.PORT || 3000, function() {
    console.log("express app is starting");
  });
  server.keepAliveTimeout = 0;
});
//# sourceMappingURL=server.js.map

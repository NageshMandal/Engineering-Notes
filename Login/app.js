import { Ehh } from "https://brajesh825.github.io/ehh/index.js";
import { nodeConfig } from "./user/config/nodeConfig.js";
import { browserConfig } from "./user/config/browserConfig.js";

try {
  if (typeof window === "undefined") {
    console.log("Node");
    new Ehh(nodeConfig).start();
  } else {
    console.log("Browser");
    new Ehh(browserConfig).start();
  }
} catch (error) {
  console.log(error.message);
}

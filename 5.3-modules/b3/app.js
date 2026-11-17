import createConfig, { API_URL, TIMEOUT } from "./config.js";

console.log("B3 – Development config:");
console.log(createConfig("dev"));
console.log("Production API URL:", API_URL);
console.log("Timeout:", TIMEOUT);

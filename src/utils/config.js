const API_KEY = "23741064";

const config =
  (baseUrl = "") =>
  (cb) =>
    cb(baseUrl, API_KEY);

export default config;

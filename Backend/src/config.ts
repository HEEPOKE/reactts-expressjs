import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const { PORT, HOST, HOST_URL, CLIENT_ID } = process.env;

const config = {
  PORT,
  HOST,
  HOST_URL,
  CLIENT_ID,
};

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

// module.exports = {
//     port: PORT,
//     host: HOST,
//     url: HOST_URL,
// }

export default config;

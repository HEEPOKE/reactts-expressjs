import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const { PORT, HOST, HOST_URL, CLIENT_ID, JWT_SECRET, COOKIE_KEY } = process.env;

const config = {
  PORT,
  HOST,
  HOST_URL,
  CLIENT_ID,
  JWT_SECRET,
  COOKIE_KEY,
};

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(CLIENT_ID, "CLIENT_ID is required");
assert(JWT_SECRET, "JWT_SECRET is required");
assert(COOKIE_KEY, "COOKIE_KEY is required");

// module.exports = {
//     port: PORT,
//     host: HOST,
//     url: HOST_URL,
// }

export default config;

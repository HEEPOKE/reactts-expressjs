import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

export const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STOREAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

assert(API_KEY, "API_KEY is required");
assert(AUTH_DOMAIN, "AUTH_DOMAIN is required");
assert(PROJECT_ID, "PROJECT_ID is required");
assert(STOREAGE_BUCKET, "STOREAGE_BUCKET is required");
assert(MESSAGING_SENDER_ID, "MESSAGING_SENDER_ID is required");
assert(APP_ID, "APP_ID is required");
assert(MEASUREMENT_ID, "MEASUREMENT_ID is required");

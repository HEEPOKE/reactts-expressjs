import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

export const {
    PORT,
    HOST,
    HOST_URL,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
}
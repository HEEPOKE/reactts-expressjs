import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import config from "../config/config";

dotenv.config();

const client = new OAuth2Client(config.CLIENT_ID);

const loginGoogle = "a";

const LoginController = {
  loginGoogle,
};

export default LoginController;

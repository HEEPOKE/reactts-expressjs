import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import config from "../config/config";

dotenv.config();

const client = new OAuth2Client(config.CLIENT_ID);

const loginGoogle = async (req: any, res: any) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.CLIENT_ID,
  });
};

const LoginController = {
  loginGoogle,
};
export default LoginController;

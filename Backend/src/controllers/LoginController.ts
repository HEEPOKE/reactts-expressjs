import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import config from "../config/config";

dotenv.config();

const client = new OAuth2Client(config.CLIENT_ID);

const users: any = [];

function upsert(array: any, item: any) {
  const i = array.findIndex((_item: any) => _item.email === item.email);
  if (i > -1) {
    array[i] = item;
  } else {
    array.push(item);
  }
}

const loginGoogle = async (req: any, res: any) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload;
  upsert(users, [name, email, picture]);
  res.status(200);
  res.json({ name, email, picture });
};

const LoginController = {
  loginGoogle,
};
export default LoginController;

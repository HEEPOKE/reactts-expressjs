import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import config from "./config/config";
import router from "./routes/routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

const port = config.PORT;

app.use("/api", router);

app.listen(port, () => console.log("http://localhost:" + port || 1412));
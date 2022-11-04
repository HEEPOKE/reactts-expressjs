// const express = require('express');
// const dotenv = require('dotenv');
// const config = require("./config");
// const api = require("./routes/routes");

import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import config from "./config";
import api from "./routes/routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json());
// app.use(express.json());

const port = process.env.PORT;

app.use("/api", api.routes);

app.listen(config.port, () => console.log("http://localhost:" + port || 1412));
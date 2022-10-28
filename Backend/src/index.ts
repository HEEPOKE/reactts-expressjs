// const express = require('express');
// const dotenv = require('dotenv');
// const config = require("./config");
// const api = require("./routes/routes");

import express from 'express';
import dotenv from 'dotenv';
import config from "./config";
import api from "./routes/routes";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use("/api", api.routes);

app.listen(config.port, () => console.log("http://localhost:" + process.env.PORT || 1412));
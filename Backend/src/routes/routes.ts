import express, { application } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../swagger";

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));


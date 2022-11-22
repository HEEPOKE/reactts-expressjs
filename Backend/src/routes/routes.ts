import express, { application } from "express";
import swaggerUi from "swagger-ui-express";
// import swaggerDoc from "../swagger";
import LoginController from "../controllers/LoginController";

const router = express.Router();

// router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.post("api/auth/login", LoginController.loginGoogle);


export default router;
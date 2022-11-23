import express from "express";
import LoginController from "../controllers/LoginController";

const router = express.Router();

router.post("/auth/google-login", LoginController.loginGoogle);

export default router;

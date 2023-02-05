import { Router } from "express";
import * as authController from '../controllers/authController.js';

const router = Router();

router.route("/register").post(authController.register);
router.route("/registerMail").post();
router.route("/authenticate").post();
router.route("/login").post(authController.login);

router.route("/user/:username").get(authController.getUser);
router.route("/generateOTP").get(authController.generateOTP);
router.route("/verifyOTP").get(authController.verifyOTP);
router.route("/createResetSession").get(authController.createResetSession);

router.route("/updateUser").put(authController.updateUser);
router.route("/resetPassword").put(authController.resetPassword);

export default router;

import { Router } from "express";

const router = Router();

router.route("/register").post();
router.route("/registerMail").post();
router.route("/authenticate").post();
router.route("/login").post();

router
    .route("/user/:username")
    .get((req, res) => res.status(200).json({ message: "router is working!" }));
router.route("/generateOTP").get();
router.route("/verifyOTP").get();
router.route("/createResetSession").get();

router.route("/updateUser").put();
router.route("/resetPassword").put();

export default router;

import express from "express";
import {
  register,
  login,
  logout,
  editProfilePic,
  checkAuth,
} from "../controllers/authController.js";
import { authorize } from "../middleware/authorization.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.put("/edit-profile-pic", authorize, editProfilePic);
router.get("/check", authorize, checkAuth);

export default router;

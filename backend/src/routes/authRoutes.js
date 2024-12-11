import express from "express";
import {
  register,
  login,
  logout,
  editProfilePic,
  getUser,
} from "../controllers/authController.js";
import { authorize } from "../middleware/authorization.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.put("/edit-profile-pic", authorize, editProfilePic);
router.get("/get-user", authorize, getUser);

export default router;

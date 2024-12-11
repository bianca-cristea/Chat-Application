import jwt from "jsonwebtoken";
import User from "../models/user.js";
import cookieParser from "cookie-parser";

export const authorize = async (userId, res, next) => {
  try {
    const token = res.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }
    const decoded = jwt.verify(userId, process.env.JWT_TOKEN);
    if (!decoded)
      return res.status(401).json({ message: "Unathorized - Invalid Token" });
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Unathorized");
    res.status(500).json({ message: error.message });
  }
};

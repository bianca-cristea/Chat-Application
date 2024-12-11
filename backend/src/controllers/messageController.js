import cloudinary from "../../lib/cloudinary.js";
import Message from "../models/message.js";
import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: senderId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

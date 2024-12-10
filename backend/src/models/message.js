import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {},
  receiverId: {},
  text: {},
  image: {},
});

const Message = new mongoose.model("Message", messageSchema);

export default Message;

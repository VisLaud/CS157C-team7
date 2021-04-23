import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  employeeid: { type: Number, default: 0 },
  meetings: [
    {
      startTime: String,
      endTime: String,
      floor: { type: Number, default: 0 },
      section: { type: Number, default: 0 },
      note: String,
    },
  ],
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

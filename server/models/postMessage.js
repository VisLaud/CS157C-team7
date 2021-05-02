import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  employeeid: { type: Number, default: 0 },
  covidstat: { type: Boolean, default: false },
  checkstat: { type: Boolean, default: false },
  empType: { type: String, default: "E" },
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

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  employeeid: { type: Number, default: 0 },
<<<<<<< HEAD
  startTime: String,
  endTime: String,
  floor: { type: Number, default: 0 },
  section: { type: Number, default: 0 },
  note: String,
=======
  meetings: [
    {
      startTime: String,
      endTime: String,
      floor: { type: Number, default: 0 },
      section: { type: Number, default: 0 },
      note: String,
      cstatus: { type: Boolean, default: false },
    },
  ],
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  employeeid: { type: Number, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  floor: { type: String, required: true },
  section: { type: String, required: true },
});

const TimeEvent = mongoose.model("TimeEvent", eventSchema);

export default TimeEvent;

import TimeEvent from "../models/timeEvent.js";

export const getTime = async (req, res) => {
  try {
    const timeEvents = await TimeEvent.find();

    //console.log(timeEvents);

    res.status(200).json(timeEvents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  const event = req.body;

  const newEvent = new TimeEvent(event);
  try {
    await newPost.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

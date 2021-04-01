import express from "express";

import { getTime, createEvent } from "../controllers/time.js";

const router = express.Router();

router.get("/", getTime);
router.post("/", createEvent);

export default router;

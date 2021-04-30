import express from "express";

<<<<<<< HEAD
import { getPosts, createPost } from "../controllers/posts.js";
=======
import { getPosts, createPost, updatePost } from "../controllers/posts.js";
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
<<<<<<< HEAD
=======
router.patch("/:id", updatePost);
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2

export default router;

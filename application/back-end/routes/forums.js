import express from "express";
import {
    listAllForums,
    FindTheForum,
    FindComments
} from "../controllers/forumController.js";

const router = express.Router();

router.get("/allforums", listAllForums);
router.get("/forums/:id", FindTheForum);
router.get("/forums/comments/:id", FindComments);

export default router;
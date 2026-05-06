import express from "express";
import {
    listAllForums,
    FindTheForum,
    FindComments,
    CreateNewForum,
    DeleteForum
} from "../controllers/forumController.js";

const router = express.Router();

router.get("/allforums", listAllForums);
router.get("/forums/:id", FindTheForum);
router.get("/forums/comments/:id", FindComments);
router.post("/forum/add", CreateNewForum);
router.delete("/forum/delete/:id", DeleteForum);

export default router;
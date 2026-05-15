import express from "express";
import {
    getReviews,
    CreateNewReview
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/game/:id", getReviews);
router.post("/game/add",CreateNewReview);

export default router
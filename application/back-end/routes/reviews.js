import express from "express";
import {
    getReviews
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/game/:id", getReviews);

export default router
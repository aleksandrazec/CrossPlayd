import express from "express";
import {
    fetchTrendingGames,
    fetchCover
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/games", fetchTrendingGames);
router.post("/cover", fetchCover);

export default router;
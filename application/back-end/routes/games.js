import express from "express";
import {
    fetchTrendingGames,
    fetchCover,
    fetchBestRatedGames,
    fetchNostalgicGames
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/games/trending", fetchTrendingGames);
router.get("/games/bestrated", fetchBestRatedGames);
router.get("/games/nostalgic", fetchNostalgicGames);
router.post("/cover", fetchCover);

export default router;
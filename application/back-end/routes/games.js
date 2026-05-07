import express from "express";
import {
    fetchTrendingGames,
    fetchCover,
    fetchBestRatedGames,
    fetchNostalgicGames,
    fetchGame,
    fetchArtwork,
    fetchGenre,
    fetchSimilarGames
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/games/trending", fetchTrendingGames);
router.get("/games/bestrated", fetchBestRatedGames);
router.get("/games/nostalgic", fetchNostalgicGames);
router.post("/game", fetchGame);
router.post("/cover", fetchCover);
router.post("/artwork", fetchArtwork);
router.post("/genre", fetchGenre);
router.post("/similar", fetchSimilarGames);

export default router;
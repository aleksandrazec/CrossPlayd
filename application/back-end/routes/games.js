import express from "express";
import {
    fetchTrendingGames,
    fetchCover,
    fetchBestRatedGames,
    fetchNostalgicGames,
    fetchGame,
    fetchArtwork,
    fetchGenre,
    fetchSimilarGames,
    fetchSelectedGames,
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/games/trending", fetchTrendingGames);
router.get("/games/bestrated", fetchBestRatedGames);
router.post("/games/selected", fetchSelectedGames);
router.get("/games/nostalgic", fetchNostalgicGames);
router.post("/game", fetchGame);
router.post("/cover", fetchCover);
router.post("/artwork", fetchArtwork);
router.post("/genre", fetchGenre);
router.post("/similar", fetchSimilarGames);

export default router;
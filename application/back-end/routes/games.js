import express from "express";
import {
    fetchTrendingGames,
    fetchCover,
    fetchGame,
    fetchArtwork,
    fetchGenre,
    fetchSimilarGames
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/games", fetchTrendingGames);
router.post("/game", fetchGame);
router.post("/cover", fetchCover);
router.post("/artwork", fetchArtwork);
router.post("/genre", fetchGenre);
router.post("/similar", fetchSimilarGames);

export default router;
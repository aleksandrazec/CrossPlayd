import { json } from "express";
import {
  getReviewsForGame
} from "../database/DBQueries.js";


export const getReviews = async (req, res) => {
    try{
        const { id } = req.params
        console.log(id)
        const reviews = await getReviewsForGame(id);
        res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
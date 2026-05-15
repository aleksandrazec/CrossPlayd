import { json } from "express";
import {
  getReviewsForGame,
  addGameReview
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

export const CreateNewReview = async (req, res) => {
    try{
      const review_data = req.body;
      const newReview = await addGameReview(review_data);
      res.status(201).json(newReview);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
}
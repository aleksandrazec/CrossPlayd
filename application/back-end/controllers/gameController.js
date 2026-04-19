import { 
    getTrendingGames,
    getCover 
  } from "../database/APIQueries.js";

    
  export const fetchTrendingGames = async (req, res) => {
    try {
      var trendingGamesBody = 'fields name, rating, cover, release_dates; limit 10; where first_release_date > 1772378089 ; sort rating desc;'
      const trendingGames = await getTrendingGames(trendingGamesBody);
      res.status(200).json(trendingGames);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const fetchCover = async (req, res) => {
    try {
      const coverID = req.body.coverID;
      const coverBody = `fields image_id; where id=${coverID};`
      console.log(coverID);
      console.log(coverBody);
      const cover = await getCover(coverBody);
      res.status(200).json(cover);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
import { 
    getGames,
    getCover 
  } from "../database/APIQueries.js";

    
  export const fetchTrendingGames = async (req, res) => {
    try {
      var currentUnix=Math.floor(Date.now() / 1000)
      var monthAgoUnix=currentUnix-+60*60*24*30; 
      var trendingGamesBody = `fields name, rating, cover, release_dates; limit 10; where first_release_date > ${monthAgoUnix} ; sort rating desc;`
      const trendingGames = await getGames(trendingGamesBody);
      res.status(200).json(trendingGames);
      console.log(trendingGames)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const fetchBestRatedGames = async (req, res) => {
    try {
      var bestRatedGamesBody = `fields name, rating, cover, release_dates; limit 10; sort rating desc;`
      const bestRatedGames = await getGames(bestRatedGamesBody);
      res.status(200).json(bestRatedGames);
      console.log(bestRatedGames)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const fetchNostalgicGames = async (req, res) => {
    try {
      var nostalgicGamesBody = `fields name, rating, cover, release_dates; limit 10; where first_release_date < 946681200 ; sort rating desc;`
      const nostalgicGames = await getGames(nostalgicGamesBody);
      res.status(200).json(nostalgicGames);
      console.log(nostalgicGames)
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
import { 
    getTrendingGames,
    getCover, 
    getGame,
    getArtwork,
    getGenre,
    getSimilarGames
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
  export const fetchArtwork = async (req, res) => {
    try {
      const game = req.body.game;
      const artworkBody = `fields image_id; where game=${game} & artwork_type = 7;`
      console.log(artworkBody);
      const artwork = await getArtwork(artworkBody);
      res.status(200).json(artwork);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const fetchGame = async (req, res) => {
    try {
      const gameID = req.body.id;
      const gameBody = `fields name, summary, cover, genres, similar_games; limit 200; where id = ${gameID};`
      const game = await getGame(gameBody)
      console.log(gameID);
      console.log(gameBody)
    
      res.status(200).json(game);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const fetchGenre = async (req,res) => {
    try {
      const genreID = req.body.genreID;
      const genreBody = `fields name; where id = ${genreID};`
      const genre = await getGenre(genreBody);
      console.log(genre);
      res.status(200).json(genre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const fetchSimilarGames = async (req, res) => {
    try {
      const similarGameID = req.body.id;
      console.log('similar games '+similarGameID[0]);
      var similarGamesBody = `fields name, rating, cover, release_dates; limit 10; where id=${similarGameID[0]} | id=${similarGameID[1]} | id=${similarGameID[2]} | id=${similarGameID[3]} | id=${similarGameID[4]} | id=${similarGameID[5]} | id=${similarGameID[6]} | id=${similarGameID[7]} | id=${similarGameID[8]} | id=${similarGameID[9]};`
      const similarGames = await getTrendingGames(similarGamesBody);
      res.status(200).json(similarGames);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
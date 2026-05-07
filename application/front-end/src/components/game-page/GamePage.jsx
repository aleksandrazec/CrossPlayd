import { use, useContext, useEffect, useState } from "react"
import { UserContext } from '../../Context'
import { useNavigate, useParams } from 'react-router';
import userapi from "../../services/userapi";
import './style.css'
import TagsArray from "./TagsArray";
import GameTape from "../home-page/GameTape";

function GamePage(props) {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const size='1080p'
    const size_background = ''

    const [game, setGame] = useState({
        cover: 0 ,
        genres: undefined,
        name: '',
        similar_games: undefined,
        summary: ''
    });

    const [coverImage, setCoverImage] = useState();
    const [artworkImage, setArtworkImage] = useState();
    const [similarGames, setSimilarGames] = useState();

    useEffect(() => {
        
        const getGame = async () => {
            try {
                const { data } = await userapi.post('/igdb/game/', {id: id});
                setGame(data[0]);
                // console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }
        
        getGame();
    }, [id])

 useEffect(() => {

        const getCover = async () => {
            try {
                const { data } = await userapi.post('/igdb/cover/', {coverID: `${game.cover}`});
                setCoverImage(`https://images.igdb.com/igdb/image/upload/t_${size}/${data[0].image_id}.jpg`);
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        } 
        
        console.log(game.similar_games)
        // console.log(game.genres);
        getCover(); 

    }, [game.cover])

     useEffect(() => {

        const getArtworkImage = async () => {
            try {
                const { data } = await userapi.post('/igdb/artwork/', {game: id});
                setArtworkImage(`https://images.igdb.com/igdb/image/upload/t_${size}/${data[0].image_id}.jpg`);
                // console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }

        getArtworkImage();

    }, [id])

    useEffect(() => {
        const getSimilarGames = async () => {
            try {
                const { data } = await userapi.post('/igdb/similar/', {id: game.similar_games});
                setSimilarGames(data);
                console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }
        console.log(game.similar_games)
        game.similar_games===undefined ?
        console.log("its undefined") :
        getSimilarGames();
    },[game.similar_games])

    return (
        <div className="background-image">
            {
                artworkImage !== ''?
                <div>
                    <img className="game-background" src={artworkImage}></img>
                </div>
                :
                <p>Loading</p>
            }
            <div className="panel">{
                game.name !== '' ?
                <div>
                    <img className="game-cover" src={coverImage}></img>
                </div>
                :
                <p>Loading</p>
                }
                <div className="game-introText">
                    {
                    game.name !== '' ?
                    <div className="game-title">
                        <h1>{game.name}</h1>
                    </div>
                    :
                    <p>Loading</p>
                    }
                    <div className="genre-tags">
                        <p>Genre: </p> 
                        {
                        game.genres ?
                        <TagsArray data={game.genres}/>
                        :
                        <p></p>
                        }
                    </div>
                    {
                    game.summary !== '' ?
                    <div className="game-summary">
                        <p>{game.summary}</p>
                    </div>
                    :
                    <p>Loading</p>
                    }
                </div>
                <div className="related-games">
                    <h3>Related games</h3>
                    <hr></hr>
                    {
                        similarGames ?
                        <GameTape data={similarGames}/>
                        :
                        <p></p>
                    }
                </div>
            </div>
        </div>
    );
}
export default GamePage;
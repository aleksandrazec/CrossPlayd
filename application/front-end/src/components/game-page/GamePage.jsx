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
    const [addToLibrary, setAddToLibrary] = useState(false);
    const [status, setStatus] = useState(null);
    const [rating, setRating] = useState(null);

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

    const buttonHandler = () => {
        setAddToLibrary(current => !current)
    }

    const addToLibraryFunction = async () => {
        if (status !== null && rating !== null) {
            try {
                const { data } = await userapi.post(`/supabase/users/library/add`, {
                    game_id: id,
                    user_id: user.user_id,
                    status: status,
                    rating: rating
                });
                console.log("Game added to library");
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        } else {
            console.log("NOTHIIIINGGGGGG")
        }
        
    }

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
                        <GameTape games={similarGames}/>
                        :
                        <p></p>
                    }
                </div>
            </div>
            <div>
                <button onClick={buttonHandler}>Add to Library</button>
            </div>
            <div>
                {
                    addToLibrary === true ?
                    <div>
                        <h3>Status</h3>
                        <select name="status" onChange={e => setStatus(e.target.value)}>
                            <option value="1">100 Percented</option>
                            <option value="2">Completed</option>
                            <option value="3">Playing</option>
                            <option value="4">Paused</option>
                            <option value="5">Dropped</option>
                            <option value="6">Plan to Play</option>
                        </select>
                        <h3>Rating</h3>
                        <select name="rating" onChange={e => setRating(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select> 
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={addToLibraryFunction}>Submit</button>
                    </div>
                    :
                    <p></p>
                }
            </div>
        </div>
    );
}
export default GamePage;
import { use, useContext, useEffect, useState } from "react"
import { UserContext } from '../../Context'
import { useNavigate, useParams } from 'react-router';
import userapi from "../../services/userapi";
import './style.css'
import TagsArray from "./TagsArray";
import GameTape from "../home-page/GameTape";
import ReviewBox from "./ReviewBox";

function GamePage(props) {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const size = '1080p'
    const size_background = ''

    const [game, setGame] = useState({
        cover: 0,
        genres: undefined,
        name: '',
        similar_games: undefined,
        summary: ''
    });

    const [reviews, setReviews] = useState()
    const [coverImage, setCoverImage] = useState();
    const [artworkImage, setArtworkImage] = useState();
    const [similarGames, setSimilarGames] = useState();
    const [addToLibrary, setAddToLibrary] = useState(false);
    const [status, setStatus] = useState(1);
    const [rating, setRating] = useState(1);
    const [gameAlreadyAdded, setgameAlreadyAdded] = useState(false)
    const [editLibrary, setEditLibrary] = useState(false)
    const [addReview, setAddReview] = useState(false)
    const [reviewText, setReviewText] = useState('');
    const [prompt, setPrompt] = useState('');
    const [userRating, setUserRating] = useState('')

    useEffect(() => {

        const getGame = async () => {
            try {
                const { data } = await userapi.post('/igdb/game/', { id: id });
                setGame(data[0]);
                // console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }

        const isGameInLibrary = async () => {
            try {
                const { data } = await userapi.post(`/supabase/users/library/game/${user.user_id}`, { game_id: id });
                if (data && data.data.length != 0) {
                    console.log(data)
                    setUserRating(data.data[0].rating)
                    setgameAlreadyAdded(true)
                } else {
                    console.log("NOOOOOOOOOOOO")
                    setgameAlreadyAdded(false);
                }
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }

        const getReviews = async () => {
            try {
                const { data } = await userapi.get(`reviews/game/${id}`);
                setReviews(data.data);
                console.log(data.data);
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }

        if (user.role == 'User') {
            console.log(user.user_id)
            isGameInLibrary()
        }

        getGame()
        getReviews()
        setPrompt("")
    }, [id, user.user_id, prompt])

    useEffect(() => {

        const getCover = async () => {
            try {
                const { data } = await userapi.post('/igdb/cover/', { coverID: `${game.cover}` });
                if (data.length > 0) {
                    setCoverImage(`https://images.igdb.com/igdb/image/upload/t_${size}/${data[0].image_id}.jpg`);
                }
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
                const { data } = await userapi.post('/igdb/artwork/', { game: id });
                if (data.length > 0) {
                    setArtworkImage(`https://images.igdb.com/igdb/image/upload/t_${size}/${data[0].image_id}.jpg`);
                }
                else {
                    setArtworkImage(null)
                }
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
                const { data } = await userapi.post('/igdb/similar/', { id: game.similar_games });
                if (data.length > 0) {
                    setSimilarGames(data);
                }
                console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }
        console.log(game.similar_games)
        game.similar_games === undefined ?
            console.log("its undefined") :
            getSimilarGames();
    }, [game.similar_games])

    const buttonHandler = () => {
        setAddToLibrary(current => !current)
    }

    const buttonHandler2 = () => {
        setEditLibrary(current => !current)
    }

    const buttonHandlerReview = () => {
        setAddReview(current => !current)
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
                setUserRating(rating)
                setAddToLibrary(false)
                setgameAlreadyAdded(true)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        } else {
            console.log("NOTHIIIINGGGGGG")
        }
    }

    const editLibraryFunction = async () => {
        console.log(status + "  " + rating)
        if (status !== null && rating !== null) {
            try {
                const { data } = await userapi.post(`/supabase/users/library/edit`, {
                    game_id: id,
                    user_id: user.user_id,
                    status: status,
                    rating: rating
                });
                setUserRating(rating)
                console.log("Game edited");
                setEditLibrary(false)
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        } else {
            console.log("NOTHIIIINGGGGGG")
        }
    }

    const postReview = async () => {
        try {
            userapi.post(`/reviews/game/add`, { review_text: `${reviewText}`, user_id: `${user.user_id}`, game_id: `${id}` })
                .then(result => {
                    try {
                        setAddReview(false);
                        setPrompt("Review added")
                    } catch (error) {
                        console.error(error)
                    }
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="background-image">
            {
                artworkImage !== '' ?
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
                        <p>Genres: </p>
                        {
                            game.genres ?
                                <TagsArray data={game.genres} />
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
                            <GameTape games={similarGames} />
                            :
                            <p></p>
                    }


                </div>
            </div>
            <div>
                {
                    gameAlreadyAdded && user.role == 'User' ?
                    <div style={{margin:"auto", textAlign:"center"}}>
                        <h2>Your Rating: {userRating}</h2>
                    </div>
                    :<></>
                }
            </div>
            <div className="allinputs">
                {
                    !gameAlreadyAdded && user.role == 'User' ?
                        <div className="input">
                            <div>
                                <button onClick={buttonHandler} className="button">Add to Library</button>
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
                                            <button type="submit" onClick={addToLibraryFunction} className="button">Submit</button>
                                        </div>
                                        :
                                        <p></p>
                                }
                            </div>
                        </div>
                        :
                        <p></p>
                }
                {
                    gameAlreadyAdded && user.role == 'User' ?
                        <div className="input">
                            <div>
                                <button onClick={buttonHandler2} className="button">Edit Library</button>
                            </div>
                            <div>
                                {
                                    editLibrary === true ?
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
                                            <button type="submit" onClick={editLibraryFunction} className="button">Submit</button>
                                        </div>
                                        :
                                        <p></p>
                                }
                            </div>
                        </div>
                        :
                        <p></p>
                }
                <div>
                    <div className="reviews">
                        <h1>Reviews</h1>
                    </div>
                    {
                        user.role != 'User' ?
                            <p></p> :
                            <div>
                                <button onClick={buttonHandlerReview}>Add Review</button>  <br />
                                <p>{prompt}</p>
                            </div>

                    }
                    {
                        addReview ?
                            <div>
                                <textarea id='text' rows="5" cols="80" value={reviewText} onChange={(event) => setReviewText(event.target.value)} required></textarea><br />
                                <button onClick={() => postReview()}>Post</button>
                            </div>
                            : <></>
                    }
                    {
                        reviews && reviews.length>0?
                            reviews.map(review =>
                                <ReviewBox id={review.review_id} key={review.review_id} date={review.date} user_id={review.user_id} review_text={review.review_text} />)
                            :
                            <>
                                <h2>No Reviews yet</h2>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}
export default GamePage;
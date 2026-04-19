import { useContext, useEffect, useState } from "react"
import { UserContext } from '../../Context'
import logo from '../../assets/logo.png'
import './styles.css'
import { useNavigate } from 'react-router';
import gamesapi from "../../services/gamesapi";
import GameTape from "./GameTape";

function HomePage(props) {
    const user = useContext(UserContext)
    const navigate = useNavigate();

    const [trendingGames, setTrendingGames] = useState()
    
    // useEffect(() => {
    //     const getTrendingGames = async () => {
    //         try {
    //             const { data } = await gamesapi.post('/games/',
    //                 {body:'fields name, rating, cover, release_dates; limit 10; where first_release_date > 1772378089 ; sort aggregated_rating_count desc;'},
    //                 { filter: false, sort: false });
    //             setTrendingGames(data);
    //             console.log(data)
    //         } catch (err) {
    //             console.error(err.response?.data?.error || err.message);
    //         }
    //     }
    //     getTrendingGames()
    // }, [])

    const goToLogIn = async () => {
        try {
            navigate(`/login`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="parent">
            <div className="child">
                <div className="image-container">
                    <img className="image" src={logo} alt='Logo'></img>
                </div>
                <div className="header">
                    <h1>We're not gamers because we don't have lives. It's because we choose to have many...</h1>
                </div>
                {
                    user.role != 'User' ?
                    <div className="button-container">
                        <button onClick={() => goToLogIn()}>Get started gamer</button>
                    </div>
                    :
                    <p></p>
                }
                <div className="trending-games">
                    <h3>Trending games</h3>
                    <hr></hr>
                    {
                        trendingGames ?
                        <GameTape data={trendingGames}/>
                        :
                        <p></p>
                    }
                </div>
            </div>
        </div>
    )


}
export default HomePage
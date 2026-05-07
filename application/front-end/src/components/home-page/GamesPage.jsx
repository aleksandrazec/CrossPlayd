import { useContext, useEffect, useState } from "react"
import logo from '../../assets/logo.png'
import './styles.css'
import { useNavigate } from 'react-router';
import userapi from "../../services/userapi";
import GameTape from "./GameTape";

function GamesPage(props) {
    const navigate = useNavigate();

    const [trendingGames, setTrendingGames] = useState()
    const [bestRatedGames, setBestRatedGames] = useState()
    const [nostalgicGames, setNostalgicGames] = useState()
    useEffect(() => {
        const getTrendingGames = async () => {
            try {
                const { data } = await userapi.get('/igdb/games/trending');
                setTrendingGames(data);
                console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message);
            }
        }
        const getBestRatedGames = async () => {
            try {
                const { data } = await userapi.get('/igdb/games/bestrated');
                setBestRatedGames(data);
                console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message);
            }
        }
        const getNostalgicGames = async () => {
            try {
                const { data } = await userapi.get('/igdb/games/nostalgic');
                setNostalgicGames(data);
                console.log(data)
            } catch (err) {
                console.error(err.response?.data?.error || err.message);
            }
        }
        
        getTrendingGames()
        getBestRatedGames()
        getNostalgicGames()
    }, [])
     return (
        <div className="parent">
            <div className="child">
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
                {/* eventually change best rated games to be best rated in OUR database not from the api */}
                <div className="trending-games">
                    <h3>Best rated games</h3>
                    <hr></hr>
                    {
                        bestRatedGames ?
                        <GameTape data={bestRatedGames}/>
                        :
                        <p></p>
                    }
                </div>
                <div className="trending-games">
                    <h3>Nostalgic games</h3>
                    <hr></hr>
                    {
                        nostalgicGames ?
                        <GameTape data={nostalgicGames}/>
                        :
                        <p></p>
                    }
                </div>
            </div>
        </div>
    )

}
export default GamesPage
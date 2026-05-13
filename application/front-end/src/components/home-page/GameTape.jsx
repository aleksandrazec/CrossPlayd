import GameCard from "./GameCard"
import './styles.css'
import { useState, useEffect } from 'react'
import userapi from "../../services/userapi";

function GameTape(props) {
    const { games = [] } = props
    const [coverImages, setCoverImages] = useState(false)
    // useEffect(() => {
    //     const gameArray = [games[0].id, games[1].id, games[2].id, games[3].id, games[4].id, games[5].id];
    //     const getCoverImages = async () => {
    //         try {
    //             const { data } = await userapi.post('/igdb/covers/',
    //                 { gameArray: gameArray });
    //             for (let index = 0; index < data.length; index++) {
    //                 games[index].cover_id = data[index].image_id
    //                 console.log(games[index].cover_id)
    //                 if(index===data.length-1){
    //                     console.log('reached')
    //                     setCoverImages(true);
    //                 }
    //             }
    //         } catch (err) {
    //             console.error(err.response?.data?.error || err.message);
    //         }
    //     }
    //     getCoverImages()
    // }, [])

    return (
        <div className="game-tape">
            {
                games ?
                    games.map(game => <GameCard id={game.id} key={game.id} cover={game.cover} cover_id={game.cover_id} name={game.name} rating={game.rating} />)
                    :
                    <p></p>
            }

        </div>
    )
}
export default GameTape
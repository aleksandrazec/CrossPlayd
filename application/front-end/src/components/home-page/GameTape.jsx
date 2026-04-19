import GameCard from "./GameCard"
import './styles.css'

function GameTape(props){
    const { data = [] } = props

    return(
        <div className="game-tape">

                        {
                            data ?
                            data.map(game => <GameCard id={game.id} key={game.id} cover={game.cover} name={game.name} rating={game.rating}/>)
                            :
                            <p></p>
                        }

        </div>
    )
}
export default GameTape
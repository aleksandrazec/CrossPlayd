import GameCard from "./GameCard"
function GameTape(props){
    const { data = [] } = props

    return(
        <div>
            <table>
                <tr>
                    <td>
                        {
                            data ?
                            data.map(game => <GameCard id={game.id} key={game.id} cover={game.cover} name={game.name} rating={game.rating}/>)
                            :
                            <p></p>
                        }
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default GameTape
import { use, useContext, useEffect, useState } from "react"
import { UserContext } from '../../Context'
import { useNavigate, useParams } from 'react-router';
import userapi from "../../services/userapi";
import GameTape from "../home-page/GameTape";

function Library(props) {
    const user = useContext(UserContext);

    const [library, setLibrary] = useState();
    const [gameLibrary, setGameLibrary] = useState();

    const [hunPercented, setHunPercented] = useState();
    const [completed, setCompleted] = useState();
    const [playing, setPlaying] = useState();
    const [paused, setPaused] = useState();
    const [dropped, setDropped] = useState();
    const [planToPlay, setPlanToPlay] = useState();
    
    useEffect(() => {
        const getUserLibrary = async () => {
            console.log(user.user_id);
            try {
                 userapi.get(`/supabase/users/library/${user.user_id}`)
                    .then(result => {
                        setLibrary(result.data.data);
                        // console.log(result.data.data);
                    })
                    .catch(err => console.error(err))
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        } 
        if(user.user_id!==undefined){
            getUserLibrary();
        }
    }, [user])

    useEffect(() => {

        const getHunPercented = async () => {
            const hunPercentedGames = [];
            for (const game in library) {
                if (!Object.hasOwn(library, game)) library;
                
                const element = library[game];
             
            }


            Promise.all(library.map(async game => {
                try {
                    const { data } = await userapi.post('/igdb/game/', {id: game.game_id})
                    libraryGames.push(data);
                } catch (err) {
                    console.error(err.response?.data?.error || err.message)
                }
            }))
            console.log(libraryGames)
            setGameLibrary(libraryGames);
        }

        getHunPercented();
        // getCompleted();
        // getPlaying();
        // getPaused();
        // getDropped();
        // getPlanToPlay();
    },[library])

    return(
        <div>
            <div className="trending-games">
                <h3>100 Percented</h3>
                <hr></hr>
                {
                    hunPercented ?
                    <GameTape data={hunPercented}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Completed</h3>
                <hr></hr>
                {
                    completed ?
                    <GameTape data={completed}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Playing</h3>
                <hr></hr>
                {
                    playing ?
                    <GameTape data={playing}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Paused</h3>
                <hr></hr>
                {
                    paused ?
                    <GameTape data={paused}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Dropped</h3>
                <hr></hr>
                {
                    dropped ?
                    <GameTape data={dropped}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Plan to Play</h3>
                <hr></hr>
                {
                    planToPlay ?
                    <GameTape data={planToPlay}/>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Library;
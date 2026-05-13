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
        //console.log(library);
        const getHunPercented = async () => {
            const hunPercentedGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 1) {
                    hunPercentedGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            
            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: hunPercentedGames})
                console.log(data);
                setHunPercented(data);
            } catch (err) {
                console.error(err.response?.data?.error || err.message)
            }
        }
        
        if(library!==undefined){
            getHunPercented();
            // getCompleted();
            // getPlaying();
            // getPaused();
            // getDropped();
            // getPlanToPlay();
        }
    },[library])

    return(
        <div>
            <div className="trending-games">
                <h3>100 Percented</h3>
                <hr></hr>
                {
                    hunPercented ?
                    <GameTape games={hunPercented}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Completed</h3>
                <hr></hr>
                {
                    completed ?
                    <GameTape games={completed}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Playing</h3>
                <hr></hr>
                {
                    playing ?
                    <GameTape games={playing}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Paused</h3>
                <hr></hr>
                {
                    paused ?
                    <GameTape games={paused}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Dropped</h3>
                <hr></hr>
                {
                    dropped ?
                    <GameTape games={dropped}/>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Plan to Play</h3>
                <hr></hr>
                {
                    planToPlay ?
                    <GameTape games={planToPlay}/>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Library;
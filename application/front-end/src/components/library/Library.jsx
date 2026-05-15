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
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
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
            if(hunPercentedGames.length === 0){
                setPlaying([]);
                return;
            }

            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: hunPercentedGames})
                if(data.length>0){
                    console.log(data);
                    setHunPercented(data);
                }
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }

        const getCompleted = async () => {
            const completedGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 2) {
                    completedGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            if(completedGames.length === 0){
                setPlaying([]);
                return;
            }

            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: completedGames})
                if(data.length>0){
                    console.log(data);
                    setCompleted(data);
                }
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }

        const getPlaying = async () => {
            const playingGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 3) {
                    playingGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            if(playingGames.length === 0){
                setPlaying([]);
                return;
            }

            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: playingGames})
                if(data.length > 0){
                    console.log(data);
                    setPlaying(data);
                }
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }

        const getPaused = async () => {
            const pausedGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 4) {
                    pausedGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            if(pausedGames.length === 0){
                setPlaying([]);
                return;
            }

            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: pausedGames})
                if(data.length>0){
                    console.log(data);
                    setPaused(data);
                }
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }

        const getDropped = async () => {
            const droppedGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 5) {
                    droppedGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            if(droppedGames.length === 0){
                setPlaying([]);
                return;
            }


            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: droppedGames})
                if(data.length > 0){
                    console.log(data);
                    setDropped(data);
                }
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }
        
        const getPlanToPlay = async () => {
            const planToPlayGames = [];
            for (let i = 0; i < library.length; i++) {
                // const game = library[i];
                // console.log(game)
                if (library[i].status === 6) {
                    planToPlayGames.push(library[i].game_id);
                }
            }

            // console.log(hunPercentedGames);
            if(planToPlayGames.length === 0){
                setPlaying([]);
                return;
            }

            try {
                const { data } = await userapi.post('/igdb/games/selected/', {id: planToPlayGames})
                console.log(data);
                setPlanToPlay(data);
            } catch (error) {
                console.error(error.response?.data?.error || error.message)
            }
        }

        if(library!==undefined){
            getHunPercented();
            getCompleted();
            getPlaying();
            getPaused();
            getDropped();
            getPlanToPlay();
        }
    },[library])

    return(
        <div>
            <div className="trending-games">
                <h3>100 Percented</h3>
                <hr></hr>
                {
                    hunPercented ?
                    <div className="game-cover2">
                        <GameTape games={hunPercented}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Completed</h3>
                <hr></hr>
                {
                    completed ?
                    <div className="game-cover2">
                        <GameTape games={completed}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Playing</h3>
                <hr></hr>
                {
                    playing ?
                    <div className="game-cover2">
                        <GameTape games={playing}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Paused</h3>
                <hr></hr>
                {
                    paused ?
                    <div className="game-cover2">
                        <GameTape games={paused}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Dropped</h3>
                <hr></hr>
                {
                    dropped ?
                    <div className="game-cover2">
                        <GameTape games={dropped}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
            <div className="trending-games">
                <h3>Plan to Play</h3>
                <hr></hr>
                {
                    planToPlay ?
                    <div className="game-cover2">
                    <GameTape games={planToPlay}/>
                    </div>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Library;
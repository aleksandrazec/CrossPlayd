import { useContext, useEffect, useState } from "react"
import { UserContext } from '../../Context'
import logo from '../../assets/logo.png'
import './styles.css'
import { useNavigate } from 'react-router';
import userapi from "../../services/userapi";
import GameTape from "./GameTape";
import GamesPage from "./GamesPage";

function HomePage(props) {
    const user = useContext(UserContext)
    const navigate = useNavigate()

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
                <div className="header" >
                    <h1 style={{textAlign: "center"}}>We're not gamers because we don't have lives. It's because we choose to have many...</h1>
                </div>
                {
                    user.role != 'User' ?
                    <div className="button-container">
                        <button onClick={() => goToLogIn()}>Get started gamer</button>
                    </div>
                    :
                    <p></p>
                }
                {
                    <GamesPage/>
                }
            </div>
        </div>
    )


}
export default HomePage
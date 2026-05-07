import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import HomePage from './components/home-page/HomePage'
import GamePage from './components/game-page/GamePage';
import LogIn from './components/profile/LogIn'
import Register from './components/profile/Register'
import RegisterSuccessPage from './components/profile/RegisterSuccessPage'
import Profile from './components/profile/Profile'
import ForumHome from "./components/forums/ForumHome"
import ForumPage from "./components/forums/ForumPage"
import GamesPage from './components/home-page/GamesPage';
import AboutUs from './components/about-us/AboutUs';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter forceRefresh={true}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index={true} element={<HomePage/>}/>
                         <Route path='/gamepage/:id' element={<GamePage/>}/>
                        <Route path="login" element={<LogIn />} />
                        <Route path="register" element={<Register />} />
                        <Route path="registersuccess" element={<RegisterSuccessPage />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="/community" element={<ForumHome />}/>
                        <Route path="/community/:id" element={<ForumPage />} />
                        <Route path="/games" element={<GamesPage/>} />
                        <Route path="/aboutus" element={<AboutUs/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
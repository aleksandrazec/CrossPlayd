import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import HomePage from './components/home-page/HomePage'
import ForumHome from "./components/forums/ForumHome"
import ForumPage from "./components/forums/ForumPage"

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter forceRefresh={true}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index={true} element={<HomePage/>}/>
                        <Route path="/community" element={<ForumHome />}/>
                        <Route path="/community/:id" element={<ForumPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
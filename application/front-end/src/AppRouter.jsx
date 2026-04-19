import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import HomePage from './components/home-page/HomePage'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter forceRefresh={true}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index={true} element={<HomePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
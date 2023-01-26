import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import Home from './routes/Home';

const App = () => {
    return <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
                <Route exact path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
            </Routes>
        </Router>
    </div>
};

export default App;
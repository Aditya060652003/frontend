import React from 'react'
import './App.css'
import { BrowserRouter ,  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import NotFound from './Pages/NotFound'


const App = () => {
    return (
     <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="*" element={<NotFound/>}/>
                
        </Routes>
     </BrowserRouter>
    );
};

export default App;

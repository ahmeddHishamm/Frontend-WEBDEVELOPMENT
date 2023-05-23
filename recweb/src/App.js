import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import {Route, Routes,Router} from "react-router-dom";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import React from "react";
import {browserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Admin" element={<Admin/>}/>
            </Routes>

        </div>
    )
}


export default App;

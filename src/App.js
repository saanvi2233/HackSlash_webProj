import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage"; // Make sure the component name is capitalized
import Navbar from "./comonents/Navbar";
const App = () => {
    return (
        <div className="min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('./images/realpic.png')` }}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

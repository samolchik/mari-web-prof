import React, { useState, useEffect } from 'react';
import './App.css';
import MainComponent from "./components/MainComponent/MainComponent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// other imports ...

const App: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="page-container">
            <div className="app-background-container"></div>
            <div className="app-overlay-container"></div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Header/>
            <MainComponent showWelcome={showWelcome}/>
            {!showWelcome && <Footer/>}
        </div>
    );
};

export default App;

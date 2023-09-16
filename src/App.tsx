import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Welcome from "./components/Welcome/Welcome";
import Options from "./components/Options/Options";
import Projects from "./components/Projects/Projects";

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
            <Header />
            <section id="main" className="main">
                {/*{showWelcome ?*/}
                {/*    <Welcome />: <>*/}
                {/*    <Home />*/}
                {/*    <Options />*/}
                {/*    <Contact />*/}
                {/*</>}*/}
                <Projects/>
            </section>
            {!showWelcome && <Footer />}
        </div>
    );
};

export default App;

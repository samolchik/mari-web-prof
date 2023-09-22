import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Welcome from "./components/Welcome/Welcome";
import Options from "./components/Options/Options";
import PrivacyNotice from "./components/PrivacyNotice/PrivacyNotice";
import { inject } from '@vercel/analytics';
import { ProjectDetailsProvider } from "./context/projectDetailsContext";
inject();
const App: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

    const handlePrivacyClick = () => {
        setShowPrivacyNotice(true);
    };

    const handleCloseClick = () => {
        setShowPrivacyNotice(false);
    };
    useEffect(() => {
        document.body.style.overflow = showPrivacyNotice ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPrivacyNotice]);
    useEffect(() => {

        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ProjectDetailsProvider>
            <div className="page-container">
                <div className="app-background-container"></div>
                <div className="app-overlay-container"></div>
                <Header />
                <section id="main" className="main">
                    {showWelcome ?
                        <Welcome /> :
                        <>
                            <Home />
                            <Options />
                            <Contact />
                        </>
                    }
                </section>
                {showPrivacyNotice && <PrivacyNotice onClose={handleCloseClick} />}
                {!showWelcome && <Footer onPrivacyClick={handlePrivacyClick} />}
            </div>
        </ProjectDetailsProvider>
    );
};

export default App;

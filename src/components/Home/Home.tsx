import React, { useEffect, useState } from 'react';
import './Home.css';
import photo from '../../assets/photo.png';
import AboutMe from "../AboutMe/AboutMe";
import Motivation from "../Motivation/Motivation";
import Projects from "../Projects/Projects";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import Contact from "../Contact/Contact";

const Home: React.FC = () => {
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAbout(true);
        }, 2000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main">
        <section id="home" className="home-section">
            {!showAbout && (
                <div className="welcome-container">
                    <div className="welcome-animation">
                        <div className="welcome-text">WELCOME</div>
                    </div>
                </div>
            )}
            {showAbout && (
                <div className="home-container">
                    <div className="photo-container">
                        <img src={photo} alt="My Photo" />
                    </div>
                    <div className="about-me">
                        <h1>My name is Marina</h1>
                        <h2> I'm a Full Stack Web Developer</h2>
                        <h2> from Ukraine based in Canada</h2>
                        <div className="button-container">
                            <a href="#contact" className="contact-link">
                                <button className="contact-button">CONTACT ME</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
        </div>
    );
};

export default Home;





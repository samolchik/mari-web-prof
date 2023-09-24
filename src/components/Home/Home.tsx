import React from 'react';
import './Home.css';
import photo from '../../assets/photo.png';
import Music from "../Music/Music";

const Home: React.FC = () => {

    return (
        <section id="home" className="home-section">
            <Music/>
                <div className="home-container">
                    <div className="photo-container">
                        <img src={photo} alt="portfolio owner" />
                    </div>
                    <div className="about-me">
                        <div className="about-me-header-container">
                            <h1 className="home-header1">My name is Marina</h1>
                            <h1 className="home-header2"> I'm a Full Stack Web Developer</h1>
                        </div>
                        <div className="button-container">
                            <a href="#contact" className="contact-link">
                                <button className="contact-button">CONTACT ME</button>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Home;





import React, { useEffect, useState } from 'react';
import './Home.css';
import photo from '../../assets/image(2)3.png';
import About from "../About/About";
import Motivation from "../Motivation/Motivation";
import Projects from "../Projects/Projects";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import Contact from "../Contact/Contact";


const Home: React.FC = () => {

    return (
        <div className="main">
        <section id="home" className="home-section">
                <div className="home-container">
                    <div className="photo-container">
                        <img src={photo} alt="My Photo" />
                    </div>
                    <div className="about-me">
                        <div className="about-me-header-container">
                            <h1>My name is Marina</h1>
                            <h2> I'm a Full Stack Web Developer</h2>
                        </div>
                        <div className="button-container">
                            <a href="#contact" className="contact-link">
                                <button className="contact-button">CONTACT ME</button>
                            </a>
                        </div>
                    </div>
                </div>
            {/*<Projects/>*/}
            {/*/!*<SkillsSlider/>*!/*/}
            {/*<Contact/>*/}
        </section>

        </div>
    );
};

export default Home;





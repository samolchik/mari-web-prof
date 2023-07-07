import React from 'react';
import './About.css';
import photo from '../../assets/photomain.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container animate-slide-in">
            <div className="photo-container">
                <img src={photo} alt="My Photo" />
            </div>

            <div className="about-me">
                <h1>Hi, I'm Marina.</h1>
                <p>Full Stack Web Developer</p>
            </div>
            </div>
        </section>
    );
};

export default About;


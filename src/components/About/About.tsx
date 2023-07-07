import React from 'react';
import './About.css';
import photo from '../../assets/photomain.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
            <div className="photo-container">
                <img src={photo} alt="My Photo" />
            </div>

            <div className="about-me">
                <h2>Hi, I'm Marina.</h2>
                <p>Full Stack Web Developer</p>
            </div>
            </div>
        </section>
    );
};

export default About;


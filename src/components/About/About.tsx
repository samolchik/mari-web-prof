import React from 'react';
import './About.css';
import photo from '../../assets/2.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="photo-container">
                <img src={photo} alt="My Photo" />
            </div>

            <div className="container">
                <h2>Hi, I'm Marina.</h2>
                <p>Full Stack Web Developer</p>
            </div>
        </section>
    );
};

export default About;


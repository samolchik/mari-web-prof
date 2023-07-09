import React from 'react';
import './About.css';
import desktopPhoto from '../../assets/photo 2.png';
import mobilePhoto from '../../assets/photomobile.png';

const About: React.FC = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <section id="about" className="about-section">
            <div className="about-container animate-slide-in">
                <div className="photo-container">
                    <img src={isMobile ? mobilePhoto : desktopPhoto} alt="My Photo" />
                </div>
                <div className="about-me">
                    <h1>Hi, I'm Marina.</h1>
                    <h2>Full Stack Web Developer</h2>
                    <div className="p-div">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium sem non diam consequat, et ullamcorper mauris facilisis. Fusce ut est et enim rhoncus vulputate vel sed nisl. Maecenas id diam id ipsum hendrerit interdum. Ut cursus urna nec fermentum aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non bibendum nulla."
                        </p>
                    </div>
                    <div className="button-container">
                        <a href="/contact" className="contact-link">
                            <button className="contact-button">CONTACT ME</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



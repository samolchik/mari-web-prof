import React, { useEffect, useState } from 'react';
import './About.css';
import desktopPhoto from '../../assets/mobilephoto.png';
import mobilePhoto from '../../assets/mobilephoto.png';

const About: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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





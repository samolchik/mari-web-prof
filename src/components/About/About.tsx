import React from 'react';
import './About.css';
import photo from '../../assets/photo.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container animate-slide-in">
                <div className="photo-container">
                    <img src={photo} alt="My Photo" />
                </div>
                <div className="about-me">
                    <h1>Hi, I'm Marina.</h1>
                    <h2>Full Stack Web Developer</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium sem non diam consequat, et ullamcorper mauris facilisis. Fusce ut est et enim rhoncus vulputate vel sed nisl. Maecenas id diam id ipsum hendrerit interdum. Ut cursus urna nec fermentum aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non bibendum nulla. Suspendisse sed felis velit. Fusce semper odio a tellus tincidunt, in vestibulum nulla gravida. Vestibulum eu mauris vel erat elementum scelerisque at a metus. Sed convallis purus in justo consectetur eleifend."</p>
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



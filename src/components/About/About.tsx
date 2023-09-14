import React, { useEffect, useRef } from 'react';
import './About.css';
import back from '../../assets/logos/5.png';
import front from '../../assets/logos/4.png';
import tools from '../../assets/logos/6.png';
import linkedinLogo from "../../assets/logos/linkedin.jpeg";
import astronaut from "../../assets/logos/astronaut.jpeg";
import Motivation from "../Motivation/Motivation";
import Projects from "../Projects/Projects";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import Contact from "../Contact/Contact";
import photo from "../../assets/image777new.png";


const About = () => {

    return (
        <section id="about" className="aboutme-section">
            <div className={`top-aboutme-container`}>
                <div className={`aboutme-container`}>
                    <div className="bullet-points-container">
                        <div className="bullet-point">
                            <p>
                                    Hi, I'm glad to have you here! I'm a passionate <span className="highlight">Web Developer</span>, constantly on a path of self improvement. I have recently graduated from an intense 8 month course in <span className="highlight">Full Stack Web Development</span> at a leading IT school in Ukraine, complemented by an online course in Front End Development from META. Throughout this journey, I have worked on numerous projects, including the website you are currently exploring, and have gained experience in both <span className="highlight">Front End</span> and <span className="highlight">Back End</span> technologies.
                                I love what i do and I'm always aiming to get better and learn new things to stay at the forefront of the industry.
                                In my free time I'm learning about how to create Digital Art. The Apollo 11 astronaut, which you can see floating here, is one of my works. Feel free to ask me any questions, or connect with me!
                            </p>
                        </div>
                        <div className="top-connect-container">
                            <a href="https://www.linkedin.com/in/mari-dvlpr/"  className="link" target="_blank" rel="noopener noreferrer">
                                <div className="connect-container">
                                    <p> CLICK TO CONNECT WITH ME ON </p>
                                    <img src={linkedinLogo} alt="LinkedIn"/></div>
                            </a>
                        </div>
                    </div>
                    {/*<div className="astronaut-container">*/}
                    {/*    <img src={astronaut}/>*/}
                    {/*</div>*/}
                </div>

            </div>
        </section>
    );
};

export default About;

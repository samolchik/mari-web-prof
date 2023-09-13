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
import photo from "../../assets/image777.png";


const About = () => {
    const skill1Ref = useRef<HTMLDivElement>(null);
    const skill2Ref = useRef<HTMLDivElement>(null);
    const skill3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.3,
        };

        const animateOnScroll = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry, index: number) => {
                if (entry.isIntersecting) {
                    const { target } = entry;
                    if (target === skill1Ref.current) {
                        target.classList.add('slide-right');
                    } else if (target === skill2Ref.current) {
                        setTimeout(() => {
                            target.classList.add('slide-right');
                        }, 350);
                    } else if (target === skill3Ref.current) {
                        setTimeout(() => {
                            target.classList.add('slide-right');
                        }, 500);
                    }
                    observer.unobserve(target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, options);

        if (skill1Ref.current) {
            observer.observe(skill1Ref.current);
        }

        if (skill2Ref.current) {
            observer.observe(skill2Ref.current);
        }

        if (skill3Ref.current) {
            observer.observe(skill3Ref.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section id="about" className="aboutme-section">
            {/*<Motivation/>*/}
            <div className="photo-container">
                <img src={photo} alt="My Photo" />
            </div>
            {/*<Motivation/>*/}
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
                    </div>
                    {/*<div className="astronaut-container">*/}
                    {/*    <img src={astronaut}/>*/}
                    {/*</div>*/}
                </div>

                {/*<div className="top-connect-container">*/}
                {/*    <a href="https://www.linkedin.com/in/mari-dvlpr/"  className="link" target="_blank" rel="noopener noreferrer">*/}
                {/*        <div className="connect-container">*/}
                {/*            <p> CLICK TO CONNECT WITH ME ON </p>*/}
                {/*            <img src={linkedinLogo} alt="LinkedIn"/></div>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
            <div className="skills-list-header">
                <h1>&lt;SKILLS/&gt;</h1>
            </div>
            <div className="skills-list">
                <div ref={skill1Ref} className={`skills-each skill1`}>
                    <div className="header-skills-each">
                        <h1>Front End</h1>
                    </div>
                    <img src={front} alt="Front End" />
                    <div className="contain">
                        <div className="each">HTML</div>
                        <div className="each">CSS</div>
                        <div className="each">JavaScript</div>
                        <div className="each">TypeScript</div>
                        <div className="each">React.js</div>
                        <div className="each">Redux</div>
                        <div className="each">Figma</div>
                    </div>
                </div>
                <div ref={skill2Ref} className={`skills-each skill2`}>
                    <h1>Back End</h1>
                    <img src={back} alt="Back End" />
                    <div className="contain">
                        <div className="each">Node.js</div>
                        <div className="each">Express</div>
                        <div className="each">MongoDB</div>
                        <div className="each">MySQL</div>
                        <div className="each">JWT</div>
                        <div className="each">EJS</div>
                    </div>
                </div>
                <div ref={skill3Ref} className={`skills-each skill3`}>
                    <h1>Tools</h1>
                    <img src={tools} alt="Tools" />
                    <div className="contain">
                        <div className="each">NPM</div>
                        <div className="each">Git</div>
                        <div className="each">Github</div>
                        <div className="each">VS Code</div>
                        <div className="each">IntelliJ IDEA</div>
                    </div>
                </div>
            </div>
            <Projects/>
            <Contact/>
        </section>
    );
};

export default About;

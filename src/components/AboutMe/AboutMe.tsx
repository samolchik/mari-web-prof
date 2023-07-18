import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import back from '../../assets/4.png';
import front from '../../assets/5.png';
import tools from '../../assets/6.png';
import linkedinLogo from "../../assets/linkedin.png";
import astronaut from "../../assets/astronaut.png";


const AboutMe = () => {
    const skill1Ref = useRef<HTMLDivElement>(null);
    const skill2Ref = useRef<HTMLDivElement>(null);
    const skill3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.5,
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
                        }, 450);
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
            <div className="top-aboutme-wrapper2">
                <div className={`top-aboutme-container`}>
                    <h1>About Me</h1>
                    <div className={`aboutme-container`}>
                        <div className="bullet-points-container">
                            <div className="bullet-point">
                                <ul className="bullet-point-ul">
                                    <li className="bullet-point">I have undergone intense 8-month training in <span className="highlight">Web Development</span> at a leading IT school in Ukraine, complemented by an online course in Front End Development from META. Throughout this journey, I have worked on numerous projects, including the website you are currently exploring, and have gained experience in both <span className="highlight">Front End</span> and <span className="highlight">Back End</span> technologies. Now I'm ready to bring my skills to the table and transform your dreams into a digital reality!</li>
                                    <div className="astronaut-bullet-point"><div> <li className="bullet-point">I love AI. <span className="highlight">Chat GPT</span> is my ally and not an enemy! I have used it to streamline my Web Development process and enhance my productivity. I have become a confident user, leveraging its capabilities to improve efficiency, check for mistakes, and make necessary adjustments.</li>
                                        <li className="bullet-point">In my free time I'm learning about how to create <span className="highlight">Digital Art</span>. The drawing of Apollo 11 astronaut, which you can see floating here is one of my works. And yes, everything about space and universe excites me! Is the cat a Front End developer? Is the cat a Back End developer? Is it both?</li> </div>  <div className="astronaut-container">
                                        <img src={astronaut}/>
                                    </div></div>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="top-connect-container">
                        <a href="https://www.linkedin.com/in/marina-dvlpr/"  className="link" target="_blank" rel="noopener noreferrer">
                            <div className="connect-container">
                                <p> CLICK TO CONNECT WITH ME ON </p>
                                <img src={linkedinLogo} alt="LinkedIn"/></div>
                        </a>
                    </div>
                </div>
                {/*<div className="skills-list-header">*/}
                {/*    <h1>&lt;SKILLS/&gt;</h1>*/}
                {/*</div>*/}
                <div className="skills-list">
                    <div ref={skill1Ref} className={`skills-each skill1`}>
                        <div className="header-skills-each">
                            <h1>Front End</h1>
                        </div >
                        <img src={front} alt="Front End" />
                        <div className="contain">
                            <div className="each">HTML</div>
                            <div className="each">CSS</div>
                            <div className="each">JavaScript</div>
                            <div className="each">React.js</div>
                            <div className="each">Redux</div>
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
            </div>
        </section>
    );
};

export default AboutMe;



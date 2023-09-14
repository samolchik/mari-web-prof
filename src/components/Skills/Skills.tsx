import React, {useEffect, useRef} from 'react';
import front from "../../assets/logos/4.png";
import back from "../../assets/logos/5.png";
import tools from "../../assets/logos/6.png";
import "./Skills.css";
const Skills = () => {
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
                    const {target} = entry;
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
            observer.observe(skill1Ref.current);}

        if (skill2Ref.current) {
            observer.observe(skill2Ref.current);}

        if (skill3Ref.current) {
            observer.observe(skill3Ref.current);}

        return () => {
            if (observer) {
                observer.disconnect();}
        };
    }, []);
    return (
        <section id="skills" className="skills">
            <div className="skills-list">
                <div ref={skill1Ref} className={`skills-each skill1`}>
                    <div className="header-skills-each">
                        <h1>Front End</h1>
                    </div>
                    <img src={front} alt="Front End"/>
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
                    <img src={back} alt="Back End"/>
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
                    <img src={tools} alt="Tools"/>
                    <div className="contain">
                        <div className="each">NPM</div>
                        <div className="each">Git</div>
                        <div className="each">Github</div>
                        <div className="each">VS Code</div>
                        <div className="each">IntelliJ IDEA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

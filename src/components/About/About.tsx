import {useEffect, useRef} from "react";
import './About.css';
import linkedinLogo from "../../assets/logos/linkedin.png";

const About = () => {
    const bulletPointsContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (bulletPointsContainerRef.current) {
            observer.observe(bulletPointsContainerRef.current);
        }

        return () => {
            if (bulletPointsContainerRef.current) {
                observer.unobserve(bulletPointsContainerRef.current);
            }
        };
    }, []);


    return (
        <section id="about" className="aboutme-section">
            <div className={`top-aboutme-container`} ref={bulletPointsContainerRef}>
                <div className={`aboutme-container`}>
                    <div className="bullet-points-container">
                        <div className="bullet-point">
                            <h2>Hi, I'm glad to have you here!</h2>
                            <p>
                                I'm a passionate Web Developer,
                                constantly on a path of self improvement. I have graduated from an intense course in
                                Full Stack Web Development at a
                                leading IT school in Ukraine, complemented by an online course in Front End Development
                                from META. Throughout this journey, I have worked on numerous projects, including the
                                website you are currently exploring, and have gained experience in both Front End and
                                Back End technologies.
                                I love what i do and I'm always aiming to get better and learn new things to stay at the
                                forefront of the industry.
                                Feel free to ask me any questions,
                                or connect with me!
                            </p>
                        </div>
                        <div className="top-connect-container">
                            <a href="https://www.linkedin.com/in/mari-dvlpr/" className="link" target="_blank"
                               rel="noopener noreferrer">
                                <div className="connect-container">
                                    <p> CLICK TO CONNECT WITH ME ON </p>
                                    <img src={linkedinLogo} alt="LinkedIn"/></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

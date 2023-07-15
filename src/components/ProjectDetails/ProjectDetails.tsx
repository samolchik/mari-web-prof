import React, { useState } from 'react';
import './ProjectDetails.css';
import screen1 from '../../assets/screen1.png';
import screen2 from '../../assets/screen2.png';
import screen3 from '../../assets/screen3.png';
import screen4 from '../../assets/screen4.png';
import screen5 from '../../assets/screen5.png';
import screen6 from '../../assets/screen6.png';

interface ProjectDetailsProps {
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [screen6, screen1, screen3, screen4, screen2, screen5];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 2) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 2 + images.length) % images.length);
    };

    return (
        <div className="details-wrapper">
            <div className="details">
                <div className="close-button">
                    <button className="close" onClick={onClose}>CLOSE X</button>
                </div>
                <div className="screen-shots">
                    <div className="slider-container">
                        {images.slice(currentSlide, currentSlide + 2).map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`Screen ${currentSlide + index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="slider-controls">
                        <button onClick={prevSlide}>&lt;</button>
                        <button onClick={nextSlide}>&gt;</button>
                    </div>

                    <div className="description-details">
                        <p>
                            Hey there! Check out the tech behind my <span className="highlight">Movie Search Website</span> – a thrilling platform for movie enthusiasts.
                        </p>
                        <ul>
                            <li>
                                <span className="highlight">React:</span> I unleashed the power of React, a leading JavaScript library, to create a smooth and interactive user interface. The website offers an immersive experience while exploring movies.
                            </li>
                            <li>
                                <span className="highlight">TypeScript:</span> Boosting code reliability, I integrated TypeScript for a more efficient and readable codebase.
                            </li>
                            <li>
                                 <span className="highlight">Redux Toolkit:</span>Mastering complex states was a breeze with Redux Toolkit, ensuring a captivating user journey through seamless movie exploration.
                            </li>
                            <li>
                                 <span className="highlight">TMDb API Integration:</span>I  integrated the TMDb API, granting real-time access to a vast collection of movie data.
                            </li>
                        </ul>
                        <p> My Movie Search Website reflects my passion for crafting user-friendly and visually captivating web applications. Lights, camera, search – let's dive into the cinematic world! 🎬🍿</p>
                    </div>

                    <div>
                        <a href="https://github.com/your-username" target="_blank">
                            <button className="contact-button description-details-button">GO TO WEBSITE</button>
                        </a>
                        <a href="https://github.com/your-repo" target="_blank">
                            <button className="contact-button description-details-button">GO TO GITHUB</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;






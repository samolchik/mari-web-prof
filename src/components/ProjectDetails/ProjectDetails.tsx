import React, { useState } from 'react';
import './ProjectDetails.css';


interface ProjectDetailsProps {
    onClose: () => void;
    images: string[];
    projectDescription: string;
    projectTechnologies: string[];
    websiteLink: string;
    githubLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
                                                           onClose,
                                                           images,
                                                           projectDescription,
                                                           projectTechnologies,
                                                           websiteLink,
                                                           githubLink,
                                                       }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 2) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 2 + images.length) % images.length);
    };

    return (
        <div className="background">
            <div className="details-wrapper">
                <div className="details">
                    <div className="close-button">
                        <button className="close" onClick={onClose}>
                            X CLOSE
                        </button>
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
                            <p>{projectDescription}</p>
                            <ul>
                                {projectTechnologies.map((tech, index) => (
                                    <li key={index}>
                                        {tech.includes(':') ? (
                                            <>
                                                <span className="highlight">{tech.substring(0, tech.indexOf(':') + 1)}</span>
                                                {tech.substring(tech.indexOf(':') + 1)}
                                            </>
                                        ) : (
                                            tech
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="contact-button-div">
                            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                                <button className="contact-button description-details-button">GO TO WEBSITE</button>
                            </a>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="contact-button description-details-button">GO TO GITHUB</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;




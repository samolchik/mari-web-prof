import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
                                                           githubLink}) => {
    return (
        <div className="background">
            <div className="close-button">
                <button className="close" onClick={onClose}>
                    CLOSE
                </button>
            </div>
            <div className="screen-shots">
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <Carousel
                            autoPlay={true}
                            interval={3500}
                            infiniteLoop={true}
                            dynamicHeight={true}
                            stopOnHover={true}
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`screenshot ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className="description-details">
                    <p>{projectDescription}</p>
                    <ul>
                        {projectTechnologies.map((tech, index) => (
                            <li key={index}>
                                {tech.includes(':') ? (
                                    <>
                                        <span className="highlight">
                                            {tech.substring(0, tech.indexOf(':') + 1)}
                                        </span>
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
                        <button className="contact-button description-details-button">
                            GO TO WEBSITE
                        </button>
                    </a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <button className="contact-button description-details-button">
                            GO TO GITHUB
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

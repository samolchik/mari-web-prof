import React from 'react';
import Slider from 'react-simple-image-slider';
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
    const sliderImages = images.map((image) => ({url: image}));

    return (
        <div className="background">
            <div className="details-wrapper">
                <div className="details">
                    <div className="close-button">
                        <button className="close" onClick={onClose}>
                            CLOSE
                        </button>
                    </div>
                    <div className="screen-shots">
                        <div className="slider-container">
                            <div className="slider-wrapper">
                                <Slider  images={sliderImages}
                                         width={600}
                                         height={395}
                                         showNavs={true}
                                         showBullets={false}
                                         navMargin={-5}
                                         autoPlay={true}
                                         navSize={30}
                                         autoPlayDelay={3}/>

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
            </div>
        </div>
    );
};

export default ProjectDetails;

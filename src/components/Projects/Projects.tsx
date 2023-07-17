import React, { useState } from 'react';
import './Projects.css';
import movies from '../../assets/movieshome.png';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Projects = () => {
    const [showProjectDetails, setShowProjectDetails] = useState(false);

    const handleClickMovieImage = () => {
        setShowProjectDetails(true);
    };

    const handleCloseProjectDetails = () => {
        setShowProjectDetails(false);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>PROJECTS</h1>
                </div>
                <div className="project1">
                    <div className="homePage">
                        <img
                            src={movies}
                            alt="Movies"
                            onClick={handleClickMovieImage}
                        />
                    </div>
                    <div className="project-description">
                        <h1>Movie Search</h1>
                        <div className="description">
                            <div>
                                <p>Technologies used:</p>
                            </div>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                                <li>Typescript</li>
                                <li>Redux Toolkit</li>
                                <li>Git</li>
                                <li>NPM</li>
                            </ul>
                            <div className="findOut">Click on the image to find out more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="to-come">MORE TO COME...</div>
            {showProjectDetails && <ProjectDetails onClose={handleCloseProjectDetails} />}
        </section>
    );
};

export default Projects;

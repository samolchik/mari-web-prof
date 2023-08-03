import React, { useState } from 'react';
import './Projects.css';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import screen1 from '../../assets/screen1.jpeg';
import screen2 from '../../assets/screen2.jpeg';
import screen3 from '../../assets/screen3.jpeg';
import screen4 from '../../assets/screen4.jpeg';
import screen5 from '../../assets/screen5.jpeg';
import screen6 from '../../assets/screen6.jpeg';
import movies from '../../assets/movieshome.jpeg';
import screen7 from '../../assets/screenE1.jpeg';
import screen8 from '../../assets/screenE2.jpeg';
import screen9 from '../../assets/screenE3.jpeg';
import screen10 from '../../assets/screenE4.jpeg';
import screen11 from '../../assets/screenE5.jpeg';
import screen12 from '../../assets/screenE6.jpeg';
import furniture from '../../assets/furniturehome.jpeg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const handleClickProject = (project: string) => {
        setSelectedProject(project);
    };

    const handleCloseProjectDetails = () => {
        setSelectedProject(null);
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
                            src={furniture}
                            alt="Furniture"
                            onClick={() => handleClickProject('furniture')}
                        />
                    </div>
                    <div className="project-description">
                        <h1>E-commerce Furniture Store</h1>
                        <div className="description">
                            <div>
                                <p>Technologies used:</p>
                            </div>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React.js</li>
                                <li>Typescript</li>
                                <li>Context API</li>
                                <li>Git</li>
                                <li>NPM</li>
                            </ul>
                            <div className="findOut">Click on the image to find out more</div>
                        </div>
                    </div>
                </div>
                <div className="project1">
                    <div className="homePage">
                        <img
                            src={movies}
                            alt="Movies"
                            onClick={() => handleClickProject('movies')}
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

            {selectedProject === 'furniture' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={[ screen7, screen10, screen9, screen8, screen11, screen12]}
                    projectDescription="Explore the Tech Behind My Furniture Store E-Commerce Project!"
                    projectTechnologies={['Responsive Design: I crafted beautiful and user-friendly designs with a mobile-first approach, ensuring that the website looks stunning and functions seamlessly on various devices and screen sizes.',
                        ' CSS: Leveraging CSS, I styled the website\'s components to create visually appealing layouts, providing an enjoyable shopping experience for users.',
                        'Context API: To manage global state and avoid prop drilling, I implemented the Context API, enabling seamless data sharing between components and enhancing the overall performance of the application.',
                        '  HTML: The foundation of the website is built on HTML, providing a semantic and structured layout for enhanced accessibility.']}
                    websiteLink="https://furniture-store-black.vercel.app/"
                    githubLink="https://github.com/DevMari999/e-commerce-furniture"
                />
            )}
            {selectedProject === 'movies' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={[ screen6, screen1, screen3,  screen4, screen2, screen5]}
                    projectDescription="Hey there! Check out the tech behind my Movie Search project."
                    projectTechnologies={['React: I utilized the power of React, a leading JavaScript library, to create a smooth and interactive user interface. The website offers an immersive experience while exploring movies.',
                        'TypeScript: Boosting code reliability, I integrated TypeScript for a more efficient and readable codebase.',
                        'Redux Toolkit:Mastering complex states was a breeze with Redux Toolkit, ensuring a captivating user journey through seamless movie exploration.',
                        'TMDb API Integration:I integrated the TMDb API, granting real-time access to a vast collection of movie data.']}
                    websiteLink="https://movie-search-opal-two.vercel.app/"
                    githubLink="https://github.com/DevMari999/movie_search"
                />
            )}
        </section>
    );
};

export default Projects;



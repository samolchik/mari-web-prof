import React, {useEffect, useState} from 'react';
import './Projects.css';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import screen1 from '../../assets/screen-shots/screen1.jpeg';
import screen2 from '../../assets/screen-shots/screen2.jpeg';
import screen3 from '../../assets/screen-shots/screen3.jpeg';
import screen4 from '../../assets/screen-shots/screen4.jpeg';
import screen5 from '../../assets/screen-shots/screen5.jpeg';
import screen6 from '../../assets/screen-shots/screen6.jpeg';
import movies from '../../assets/screen-shots/movieshome.jpeg';
import screen7 from '../../assets/screen-shots/screenE1.jpeg';
import screen8 from '../../assets/screen-shots/screenE2.jpeg';
import screen9 from '../../assets/screen-shots/screenE3.jpeg';
import screen10 from '../../assets/screen-shots/screenE4.jpeg';
import screen11 from '../../assets/screen-shots/screenE5.jpeg';
import screen12 from '../../assets/screen-shots/screenE6.jpeg';
import screen13 from '../../assets/screen-shots/screenCar1.jpeg';
import screen14 from '../../assets/screen-shots/screenCar2.jpeg';
import screen15 from '../../assets/screen-shots/screenCar3.jpeg';
import screen16 from '../../assets/screen-shots/screenCar4.jpeg';
import screen17 from '../../assets/screen-shots/screenCar5.jpeg';
import screen18 from '../../assets/screen-shots/screenCar6.jpeg';
import furniture from '../../assets/screen-shots/furniturehome.jpeg';
import cars from '../../assets/screen-shots/carshome.jpeg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const handleClickProject = (project: string) => {
        setSelectedProject(project);
    };
    const handleCloseProjectDetails = () => {
        setSelectedProject(null);
    };
    useEffect(() => {
        if (selectedProject) {

            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';
        }
    }, [selectedProject]);
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-block">
                    {[ 'cars platform back end','e-commerce','movie search'].map((projectType, idx) => (
                        <div key={idx} className="project1" onClick={() => handleClickProject(projectType)}>
                            <h1 className="projects-header">{projectType.toUpperCase()}</h1>
                            <img
                                src={projectType === 'cars platform back end' ? cars : projectType ===  'e-commerce'? furniture : movies}
                                alt={projectType}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject === 'cars platform back end' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={[ screen13, screen14, screen15,  screen16, screen17, screen18]}
                    projectDescription="Hey there! Explore the tech behind my Car Sale project."
                    projectTechnologies={['Node.js: At the core of this project lies Node.js, an industry-leading runtime that ensures the application operates with performance in mind.',
                        'Express: Leaning on the minimalism and flexibility of Express.js, the application is not only agile but also easily maintainable. This lightweight framework has streamlined the creation of API endpoints, making data retrieval both swift and reliable.',
                        'JWT (JSON Web Tokens): With security at the forefront, JWT has been integrated for top-notch authentication and authorization. This assures that data communications remain secure and trustworthy',
                        'EJS (Embedded JavaScript Templates): Utilizing EJS facilitates server-side templating, offering dynamic content rendering capabilities. This ensures that content can be tailored and presented based on specific requirements and conditions.']}
                    websiteLink="https://car-sale-platform-c3fa3b2c4642.herokuapp.com"
                    githubLink="https://github.com/DevMari999/backend_project"/>
            )}
            {selectedProject === 'e-commerce' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={[ screen7, screen10, screen9, screen8, screen11, screen12]}
                    projectDescription="Explore the Tech Behind My Furniture Store E-Commerce Project!"
                    projectTechnologies={['Responsive Design: I crafted beautiful and user-friendly designs with a mobile-first approach, ensuring that the website looks stunning and functions seamlessly on various devices and screen sizes.',
                        ' CSS: Leveraging CSS, I styled the website\'s components to create visually appealing layouts, providing an enjoyable shopping experience for users.',
                        'Context API: To manage global state and avoid prop drilling, I implemented the Context API, enabling seamless data sharing between components and enhancing the overall performance of the application.',
                        '  HTML: The foundation of the website is built on HTML, providing a semantic and structured layout for enhanced accessibility.']}
                    websiteLink="https://furniture-store-black.vercel.app/"
                    githubLink="https://github.com/DevMari999/e-commerce-furniture"/>
            )}
            {selectedProject === 'movie search' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={[ screen6, screen1, screen3,  screen4, screen2, screen5]}
                    projectDescription="Explore the Tech Behind My Movie Search Project!"
                    projectTechnologies={['React: I utilized the power of React, a leading JavaScript library, to create a smooth and interactive user interface. The website offers an immersive experience while exploring movies.',
                        'TypeScript: Boosting code reliability, I integrated TypeScript for a more efficient and readable codebase.',
                        'Redux Toolkit:Mastering complex states was a breeze with Redux Toolkit, ensuring a captivating user journey through seamless movie exploration.',
                        'TMDb API Integration:I integrated the TMDb API, granting real-time access to a vast collection of movie data.']}
                    websiteLink="https://movie-search-opal-two.vercel.app/"
                    githubLink="https://github.com/DevMari999/movie_search"/>
            )}
        </section>
    );
};
export default Projects;







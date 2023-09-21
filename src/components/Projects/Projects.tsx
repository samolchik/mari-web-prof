import React, {useEffect, useState} from 'react';
import './Projects.css';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import movies from '../../assets/movies-screenshots/movies-screenshot-1.jpeg';
import furniture from '../../assets/furniture-store-screenshots/furniture-screenshot-1.jpeg';
import cars from '../../assets/car-platform-screenshots/cars-screenshot-1.jpeg';
import climateChange from '../../assets/climate-change-screenshots/climate-change-screenshot-1.jpeg';

function sortScreenshotKeys(a: string, b: string): number {
    const numA = parseInt(a.replace(/\D/g, ''), 10);
    const numB = parseInt(b.replace(/\D/g, ''), 10);
    return numA - numB;
}

const furnitureScreenshotsContext = (require as any).context('../../assets/furniture-store-screenshots', false, /\.(webp|jpg|jpeg|png)$/);
const furnitureScreenshotsKeys = furnitureScreenshotsContext.keys().sort(sortScreenshotKeys);
const furnitureScreenshots = furnitureScreenshotsKeys.map(furnitureScreenshotsContext);

const carsScreenshotsContext = (require as any).context('../../assets/car-platform-screenshots', false, /\.(webp|jpg|jpeg|png)$/);
const carsScreenshotsKeys = carsScreenshotsContext.keys().sort(sortScreenshotKeys);
const carsScreenshots = carsScreenshotsKeys.map(carsScreenshotsContext);

const moviesScreenshotsContext = (require as any).context('../../assets/movies-screenshots', false, /\.(webp|jpg|jpeg|png)$/);
const moviesScreenshotsKeys = moviesScreenshotsContext.keys().sort(sortScreenshotKeys);
const moviesScreenshots = moviesScreenshotsKeys.map(moviesScreenshotsContext);

const climateChangeScreenshotsContext = (require as any).context('../../assets/climate-change-screenshots', false, /\.(webp|jpg|jpeg|png)$/);
const climateChangeScreenshotsKeys = climateChangeScreenshotsContext.keys().sort(sortScreenshotKeys);
const climateChangeScreenshots = climateChangeScreenshotsKeys.map(climateChangeScreenshotsContext);


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
                    {[ 'climate change', 'cars platform back end', 'e-commerce', 'movie search'].map((projectType, idx) => (
                        <div key={idx} className="project1" onClick={() => handleClickProject(projectType)}>
                            <h1 className="projects-header">{projectType.toUpperCase()}</h1>
                            <img
                                src={projectType === 'cars platform back end' ? cars : projectType === 'e-commerce' ? furniture : projectType === 'climate change' ? climateChange : movies}
                                alt={projectType}
                            />
                            <div className="overlayer"></div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject === 'climate change' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={climateChangeScreenshots}
                    projectDescription="Technology Behind My Climate Change Platform:"
                    projectTechnologies={['React: My platform is built on React, offering a dynamic, user-friendly interface tailored for easy navigation and deep exploration of climate data.',
                        'CO2 Calculator API: A core feature is the integration of the Climatiq API. It allows users to not only understand but also calculate CO2 emissions, bringing actionable insights to the forefront.',
                        'CSS Animations: The user experience is enriched with fluid CSS animations, ensuring smooth transitions and engaging visual feedback throughout the platform.',
                        'External Libraries: For effective data representation, I\'ve integrated specialized external libraries, specifically for charting and tooltips. This ensures users receive clear, concise, and interactive data visualizations.']}
                    websiteLink="https://climate-change-save-the-earth.vercel.app"
                    githubLink="https://github.com/DevMari999/climate-change"/>
            )}
            {selectedProject === 'cars platform back end' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={carsScreenshots}
                    projectDescription="Hey there! Explore the tech behind my Car Sale project."
                    projectTechnologies={['Node.js: At the core of this project lies Node.js, an industry-leading runtime that ensures the application operates with performance in mind.',
                        'Express: Leaning on the minimalism and flexibility of Express.js, the application is not only agile but also easily maintainable. This lightweight framework has streamlined the creation of API endpoints, making data retrieval both swift and reliable.',
                        'JWT (JSON Web Tokens): With security at the forefront, JWT has been integrated for top-notch authentication and authorization. This assures that data communications remain secure and trustworthy',
                        'EJS (Embedded JavaScript Templates): Utilizing EJS facilitates server-side templating, offering dynamic content rendering capabilities. This ensures that content can be tailored and presented based on specific requirements and conditions.']}
                    websiteLink="https://node-cars-platform-a50b2bbce808.herokuapp.com/"
                    githubLink="https://github.com/DevMari999/cars-platform"/>
            )}
            {selectedProject === 'e-commerce' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={furnitureScreenshots}
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
                    images={moviesScreenshots}
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







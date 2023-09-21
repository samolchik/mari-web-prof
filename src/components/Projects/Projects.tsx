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
                    projectDescription1="Tech Stack: CSS, HTML, TypeScript, React.js, WebStorm, NPM, GIT, Climatiq API, Adobe Photoshop."
                    projectDescription2="External Libraries: react-helmet, react-tooltip, recharts."
                    projectTechnologies={['React: The platform is built upon the foundation of React. This allows for a dynamic, user-friendly interface that is both responsive and efficient. The choice of React ensures that users can navigate the platform with ease, promoting an intuitive user journey.',
                        'CO2 Calculator API: The platform integrates the Climatiq API, enabling users to gain insights on climate change and calculate personal CO2 emissions. This equips users with actionable data for informed decision-making.',
                        'CSS Animations: Leveraging precise CSS animations, the platform provides fluid transitions and feedback, enhancing user engagement and ensuring a polished user journey.',
                        'External Libraries: Specialized libraries are employed for optimized charting and tooltips, translating to clear, interactive visualizations. This approach simplifies the interpretation of intricate data sets, boosting user comprehension.',
                    'SEO with React Helmet: Enhanced search engine optimization is achieved through React Helmet, which facilitates dynamic management of SEO essentials, such as metadata and page titles, bolstering the platform\'s online visibility.']}
                    websiteLink="https://climate-change-save-the-earth.vercel.app"
                    githubLink="https://github.com/DevMari999/climate-change"/>
            )}
            {selectedProject === 'cars platform back end' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={carsScreenshots}
                    projectDescription1="Tech Stack: CSS, HTML, TypeScript, Node.js, Express.js, WebStorm, NPM, GIT, EJS, JWT, PrivatBank currency API."
                    projectDescription2="Database: MongoDB."
                    projectTechnologies={['Node.js: At the core of this project lies Node.js, an industry-leading runtime that ensures the application operates with performance in mind.',
                        'Express: Leaning on the minimalism and flexibility of Express.js, the application is not only agile but also easily maintainable.',
                        'JWT (JSON Web Tokens): With security at the forefront, JWT has been integrated for top-notch authentication and authorization. This assures that data communications remain secure and trustworthy',
                        'EJS (Embedded JavaScript Templates): Utilizing EJS facilitates server-side templating, offering dynamic content rendering capabilities.',
                    'Mongoose: Integral to the project, Mongoose streamlines MongoDB interactions with robust data modeling, enhancing database reliability and efficiency.',
                    'Cron Daily Currency Update: Utilizing Cron, the project automatically updates currency values daily via integration with a bank API, ensuring real-time accuracy and relevance for users.']}
                    websiteLink="https://node-cars-platform-a50b2bbce808.herokuapp.com/"
                    githubLink="https://github.com/DevMari999/cars-platform"/>
            )}
            {selectedProject === 'e-commerce' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={furnitureScreenshots}
                    projectDescription1="Tech Stack: CSS, HTML, TypeScript, React.js, WebStorm, NPM, GIT, Adobe Photoshop, Canva."
                    projectDescription2="State Management: Context API."
                    projectTechnologies={['Responsive Design: Beautiful and user-friendly design is crafted with a mobile-first approach, ensuring that the website presents impeccably and operates smoothly across diverse screen dimensions.',
                        ' CSS: Through the adept use of CSS, the website\'s components are styled to yield visually captivating layouts, providing an enjoyable shopping experience for users.',
                        'Context API: To streamline global state management and circumvent prop drilling, the Context API is employed. This facilitates efficient data exchange between components and boosts the application\'s overall performance.',
                        '  HTML: The foundation of the website is built on HTML, providing a semantic and structured layout for enhanced accessibility.']}
                    websiteLink="https://furniture-store-black.vercel.app/"
                    githubLink="https://github.com/DevMari999/e-commerce-furniture"/>
            )}
            {selectedProject === 'movie search' && (
                <ProjectDetails
                    onClose={handleCloseProjectDetails}
                    images={moviesScreenshots}
                    projectDescription1="Tech Stack: CSS, HTML, TypeScript, React.js, WebStorm, NPM, GIT, TMBD API, Adobe Photoshop."
                    projectDescription2="State Management: Redux Toolkit."
                    projectTechnologies={['React: The platform harnesses the capabilities of React, one of the foremost JavaScript libraries, to sculpt an interactive and intuitive user interface. This ensures visitors are not only able to navigate with ease but are also fully immersed when exploring the diverse selection of movies.',
                        'TypeScript: To fortify code dependability and ensure sustainable development practices, TypeScript has been seamlessly integrated. This statically typed superset of JavaScript adds a layer of robustness, ensuring that the codebase remains both efficient and easily interpretable.',
                        'Redux Toolkit: Navigating through intricate application states is simplified using Redux Toolkit. This powerful state management tool ensures that users experience a cohesive and captivating journey, eliminating potential bottlenecks or inconsistencies in data flow while they delve deep into movie explorations.',
                        'TMDb API Integration: The integration of the TMDb API serves as a gateway to an expansive treasure trove of movie data. With real-time access, users can retrieve the latest information, allowing for a comprehensive and enriched cinematic discovery experience.']}
                    websiteLink="https://movie-search-opal-two.vercel.app/"
                    githubLink="https://github.com/DevMari999/movie_search"/>
            )}

        </section>
    );
};
export default Projects;







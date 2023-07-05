import React from 'react';
import './Skills.css';
import skillLogo1 from '../../assets/js.png';
import skillLogo2 from '../../assets/ts.png';
import skillLogo3 from '../../assets/react.png';
import skillLogo4 from '../../assets/redux.png';
import skillLogo5 from '../../assets/node.png';
import skillLogo6 from '../../assets/mySQL.png';
import skillLogo7 from '../../assets/mongo.png';
import skillLogo8 from '../../assets/git.png';
import skillLogo9 from '../../assets/css.png';
import skillLogo10 from '../../assets/html5.png';
const Skills: React.FC = () => {
    const skillsData = [
        { name: 'JavaScript', logo: skillLogo1 },
        { name: 'TypeScript', logo: skillLogo2 },
        { name: 'React.js', logo: skillLogo3 },
        { name: 'Redux Toolkit', logo: skillLogo4 },
        { name: 'Node.js', logo: skillLogo5 },
        { name: 'MySQL', logo: skillLogo6 },
        { name: 'MongoDB', logo: skillLogo7 },
        { name: 'Git', logo: skillLogo8 },
        { name: 'CSS', logo: skillLogo9 },
        { name: 'HTML5', logo: skillLogo10 },
        // Add other skills and their logos
    ];

    return (
        <div id="skills" className="skills-section">
                 <h1 className="header-skills">MY SKILLS</h1>
                <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={index}>
                        <img className="skill-img" src={skill.logo} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default Skills;


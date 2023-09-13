import React from 'react';
import './SkillsSlider.css';

import skillLogo1 from '../../assets/logos/js.jpeg';
import skillLogo2 from '../../assets/logos/ts.jpeg';
import skillLogo3 from '../../assets/logos/react.jpeg';
import skillLogo4 from '../../assets/logos/redux.jpeg';
import skillLogo5 from '../../assets/logos/node.jpeg';
import skillLogo6 from '../../assets/logos/mySQL.jpeg';
import skillLogo7 from '../../assets/logos/mongo.jpeg';
import skillLogo8 from '../../assets/logos/git.jpeg';
import skillLogo9 from '../../assets/logos/css.jpeg';
import skillLogo10 from '../../assets/logos/html5.jpeg';

const SkillsSlider: React.FC = () => {

    const skillsData = [
        { name: 'JavaScript', logo: skillLogo1 },
        { name: 'MySQL', logo: skillLogo6 },
        { name: 'Redux', logo: skillLogo4 },
        { name: 'Node.js', logo: skillLogo5 },
        { name: 'CSS', logo: skillLogo9 },
        { name: 'MongoDB', logo: skillLogo7 },
        { name: 'TypeScript', logo: skillLogo2 },
        { name: 'Git', logo: skillLogo8 },
        { name: 'React.js', logo: skillLogo3 },
        { name: 'HTML5', logo: skillLogo10 },

    ];

    return (
        <section className="skills-section">
            <div className="skills-container-main">
                     <div className="top-container">
                <div className="skills-container">
                    {skillsData.map((skill, index) => (
                        <div className="skill" key={index}>
                            <img className="skill-img" src={skill.logo} alt={skill.name} />
                         </div>
                    ))}
                </div>
                <div className="skills-container">

                    {skillsData.map((skill, index) => (
                        <div className="skill" key={index}>
                            <img className="skill-img" src={skill.logo} alt={skill.name} />
                        </div>
                    ))}
                </div>

                     </div>
            </div>
        </section>
    );
};
export default SkillsSlider;



import React from 'react';
import './MainComponent.css';
import Projects from "../Projects/Projects";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import Home from "../Home/Home";
import Welcome from "../Welcome/Welcome";

const MainComponent: React.FC<{ showWelcome: boolean }> = ({ showWelcome }) => {
    return (
        <section id="main" className="main">
            {showWelcome ? <Welcome/> : <>
                <Home />
                <SkillsSlider/>
                <Projects />
            </>}
        </section>
    );
};

export default MainComponent;

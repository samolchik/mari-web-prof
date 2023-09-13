import React from 'react';
import './MainComponent.css';
import Projects from "../Projects/Projects";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import Home from "../Home/Home";
import About from "../About/About";
import {CANCELLED} from "dns";
import Contact from "../Contact/Contact";
import Welcome from "../Welcome/Welcome";
// other imports ...

const MainComponent: React.FC<{ showWelcome: boolean }> = ({ showWelcome }) => {
    return (
        <section id="main" className="main">
            {showWelcome ? <Welcome/> : <>
                <Home />
                <About/>

            </>}
        </section>
    );
};

export default MainComponent;

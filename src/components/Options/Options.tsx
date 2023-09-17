import React, {useEffect, useState} from 'react';
import Skills from "../Skills/Skills";
import "./Options.css";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Options = () => {
    const [selectedOption, setSelectedOption] = useState('Projects');


    const renderSelectedOption = () => {
        switch (selectedOption) {
            case 'Skills':
                return <Skills/>;
            case 'About':
                return <About/>;
            case 'Projects':
                return <Projects/>;
            default:
                return null;
        }
    };


    return (
        <section id="options" className="options">
            <div className="options-switcher">
                <button onClick={() => setSelectedOption('Projects')}>Projects</button>
                <button onClick={() => setSelectedOption('Skills')}>Skills</button>
                <button onClick={() => setSelectedOption('About')}>About Me</button>
            </div>
            <div className="options-container">
                {renderSelectedOption()}
            </div>
        </section>
    );
};

export default Options;

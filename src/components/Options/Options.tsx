import React, {useEffect, useState} from 'react';
import Skills from "../Skills/Skills";
import "./Options.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import record from "../../assets/music-record.png";

let audio = new Audio('/audio/jazz-ballad-164939.mp3');

const Options = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSlideInCompleted, setIsSlideInCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Skills');

    useEffect(() => {
        if (!isSlideInCompleted) {
            setTimeout(() => {
                setIsSlideInCompleted(true);
            }, 1500);
        }
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

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
    useEffect(() => {
            const handleAudioEnd = () => {
                audio.currentTime = 0;
                audio.play();
            };

            if (isPlaying) {
                audio.addEventListener('ended', handleAudioEnd);
            } else {
                audio.removeEventListener('ended', handleAudioEnd);
            }

            return () => {
                audio.removeEventListener('ended', handleAudioEnd);
            };

        }, [isPlaying]);

    return (
        <section id="options" className="options">
            <div className="options-bg"></div>
            <div
                className={`music-record ${!isSlideInCompleted ? 'slideIn' : ''} ${isPlaying ? 'spinning' : ''}`}
                onClick={togglePlay}
            >
                <img src={record} alt="music record jazz"/>
            </div>
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

import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SkillsSlider from "./components/SkillsSlider/SkillsSlider";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Motivation from "./components/Motivation/Motivation";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";




const App: React.FC = () => {
    return (
        <div className="page-container">
            <Header/>
            <Home/>
            <AboutMe/>
            <Motivation/>
            <Projects/>
            <SkillsSlider/>
            <Contact/>
            <Footer/>
        </div>

    );
};


export default App;


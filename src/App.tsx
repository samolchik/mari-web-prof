import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contsct/Contact";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Motivation1 from "./components/Motovation1/Motivation1";
import Motivation2 from "./components/Motivation2/Motivation2";
import Projects from "./components/Projects/Projects";




const App: React.FC = () => {
    return (
        <div className="page-container">
            <Header/>
            <Home/>
            <About/>
            <Motivation2/>
            <Projects/>
            <Skills/>
            {/*<Motivation1/>*/}
            <Contact/>
            <Footer/>
        </div>

    );
};


export default App;


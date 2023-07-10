import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contsct/Contact";
import Home from "./components/Home/Home";




const App: React.FC = () => {
    return (
        <div className="page-container">
            <Header/>
            <Home/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>

    );
};


export default App;


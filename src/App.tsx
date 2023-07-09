import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contsct/Contact";
import { Route, Routes, BrowserRouter as  Router } from 'react-router-dom';
import Home from "./components/Home/Home";




const App: React.FC = () => {
    return (
        <div className="page-container">
            {/*<Router>*/}
            {/*    <Header />*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<About />} />*/}
            {/*        <Route path="/skills" element={<Skills />} />*/}
            {/*        <Route path="/contact" element={<Contact />} />*/}
            {/*    </Routes>*/}
            {/*    <Footer />*/}
            {/*</Router>*/}

            <Header/>
            <Home/>
            <Skills/>
            <Contact/>
            <Footer/>



        </div>

    );
};


export default App;


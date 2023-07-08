import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contsct/Contact";
import { Route, Routes, BrowserRouter as  Router } from 'react-router-dom';




const App: React.FC = () => {
    return (
        <div className="page-container">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    );
};


export default App;


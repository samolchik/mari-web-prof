import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contsct/Contact";



const App: React.FC = () => {
  return (
      <div className="page-container">
          <Header />
          <About />
          <Skills />
          <Contact />
          <Footer />
      </div>

  );
};


export default App;

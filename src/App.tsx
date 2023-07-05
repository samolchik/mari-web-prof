import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  return (
      <div>
        <Header />
        <About />
        <Skills />
        <Footer />
      </div>
  );
};


export default App;

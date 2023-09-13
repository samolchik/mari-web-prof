import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logos/logo1.jpeg';
import linkedinLogo from '../../assets/logos/linkedin.jpeg';
import ukraine from '../../assets/logos/Ukraine.jpeg';
import githubLogo from '../../assets/logos/github.jpeg';
import burgericon from '../../assets/logos/burgericon.jpeg';
import { Link } from "react-scroll";
const Header = () => {

    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isHeaderHidden ? 'hide' : ''}`}>
            <div className="header-content">
                <div className="logo-header">
                    <img src={ukraine} alt="Logo" />
                </div>
                <h1></h1>
                <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                   <div className="burger-container">
                    <img src={burgericon}/>
                </div>
                </div>
                <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>

                        <div className="header-link-logo">
                        <li className="header-link-logo">
                            <a href="https://github.com/DevMari999" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                <img className="link-logo" src={githubLogo} alt="gitHub" />
                            </a>
                        </li>
                        <li className="header-link-logo">
                            <a href="https://www.linkedin.com/in/mari-dvlpr/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                <img className="link-logo" src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </li>
                        </div>
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={closeMobileMenu}>

                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
                                ABOUT ME
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;











import React, {useEffect, useState } from 'react';
import './Header.css';
import linkedinLogo from '../../assets/logos/linkedin.png';
import ukraine from '../../assets/logos/ukraine.png';
import githubLogo from '../../assets/logos/github.png';
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
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);
    return (
        <header className={`header ${isHeaderHidden ? 'hide' : ''}`}>
            <div className="header-content">
                <div className="logo-header">
                    <img src={ukraine} alt="Logo" />
                </div>
                <h1></h1>
                <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="burger-container">
                        <img src={burgericon} alt="Burger Icon"/>
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
                        </div >
                        <li className="link-hover">
                            <Link to="home" smooth={true} duration={50} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="link-hover">
                            <Link to="options" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="link-hover">
                            <Link to="contact"  onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;











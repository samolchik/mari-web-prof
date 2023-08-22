import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo1.jpeg';
import linkedinLogo from '../../assets/linkedin.jpeg';
import ukraine from '../../assets/Ukraine.jpeg';
import githubLogo from '../../assets/github.jpeg';
import burgericon from '../../assets/burgericon.jpeg';
import { Link } from "react-scroll";
const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsHeaderHidden(prevScrollPos < currentScrollPos && currentScrollPos > 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
                    <a href="#home"><img src={logo} alt="Logo" /></a>
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
                        <li>
                            <a href="https://github.com/DevMari999" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                <img className="link-logo" src={githubLogo} alt="gitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mari-dvlpr/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                <img className="link-logo" src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
                                ABOUT
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











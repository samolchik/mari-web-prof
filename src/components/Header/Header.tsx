import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo1.png';
import linkedinLogo from '../../assets/linkedin.png';

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

    return (
        <header className={`header ${isHeaderHidden ? 'hide' : ''}`}>
            <div className="header-content">
                <div className="logo-header">
                    <img src={logo} alt="Logo" />
                </div>
                <h1></h1>
                <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                   <div className="burger-container">
                    <div className="burger-icon"></div>
                    <div className="burger-icon"></div>
                    <div className="burger-icon"></div>
                </div>
                </div>
                <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img className="linkedin" src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="#home">HOME</a>
                        </li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;











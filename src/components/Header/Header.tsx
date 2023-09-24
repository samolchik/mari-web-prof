import React, { useEffect, useState } from 'react';
import './Header.css';
import linkedinLogo from '../../assets/logos/linkedin.png';
import Ukraine1 from '../../assets/logos/Ukraine1.png';
import Ukraine2 from '../../assets/logos/Ukraine2.png';
import githubLogo from '../../assets/logos/github.png';
import burgericon from '../../assets/logos/burgericon.jpeg';
import { Link } from "react-scroll";
import musician from "../../assets/musitian.png";
import { Tooltip } from 'react-tooltip';
import { useProjectDetails } from '../../context/projectDetailsContext';

const Header = () => {
    const { closeProjectDetails } = useProjectDetails();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavLinkClick = () => {
        closeMobileMenu();
        closeProjectDetails();
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
        <header className={`header`}>
            <div className="header-content">
                <div className="logo-header">
                    <img src={Ukraine2} alt="Logo" className="Ukraine2" />
                    <img src={Ukraine1} alt="Logo" className="Ukraine1" />
                </div>
                <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="burger-container">
                        <img src={burgericon} alt="Burger Icon" />
                    </div>
                </div>
                <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="logos-ul">
                        <li className="header-link-logo">
                            <a href="https://github.com/DevMari999" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                                <img className="link-logo" src={githubLogo} alt="gitHub" />
                            </a>
                        </li>
                        <li className="header-link-logo">
                            <a href="https://www.linkedin.com/in/mari-dvlpr/" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
                                <img className="link-logo" src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="link-hover">
                            <a href="#home" onClick={handleNavLinkClick}>Home</a>
                        </li>
                        <li className="link-hover">
                            <a href="#options" onClick={handleNavLinkClick}>Projects</a>
                        </li>
                        <li className="link-hover">
                            <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
                        </li>
                        <li>
                            <img src={musician} className="musician"
                                 alt="musician"
                                 data-tooltip-id="musician"
                                 data-tooltip-content="Special thanks to Oleg Kirilkov, a talented Ukrainian musician, who has generously made this beautiful music available for free use in the public domain."
                                 data-tooltip-delay-show={50}
                                 data-place="right" />

                            <Tooltip id="musician"
                                     className="style-tooltip"
                                     arrowColor="transparent"
                                     data-place="right"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

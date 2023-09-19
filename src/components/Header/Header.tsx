import React, {useEffect, useState} from 'react';
import './Header.css';
import linkedinLogo from '../../assets/logos/linkedin.png';
import Ukraine1 from '../../assets/logos/Ukraine1.png';
import Ukraine2 from '../../assets/logos/Ukraine2.png';
import githubLogo from '../../assets/logos/github.png';
import burgericon from '../../assets/logos/burgericon.jpeg';
import {Link} from "react-scroll";
import musician from "../../assets/musitian.png";
import {Tooltip} from 'react-tooltip';

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
                <div className="logo-header"
                    // data-tooltip-id="ukraine"
                    // data-tooltip-content="gratitute"
                    // data-tooltip-delay-show={50}
                >
                    <img src={Ukraine2} alt="Logo" className="Ukraine2"/>
                    <img src={Ukraine1} alt="Logo" className="Ukraine1"/>
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
                                <a href="https://github.com/DevMari999" target="_blank" rel="noopener noreferrer"
                                   onClick={closeMobileMenu}>
                                    <img className="link-logo" src={githubLogo} alt="gitHub"/>
                                </a>
                            </li>
                            <li className="header-link-logo">
                                <a href="https://www.linkedin.com/in/mari-dvlpr/" target="_blank"
                                   rel="noopener noreferrer" onClick={closeMobileMenu}>
                                    <img className="link-logo" src={linkedinLogo} alt="LinkedIn"/>
                                </a>
                            </li>
                        </div>
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
                            <Link to="contact" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <img src={musician} className="musician"
                                 data-tooltip-id="musician"
                                 data-tooltip-content="Special thanks to Oleg Kirilkov, a talented Ukrainian musician, who has generously made this beautiful music available for free use in the public domain."
                                 data-tooltip-delay-show={50}
                                 data-place="right"/>

                            <Tooltip id="musician"
                                     className="style-tooltip"
                                     arrowColor="transparent"
                                     data-place="right"
                                     place="right"

                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;











import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo1.png';
import linkedinLogo from '../../assets/linkedin.png';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

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

    return (
        <header className={`header ${isHeaderHidden ? 'hide' : ''}`}>
            <div className="header-content">
                <div className="logo-header">
                    <img src={logo} alt="Logo" />
                </div>
                <h1></h1>
                <nav className="navigation">
                    <ul>
                        <li className="nav-element">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img  className="linkedin" src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </li>
                        <li className="nav-element">
                            <a href="/">ABOUT</a>
                        </li>
                        <li className="nav-element">
                            <a href="/skills">SKILLS</a>
                        </li>
                        <li className="nav-element">
                            <a href="/contact">CONTACT</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;









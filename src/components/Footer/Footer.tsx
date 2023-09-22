import React, {useState} from 'react';
import './Footer.css';
interface FooterProps {
    onPrivacyClick: () => void;
}
const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => (

        <footer className="footer">
            <div className="footer-content">
                <p>&copy; Happy Coding</p>
                <button className="data-collection" onClick={onPrivacyClick}>
                    Privacy Notice
                </button>
            </div>
        </footer>
    );

export default Footer;

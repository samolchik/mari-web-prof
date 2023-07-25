import React, { useState } from 'react';
import './Footer.css';
import glasses from "../../assets/Untitled design.gif";

const Footer = () => {
    const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

    const handlePrivacyClick = () => {
        setShowPrivacyNotice(true);
    };

    const handleCloseClick = () => {
        setShowPrivacyNotice(false);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; Happy Coding</p>
               {/*<img className="glasses" src={glasses} alt="glasses"/>*/}
                <button className="data-collection" onClick={handlePrivacyClick}>
                    Privacy Notice
                </button>
            </div>
            {showPrivacyNotice && (
                <div className="privacy-notice-overlay">
                    <div className="privacy-notice">
                        <h2>Privacy Notice</h2>
                        <div className="privacy-notice-content">
                        <p>
                            This Privacy Notice explains how personal information is collected, used, and protected when using the contact form on the website in compliance with applicable data protection laws.<br/>

                            <b>Data Collection and Use</b><br/>

                            When using the contact form on this website, the following information is collected:<br/>

                            <b>Name</b><br/>
                            <b>Email address</b><br/>
                            <b>Message</b><br/>

                            The collected information is used solely for the purpose of responding to inquiries and providing support. Information is not shared with any third parties, and it is not used for marketing purposes.<br/>

                            <b>Legal Basis for Processing</b><br/>

                            The legal basis for processing personal data is the consent provided when submitting the contact form. By submitting the form, users acknowledge that they have read and understood this Privacy Notice and consent to the collection and processing of their personal data for the purposes stated herein.<br/>


                                <b>Third-Party Service</b><br/>
                                When you submit the contact form, your information will be processed using a third-party service called EmailJS. This service is used solely for the purpose of forwarding your inquiries to an email address for further processing and response. EmailJS acts as a data processor on behalf and does not use the data for its purposes. The appropriate measures are implemented to protect your data during transmission to an email.<br/>


                            <b>Data Retention</b><br/>

                            Personal data will be retained only for as long as necessary to fulfill the purpose for which it was collected or as required by law. Once the information is no longer needed, it will be securely deleted or destroyed.<br/>

                            <b>Data Security</b><br/>

                            Appropriate technical and organizational measures are taken to protect personal data from unauthorized access, disclosure, or alteration.<br/>

                            <b>Your Rights</b><br/>

                            As a user, you have the following rights regarding your personal data:<br/>

                            The right to access: You can request a copy of the personal data held about you.<br/>
                            The right to rectification: If you believe the information held about you is inaccurate or incomplete, you can request it to be corrected.<br/>
                            The right to erasure: You can request the deletion of your personal data, provided it is not necessary for legal or legitimate business purposes.<br/>
                            The right to object: You can object to the processing of your personal data, and it will stop unless there are compelling legitimate grounds to continue.<br/>
                            The right to restrict processing: You can request that the processing of your personal data be limited under certain circumstances.<br/>
                            The right to data portability: You can request a copy of your personal data in a machine-readable format.<br/>

                            <b>Changes to This Privacy Notice</b><br/>

                             This Privacy Notice can be updated or modified at any time. Any changes will be posted on this page, and the effective date will be indicated at the top of the notice.<br/>
                        </p>

                        </div>
                        <button onClick={handleCloseClick}>Close</button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;

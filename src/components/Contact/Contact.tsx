 import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rocketVisible, setRocketVisible] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            emailjs.init('kZ71s_OSBmeMczpqD');

            const params = {
                from_name: name,
                reply_to: email,
                message: message,
            };

            const emailJsServiceId = 'service_zhimexo';
            const emailJsTemplateId = 'template_d8cx65g';

            setName('');
            setEmail('');
            setMessage('');

            setRocketVisible(true);

            const response = await emailjs.send(emailJsServiceId, emailJsTemplateId, params);

            if (response.status === 200) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
                console.log('Form submission failed');
            }
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

    useEffect(() => {
        if (rocketVisible) {
            const timeout = setTimeout(() => {
                setRocketVisible(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [rocketVisible]);

    return (
        <section id="contact">
            <div className="contact-section">
                <div className="contact-container">
                    <h2 className="contact-header">Contact Me</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-element">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="contact-input"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="contact-element">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="contact-input"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="contact-element">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                className="contact-textarea"
                                value={message}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button className="contact-button">CONTACT ME</button>
                    </form>
                </div>
                <div className="submission-container">
                    {submissionStatus === 'success' && <p className="submission-message">Form submitted successfully!</p>}
                    {submissionStatus === 'error' && <p className="submission-message">Failed to submit form. Please try again later.</p>}
                </div>
            </div>
            {/*{rocketVisible && (*/}
            {/*    <div className="rocket-container">*/}
            {/*        <img src={rocket} alt="Rocket" className="rocket-image" />*/}
            {/*    </div>*/}
            {/*)}*/}

        </section>
    );
};

export default Contact;









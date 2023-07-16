import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';
import rocket from '../../assets/rocket.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rocketVisible, setRocketVisible] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://portfolio-website9696.azurewebsites.net/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                // Reset the form fields
                setName('');
                setEmail('');
                setMessage('');

                setRocketVisible(true);

                setTimeout(() => {
                    setRocketVisible(false);
                }, 3000);
            } else {
                console.log('Form submission failed');
            }
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

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
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setName(e.target.value)
                                }
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
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="contact-element">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                className="contact-textarea"
                                value={message}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                    setMessage(e.target.value)
                                }
                                required
                            ></textarea>
                        </div>
                        <button className="contact-button">CONTACT ME</button>
                    </form>
                </div>
            </div>
            {rocketVisible && (
                <div className="rocket-container">
                    <img src={rocket} alt="Rocket" className="rocket-image" />
                </div>
            )}
        </section>
    );
};

export default Contact;









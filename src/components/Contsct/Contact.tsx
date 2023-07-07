import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contsct.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Process the form submission here
        // You can send the form data to a server or perform any other actions

        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-section">
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
                <button type="submit" className="contact-button">Submit</button>
            </form>


        </div>
    );
};

export default Contact;



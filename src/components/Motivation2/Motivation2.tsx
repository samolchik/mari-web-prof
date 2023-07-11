import React, { useEffect, useRef, useState } from 'react';
import './Motivation2.css';

const Motivation2 = () => {
    const container1Ref = useRef<HTMLDivElement>(null);
    const container2Ref = useRef<HTMLDivElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.9,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShouldAnimate(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (container1Ref.current) {
            observer.observe(container1Ref.current);
        }
        if (container2Ref.current) {
            observer.observe(container2Ref.current);
        }
    }, []);

    useEffect(() => {
        if (shouldAnimate) {
            animateHeaderContainers();
        }
    }, [shouldAnimate]);

    const animateHeaderContainers = () => {
        if (container1Ref.current) {
            container1Ref.current.classList.add('slide-in');
        }
        if (container2Ref.current) {
            container2Ref.current.classList.add('slide-in-reverse');
        }
    };

    return (
        <section className="motivation2-section">
            <div className="box">
            <span className="box-container">
                <div className="motivation2-container">
                <div ref={container1Ref} className={`header-container ${shouldAnimate ? 'visible' : ''}`}>
                    <h1 className="neon header1">[DO WHAT YOU LOVE]</h1>
                </div>
                <div ref={container2Ref} className={`header-container ${shouldAnimate ? 'visible' : ''}`}>
                    <h1 className="neon header2" >[AND LOVE WHAT YOU DO]</h1>
                </div>
            </div>
            </span>
            </div>
        </section>
    );
};

export default Motivation2;


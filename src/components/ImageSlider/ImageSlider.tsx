import React, { useState } from 'react';
import './ImageSlider.css';

interface Slide {
    url: string;
}

interface ImageSliderProps {
    slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground: React.CSSProperties = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div className="slider-container">
            <div style={slideStylesWidthBackground} className="slide"></div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="dot"
                    >
                        ●
                    </div>
                ))}
            </div>
            <div className="left-right">
                <div onClick={goToPrevious} className="left-arrow">
                    &lt;
                </div>
                <div onClick={goToNext} className="right-arrow">
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;

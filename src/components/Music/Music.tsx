import record from "../../assets/music-record.png";

import React, {useEffect, useState} from 'react';
import "./Music.css";
let audio = new Audio('/audio/jazz-ballad-164939.mp3');

const Music = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isSlideInCompleted, setIsSlideInCompleted] = useState(false);

    useEffect(() => {
        if (!isSlideInCompleted) {
            setTimeout(() => {
                setIsSlideInCompleted(true);
            }, 1500);
        }
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        const handleAudioEnd = () => {
            audio.currentTime = 0;
            audio.play();
        };

        if (isPlaying) {
            audio.addEventListener('ended', handleAudioEnd);
        } else {
            audio.removeEventListener('ended', handleAudioEnd);
        }

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
        };

    }, [isPlaying]);
    return (
            <div
                className={`music-record ${!isSlideInCompleted ? 'slideIn' : ''} ${isPlaying ? 'spinning' : ''}`}
                onClick={togglePlay}
            >
                <img src={record} alt="music record jazz"/>
            </div>
    );
};

export default Music;

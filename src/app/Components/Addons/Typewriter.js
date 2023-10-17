"use client"
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentText('');
                setCurrentIndex(0);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [currentIndex, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;

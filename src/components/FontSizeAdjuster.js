import React, { useState } from 'react';

const FontSizeAdjuster = () => {
    const [fontSize, setFontSize] = useState(16); // Default font size

    const increaseFont = () => {
        setFontSize(prevFontSize => prevFontSize + 2);
    };

    const decreaseFont = () => {
        setFontSize(prevFontSize => Math.max(12, prevFontSize - 2)); // Minimum font size of 12px
    };

    return (
        <div className="font-size-adjuster">
            <button onClick={increaseFont} className="btn btn-secondary">Increase Font Size</button>
            <button onClick={decreaseFont} className="btn btn-secondary">Decrease Font Size</button>
            <style>
                {`
                    body {
                        font-size: ${fontSize}px;
                    }
                `}
            </style>
        </div>
    );
};

export default FontSizeAdjuster;

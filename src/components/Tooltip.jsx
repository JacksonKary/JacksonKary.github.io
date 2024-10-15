import React, { useState, useRef } from 'react';

const Tooltip = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null); // Ref to store the timeout ID

    const handleMouseEnter = () => {
        // Clear any pending timeouts to prevent premature hiding
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true); // Show tooltip
    };

    const handleMouseLeave = () => {
        // Add a short delay to prevent the tooltip from closing immediately,
        // allowing the user to move the cursor over the tooltip without it disappearing.
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false); // Hide tooltip after delay
        }, 100);
    };

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 transition-opacity duration-100 ${
                    isHovered ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
            >
                <div className="relative bg-stone-800 text-stone-200 text-xs font-semibold rounded-lg shadow-lg px-2 py-1">
                    {text}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-t-4 border-t-red-800 border-x-8 border-x-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 transition-opacity duration-100 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
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
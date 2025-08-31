"use client";
import React, { FC, useEffect, useState } from 'react';

interface CustomCursorProps {

}

const CustomCursor: FC<CustomCursorProps> = ({ }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 w-60 h-60 bg-white opacity-[0.08] rounded-full z-50 blur-3xl transition-transform duration-75"
            style={{
                transform: `translate3d(${position.x - 64}px, ${position.y - 64}px, 0)`,
            }}
        />
    );
};

export default CustomCursor;
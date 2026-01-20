"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 100, stiffness: 2500 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            window.addEventListener("mousemove", updateMousePosition);
            document.addEventListener("mouseenter", handleMouseEnter);
            document.addEventListener("mouseleave", handleMouseLeave);

            document.body.style.cursor = "none";

            const style = document.createElement('style');
            style.id = 'cursor-style';
            style.innerHTML = `
          * {
            cursor: none !important;
          }
          /* Re-enable pointer events for interactive elements so they work, but keep cursor hidden */
          a, button, input, textarea, select {
            cursor: none !important;
          }
        `;
            document.head.appendChild(style);

            return () => {
                window.removeEventListener("mousemove", updateMousePosition);
                document.removeEventListener("mouseenter", handleMouseEnter);
                document.removeEventListener("mouseleave", handleMouseLeave);
                document.body.style.cursor = "auto";
                const existingStyle = document.getElementById('cursor-style');
                if (existingStyle) existingStyle.remove();
            };
        }
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-0%",
                translateY: "-0%",
            }}
        >
            <img
                src="/cursor.png"
                alt="Custom Cursor"
                width={30}
                height={30}
                className="w-8 h-8"
                style={{
                    filter: "invert(1) drop-shadow(0px 2px 4px rgba(0,0,0,0.5))"
                }}
            />
        </motion.div>
    );
};

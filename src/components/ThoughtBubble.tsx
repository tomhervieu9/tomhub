"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ThoughtBubble = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("Welcome to my webpage!");

  useEffect(() => {
    const setScrollText = () => {
      setIsVisible(true);
      setText("Scrolling...");
    };

    window.addEventListener("wheel", setScrollText);
    window.addEventListener("touchmove", setScrollText);

    return () => {
      window.removeEventListener("wheel", setScrollText);
      window.removeEventListener("touchmove", setScrollText);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="relative inline-block"
        >
          {/* Main bubble */}
          <div className="bg-white border-2 border-gray-800 rounded-3xl px-6 py-4 shadow-lg">
            {/* Pointer tail using pseudo-elements alternative */}
            <svg
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-6 h-6"
              viewBox="0 0 20 20"
            >
              <polygon
                points="4,4 16,4 10,16"
                fill="white"
                stroke="gray-800"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-gray-800 font-medium text-sm">{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

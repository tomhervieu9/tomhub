"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ThoughtBubbleProps {
  text: string;
  isVisible: boolean;
  delay?: number;
}

export const ThoughtBubble = ({
  text,
  isVisible,
  delay = 0,
}: ThoughtBubbleProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.4,
            delay,
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

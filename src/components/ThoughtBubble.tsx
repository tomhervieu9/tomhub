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
              className="absolute -bottom-3 -right-2 w-6 h-6"
              viewBox="0 0 20 20"
              fill="white"
              stroke="gray-800"
              strokeWidth="2"
            >
              <circle cx="10" cy="10" r="4" />
              <circle cx="16" cy="16" r="3" />
            </svg>

            <p className="text-gray-800 font-medium text-sm">{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

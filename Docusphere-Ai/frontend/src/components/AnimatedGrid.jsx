import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
        <defs>
          <pattern
            id="animatedGrid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <motion.rect
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-500/30"
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.line
              x1="0"
              y1="40"
              x2="80"
              y2="40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-400/20"
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            />
            <motion.line
              x1="40"
              y1="0"
              x2="40"
              y2="80"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-400/20"
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#animatedGrid)" />
      </svg>
    </div>
  );
};

export default AnimatedGrid;
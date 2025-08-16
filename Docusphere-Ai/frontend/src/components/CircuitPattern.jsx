import React from 'react';
import { motion } from 'framer-motion';

const CircuitPattern = () => {
  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M20,20 L80,20 L80,50 L50,50 L50,80 L20,80 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-cyan-500"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.circle
              cx="20"
              cy="20"
              r="3"
              fill="currentColor"
              className="text-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="80"
              cy="50"
              r="2"
              fill="currentColor"
              className="text-blue-400"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
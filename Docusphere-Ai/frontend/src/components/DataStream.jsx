import React from 'react';
import { motion } from 'framer-motion';

const DataStream = () => {
  const streams = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 4,
  }));

  const binaryChars = ['0', '1'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px h-full"
          style={{ left: stream.left }}
        >
          {Array.from({ length: 20 }, (_, j) => (
            <motion.div
              key={j}
              className="absolute text-xs font-mono text-cyan-400/40"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: window.innerHeight + 20,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: stream.duration,
                repeat: Infinity,
                delay: stream.delay + j * 0.1,
                ease: 'linear',
              }}
              style={{ top: `${j * 5}%` }}
            >
              {binaryChars[Math.floor(Math.random() * binaryChars.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataStream;
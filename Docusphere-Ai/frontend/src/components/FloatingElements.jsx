import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            width: element.size,
            height: element.size,
          }}
          initial={{
            x: element.initialX,
            y: element.initialY,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              element.initialX,
              element.initialX + Math.random() * 400 - 200,
              element.initialX + Math.random() * 400 - 200,
              element.initialX,
            ],
            y: [
              element.initialY,
              element.initialY + Math.random() * 400 - 200,
              element.initialY + Math.random() * 400 - 200,
              element.initialY,
            ],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full border-2 border-cyan-400/30 rounded-lg backdrop-blur-sm bg-cyan-500/5">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1 left-1"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
import React from 'react';
import { motion } from 'framer-motion';

const GlowingOrbs = () => {
  const orbs = [
    {
      id: 1,
      size: 'w-32 h-32',
      color: 'bg-cyan-500/20',
      blur: 'blur-2xl',
      position: 'top-20 left-20',
      duration: 8,
    },
    {
      id: 2,
      size: 'w-48 h-48',
      color: 'bg-blue-500/15',
      blur: 'blur-3xl',
      position: 'bottom-20 right-20',
      duration: 12,
    },
    {
      id: 3,
      size: 'w-24 h-24',
      color: 'bg-purple-500/25',
      blur: 'blur-xl',
      position: 'top-1/2 left-10',
      duration: 6,
    },
    {
      id: 4,
      size: 'w-40 h-40',
      color: 'bg-teal-500/20',
      blur: 'blur-2xl',
      position: 'top-10 right-1/3',
      duration: 10,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.color} ${orb.blur} ${orb.position} rounded-full`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default GlowingOrbs;
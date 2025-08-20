import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import CircuitPattern from '../components/CircuitPattern';
import FloatingElements from '../components/FloatingElements';
import AnimatedGrid from '../components/AnimatedGrid';
import DataStream from '../components/DataStream';
import GlowingOrbs from '../components/GlowingOrbs';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <CircuitPattern />
      <FloatingElements />
      <AnimatedGrid />
      <DataStream />
      <GlowingOrbs />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{
          y: [0, window.innerHeight],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block text-center lg:text-left"
          >
            <motion.h2
              className="text-6xl font-bold text-white mb-6 leading-tight"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 255, 255, 0.5)',
                  '0 0 20px rgba(0, 255, 255, 0.8)',
                  '0 0 10px rgba(0, 255, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              AI DocuSphere
              <br />
              <span className="text-cyan-400">LOGIN</span>
            </motion.h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Enter the digital realm with our advanced authentication system.
              Secure, fast, and futuristic.
            </p>
            
            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Security Level', value: '256-bit', color: 'text-green-400' },
                { label: 'Response Time', value: '<100ms', color: 'text-cyan-400' },
                { label: 'Success Rate', value: '99.9%', color: 'text-blue-400' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className={`text-2xl font-bold ${stat.color} mb-1`}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Login Form */}
          <div className="w-full">
            <LoginForm />
          </div>
        </motion.div>
      </div>

      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-6 flex items-center space-x-2"
      >
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <span className="text-xs text-gray-400">System Online</span>
      </motion.div>
    </div>
  );
}

export default Login;
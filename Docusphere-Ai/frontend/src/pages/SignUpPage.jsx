import React, { useState } from 'react';
import { Eye, EyeOff, Github, Mail, User, Lock } from 'lucide-react';



import '../components/SignUpPage.css';// Assuming you have a CSS file for additional styles



const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
  };

  // Inline styles for animations and effects
  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
      fontFamily: "'Orbitron', 'Courier New', monospace"
    },
    backgroundOverlay: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3,
      pointerEvents: 'none'
    },
    matrixColumn: {
      position: 'absolute',
      top: '-100vh',
      fontSize: '14px',
      color: '#00ff41',
      fontFamily: 'monospace',
      animation: 'matrixFall 8s linear infinite',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    matrixSpan: {
      display: 'block',
      textShadow: '0 0 5px #00ff41',
      animation: 'matrixGlow 2s ease-in-out infinite alternate'
    },
    neuralSvg: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    dataStream: {
      position: 'absolute',
      width: '2px',
      height: '100vh',
      background: 'linear-gradient(to bottom, transparent, #00d4ff, transparent)',
      animation: 'dataFlow 3s linear infinite'
    },
    dataPacket: {
      width: '4px',
      height: '20px',
      background: '#00d4ff',
      margin: '10px 0',
      borderRadius: '2px',
      boxShadow: '0 0 10px #00d4ff',
      animation: 'packetMove 4s linear infinite'
    },
    aiParticle: {
      position: 'absolute',
      borderRadius: '50%',
      animation: 'aiFloat 6s ease-in-out infinite'
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    formContainer: {
      width: '100%',
      maxWidth: '28rem',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      animation: 'fadeIn 1s ease-out'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #00d4ff, #60a5fa, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      letterSpacing: '0.1em',
      textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    subtitle: {
      color: '#d1d5db',
      fontSize: '1.125rem',
      letterSpacing: '0.05em'
    },
    formCard: {
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      animation: 'slideUp 0.8s ease-out'
    },
    inputGroup: {
      marginBottom: '1.5rem',
      animation: 'slideUp 0.8s ease-out'
    },
    label: {
      display: 'block',
      color: '#67e8f9',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      letterSpacing: '0.05em'
    },
    inputWrapper: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '1.25rem',
      height: '1.25rem'
    },
    input: {
      width: '100%',
      paddingLeft: '3rem',
      paddingRight: '1rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      background: 'rgba(17, 24, 39, 0.5)',
      border: '1px solid #374151',
      borderRadius: '0.5rem',
      color: 'white',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#00d4ff',
      boxShadow: '0 0 0 2px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 212, 255, 0.2)'
    },
    toggleButton: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    checkbox: {
      width: '1.25rem',
      height: '1.25rem',
      background: 'rgba(17, 24, 39, 0.5)',
      border: '1px solid #374151',
      borderRadius: '0.25rem',
      marginRight: '0.75rem'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(to right, #06b6d4, #2563eb)',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.05em',
      fontSize: '1rem',
      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
      animation: 'glowButton 2s ease-in-out infinite alternate'
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1rem',
      border: '1px solid #374151',
      borderRadius: '0.5rem',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '2rem',
      color: '#9ca3af'
    }
  };

  // Matrix code data
  const matrixColumns = [
    { left: '5%', delay: '0s', content: ['01001001', '11010110', '00110101', '10101010', '01110011', '11001100', '00101011', '10010110'] },
    { left: '15%', delay: '2s', content: ['AI.init()', 'neural.net', 'deep.learn', 'process()', 'analyze()', 'optimize', 'execute()', 'evolve()'] },
    { left: '25%', delay: '1s', content: ['10110011', '01001110', '11100010', '00111001', '10101111', '01010101', '11110000', '00001111'] },
    { left: '35%', delay: '3s', content: ['function', 'algorithm', 'machine', 'learning', 'quantum', 'compute', 'neural', 'network'] },
    { left: '45%', delay: '0.5s', content: ['11001010', '00110110', '10101100', '01010011', '11110101', '00101010', '10011001', '01100110'] },
    { left: '55%', delay: '2.5s', content: ['DocuSphere', 'AI.core', 'process.doc', 'analyze.txt', 'smart.scan', 'auto.sort', 'ml.predict', 'ai.assist'] },
    { left: '65%', delay: '1.5s', content: ['01110100', '10001111', '00110011', '11001001', '10110110', '01001100', '11010101', '00101110'] },
    { left: '75%', delay: '3.5s', content: ['if(ai)', 'then()', 'else{}', 'while()', 'for(i)', 'return', 'void', 'async'] },
    { left: '85%', delay: '0.8s', content: ['11100111', '00011000', '10110100', '01101011', '11010010', '00101101', '10011110', '01110001'] },
    { left: '95%', delay: '2.8s', content: ['console.log', 'debug.ai', 'test.run', 'deploy.ml', 'train.model', 'predict.ai', 'optimize', 'execute'] }
  ];

  return (
    <div style={styles.container}>
      {/* CSS Keyframes */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff, 0 0 20px #00d4ff;
          }
          to {
            text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6;
          }
        }

        @keyframes glowButton {
          from {
            box-shadow: 0 0 5px rgba(0, 212, 255, 0.3), 0 0 10px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.1);
          }
          to {
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 15px rgba(139, 92, 246, 0.1);
          }
        }

        @keyframes matrixFall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes matrixGlow {
          from {
            text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41;
            opacity: 0.8;
          }
          to {
            text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
            opacity: 1;
          }
        }

        @keyframes dataFlow {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes packetMove {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes aiFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-5px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) rotate(270deg);
          }
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
      `}</style>

      {/* Enhanced AI Code Background */}
      <div style={styles.backgroundOverlay}>
        {/* Matrix Code Rain */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {matrixColumns.map((column, index) => (
            <div
              key={index}
              style={{
                ...styles.matrixColumn,
                left: column.left,
                animationDelay: column.delay
              }}
            >
              {column.content.map((text, textIndex) => (
                <span key={textIndex} style={styles.matrixSpan}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
        
        {/* Neural Network Connections */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <svg style={styles.neuralSvg} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neuralGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="neuralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            
            {/* Animated Neural Connections */}
            <line x1="10%" y1="20%" x2="90%" y2="25%" stroke="url(#neuralGradient1)" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="15%" y1="40%" x2="85%" y2="45%" stroke="url(#neuralGradient2)" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="20%" y1="60%" x2="80%" y2="65%" stroke="url(#neuralGradient1)" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
            </line>
            <line x1="25%" y1="80%" x2="75%" y2="75%" stroke="url(#neuralGradient2)" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </line>
            
            {/* Neural Nodes */}
            <circle cx="10%" cy="20%" r="3" fill="#00d4ff">
              <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="90%" cy="25%" r="3" fill="#00d4ff">
              <animate attributeName="r" values="2;5;2" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="15%" cy="40%" r="3" fill="#8b5cf6">
              <animate attributeName="r" values="2;5;2" dur="2s" begin="0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="85%" cy="45%" r="3" fill="#8b5cf6">
              <animate attributeName="r" values="2;5;2" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* AI Data Streams */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ ...styles.dataStream, left: '20%', animationDelay: '0s' }}>
            <div style={{ ...styles.dataPacket, animationDelay: '0s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '1s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '2s' }}></div>
          </div>
          <div style={{ ...styles.dataStream, left: '60%', animationDelay: '1.5s' }}>
            <div style={{ ...styles.dataPacket, animationDelay: '0.5s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '1.5s' }}></div>
          </div>
          <div style={{ ...styles.dataStream, left: '80%', animationDelay: '0.8s' }}>
            <div style={{ ...styles.dataPacket, animationDelay: '0s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '1s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '2s' }}></div>
            <div style={{ ...styles.dataPacket, animationDelay: '3s' }}></div>
          </div>
        </div>

        {/* Floating AI Particles */}
        <div style={{ ...styles.aiParticle, top: '25%', left: '25%', width: '8px', height: '8px', backgroundColor: '#00d4ff' }}></div>
        <div style={{ ...styles.aiParticle, top: '33%', right: '33%', width: '4px', height: '4px', backgroundColor: '#8b5cf6', animationDelay: '0.7s' }}></div>
        <div style={{ ...styles.aiParticle, bottom: '33%', left: '33%', width: '12px', height: '12px', backgroundColor: '#60a5fa', animationDelay: '1.5s' }}></div>
        <div style={{ ...styles.aiParticle, top: '66%', right: '25%', width: '6px', height: '6px', backgroundColor: '#00d4ff', animationDelay: '0.3s' }}></div>
        <div style={{ ...styles.aiParticle, top: '50%', left: '16%', width: '8px', height: '8px', backgroundColor: '#8b5cf6', animationDelay: '2s' }}></div>
        <div style={{ ...styles.aiParticle, bottom: '25%', right: '16%', width: '4px', height: '4px', backgroundColor: '#00d4ff', animationDelay: '2.5s' }}></div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.formContainer}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>
              Join DocuSphere AI
            </h1>
            <p style={styles.subtitle}>
              Experience the future of intelligent document management
            </p>
          </div>

          {/* Sign Up Form */}
          <div style={styles.formCard}>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.1s' }} className="delay-100">
                <label style={styles.label}>
                  Full Name
                </label>
                <div style={styles.inputWrapper}>
                  <User style={styles.inputIcon} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Enter your full name"
                    required
                    onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.2s' }} className="delay-200">
                <label style={styles.label}>
                  Email Address
                </label>
                <div style={styles.inputWrapper}>
                  <Mail style={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Enter your email"
                    required
                    onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.3s' }} className="delay-300">
                <label style={styles.label}>
                  Password
                </label>
                <div style={styles.inputWrapper}>
                  <Lock style={styles.inputIcon} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ ...styles.input, paddingRight: '3rem' }}
                    placeholder="Create a password"
                    required
                    onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus, paddingRight: '3rem' }}
                    onBlur={(e) => e.target.style = { ...styles.input, paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={styles.toggleButton}
                    onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.4s' }} className="delay-400">
                <label style={styles.label}>
                  Confirm Password
                </label>
                <div style={styles.inputWrapper}>
                  <Lock style={styles.inputIcon} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    style={{ ...styles.input, paddingRight: '3rem' }}
                    placeholder="Confirm your password"
                    required
                    onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus, paddingRight: '3rem' }}
                    onBlur={(e) => e.target.style = { ...styles.input, paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={styles.toggleButton}
                    onMouseEnter={(e) => e.target.style.color = '#00d4ff'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.5s' }} className="delay-500">
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    style={styles.checkbox}
                    required
                  />
                  <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                    I agree to the{' '}
                    <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>
                      Terms & Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.6s' }} className="delay-600">
                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
                  }}
                  onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                  onMouseUp={(e) => e.target.style.transform = 'scale(1.05)'}
                >
                  CREATE ACCOUNT
                </button>
              </div>

              {/* Divider */}
              <div style={{ ...styles.inputGroup, animationDelay: '0.7s' }} className="delay-700">
                <div style={{ position: 'relative', margin: '1.5rem 0' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', borderTop: '1px solid #374151' }}></div>
                  </div>
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', fontSize: '0.875rem' }}>
                    <span style={{ padding: '0 1rem', background: 'rgba(0, 0, 0, 0.3)', color: '#9ca3af' }}>
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Sign Up Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', animationDelay: '0.8s' }} className="delay-800">
                <button
                  type="button"
                  style={styles.socialButton}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00d4ff';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Mail size={20} style={{ color: '#9ca3af' }} />
                </button>
                <button
                  type="button"
                  style={styles.socialButton}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#8b5cf6';
                    e.target.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Github size={20} style={{ color: '#9ca3af' }} />
                </button>
                <button
                  type="button"
                  style={styles.socialButton}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#60a5fa';
                    e.target.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#374151';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <User size={20} style={{ color: '#9ca3af' }} />
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div style={{ ...styles.loginLink, animationDelay: '0.9s' }} className="delay-900">
              <p>
                Already have an account?{' '}
                <a 
                  href="#" 
                  style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: '500' }}
                  onMouseEnter={(e) => e.target.style.color = '#67e8f9'}
                  onMouseLeave={(e) => e.target.style.color = '#00d4ff'}
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
import React, { useState, useEffect, useRef } from 'react';
import '../components/About.css';
import Navbar from '../components/navbar';
import { 
  Brain, 
  FileText, 
  Bot, 
  Shield, 
  Zap, 
  Search, 
  PenTool, 
  Lightbulb, 
  Github, 
  Linkedin, 
  Globe,
  BarChart3,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import Footer from "../components/Footer.jsx";

function About() {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({
    docs: 0,
    accuracy: 0,
    automation: 0,
    scalability: 0
  });

  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible.stats) {
      const animateCounter = (target, key, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 50);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      };

      animateCounter(1000, 'docs');
      animateCounter(99, 'accuracy');
      animateCounter(100, 'automation');
      animateCounter(100, 'scalability');
    }
  }, [isVisible.stats]);

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <div 
      className={`group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 ${
        isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );

  const StatCard = ({ icon: Icon, value, suffix, label, delay = 0 }) => (
    <div 
      className={`text-center p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-500 hover:shadow-xl hover:shadow-green-400/20 ${
        isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
      <div className="text-3xl font-bold text-white mb-1">
        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          {value}{suffix}
        </span>
      </div>
      <p className="text-gray-300 text-sm">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
 
      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              About DocuSphere AI
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              An AI-powered ecosystem that transforms the way you manage, analyze, and automate documents.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
        </div>
      </section>

      {/* What is DocuSphere AI */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              What is DocuSphere AI?
            </h2>
          </div>
          
          <div className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 transition-all duration-1000 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 ${
            isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  DocuSphere AI is an intelligent document management platform that leverages Artificial Intelligence to streamline workflows, enhance productivity, and ensure secure automation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Brain className="w-5 h-5" />
                    <span className="text-sm">AI Brain</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm">Document Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Bot className="w-5 h-5" />
                    <span className="text-sm">Automation</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <Brain className="w-24 h-24 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Features */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Core AI Features
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Search}
              title="Smart Document Search"
              description="AI-driven semantic search for instant results across all your documents."
              delay={0}
            />
            <FeatureCard
              icon={PenTool}
              title="Automated Summarization"
              description="Convert lengthy documents into concise insights with advanced AI algorithms."
              delay={200}
            />
            <FeatureCard
              icon={Lightbulb}
              title="AI-Powered Recommendations"
              description="Context-aware document suggestions that improve over time."
              delay={400}
            />
            <FeatureCard
              icon={Shield}
              title="Data Security with AI"
              description="AI-enhanced anomaly detection for secure storage and access control."
              delay={600}
            />
            <FeatureCard
              icon={Zap}
              title="Real-Time Processing"
              description="Lightning-fast processing with cutting-edge machine learning models."
              delay={800}
            />
            <FeatureCard
              icon={Sparkles}
              title="Intelligent Automation"
              description="Smart workflow automation that adapts to your business needs."
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* Developer Introduction */}
      <section id="developer" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 transition-all duration-1000 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-400/10 ${
            isVisible.developer ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold">
                RA
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-white">Rehaan Ahmad</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hi, I'm Rehaan Ahmad, creator of DocuSphere AI. As a Java Full Stack Developer, I specialize in building intelligent applications that merge backend efficiency with AI-driven solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Globe className="w-5 h-5" />
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="stats" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose DocuSphere AI?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              icon={BarChart3}
              value={counters.docs}
              suffix="+"
              label="Docs Processed by AI"
              delay={0}
            />
            <StatCard
              icon={Zap}
              value={counters.accuracy}
              suffix="%"
              label="AI Accuracy"
              delay={200}
            />
            <StatCard
              icon={RefreshCw}
              value={counters.automation}
              suffix="%"
              label="Real-Time Automation"
              delay={400}
            />
            <StatCard
              icon={Globe}
              value={counters.scalability}
              suffix="%"
              label="AI-Powered Scalability"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible.vision ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
              <h3 className="text-3xl font-bold mb-6 text-purple-300">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To build an AI-driven future where documents are no longer a burden, but an intelligent asset that empowers decision-making and drives innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="text-3xl font-bold mb-6 text-cyan-300">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering organizations with Artificial Intelligence to achieve faster decisions, smarter insights, and seamless workflows through intelligent document management.
              </p>
            </div>
          </div>
        </div>
      </section>


  {/* Footer */}
  <Footer />

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        body {
          font-family: 'Orbitron', monospace;
        }
      `}</style>
    </div>
  );
}

export default About
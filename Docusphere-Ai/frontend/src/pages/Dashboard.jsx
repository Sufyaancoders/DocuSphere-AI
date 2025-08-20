// AppContent.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Sidebar } from '../components/dashboard/slidbar';
import { MainContent } from '../components/dashboard/maincontent';
import { useTheme } from '../hooks/usetheme';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.backgroundColor = theme.background;
  }, [theme]);

  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: theme.background }}
    >
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-30 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl"
          style={{
            backgroundColor: `${theme.surface}F0`,
            borderColor: theme.border,
          }}
        >
          <motion.div
            animate={{ rotate: sidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {sidebarOpen ? (
              <X size={20} style={{ color: theme.text }} />
            ) : (
              <Menu size={20} style={{ color: theme.text }} />
            )}
          </motion.div>
        </motion.button>
      )}

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-10"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          if (isMobile) setSidebarOpen(false);
        }}
        isMobile={isMobile}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <motion.main
        className="flex-1 flex flex-col"
        style={{
          marginLeft: isMobile ? 0 : '18rem',
        }}
      >
        <MainContent activeSection={activeSection} />
      </motion.main>
    </div>
  );
};

export default Dashboard;

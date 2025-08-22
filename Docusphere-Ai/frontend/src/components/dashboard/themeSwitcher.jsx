import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../../hooks/usetheme';
import { themes } from '../../types/theme';

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, currentTheme, changeTheme, availableThemes } = useTheme();

  const handleThemeChange = (themeName) => {
    changeTheme(themeName);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!(e.target.closest('.theme-switcher'))) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative theme-switcher">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
        style={{
          backgroundColor: theme.surface,
          borderColor: theme.border,
        }}
      >
        <Palette size={18} style={{ color: theme.accent }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-48 rounded-xl border backdrop-blur-xl p-2 z-50"
            style={{
              backgroundColor: `${theme.surface}F0`,
              borderColor: theme.border,
            }}
          >
            <div className="space-y-1">
              {availableThemes.map((key) => {
                const themeData = themes[key];
                return (
                  <motion.button
                    key={key}
                    whileHover={{ backgroundColor: theme.surfaceHover }}
                    onClick={() => handleThemeChange(key)}
                    className="flex items-center gap-3 w-full p-2 rounded-lg transition-colors"
                  >
                    {/* Preview three colors instead of one */}
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.primary }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.secondary }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeData.accent }} />
                    </div>

                    <span
                      className="flex-1 text-left text-sm"
                      style={{ color: theme.text }}
                    >
                      {themeData.name}
                    </span>

                    {currentTheme === key && (
                      <Check size={16} style={{ color: theme.accent }} />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

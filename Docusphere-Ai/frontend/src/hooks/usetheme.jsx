import { useState, useEffect } from 'react';
import { themes } from '../types/theme';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('black');

  const theme = themes[currentTheme];

  useEffect(() => {
    const savedTheme = localStorage.getItem('dashboard-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else {
      // Default theme = black
      setCurrentTheme('black');
      localStorage.setItem('dashboard-theme', 'black');
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('dashboard-theme', themeName);
      console.log('Theme changed to:', themeName);
    }
  };

  return {
    theme,
    currentTheme,
    changeTheme,
    availableThemes: Object.keys(themes),
  };
};

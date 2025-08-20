import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useTheme } from "../../hooks/usetheme";
import { useNavigate } from "react-router-dom";
export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
const navigate = useNavigate();

  const handleLogout = () => {

            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.dispatchEvent(new Event("tokenChanged"))
            navigate("/")
            setIsOpen(false)
          
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300"
        style={{
          backgroundColor: theme.surface,
          borderColor: theme.border,
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          <User size={20} color={theme.background} />
        </div>

        <div className="flex-1 text-left">
          <div className="text-sm font-medium" style={{ color: theme.text }}>
            AI User
          </div>
          <div className="text-xs" style={{ color: theme.textSecondary }}>
            ID: #AI2024
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} style={{ color: theme.textSecondary }} />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 left-0 right-0 rounded-xl border backdrop-blur-xl"
            style={{
              backgroundColor: `${theme.surface}F0`,
              borderColor: theme.border,
            }}
          >
            <motion.button
              whileHover={{ backgroundColor: theme.surfaceHover }}
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 rounded-xl transition-colors"
            >
              <LogOut size={18} style={{ color: theme.accent }} />
              <span className="text-sm font-medium" style={{ color: theme.text }}>
                Logout
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { FileText, MessageSquare, Zap } from "lucide-react";
import { useTheme } from "../../hooks/usetheme";
import { ProfileDropdown } from "./profileDropbox";
import { ThemeSwitcher } from "./themeSwitcher";

export const Sidebar = ({ activeSection, onSectionChange, isMobile, isOpen }) => {
  const { theme } = useTheme();

  const menuItems = [
    {
      id: "document-reader",
      label: "Document Reader",
      icon: FileText,
      description: "AI-powered document analysis",
    },
    {
      id: "ai-talking-agent",
      label: "AI Talking Agent",
      icon: MessageSquare,
      description: "Interactive AI conversations",
    },
  ];

  return (
    <motion.aside
      initial={isMobile ? { x: -280 } : { x: 0 }}
      animate={isMobile ? { x: isOpen ? 0 : -280 } : { x: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed left-0 top-0 h-full w-72 border-r backdrop-blur-xl z-20"
      style={{
        backgroundColor: `${theme.surface}F0`,
        borderColor: theme.border,
      }}
    >
      <div className="flex flex-col h-full p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-2xl select-none shadow-lg"
            style={{ backgroundColor: '#fff', color: theme.primary, letterSpacing: '0.1em' }}
          >
            AI
          </motion.div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: theme.text }}>
              AI DocuSphere
            </h1>
            <p className="text-xs" style={{ color: theme.textSecondary }}>
              AI Intelligence Hub
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSectionChange(item.id)}
                className="flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-300 group"
                style={{
                  backgroundColor: isActive ? theme.primary : "transparent",
                  border: `1px solid ${isActive ? theme.accent : theme.border}`,
                }}
              >
                <motion.div
                  animate={{
                    color: isActive ? "#FFFFFF" : theme.accent,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={20} />
                </motion.div>
                <div className="flex-1 text-left">
                  <motion.div
                    className="font-medium text-sm"
                    animate={{
                      color: isActive ? "#FFFFFF" : theme.text,
                    }}
                  >
                    {item.label}
                  </motion.div>
                  <motion.div
                    className="text-xs"
                    animate={{
                      color: isActive ? "#CCCCCC" : theme.textSecondary,
                    }}
                  >
                    {item.description}
                  </motion.div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: "#FFFFFF" }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <ThemeSwitcher />
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </motion.aside>
  );
};

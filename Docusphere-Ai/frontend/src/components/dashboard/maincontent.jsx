import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/usetheme";
import { DocumentReader } from "../../pages/documetReader";
import { AITalkingAgent } from "../../pages/AItaking";
import { Zap, FileText, MessageSquare } from "lucide-react";

export const MainContent = ({ activeSection }) => {
  const { theme } = useTheme();

  const WelcomeScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center p-8"
    >
      <div className="text-center max-w-2xl">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-24 h-24 rounded-3xl mx-auto mb-8 flex items-center justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          <Zap size={40} color={theme.background} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-6"
          style={{ color: theme.text }}
        >
          Welcome to AI Dashboard
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-12"
          style={{ color: theme.textSecondary }}
        >
          Your futuristic robotic intelligence hub. Select a feature from the sidebar to get started.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Document Reader Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="p-8 rounded-2xl border backdrop-blur-sm"
            style={{
              backgroundColor: `${theme.surface}80`,
              borderColor: theme.border,
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
              style={{ backgroundColor: theme.accent }}
            >
              <FileText size={24} color={theme.background} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: theme.text }}>
              Document Reader
            </h3>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              AI-powered document analysis and intelligent content extraction
            </p>
          </motion.div>

          {/* AI Talking Agent Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="p-8 rounded-2xl border backdrop-blur-sm"
            style={{
              backgroundColor: `${theme.surface}80`,
              borderColor: theme.border,
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
              style={{ backgroundColor: theme.accent }}
            >
              <MessageSquare size={24} color={theme.background} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: theme.text }}>
              AI Talking Agent
            </h3>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              Natural conversations with voice-enabled AI interactions
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "document-reader":
        return <DocumentReader />;
      case "ai-talking-agent":
        return <AITalkingAgent />;
      default:
        return <WelcomeScreen />;
    }
  };

  return <div className="flex-1 overflow-auto">{renderContent()}</div>;
};

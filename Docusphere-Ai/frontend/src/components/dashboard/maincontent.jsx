import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/usetheme";
import { DocumentReader } from "../../pages/documetReader";
import { AITalkingAgent } from "../../pages/AItaking";
import { Zap, FileText, MessageSquare } from "lucide-react";
import Hyperspeed from '../ui/hyperspeed';
export const MainContent = ({ activeSection }) => {
  const { theme } = useTheme();

  const WelcomeScreen = () => (
    <div className="relative h-full flex items-center justify-center p-4">
      {/* Hyperspeed BG */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 120,
            speedUp: 0.5, // reduced speed
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [20, 30], // reduced speed
            movingCloserSpeed: [-40, -60], // reduced speed
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Logo Animation */}
      

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold mb-6"
          style={{ color: theme.text }}
        >
          Welcome to <br />"AI DocuSphere" Dashboard
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
      </motion.div>
    </div>
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

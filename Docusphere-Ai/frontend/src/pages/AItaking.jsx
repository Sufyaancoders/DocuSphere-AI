import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Volume2, Brain } from 'lucide-react';
import { useTheme } from '../hooks/usetheme';

export const AITalkingAgent = () => {
  const { theme } = useTheme();

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in human-like conversations with advanced AI',
    },
    {
      icon: Mic,
      title: 'Voice Input',
      description: 'Speak naturally and AI will understand your commands',
    },
    {
      icon: Volume2,
      title: 'Voice Output',
      description: 'AI responds with natural, synthesized speech',
    },
    {
      icon: Brain,
      title: 'Context Awareness',
      description: 'Maintains conversation context for meaningful interactions',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          <MessageSquare size={32} color={theme.background} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
          style={{ color: theme.text }}
        >
          AI Talking Agent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.textSecondary }}
        >
          Experience natural, intelligent conversations with our advanced AI agent.
          Voice-enabled interactions for seamless communication.
        </motion.p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border backdrop-blur-sm text-center"
              style={{
                backgroundColor: `${theme.surface}80`,
                borderColor: theme.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center mx-auto"
                style={{ backgroundColor: theme.accent }}
              >
                <Icon size={20} color={theme.background} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: theme.text }}>
                {capability.title}
              </h3>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {capability.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Chat Interface Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="rounded-3xl border overflow-hidden"
        style={{
          backgroundColor: theme.surface,
          borderColor: theme.border,
        }}
      >
        {/* Chat Header */}
        <div
          className="p-6 border-b"
          style={{ borderColor: theme.border }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: theme.primary }}
            >
              <Brain size={20} color={theme.background} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold" style={{ color: theme.text }}>
                AI Assistant
              </h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
                <span className="text-xs" style={{ color: theme.textSecondary }}>
                  Ready to chat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-6 space-y-4 min-h-[300px] flex flex-col justify-center">
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: theme.primary }}
            >
              <MessageSquare size={24} color={theme.background} />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>
              AI Agent Coming Soon
            </h3>
            <p className="text-sm max-w-md mx-auto mb-6" style={{ color: theme.textSecondary }}>
              We're building an advanced conversational AI that will understand context,
              remember conversations, and provide intelligent responses.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-medium transition-colors"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              Start Conversation (Coming Soon)
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

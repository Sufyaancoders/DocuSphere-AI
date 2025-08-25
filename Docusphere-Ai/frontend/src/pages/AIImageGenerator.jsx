import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Wand2, Download, Sparkles, Palette, Settings } from 'lucide-react';
import { useTheme } from '../hooks/usetheme';
import  {TextAnimate }from "../components/ui/text";
export const AIImageGenerator = () => {
  const { theme } = useTheme();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const features = [
    {
      icon: Wand2,
      title: 'Text to Image',
      description: 'Transform your ideas into stunning visuals with AI',
    },
    {
      icon: Palette,
      title: 'Style Control',
      description: 'Choose from various artistic styles and themes',
    },
    {
      icon: Settings,
      title: 'Advanced Options',
      description: 'Fine-tune resolution, aspect ratio, and quality',
    },
    {
      icon: Download,
      title: 'High Quality Export',
      description: 'Download your creations in multiple formats',
    },
  ];

  const stylePresets = [
    { name: 'Realistic', color: '#FF6B6B' },
    { name: 'Artistic', color: '#4ECDC4' },
    { name: 'Anime', color: '#45B7D1' },
    { name: 'Cyberpunk', color: '#96CEB4' },
    { name: 'Fantasy', color: '#FFEAA7' },
    { name: 'Abstract', color: '#DDA0DD' },
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
    
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold m-4"
          style={{ color: theme.text }}
        >
         <TextAnimate animation="blurInUp" by="character" once className="text-6xl font-bold mb-6"> AI Image Generator</TextAnimate> 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.textSecondary }}
        >
          Transform your imagination into reality with our advanced AI image generation technology.
          Create stunning visuals from simple text descriptions.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
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
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center mx-auto gray-900"
                style={{ backgroundColor: "gray" }}
              >
                <Icon size={20} color={theme.background} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: theme.text }}>
                {feature.title}
              </h3>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Generator Interface */}
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
        {/* Generator Header */}
        <div className="p-6 border-b" style={{ borderColor: theme.border }}>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor:"white" }}
            >
              <Sparkles size={20} color={theme.background} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold" style={{ color: theme.text }}>
                Create Your Image
              </h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "red" }}
                />
                <span className="text-xs" style={{ color: theme.textSecondary }}>
                  AI Engine Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Generator Content */}
        <div className="p-8">
          {/* Prompt Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ color: theme.text }}>
              Describe your image
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
                className="w-full h-25 p-2 rounded-xl border resize-none transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "gray",
                  borderColor: theme.border,
                  color: "black",
                  focusRingColor: theme.accent,
                  fontWeight: "normal",
                }}
              />
              <div className="absolute bottom-4 right-4 text-xs" style={{ color: theme.textSecondary }}>
                {prompt.length}/100
              </div>
            </div>
          </div>

          {/* Style Presets */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3" style={{ color: theme.text }}>
              Choose Style
            </label>
            <div className="flex flex-wrap gap-3">
              {stylePresets.map((style) => (
                <motion.button
                  key={style.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                    color: theme.text,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: style.color }}
                    />
                    {style.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: theme.primary,
                color: theme.background,
              }}
            >
              {isGenerating ? (
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles size={20} />
                  </motion.div>
                  Generating...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Wand2 size={20} />
                  Generate Image
                </div>
              )}
            </motion.button>
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center p-6 rounded-2xl border"
            style={{
              backgroundColor: `${theme.surface}40`,
              borderColor: theme.border,
            }}
          >
            <h4 className="text-lg font-semibold mb-2" style={{ color: theme.text }}>
              AI Image Generation Coming Soon
            </h4>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              We're building an advanced AI image generation system that will create
              stunning visuals from your text descriptions. Stay tuned for this exciting feature!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

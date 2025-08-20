import { motion } from 'framer-motion';
import { FileText, Upload, Scan, Brain } from 'lucide-react';
import { useTheme } from '../hooks/usetheme';

export const DocumentReader = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Support for PDF, DOCX, TXT, and more formats',
    },
    {
      icon: Scan,
      title: 'AI Analysis',
      description: 'Advanced document scanning and content extraction',
    },
    {
      icon: Brain,
      title: 'Smart Insights',
      description: 'Generate summaries, key points, and insights',
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
          <FileText size={32} color={theme.background} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
          style={{ color: theme.text }}
        >
          Document Reader
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.textSecondary }}
        >
          AI-powered document analysis and understanding. Upload your documents
          and let our advanced AI extract insights, summaries, and key information.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border backdrop-blur-sm"
              style={{
                backgroundColor: `${theme.surface}80`,
                borderColor: theme.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: theme.accent }}
              >
                <Icon size={20} color={theme.background} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.text }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: theme.textSecondary }}>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="border-2 border-dashed rounded-3xl p-12 text-center"
        style={{
          borderColor: theme.primary,
          backgroundColor: `${theme.surface}40`,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          <Upload size={24} color={theme.background} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>
          Ready to Analyze Your Documents
        </h3>
        <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: theme.textSecondary }}>
          This feature will be implemented soon. You'll be able to upload and analyze
          documents with our advanced AI system.
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
          Coming Soon
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { FileText, Upload } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/usetheme';

function DocumentQA() {
  const { theme } = useTheme();
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !question) {
      alert('Please select a file and enter a question!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('question', question);

    setLoading(true);

    try {
      const res = await fetch('https://email-ai-reply-production.up.railway.app/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('API error: ' + res.status);
      }

      const data = await res.text();
      setAnswer(data);
    } catch (err) {
      console.error('Error:', err);
      alert('❌ Failed to connect to backend. Check API URL & CORS.');
    } finally {
      setLoading(false);
    }
  };

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
          Document Q&A
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.textSecondary }}
        >
          Upload a document and ask questions to get AI-powered answers.
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="border-2 border-dashed rounded-3xl p-8"
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
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm mb-6 p-3 rounded-xl"
          style={{
            backgroundColor: theme.surface,
            color: theme.text,
            borderColor: theme.border,
          }}
        />
        <motion.input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question..."
          className="w-full p-4 rounded-xl mb-6 text-lg"
          style={{
            backgroundColor: theme.surface,
            color: theme.text,
            borderColor: theme.border,
          }}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3 rounded-xl font-medium transition-colors"
          style={{
            backgroundColor: theme.primary,
            color: theme.background,
          }}
        >
          {loading ? 'Processing...' : 'Ask Question'}
        </motion.button>
      </motion.form>

      {/* Answer Display */}
      {answer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-6 rounded-2xl border backdrop-blur-sm"
          style={{
            backgroundColor: `${theme.surface}80`,
            borderColor: theme.border,
          }}
        >
          <h3 className="text-lg font-semibold mb-2" style={{ color: theme.text }}>
            Answer:
          </h3>
          <p className="text-sm" style={{ color: theme.textSecondary }}>
            {answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default DocumentQA;
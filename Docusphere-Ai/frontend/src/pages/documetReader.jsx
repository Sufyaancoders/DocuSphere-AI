import { motion } from "framer-motion";
import { FileText, Upload, Scan, Brain } from "lucide-react";
import  {TextAnimate }from "../components/ui/text";
// import { useState } from "react";
import { AiInput } from "../components/ui/ai-input";
export const DocumentReader = () => {
 

  // const [file, setFile] = useState(null);
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!file || !question) {
  //     alert("⚠️ Please select a file and enter a question!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("question", question);

  //   setLoading(true);

  //   try {
  //     const res = await fetch(
  //       "https://email-ai-reply-production.up.railway.app/api/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     if (!res.ok) {
  //       throw new Error("API error: " + res.status);
  //     }

  //     const data = await res.text();
  //     setAnswer(data);
  //   } catch (err) {
  //     console.error("Error:", err);
  //     alert("❌ Failed to connect to backend. Check API URL & CORS.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Support for PDF, DOCX, TXT, and more formats",
    },
    {
      icon: Scan,
      title: "AI Analysis",
      description: "Advanced document scanning and content extraction",
    },
    {
      icon: Brain,
      title: "Smart Insights",
      description: "Generate summaries, key points, and insights",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-start bg-black/60 text-gray-100 px-6 py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        {/* <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gray-800"
        >
          <FileText size={32} color="white" />
        </motion.div> */}

  <TextAnimate animation="blurInUp" by="character" once className="text-6xl font-bold mb-6">Document Reader</TextAnimate>

        <p className="text-lg max-w-2xl mx-auto text-gray-400">
          Upload your documents and let AI extract insights, summaries, and key
          information instantly.
        </p>
      </motion.div>

    

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-gray-900 border bg-opacity-5 border-gray-800 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                <Icon size={20} color="white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
<AiInput/>
      {/* Upload Area */}
      {/* <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="border-2 border-dashed rounded-3xl p-12 text-center bg-gray-900 border-gray-700 max-w-3xl"
      >
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gray-700"
        >
          <Upload size={24} color="white" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Ready to Analyze Your Documents
        </h3>
        <p className="text-sm mb-6 max-w-md mx-auto text-gray-400">
          Soon, you’ll be able to upload and analyze documents with our advanced
          AI system.
        </p>

<AiInput/>
      </motion.div> */}
    </motion.div>
  );
};

"use client"

import { useState } from "react"
// import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Globe, Paperclip, Plus, Send } from "lucide-react"
import TextGenerateEffect from "./TextGenerateEffect"
import { cn } from "../../lib/utils"







const MAX_HEIGHT = 164

// Duplicate AnimatedPlaceholder removed
const AnimatedPlaceholder = ({ showSearch }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={showSearch ? "search" : "ask"}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.1 }}
 
      >
        {/* {showSearch ? "Search the web..." : "Ask Skiper Ai..."} */}
      </motion.p>
    </AnimatePresence>
  );
}

export function AiInput() {
  const [value, setValue] = useState("")
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState("")
  const [showSearch, setShowSearch] = useState(true)
  // const [imagePreview, setImagePreview] = useState(null)
  // const fileInputRef = useRef(null)

  // const handelClose = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = "" // Reset file input
  //   }
  //   setImagePreview(null) // Use null instead of empty string
  // }

  // const handelChange = (e) => {
  //   const file = e.target.files ? e.target.files[0] : null
  //   if (file) {
  //     setImagePreview(URL.createObjectURL(file))
  //   }
  // }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!file || !value) {
      alert("⚠️ Please select a file and enter a question!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", value);

    setLoading(true);

    try {
      const res = await fetch(
        "https://email-ai-reply-production.up.railway.app/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("API error: " + res.status);
      }

      const data = await res.text();
      setAnswer(data);
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Failed to connect to backend. Check API URL & CORS.");
    } finally {
      setLoading(false);
    }
    setValue("");
  }

  // useEffect(() => {
  //   return () => {
  //     if (imagePreview) {
  //       URL.revokeObjectURL(imagePreview)
  //     }
  //   }
  // }, [imagePreview])
  return (
    <div className="w-full pb-0">
      <div>
       {answer && (
        <div className="mt-4 p-5 m-4 bg-gray-900 text-white rounded-lg border border-black">
          <strong>Answer:</strong> 
          
          <TextGenerateEffect
            words={answer}
          />
        </div>
      )}
</div>
  <div className="relative max-w-xl mb-8 w-full mx-auto group transition-all duration-200    rounded-[22px] p-1 hover:border-2 hover:shadow-[0_0_0_3px_rgba(255,63,23,0.15)] focus-within:border-2 focus-within:shadow-[0_0_0_3px_rgba(255,63,23,0.18)]">
        <div className="relative rounded-2xl  bg-neutral-800/5 flex flex-col">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: `${MAX_HEIGHT}px` }}
          >
            <form className="relative w-full" onSubmit={handleSubmit} autoComplete="off">
              <div className="relative w-full border dark:border-gray-700 rounded-full bg-white/80 dark:bg-neutral-900/80">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Enter your question..."
                  className="w-full px-4 py-2 bg-transparent border-none outline-none text-black dark:text-white placeholder:text-gray-400 pr-28 transition-all duration-10 rounded-full"
                  style={{ boxSizing: 'border-box' }}
                />
                {!value && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <AnimatedPlaceholder showSearch={showSearch} />
                  </div>
                )}
                {/* Inline icons inside input */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <input
                    type="file"
                    onChange={e => setFile(e.target.files[0])}
                    className="hidden"
                    id="ai-file-upload"
                  />
                  <label htmlFor="ai-file-upload" className="cursor-pointer flex items-center justify-center">
                    <Paperclip className="w-5 h-5 text-gray-400 hover:text-[#ff3f17]" />
                  </label>
                  <button
                    type="submit"
                    className={cn(
                      "rounded-full p-2 transition-colors",
                      value
                        ? " text-blue-500"
                        : " dark:bg-white text-white/90 dark:text-white/40 hover:text-blue-500 dark:hover:text-white"
                    )}
                    disabled={loading}
                    tabIndex={-1}
                  >
                    {loading ? (
                      <span className="w-4 h-4 animate-spin border-2 border-t-transparent border-[#ff3f17] rounded-full inline-block"></span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSearch(!showSearch)}
                    className={cn(
                      "flex items-center gap-1 px-1 py-1 rounded-full transition-all border h-8",
                      showSearch
                        ? "bg-[#ff3f17]/15 border-[#ff3f17] text-[#ff3f17]"
                        : "bg-white dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                    )}
                    style={{ minWidth: 32 }}
                    tabIndex={-1}
                  >
                    <motion.div
                      animate={{
                        rotate: showSearch ? 180 : 0,
                        scale: showSearch ? 1.1 : 1,
                      }}
                      whileHover={{
                        rotate: showSearch ? 180 : 15,
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                      }}
                    >
                      <Globe
                        className={cn(
                          "w-4 h-4",
                          showSearch ? "text-[#ff3f17]" : "text-inherit"
                        )}
                      />
                    </motion.div>
                  </button>
                </div>
              </div>
            </form>
            {/* File preview */}
            {file && (
              <div className="flex items-center gap-2 mb-2 px-4 py-2 bg-gray-800/60 rounded text-white text-xs mt-2">
                <Paperclip className="w-4 h-4 text-[#ff3f17]" />
                <span className="truncate max-w-[150px]">{file.name}</span>
                <span className="opacity-60">({(file.size/1024).toFixed(1)} KB)</span>
                <button
                  type="button"
                  className="ml-2 text-red-400 hover:text-red-600 text-xs"
                  onClick={() => setFile(null)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {answer && (
        <div className="mt-4 p-5 m-4 bg-gray-900 text-white rounded-lg border border-black">
          <strong>Answer:</strong> 
          
          <TextGenerateEffect
            words={answer}
          />
        </div>
      )} */}
    </div>
  )
}
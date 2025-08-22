import React, { useState } from "react";

function Question() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !question) {
      alert("Please select a file and enter a question!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", question);

    setLoading(true);

    try {
      const res = await fetch("https://email-ai-reply-production.up.railway.app/api/upload", {
        method: "POST",
        body: formData,
      });

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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">📄 Document Q&A</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0 file:text-sm file:font-semibold
                       file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold"
          >
            {loading ? "Processing..." : "Ask Question"}
          </button>
        </form>

        {answer && (
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Answer:</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;

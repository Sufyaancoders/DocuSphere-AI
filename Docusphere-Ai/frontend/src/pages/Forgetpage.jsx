// src/pages/ForgetPassword.jsx
import React, { useState } from "react";
import { Mail, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Forgetpage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // simulate API
    setTimeout(() => {
      setIsLoading(false);
      // redirect with email
      navigate("/otp", { state: { email } });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Forgot Password?</h2>
        <p className="text-sm text-gray-400 text-center">
          Enter your email to receive OTP
        </p>

        <div>
          <label className="block text-sm mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold"
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Zap className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </div>
          ) : (
            "Send OTP"
          )}
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/login")}
          className="text-sm text-cyan-400 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Forgetpage;

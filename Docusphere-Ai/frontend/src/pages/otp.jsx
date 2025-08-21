// src/pages/Otp.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { KeyRound, Zap, Check } from "lucide-react";



function Otp() {
    
  const location = useLocation();
  const email = location?.state?.email || "your-email@example.com";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setOtpError("Please enter all 6 digits");
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (otpValue === "123456") {
        setIsVerified(true);
      } else {
        setOtpError("Invalid OTP, try 123456 🙂");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-6 rounded-xl w-96 space-y-6 text-center">
        <div className="flex justify-center">
          <KeyRound className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold">OTP Verification</h2>
        <p className="text-gray-400 text-sm">
          We’ve sent a 6-digit code to <br />
          <span className="text-blue-400 font-semibold">{email}</span>
        </p>

        {!isVerified ? (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-12 text-center bg-gray-800 border border-gray-600 rounded text-xl"
                />
              ))}
            </div>

            {otpError && (
              <p className="text-red-400 text-sm">{otpError}</p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold"
            >
              {isVerifying ? (
                <div className="flex justify-center items-center">
                  <Zap className="w-5 h-5 mr-2 animate-spin" />
                  Verifying...
                </div>
              ) : (
                "Verify OTP"
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <Check className="w-12 h-12 text-green-400 mx-auto" />
            <h3 className="text-green-400 font-bold">
              OTP Verified Successfully 🎉
            </h3>
            <button className="w-full py-2 bg-green-600 rounded-lg font-semibold">
              Create New Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Otp;

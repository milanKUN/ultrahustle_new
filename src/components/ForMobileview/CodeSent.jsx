import React, { useState, useRef } from "react";

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showError, setShowError] = useState(false);
  const [showExpired, setShowExpired] = useState(false);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const verifyOtp = () => {
    setShowError(true);
    setShowExpired(false);
  };

  return (
    <div className="min-h-screen font-[Poppins] bg-[#eaeaea]">
      {/* FULL BG SCREEN */}
      <div
        className="
          relative
          w-full
          min-h-screen
          bg-[url('/robott.png')]
          bg-cover bg-center
          overflow-hidden
        "
      >
        {/* BACK BUTTON */}
        <button
          className="
            absolute top-3 left-3 z-20
            w-9 h-9
            bg-[#ccff00]
            rounded-full
            flex items-center justify-center
          "
        >
          <i className="bi bi-arrow-left text-black"></i>
        </button>

        {/* CONTENT */}
        <div className="relative z-10 pt-16 px-4 pb-6 max-w-[420px] mx-auto">
          {/* TITLE */}
          <div
            className="
              mb-4
              px-2 py-1
              text-center
              text-sm font-medium
              bg-white/20
              border border-white/80
              rounded-lg
              backdrop-blur-md
            "
          >
            Email Verification
          </div>

          {/* GLASS CARD */}
          <div
            className="
              bg-white/25
              border border-white/80
              rounded-2xl
              p-4
              shadow-xl
              backdrop-blur-xl
              text-center
            "
          >
            <p className="text-[11px] text-gray-700 leading-snug mb-3">
              We sent a reset code to <b>dev@gmail.com</b>
              <br />
              Enter the 6 digit code below
            </p>

            {/* OTP INPUTS */}
            <div className="flex justify-center gap-2 mb-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="
                    w-10 h-11
                    text-center
                    text-sm font-semibold
                    bg-transparent
                    border border-white/80
                    rounded-lg
                    outline-none
                  "
                />
              ))}
            </div>

            {/* VERIFY BUTTON */}
            <button
              onClick={verifyOtp}
              className="
                w-full
                py-2.5
                bg-[#ccff00]
                rounded-xl
                font-semibold
                text-sm
                mb-2
              "
            >
              Verify & Continue
            </button>

            {/* ERROR */}
            {showError && (
              <div className="text-[11px] text-red-500 mb-1">
                Incorrect code, please try again
              </div>
            )}

            {/* EXPIRED */}
            {showExpired && (
              <div className="text-[11px] text-gray-700 mb-1">
                Code expired.{" "}
                <button className="font-bold underline">Request new</button>
              </div>
            )}

            {/* RESEND */}
            <div className="text-[11px] text-gray-600 leading-snug mt-2">
              Haven’t got the code yet? <b>Resend</b>
              <br />
              <span className="text-gray-500">in 30 seconds</span>
            </div>

            {/* BACK TO LOGIN */}
            <a
              href="/"
              className="block mt-3 text-[11px] font-medium text-gray-700 underline"
            >
              ← Back to login
            </a>
          </div>
        </div>

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

import React from "react";

export default function ForgotPassword() {
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
            Forgot your password
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
            "
          >
            <p className="text-[11px] text-gray-700 text-center mb-3">
              No worries, we’ll send you the reset instructions
            </p>

            {/* INPUT */}
            <label className="text-xs mb-1 block">
              Email Id or Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter email or phone"
              className="
                w-full
                px-3 py-2
                text-sm
                bg-transparent
                border border-white/80
                rounded-lg
                outline-none
                mb-3
              "
            />

            {/* BUTTON */}
            <button
              className="
                w-full
                py-2.5
                bg-[#ccff00]
                rounded-xl
                font-semibold
                text-sm
              "
            >
              Reset Password
            </button>

            {/* BACK TO LOGIN */}
            <a
              href="/"
              className="
                block
                mt-3
                text-center
                text-[11px]
                font-medium
                text-gray-700
                underline
              "
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

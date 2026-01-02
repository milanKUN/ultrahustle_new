import React from "react";

export default function PasswordReset() {
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
        <div className="relative z-10 pt-24 px-4 pb-6 max-w-[420px] mx-auto">
          {/* GLASS CARD */}
          <div
            className="
              bg-white/25
              border border-white/80
              rounded-2xl
              p-5
              shadow-xl
              backdrop-blur-xl
              text-center
            "
          >
            {/* SUCCESS ICON */}
            <div
              className="
                w-10 h-10
                mx-auto mb-3
                rounded-full
                border-2 border-gray-600
                flex items-center justify-center
                text-gray-600
                text-lg
              "
            >
              <i className="bi bi-check"></i>
            </div>

            {/* TITLE */}
            <h6 className="text-sm font-semibold mb-1">Password Reset</h6>

            {/* TEXT */}
            <p className="text-[11.5px] text-gray-700 leading-snug mb-4">
              Your password has been successfully reset.
              <br />
              Click below to log in.
            </p>

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
              Continue
            </button>
          </div>
        </div>

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

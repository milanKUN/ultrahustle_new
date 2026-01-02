import React, { useState } from "react";

export default function CreateNewPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
            Create New Password
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
            <p className="text-[11px] text-gray-700 text-center leading-snug mb-3">
              Your new password must be different
              <br />
              from previously used password
            </p>

            {/* NEW PASSWORD */}
            <label className="text-xs mb-1 block">
              New Password
            </label>
            <div className="relative mb-3">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter new password"
                className="
                  w-full
                  px-3 py-2
                  text-sm
                  bg-transparent
                  border border-white/80
                  rounded-lg
                  outline-none
                "
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-gray-600
                "
              >
                <i className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <label className="text-xs mb-1 block">
              Confirm Password
            </label>
            <div className="relative mb-4">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="
                  w-full
                  px-3 py-2
                  text-sm
                  bg-transparent
                  border border-white/80
                  rounded-lg
                  outline-none
                "
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-gray-600
                "
              >
                <i className={`bi ${showConfirm ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>

            {/* SAVE BUTTON */}
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
              Save Password
            </button>
          </div>
        </div>

        {/* OPTIONAL OVERLAY (READABILITY) */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

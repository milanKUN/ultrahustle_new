import React, { useState } from "react";

export default function NewUsername() {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen font-[Poppins] relative overflow-hidden">
      {/* FULL BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-[url('/robott.png')]
          bg-cover bg-center
          z-0
        "
      />

      {/* OPTIONAL DARK / GREY OVERLAY */}
      <div className="" />

      {/* BACK BUTTON */}
      <button
        className="
          absolute top-4 left-4 z-20
          w-10 h-10
          bg-lime-400
          rounded-full
          flex items-center justify-center
          shadow-md
        "
      >
        <i className="bi bi-arrow-left text-black text-lg"></i>
      </button>

      {/* CARD */}
      <div className="relative z-10 pt-20 px-4 max-w-[420px] mx-auto">
        <div
          className="
            bg-[#d6d6d6]
            rounded-2xl
            shadow-xl
            border border-white/60
            px-5 py-6
          "
        >
          {/* TITLE */}
          <div className="text-center mb-5">
            <h2 className="text-xl font-semibold text-black">
              Create Username
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Choose a unique username for your account.
            </p>
          </div>

          {/* USERNAME INPUT */}
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Username</label>

            <div
              className="
                flex items-center
                bg-[#e1e1e1]
                rounded-xl
                border border-white
                px-4 py-3
              "
            >
              <span className="text-gray-500 mr-2">@</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                  text-black
                "
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
              w-full
              bg-lime-400
              text-black
              font-semibold
              py-3
              rounded-xl
              shadow-md
              active:scale-[0.98]
              transition
            "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

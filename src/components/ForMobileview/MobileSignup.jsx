import { useState } from "react";

export default function Signup() {
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
          bg-[url('/robot2.png')]
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
            Sign up
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
            {/* FULL NAME */}
            <label className="text-[11px] mb-1 block">Full Name</label>
            <input
              type="text"
              className="
                w-full mb-2
                px-3 py-2
                text-sm
                bg-transparent
                border border-white/80
                rounded-lg
                outline-none
              "
            />

            {/* EMAIL */}
            <label className="text-[11px] mb-1 block">Email Id</label>
            <input
              type="email"
              className="
                w-full mb-2
                px-3 py-2
                text-sm
                bg-transparent
                border border-white/80
                rounded-lg
                outline-none
              "
            />

            {/* PASSWORD */}
            <label className="text-[11px] mb-1 block">Password</label>
            <div className="relative mb-2">
              <input
                type={showPass ? "text" : "password"}
                className="
                  w-full
                  px-3 py-2 pr-9
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
            <label className="text-[11px] mb-1 block">Confirm Password</label>
            <div className="relative mb-2">
              <input
                type={showConfirm ? "text" : "password"}
                className="
                  w-full
                  px-3 py-2 pr-9
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
                <i
                  className={`bi ${showConfirm ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </button>
            </div>

            {/* SELECT */}
            <select
              className="
                w-full mb-2
                px-3 py-2
                text-sm
                bg-transparent
                border border-white/80
                rounded-lg
                outline-none
              "
            >
              <option>I am mainly here to..</option>
              <option>Earn Money</option>
              <option>Learn Skills</option>
              <option>Grow Network</option>
            </select>

            {/* TERMS */}
            <div className="flex items-start gap-2 mb-3">
              <input type="checkbox" className="mt-1" />
              <label className="text-[11px] text-gray-700">
                I agree to <b>Terms & Privacy Policy</b>
              </label>
            </div>

            {/* CONTINUE */}
            <button
              className="
                w-full
                py-2.5
                bg-[#ccff00]
                rounded-xl
                font-semibold
                text-sm
                mb-3
              "
            >
              Continue
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-2 text-[10px] text-gray-600 mb-3">
              <span className="flex-1 h-px bg-gray-400"></span>
              OR
              <span className="flex-1 h-px bg-gray-400"></span>
            </div>

            {/* SOCIAL */}
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2 text-xs bg-white/30 border border-white/70 rounded-lg">
                <i className="bi bi-google mr-1"></i> Google
              </button>
              <button className="py-2 text-xs bg-[#1877f2] text-white rounded-lg">
                <i className="bi bi-facebook mr-1"></i> Facebook
              </button>
            </div>
          </div>
        </div>

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

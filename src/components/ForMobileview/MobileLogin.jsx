import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#eaeaea] font-[Poppins]">
      {/* FULL WIDTH MOBILE SCREEN */}
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
        <div className="absolute top-3 left-3 z-20 w-9 h-9 bg-[#ccff00] rounded-full flex items-center justify-center">
          <i className="bi bi-arrow-left text-black"></i>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pt-16 px-4 pb-6 max-w-[420px] mx-auto">
          {/* TITLE */}
          <div className="mb-4 px-2 py-1 text-center text-sm font-medium bg-white/20 border border-white/80 rounded-lg backdrop-blur-md">
            Login
          </div>

          {/* CARD */}
          <div className="bg-white/25 border border-white/80 rounded-2xl p-4 shadow-xl backdrop-blur-xl">
            {/* EMAIL */}
            <label className="text-xs mb-1 block">
              Email Address or phone number
            </label>
            <input
              defaultValue="dev@gmail.com"
              className="w-full mb-3 px-3 py-2 text-sm bg-transparent border border-white/80 rounded-lg outline-none"
            />

            {/* PASSWORD */}
            <label className="text-xs mb-1 block">Password</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="password"
                className="w-full px-3 py-2 pr-9 text-sm bg-transparent border border-white/80 rounded-lg outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </span>
            </div>

            {/* FORGOT */}
            <div className="text-right mb-3">
              <a href="#" className="text-[11px] text-gray-600">
                Forgot password?
              </a>
            </div>

            {/* LOGIN */}
            <button className="w-full py-2.5 bg-[#ccff00] rounded-xl font-semibold text-sm mb-3">
              Login
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
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

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

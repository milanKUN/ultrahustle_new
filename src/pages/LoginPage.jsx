import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, Facebook, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  // login | forgot | verify | newPassword | resetSuccess
  const [currentView, setCurrentView] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  // OTP
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otpError, setOtpError] = useState(null);
  const inputRefs = useRef([]);

  // New password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  // Username creation state
  const [newUsername, setNewUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  // Render new username view
  const renderNewUsernameView = () => (
    <>
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Create Username
        </h1>
        <p className="text-gray-600 text-sm">
          Choose a unique username for your account
        </p>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();
          if (!newUsername.trim()) {
            setUsernameError("Username cannot be empty");
            return;
          }
          setUsernameError(null);
          // Next step logic here
        }}
        className="space-y-4 relative z-10"
      >
        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            Username
          </label>
          <div className="flex items-center bg-white/10 border border-white/80 rounded-xl px-5 py-3 shadow-inner backdrop-blur-sm">
            <span className="text-gray-400 mr-2">@</span>
            <input
              type="text"
              placeholder="Enter username"
              value={newUsername}
              onChange={e => setNewUsername(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-800 text-sm"
            />
          </div>
          {usernameError && (
            <p className="text-xs text-red-500 mt-1">{usernameError}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#C3FF00] text-black font-semibold py-2 rounded-lg mt-4"
        >
          Continue
        </button>
      </form>
      <div className="text-center mt-6 relative z-10">
        <button
          onClick={() => setCurrentView("login")}
          className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to log in
        </button>
      </div>
    </>
  );

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (currentView === "verify" && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (countdown === 0) setCanResend(true);
  }, [countdown, currentView]);

  /* ---------------- OTP HANDLERS ---------------- */
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setOtpError(null);
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setCanResend(false);
    setOtpError(null);
    setCode(["", "", "", "", "", ""]);
  };

  /* ---------------- SUBMITS ---------------- */
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setCurrentView("verify");
    setCountdown(30);
    setCanResend(false);
  };

  // ✅ FIXED: OTP → New Password
  const handleVerifySubmit = (e) => {
    e.preventDefault();
    setCurrentView("newPassword");
  };
  const renderNewPasswordView = () => (
    <>
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Create New Password
        </h1>
        <p className="text-gray-600 text-sm">
          Your new password must be different from previous password
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
          }
          setPasswordError(null);
          setCurrentView("resetSuccess");
        }}
        className="space-y-4 relative z-10"
      >
        {/* New Password */}
        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/80
            focus:outline-none focus:bg-white focus:border-[#C3FF00]
            transition-colors placeholder-gray-600 text-gray-800 pr-12 shadow-inner backdrop-blur-sm"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-5 py-3 rounded-xl bg-white/10 border
            ${passwordError ? "border-red-400" : "border-white/80"}
            focus:outline-none focus:bg-white focus:border-[#C3FF00]
            transition-colors placeholder-gray-600 text-gray-800 pr-12 shadow-inner backdrop-blur-sm`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs font-medium mt-1">
              {passwordError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="block w-full text-center border-2 border-white py-3.5 rounded-xl
        bg-[#CEFF1B] hover:bg-white text-gray-900 font-bold text-base shadow-xl
        hover:scale-[1.02] transform transition-all active:scale-95 tracking-wide"
        >
          Reset Password
        </button>
      </form>

      <div className="text-center mt-6 relative z-10">
        <button
          onClick={() => setCurrentView("verify")}
          className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>
    </>
  );

  // Render Login View
  const renderLoginView = () => (
    <>
      {/* Header Tabs */}
      <div className="flex bg-white/10 rounded-2xl p-1 mb-6 relative border border-white/80">
        <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#CEFF1B] to-[#B2DB1C] text-gray-900 font-bold text-sm border border-[#7A9B00]/20 shadow-md transition-all uppercase tracking-wide">
          Login
        </button>
        <Link
          to="/signup"
          className="flex-1 py-3 text-center rounded-xl text-gray-700 font-semibold text-sm hover:bg-white/10 transition-all uppercase tracking-wide"
        >
          Sign up
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            Email Address or phone number
          </label>
          <input
            type="text"
            placeholder="dev@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 shadow-inner backdrop-blur-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 pr-12 shadow-inner backdrop-blur-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrentView("forgot")}
              className="text-xs font-bold text-gray-800 hover:text-black hover:underline transition-all uppercase tracking-wide"
            >
              Forgot password?
            </button>
            <button
              type="button"
              onClick={() => setCurrentView("newUsername")}
              className="text-xs font-bold text-gray-800 hover:text-black hover:underline transition-all uppercase tracking-wide"
            >
              New Username?
            </button>
          </div>
        </div>

        <Link
          to="/"
          className="
    block w-full text-center
    border-2 border-white
    py-3.5 rounded-xl
    bg-[#CEFF1B] hover:bg-white
    text-gray-900 font-bold text-lg
    shadow-xl
    transform transition-all duration-300
    hover:scale-[1.02]
    active:scale-95
    tracking-wide

    hover:border-[#CEFF1B]
    hover:shadow-[0_0_0_3px_rgba(206,255,27,0.45)]
  "
        >
          Login
        </Link>
      </form>

      {/* Divider */}
      <div className="relative my-5 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-500/30"></div>
        </div>
        <span className="relative px-4 text-xs font-bold text-gray-600 uppercase tracking-widest bg-transparent">
          OR
        </span>
      </div>

      {/* Social Logins */}
      <div className="space-y-3">
        <button className="w-full py-3 rounded-xl bg-transparent hover:bg-white/20 border-2 border-gray flex items-center justify-center gap-3 text-gray-700 font-normal transition-all shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <button className="w-full py-3 rounded-xl bg-[#1877F2]/90 hover:bg-[#1877F2] text-white flex items-center justify-center gap-3 font-normal transition-all shadow-md">
          <Facebook size={20} fill="currentColor" />
          Continue with Facebook
        </button>
      </div>

      <p className="text-center mt-6 text-gray-800 font-medium text-sm">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-bold border-b-2 border-gray-900 pb-0.5 hover:opacity-70 transition-opacity"
        >
          Sign up
        </Link>
      </p>
    </>
  );

  // Render Forgot Password View
  const renderForgotView = () => (
    <>
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Forgot your password
        </h1>
        <p className="text-gray-600 text-sm">
          No worries, we'll send you the reset instructions
        </p>
      </div>

      <form onSubmit={handleForgotSubmit} className="space-y-5 relative z-10">
        <div className="space-y-1.5">
          <label className="text-gray-700 font-medium text-sm ml-1">
            Email Id or Phone Number
          </label>
          <input
            type="text"
            placeholder="dev@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 shadow-inner backdrop-blur-sm"
          />
        </div>

        <button
          type="submit"
          className="block w-full text-center border-2 border-gray-400 py-3.5 rounded-xl bg-transparent hover:bg-white/20 text-gray-700 font-bold text-base shadow-sm hover:scale-[1.02] transform transition-all active:scale-95 tracking-wide"
        >
          Reset Password
        </button>
      </form>

      <div className="text-center mt-6 relative z-10">
        <button
          onClick={() => setCurrentView("login")}
          className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to log in
        </button>
      </div>
    </>
  );

  // Render Verify OTP View
  const renderVerifyView = () => (
    <>
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Email Verification
        </h1>
        <p className="text-gray-600 text-sm">
          We sent a reset code to{" "}
          <span className="font-semibold text-gray-800">
            {email || "dev@gmail.com"}
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          Enter the 6 digit code below to reset your password
        </p>
      </div>

      <form onSubmit={handleVerifySubmit}>
        <div className="flex justify-center gap-3 mb-6 relative z-10">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              className={`w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold rounded-xl bg-white/10 border-2 ${
                otpError ? "border-red-400" : "border-white/80"
              } focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-all placeholder-gray-400 text-gray-800 shadow-inner backdrop-blur-sm`}
            />
          ))}
        </div>

        <button
          type="submit"
          className="block w-full text-center border-2 border-white py-3.5 rounded-xl bg-[#CEFF1B] hover:bg-white text-gray-900 font-bold text-base shadow-xl hover:scale-[1.02] transform transition-all active:scale-95 tracking-wide relative z-10"
        >
          Verify & Continue
        </button>
      </form>

      <div className="text-center mt-6 relative z-10 space-y-1">
        {otpError === "incorrect" && (
          <>
            <p className="text-red-500 text-sm font-medium">
              Incorrect code, please try again
            </p>
            <p className="text-gray-600 text-sm font-medium">
              Resend Code in {countdown} seconds
            </p>
          </>
        )}
        {otpError === "expired" && (
          <>
            <p className="text-gray-700 text-sm font-medium">
              This code has expired. Please request a new one.
            </p>
            <button
              onClick={handleResend}
              className="text-gray-800 text-sm font-bold underline hover:text-black"
            >
              Click here to request a new one
            </button>
          </>
        )}
        {!otpError && (
          <>
            <p className="text-gray-600 text-sm">
              Haven't got the sms yet?{" "}
              <button
                onClick={handleResend}
                disabled={!canResend}
                className={`font-bold underline ${
                  canResend
                    ? "text-gray-800 hover:text-black cursor-pointer"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Resend Code
              </button>
            </p>
            {!canResend && (
              <p className="text-gray-500 text-sm font-medium">
                Resend Code in {countdown} seconds
              </p>
            )}
          </>
        )}
      </div>

      <div className="text-center mt-6 relative z-10">
        <button
          onClick={() => setCurrentView("forgot")}
          className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>
    </>
  );

  // Render Reset Success View
  const renderResetSuccessView = () => (
    <>
      <div className="flex justify-center mb-6 relative z-10">
        <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white/10">
          <CheckCircle size={32} className="text-gray-600" strokeWidth={1.5} />
        </div>
      </div>

      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Password Reset
        </h1>
        <p className="text-gray-600 text-sm">
          Your password has been successful reset.
          <br />
          Click below to log in.
        </p>
      </div>

      <button
        onClick={() => setCurrentView("login")}
        className="block w-full text-center border-2 border-white py-3.5 rounded-xl bg-[#CEFF1B] hover:bg-white text-gray-900 font-bold text-base shadow-xl hover:scale-[1.02] transform transition-all active:scale-95 tracking-wide relative z-10"
      >
        Continue
      </button>
    </>
  );

  return (
    <div
      className="
      min-h-screen w-full relative
      flex items-start justify-center
      md:items-center md:justify-end md:pr-24
      bg-no-repeat bg-bottom
      md:bg-cover md:bg-center
    "
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      <div
        className={`w-full ${
          currentView === "login" ? "max-w-[600px]" : "max-w-[550px]"
        } backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl rounded-[40px] p-6 md:p-8 relative overflow-hidden mx-4 md:mx-0 z-10`}
      >
        {currentView === "login" && renderLoginView()}
        {currentView === "forgot" && renderForgotView()}
        {currentView === "verify" && renderVerifyView()}
        {currentView === "newPassword" && renderNewPasswordView()}
        {currentView === "newUsername" && renderNewUsernameView()}
        {currentView === "resetSuccess" && renderResetSuccessView()}
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Facebook, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  // View states: 'signup' | 'verify' | 'success'
  const [currentView, setCurrentView] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  
  // OTP State
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otpError, setOtpError] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (currentView === 'verify' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, currentView]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setOtpError(null);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setCanResend(false);
    setOtpError(null);
    setCode(['', '', '', '', '', '']);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setCurrentView('verify');
    setCountdown(30);
    setCanResend(false);
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    setCurrentView('success');
  };

  // Render Signup View
  const renderSignupView = () => (
    <>
      {/* Header Tabs */}
      <div className="flex bg-white/10 rounded-2xl p-1 mb-4 relative border border-white/80">
        <Link to="/login" className="flex-1 py-2.5 text-center rounded-xl text-gray-700 font-semibold text-sm hover:bg-white/10 transition-all uppercase tracking-wide">
          Login
        </Link>
        <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#CEFF1B] to-[#B2DB1C] text-gray-900 font-bold text-sm border border-[#7A9B00]/20 shadow-md transition-all uppercase tracking-wide">
          Sign up
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSignupSubmit} className="space-y-2.5">
        {/* Full Name Input */}
        <div className="space-y-1">
          <label className="text-gray-700 font-medium text-xs ml-1">Full Name</label>
          <input 
            type="text" 
            placeholder="John Kennedy"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 text-sm shadow-inner backdrop-blur-sm"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label className="text-gray-700 font-medium text-xs ml-1">Email Id</label>
          <input 
            type="email" 
            placeholder="dev@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 text-sm shadow-inner backdrop-blur-sm"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <label className="text-gray-700 font-medium text-xs ml-1">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="********"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 text-sm pr-10 shadow-inner backdrop-blur-sm"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-1">
          <label className="text-gray-700 font-medium text-xs ml-1">Confirm Password</label>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="********"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-600 text-gray-800 text-sm pr-10 shadow-inner backdrop-blur-sm"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Role Selection */}
        <div className="space-y-1">
          <label className="text-gray-700 font-medium text-xs ml-1">I am Mainly here to.. (optional)</label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/80 focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors text-gray-800 text-sm shadow-inner backdrop-blur-sm appearance-none cursor-pointer">
              <option value="" disabled selected>Select an option</option>
              <option value="freelancer">Find Work</option>
              <option value="client">Hire Talent</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2 ml-1">
          <input type="checkbox" id="terms" className="w-3.5 h-3.5 rounded border-gray-300 text-[#C3FF00] focus:ring-[#C3FF00]" />
          <label htmlFor="terms" className="text-xs font-medium text-gray-700 cursor-pointer">I agree to Terms & Privacy Policy</label>
        </div>

      <button
  type="submit"
  className="
    block w-full text-center
    border-2 border-white
    py-3 rounded-xl
    bg-[#CEFF1B] hover:bg-white
    text-gray-900 font-bold text-base
    shadow-lg
    transform transition-all duration-300
    hover:scale-[1.02]
    active:scale-95
    tracking-wide

    hover:border-[#CEFF1B]
    hover:shadow-[0_0_0_3px_rgba(206,255,27,0.45)]
  "
>
  Continue
</button>

      </form>

      <div className="relative my-4 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-500/30"></div>
        </div>
        <span className="relative px-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest bg-transparent">OR</span>
      </div>

      {/* Social Logins */}
      <div className="space-y-2.5">
        <button className="w-full py-2.5 rounded-xl bg-transparent hover:bg-white/20 border-2 border-gray flex items-center justify-center gap-2 text-gray-700 font-normal text-sm transition-all shadow-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
        
        <button className="w-full py-2.5 rounded-xl bg-[#1877F2]/90 hover:bg-[#1877F2] text-white flex items-center justify-center gap-2 font-normal text-sm transition-all shadow-md">
          <Facebook size={16} fill="currentColor" />
          Continue with Facebook
        </button>
      </div>

      <p className="text-center mt-4 text-gray-800 font-medium text-xs">
        Already have an account? <Link to="/login" className="font-bold border-b-2 border-gray-900 pb-0.5 hover:opacity-70 transition-opacity">Log in</Link>
      </p>
    </>
  );

  // Render Verify OTP View
  const renderVerifyView = () => (
    <>
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Verification</h1>
        <p className="text-gray-600 text-sm">
          We sent a reset code to <span className="font-semibold text-gray-800">{email || 'dev@gmail.com'}</span>
        </p>
        <p className="text-gray-600 text-sm">Enter the 6 digit code below to activate your account</p>
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
              className={`w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold rounded-xl bg-white/10 border-2 ${otpError ? 'border-red-400' : 'border-white/80'} focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-all placeholder-gray-400 text-gray-800 shadow-inner backdrop-blur-sm`}
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
        {otpError === 'incorrect' && (
          <>
            <p className="text-red-500 text-sm font-medium">Incorrect code, please try again</p>
            <p className="text-gray-600 text-sm font-medium">Resend Code in {countdown} seconds</p>
          </>
        )}
        {otpError === 'expired' && (
          <>
            <p className="text-gray-700 text-sm font-medium">This code has expired. Please request a new one.</p>
            <button onClick={handleResend} className="text-gray-800 text-sm font-bold underline hover:text-black">
              Click here to request a new one
            </button>
          </>
        )}
        {!otpError && (
          <>
            <p className="text-gray-600 text-sm">
              Haven't got the sms yet?{' '}
              <button 
                onClick={handleResend}
                disabled={!canResend}
                className={`font-bold underline ${canResend ? 'text-gray-800 hover:text-black cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}
              >
                Resend Code
              </button>
            </p>
            {!canResend && (
              <p className="text-gray-500 text-sm font-medium">Resend Code in {countdown} seconds</p>
            )}
          </>
        )}
      </div>

      <div className="text-center mt-6 relative z-10">
        <button 
          onClick={() => setCurrentView('signup')}
          className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to sign up
        </button>
      </div>
    </>
  );

  // Render Success View
  const renderSuccessView = () => (
    <>
      <div className="flex justify-center mb-6 relative z-10">
        <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white/10">
          <CheckCircle size={32} className="text-gray-600" strokeWidth={1.5} />
        </div>
      </div>

      <div className="text-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Successful</h1>
        <p className="text-gray-600 text-sm">
          You're good to go. Let's start building<br />something extraordinary.
        </p>
      </div>

      <Link 
        to="/"
        className="block w-full text-center border-2 border-white py-3.5 rounded-xl bg-[#CEFF1B] hover:bg-white text-gray-900 font-bold text-base shadow-xl hover:scale-[1.02] transform transition-all active:scale-95 tracking-wide relative z-10"
      >
        Continue
      </Link>
    </>
  );

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center md:items-center md:justify-end md:pr-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      <div className={`w-full ${currentView === 'signup' ? 'max-w-[600px]' : 'max-w-[550px]'} backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl rounded-[40px] p-5 md:p-6 relative overflow-hidden mx-4 md:mx-0 z-10 transition-all hover:bg-white/10`}>
        
        {/* Animated Gradient Glow */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #C3FF00 0%, #DCFF38 40%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.7,
            top: '0',
            left: '0',
            animation: 'glow-rotate 6s steps(3) infinite'
          }}
        ></div>
        
        {currentView === 'signup' && renderSignupView()}
        {currentView === 'verify' && renderVerifyView()}
        {currentView === 'success' && renderSuccessView()}

      </div>
    </div>
  );
}

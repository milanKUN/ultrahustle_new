import React, { useState } from 'react';
import { Eye, EyeOff, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center md:items-center md:justify-end md:pr-24 overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/welcome-video.mp4" type="video/mp4" />
      </video>

      {/* Welcome Form Container */}
      <div className="w-full max-w-[500px] backdrop-blur-xl bg-transparent border border-white/20 shadow-2xl rounded-[30px] p-6 md:p-8 relative overflow-hidden mx-4 md:mx-0 z-10">
        
        {/* Animated Gradient Glow */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #CEFF1B 0%, #CEFF1B 40%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.7,
            top: '0',
            left: '0',
            animation: 'glow-rotate 6s steps(3) infinite'
          }}
        ></div>
        
        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <p className="text-gray-600 text-sm font-medium tracking-widest uppercase mb-3">Welcome to the</p>
          <img src="/logo.png" alt="Ultra Hustle" className="h-14 mx-auto" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-gray-600 font-medium text-sm relative">Email Address or phone number</label>
            <input 
              type="text" 
              placeholder="dev@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-500 text-gray-800 text-sm relative"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-gray-600 font-medium text-sm relative">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white focus:outline-none focus:bg-white focus:border-[#C3FF00] transition-colors placeholder-gray-500 text-gray-800 text-sm pr-10"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link to="/login" className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition-all">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#CEFF1B] to-[#B2DB1C] hover:bg-white hover:from-white hover:to-white text-gray-900 font-bold text-sm shadow-lg hover:scale-[1.02] transform transition-all active:scale-95"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <span className="relative px-4 text-xs text-gray-500 bg-transparent">OR</span>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl bg-transparent hover:bg-white border-2 border-[#919191] flex items-center justify-center gap-2 text-gray-700 font-medium text-sm transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          
          <button className="w-full py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center gap-2 font-medium text-sm transition-all shadow-md">
            <Facebook size={18} fill="currentColor" />
            Continue with Facebook
          </button>
        </div>

        {/* Sign up Link */}
        <p className="text-center mt-6 text-gray-700 text-sm">
          Don't have an account? <Link to="/signup" className="font-bold underline hover:opacity-70 transition-opacity">Sign up</Link>
        </p>

      </div>
    </div>
  );
}

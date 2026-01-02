import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, MessageCircle, User } from "lucide-react";

export default function Navbar() {
  // Dark mode state, only for User page
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Only apply dark mode class for User page
    const root = document.getElementById('user-root');
    if (root) {
      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [darkMode]);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-white/60
        backdrop-blur-xl
        bg-gradient-to-r from-[#D9D9D9] via-[#CFCFCF] to-[#C6C6C6]
      "
    >
      {/* MAIN BAR */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 w-full">
        {/* DARK MODE BUTTON (only for User page) */}
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="mr-4 px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition hidden md:block"
          style={{ position: 'absolute', left: 16, top: 16, zIndex: 100 }}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {/* LEFT : Logo + Links */}
        <div className="flex items-center gap-8 lg:gap-14">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="UltraHustle Logo"
              className="h-8 sm:h-9 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="nav-item cursor-pointer">
              <span className="nav-pill"></span>
              <span className="nav-text">Dashboard</span>
            </div>
            <div className="nav-item cursor-pointer">
              <span className="nav-pill"></span>
              <span className="nav-text">Marketplace</span>
            </div>
            <div className="nav-item cursor-pointer">
              <span className="nav-pill"></span>
              <span className="nav-text">Forum</span>
            </div>
          </div>
        </div>

        {/* RIGHT : ICONS ONLY */}
        <div className="flex items-center gap-5">
          {/* Messages */}
          <button className="relative text-gray-700 hover:text-black">
            <MessageCircle size={20} />
          </button>

          {/* Notifications */}
          <button className="relative text-gray-700 hover:text-black">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-lime-400 rounded-full" />
          </button>

          {/* Profile */}
          <Link
            to="/profile-dashboard"
            className="
              w-9 h-9 rounded-full bg-gray-300
              flex items-center justify-center
              text-gray-700
              hover:ring-2 hover:ring-lime-400
              transition
            "
          >
            <User size={18} />
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#CFCFCF]/90 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-4 text-base">
            <Link onClick={closeMenu}>Dashboard</Link>
            <Link onClick={closeMenu}>Marketplace</Link>
            <Link onClick={closeMenu}>Forum</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

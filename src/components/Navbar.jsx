import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

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
      <div
        className="
          flex items-center justify-between
          px-4 sm:px-6
          py-3 sm:py-4
          max-w-7xl mx-auto
        "
      >
        {/* LEFT : Logo + Links */}
        <div className="flex items-center gap-8 lg:gap-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="UltraHustle Logo"
              className="h-8 sm:h-9 object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <div className="nav-item cursor-pointer">
              <span className="nav-pill"></span>
              <span className="nav-text">Home</span>
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

        {/* CENTER : SEARCH (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search here"
              className="
                w-full h-11 rounded-full
                bg-white/40 backdrop-blur-md
                border border-black/10
                pl-5 pr-10 text-sm text-gray-800 placeholder-gray-500
                outline-none transition-all duration-200
                hover:border-[#C6FF1A]
                focus:border-[#C6FF1A]
                focus:ring-2 focus:ring-[#C6FF1A]/40
              "
            />

            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT : Buttons + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className="
              px-4 sm:px-6 py-1.5 sm:py-2
              rounded-full border border-white
              text-gray-800 text-xs sm:text-sm font-medium
              transition-all duration-300
              hover:bg-white/70
              hover:border-[#CEFF1B]
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              px-4 sm:px-6 py-1.5 sm:py-2
              rounded-full border border-white
              text-gray-800 text-xs sm:text-sm font-medium
              transition-all duration-300
              hover:bg-white/70
              hover:border-[#CEFF1B]
            "
          >
            Sign up
          </Link>
          <Link
            to="/user-profile"
            className="
              px-4 sm:px-6 py-1.5 sm:py-2
              rounded-full border border-white
              text-gray-800 text-xs sm:text-sm font-medium
              transition-all duration-300
              hover:bg-white/70
              hover:border-[#CEFF1B]
            "
          >
            Setting
          </Link>
          <Link
            to="/profile-dashboard"
            className="
              px-4 sm:px-6 py-1.5 sm:py-2
              rounded-full border border-white
              text-gray-800 text-xs sm:text-sm font-medium
              transition-all duration-300
              hover:bg-white/70
              hover:border-[#CEFF1B]
            "
          >
            Dashboard
          </Link>

          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-1 p-1 text-gray-700"
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
        <div
          className="
            md:hidden
            bg-[#CFCFCF]/90 backdrop-blur-xl
            px-5 py-6
            shadow-xl
          "
        >
          {/* Mobile Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search here"
              className="
                w-full h-10 rounded-full
                bg-white/50 border border-black/10
                px-4 text-sm
                outline-none
                focus:border-[#C6FF1A]
              "
            />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-base">
            <Link onClick={closeMenu} className="font-semibold text-gray-800">
              Home
            </Link>
            <Link onClick={closeMenu} className="text-gray-700">
              Marketplace
            </Link>
            <Link onClick={closeMenu} className="text-gray-700">
              Forum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

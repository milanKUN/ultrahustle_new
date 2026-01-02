import React from 'react';

export default function MobileFooter() {
  return (
    <footer className="bg-gray-200 px-5 py-8 mt-4">
      {/* Logo */}
      <div className="mb-6">
        <img src="/logo.png" alt="Ultra Hustle" className="h-6 object-contain -ml-8" />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Address Section */}
          <div>
            <h3 className="font-roboto text-sm font-semibold text-gray-700 mb-2">Address</h3>
            <p className="font-roboto text-xs text-gray-600 leading-relaxed">
              1234 Fashion Street, Suite 567,<br />
              New York, NY 10001
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-roboto text-xs text-gray-600">Email: info@fashionshop.com</p>
            <p className="font-roboto text-xs text-gray-600">Phone: (212) 555-1234</p>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-roboto text-sm font-semibold text-gray-700 mb-2">Help</h3>
            <div className="space-y-1">
              <p className="font-roboto text-xs text-gray-600">Privacy Policy</p>
              <p className="font-roboto text-xs text-gray-600">Terms & Conditions</p>
              <p className="font-roboto text-xs text-gray-600">My Wishlist</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* About Section */}
          <div>
            <h3 className="font-roboto text-sm font-semibold text-gray-700 mb-2">About us</h3>
            <div className="space-y-1">
              <p className="font-roboto text-xs text-gray-600">Our Story</p>
              <p className="font-roboto text-xs text-gray-600">Account</p>
            </div>
          </div>

          {/* Sign Up Section */}
          <div>
            <h3 className="font-roboto text-sm font-semibold text-gray-700 mb-2">Sign Up For Email</h3>
            <p className="font-roboto text-[10px] text-gray-600 mb-3 leading-relaxed">
              Get first dibs on new arrivals sales, exclusive content and more!
            </p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Enter Your email..."
                className="flex-1 min-w-0 px-2 py-1.5 text-[10px] border border-gray-300 rounded bg-transparent placeholder:text-gray-400 outline-none focus:border-black"
              />
              <button className="px-2 py-1.5 bg-[#CEFF1B] text-gray-900 text-[10px] font-semibold rounded hover:bg-[#d4ff3a] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

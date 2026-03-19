import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Security() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-4 md:p-0">
      {/* ================= Security ================= */}
      <div className="mb-8 md:-mt-14 pb-6 md:pb-10">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xl font-semibold whitespace-nowrap">
            Security
          </h3>
          <div className="flex-1 h-px bg-[#2B2B2B]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Password */}
          <div>
            <label className="block mb-1 font-medium">
              Current password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="********"
                className="w-full bg-transparent border border-black rounded-md px-3 py-2 pr-10 text-sm outline-none focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
              />
              <span
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer p-0 m-0 bg-transparent flex items-center justify-center h-auto w-auto"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" strokeWidth={1.2} /> : <Eye className="w-5 h-5" strokeWidth={1.2} />}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-1 font-medium">New password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="********"
                className="w-full bg-transparent border border-black rounded-md px-3 py-2 pr-10 text-sm outline-none focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer p-0 m-0 bg-transparent flex items-center justify-center h-auto w-auto"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" strokeWidth={1.2} /> : <Eye className="w-5 h-5" strokeWidth={1.2} />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">
              Confirm New password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="w-full bg-transparent border border-black rounded-md px-3 py-2 pr-10 text-sm outline-none focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer p-0 m-0 bg-transparent flex items-center justify-center h-auto w-auto"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" strokeWidth={1.2} /> : <Eye className="w-5 h-5" strokeWidth={1.2} />}
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-end justify-center md:justify-end">
            <button className="w-full md:w-auto border border-black bg-[#CEFF1B] text-[#2B2B2B] text-sm px-6 py-2 rounded-md font-semibold">
              Confirm Password
            </button>
          </div>
        </div>
      </div>

      {/* ================= Active Devices ================= */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xl font-semibold whitespace-nowrap">
            Active Devices
          </h3>
          <div className="flex-1 h-px bg-[#2B2B2B]" />
        </div>
        <p className="mb-4 text-[16px] ">Currently login</p>

        {/* Device Item */}
        <div className="flex flex-col sm:flex-row bg-[#F2F2F2] border border-black items-start sm:items-center justify-between rounded-md p-6 mb-4 gap-4">
          <div>
            <p className="text-[18px] font-medium mb-1">Windows</p>
            <p className="text-[14px] text-gray-500 mb-1">Chennai, Tamil Nadu, India</p>
            <p className="text-[14px] text-[#0FB400] flex items-center gap-1 font-medium">
              <span>●</span>
              Your Current Session
            </p>
          </div>
          <button className="bg-[#FF0000] border border-black text-white text-sm px-6 py-2 rounded font-medium w-full sm:w-auto hover:bg-red-600 transition-colors">
            Log out
          </button>
        </div>

        {/* Other Device */}
        <div className="flex flex-col sm:flex-row bg-[#F2F2F2] border border-black items-start sm:items-center justify-between rounded-md p-6 gap-4">
          <div>
            <p className="text-[18px] font-medium mb-1">1 session on iPhone16</p>
            <p className="text-[14px] text-gray-500 mb-1">Chennai, Tamil Nadu, India</p>
            <p className="text-[14px] text-gray-400">30 minutes ago</p>
          </div>
          <button className="bg-[#FF0000] border border-black text-white text-sm px-6 py-2 rounded font-medium w-full sm:w-auto hover:bg-red-600 transition-colors">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

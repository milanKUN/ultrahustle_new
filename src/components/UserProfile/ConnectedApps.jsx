import React from "react";

export default function ConnectedApps() {
  return (
    <div className="w-full  from-gray-100 via-white to-lime-50 rounded-xl p-8 min-h-[300px]">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
          Connected Apps
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B]" />
      </div>

      {/* TITLE */}
      <p className="text-xl font-semibold text-gray-700 mb-6">
        Social Login Connections
      </p>

      {/* ROWS – FULL WIDTH */}
      <div className="space-y-6 w-full">
        {/* GOOGLE */}
        <div className="flex items-center w-full">
          <p className="text-lg text-gray-700">
            Continue with Google
          </p>

          <div className="ml-auto">
            <button className="px-6 py-1.5 bg-[#CEFF1B] border border-black rounded-md text-sm font-medium ">
              Connect
            </button>
          </div>
        </div>

        {/* FACEBOOK */}
        <div className="flex items-center w-full">
          <p className="text-lg text-gray-700">
            Continue with Facebook
          </p>

          <div className="ml-auto">
            <button className="px-6 py-1.5 bg-[#CEFF1B] border border-black rounded-md text-sm font-medium ">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

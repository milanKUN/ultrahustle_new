import React from "react";

export default function DeleteAccount() {
  return (
    <div className="w-full  from-gray-100 via-white to-lime-50 rounded-xl p-8 min-h-[300px]">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
          Delete Account
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B]" />
      </div>

      {/* WARNING TITLE */}
      <p className="text-lg font-semibold text-[#FF0000] mb-3">
        Delete Account Permanently
      </p>

      {/* FULL WIDTH WARNING BOX */}
      <div className="w-full border-1 border-black rounded-md p-4 text-sm text-gray-700 mb-10">
        This will delete your profile, listings, messages, teams, and all
        associated data.
      </div>

      {/* DANGER BUTTON */}
      <div className="flex justify-end">
        <button className="px-6 py-2 border border-black bg-[#FF0000] text-white rounded-md text-sm font-medium hover:bg-red-700">
          Delete My Account
        </button>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-2 border border-black rounded-md text-sm hover:bg-gray-100">
          Discard
        </button>
        <button className="px-6 py-2 bg-[#CEFF1B] border border-black rounded-md text-sm font-medium ">
          Save Changes
        </button>
      </div>
    </div>
  );
}

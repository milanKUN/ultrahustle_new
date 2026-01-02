import { useState } from "react";

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`w-[60px] h-[24px] rounded-full relative transition duration-200 flex items-center ${enabled ? "bg-[#CEFF1B]" : "bg-[#5C5C5CA8]"}`}
    style={{ minWidth: 48, minHeight: 28 }}
  >
    <span
      className={`absolute  left-1 w-6 h-6 rounded-full shadow-md transition-transform duration-200 ${enabled ? "translate-x-full bg-black" : "translate-x-0 bg-white"}`}
      style={{ minWidth: 24, minHeight: 24 }}
    />
  </button>
);

export default function Notification() {
  const [state, setState] = useState({
    messages: true,
    order: false,
    reviews: true,
    payment: false,
    boost: true,
    listing: false,
    system: true,

    project: false,
    comments: true,
    forum: false,
    team: true,

    marketing: true,
    product: false,
  });

  const toggle = (key) =>
    setState({ ...state, [key]: !state[key] });

  return (
    <div className=" from-gray-100 to-lime-50 rounded-xl p-6">

      {/* ================= NOTIFICATIONS ================= */}
      <div className="flex items-center gap-4 mb-4">
          <h3 className="text-[24px] font-semibold text-gray-700 whitespace-nowrap">
            Notifications
          </h3>
          <div className="flex-1 h-0.5 bg-[#2B2B2B]"></div>
        </div>

      {/* ================= EMAIL ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-[16px] font-semibold">Email Notifications</p>
          <p className="text-[20px] text-gray-500 mt-1">
            Get emails to find out what's going on when you're not online.
            You can turn these off
          </p>
        </div>

        <div className=" font-normal space-y-4">
          {[
            ["Messages", "messages"],
            ["Order updates", "order"],
            ["New reviews", "reviews"],
            ["Payment updates", "payment"],
            ["Boost promotions", "boost"],
            ["Listing tips & growth insights", "listing"],
            ["System alerts", "system"],
          ].map(([label, key]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-[24px]">{label}</span>
              <Toggle enabled={state[key]} onChange={() => toggle(key)} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-300 mb-8" />

      {/* ================= PUSH ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-[16] font-semibold">Push Notifications</p>
          <p className="text-[20px] text-gray-500 mt-1">
            Get push notifications in-app to find out what's going on when
            you're online.
          </p>
        </div>

        <div className=" font-normal space-y-4">
          {[
            ["Project updates", "project"],
            ["Comments / Replies", "comments"],
            ["Forum interactions", "forum"],
            ["Team invites", "team"],
          ].map(([label, key]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-[24px]">{label}</span>
              <Toggle enabled={state[key]} onChange={() => toggle(key)} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-300 mb-8" />

      {/* ================= MARKETING ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-[16px] font-semibold">Marketing Emails</p>
          <p className="text-[20px] text-gray-500 mt-1">
            Get push notifications in-app to find out what's going on when
            you're online.
          </p>
        </div>

        <div className=" font-normal space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[24px]">Allow marketing</span>
            <Toggle
              enabled={state.marketing}
              onChange={() => toggle("marketing")}
            />
          </div>

          <div className=" font-normal flex justify-between items-center">
            <span className="text-[24px]">Allow product updates</span>
            <Toggle
              enabled={state.product}
              onChange={() => toggle("product")}
            />
          </div>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-4 py-2 border rounded-md text-sm">
          Discard
        </button>
        <button className="px-4 py-2 bg-[#CEFF1B] rounded-md text-sm font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
}

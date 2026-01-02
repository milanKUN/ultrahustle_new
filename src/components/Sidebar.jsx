import { useState } from "react";
import {
  LayoutGrid,
  Store,
  Users,
  Folder,
  TrendingUp,
  Settings,
  ChevronDown,
  Menu,
} from "lucide-react";

/* RIGHT SETTINGS MENU */
const settingsMenu = [
  { id: "account", label: "Account" },
  { id: "profile", label: "Profile" },
  { id: "security", label: "Security" },
  { id: "notifications", label: "Notifications" },
  { id: "payments", label: "Payments & Payouts" },
  { id: "veriffication", label: "Verification" },
  { id: "apps", label: "Connected Apps" },
  { id: "delete", label: "Delete Account" },
];

export default function Sidebar({ onChange }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState("creator");
  const [showSettings, setShowSettings] = useState(false);
  const [activeSetting, setActiveSetting] = useState("account");

  const [open, setOpen] = useState({
    marketplace: true,
    team: false,
    projects: false,
    growth: false,
  });

  const toggle = (key) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex h-screen bg-white border-r">
      {/* ================= LEFT SIDEBAR ================= */}
      <div
        className={`
          transition-all duration-300
          ${collapsed ? "w-20" : "w-72"}
          px-4 py-6 border-r
        `}
      >
        {/* TOGGLE */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 text-gray-600 hover:text-black"
        >
          <Menu size={20} />
        </button>

        {/* MODE SWITCH */}
        {!collapsed && (
          <div className="flex bg-[#CEFF1B] rounded-full p-1 mb-6">
            <button
              onClick={() => setMode("creator")}
              className={`flex-1 py-1 rounded-full ${
                mode === "creator" ? "bg-white font-medium" : ""
              }`}
            >
              Creator
            </button>
            <button
              onClick={() => setMode("client")}
              className={`flex-1 py-1 rounded-full ${
                mode === "client" ? "bg-white font-medium" : ""
              }`}
            >
              Client
            </button>
          </div>
        )}

        {/* DASHBOARD */}
        <MenuItem
          icon={LayoutGrid}
          label="Dashboard"
          collapsed={collapsed}
          onClick={() => setShowSettings(false)}
        />

        {/* MARKETPLACE */}
        <Dropdown
          icon={Store}
          label="Marketplace"
          open={open.marketplace}
          onToggle={() => toggle("marketplace")}
          collapsed={collapsed}
        >
          <SubItem label="View Products" />
          <SubItem label="Add New Listing" />
          <SubItem label="Orders" />
        </Dropdown>

        {/* MY TEAM */}
        <Dropdown
          icon={Users}
          label="My Team"
          open={open.team}
          onToggle={() => toggle("team")}
          collapsed={collapsed}
        >
          <SubItem label="Create Team" />
          <SubItem label="Add Members" />
          <SubItem label="Manage Teams" />
        </Dropdown>

        {/* PROJECTS */}
        <Dropdown
          icon={Folder}
          label="My Projects"
          open={open.projects}
          onToggle={() => toggle("projects")}
          collapsed={collapsed}
        >
          <SubItem label="Active Projects" />
        </Dropdown>

        {/* GROWTH */}
        <Dropdown
          icon={TrendingUp}
          label="Growth Tools"
          open={open.growth}
          onToggle={() => toggle("growth")}
          collapsed={collapsed}
        >
          <SubItem label="Analytics & Earnings" />
          <SubItem label="Boost Listings" />
        </Dropdown>

        {/* SETTINGS */}
        <MenuItem
          icon={Settings}
          label="Settings"
          collapsed={collapsed}
          onClick={() => setShowSettings(true)}
        />
      </div>

      {/* ================= RIGHT SETTINGS ================= */}
      {showSettings && !collapsed && (
        <div className="w-72 bg-white border-r">
          {settingsMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSetting(item.id);
                onChange?.(item.id);
              }}
              className={`w-full text-left px-8 py-4 text-sm font-medium
                ${
                  activeSetting === item.id
                    ? "bg-[#CEFF1B] text-black"
                    : "hover:bg-gray-100 text-gray-900"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= COMPONENTS ================= */

function MenuItem({ icon: Icon, label, onClick, collapsed }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-3
        w-full py-2
        text-sm font-medium text-gray-800
        hover:bg-gray-100 rounded-md
      "
    >
      <Icon size={18} className="shrink-0" />
      {!collapsed && <span>{label}</span>}
    </button>
  );
}

function Dropdown({ icon: Icon, label, open, onToggle, children, collapsed }) {
  return (
    <div className="mt-2">
      <button
        onClick={!collapsed ? onToggle : undefined}
        className="
          flex items-center justify-between
          w-full py-2
          text-sm font-medium text-gray-800
          hover:bg-gray-100 rounded-md
        "
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className="shrink-0" />
          {!collapsed && <span>{label}</span>}
        </div>

        {!collapsed && (
          <ChevronDown
            size={16}
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {!collapsed && open && (
        <div className="ml-7 mt-2 space-y-2">{children}</div>
      )}
    </div>
  );
}

function SubItem({ label }) {
  return (
    <div className="text-sm text-gray-700 cursor-pointer hover:text-black">
      {label}
    </div>
  );
}

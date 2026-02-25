import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, X, Eye } from "lucide-react";

import "../../../pages/InReviewLight.css";
import "./TeamProfileLight.css";
import "./ManageTeam.css";
import NavbarLight from "../../../components/layout/UserNavbar";
import Sidebar from "../../../components/layout/Sidebar";
import "../../../Darkuser.css";

const ManageTeam = (props) => {
    const navigate = useNavigate();
    const [theme, setTheme] = typeof props.theme === "string" && typeof props.setTheme === "function"
        ? [props.theme, props.setTheme]
        : useState("light");

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [activeSetting, setActiveSetting] = useState("basic");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownChange = (isOpen) => setIsDropdownOpen(isOpen);
    const handleSectionChange = (id) => {
        setActiveSetting(id);
    };

    React.useEffect(() => {
        setSidebarOpen(false);
    }, []);

    const teams = [
        {
            id: 1,
            name: "Design Systems Collective",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            members: 7,
            listings: 6,
            projects: 1,
        },
        {
            id: 2,
            name: "Design Systems Collective",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            members: 7,
            listings: 6,
            projects: 1,
        },
        {
            id: 3,
            name: "Design Systems Collective",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            members: 7,
            listings: 6,
            projects: 1,
        }
    ];

    return (
        <div className={`manage-team-page user-page ${theme || "light"} min-h-screen relative overflow-hidden`}>
            {/* NAVBAR */}
            <NavbarLight
                className="create-team-navbar"
                toggleSidebar={() => setSidebarOpen((p) => !p)}
                theme={theme}
                onDropdownChange={handleDropdownChange}
            />

            <div className="pt-[85px] flex relative z-10">
                {/* SIDEBAR */}
                <Sidebar
                    expanded={sidebarOpen}
                    setExpanded={setSidebarOpen}
                    showSettings={showSettings}
                    setShowSettings={setShowSettings}
                    activeSetting={activeSetting}
                    onSectionChange={handleSectionChange}
                    theme={theme}
                    setTheme={setTheme}
                />

                {/* MAIN CONTENT WRAPPER */}
                <div className="relative flex-1 min-w-5 overflow-hidden">
                    {/* Scrollable Area */}
                    <div className="relative z-10 overflow-y-auto h-[calc(100vh-85px)]">
                        <main className={`manage-team-main p-6 lg:p-10 ${isDropdownOpen ? "blurred" : ""} w-full min-w-0 max-w-[1400px] mx-auto`}>

                            <div className="mb-8">
                                <h1 className="text-2xl md:text-3xl font-bold dark:text-white mb-2 text-[#2A2A2A]">My Teams</h1>
                                <p className="text-gray-500 dark:text-gray-400">View, edit, and manage all your teams.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {teams.map((team) => (
                                    <div key={team.id} className="manage-team-card flex gap-4 md:gap-5">

                                        {/* Avatar (Left) */}
                                        <div className="flex-shrink-0">
                                            <img src={team.avatar} alt={team.name} className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full object-cover" />
                                        </div>

                                        {/* Content (Right) */}
                                        <div className="flex-1 flex flex-col">
                                            {/* Header */}
                                            <h3 className="manage-team-title font-medium text-[15px] md:text-base mb-4">{team.name}</h3>

                                            {/* Stats */}
                                            <div className="flex items-center gap-2 md:gap-3 mb-4">
                                                <div className="manage-team-stat flex-1 flex flex-col items-center justify-center py-2.5 rounded-xl border border-gray-100 dark:border-[#333]">
                                                    <span className="manage-team-number font-semibold text-lg md:text-xl leading-none mb-1">{team.members}</span>
                                                    <span className="manage-team-label text-[10px] font-medium capitalize">Members</span>
                                                </div>
                                                <div className="manage-team-stat flex-1 flex flex-col items-center justify-center py-2.5 rounded-xl border border-gray-100 dark:border-[#333]">
                                                    <span className="manage-team-number font-semibold text-lg md:text-xl leading-none mb-1">{team.listings}</span>
                                                    <span className="manage-team-label text-[10px] font-medium capitalize">Listings</span>
                                                </div>
                                                <div className="manage-team-stat flex-1 flex flex-col items-center justify-center py-2.5 rounded-xl border border-gray-100 dark:border-[#333]">
                                                    <span className="manage-team-number font-semibold text-lg md:text-xl leading-none mb-1">{team.projects}</span>
                                                    <span className="manage-team-label text-[10px] font-medium capitalize">Projects</span>
                                                </div>
                                            </div>

                                            {/* Actions Container */}
                                            <div className="flex flex-col gap-2.5">
                                                {/* Edit & Deactivate */}
                                                <div className="flex items-center gap-2.5">
                                                    <button className="manage-team-action-btn flex-1 flex items-center justify-center gap-1 py-2 rounded-[10px] sm:rounded-[7px] text-[10px] transition-colors border">
                                                        <ExternalLink className="w-3.5 h-3.5" /> Edit Team
                                                    </button>
                                                    <button className="manage-team-action-btn flex-1 flex items-center justify-center gap-1 py-2 rounded-[10px] sm:rounded-[7px] text-[10px] transition-colors border">
                                                        <X className="w-3.5 h-3.5" /> Deactivate Team
                                                    </button>
                                                </div>
                                                {/* View Team */}
                                                <button
                                                    onClick={() => navigate('/team-profile')}
                                                    className="manage-team-view-btn w-full flex items-center justify-center border-1 border-black gap-2 py-2 rounded-[10px] sm:rounded-[7px] text-[10px] font-medium transition-colors"
                                                >
                                                    <Eye className="w-3.5 h-3.5" /> View Team
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTeam;

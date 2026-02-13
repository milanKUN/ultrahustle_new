import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ================= PAGES ================= */
import Home from "./features/landing/pages/Home";
import User from "./features/dashboard/pages/User";
import DesktopLogin from "./features/auth/pages/DesktopLogin";
import DesktopSignup from "./features/auth/pages/DesktopSignup";
import DesktopForgotPassword from "./features/auth/pages/DesktopForgotPassword";
import DesktopEmailVerification from "./features/auth/pages/DesktopEmailVerification";
import ClientOnboarding from "./features/onboarding/pages/ClientOnboarding";
import CreatorOnboarding from "./features/onboarding/pages/CreatorOnboarding";

/* ================ COMPONENTS ================= */
import RoleSelection from "./features/onboarding/components/ForClient/RoleSelection";
import WorkTypeSelection from "./features/onboarding/components/ForClient/WorkTypeSelection";
import GoalsSelection from "./features/onboarding/components/ForClient/GoalsSelection";
import ClientNeeds from "./features/onboarding/components/ForClient/ClientNeeds";
import BusinessDetails from "./features/onboarding/components/ForClient/BusinessDetails";
import SetupWorkspace from "./features/onboarding/components/ForClient/SetupWorkspace";
import CreatorRoleSelection from "./features/onboarding/components/ForCreator/CreatorRoleSelection";
import WorkTypeSelectionForCreator from "./features/onboarding/components/ForCreator/WorkTypeSelectionForCreator";
import CreatorGoalsSelection from "./features/onboarding/components/ForCreator/CreatorGoalsSelection";
import CreatorNeeds from "./features/onboarding/components/ForCreator/CreatorNeeds";
import SetupWorkspaceForCreator from "./features/onboarding/components/ForCreator/SetupWorkspaceForCreator";
import CreatorProfileSetup from "./features/onboarding/components/ForCreator/CreatorProfileSetup";
import ClientProfileSetup from "./features/onboarding/components/ForClient/ClientProfileSetup";
import CreateTeam from "./features/dashboard/pages/CreateTeam";
import TeamProfileLight from "./features/dashboard/pages/TeamProfileLight";
import UserProfile from "./features/dashboard/pages/UserProfile";
import SoloContractListing from "./features/marketplace/pages/SoloContractListing";

import MilestonesPage from "./features/marketplace/pages/MilestonesPage";
import SoloMilestonesPage from "./features/marketplace/pages/SoloMilestonesPage";
import CreateServiceListing from "./features/marketplace/pages/CreateServiceListing";


export default function App() {
  const THEME_KEY = "user-theme";

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  useEffect(() => {
    // body classes safe way
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<Home />} />

          {/* PROFILE */}
          <Route
            path="/setting"
            element={<User theme={theme} setTheme={setTheme} />}
          />

          {/* AUTH */}
          <Route path="/desktop-forgot-password" element={<DesktopForgotPassword />} />
          <Route path="/desktop-email-verification" element={<DesktopEmailVerification />} />
          <Route path="/login" element={<DesktopLogin />} />
          <Route path="/signup" element={<DesktopSignup />} />
          <Route path="/client-onboarding" element={<ClientOnboarding />} />
          <Route path="/creator-onboarding" element={<CreatorOnboarding />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/work-type-selection" element={<WorkTypeSelection />} />
          <Route path="/goals-selection" element={<GoalsSelection />} />
          <Route path="/client-needs" element={<ClientNeeds />} />
          <Route path="/business-details" element={<BusinessDetails />} />
          <Route path="/setup-workspace" element={<SetupWorkspace />} />
          <Route path="/creator-role-selection" element={<CreatorRoleSelection />} />
          <Route path="/creator-work-type-selection" element={<WorkTypeSelectionForCreator />} />
          <Route path="/creator-goals-selection" element={<CreatorGoalsSelection />} />
          <Route path="/creator-needs" element={<CreatorNeeds />} />
          <Route path="/creator-setup-workspace" element={<SetupWorkspaceForCreator />} />
          <Route path="/creator-profile-setup" element={<CreatorProfileSetup />} />
          <Route path="/client-profile-setup" element={<ClientProfileSetup />} />
          <Route path="/create-team" element={<CreateTeam theme={theme} setTheme={setTheme} />} />
          <Route path="/team-profile" element={<TeamProfileLight />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/solo-contracts-listing" element={<SoloContractListing theme={theme} setTheme={setTheme} />} />
          <Route path="/milestones" element={<MilestonesPage theme={theme} setTheme={setTheme} />} />
          <Route path="/solo-milestones" element={<SoloMilestonesPage theme={theme} setTheme={setTheme} />} />
          <Route path="/create-service-listing" element={<CreateServiceListing theme={theme} setTheme={setTheme} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

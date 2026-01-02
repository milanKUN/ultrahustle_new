import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import LoginPage from "./pages/LoginPage";
import MobileLogin from "./components/ForMobileview/MobileLogin";
import MobileSignup from "./components/ForMobileview/MobileSignup";
import ForgotPassword from "./components/ForMobileview/ForgotPassword";
import CodeSent from "./components/ForMobileview/CodeSent";
import Succes from "./components/ForMobileview/Succes";
import ConfirmPassword from "./components/ForMobileview/ConfirmPassword";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";
import ClientOnboarding from "./pages/ClientOnboarding";
import CreatorOnboarding from "./pages/CreatorOnboarding";
import RoleSelection from "./components/ForClient/RoleSelection";
import WorkTypeSelection from "./components/ForClient/WorkTypeSelection";
import GoalsSelection from "./components/ForClient/GoalsSelection";
import ClientNeeds from "./components/ForClient/ClientNeeds";
import BusinessDetails from "./components/ForClient/BusinessDetails";
import SetupWorkspace from "./components/ForClient/SetupWorkspace";
import CreatorRoleSelection from "./components/ForCreator/CreatorRoleSelection";
import WorkTypeSelectionForCreator from "./components/ForCreator/WorkTypeSelectionForCreator";
import CreatorGoalsSelection from "./components/ForCreator/CreatorGoalsSelection";
import CreatorNeeds from "./components/ForCreator/CreatorNeeds";
import CreatorProfileSetup from "./components/ForCreator/CreatorProfileSetup";
import SetupWorkspaceForCreator from "./components/ForCreator/SetupWorkspaceForCreator";
import MobileHome from "./pages/MobileHome";
import UserDashboard from "./components/UserProfile/UserDashboard";
import NewUsername from "./components/ForMobileview/NewUsername";

export default function App() {

  // ================== ANIMATION DISABLED ==================
  /*
  useEffect(() => {
    const rootId = "global-green-glow-root";
    let root = document.getElementById(rootId);

    if (!root) {
      root = document.createElement("div");
      root.id = rootId;
      root.style.position = "fixed";
      root.style.inset = "0";
      root.style.pointerEvents = "none";
      root.style.zIndex = "5";
      document.body.appendChild(root);
    }

    const blob = document.createElement("div");
    blob.className = "green-blob green-visible";
    root.appendChild(blob);

    const blob2 = document.createElement("div");
    blob2.className = "green-blob-2 green-visible";
    root.appendChild(blob2);

    const positions = [
      { x: "12vw", y: "14vh" },
      { x: "78vw", y: "18vh" },
      { x: "82vw", y: "72vh" },
      { x: "18vw", y: "76vh" },
      { x: "50vw", y: "45vh" },
    ];

    let i = 0;

    blob.style.left = positions[0].x;
    blob.style.top = positions[0].y;

    blob2.style.left = positions[2].x;
    blob2.style.top = positions[2].y;

    const interval = setInterval(() => {
      const p1 = positions[i % positions.length];
      const p2 = positions[(i + 2) % positions.length];

      blob.style.left = p1.x;
      blob.style.top = p1.y;

      blob2.style.left = p2.x;
      blob2.style.top = p2.y;

      i++;
    }, 5200);

    return () => {
      clearInterval(interval);
      blob.remove();
      blob2.remove();
    };
  }, []);
  */
  // ========================================================

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile" element={<User />} />
        <Route path="/mobile-home" element={<MobileHome />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginmobile" element={<MobileLogin />} />
        <Route path="/signupmobile" element={<MobileSignup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newusername" element={<NewUsername />} />
        <Route path="/codesent" element={<CodeSent />} />
        <Route path="/Succes" element={<Succes />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/client-onboarding" element={<ClientOnboarding />} />
        <Route path="/creator-onboarding" element={<CreatorOnboarding />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/work-type-selection" element={<WorkTypeSelection />} />
        <Route path="/goals-selection" element={<GoalsSelection />} />
        <Route path="/client-needs" element={<ClientNeeds />} />
        <Route path="/business-details" element={<BusinessDetails />} />
        <Route path="/setup-workspace" element={<SetupWorkspace />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route
          path="/creator-role-selection"
          element={<CreatorRoleSelection />}
        />
        <Route
          path="/creator-work-type-selection"
          element={<WorkTypeSelectionForCreator />}
        />
        <Route
          path="/creator-goals-selection"
          element={<CreatorGoalsSelection />}
        />
        <Route path="/creator-needs" element={<CreatorNeeds />} />
        <Route
          path="/creator-setup-workspace"
          element={<SetupWorkspaceForCreator />}
        />
        <Route
          path="/creator-profile-setup"
          element={<CreatorProfileSetup />}
        />
      </Routes>
    </Router>
  );
}

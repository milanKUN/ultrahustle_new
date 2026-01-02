import React, { useRef } from "react";
import UserNavbar from "../components/UserNavbar";
import Sidebar from "../components/Sidebar";

import MyProfile from "../components/UserProfile/MyProfie";
import PersonalInfo from "../components/UserProfile/PersonalInfo";
import Security from "../components/UserProfile/Security";
import Notification from "../components/UserProfile/Notification";
import Payments from "../components/UserProfile/Payments";
import Veriffication from "../components/UserProfile/Veriffication";
import ConnectedApps from "../components/UserProfile/ConnectedApps";
import DeleteAccount from "../components/UserProfile/DeleteAccount";

function User() {
  const refs = {
    profile: useRef(null),
    account: useRef(null),
    security: useRef(null),
    notifications: useRef(null),
    payments: useRef(null),
    veriffication: useRef(null),
    apps: useRef(null),
    delete: useRef(null),
  };

  const scrollToSection = (id) => {
    refs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="user-root" className="min-h-screen bg-[#C4C4C4]">
      <UserNavbar />

      <div className="flex pt-16">
        {/* SIDEBAR */}
        <Sidebar onChange={scrollToSection} active={Object.keys(refs).find(key => refs[key].current && refs[key].current === document.activeElement)} />

        {/* CONTENT – ALL SECTIONS ALWAYS RENDERED */}
        <div className="flex-1 p-8 space-y-24">
          <section ref={refs.profile}>
            <MyProfile />
          </section>

          <section ref={refs.account}>
            <PersonalInfo />
          </section>

          <section ref={refs.security}>
            <Security />
          </section>

          <section ref={refs.notifications}>
            <Notification />
          </section>

          <section ref={refs.payments}>
            <Payments />
          </section>

          <section ref={refs.veriffication}>
            <Veriffication />
          </section>

          <section ref={refs.apps}>
            <ConnectedApps />
          </section>

          <section ref={refs.delete}>
            <DeleteAccount />
          </section>
        </div>
      </div>
    </div>
  );
}

export default User;

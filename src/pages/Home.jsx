import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import NewWayToWork from "../components/NewWayToWork";
import WhyStandsApart from "../components/WhyStandsApart";
import UltraHustleAdvantage from "../components/UltraHustleAdvantage";
import GlobalMovement from "../components/GlobalMovement";
import ResultsThatSpeak from "../components/ResultsThatSpeak";
import VisionMeetsAction from "../components/VisionMeetsAction";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // --- Remove any navbar looping classes that may create static green spots ---
    // Non-destructive: only adds a stylesheet rule that hides the problematic elements
    const styleId = "hide-navbar-egg-loops";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = `
        /* Hide navbar egg loop visuals (they caused the 3 static green spots) */
        .navbar-top-egg-green-loop,
        .navbar-top-egg-green-visible,
        .navbar-top-egg-green { display: none !important; }
        .navbar-anim-text-loop { animation: none !important; color: inherit !important; }
      `;
      document.head.appendChild(s);
      console.log("[green-glow] navbar egg loops hidden by CSS rule");
    }

    // --- Create global glow container directly under <body> so nothing hides it ---
    const containerId = "global-green-glow-root";
    let root = document.getElementById(containerId);
    if (!root) {
      root = document.createElement("div");
      root.id = containerId;
      // minimal inline positioning to ensure placement immediately
      root.style.position = "fixed";
      root.style.inset = "0";
      root.style.pointerEvents = "none";
      root.style.zIndex = "999"; // high but still behind any explicit z-1000 modals
      document.body.appendChild(root);
    }

    // remove existing blobs (cleanup from previous hot reloads)
    const existingA = root.querySelector(".green-blob");
    const existingB = root.querySelector(".green-blob-2");
    if (existingA) existingA.remove();
    if (existingB) existingB.remove();

    // create two blobs
    const blob = document.createElement("div");
    blob.className = "green-blob green-hidden";
    root.appendChild(blob);

    const blob2 = document.createElement("div");
    blob2.className = "green-blob-2 green-hidden";
    root.appendChild(blob2);

    // positions to cycle through (percentage of viewport)
    const positions = [
      { x: "12vw", y: "12vh" }, // top-left
      { x: "78vw", y: "12vh" }, // top-right
      { x: "78vw", y: "78vh" }, // bottom-right
      { x: "12vw", y: "78vh" }, // bottom-left
      { x: "50vw", y: "15vh" }, // center-top
      { x: "18vw", y: "50vh" }, // left-mid
      { x: "82vw", y: "50vh" }, // right-mid
      { x: "50vw", y: "72vh" }, // center-bottom
      { x: "50vw", y: "50vh" }, // center
    ];

    // movement control
    let idx = 0;
    const intervalMs = 5200;
    const visibleHold = 2600;

    // helper to move and show
    const showAt = (el, pos, delay = 0) => {
      setTimeout(() => {
        el.style.left = pos.x;
        el.style.top = pos.y;
        el.classList.remove("green-hidden");
        el.classList.add("green-visible");
      }, delay);
    };

    const hideAt = (el, delay = 0) => {
      setTimeout(() => {
        el.classList.remove("green-visible");
        el.classList.add("green-hidden");
      }, delay);
    };

    // initial quick show so user sees something on load
    showAt(blob, positions[0], 200);
    showAt(blob2, positions[2], 500);
    hideAt(blob, visibleHold);
    hideAt(blob2, visibleHold + 400);

    const loopId = setInterval(() => {
      idx = (idx + 1) % positions.length;

      // main blob:
      showAt(blob, positions[idx], 0);
      hideAt(blob, visibleHold);

      // secondary blob offset for depth
      const idx2 = (idx + 3) % positions.length;
      showAt(blob2, positions[idx2], 900);
      hideAt(blob2, visibleHold + 500);
    }, intervalMs);

    console.log("[green-glow] started loop, container:", root);

    // debugging: expose control on window for manual testing
    window._greenGlows = {
      showNow: (i = 0) => {
        const p = positions[i % positions.length];
        showAt(blob, p, 0);
        hideAt(blob, visibleHold);
      },
      stop: () => clearInterval(loopId),
    };

    return () => {
      clearInterval(loopId);
      if (root && root.parentNode) {
        // remove blobs only, keep root for HMR safety
        const a = root.querySelector(".green-blob");
        const b = root.querySelector(".green-blob-2");
        if (a) a.remove();
        if (b) b.remove();
      }
    };
  }, []);

  return (
    <div
     className="  min-h-screen  relative  overflow-hidden  bg-cover bg-center  bg-no-repeat bg-fixed bg-gradient-to-br from-[#cfd3d6] via-[#d9dcde] to-[#e6e8e9]" style={{  }}>
      {/* NOTE: glow appended to document.body by effect above */}
      <div className="relative z-30">
        <Navbar />
        <div className="h-32 bg-gradient-to-r from-[#D5D5D6] via-[#BBBCBC] to-[#A4A5A4]" />
        <Hero />
        <ProblemSolution />
        <NewWayToWork />
        <WhyStandsApart />
        <UltraHustleAdvantage />
        <GlobalMovement />
        <ResultsThatSpeak />
        <VisionMeetsAction />
        <Footer />
      </div>
    </div>
  );
}

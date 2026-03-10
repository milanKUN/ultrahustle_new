// ... same imports
import React, { useMemo, useState, useRef, useEffect } from "react";
import "./MilestonesPage.css";
import "./SoloContractListing.css"; // Added
import UserNavbar from "../../../components/layout/UserNavbar";
import Sidebar from "../../../components/layout/Sidebar";
import "../../../Darkuser.css";

export default function MilestoneBoard({ theme = "light", setTheme }) {
  const topTabs = ["Milestones", "Contract", "Details"];
  const statusTabs = [
    "All",
    "Open",
    "In-Progress",
    "Approved",
    "Delivered",
    "Overdue",
  ];

  const [activeTop, setActiveTop] = useState("Milestones");
  const [activeStatus, setActiveStatus] = useState("All");

  // ✅ VIEW ONLY STATE
  const [isViewOnly, setIsViewOnly] = useState(true);

  const contractId = useMemo(() => "AUTO-123456", []);

  const [form, setForm] = useState({
    title: "",
    contractType: "",
    soloTeam: false,
    clientUsername: "",
    clientFullName: "",
    clientEmail: "",
    clientCompany: "",
    creatorUsername: "",
    creatorFullName: "",
    creatorEmail: "",
    creatorCompany: "",
    projectSummary: "",
    outOfScope: "",
    initialDeliveryDeadline: "",
    clientReviewWindow: "",
    includedRevisionRounds: "",
    revisionTurnaroundDays: "",
    lateDeliveryConsequence: "",
    deliverySLA: "",
    communicationSLA: "",
    revisionSLA: "",
    qualityStandards: "",
    clientResponsibilities: "",
    creatorResponsibilities: "",
    paymentType: "",
    projectCost: "",
    escrowRules: "",
    finalClientName: "",
    finalCreatorName: "",
    clientAgree: false,
    creatorAgree: false,
    teamPayouts: [
      { id: "1", name: "Member A", role: "Design", percentage: "80%" },
      { id: "2", name: "Member B", role: "Dev", percentage: "60%" },
      { id: "3", name: "Member C", role: "QA", percentage: "50%" },
    ],
  });

  const setFormField = (key, value) => setForm((p) => ({ ...p, [key]: value }));
  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const onToggle = (key) => () => setForm((p) => ({ ...p, [key]: !p[key] }));

  const handlePayoutChange = (id, field, value) => {
    setForm((p) => ({
      ...p,
      teamPayouts: p.teamPayouts.map((pay) =>
        pay.id === id ? { ...pay, [field]: value } : pay
      ),
    }));
  };

  const [deliverables, setDeliverables] = useState([
    { id: crypto?.randomUUID?.() || String(Date.now()), title: "", format: "", qty: "", acceptance: "" }
  ]);

  const updateDeliverable = (index, key, value) => {
    setDeliverables((p) =>
      p.map((d, i) => (i === index ? { ...d, [key]: value } : d))
    );
  };

  const addDeliverable = () => {
    setDeliverables((p) => [
      ...p,
      {
        id: crypto?.randomUUID?.() || String(Date.now()),
        title: "", format: "", qty: "", acceptance: "",
      },
    ]);
  };

  const removeDeliverable = (id) => {
    if (deliverables.length <= 1) {
      setDeliverables([{ id: crypto?.randomUUID?.() || String(Date.now()), title: "", format: "", qty: "", acceptance: "" }]);
      return;
    }
    setDeliverables((p) => p.filter((d) => d.id !== id));
  };

  const [milestones, setMilestones] = useState([
    { id: crypto?.randomUUID?.() || String(Date.now()), name: "Milestone 1", amount: "", deadline: "" }
  ]);

  const updateMilestone = (index, key, value) => {
    setMilestones((p) =>
      p.map((m, i) => (i === index ? { ...m, [key]: value } : m))
    );
  };

  const addMilestone = () => {
    setMilestones((p) => [
      ...p,
      {
        id: crypto?.randomUUID?.() || String(Date.now()),
        name: `Milestone ${p.length + 1}`,
        amount: "",
        deadline: "",
      },
    ]);
  };

  const removeMilestone = (id) => {
    if (milestones.length <= 1) return;
    setMilestones((p) => p.filter((m) => m.id !== id));
  };

  const activityLog = useMemo(
    () => [
      { ts: "2025-11-20 10:00", actor: "Client @acme_corp", action: "Contract Created", details: "Initial draft submitted" },
      { ts: "2025-11-21 14:30", actor: "Creator @alex_design", action: "Terms Negotiated", details: "Updated milestones and delivery timeline" },
      { ts: "2025-11-22 09:15", actor: "Client @acme_corp", action: "Contract Approved", details: "Ready for escrow funding" }
    ],
    []
  );

  const [openSelect, setOpenSelect] = useState(null);
  const selectRefs = useRef({});
  const [calendarConfig, setCalendarConfig] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openSelect && selectRefs.current[openSelect] && !selectRefs.current[openSelect].contains(event.target)) {
        setOpenSelect(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSelect]);

  const toggleSelect = (id) => {
    if (isViewOnly) return;
    setOpenSelect(openSelect === id ? null : id);
  };

  const handleSelectValue = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setOpenSelect(null);
  };

  const SoloSelect = ({ id, label, value, options, placeholder = "Select one", onChange }) => {
    const isOpen = openSelect === id;
    const selectedOption = options.find((opt) => opt.value === value);

    return (
      <div className="cnc-field" ref={(el) => (selectRefs.current[id] = el)}>
        <label className="cnc-label">{label}</label>
        <div className={`onboarding-custom-select ${isOpen ? "active" : ""} ${isViewOnly ? "disabled" : ""}`}>
          <div
            className={`onboarding-selected-option ${isOpen ? "open" : ""}`}
            onClick={() => toggleSelect(id)}
          >
            <span className={!value ? "opacity-70" : ""}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="onboarding-arrow">▼</span>
          </div>

          {!isViewOnly && isOpen && (
            <ul className="onboarding-options-list">
              {options.map((opt) => (
                <li
                  key={opt.value}
                  className={value === opt.value ? "active" : ""}
                  onClick={() => onChange(opt.value)}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const DateInput = ({ label, value, onOpen }) => (
    <div className="cnc-field">
      {label && <label className="cnc-label">{label}</label>}
      <div
        className={`cnc-input cnc-dateInputWrap ${isViewOnly ? "disabled" : ""}`}
        onClick={() => !isViewOnly && onOpen()}
        tabIndex="0"
      >
        <span className={!value ? "opacity-70" : ""}>
          {value || "DD-MM-YYYY"}
        </span>
        <span className="cnc-dateIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
      </div>
    </div>
  );

  // Existing dropdown
  const [projectOpen, setProjectOpen] = useState(false);
  const [projectValue] = useState("Full project");
  const projectRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (projectRef.current && !projectRef.current.contains(e.target)) {
        setProjectOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSetting, setActiveSetting] = useState("basic");

  React.useEffect(() => {
    setSidebarOpen(true);
    setShowSettings(false);
  }, []);

  const data = useMemo(
    () => ({
      completed: 1,
      total: 5,
      startedAt: "Thu Nov 20 2025",
      targetAt: "Sat Jan 10 2026",
      revisionsUsed: 2,
      revisionsTotal: 3,
      nextActionTitle: "Deliver Milestone 2 by Fri",
      nextActionDate: "Dec 26 2025",
      notice:
        "Milestone 2 delivery due in 24 hours. Please update your client if you expect delays.",
    }),
    [],
  );

  const progressPct = Math.round((data.completed / data.total) * 100);

  const feed = useMemo(
    () => [
      {
        title: "Milestone-1",
        pill: "Creator",
        ts: "Nov 18, 2025, 02:30 PM",
        desc: "Contract initiated and terms accepted by both parties",
        tags: ["Milestone: Design phase"],
        chat: "Discuss in chat",
        amount: "$100000",
      },
      {
        title: "Escrow funded",
        pill: "Client",
        ts: "Nov 18, 2025, 02:30 PM",
        desc: "Client funded escrow for Milestone",
        tags: ["Milestone: Design phase"],
        chat: "Discuss in chat",
      },
      {
        title: "Milestone 1 delivered",
        pill: "Creator",
        ts: "Dec 09, 2025, 06:40 PM",
        desc: "Creator submitted files for Home page design and Dashboard UI",
        tags: ["Milestone: Design phase", "Deadline: 2025-12-15"],
        files: ["Home.fig", "dashboard.fig", "preview.pdf"],
        chat: "Discuss in chat",
        amount: "$100000",
        highlight: true,
      },
      {
        title: "Revision requested",
        pill: "Client",
        ts: "Nov 18, 2025, 02:30 PM",
        desc: "Client requested changes on hero section and mobile menu",
        tags: ["Milestone: Design phase", "Revision round: 1 of 3"],
        files: ["Annotated.pdf"],
        chat: "Discuss in chat",
        footerBadge: "Revision Accepted",
      },
      {
        title: "Milestone 1 approved and released",
        pill: "Client",
        ts: "Dec 09, 2025, 06:40 PM",
        desc: "Creator submitted files for Home page design and Dashboard UI",
        tags: ["Milestone: Design phase", "Deadline: 2025-12-15"],
        chat: "Discuss in chat",
        amount: "$100000",
      },
      {
        title: "Revision delivered",
        pill: "Creator",
        ts: "Nov 18, 2025, 02:30 PM",
        desc: "Client requested changes on hero section and mobile menu",
        tags: ["Milestone: Design phase", "Revision round: 1 of 3"],
        files: ["hero_v2.fig", "Mobilemenu_v2.mov"],
        chat: "Discuss in chat",
      },
      {
        title: "Revision deliverd",
        pill: "Creator",
        ts: "Nov 18, 2025, 02:30 PM",
        desc: "Client requested changes on hero section and mobile menu",
        tags: ["Milestone: Design phase", "Revision round: 1 of 3"],
        files: ["hero_v2.fig", "Mobilemenu_v2.mov"],
        chat: "Discuss in chat",
      },
      {
        title: "Upcoming Milestone",
        pill: "Client",
        ts: "Dec 20, 2025, 10:00 AM",
        desc: "Planning for the next phase",
        tags: ["Milestone: Development"],
        chat: "Discuss in chat",
      },
      {
        title: "Project Update",
        pill: "Creator",
        ts: "Dec 21, 2025, 04:00 PM",
        desc: "Weekly progress report submitted",
        tags: ["Update"],
        chat: "Discuss in chat",
      },
    ],
    [],
  );

  // ✅ Details data (invoice screen)
  const details = useMemo(
    () => ({
      title: "Title",
      orderedFrom: "Name",
      deliveryDate: "Fri Dec 26 2025",
      orderNumber: "#123456789",
      orderDate: "Fri Dec 26 2025",

      orderRows: [{ item: "Name", qty: 1, duration: "2 days", price: "$100000" }],
      subtotal: "$100000",
      serviceFee: "$100",
      total: "$100100",

      extensionDate: "Fri Dec 26 2025",
      extensionRows: [
        { item: "Extend duration", qty: 1, duration: "1 day", price: "$100" },
      ],
      extensionTotal: "$100200",

      milestone: {
        amount: "$50000",
        deadline: "01-12-2026",
        platformFee: "$10000",
        netAmount: "$15000",
      },

      split: [
        { member: "Member A (Design)", pct: "40%", amount: "$50000" },
        { member: "Member B (Dev)", pct: "40%", amount: "$50000" },
        { member: "Member C (QA)", pct: "40%", amount: "$50000" },
      ],
    }),
    [],
  );

  return (
    <div className={`create-team-page user-page ${theme} min-h-screen relative overflow-hidden`}>
      <UserNavbar
        toggleSidebar={() => setSidebarOpen((p) => !p)}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="pt-[85px] flex relative z-10">
        <Sidebar
          expanded={sidebarOpen}
          setExpanded={setSidebarOpen}
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          activeSetting={activeSetting}
          onSectionChange={(id) => setActiveSetting(id)}
          theme={theme}
          setTheme={setTheme}
        />

        <div className="relative flex-1 min-w-5 overflow-hidden">
          <div className="relative z-10 overflow-y-auto h-[calc(100vh-85px)]">
            <div className="ms-wrap">
              {/* Top tabs */}
              <div className="ms-topbar">
                <div className="ms-seg">
                  {topTabs.map((t) => (
                    <button
                      key={t}
                      className={`ms-segBtn ${activeTop === t ? "active" : ""}`}
                      onClick={() => {
                        setActiveTop(t);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* ✅ CONTRACT TAB */}
              {activeTop === "Contract" && (
                <div className={`cnc-main w-full ms-contract-override ${isViewOnly ? "is-viewonly" : ""}`}>
                  <div className="cnc-wrap">
                    {/* Header */}
                    <div className="ms-contract-top mb-6">
                      <h1 className="cnc-title !mb-0">Main Contract</h1>

                      <div className="ms-contract-actions">
                        <button type="button" className="ms-ct-btn lime">
                          View PDF
                        </button>

                        <div
                          className={`ms-ct-btn lime outline active`}
                          style={{ cursor: 'default' }}
                        >
                          <span className="ms-eye">👁</span>
                          Only View
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      {isViewOnly && <div className="ms-ct-lockOverlay" style={{ zIndex: 100 }} />}

                      {/* Contract Basics */}
                      <div className="cnc-card">
                        <h2 className="cnc-card-title">Contract Basics</h2>
                        <div className="cnc-grid">
                          <div className="cnc-field">
                            <label className="cnc-label">Contract Title</label>
                            <input
                              className="cnc-input"
                              placeholder="Contract Title"
                              value={form.title}
                              onChange={onChange("title")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <div className="cnc-contract-type-box">
                              <div className="cnc-ct-left">
                                <span className="cnc-ct-title">Contract Type</span>
                                <span className="cnc-ct-desc">Solo/ Team service</span>
                              </div>
                              <div className="cnc-ct-right">
                                <span className={`cnc-ct-status ${!form.soloTeam ? "active" : ""}`}>Solo</span>
                                <button
                                  type="button"
                                  className={`cnc-switch ${form.soloTeam ? "is-on" : ""} ${isViewOnly ? "opacity-50 pointer-events-none" : ""}`}
                                  onClick={onToggle("soloTeam")}
                                  aria-pressed={form.soloTeam}
                                  aria-label="Solo/team toggle"
                                  disabled={isViewOnly}
                                >
                                  <span className="cnc-knob" />
                                </button>
                                <span className={`cnc-ct-status ${form.soloTeam ? "active" : ""}`}>Team</span>
                              </div>
                            </div>
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Contract ID</label>
                            <input className="cnc-input" value={contractId} readOnly />
                          </div>
                        </div>
                      </div>

                      {/* Parties Involved */}
                      <div className="cnc-parties-outer-box">
                        <h2 className="cnc-card-title cnc-title-standalone">Parties Involved</h2>
                        <div className="cnc-parties-wrapper">
                          <div className="cnc-subcard">
                            <div className="cnc-subTitle">Client</div>
                            <div className="cnc-subGrid">
                              <div className="cnc-field">
                                <label className="cnc-label">Client username</label>
                                <input
                                  className="cnc-input"
                                  placeholder="Client username"
                                  value={form.clientUsername}
                                  onChange={onChange("clientUsername")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              <div className="cnc-field">
                                <label className="cnc-label">Full name</label>
                                <input
                                  className="cnc-input"
                                  placeholder="Full name"
                                  value={form.clientFullName}
                                  onChange={onChange("clientFullName")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              <div className="cnc-field">
                                <label className="cnc-label">Email</label>
                                <input
                                  className="cnc-input"
                                  placeholder="Email"
                                  value={form.clientEmail}
                                  onChange={onChange("clientEmail")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              <div className="cnc-field">
                                <label className="cnc-label">Name and company</label>
                                <input
                                  className="cnc-input"
                                  placeholder="Name and company"
                                  value={form.clientCompany}
                                  onChange={onChange("clientCompany")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="cnc-subcard">
                            <div className="cnc-subTitle">
                              {form.soloTeam ? "Team Details" : "Service Provider"}
                            </div>
                            <div className="cnc-subGrid">
                              <div className="cnc-field">
                                <label className="cnc-label">
                                  {form.soloTeam ? "Team" : "Creator"} username
                                </label>
                                <input
                                  className="cnc-input"
                                  placeholder={form.soloTeam ? "Team username" : "Creator username"}
                                  value={form.creatorUsername}
                                  onChange={onChange("creatorUsername")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              <div className="cnc-field">
                                <label className="cnc-label">
                                  {form.soloTeam ? "Team" : "Creator"} full name
                                </label>
                                <input
                                  className="cnc-input"
                                  placeholder={form.soloTeam ? "Team full name" : "Full name"}
                                  value={form.creatorFullName}
                                  onChange={onChange("creatorFullName")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              <div className="cnc-field">
                                <label className="cnc-label">
                                  {form.soloTeam ? "Team" : "Creator"} email
                                </label>
                                <input
                                  className="cnc-input"
                                  placeholder={form.soloTeam ? "Team email" : "Email"}
                                  value={form.creatorEmail}
                                  onChange={onChange("creatorEmail")}
                                  readOnly={isViewOnly}
                                />
                              </div>
                              {!form.soloTeam && (
                                <div className="cnc-field">
                                  <label className="cnc-label">Name and company</label>
                                  <input
                                    className="cnc-input"
                                    placeholder="Country"
                                    value={form.creatorCompany}
                                    onChange={onChange("creatorCompany")}
                                    readOnly={isViewOnly}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Scope and Deliverables */}
                      <div className="cnc-card cnc-card--mt">
                        <h2 className="cnc-card-title">Scope and Deliverables</h2>
                        <div className="cnc-field">
                          <label className="cnc-label">Project Summary</label>
                          <textarea
                            className="cnc-textarea"
                            placeholder="Short explanation"
                            value={form.projectSummary}
                            onChange={onChange("projectSummary")}
                            readOnly={isViewOnly}
                          />
                        </div>

                        <div className="cnc-deliverables">
                          <div className="cnc-del-title">Deliverables</div>

                          {deliverables.map((d, index) => (
                            <div className="cnc-del-box" key={d.id}>
                              {!isViewOnly && (
                                <button
                                  type="button"
                                  className="cnc-del-box-remove"
                                  onClick={() => removeDeliverable(d.id)}
                                  title="Remove deliverable"
                                >
                                  ✕
                                </button>
                              )}
                              <div className="cnc-del-box-inputs">
                                <input
                                  className="cnc-input"
                                  placeholder="Title"
                                  value={d.title}
                                  onChange={(e) => updateDeliverable(index, "title", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                                <input
                                  className="cnc-input"
                                  placeholder="Format/file type"
                                  value={d.format}
                                  onChange={(e) => updateDeliverable(index, "format", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                                <input
                                  className="cnc-input"
                                  placeholder="Quantity"
                                  value={d.qty}
                                  onChange={(e) => updateDeliverable(index, "qty", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                                <input
                                  className="cnc-input"
                                  placeholder="Acceptance Criteria"
                                  value={d.acceptance}
                                  onChange={(e) => updateDeliverable(index, "acceptance", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                              </div>
                            </div>
                          ))}
                          {!isViewOnly && (
                            <button type="button" className="cnc-addBtn mt-2" onClick={addDeliverable}>
                              + Add More Deliverables
                            </button>
                          )}
                        </div>

                        <div className="cnc-field cnc-outScope">
                          <label className="cnc-label">Out of scope</label>
                          <textarea
                            className="cnc-textarea"
                            placeholder="Free text"
                            value={form.outOfScope}
                            onChange={onChange("outOfScope")}
                            readOnly={isViewOnly}
                          />
                        </div>
                      </div>

                      {/* Timeline and Revisions */}
                      <div className="cnc-card cnc-card--mt">
                        <h2 className="cnc-card-title">Timeline and Revisions</h2>
                        <div className="cnc-timelineGrid">
                          <DateInput
                            label="Initial delivery deadline"
                            value={form.initialDeliveryDeadline}
                            onOpen={() =>
                              setCalendarConfig({
                                value: form.initialDeliveryDeadline,
                                onSelect: (val) =>
                                  setFormField("initialDeliveryDeadline", val),
                              })
                            }
                          />

                          <SoloSelect
                            id="clientReviewWindow"
                            label="Client review window (1–7 days)"
                            value={form.clientReviewWindow}
                            options={[1, 2, 3, 4, 5, 6, 7].map((n) => ({
                              value: String(n),
                              label: `${n} day${n > 1 ? "s" : ""}`,
                            }))}
                            onChange={(val) => handleSelectValue("clientReviewWindow", val)}
                          />

                          <SoloSelect
                            id="includedRevisionRounds"
                            label="Included revision rounds"
                            value={form.includedRevisionRounds}
                            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
                              value: String(n),
                              label: String(n),
                            }))}
                            onChange={(val) => handleSelectValue("includedRevisionRounds", val)}
                          />

                          <SoloSelect
                            id="revisionTurnaroundDays"
                            label="Revision turnaround time (days)"
                            value={form.revisionTurnaroundDays}
                            options={[1, 2, 3, 4, 5, 7, 10, 14, 21, 30].map((n) => ({
                              value: String(n),
                              label: `${n} day${n > 1 ? "s" : ""}`,
                            }))}
                            onChange={(val) => handleSelectValue("revisionTurnaroundDays", val)}
                          />

                          <SoloSelect
                            id="lateDeliveryConsequence"
                            label="Late delivery consequence"
                            value={form.lateDeliveryConsequence}
                            options={[
                              { value: "discount_5", label: "5% discount" },
                              { value: "discount_10", label: "10% discount" },
                              { value: "refund_partial", label: "Partial refund" },
                              { value: "refund_full", label: "Full refund" },
                              { value: "extend_deadline", label: "Extend deadline" },
                            ]}
                            placeholder="Select"
                            onChange={(val) => handleSelectValue("lateDeliveryConsequence", val)}
                          />
                        </div>
                      </div>

                      {/* SLA Snapshot */}
                      <div className="cnc-card cnc-card--mt">
                        <h2 className="cnc-card-title">SLA Snapshot</h2>
                        <div className="cnc-slaGrid">
                          <div className="cnc-field">
                            <label className="cnc-label">Delivery SLA</label>
                            <input
                              className="cnc-input"
                              placeholder="Delivery SLA"
                              value={form.deliverySLA}
                              onChange={onChange("deliverySLA")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Communication SLA</label>
                            <input
                              className="cnc-input"
                              placeholder="Communication SLA"
                              value={form.communicationSLA}
                              onChange={onChange("communicationSLA")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Revision SLA</label>
                            <input
                              className="cnc-input"
                              placeholder="Revision SLA"
                              value={form.revisionSLA}
                              onChange={onChange("revisionSLA")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Quality standards</label>
                            <input
                              className="cnc-input"
                              placeholder="Quality standards"
                              value={form.qualityStandards}
                              onChange={onChange("qualityStandards")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Client responsibilities</label>
                            <input
                              className="cnc-input"
                              placeholder="Client responsibilities"
                              value={form.clientResponsibilities}
                              onChange={onChange("clientResponsibilities")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field">
                            <label className="cnc-label">Creator/team responsibilities</label>
                            <input
                              className="cnc-input"
                              placeholder="Creator/team responsibilities"
                              value={form.creatorResponsibilities}
                              onChange={onChange("creatorResponsibilities")}
                              readOnly={isViewOnly}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Payment and Escrow */}
                      <div className="cnc-card cnc-card--mt">
                        <h2 className="cnc-card-title">Payment and Escrow</h2>
                        <div className="cnc-payTop">
                          <SoloSelect
                            id="paymentType"
                            label="Payment Type"
                            value={form.paymentType}
                            options={[
                              { value: "fixed", label: "Fixed" },
                              { value: "milestone", label: "Milestone based" },
                              { value: "hourly", label: "Hourly" },
                            ]}
                            onChange={(val) => handleSelectValue("paymentType", val)}
                          />
                          <div className="cnc-field">
                            <label className="cnc-label">Project cost</label>
                            <input
                              className="cnc-input"
                              placeholder="$50000"
                              value={form.projectCost}
                              onChange={onChange("projectCost")}
                              readOnly={isViewOnly}
                            />
                          </div>
                          <div className="cnc-field cnc-span-all">
                            <label className="cnc-label">Escrow Rules</label>
                            <input
                              className="cnc-input"
                              placeholder="Funds lock before work starts. Release after approval or review expiry."
                              value={form.escrowRules}
                              onChange={onChange("escrowRules")}
                              readOnly={isViewOnly}
                            />
                          </div>
                        </div>

                        <div className="cnc-milestones">
                          <div className="cnc-del-title">Milestones</div>

                          {milestones.length > 0 && (
                            <div className="cnc-mil-header">
                              <label className="cnc-label">Milestone Name</label>
                              <label className="cnc-label">Amount</label>
                              <label className="cnc-label">Deadline</label>
                              <div />
                            </div>
                          )}

                          {milestones.map((m, index) => (
                            <div className="cnc-mil-row-wrapper" key={m.id}>
                              <div className="cnc-mil-grid">
                                <input
                                  className="cnc-input"
                                  placeholder={`Milestone ${index + 1}`}
                                  value={m.name}
                                  onChange={(e) => updateMilestone(index, "name", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                                <input
                                  className="cnc-input"
                                  placeholder="$1000"
                                  value={m.amount}
                                  onChange={(e) => updateMilestone(index, "amount", e.target.value)}
                                  readOnly={isViewOnly}
                                />
                                <DateInput
                                  label=""
                                  value={m.deadline}
                                  onOpen={() => setCalendarConfig({
                                    value: m.deadline,
                                    onSelect: (val) => updateMilestone(index, "deadline", val)
                                  })}
                                />
                                {!isViewOnly && (
                                  <button
                                    type="button"
                                    className="cnc-mil-row-remove"
                                    onClick={() => removeMilestone(m.id)}
                                    title="Remove milestone"
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                          {!isViewOnly && (
                            <button type="button" className="cnc-addBtn mt-2" onClick={addMilestone}>
                              + Add Milestone
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Team Payout Configuration (Conditional) */}
                      {form.soloTeam && (
                        <div className="cnc-card cnc-card--mt cnc-teamPayoutCard">
                          <h2 className="cnc-card-title">Team Payout Configuration</h2>
                          <div className="cnc-payout-list">
                            {form.teamPayouts.map((payout) => (
                              <div className="cnc-payout-row" key={payout.id}>
                                <div className="cnc-field">
                                  <input
                                    className="cnc-input cnc-payout-input"
                                    placeholder="Member Name"
                                    value={payout.name}
                                    onChange={(e) => handlePayoutChange(payout.id, "name", e.target.value)}
                                    readOnly={isViewOnly}
                                  />
                                </div>
                                <div className="cnc-field">
                                  <input
                                    className="cnc-input cnc-payout-input"
                                    placeholder="Role"
                                    value={payout.role}
                                    onChange={(e) => handlePayoutChange(payout.id, "role", e.target.value)}
                                    readOnly={isViewOnly}
                                  />
                                </div>
                                <div className="cnc-field">
                                  <input
                                    className="cnc-input cnc-payout-input"
                                    placeholder="Percentage"
                                    value={payout.percentage}
                                    onChange={(e) => handlePayoutChange(payout.id, "percentage", e.target.value)}
                                    readOnly={isViewOnly}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Final Confirmation Section */}
                      <div className="cnc-confirmArea cnc-card--mt">
                        <div className="cnc-confirmRow">
                          <div className="cnc-confirmCard">
                            <div className="cnc-confirmTitle">Final Confirmation (Client)</div>
                            <div className="cnc-field">
                              <label className="cnc-label">Full Name</label>
                              <input
                                className="cnc-input"
                                placeholder="Full Name"
                                value={form.finalClientName}
                                onChange={onChange("finalClientName")}
                                readOnly={isViewOnly}
                              />
                            </div>
                            <label className="cnc-checkRow">
                              <input
                                type="checkbox"
                                checked={form.clientAgree}
                                onChange={onToggle("clientAgree")}
                                disabled={isViewOnly}
                              />
                              <span>
                                I accept and agree to the <a href="#">terms and conditions</a>
                              </span>
                            </label>
                            <button type="button" className="cnc-primaryBtn" disabled={isViewOnly}>
                              Ready to fund escrow
                            </button>
                            <div className="cnc-confirmActions">
                              <button type="button" className="cnc-ghostBtn" disabled={isViewOnly}>Send for review</button>
                              <button type="button" className="cnc-ghostBtn" disabled={isViewOnly}>Edit Contract</button>
                            </div>
                          </div>

                          <div className="cnc-confirmCard">
                            <div className="cnc-confirmTitle">Final Confirmation (Team)</div>
                            <div className="cnc-field">
                              <label className="cnc-label">Team Name</label>
                              <input
                                className="cnc-input"
                                placeholder="Team Name"
                                value={form.finalCreatorName}
                                onChange={onChange("finalCreatorName")}
                                readOnly={isViewOnly}
                              />
                            </div>
                            <label className="cnc-checkRow">
                              <input
                                type="checkbox"
                                checked={form.creatorAgree}
                                onChange={onToggle("creatorAgree")}
                                disabled={isViewOnly}
                              />
                              <span>
                                I accept and agree to the <a href="#">terms and conditions</a>
                              </span>
                            </label>
                            <button type="button" className="cnc-primaryBtn" disabled={isViewOnly}>
                              Accept contract
                            </button>
                            <div className="cnc-confirmActions">
                              <button type="button" className="cnc-ghostBtn" disabled={isViewOnly}>Cancelled</button>
                              <button type="button" className="cnc-ghostBtn" disabled={isViewOnly}>Decline</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Log */}
                      <div className="cnc-card cnc-card--mt">
                        <h2 className="cnc-card-title">Activity Log</h2>
                        <div className="cnc-tableWrap">
                          <table className="cnc-table">
                            <thead>
                              <tr>
                                <th>Timestamp</th>
                                <th>Actor</th>
                                <th>Action</th>
                                <th>Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activityLog.map((r, idx) => (
                                <tr key={idx}>
                                  <td>{r.ts}</td>
                                  <td>{r.actor}</td>
                                  <td>{r.action}</td>
                                  <td>{r.details}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ✅ DETAILS TAB */}
              {activeTop === "Details" && (
                <div className="ms-details">
                  <div className="msd-head">
                    <h2 className="msd-title">{details.title}</h2>
                    <div className="msd-sub">
                      Ordered from <b>{details.orderedFrom}</b> &nbsp;·&nbsp;
                      Delivery date: {details.deliveryDate}
                    </div>
                    <div className="msd-muted">Ordered number {details.orderNumber}</div>
                  </div>

                  <div className="msd-card">
                    <div className="msd-cardHead">
                      <div className="msd-cardTitle">Your Order</div>
                      <div className="msd-cardDate">{details.orderDate}</div>
                    </div>

                    <div className="msd-table">
                      <div className="msd-tr msd-th">
                        <div>Item</div>
                        <div>Qty.</div>
                        <div>Duration</div>
                        <div className="right">Price</div>
                      </div>

                      {details.orderRows.map((r, i) => (
                        <div className="msd-tr" key={i}>
                          <div>{r.item}</div>
                          <div>{r.qty}</div>
                          <div>{r.duration}</div>
                          <div className="right">{r.price}</div>
                        </div>
                      ))}

                      <div className="msd-tr msd-sum">
                        <div className="span3">Subtotal</div>
                        <div className="right">{details.subtotal}</div>
                      </div>

                      <div className="msd-tr msd-sum">
                        <div className="span3">Service fee</div>
                        <div className="right">{details.serviceFee}</div>
                      </div>

                      <div className="msd-tr msd-total">
                        <div className="span3">Total</div>
                        <div className="right">{details.total}</div>
                      </div>
                    </div>
                  </div>

                  <div className="msd-card">
                    <div className="msd-cardHead">
                      <div className="msd-cardTitle">Order extension</div>
                      <div className="msd-cardDate">{details.extensionDate}</div>
                    </div>

                    <div className="msd-table">
                      <div className="msd-tr msd-th">
                        <div>Item</div>
                        <div>Qty.</div>
                        <div>Duration</div>
                        <div className="right">Price</div>
                      </div>

                      {details.extensionRows.map((r, i) => (
                        <div className="msd-tr" key={i}>
                          <div>{r.item}</div>
                          <div>{r.qty}</div>
                          <div>{r.duration}</div>
                          <div className="right">{r.price}</div>
                        </div>
                      ))}

                      <div className="msd-tr msd-total">
                        <div className="span3">Total</div>
                        <div className="right">{details.extensionTotal}</div>
                      </div>
                    </div>
                  </div>

                  <div className="msd-help">
                    If something appears to be missing or incorrect, please visit our{" "}
                    <a href="#" className="msd-link">
                      resolution center
                    </a>
                  </div>

                  <div className="msd-grid">
                    <div className="msd-card msd-mini">
                      <div className="msd-miniTitle">Milestone- details</div>
                      <div className="msd-miniRow">
                        <span>Amount</span>
                        <span>{details.milestone.amount}</span>
                      </div>
                      <div className="msd-miniRow">
                        <span>Deadline</span>
                        <span>{details.milestone.deadline}</span>
                      </div>
                      <div className="msd-miniRow">
                        <span>Platform fee 20% (demo)</span>
                        <span>{details.milestone.platformFee}</span>
                      </div>
                      <div className="msd-miniRow strong">
                        <span>Net amount:</span>
                        <span>{details.milestone.netAmount}</span>
                      </div>
                    </div>

                    <div className="msd-card msd-mini">
                      <div className="msd-miniTitle">Split</div>

                      <div className="msd-table">
                        <div className="msd-tr msd-th msd-splitHead">
                          <div>Members</div>
                          <div>Percentage</div>
                          <div className="right">Amount</div>
                        </div>

                        {details.split.map((r, i) => (
                          <div className="msd-tr" key={i}>
                            <div>{r.member}</div>
                            <div>{r.pct}</div>
                            <div className="right">{r.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ✅ MILESTONES TAB */}
              {activeTop === "Milestones" && (
                <>
                  <div className="ms-cards">
                    <div className="ms-card">
                      <div className="ms-cardTitle">Overall progress</div>
                      <div className="ms-bar">
                        <div className="ms-barFill" style={{ width: `${progressPct}%` }} />
                      </div>
                      <div className="ms-sub">
                        {data.completed} of {data.total} milestones completed
                      </div>
                    </div>

                    <div className="ms-card">
                      <div className="ms-cardTitle">Timeline</div>
                      <div className="ms-item">
                        ● Start date: <b>{data.startedAt}</b>
                      </div>
                      <div className="ms-item">
                        ○ End date: <b>{data.targetAt}</b>
                      </div>
                    </div>

                    <div className="ms-card">
                      <div className="ms-cardTitle">Revisions</div>
                      <div className="ms-item">
                        Used: <b>{data.revisionsUsed}</b> / {data.revisionsTotal}
                      </div>
                    </div>

                    <div className="ms-card">
                      <div className="ms-cardTitle">Next action</div>
                      <div className="ms-item">{data.nextActionTitle}</div>
                      <div className="ms-sub">{data.nextActionDate}</div>
                    </div>
                  </div>

                  <div className="ms-controls">
                    <div className="ms-dd-wrap" ref={projectRef}>
                      <button
                        className={`ms-dd-trigger ${projectOpen ? "open" : ""}`}
                        onClick={() => setProjectOpen(!projectOpen)}
                      >
                        <span>{projectValue}</span>
                        <span className="ms-dd-arrow">▼</span>
                      </button>

                      {projectOpen && (
                        <div className="ms-dd-menu">
                          <button className="ms-dd-item">Full project</button>
                          <button className="ms-dd-item disabled" disabled>
                            Current milestone
                          </button>
                          <button className="ms-dd-item disabled" disabled>
                            Previous Milestone
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="ms-status-actions">
                      <button className="ms-btn-late">Late</button>
                      <button className="ms-btn-very-late">Very late</button>
                    </div>
                  </div>

                  <div className="ms-notice">{data.notice}</div>

                  <div className="ms-status">
                    {statusTabs.map((s) => (
                      <button
                        key={s}
                        className={`ms-pill ${activeStatus === s ? "active" : ""}`}
                        onClick={() => setActiveStatus(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="ms-lower">
                    <div className="ms-feed">
                      {feed.map((it, idx) => (
                        <div key={idx} className={`ms-event ${it.highlight ? "highlight" : ""}`}>
                          <div className="ms-eventHead">
                            <div className="ms-eventLeft">
                              <div className="ms-eventTitle">{it.title}</div>
                              {it.pill && (
                                <span className={`ms-miniPill ${it.pill.toLowerCase()}`}>{it.pill}</span>
                              )}
                            </div>
                            <div className="ms-eventTs">{it.ts}</div>
                          </div>

                          <div className="ms-eventDesc">{it.desc}</div>

                          <div className="ms-tagRow">
                            {(it.tags || []).map((t) => (
                              <span key={t} className="ms-tag">
                                {t}
                              </span>
                            ))}
                          </div>

                          {it.files?.length ? (
                            <div className="ms-fileRow">
                              {it.files.map((f) => (
                                <button key={f} className="ms-fileBtn" type="button">
                                  {f} <span className="ms-open">open</span>
                                </button>
                              ))}
                            </div>
                          ) : null}

                          <div className="ms-eventFoot">
                            <div className="ms-chat">{it.chat}</div>
                            <div className="ms-rightFoot">
                              {it.amount && <div className="ms-amount">{it.amount}</div>}
                              {it.footerBadge && <span className="ms-badge">{it.footerBadge}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="ms-side">
                      <div className="ms-panel ms-panel-action">
                        <div className="ms-panelTitle">Action</div>
                        <button className="ms-actionBtn lime" type="button">
                          Upload
                        </button>
                        <button className="ms-actionBtn lime" type="button">
                          Message Client
                        </button>
                        <button className="ms-actionBtn" type="button">
                          Resolution Center
                        </button>
                      </div>

                      <div className="ms-panel ms-panel-revision">
                        <div className="ms-panelTitle">Revision Requested</div>
                        <div className="ms-panelSub">Client as requested revision for milestone 1</div>

                        <div className="ms-timer">
                          <div className="ms-timeBox">
                            <div className="ms-timeNum">1</div>
                            <div className="ms-timeLbl">Day</div>
                          </div>
                          <div className="ms-timeBox">
                            <div className="ms-timeNum">20</div>
                            <div className="ms-timeLbl">Hours</div>
                          </div>
                          <div className="ms-timeBox">
                            <div className="ms-timeNum">30</div>
                            <div className="ms-timeLbl">Minutes</div>
                          </div>
                        </div>

                        <div className="ms-panelTitle small">Description</div>
                        <div className="ms-descText">
                          Lorem ipsum is simply dummy text of the printing and typesetting industry...
                        </div>

                        <div className="ms-tagRow">
                          <span className="ms-tag">Milestone: Design phase</span>
                        </div>

                        <div className="ms-fileRow">
                          <button className="ms-fileBtn" type="button">
                            Home.fig <span className="ms-open">open</span>
                          </button>
                          <button className="ms-fileBtn" type="button">
                            dashboard.fig <span className="ms-open">open</span>
                          </button>
                          <button className="ms-fileBtn" type="button">
                            preview.pdf <span className="ms-open">open</span>
                          </button>
                          <button className="ms-fileBtn" type="button">
                            Deadline: 2025-12-15
                          </button>
                        </div>

                        <button className="ms-actionBtn lime" type="button">
                          Accept revision
                        </button>
                        <button className="ms-actionBtn" type="button">
                          Cancel revision
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ================= CALENDAR MODAL ================= */}
      {calendarConfig && (
        <Calendar
          initialDate={calendarConfig.value}
          onClose={() => setCalendarConfig(null)}
          onSelect={(date) => {
            calendarConfig.onSelect(date);
            setCalendarConfig(null);
          }}
        />
      )}
    </div>
  );
}

/* ================= CALENDAR COMPONENT ================= */

function Calendar({ onClose, onSelect, initialDate }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const today = new Date();

  // Parse initialDate if exists (DD-MM-YYYY)
  const parseInit = () => {
    if (!initialDate) return { month: today.getMonth(), year: today.getFullYear() };
    const parts = initialDate.split("-");
    if (parts.length !== 3) return { month: today.getMonth(), year: today.getFullYear() };
    return { month: parseInt(parts[1]) - 1, year: parseInt(parts[2]) };
  };

  const initData = parseInit();

  const [year, setYear] = useState(initData.year);
  const [month, setMonth] = useState(initData.month);
  const [openYear, setOpenYear] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const yearRef = useRef(null);

  const years = Array.from({ length: 101 }, (_, i) => 1950 + i);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearRef.current && !yearRef.current.contains(event.target)) {
        setOpenYear(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const changeMonth = (dir) => {
    if (dir === "prev") {
      if (month === 0) {
        setMonth(11);
        setYear((y) => y - 1);
      } else setMonth((m) => m - 1);
    } else {
      if (month === 11) {
        setMonth(0);
        setYear((y) => y + 1);
      } else setMonth((m) => m + 1);
    }
  };

  const formatDate = (d) =>
    `${String(d).padStart(2, "0")}-${String(month + 1).padStart(2, "0")}-${year}`;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/20 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center cursor-pointer p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#2B2B2B] w-[95%] max-w-[335px] h-[350px] rounded-xl p-3 shadow-lg calendar-outer cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white dark:bg-[#2B2B2B] w-full h-full rounded-lg p-3 flex flex-col text-black dark:text-[#f0f0f0] calendar-inner">
          {/* YEAR DROPDOWN */}
          <div className="relative mb-6 z-20 w-full" ref={yearRef}>
            <div className={`onboarding-custom-select ${openYear ? "active" : ""}`}>
              <div
                className={`onboarding-selected-option ${openYear ? "open" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenYear(!openYear);
                }}
                style={{ background: "#CEFF1B", color: "black", fontWeight: "bold" }}
              >
                <span>{year} :</span>
                <span className="onboarding-arrow">▼</span>
              </div>

              {openYear && (
                <ul className="onboarding-options-list dark:bg-[#1E1E1E]">
                  {years.map((y) => (
                    <li
                      key={y}
                      className={y === year ? "active" : ""}
                      onClick={() => {
                        setYear(y);
                        setOpenYear(false);
                      }}
                    >
                      {y}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* MONTH HEADER */}
          <div className="flex justify-between items-center text-sm font-medium -mt-2 mb-2 px-1">
            <span
              onClick={() => changeMonth("prev")}
              className="cursor-pointer text-lg font-bold w-8 h-8 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            >
              ‹
            </span>
            <span className="font-bold">
              {months[month]} {year}
            </span>
            <span
              onClick={() => changeMonth("next")}
              className="cursor-pointer text-lg font-bold w-8 h-8 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            >
              ›
            </span>
          </div>

          {/* WEEK */}
          <div className="grid grid-cols-7 text-[10px] text-black dark:text-gray-400 mb-2 font-bold uppercase">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <div key={d} className="text-center">
                {d}
              </div>
            ))}
          </div>

          {/* DAYS */}
          <div className="grid grid-cols-7 gap-2 text-sm flex-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="text-center text-gray-300 dark:text-gray-700"
              >
                {prevMonthDays - firstDay + i + 1}
              </div>
            ))}

            {Array.from({ length: totalDays }).map((_, i) => {
              const day = i + 1;
              const formatted = formatDate(day);
              const isSelected = selectedDate === formatted;

              return (
                <div
                  key={day}
                  onClick={() => {
                    setSelectedDate(formatted);
                    onSelect(formatted);
                  }}
                  className={`mx-auto w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 font-bold
                    ${isSelected
                      ? "bg-[#CEFF1B] text-black shadow-[0_0_10px_rgba(206,255,27,0.4)]"
                      : "text-black dark:text-gray-300 hover:bg-[#CEFF1B] hover:text-black"
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

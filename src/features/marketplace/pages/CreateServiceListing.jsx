import React, { useMemo, useRef, useState } from "react";
import "./CreateServiceListing.css";
import UserNavbar from "../../../components/layout/UserNavbar";
import Sidebar from "../../../components/layout/Sidebar";
import MyPortfolio from "../../dashboard/components/UserProfile/MyPortfolio";
import "../../../Darkuser.css";

export default function CreateServiceListing({ theme, setTheme }) {
  /* ================== CONSTANTS ================== */
  const categories = useMemo(
    () => ["Design", "Development", "Marketing", "Writing"],
    [],
  );

  const subCategoriesMap = useMemo(
    () => ({
      Design: ["Logo Design", "UI/UX", "Branding"],
      Development: ["Full Stack", "Frontend", "Backend"],
      Marketing: ["SEO", "Social Media", "Ads"],
      Writing: ["Copywriting", "Blog Writing", "Script Writing"],
    }),
    [],
  );

  const productTypes = useMemo(
    () => ["Digital Service", "Consultation", "One-time Project", "Monthly Retainer"],
    [],
  );

  const teamList = useMemo(
    () => ["Team name", "Ultra Hustle Studio", "Design Squad", "Dev Crew"],
    [],
  );

  const deliveryFormats = useMemo(
    () => ["Select one", "Google Drive Link", "Figma Link", "ZIP Download", "Notion Page"],
    [],
  );

  const TABS = ["Basic", "Standard", "Premium"];

  // ✅ Sidebar state (matching CreateTeam.jsx)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSetting, setActiveSetting] = useState("basic");

  React.useEffect(() => {
    setSidebarOpen(true);
    setShowSettings(false);
  }, []);

  const handleSectionChange = (id) => {
    setActiveSetting(id);
  };

  /* ================== BASIC DETAILS STATE ================== */
  const [aiPowered, setAiPowered] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    subCategory: "",
    shortDescription: "",
    about: "",
    productType: "",
  });

  const subCategories = form.category ? subCategoriesMap[form.category] || [] : [];

  const setFormField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  /* ================== TAGS STATE ================== */
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(["Build website", "Full stack developer"]);

  const addTag = () => {
    const clean = tagInput.trim();
    if (!clean) return;
    if (tags.some((t) => t.toLowerCase() === clean.toLowerCase())) {
      setTagInput("");
      return;
    }
    setTags((p) => [...p, clean]);
    setTagInput("");
  };

  const removeTag = (idx) => setTags((p) => p.filter((_, i) => i !== idx));

  const onTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  /* ================== SERVICE PROVIDER + PACKAGES STATE ================== */
  const [mode, setMode] = useState("Solo"); // Solo | Team
  const [teamName, setTeamName] = useState("Team name");
  const [activeTab, setActiveTab] = useState("Basic");

  const [pkg, setPkg] = useState({
    Basic: {
      packageName: "Basic",
      price: "4",
      deliveryDays: "3",
      revisions: "1",
      scope: "",
      included: [],
      howItWorks: [],
      notIncluded: [],
      toolsUsed: ["Figma", "Illustrator", "Photoshop", "Tailwind CSS"],
      deliveryFormat: "Select one",
    },
    Standard: {
      packageName: "Standard",
      price: "",
      deliveryDays: "",
      revisions: "",
      scope: "",
      included: [],
      howItWorks: [],
      notIncluded: [],
      toolsUsed: [],
      deliveryFormat: "Select one",
    },
    Premium: {
      packageName: "Premium",
      price: "",
      deliveryDays: "",
      revisions: "",
      scope: "",
      included: [],
      howItWorks: [],
      notIncluded: [],
      toolsUsed: [],
      deliveryFormat: "Select one",
    },
  });

  const current = pkg[activeTab];

  const setPkgField = (key, value) => {
    setPkg((p) => ({
      ...p,
      [activeTab]: { ...p[activeTab], [key]: value },
    }));
  };

  const addToList = (key, value) => {
    const v = value.trim();
    if (!v) return;
    setPkg((p) => ({
      ...p,
      [activeTab]: { ...p[activeTab], [key]: [...p[activeTab][key], v] },
    }));
  };

  const removeFromList = (key, idx) => {
    setPkg((p) => ({
      ...p,
      [activeTab]: {
        ...p[activeTab],
        [key]: p[activeTab][key].filter((_, i) => i !== idx),
      },
    }));
  };

  const [includedInput, setIncludedInput] = useState("");
  const [howInput, setHowInput] = useState("");
  const [notInput, setNotInput] = useState("");
  const [toolsInput, setToolsInput] = useState("");

  const onEnterAdd = (e, fn) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fn();
    }
  };

  const addIncluded = () => {
    addToList("included", includedInput);
    setIncludedInput("");
  };

  const addHow = () => {
    addToList("howItWorks", howInput);
    setHowInput("");
  };

  const addNot = () => {
    addToList("notIncluded", notInput);
    setNotInput("");
  };

  const addTool = () => {
    const v = toolsInput.trim();
    if (!v) return;

    if ((current.toolsUsed || []).some((t) => t.toLowerCase() === v.toLowerCase())) {
      setToolsInput("");
      return;
    }

    if ((current.toolsUsed || []).length >= 10) return;

    setPkg((p) => ({
      ...p,
      [activeTab]: {
        ...p[activeTab],
        toolsUsed: [...(p[activeTab].toolsUsed || []), v],
      },
    }));
    setToolsInput("");
  };

  const removeTool = (idx) => removeFromList("toolsUsed", idx);

  /* ================== ADD-ONS + MEDIA STATE ================== */
  const fileRef = useRef(null);

  const [addOn, setAddOn] = useState({
    name: "Basic",
    price: "4",
    days: "3",
  });

  const [addOns, setAddOns] = useState([]);
  const [cover, setCover] = useState(null);

  const addNewAddOn = () => {
    if (!addOn.name) return;
    setAddOns((p) => [...p, addOn]);
    setAddOn({ name: "", price: "", days: "" });
  };

  const removeAddOn = (idx) => {
    setAddOns((p) => p.filter((_, i) => i !== idx));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCover(reader.result);
    reader.readAsDataURL(file);
  };

  /* ================== FAQ STATE ================== */
  const [faqs, setFaqs] = useState([
    {
      q: "What do you need to start?",
      a: "A brief and brand assets.",
    },
  ]);

  const addFaq = () => {
    setFaqs((p) => [...p, { q: "", a: "" }]);
  };

  const updateFaq = (idx, key, value) => {
    setFaqs((p) =>
      p.map((item, i) => (i === idx ? { ...item, [key]: value } : item)),
    );
  };

  const removeFaq = (idx) => {
    setFaqs((p) => p.filter((_, i) => i !== idx));
  };

  /* ================== RENDER ================== */
  return (
    <div
      className={`create-service-page user-page ${theme} min-h-screen relative overflow-hidden`}
    >
      {/* ✅ NAVBAR */}
      <UserNavbar
        toggleSidebar={() => setSidebarOpen((p) => !p)}
        theme={theme}
      />

      <div className="pt-[85px] flex relative z-10">
        {/* ✅ SIDEBAR */}
        <Sidebar
          expanded={sidebarOpen}
          setExpanded={setSidebarOpen}
          showSettings={false}
          setShowSettings={() => { }}
          activeSetting={activeSetting}
          onSectionChange={handleSectionChange}
          theme={theme}
          setTheme={setTheme}
        />

        {/* ✅ MAIN CONTENT WRAPPER */}
        <div className="relative flex-1 min-w-5 overflow-hidden">
          {/* Scrollable Area */}
          <div className="relative z-10 overflow-y-auto h-[calc(100vh-85px)]">
            <div className="create-service-container">
              <div className="csl-stack">
                {/* ================= BASIC DETAILS CARD ================= */}
                <div className="csl-card">
                  <div className="csl-header">
                    <div>
                      <h1 className="csl-title">Create Service Listing</h1>
                      <p className="csl-subtitle">Fill out each section</p>
                    </div>

                    <div className="csl-ai">
                      <span className="csl-ai-pill">✨ Ai Powered</span>
                      <label className="csl-switch">
                        <input
                          type="checkbox"
                          checked={aiPowered}
                          onChange={(e) => setAiPowered(e.target.checked)}
                        />
                        <span className="csl-slider" />
                      </label>
                    </div>
                  </div>

                  <h2 className="csl-section">Basic Details</h2>

                  <div className="csl-field">
                    <label className="csl-label">Listing Title</label>
                    <input
                      className="csl-input"
                      placeholder="eg., Professional Logo Design"
                      value={form.title}
                      onChange={(e) => setFormField("title", e.target.value)}
                    />
                  </div>

                  <div className="csl-grid2">
                    <div className="csl-field">
                      <label className="csl-label">Category</label>
                      <div className="csl-selectWrap">
                        <select
                          className="csl-select"
                          value={form.category}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              category: e.target.value,
                              subCategory: "",
                            }))
                          }
                        >
                          <option value="">Select category</option>
                          {categories.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <span className="csl-caret">▾</span>
                      </div>
                    </div>

                    <div className="csl-field">
                      <label className="csl-label">Sub Category</label>
                      <div className="csl-selectWrap">
                        <select
                          className="csl-select"
                          value={form.subCategory}
                          onChange={(e) => setFormField("subCategory", e.target.value)}
                          disabled={!form.category}
                        >
                          <option value="">Select sub category</option>
                          {subCategories.map((sc) => (
                            <option key={sc} value={sc}>
                              {sc}
                            </option>
                          ))}
                        </select>
                        <span className="csl-caret">▾</span>
                      </div>
                    </div>
                  </div>

                  <div className="csl-field">
                    <label className="csl-label">Short Description</label>
                    <textarea
                      className="csl-textarea"
                      placeholder="Short Portfolio"
                      value={form.shortDescription}
                      onChange={(e) => setFormField("shortDescription", e.target.value)}
                    />
                  </div>

                  <div className="csl-field">
                    <label className="csl-label">About This Service</label>
                    <textarea
                      className="csl-textarea"
                      placeholder="About this service"
                      value={form.about}
                      onChange={(e) => setFormField("about", e.target.value)}
                    />
                  </div>

                  <div className="csl-field">
                    <label className="csl-label">Product Type</label>
                    <div className="csl-selectWrap">
                      <select
                        className="csl-select"
                        value={form.productType}
                        onChange={(e) => setFormField("productType", e.target.value)}
                      >
                        <option value="">eg., Digital Service</option>
                        {productTypes.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                      <span className="csl-caret">▾</span>
                    </div>
                  </div>

                  <div className="csl-field">
                    <label className="csl-label">Tags (multi-select)</label>

                    <div className="csl-tagsRow">
                      <input
                        className="csl-input csl-tagInput"
                        placeholder="eg., type a tag and press Enter"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={onTagKeyDown}
                      />

                      <button type="button" className="csl-addBtn" onClick={addTag}>
                        + Add
                      </button>
                    </div>

                    {tags.length > 0 && (
                      <div className="csl-chips">
                        {tags.map((t, idx) => (
                          <div className="csl-chip" key={`${t}-${idx}`}>
                            <span className="csl-chipText">{t}</span>
                            <button
                              type="button"
                              className="csl-chipX"
                              onClick={() => removeTag(idx)}
                              aria-label="Remove tag"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        <button
                          className="csl-clear-all"
                          onClick={() => setTags([])}
                          title="Clear all"
                        >×</button>
                      </div>
                    )}
                  </div>
                </div>

                {/* ================= SERVICE PROVIDER + PACKAGES ================= */}
                <div className="sp-card">
                  <div className="sp-top">
                    <div className="sp-topLeft">
                      <div className="sp-topTitle">Service Provider</div>
                    </div>

                    <div className="sp-topRight">
                      <span className={`sp-mode ${mode === "Solo" ? "active" : ""}`}>Solo</span>
                      <label className="sp-switch">
                        <input
                          type="checkbox"
                          checked={mode === "Team"}
                          onChange={(e) => setMode(e.target.checked ? "Team" : "Solo")}
                        />
                        <span className="sp-slider" />
                      </label>
                      <span className={`sp-mode ${mode === "Team" ? "active" : ""}`}>Team</span>
                    </div>
                  </div>

                  {mode === "Team" && (
                    <div className="sp-field">
                      <label className="sp-label">Team name</label>
                      <div className="sp-selectWrap">
                        <select
                          className="sp-select"
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                          disabled={mode !== "Team"}
                        >
                          {teamList.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <span className="sp-caret">▾</span>
                      </div>
                    </div>
                  )}

                  <div className="sp-packagesTitle">Packages</div>
                  <div className="sp-tabs">
                    {TABS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`sp-tab ${activeTab === t ? "active" : ""}`}
                        onClick={() => setActiveTab(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="sp-grid3">
                    <div className="sp-field">
                      <label className="sp-label">Package Name</label>
                      <input
                        className="sp-input"
                        value={current.packageName}
                        onChange={(e) => setPkgField("packageName", e.target.value)}
                      />
                    </div>

                    <div className="sp-field">
                      <label className="sp-label">Price</label>
                      <div className="sp-priceWrap">
                        <span className="sp-currency">$</span>
                        <input
                          className="sp-input sp-priceInput"
                          value={current.price}
                          onChange={(e) => setPkgField("price", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sp-field">
                      <label className="sp-label">Delivery Time (days)</label>
                      <div className="sp-selectWrap">
                        <select
                          className="sp-select"
                          value={current.deliveryDays}
                          onChange={(e) => setPkgField("deliveryDays", e.target.value)}
                        >
                          {["1", "2", "3", "5", "7", "10", "14", "21", "30"].map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <span className="sp-caret">▾</span>
                      </div>
                    </div>
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">No. of. Revisions</label>
                    <div className="sp-selectWrap">
                      <select
                        className="sp-select"
                        value={current.revisions}
                        onChange={(e) => setPkgField("revisions", e.target.value)}
                      >
                        {["1", "2", "3", "5", "Unlimited"].map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <span className="sp-caret">▾</span>
                    </div>
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">Scope of Work</label>
                    <textarea
                      className="sp-textarea"
                      value={current.scope}
                      onChange={(e) => setPkgField("scope", e.target.value)}
                    />
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">What's included</label>
                    <input
                      className="sp-input"
                      value={includedInput}
                      onChange={(e) => setIncludedInput(e.target.value)}
                      onKeyDown={(e) => onEnterAdd(e, addIncluded)}
                      placeholder="eg., Source Files"
                    />
                    <button type="button" className="sp-addMini" onClick={addIncluded}>
                      + <span>Add</span>
                    </button>

                    {!!current.included?.length && (
                      <div className="sp-chipRow" style={{ position: 'relative' }}>
                        {current.included.map((x, idx) => (
                          <div className="sp-chip" key={`${x}-${idx}`}>
                            {x}
                            <button className="sp-chipX" type="button" onClick={() => removeFromList("included", idx)}>
                              ×
                            </button>
                          </div>
                        ))}
                        <button
                          className="csl-clear-all"
                          onClick={() => setPkg(p => ({
                            ...p,
                            [activeTab]: { ...p[activeTab], included: [] }
                          }))}
                          title="Clear all"
                        >×</button>
                      </div>
                    )}
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">How it works</label>
                    <input
                      className="sp-input"
                      value={howInput}
                      onChange={(e) => setHowInput(e.target.value)}
                      onKeyDown={(e) => onEnterAdd(e, addHow)}
                      placeholder="eg., Kickoff Call"
                    />
                    <button type="button" className="sp-addMini" onClick={addHow}>
                      + <span>Add</span>
                    </button>

                    {!!current.howItWorks?.length && (
                      <div className="sp-chipRow">
                        {current.howItWorks.map((x, idx) => (
                          <div className="sp-chip" key={`${x}-${idx}`}>
                            {x}
                            <button className="sp-chipX" type="button" onClick={() => removeFromList("howItWorks", idx)}>
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">What's not included</label>
                    <input
                      className="sp-input"
                      value={notInput}
                      onChange={(e) => setNotInput(e.target.value)}
                      onKeyDown={(e) => onEnterAdd(e, addNot)}
                      placeholder="eg., Printing"
                    />
                    <button type="button" className="sp-addMini" onClick={addNot}>
                      + <span>Add</span>
                    </button>

                    {!!current.notIncluded?.length && (
                      <div className="sp-chipRow">
                        {current.notIncluded.map((x, idx) => (
                          <div className="sp-chip" key={`${x}-${idx}`}>
                            {x}
                            <button className="sp-chipX" type="button" onClick={() => removeFromList("notIncluded", idx)}>
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">Tools used</label>
                    <div className="sp-toolsRow">
                      <input
                        className="sp-input"
                        value={toolsInput}
                        onChange={(e) => setToolsInput(e.target.value)}
                        onKeyDown={(e) => onEnterAdd(e, addTool)}
                        placeholder="eg., Figma, Notion"
                      />
                      <button type="button" className="sp-addBtnRight" onClick={addTool}>
                        + Add
                      </button>
                    </div>
                    <div className="sp-hint">You can add 10 tools</div>

                    {!!current.toolsUsed?.length && (
                      <div className="sp-chipRow">
                        {current.toolsUsed.map((x, idx) => (
                          <div className="sp-chip" key={`${x}-${idx}`}>
                            {x}
                            <button className="sp-chipX" type="button" onClick={() => removeTool(idx)}>
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="sp-field">
                    <label className="sp-label">Delivery format</label>
                    <div className="sp-selectWrap">
                      <select
                        className="sp-select"
                        value={current.deliveryFormat}
                        onChange={(e) => setPkgField("deliveryFormat", e.target.value)}
                      >
                        {deliveryFormats.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <span className="sp-caret">▾</span>
                    </div>
                  </div>
                </div>

                {/* ================= ADD-ONS + MEDIA ================= */}
                <div className="am-card">
                  <h3 className="am-title">Add-Ons</h3>

                  <div className="am-grid3">
                    <div className="am-field">
                      <label>Package Name</label>
                      <input
                        className="am-input"
                        value={addOn.name}
                        onChange={(e) => setAddOn({ ...addOn, name: e.target.value })}
                      />
                    </div>

                    <div className="am-field">
                      <label>Price</label>
                      <div className="am-priceWrap">
                        <span>$</span>
                        <input
                          className="am-input am-priceInput"
                          value={addOn.price}
                          onChange={(e) => setAddOn({ ...addOn, price: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="am-field">
                      <label>Delivery Time (days)</label>
                      <input
                        className="am-input"
                        value={addOn.days}
                        onChange={(e) => setAddOn({ ...addOn, days: e.target.value })}
                      />
                    </div>
                  </div>

                  <button className="am-addBtn" onClick={addNewAddOn}>
                    + Add
                  </button>

                  {addOns.length > 0 && (
                    <div className="am-addOnList">
                      {addOns.map((item, idx) => (
                        <div key={idx} className="am-chip">
                          {item.name} – ${item.price} – {item.days} days
                          <button onClick={() => removeAddOn(idx)}>×</button>
                        </div>
                      ))}
                    </div>
                  )}

                  <h3 className="am-title" style={{ marginTop: 30 }}>
                    Media
                  </h3>

                  <div className="am-mediaLabel">Cover Page</div>

                  <div className="am-uploadBox">
                    {cover ? (
                      <>
                        <img src={cover} alt="cover" className="am-preview" />
                        <button className="am-removeImg" onClick={() => setCover(null)}>
                          ×
                        </button>
                      </>
                    ) : (
                      <div className="am-placeholder">
                        <button className="am-uploadBtn" onClick={() => fileRef.current?.click()}>
                          Upload Photo
                        </button>
                      </div>
                    )}

                    <input
                      type="file"
                      ref={fileRef}
                      hidden
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* Portfolio Section */}
                <div className="csl-portfolio-wrap">
                  <MyPortfolio />
                </div>

                {/* ================= FAQ ================= */}
                <div className="faq-wrap">
                  <h3 className="faq-title">FAQs</h3>

                  {faqs.map((item, idx) => (
                    <div className="faq-card" key={idx}>
                      <div className="faq-card-top">
                        <div className="faq-number">FAQ #{idx + 1}</div>

                        <button
                          type="button"
                          className="faq-trash"
                          onClick={() => removeFaq(idx)}
                          aria-label="Delete FAQ"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>

                      <div className="faq-field">
                        <label className="faq-label">Question</label>
                        <input
                          className="faq-input"
                          placeholder="Type your question"
                          value={item.q}
                          onChange={(e) => updateFaq(idx, "q", e.target.value)}
                        />
                      </div>

                      <div className="faq-field">
                        <label className="faq-label">Answer</label>
                        <input
                          className="faq-input"
                          placeholder="Type the answer"
                          value={item.a}
                          onChange={(e) => updateFaq(idx, "a", e.target.value)}
                        />
                      </div>

                      <button type="button" className="faq-add" onClick={addFaq}>
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

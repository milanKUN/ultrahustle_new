import { useState } from "react";

export default function PersonalInformation() {
  const ABOUT_LIMIT = 700;

  const [about, setAbout] = useState(
    "I'm a passionate product designer and full-stack developer with over 8 years of experience creating elegant, user-centered digital experiences."
  );

  const [skills, setSkills] = useState([
    "Agile/Scrum",
    "Accessibility",
    "Front-end Development",
    "Product Design",
    "Design Systems",
  ]);

  const [tools, setTools] = useState([
    "Figma",
    "Illustrator",
    "Photoshop",
    "Tailwind CSS",
  ]);

  const [languages, setLanguages] = useState(["Hindi", "English", "Tamil"]);

  const [openCalendar, setOpenCalendar] = useState(false);

  /* ---------- TAG INPUT HANDLERS ---------- */
  const handleAddTag = (e, list, setList) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      setList([...list, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const removeTag = (index, list, setList) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="w-full pb-20">
        {/* ================= PERSONAL INFO ================= */}
        <Section title="Personal Information">
          <TwoCol>
            <Input label="First Name" placeholder="First Name" />
            <Input label="Last Name" placeholder="Last Name" />
            <Input label="User Name" placeholder="@username" />

            {/* Date of Birth */}
            <div>
              <Label>Date of Birth</Label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="DD-MM-YYYY"
                  readOnly
                  className="w-full   bg-transparent border-1 border-black rounded-md px-3 py-2 pr-10 text-sm outline-none"
                />
                <span
                  onClick={() => setOpenCalendar(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
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

            <Input label="Email Address" placeholder="example@gmail.com" />

            {/* Phone */}
            <div>
              <Label>Phone Number</Label>

              <div className="flex items-center border-1 border-black rounded-md px-3 py-2 gap-2">
                <span className="text-sm text-gray-700">India</span>
                <span className="text-gray-400">|</span>
                <span className="text-sm  text-gray-700">+91</span>
                <input
                  type="tel"
                  placeholder="XXXXXXXXXX"
                  className="flex-1 outline-none bg-transparent text-sm pl-2"
                />
              </div>
            </div>
          </TwoCol>
        </Section>

        {/* ================= ADDRESS ================= */}
        <Section title="Address ">
          <TwoCol>
            <Input label="Street" placeholder="Street" />
            <Input label="City" placeholder="City" />
            <Input label="State" placeholder="State" />
            <Input label="Country" placeholder="Country" />
            <Input label="Pincode" placeholder="Type here Pincode" />
          </TwoCol>
        </Section>

        {/* ================= ABOUT ================= */}
        <Section title="About">
          <textarea
            rows={5}
            value={about}
            onChange={(e) => setAbout(e.target.value.slice(0, ABOUT_LIMIT))}
            className="w-full bg-transparent border border-black rounded-md p-3 text-sm outline-none scrollbar-thin scrollbar-thumb-[#CEFF1B] scrollbar-track-gray-100"
            style={{
              scrollbarColor: "#CEFF1B #f3f3f3",
              scrollbarWidth: "thin",
            }}
          />
          <p className="text-xs text-red-500 mt-1">
            You have used {about.length} characters out of {ABOUT_LIMIT}{" "}
            Characters
          </p>
        </Section>

        {/* ================= SKILLS ================= */}
        <Section title="Skills & Expertise">
          <TagInput
            placeholder="Search Skills & Expertise"
            tags={skills}
            setTags={setSkills}
            onKeyDown={handleAddTag}
            onRemove={removeTag}
          />
          <p className="text-xs text-gray-500 mt-1">
            You can add 10 more skills & expertise
          </p>
        </Section>

        {/* ================= TOOLS ================= */}
        <Section title="Tools & Technologies">
          <TagInput
            placeholder="Search tools & technologies"
            tags={tools}
            setTags={setTools}
            onKeyDown={handleAddTag}
            onRemove={removeTag}
          />
          <p className="text-xs text-gray-500 mt-1">
            You can add 10 more skills & expertise
          </p>
        </Section>

        {/* ================= LANGUAGES ================= */}
        <Section title="Languages">
          <TagInput
            placeholder="Languages"
            tags={languages}
            setTags={setLanguages}
            onKeyDown={handleAddTag}
            onRemove={removeTag}
          />
        </Section>

        {/* ================= ACTIONS ================= */}
        <div className="flex justify-end gap-4 mt-10">
          <button className="px-4 py-2  rounded-lg text-sm text-gray-700 bg-transparent hover:bg-gray-50 border-1 border-black" >
            Discard
          </button>
          <button className="px-4 py-2 bg-[#CEFF1B]  rounded-lg text-sm font-medium text-black border-1 border-black">
            Save Changes
          </button>
        </div>
      </div>

      {/* ================= YEAR CALENDAR MODAL ================= */}
      {openCalendar && <YearCalendar onClose={() => setOpenCalendar(false)} />}
    </>
  );
}

/* ================= CALENDAR ================= */

function YearCalendar({ onClose }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Allow year selection from 1950 to 2050
  const yearStart = 1950;
  const yearEnd = 2050;
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-gradient-to-br from-lime-100 via-white to-white rounded-2xl p-6 w-[1100px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg"
        >
          ✕
        </button>

        <div className="flex justify-center items-center mb-6">
          <select
            className="text-10px font-bold text-black-800 bg-[#CEFF1B] border border-black rounded px-4 py-1 outline-none"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {Array.from(
              { length: yearEnd - yearStart + 1 },
              (_, i) => yearStart + i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {months.map((m) => (
            <MonthCard key={m} title={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MonthCard({ title }) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2 text-xs font-semibold">
        <span>‹</span>
        <span>{title}</span>
        <span>›</span>
      </div>

      <div className="grid grid-cols-7 text-[10px] text-gray-500 mb-1">
        {days.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-xs">
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={i}
            className="text-center py-0.5 rounded hover:bg-lime-200 cursor-pointer"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= REUSABLE UI ================= */

function Section({ title, children }) {
  return (
    <div className="mb-5 -mt-5 ">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-[24px] font-semibold text-[#2B2B2B] whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B] " />
      </div>
      {children}
    </div>
  );
}

function Label({ children }) {
  return (
    <label
      className="block mb-1"
      style={{
        color: "#2B2B2B",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "110%",
      }}
    >
      {children}
    </label>
  );
}

function TwoCol({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        placeholder={placeholder}
        className="bg-transparent border-1 border-black rounded-md px-3 text-sm outline-none"
        style={{ width: '512px', height: '40px' }}
      />
    </div>
  );
}

function TagInput({ placeholder, tags, setTags, onKeyDown, onRemove }) {
  return (
    <div className="space-y-3">
      <input
        placeholder={placeholder}
        onKeyDown={(e) => onKeyDown(e, tags, setTags)}
        className="w-full   bg-transparent
 border-1 border-black rounded-md px-3 py-2 text-sm outline-none"
      />

      <div className="relative   bg-white border rounded-xl p-3 shadow-sm">
        {tags.length > 0 && (
          <button
            onClick={() => setTags([])}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}

        <div className="flex flex-wrap gap-2 pr-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-white border px-3 py-1 rounded-md text-xs text-gray-700"
            >
              {tag}
              <button
                onClick={() => onRemove(i, tags, setTags)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

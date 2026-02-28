import React, { useMemo, useState, useEffect } from "react";
import UserNavbar from "../../../components/layout/UserNavbar";
import Sidebar from "../../../components/layout/Sidebar";
import heroImg from "../../../assets/marketplacehero.png";
import "./Marketplace.css";

const categories = ["Service", "Digital Products", "Teams", "Courses", "Webinars"];

export default function Marketplace({ theme, setTheme }) {
    const [sidebarOpen, setSidebarOpen] = useState(() => {
        const saved = localStorage.getItem("sidebarOpen");
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
    }, [sidebarOpen]);

    const [activeCat, setActiveCat] = useState("Digital Products");

    const chips = useMemo(
        () => [
            "Copywriting",
            "Design Basics",
            "Email templates",
            "Landing Pages",
            "marketing",
            "SEO",
            "UI Kits",
            "Web Design",
            "Web Development",
        ],
        [],
    );

    const products = useMemo(
        () => [
            {
                id: 1,
                name: "Abigail",
                verified: true,
                ai: true,
                title: "Browse services, products, courses, and webinars tailored...",
                rating: 4.5,
                reviews: 123,
                priceLabel: "Price: ₹ 24,000",
                cta: "Know More",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
            {
                id: 2,
                name: "Abigail",
                verified: true,
                ai: true,
                title: "Browse services, products, courses, and webinars tailored...",
                rating: 4.5,
                reviews: 123,
                priceLabel: "Price: ₹ 24,000",
                cta: "Buy Now",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
            {
                id: 3,
                name: "Abigail",
                verified: true,
                ai: true,
                title: "Browse services, products, courses, and webinars tailored...",
                rating: 4.5,
                reviews: 123,
                priceLabel: "Price: ₹ 24,000",
                cta: "Enroll Now",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
            {
                id: 4,
                name: "Abigail",
                verified: true,
                ai: true,
                title: "Browse services, products, courses, and webinars tailored...",
                rating: 4.5,
                reviews: 123,
                priceLabel: "Price: From ₹ 24,000",
                cta: "Know More",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
            {
                id: 4,
                name: "Abigail",
                verified: true,
                ai: true,
                title: "Browse services, products, courses, and webinars tailored...",
                rating: 4.5,
                reviews: 123,
                priceLabel: "Price: From ₹ 24,000",
                cta: "Know More",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
        ],
        [],
    );

    return (
        <div className={`mp-page user-page ${theme} h-screen relative overflow-hidden`}>
            {/* NAVBAR */}
            <UserNavbar
                toggleSidebar={() => setSidebarOpen((p) => !p)}
                isSidebarOpen={sidebarOpen}
                theme={theme}
            />

            <div className="pt-[85px] flex h-full relative z-10">
                {/* SIDEBAR */}
                <Sidebar
                    expanded={sidebarOpen}
                    setExpanded={setSidebarOpen}
                    theme={theme}
                    setTheme={setTheme}
                />

                {/* MAIN CONTENT */}
                <div className="relative flex-1 min-w-5 overflow-hidden">
                    <div className="relative z-10 overflow-y-auto h-[calc(100vh-85px)]">
                        <section className="mp-hero">
                            <img src={heroImg} alt="Marketplace Hero" className="mp-heroImg" />
                            <div className="mp-heroOverlay" />
                            <div className="mp-heroInner">
                                <div className="mp-heroText">
                                    <h1 className="mp-heroTitle">Welcome back, Name!</h1>
                                    <h1 className="mp-heroSub">Your hustle starts here.</h1>
                                </div>



                            </div>
                        </section>

                        <div className="mp-shell">
                            <div className="mp-catRow">
                                {categories.map((c) => (
                                    <button
                                        key={c}
                                        className={`mp-pill ${activeCat === c ? "active" : ""}`}
                                        onClick={() => setActiveCat(c)}
                                        type="button"
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>

                            <div className="mp-filterRow">
                                <button className="mp-filterBtn" type="button">
                                    <span>Filter</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="12" x2="15" y2="12"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                                    </svg>
                                </button>

                                <div className="mp-chipScroller">
                                    {chips.map((t, idx) => (
                                        <button
                                            key={t}
                                            className={`mp-chip ${idx === 0 ? "active" : ""}`}
                                            type="button"
                                        >
                                            {t}
                                            <svg className="mp-chipIcon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <h2 className="mp-sectionTitle">All Products</h2>

                            <div className="mp-grid">
                                {products.map((p) => (
                                    <article className="mp-card" key={p.id}>
                                        <div className="mp-imgWrap">
                                            <img className="mp-img" src={p.image} alt="" />
                                        </div>

                                        <div className="mp-cardBody">
                                            <div className="mp-topLine">
                                                <div className="mp-user">
                                                    <div className="mp-avatar"></div>
                                                    <span className="mp-userName">{p.name}</span>
                                                    {p.verified && (
                                                        <svg className="mp-verifyIcon" width="14" height="14" viewBox="0 0 24 24" fill="#3897f0">
                                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-3.3-3.3 1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4-5.7 5.7z" />
                                                        </svg>
                                                    )}
                                                </div>

                                                {p.ai && (
                                                    <span className="mp-aiBadge">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M11 2C11 2 11 10 19 10C11 10 11 18 11 18C11 18 11 10 3 10C11 10 11 2 11 2Z" />
                                                        </svg>
                                                        Ai Powered
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mp-desc">{p.title}</p>

                                            <div className="mp-metaRow">
                                                <div className="mp-rating">
                                                    <span className="mp-star">★</span>
                                                    <span>{p.rating.toFixed(1)}</span>
                                                    <span className="mp-rev">({p.reviews})</span>
                                                </div>
                                            </div>

                                            <div className="mp-bottomRow">
                                                <div className="mp-price">Price: ₹ 24,000</div>
                                                <button className="mp-cta" type="button">
                                                    {p.cta}
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <button className="mp-floatArrow" type="button" aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

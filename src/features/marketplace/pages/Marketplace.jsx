import React, { useMemo, useState, useEffect } from "react";
import UserNavbar from "../../../components/layout/UserNavbar";
import Sidebar from "../../../components/layout/Sidebar";
import heroImg from "../../../assets/marketplacehero.png";
import heroImgDark from "../../../assets/marketplacedark.png";
import filterIcon from "../../../assets/filtericon.svg";
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
                cta: "Know More  ",
                image:
                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop",
            },
            {
                id: 5,
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

            <div className="mp-content-wrapper flex flex-1 relative z-10">
                {/* SIDEBAR */}
                <Sidebar
                    expanded={sidebarOpen}
                    setExpanded={setSidebarOpen}
                    theme={theme}
                    setTheme={setTheme}
                />

                {/* MAIN CONTENT */}
                <div className="relative flex-1 min-w-5 overflow-hidden">
                    <div className="mp-scroll-area relative z-10 overflow-y-auto h-full">
                        <section className="mp-hero">
                            <img
                                src={theme === "dark" ? heroImgDark : heroImg}
                                alt="Marketplace Hero"
                                className="mp-heroImg"
                            />
                            <div className="mp-heroOverlay" />
                            <div className="mp-heroInner">
                                <div className="mp-heroText">
                                    <h1 className="mp-heroTitle">Welcome back, Name!</h1>
                                    <h1 className="mp-heroSub">Your <span className="mp-highlight">hustle</span> starts here.</h1>
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
                                    <img src={filterIcon} alt="filtericon" />
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
                                                        <svg className="mp-verifyIcon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                fill="#1DA1F2"
                                                                d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.7.54-1.51.26-3.23-.97-4.46-1.23-1.23-2.95-1.51-4.46-.97C14.13 2.08 12.76 1.2 11.18 1.2c-1.58 0-2.95.88-3.7 2.18-1.51-.54-3.23-.26-4.46.97-1.23 1.23-1.51 2.95-.97 4.46C.88 9.55 0 10.92 0 12.5c0 1.58.88 2.95 2.18 3.7-.54 1.51-.26 3.23.97 4.46 1.23 1.23 2.95 1.51 4.46.97 0.74 1.3 2.11 2.18 3.69 2.18 1.58 0 2.95-.88 3.7-2.18 1.51.54 3.23.26 4.46-.97 1.23-1.23 1.51-2.95.97-4.46 1.3-.75 2.18-2.12 2.18-3.7z"
                                                            />
                                                            <path
                                                                stroke="#FFF"
                                                                strokeWidth="3"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M8 12.5l3 3 5-5"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>

                                                {p.ai && (
                                                    <span className="mp-aiBadge">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 3c.4 4.1 3.5 7.2 7.6 7.6-.4.4-3.5 3.5-3.9 7.6-.4-4.1-3.5-7.2-7.6-7.6 4.1-.4 7.2-3.5 7.6-7.6zM6 16.5c.2 1.9 1.6 3.3 3.5 3.5-.2.2-1.6 1.6-1.8 3.5-.2-1.9-1.6-3.3-3.5-3.5 1.9-.2 3.3-1.6 3.5-3.5z" />
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
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mp-ctaIcon">
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
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

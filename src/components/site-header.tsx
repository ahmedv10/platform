"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portfolioSections } from "@/lib/portfolio";

const navItems = [
  { label: "Portfolio", href: "/portfolio", slug: null },
  { label: "Industries", href: "/industries", slug: "industries" },
  { label: "Technology", href: "/technology", slug: "technology" },
  { label: "Insights", href: "/insights", slug: null },
  { label: "About", href: "/about", slug: null },
];

const arabicLabels: Record<string, string> = {
  Services: "الخدمات",
  Solutions: "الحلول",
  Cybersecurity: "الأمن السيبراني",
  Industries: "القطاعات",
  Technology: "التقنية",
  Insights: "رؤى",
  About: "عن الشركة",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [arabic, setArabic] = useState(false);
  const close = () => { setOpen(false); setActiveMenu(null); };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="OYOON ALTAQNYA home">
        <Image className="brand-logo" src="/oyoon-altaqnya-logo.png" alt="OYOON ALTAQNYA" width={1448} height={1086} priority />
        <span>OYOON ALTAQNYA<span className="brand-dot">.</span></span>
      </Link>

      <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <div
            className="nav-menu"
            key={item.label}
            onMouseEnter={() => setActiveMenu(item.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link className="nav-menu-trigger" href={item.href} onClick={close}>
              {arabic ? (arabicLabels[item.label] ?? item.label) : item.label}
            </Link>
            {activeMenu === item.label && item.slug && (
              <div className="nav-dropdown max-w-4xl">
                {portfolioSections
                  .filter((s) => s.slug === item.slug)
                  .map((section) => (
                    <div key={section.slug} className="nav-dropdown-section">
                      <div className="nav-section-header">
                        <span className="nav-section-number">{section.number}</span>
                        <span className="nav-section-title">{section.title}</span>
                      </div>
                      <div className="nav-section-items">
                        {section.items.map((sub) => (
                          <Link key={sub.id} href={`/${section.slug}/${sub.slug}`} onClick={close}>
                            <span>{sub.title}</span>
                            <b>↗</b>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-toggle">
          <button className={!arabic ? "active" : ""} onClick={() => setArabic(false)}>EN</button>
          <span>/</span>
          <button className={arabic ? "active" : ""} onClick={() => setArabic(true)}>العربية</button>
        </div>
        <Link className="header-link-cta" href="/contact" onClick={close}>
          {arabic ? "تواصل معنا" : "Contact"}
          <b>↗</b>
        </Link>
        <Link className="header-cta" href="/rfp" onClick={close}>
          {arabic ? "ابدأ مشروعاً" : "Start a project"}
          <b>↗</b>
        </Link>
      </div>

      <button
        className="mobile-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span>MENU</span>
        <i />
        <i />
      </button>
    </header>
  );
}

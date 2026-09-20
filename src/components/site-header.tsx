"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menus = [
  { label: "Services", href: "/services", items: [["IT Consulting", "/services/it-consulting"], ["IT Solutions", "/services/it-solutions"], ["IT Services & Integration", "/services/it-services"], ["Cybersecurity Training", "/training"]] },
  { label: "Solutions", href: "/solutions", items: [["Identity & Zero Trust", "/cybersecurity/solutions"], ["Endpoint Security", "/cybersecurity/solutions"], ["Cloud Security", "/cybersecurity/solutions"], ["Security Operations", "/cybersecurity/solutions"]] },
  { label: "Industries", href: "/industries", items: [["Banking & Financial Services", "/industries"], ["Telecommunications", "/industries"], ["Government & Public Sector", "/industries"], ["Critical Infrastructure", "/industries"]] },
  { label: "Technology", href: "/technology", items: [["Microsoft", "/technology"], ["Network & Infrastructure", "/technology"], ["Cloud", "/technology"], ["Data & AI", "/technology"]] },
];

const plainLinks = [["Insights", "/insights"], ["About", "/about"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [arabic, setArabic] = useState(false);
  const close = () => { setOpen(false); setActiveMenu(null); };

  return <header className="site-header">
    <Link className="brand" href="/" aria-label="OYOON ALTAQNYA home"><Image className="brand-logo" src="/oyoon-altaqnya-logo.png" alt="" width={1448} height={1086} priority /><span>OYOON ALTAQNYA<span className="brand-dot">.</span></span></Link>
    <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
      {menus.map((menu) => <div className="nav-menu" key={menu.label} onMouseEnter={() => setActiveMenu(menu.label)} onMouseLeave={() => setActiveMenu(null)}><Link className="nav-menu-trigger" href={menu.href} onClick={close}>{arabic ? ({ Services: "الخدمات", Solutions: "الحلول", Industries: "القطاعات", Technology: "التقنية" }[menu.label] ?? menu.label) : menu.label}<span>⌄</span></Link>{activeMenu === menu.label && <div className="nav-dropdown">{menu.items.map(([label, href]) => <Link href={href} key={label} onClick={close}><span>{label}</span><b>↗</b></Link>)}</div>}</div>)}
      {plainLinks.map(([label, href]) => <Link key={href} href={href} onClick={close}>{arabic ? ({ Insights: "رؤى", About: "عن الشركة" }[label] ?? label) : label}</Link>)}
      <Link href="/contact" onClick={close}>{arabic ? "تواصل معنا" : "Contact"}</Link>
    </nav>
    <div className="header-actions"><div className="language-toggle"><button className={!arabic ? "active" : ""} onClick={() => setArabic(false)}>EN</button><span>/</span><button className={arabic ? "active" : ""} onClick={() => setArabic(true)}>العربية</button></div><Link className="header-link-cta" href="/contact">{arabic ? "تحدث معنا" : "Get in touch"}<b>↗</b></Link><Link className="header-cta" href="/rfp">{arabic ? "ابدأ مشروعاً" : "Start a project"}<b>↗</b></Link></div>
    <button className="mobile-trigger" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span>MENU</span><i /><i /></button>
  </header>;
}

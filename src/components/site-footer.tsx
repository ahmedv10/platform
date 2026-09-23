import Image from "next/image";
import Link from "next/link";
import { portfolioSections } from "@/lib/portfolio";

export function SiteFooter() {
  const footerSections = [
    { title: "Portfolio", items: portfolioSections.map((s) => ({ label: s.title, href: `/${s.slug}` })) },
    { title: "Industries", items: [{ label: "Banking & Financial Services", href: "/industries/banking-financial-services" }, { label: "Telecommunications", href: "/industries/telecommunications" }, { label: "Government & Public Sector", href: "/industries/government-public-sector" }, { label: "Enterprise", href: "/industries/enterprise-security" }] },
    {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Insights", href: "/insights" },
        { label: "Careers", href: "/contact" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Downloads", href: "/resources" },
        { label: "Submit RFP / RFQ", href: "/rfp" },
        { label: "Start a project", href: "/rfp" },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="OYOON ALTAQNYA home">
            <Image className="brand-logo footer-logo" src="/oyoon-altaqnya-logo.png" alt="" width={1448} height={1086} />
            <span>OYOON ALTAQNYA<span className="brand-dot">.</span></span>
          </Link>
          <p className="text-sm text-muted mt-4">Information Technology & Cybersecurity</p>
        </div>
        <div className="footer-links">
          {footerSections.map((section) => (
            <div key={section.title}>
              <b>{section.title}</b>
              {section.items.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>Secure Technology. Smarter Transformation. Resilient Business.</span>
        <span>© 2026 OYOON ALTAQNYA</span>
      </div>
    </footer>
  );
}

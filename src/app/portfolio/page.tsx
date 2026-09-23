import { portfolioSections } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | OYOON ALTAQNYA",
  description: "Enterprise-grade IT and cybersecurity services across technology, security, and specialized industries.",
};

export default function PortfolioPage() {
  return (
    <main className="section-pad py-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker mb-4">
          <span>01 /</span>
          <span>Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
          One partner.<br />
          <em>Full capability.</em>
        </h1>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Enterprise-grade expertise across technology, security, and the systems
          that connect them. Our portfolio spans ten integrated practice areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSections.map((section) => (
            <Link
              key={section.slug}
              href={`/${section.slug}`}
              className="group block border border-line rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-mono text-muted group-hover:text-accent">
                  {section.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted mb-4">{section.description}</p>
              <div className="text-xs text-muted">
                {section.items.length} services
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

import { portfolioSections } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Technology | OYOON ALTAQNYA",
  description: "Security technology ecosystem including Microsoft Security, Network Security, Identity Security, SOC, Exposure Management, and Data & Application Security.",
};

export default function TechnologyPage() {
  const techSection = portfolioSections.find((s) => s.slug === "technology");

  return (
    <main className="section-pad py-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker mb-4">
          <span>08 /</span>
          <span>Technology Ecosystem</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
          Security technology<br />
          <em>and platform ecosystem.</em>
        </h1>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          We partner with leading technology vendors to deliver comprehensive security
          solutions. Our ecosystem approach ensures best-of-breed capabilities across
          identity, network, endpoint, cloud, and data security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techSection?.items.map((item) => (
            <Link
              key={item.id}
              href={`/technology/${item.slug}`}
              className="group block border border-line rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

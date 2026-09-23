import Link from "next/link";
import { PortfolioSection } from "@/lib/portfolio";

interface PortfolioPageProps {
  section: PortfolioSection;
}

export function PortfolioPage({ section }: PortfolioPageProps) {
  return (
    <>
      <section className="section-pad py-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-kicker mb-4">
            <span>{section.number} /</span>
            <span>Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-ink">{section.title}</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mb-12">{section.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, index) => (
              <Link
                key={item.id}
                href={`/${section.slug}/${item.slug}`}
                className="group block"
              >
                <div className="border border-line rounded-lg p-6 hover:border-accent transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-mono text-muted group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

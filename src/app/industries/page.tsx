import { industries } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Industries | OYOON ALTAQNYA",
  description: "Industry-focused IT and cybersecurity capabilities across banking, telecommunications, government, and enterprise sectors.",
};

export default function IndustriesPage() {
  return (
    <main className="section-pad py-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker mb-4">
          <span>07 /</span>
          <span>Industries</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
          Built for<br />
          <em>critical environments.</em>
        </h1>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Technology and security decisions are strongest when they understand the
          operating reality, regulation, and risk profile of the organization they serve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industries/${industry.slug}`}
              className="group block border border-line rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
               <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {industry.highlights.map((h) => (
                  <span key={h} className="text-xs px-2 py-1 bg-paper-light rounded-full text-muted">
                    {h}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

import { portfolioSections } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Cybersecurity | OYOON ALTAQNYA",
  description:
    "Comprehensive cybersecurity consulting, solutions, services, and training designed to protect identities, infrastructure, applications, data, and digital operations.",
};

export default function CybersecurityPage() {
  const cyberSections = portfolioSections.filter(
    (s) =>
      s.title.includes("Cybersecurity") ||
      s.title.includes("Security") ||
      s.slug === "training"
  );

  return (
    <main>
      <section className="page-hero">
        <div>
          <div className="section-label">OYOON ALTAQNYA / Cybersecurity</div>
          <h1>
            Protect. Detect.<br />
            <em>Respond. Recover.</em>
          </h1>
          <p>
            Comprehensive cybersecurity consulting, solutions, services, and
            training designed to protect identities, infrastructure, applications,
            data, and digital operations.
          </p>
        </div>
        <div className="page-meta">
          STRATEGY TO OPERATIONS<br />
          SECURITY BY DESIGN<br />
          READINESS IN PRACTICE
        </div>
      </section>

      <section className="section content-cards">
        <div className="section-label">CYBERSECURITY PORTFOLIO</div>
        <div className="detail-grid">
          {cyberSections.map((section) => (
            <Link className="detail-card" href={`/${section.slug}`} key={section.number}>
              <span>{section.number}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <b className="card-arrow">↗</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

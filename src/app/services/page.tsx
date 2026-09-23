import { portfolioSections } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Services | OYOON ALTAQNYA",
  description:
    "End-to-end IT consulting, solutions, and services from strategy through implementation, validation, and optimization.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <div className="section-label">OYOON ALTAQNYA / Services</div>
          <h1>
            Everything that<br />
            <em>keeps moving.</em>
          </h1>
          <p>
            End-to-end technology and cybersecurity services, from strategy
            through implementation, validation, and optimization.
          </p>
        </div>
        <div className="page-meta">
          INFORMATION TECHNOLOGY<br />
          CYBERSECURITY<br />
          FULL LIFECYCLE CAPABILITY
        </div>
      </section>

      <section className="section content-cards">
        <div className="section-label">01 / SERVICE PORTFOLIO</div>
        <div className="detail-grid">
          {portfolioSections.slice(0, 6).map((section) => (
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

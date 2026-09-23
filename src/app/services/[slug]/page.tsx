import { portfolioSections } from "@/lib/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Services | OYOON ALTAQNYA",
};

export default function ServicesSlugPage() {
  const servicesSections = portfolioSections.filter(
    (s) => s.number === "01" || s.number === "02"
  );

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
        <div className="section-label">02 / DETAILED SERVICES</div>
        <div className="detail-grid">
          {servicesSections.map((section) =>
            section.items.map((item) => (
              <Link className="detail-card" href={`/${section.slug}/${item.slug}`} key={item.id}>
                <span>{section.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <b className="card-arrow">↗</b>
              </Link>
            )),
          )}
        </div>
      </section>
    </main>
  );
}

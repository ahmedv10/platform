import Link from "next/link";
import Image from "next/image";
import { portfolioSections, corePortfolio } from "@/lib/portfolio";
import { blogPosts } from "@/lib/blogs";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot"></span>
            <span>Information Technology & Cybersecurity</span>
          </div>
          <h1>
            Secure Technology.<br />
            <em>Smarter Transformation.</em><br />
            Resilient Business.
          </h1>
          <p className="hero-lede">
            OYOON ALTAQNYA helps organizations design, implement, secure, and optimize
            modern technology environments across IT infrastructure, cloud, applications,
            data, digital transformation, and cybersecurity.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              Talk to an expert <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/services" className="text-link">
              Explore our services <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div className="lifecycle">
            <span>ASSESS</span><i>→</i>
            <span>ADVISE</span><i>→</i>
            <span>ARCHITECT</span><i>→</i>
            <span>IMPLEMENT</span><i>→</i>
            <span>OPTIMIZE</span>
          </div>
        </div>
        <div className="hero-architecture">
          <div className="architecture-grid">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="architecture-core">
            <span>OAT</span>
            <strong>↗</strong>
          </div>
          <div className="architecture-label label-a">SECURE<br />IDENTITY</div>
          <div className="architecture-label label-b">CLOUD<br />FABRIC</div>
          <div className="architecture-label label-c">RESILIENT<br />DATA</div>
          <div className="architecture-line line-a"></div>
          <div className="architecture-line line-b"></div>
          <div className="architecture-line line-c"></div>
          <div className="architecture-meta">ARCHITECTURE / 01<br />SECURITY BY DESIGN</div>
        </div>
      </section>

      <section className="brand-promise">
        <div><span>01</span><strong>Consult.</strong></div>
        <div><span>02</span><strong>Design.</strong></div>
        <div><span>03</span><strong>Implement.</strong></div>
        <div><span>04</span><strong>Secure.</strong></div>
        <div><span>05</span><strong>Optimize.</strong></div>
      </section>

      <section className="section-pad py-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-kicker mb-4">
            <span>01 /</span>
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            One partner.<br />
            <em>Full capability.</em>
          </h2>
          <p className="text-lg text-muted mb-12 max-w-3xl">
            Enterprise-grade expertise across technology, security, and the systems that connect them.
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
      </section>

      <section className="outcomes-section section-pad">
        <div className="section-kicker">
          <span>02 /</span>
          <span>Business outcomes</span>
        </div>
        <h2>
          Make complexity<br />
          <em>work for you.</em>
        </h2>
        <div className="outcomes-grid">
          {[
            ["01", "Protect", "Identities, systems, applications, networks, and data."],
            ["02", "Transform", "Modernize technology and accelerate digital transformation."],
            ["03", "Connect", "Build reliable and secure digital environments."],
            ["04", "Optimize", "Improve technology performance and investment efficiency."],
            ["05", "Respond", "Detect, investigate, and respond to cyber threats."],
            ["06", "Recover", "Build resilience and recover rapidly from disruption."],
          ].map(([num, title, desc]) => (
            <div key={num}>
              <b>{num}</b>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad py-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-kicker mb-4">
            <span>03 /</span>
            <span>Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">
            Useful thinking for<br />
            <em>what comes next.</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group block border border-line rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-muted">
                    {post.category === "cybersecurity" ? "SECURITY" : "TECHNOLOGY"}
                  </span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{post.readTime} min read</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/insights" className="text-link">
              View all insights <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact new-contact section-pad" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">
              <span>Start a conversation</span>
            </p>
            <h2>
              Bring us the<br />
              <em>hard problem.</em>
            </h2>
          </div>
          <Link className="contact-circle" href="mailto:hello@oyoonaltaqnya.com">
            hello<br />
            <span>@</span><br />
            oyoonaltaqnya
          </Link>
        </div>
      </section>
    </>
  );
}

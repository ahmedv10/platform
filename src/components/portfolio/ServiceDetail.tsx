import Link from "next/link";
import { PortfolioItem, PortfolioSection } from "@/lib/portfolio";

interface ServiceDetailProps {
  item: PortfolioItem;
  section: PortfolioSection;
  relatedItems?: PortfolioItem[];
}

export function ServiceDetail({ item, section, relatedItems = [] }: ServiceDetailProps) {
  const detailedContent: Record<string, { overview: string; benefits: string[]; deliverables: string[] }> = {
    "it-strategy": {
      overview: "Strategic technology roadmap and advisory services that align IT investments with business objectives. We help organizations navigate digital transformation while managing risk and optimizing costs.",
      benefits: [
        "Align technology investments with business outcomes",
        "Reduce risk through strategic planning",
        "Accelerate time-to-value for IT initiatives",
        "Optimize resource allocation and budget planning",
      ],
      deliverables: [
        "IT Strategy Document",
        "Technology Roadmap (3-5 years)",
        "Investment Prioritization Framework",
        "Implementation Timeline & Milestones",
      ],
    },
    "enterprise-architecture": {
      overview: "End-to-end architecture design and governance that creates a blueprint for technology transformation. Our architects work with your team to design scalable, secure, and future-ready systems.",
      benefits: [
        "Unified architecture blueprint",
        "Reduced technical debt",
        "Improved interoperability",
        "Faster decision-making",
      ],
      deliverables: [
        "Current State Architecture Assessment",
        "Future State Architecture Blueprint",
        "Migration Strategy & Roadmap",
        "Architecture Governance Framework",
      ],
    },
    "digital-transformation": {
      overview: "Transform your business processes and customer experiences through digital innovation. Our approach combines strategic vision with practical implementation to deliver measurable business outcomes.",
      benefits: [
        "Enhanced operational efficiency",
        "Improved customer experience",
        "New revenue streams",
        "Competitive advantage",
      ],
      deliverables: [
        "Digital Maturity Assessment",
        "Transformation Strategy",
        "Execution Roadmap",
        "Success Metrics & KPIs",
      ],
    },
    "cloud-hybrid-advisory": {
      overview: "Cloud strategy, migration, and optimization advisory services. We help organizations design and execute cloud adoption strategies that balance performance, security, and cost considerations.",
      benefits: [
        "Optimized cloud spend",
        "Secure hybrid architectures",
        "Scalable infrastructure",
        "Reduced operational overhead",
      ],
      deliverables: [
        "Cloud Strategy Document",
        "Migration Plan",
        "Cost Optimization Plan",
        "Governance Framework",
      ],
    },
    "it-governance": {
      overview: "IT governance frameworks and service management to ensure technology investments deliver value. We implement proven frameworks including ITIL, COBIT, and ISO 20000.",
      benefits: [
        "Accountable IT investments",
        "Improved service quality",
        "Regulatory compliance",
        "Risk management",
      ],
      deliverables: [
        "Governance Framework",
        "Service Catalog",
        "SLA Definitions",
        "Performance Metrics",
      ],
    },
    "technology-assessment": {
      overview: "Comprehensive technology assessments and gap analysis to identify improvement opportunities. Our methodology combines technical analysis with business impact evaluation.",
      benefits: [
        "Identify blind spots",
        "Prioritize improvement efforts",
        "Validate architecture decisions",
        "Benchmark against industry",
      ],
      deliverables: [
        "Assessment Report",
        "Gap Analysis",
        "Recommendations",
        "Implementation Roadmap",
      ],
    },
    "data-center": {
      overview: "Data center infrastructure and modernization services. We help organizations build, upgrade, and optimize data center environments that support business growth.",
      benefits: [
        "Higher performance",
        "Improved reliability",
        "Reduced operational costs",
        "Future-proof infrastructure",
      ],
      deliverables: [
        "Infrastructure Assessment",
        "Modernization Plan",
        "Implementation Support",
        "Performance Optimization",
      ],
    },
    "networking": {
      overview: "Enterprise networking and SD-WAN solutions for secure, high-performance connectivity. We design and implement networks that scale with your business needs.",
      benefits: [
        "Global connectivity",
        "Enhanced security",
        "Reduced complexity",
        "Lower operational costs",
      ],
      deliverables: [
        "Network Assessment",
        "SD-WAN Architecture Design",
        "Implementation Plan",
        "Performance Monitoring",
      ],
    },
    "cloud-solutions": {
      overview: "Private, public, and hybrid cloud deployment services. We help organizations implement cloud solutions that are secure, scalable, and cost-effective.",
      benefits: [
        "Scalable infrastructure",
        "Cost efficiency",
        "Business agility",
        "Enhanced security",
      ],
      deliverables: [
        "Cloud Architecture Design",
        "Migration Plan",
        "Security Implementation",
        "Ongoing Optimization",
      ],
    },
    "microsoft": {
      overview: "Microsoft solutions including Microsoft 365, Azure, and security offerings. We help organizations maximize their Microsoft investment with tailored solutions.",
      benefits: [
        "Unified productivity platform",
        "Secure cloud environments",
        "Simplified management",
        "Enhanced collaboration",
      ],
      deliverables: [
        "Microsoft Solution Design",
        "Implementation & Migration",
        "Security Configuration",
        "User Training & Adoption",
      ],
    },
  };

  const content = detailedContent[item.id] || {
    overview: item.description,
    benefits: ["Improved operational efficiency", "Reduced risk and complexity", "Enhanced security posture"],
    deliverables: ["Assessment Report", "Strategy Document", "Implementation Plan"],
  };

  return (
    <>
      <section className="section-pad py-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-kicker mb-4">
            <span>{section.number} /</span>
            <span>{section.title}</span>
          </div>

          <nav className="mb-8 text-sm font-mono text-muted">
            <Link href="/">{section.title} /</Link> {item.title}
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">{item.title}</h1>
            <p className="text-xl text-muted mb-8">{item.description}</p>
            <p className="text-lg text-ink mb-8">{content.overview}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">Typical Deliverables</h2>
              <ul className="space-y-3">
                {content.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {relatedItems.length > 0 && (
            <div className="mt-16 pt-12 border-t border-line">
              <h2 className="text-2xl font-bold text-ink mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedItems.map((relItem) => (
                  <Link
                    key={relItem.id}
                    href={`/${section.slug}/${relItem.slug}`}
                    className="block border border-line rounded-lg p-4 hover:border-accent hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-ink mb-1">{relItem.title}</h3>
                    <p className="text-sm text-muted">{relItem.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              href={`/${section.slug}`}
              className="text-link inline-flex items-center"
            >
              ← Back to {section.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

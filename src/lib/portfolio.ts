export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags?: string[];
  icon?: string;
}

export interface PortfolioSection {
  number: string;
  title: string;
  slug: string;
  description: string;
  items: PortfolioItem[];
}

export const portfolioSections: PortfolioSection[] = [
  {
    number: "01",
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Strategy · Architecture · Transformation · Governance · Assessment",
    items: [
      { id: "it-strategy", title: "IT Strategy & Advisory", slug: "it-strategy-advisory", description: "Strategic technology roadmap and advisory services" },
      { id: "enterprise-architecture", title: "Enterprise Architecture", slug: "enterprise-architecture", description: "End-to-end architecture design and governance" },
      { id: "digital-transformation", title: "Digital Transformation", slug: "digital-transformation", description: "Business process transformation and IT modernization" },
      { id: "cloud-hybrid-advisory", title: "Cloud & Hybrid IT Advisory", slug: "cloud-hybrid-it-advisory", description: "Cloud strategy, migration, and optimization advisory" },
      { id: "it-governance", title: "IT Governance & Service Management", slug: "it-governance-service-management", description: "IT governance frameworks and service management" },
      { id: "technology-assessment", title: "Technology Assessment", slug: "technology-assessment", description: "Comprehensive technology assessments and gap analysis" },
    ],
  },
  {
    number: "02",
    title: "IT Solutions",
    slug: "it-solutions",
    description: "Infrastructure · Networking · Cloud · Microsoft · Applications · Data · AI",
    items: [
      { id: "data-center", title: "IT Infrastructure & Data Center", slug: "infrastructure-data-center", description: "Data center infrastructure and modernization" },
      { id: "networking", title: "Networking & Connectivity", slug: "networking-connectivity", description: "Enterprise networking and SD-WAN solutions" },
      { id: "cloud-solutions", title: "Cloud & Hybrid Cloud", slug: "cloud-hybrid-solutions", description: "Private, public, and hybrid cloud deployment" },
      { id: "microsoft", title: "Microsoft Solutions", slug: "microsoft-solutions", description: "Microsoft 365, Azure, and security solutions" },
      { id: "enterprise-apps", title: "Enterprise Applications & Integration", slug: "enterprise-applications", description: "Business applications and system integration" },
      { id: "data-database", title: "Data & Database Solutions", slug: "data-database-solutions", description: "Database infrastructure and data analytics platforms" },
      { id: "ai-automation", title: "AI & Intelligent Automation", slug: "ai-intelligent-automation", description: "AI solutions and business process automation" },
      { id: "endpoint", title: "Endpoint & Digital Workplace", slug: "endpoint-digital-workplace", description: "Unified endpoint management and digital workplace solutions" },
      { id: "backup-dr", title: "Backup & Disaster Recovery", slug: "backup-disaster-recovery", description: "Enterprise backup and disaster recovery solutions" },
      { id: "monitoring", title: "IT Monitoring & Observability", slug: "monitoring-observability", description: "Infrastructure and application monitoring solutions" },
    ],
  },
  {
    number: "03",
    title: "Cybersecurity Consulting",
    slug: "cyber-consulting",
    description: "Strategy · GRC · Risk · Architecture · Zero Trust · Resilience",
    items: [
      { id: "cyber-strategy", title: "Cybersecurity Strategy", slug: "cybersecurity-strategy", description: "Strategic cybersecurity roadmap and program development" },
      { id: "grc", title: "Governance, Risk & Compliance", slug: "governance-risk-compliance", description: "GRC frameworks and compliance assessments" },
      { id: "cyber-assessment", title: "Cybersecurity Assessment", slug: "cybersecurity-assessment", description: "Maturity, risk, and gap assessments" },
      { id: "security-architecture", title: "Security Architecture", slug: "security-architecture", description: "Enterprise security architecture and Zero Trust" },
      { id: "cloud-security-advisory", title: "Cloud Security Advisory", slug: "cloud-security-advisory", description: "Cloud security strategy and risk assessment" },
      { id: "secops-strategy", title: "Security Operations Strategy", slug: "security-operations-strategy", description: "SOC, SIEM, XDR, and threat detection strategy" },
      { id: "cyber-resilience", title: "Cyber Resilience", slug: "cyber-resilience-strategy", description: "Business continuity and cyber resilience planning" },
    ],
  },
  {
    number: "04",
    title: "Cybersecurity Solutions",
    slug: "cyber-solutions",
    description: "Identity · Endpoint · Exposure · Network · Data · Application · Cloud · Operations",
    items: [
      { id: "identity-ztna", title: "Identity & Zero Trust", slug: "identity-zero-trust", description: "IAM, IGA, PAM, ITDR, MFA, and Zero Trust solutions" },
      { id: "endpoint-xdr", title: "Endpoint & Device Security", slug: "endpoint-device-security", description: "EPP, EDR, XDR, UEM, and MDM solutions" },
      { id: "exposure-management", title: "Exposure & Vulnerability Management", slug: "exposure-management", description: "ASM, EASM, CAASM, VM, and CTEM solutions" },
      { id: "network-security", title: "Network & Infrastructure Security", slug: "network-infrastructure-security", description: "NGFW, NAC, NDR, SWG, SASE, and DDoS protection" },
      { id: "email-security", title: "Email & Collaboration Security", slug: "email-collaboration-security", description: "Email security and Microsoft 365 security solutions" },
      { id: "data-security", title: "Data Security", slug: "data-security", description: "DLP, classification, encryption, and DSPM solutions" },
      { id: "appsec", title: "Application & API Security", slug: "application-api-security", description: "WAF, SAST, DAST, SCA, and DevSecOps solutions" },
      { id: "cloud-security", title: "Cloud Security", slug: "cloud-security-solutions", description: "CSPM, CWPP, CIEM, and container security solutions" },
      { id: "threat-intel", title: "Threat Intelligence", slug: "threat-intelligence", description: "CTI platforms, dark web monitoring, and digital risk protection" },
      { id: "cyber-resilience-sol", title: "Cyber Resilience", slug: "cyber-resilience-solutions", description: "Immutable backup and ransomware recovery solutions" },
      { id: "secops-tools", title: "Security Operations", slug: "security-operations", description: "SIEM, SOAR, XDR, and security analytics platforms" },
    ],
  },
  {
    number: "05",
    title: "Cybersecurity Services",
    slug: "cyber-services",
    description: "Assessment · VAPT · Hardening · Implementation · Incident Response",
    items: [
      { id: "cyber-assessments", title: "Cybersecurity Assessments", slug: "cybersecurity-assessments", description: "Comprehensive security assessments across all domains" },
      { id: "vapt", title: "Vulnerability Assessment & Penetration Testing", slug: "vulnerability-assessment-penetration-testing", description: "Network, web, mobile, cloud, and Active Directory penetration testing" },
      { id: "hardening", title: "Configuration Review & Hardening", slug: "configuration-hardening", description: "Security configuration reviews and system hardening" },
      { id: "sec-implementation", title: "Security Implementation & Integration", slug: "security-implementation-integration", description: "Security solution deployment and integration services" },
      { id: "incident-response", title: "Incident Response & DFIR", slug: "incident-response-dfir", description: "Digital forensics and incident response services" },
      { id: "secops-services", title: "Security Operations Services", slug: "security-operations-services", description: "SOC optimization and threat hunting services" },
      { id: "sec-testing", title: "Security Testing & Validation", slug: "security-testing-validation", description: "Adversary simulation and security control validation" },
    ],
  },
  {
    number: "06",
    title: "Cybersecurity Training",
    slug: "training",
    description: "Awareness · Executive · Technical · SOC · Governance · Exercises",
    items: [
      { id: "awareness", title: "Security Awareness", slug: "security-awareness-training", description: "Cybersecurity awareness and phishing simulations" },
      { id: "executive", title: "Executive & Management Training", slug: "executive-management-training", description: "Board briefings and executive cyber risk training" },
      { id: "technical-training", title: "Technical Training", slug: "technical-cybersecurity-training", description: "Deep technical security training programs" },
      { id: "soc-training", title: "Security Operations Training", slug: "security-operations-training", description: "SOC, SIEM, and threat hunting training" },
      { id: "compliance-training", title: "Governance & Compliance Training", slug: "governance-compliance-training", description: "ISO 27001, NIST CSF, and PCI DSS training" },
      { id: "exercises", title: "Cyber Exercises", slug: "cyber-exercises", description: "Tabletop exercises and red/blue team simulations" },
    ],
  },
  {
    number: "07",
    title: "Specialized Industry Security",
    slug: "industries",
    description: "Banking · Telecom · Government · Enterprise",
    items: [
      { id: "banking", title: "Banking & Financial Services", slug: "banking-financial-services", description: "Swoft security, payment systems, fraud protection" },
      { id: "telecom", title: "Telecommunications", slug: "telecommunications", description: "Telecom infrastructure and signaling security" },
      { id: "government", title: "Government & Public Sector", slug: "government-public-sector", description: "Critical infrastructure and government security" },
      { id: "enterprise", title: "Enterprise", slug: "enterprise-security", description: "Digital workplace and cloud security for enterprises" },
    ],
  },
  {
    number: "08",
    title: "Security Technology & Platform Ecosystem",
    slug: "technology",
    description: "Microsoft · Network · Identity · SOC · Exposure · Data · Application",
    items: [
      { id: "microsoft-security", title: "Microsoft Security", slug: "microsoft-security", description: "Defender, Sentinel, Entra, Intune, Purview solutions" },
      { id: "network-security-tech", title: "Network Security", slug: "network-security-technology", description: "NGFW, NAC, NDR, SASE, SD-WAN Security" },
      { id: "identity-security", title: "Identity Security", slug: "identity-security-technology", description: "IAM, IGA, PAM, ITDR, MFA, ZTNA" },
      { id: "soc-technology", title: "Security Operations", slug: "security-operations-technology", description: "SIEM, SOAR, XDR, EDR, Threat Intelligence" },
      { id: "exposure-tech", title: "Exposure Management", slug: "exposure-management-technology", description: "VM, ASM, EASM, CAASM, CTEM, Patch Management" },
      { id: "data-app-security", title: "Data & Application Security", slug: "data-application-security", description: "DLP, DSPM, Encryption, WAF, API Security, AppSec" },
    ],
  },
  {
    number: "09",
    title: "Business Continuity & Cyber Resilience",
    slug: "resilience",
    description: "Continuity · Recovery · Ransomware · Testing",
    items: [
      { id: "business-continuity", title: "Business Continuity", slug: "business-continuity", description: "BC strategy, BIA, BCP, and crisis management" },
      { id: "disaster-recovery", title: "Disaster Recovery", slug: "disaster-recovery", description: "DR strategy, architecture, implementation, and testing" },
      { id: "ransomware-resilience", title: "Ransomware Resilience", slug: "ransomware-resilience", description: "Readiness, immutable backup, recovery, and simulation" },
      { id: "resilience-testing", title: "Resilience Testing", slug: "resilience-testing", description: "DR exercises, tabletop exercises, and crisis simulations" },
    ],
  },
  {
    number: "10",
    title: "Security Governance & Compliance",
    slug: "governance",
    description: "Frameworks · Governance · Compliance",
    items: [
      { id: "security-frameworks", title: "Security Frameworks", slug: "security-frameworks", description: "NIST CSF, ISO 27001, CIS Controls, COBIT, PCI DSS, SWIFT CSP" },
      { id: "security-governance", title: "Governance", slug: "security-governance", description: "Policies, standards, procedures, risk management, metrics" },
      { id: "compliance", title: "Compliance", slug: "security-compliance", description: "Regulatory compliance, gap assessment, audit readiness" },
    ],
  },
];

export const portfolioNav = portfolioSections.map((s) => ({
  number: s.number,
  title: s.title,
  slug: s.slug,
  description: s.description,
  items: s.items.map((item) => ({
    title: item.title,
    slug: item.slug,
    description: item.description,
  })),
}));

export const industries = [
  { id: "banking", title: "Banking & Financial Services", slug: "banking-financial-services", highlights: ["SWIFT Security", "Payment Security", "Fraud Protection", "ATM & POS Security"] },
  { id: "telecom", title: "Telecommunications", slug: "telecommunications", highlights: ["Core Infrastructure Security", "DNS Security", "DDoS Protection", "Signaling Security"] },
  { id: "government", title: "Government & Public Sector", slug: "government-public-sector", highlights: ["Critical Infrastructure Protection", "Identity Security", "Data Protection"] },
  { id: "enterprise", title: "Enterprise", slug: "enterprise-security", highlights: ["Digital Workplace Security", "Cloud Security", "Application Security"] },
];

export const frameworks = [
  { id: "nist-csf", name: "NIST CSF", description: "NIST Cybersecurity Framework" },
  { id: "iso27001", name: "ISO/IEC 27001", description: "ISO 27001 standard" },
  { id: "cis-controls", name: "CIS Controls", description: "Center for Internet Security Controls" },
  { id: "cis-benchmarks", name: "CIS Benchmarks", description: "Center for Internet Security Benchmarks" },
  { id: "cobit", name: "COBIT", description: "Control Objectives for Information and Related Technologies" },
  { id: "pci-dss", name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
  { id: "swift-csp", name: "SWIFT CSP", description: "SWIFT Customer Security Programme" },
];

export const corePortfolio = {
  it: {
    consulting: "Strategy | Architecture | Transformation | Governance | Assessment",
    solutions: "Infrastructure | Virtualization | Networking | Cloud | Applications | Data | AI | Workplace | Disaster Recovery | Observability",
  },
  cyber: {
    consulting: "Strategy | GRC | Risk | Architecture | Zero Trust | Cloud Security | SOC Strategy | Resilience",
    solutions: "Identity | Endpoint | Exposure | Network | Email | Data | Application | Cloud | SOC | Intelligence | Resilience",
    services: "Assessment | VAPT | Hardening | Implementation | Integration | Incident Response | DFIR | Security Operations | Validation",
    training: "Awareness | Executive | Technical | SOC | Governance | Exercises",
  },
};

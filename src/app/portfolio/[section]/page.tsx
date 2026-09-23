import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioSections } from "@/lib/portfolio";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { ServiceDetail } from "@/components/portfolio/ServiceDetail";

export async function generateStaticParams() {
  return portfolioSections.map((s) => ({ section: s.slug }));
}

interface PortfolioSectionPageProps {
  params: Promise<{ section: string }>;
}

export default async function PortfolioSectionPage({ params }: PortfolioSectionPageProps) {
  const { section: sectionSlug } = await params;
  const section = portfolioSections.find((s) => s.slug === sectionSlug);
  if (!section) notFound();

  return (
    <PortfolioPage section={section} />
  );
}

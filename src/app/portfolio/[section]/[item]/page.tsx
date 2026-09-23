import { notFound } from "next/navigation";
import { portfolioSections } from "@/lib/portfolio";
import { ServiceDetail } from "@/components/portfolio/ServiceDetail";

export async function generateStaticParams() {
  return portfolioSections.flatMap((s) =>
    s.items.map((item) => ({
      section: s.slug,
      item: item.slug,
    })),
  );
}

interface PortfolioItemPageProps {
  params: Promise<{ section: string; item: string }>;
}

export default async function PortfolioItemPage({ params }: PortfolioItemPageProps) {
  const { section: sectionSlug, item: itemSlug } = await params;
  const section = portfolioSections.find((s) => s.slug === sectionSlug);
  if (!section) notFound();

  const item = section.items.find((i) => i.slug === itemSlug);
  if (!item) notFound();

  const relatedItems = section.items.filter((i) => i.id !== item.id);

  return <ServiceDetail item={item} section={section} relatedItems={relatedItems} />;
}

export const dynamic = "force-static";

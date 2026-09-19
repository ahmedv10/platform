import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "OYOON ALTAQNYA | Secure Technology", template: "%s | OYOON ALTAQNYA" },
  description: "OYOON ALTAQNYA is an Information Technology and Cybersecurity partner helping organizations design, transform, secure, and optimize digital environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}

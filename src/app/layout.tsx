import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development Agency in Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development agency Dubai",
    "web development UAE",
    "mobile app development",
    "cloud and DevOps",
    "data centre colocation",
    "AI automation",
    "Vynora Technologies",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Software Development Agency`,
    description: site.description,
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#07080d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    description: site.description,
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  };
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}

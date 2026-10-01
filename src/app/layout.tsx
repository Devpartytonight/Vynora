import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { services } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development Agency in Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  category: "technology",
  keywords: [
    "software development agency Dubai",
    "web development UAE",
    "mobile app development Dubai",
    "custom software development",
    "cloud and DevOps",
    "data centre colocation",
    "AI automation",
    "social media app development",
    "IT infrastructure UAE",
    "Vynora Technologies",
  ],
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    url: "./",
    siteName: site.name,
    title: `${site.name} | Software Development Agency in Dubai`,
    description: site.description,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Development Agency in Dubai`,
    description: site.description,
  },
};

export const viewport: Viewport = { themeColor: "#07080d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site.url}/#org`,
        name: site.legalName,
        alternateName: site.name,
        url: site.url,
        email: site.email,
        description: site.description,
        logo: `${site.url}/apple-icon`,
        image: `${site.url}/opengraph-image`,
        areaServed: ["AE", "SA", "QA", "KW", "BH", "OM", "IN", "GB", "US"],
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.short } })),
      },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#org` }, inLanguage: "en" },
    ],
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

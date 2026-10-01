import type { MetadataRoute } from "next";
import { posts, projects, services } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/process", "/industries", "/about", "/pricing", "/blog", "/careers", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, priority: 0.8 })),
    ...projects.map((s) => ({ url: `${site.url}/work/${s.slug}`, priority: 0.6 })),
    ...posts.map((s) => ({ url: `${site.url}/blog/${s.slug}`, lastModified: s.date, priority: 0.5 })),
  ];
}

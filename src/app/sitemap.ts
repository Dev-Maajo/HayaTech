import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/templates",
    "/library",
    "/projects/hayatools",
    "/blog",
    "/blog/how-browser-based-file-tools-protect-your-privacy",
    "/about",
    "/faqs",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `https://hayatech.dev${route}`,
    lastModified: new Date("2026-07-26"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}

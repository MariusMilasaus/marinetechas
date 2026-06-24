import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/apie-mus", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/paslaugos", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/katalogas", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/kontaktai", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/privatumas", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/slapukai", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/taisykles", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/grazinimas", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://marinetech.lt${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

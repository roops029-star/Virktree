import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.virktree.com.au";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/house-removalists`, priority: 0.9 },
    { url: `${base}/local-moving`, priority: 0.9 },
    { url: `${base}/interstate-removalists`, priority: 0.9 },
    { url: `${base}/packing-and-unpacking`, priority: 0.8 },
    { url: `${base}/office-relocation`, priority: 0.8 },
  ];

  const suburbPages = [
    "removalists-blacktown", "removalists-parramatta", "removalists-penrith",
    "removalists-castle-hill", "removalists-rouse-hill", "removalists-kellyville",
    "removalists-seven-hills", "removalists-merrylands", "removalists-liverpool",
    "removalists-campbelltown",
  ].map((slug) => ({ url: `${base}/${slug}`, priority: 0.8 }));

  return [...staticPages, ...suburbPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}

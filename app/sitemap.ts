import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://firetech.com.ua/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://firetech.com.ua/fipron",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://firetech.com.ua/certificates",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://firetech.com.ua/instructions",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
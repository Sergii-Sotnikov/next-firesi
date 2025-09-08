import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://firetech.com.ua";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
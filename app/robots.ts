import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://rahasia-dagang.com/sitemap.xml",
    host: "https://rahasia-dagang.com",
  };
}

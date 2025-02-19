import { MetadataRoute } from "next";

export default function robots (): MetadataRoute.Robots
{
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://reforger.jallison.co.uk/sitemap.xml",
  };
}

export const dynamic = "force-static";

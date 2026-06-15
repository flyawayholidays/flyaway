import { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flyaway-example.com";

  const destinationEntries = destinations.map((destination) => ({
    url: `${baseUrl}/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...destinationEntries,
  ];
}

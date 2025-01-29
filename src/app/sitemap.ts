import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://thestonekingllc.com/",
      lastModified: new Date(),
    },
    {
      url: "https://thestonekingllc.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://thestonekingllc.com/services",
      lastModified: new Date(),
    },
  ];
}

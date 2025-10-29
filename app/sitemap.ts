import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://exemplo.com";

  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/blog",
    "/depoimentos",
    "/contato",
    "/agendamento",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}


import { MetadataRoute } from "next";
import { services } from "@/content/services";
import { projects } from "@/content/portfolio";

const baseUrl = "https://solved.rw";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
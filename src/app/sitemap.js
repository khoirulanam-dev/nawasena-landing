import { articles, origins, processingMethods, products, site } from "@/data/site";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/products",
    "/origins",
    "/quality",
    "/processing",
    "/export-services",
    "/news",
    "/about",
    "/contact",
    "/request-quote",
    "/sample-request",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const routes = [
    ...staticRoutes,
    ...products.map((product) => `/products/${product.slug}`),
    ...origins.map((origin) => `/origins/${origin.slug}`),
    ...processingMethods.map((method) => `/processing/${method.slug}`),
    ...articles.map((article) => `/news/${article.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

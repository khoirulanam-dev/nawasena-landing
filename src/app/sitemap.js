import { origins, processingMethods, products, site } from "@/data/site";
import { getPublicArticles } from "@/lib/articles";
import { getActiveArticleRedirectPaths } from "@/lib/article-redirects";
import { getDb } from "@/lib/db/client";

export default async function sitemap() {
  const publicArticles = await getPublicArticles();
  const redirectPaths = await getActiveArticleRedirectPaths(getDb());
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
  ];

  return [
    ...routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
    })),
    ...publicArticles.filter((article) => !redirectPaths.has(`/news/${article.slug}`)).map((article) => ({
      url: `${site.domain}/news/${article.slug}`,
      lastModified: new Date(article.updatedAt || article.publishedAt || "2026-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
      images: article.image ? [`${site.domain}${article.image}`] : undefined,
    })),
  ];
}

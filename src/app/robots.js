import { site } from "@/data/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
  };
}

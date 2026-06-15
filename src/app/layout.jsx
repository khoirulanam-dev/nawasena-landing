import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteChrome } from "@/components/site/SiteChrome";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Indonesian Green Coffee Beans Exporter | PT. Nawasena International Group",
    template: "%s | PT. Nawasena International Group",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Indonesian Green Coffee Beans Exporter",
    description: site.description,
    url: site.domain,
    images: ["/images/hero-1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesian Green Coffee Beans Exporter",
    description: site.description,
    images: ["/images/hero-1.webp"],
  },
  icons: {
    icon: "/icon.jpeg",
    apple: "/icon.png",
  },
  verification: {
    google: "DA5mKLnAJpxY9KQGCsy5JIM5S4gXRlI4jigX61kyOHc",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.legalName,
    url: site.domain,
    logo: `${site.domain}/icon.png`,
    email: site.email,
    telephone: site.whatsapp,
    sameAs: [site.linkedin, site.instagram],
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}

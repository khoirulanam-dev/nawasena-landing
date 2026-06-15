import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";
import { products } from "@/data/site";

export default function AdminProductsPage() {
  return (
    <AdminPlaceholder
      eyebrow="Catalogue"
      title="Products"
      description="Manage product names, origins, processing methods, grade, availability, sample status, images, and SEO fields."
      stats={[
        { label: "Products", value: products.length, detail: "Current catalogue entries", tone: "green" },
        { label: "Origins linked", value: new Set(products.map((product) => product.originSlug)).size, detail: "Java Ijen and Aceh Gayo" },
        { label: "Limited lots", value: products.filter((product) => product.status === "Limited").length, detail: "Needs current allocation review" },
      ]}
      items={products.map((product) => ({
        title: product.name,
        description: `${product.origin} - ${product.process} - ${product.shortDescription}`,
        status: product.status,
        tone: product.status === "Limited" ? "amber" : "green",
        meta: product.grade,
      }))}
    />
  );
}

"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}

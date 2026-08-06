"use client";

import { usePathname } from "next/navigation";
import { Faq } from "@/components/Faq";

export function LayoutFaq() {
  const pathname = usePathname();
  const hiddenPaths = ["/privacy-policy", "/refund", "/terms-of-service", "/faq", "/pricing", "/testimonials", "/contact"];

  if (hiddenPaths.includes(pathname) || pathname?.startsWith("/services")) {
    return null;
  }

  return <Faq />;
}

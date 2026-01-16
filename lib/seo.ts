import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function generateSEO({ title, description, path = "" }: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mehulshekhada.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

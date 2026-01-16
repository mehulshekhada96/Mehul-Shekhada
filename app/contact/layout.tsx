import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mehul Shekhada",
  description: "Get in touch with Mehul Shekhada for freelance work, contract development, or collaboration",
  openGraph: {
    title: "Contact | Mehul Shekhada",
    description: "Get in touch with Mehul Shekhada for freelance work, contract development, or collaboration",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

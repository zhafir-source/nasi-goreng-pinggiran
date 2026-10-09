import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/Cart";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Nasi Goreng Pinggiran",
  description:
    "Nasi Goreng Pinggiran — Rasa Tradisional, Kualitas Modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
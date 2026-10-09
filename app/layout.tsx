import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/Cart";

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
      </body>
    </html>
  );
}
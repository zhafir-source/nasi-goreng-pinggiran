
import type { CartItem } from "@/lib/cart";
import { getCartTotal } from "@/lib/cart";

export type PaymentMethod = "QRIS" | "DANA";

export function createWhatsAppUrl(
  cart: CartItem[],
  paymentMethod: PaymentMethod,
) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!phoneNumber) {
    throw new Error("Nomor WhatsApp belum diatur di .env.local");
  }

  if (cart.length === 0) {
    throw new Error("Keranjang masih kosong");
  }

  const lines = [
    "Halo Nasi Goreng Pinggiran!",
    "",
    "Saya ingin memesan untuk ambil sendiri:",
    ...cart.map(
      (item, index) =>
        `${index + 1}. ${item.name}\n   ${item.quantity} x Rp${item.price.toLocaleString("id-ID")} = Rp${(item.quantity * item.price).toLocaleString("id-ID")}`,
    ),
    "",
    `*Total: Rp${getCartTotal(cart).toLocaleString("id-ID")}*`,
    `*Metode pembayaran: ${paymentMethod}*`,
    "",
    "Mohon konfirmasi pesanan saya. Terima kasih!",
  ];

  const message = encodeURIComponent(lines.join("\n"));

  return `https://wa.me/${phoneNumber}?text=${message}`;
}
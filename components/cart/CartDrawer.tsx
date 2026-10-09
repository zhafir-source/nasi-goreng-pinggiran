"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { useCart } from "./Cart";
import CartItem from "./CartItem";
import { getCartTotal, getCartCount } from "@/lib/cart";
import {
  createWhatsAppUrl,
  type PaymentMethod,
} from "@/lib/whatsapp";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const { cart } = useCart();

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("QRIS");

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function handleWhatsAppOrder() {
    try {
      if (cart.length === 0) {
        alert("Keranjang masih kosong.");
        return;
      }

      const url = createWhatsAppUrl(cart, paymentMethod);

      // Buka WhatsApp melalui aksi klik pengguna.
      const whatsappWindow = window.open("about:blank", "_blank");

      if (!whatsappWindow) {
        alert(
          "WhatsApp gagal dibuka. Izinkan pop-up browser, lalu coba lagi.",
        );
        return;
      }

      whatsappWindow.opener = null;
      whatsappWindow.location.href = url;

      // Keranjang sengaja tidak dikosongkan.
      // Pengguna dapat kembali ke website dan melanjutkan pesanannya.
      onClose();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Gagal membuka WhatsApp. Silakan coba lagi.",
      );
    }
  }

  if (!open) return null;

  const total = getCartTotal(cart);
  const count = getCartCount(cart);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Tutup keranjang"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="relative flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#101010] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <h2
              id="cart-title"
              className="text-lg font-bold text-white"
            >
              Keranjang Saya
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {mounted
                ? `${count} item`
                : "Memuat keranjang..."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Tutup keranjang"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {!mounted ? (
            <p className="py-10 text-center text-sm text-zinc-500">
              Memuat keranjang...
            </p>
          ) : cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-4xl" aria-hidden="true">
                🛒
              </span>

              <p className="mt-4 font-semibold text-white">
                Keranjang masih kosong
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Tambahkan menu favoritmu terlebih dahulu.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-400"
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {mounted && cart.length > 0 && (
          <div className="border-t border-white/10 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                Total Harga
              </span>

              <span className="text-xl font-bold text-amber-500">
                Rp{total.toLocaleString("id-ID")}
              </span>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-3 text-sm font-semibold text-white">
                Pilih metode pembayaran
              </legend>

              <div className="grid grid-cols-2 gap-3">
                {(["QRIS", "DANA"] as const).map((method) => (
                  <label
                    key={method}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm font-semibold transition ${
                      paymentMethod === method
                        ? "border-amber-500 bg-amber-500/10 text-amber-400"
                        : "border-white/10 text-zinc-300 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="accent-amber-500"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <p className="mt-3 text-xs text-zinc-500">
              Pembayaran dilakukan sesuai konfirmasi admin melalui WhatsApp.
            </p>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="mt-5 w-full rounded-xl bg-amber-500 px-5 py-4 text-sm font-bold text-black transition hover:bg-amber-400"
            >
              Pesan via WhatsApp
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
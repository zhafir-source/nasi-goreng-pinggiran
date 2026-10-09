
"use client";

import Image from "next/image";
import type { CartItem as CartItemType } from "@/lib/cart";
import { useCart } from "./Cart";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex gap-4 border-b border-white/10 py-4 last:border-b-0">
      {/* Image */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#1c1c1c]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="truncate text-sm font-semibold text-white">
              {item.name}
            </h3>

            <p className="mt-1 text-sm font-bold text-amber-500">
              Rp{item.price.toLocaleString("id-ID")}
            </p>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            className="text-xs text-zinc-500 transition hover:text-red-400"
            aria-label={`Hapus ${item.name}`}
          >
            Hapus
          </button>
        </div>

        {/* Quantity */}
        <div className="mt-3 flex w-fit items-center overflow-hidden rounded-lg border border-white/10">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label={`Kurangi ${item.name}`}
          >
            −
          </button>

          <span className="flex h-8 min-w-8 items-center justify-center border-x border-white/10 px-2 text-sm font-semibold text-white">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label={`Tambah ${item.name}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/components/cart/Cart";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition duration-300 hover:-translate-y-1 hover:border-amber-500/30">
      {/* Foto Menu */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1c1c]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Informasi Menu */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-white">
              {item.name}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              {item.category}
            </p>
          </div>

          <p className="whitespace-nowrap font-bold text-amber-500">
            Rp{item.price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Deskripsi */}
        <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">
          {item.description}
        </p>

        {/* Tombol Keranjang */}
        <button
          type="button"
          onClick={() => addToCart(item)}
          className="mt-5 w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-amber-400"
        >
          Tambah
        </button>
      </div>
    </article>
  );
}
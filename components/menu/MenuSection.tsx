"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";
import MenuSearch from "./MenuSearch";

const categories = [
  "Semua",
  "Spesial",
  "Pedas",
  "Seafood",
  "Ayam",
  "Vegetarian",
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = menuItems.filter((item) => {
    const matchCategory =
      activeCategory === "Semua" ||
      item.category === activeCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section id="menu" className="section border-t border-white/5">
      <div className="container">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Menu Kami
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Aneka Menu Nasi Goreng
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            Pilihan nasi goreng dengan cita rasa khas untuk menemani setiap
            momen.
          </p>
        </div>

        {/* Search */}
        <MenuSearch
          value={searchQuery}
          onChange={setSearchQuery}
        />

        {/* Category Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-amber-500 font-semibold text-black"
                    : "border border-white/10 text-zinc-400 hover:border-amber-500/50 hover:text-amber-500"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-[#151515] px-6 py-12 text-center">
            <p className="text-zinc-400">
              Menu belum tersedia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
"use client";

type MenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MenuSearch({
  value,
  onChange,
}: MenuSearchProps) {
  return (
    <div className="mb-6">
      <label htmlFor="menu-search" className="sr-only">
        Cari menu
      </label>

      <div className="relative">
        <input
          id="menu-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Cari menu nasi goreng..."
          className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-500/60"
        />
      </div>
    </div>
  );
}
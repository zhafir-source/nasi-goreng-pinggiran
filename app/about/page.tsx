
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#101010] px-5 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-amber-500 transition hover:text-amber-400"
        >
          ← Kembali ke Beranda
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
          Tentang Kami
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Nasi Goreng Pinggiran
        </h1>

        <p className="mt-6 text-lg font-medium text-zinc-300">
          Rasa Tradisional, Kualitas Modern
        </p>

        <p className="mt-5 leading-8 text-zinc-400">
          Nasi Goreng Pinggiran hadir dengan cita rasa nasi goreng khas,
          bumbu pilihan, dan sentuhan modern. Kami ingin menghadirkan
          hidangan yang lezat dan nikmat untuk menemani setiap momenmu.
        </p>

        <Link
          href="/#menu"
          className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
        >
          Lihat Menu
        </Link>
      </div>
    </main>
  );
}
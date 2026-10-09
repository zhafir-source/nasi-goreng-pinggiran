
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="container grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              Nasi Goreng Pinggiran
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rasa Tradisional
            <br />
            dengan{" "}
            <span className="text-amber-500">
              Sentuhan Modern
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Nikmati nasi goreng dengan cita rasa khas yang dibuat dari bahan
            berkualitas dan bumbu pilihan. Sederhana, lezat, dan bikin ingin
            kembali lagi.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-amber-400"
            >
              Lihat Menu
            </a>

            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-amber-500 hover:text-amber-500"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Benefits */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-sm font-bold text-white">Fresh</p>
              <p className="mt-1 text-xs text-zinc-500">
                Dibuat langsung
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Berkualitas
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Bahan pilihan
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-white">Terjangkau</p>
              <p className="mt-1 text-xs text-zinc-500">
                Harga bersahabat
              </p>
            </div>
          </div>
        </div>

        {/* Food Image */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]">
            <Image
              src="/images/hero/nasi-goreng-hero.jpg"
              alt="Nasi Goreng Vegetarian"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wider text-zinc-400">
                Mulai dari
              </p>
              <p className="mt-1 text-xl font-bold text-white">
                Rp15.000
              </p>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-600/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
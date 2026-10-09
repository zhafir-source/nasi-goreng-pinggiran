
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/menu/MenuSection";
import { businessInfo } from "@/data/business";

export default function Home() {
  const mapsUrl = businessInfo.googleMapsUrl;
  const mapsEmbedUrl = businessInfo.googleMapsEmbedUrl;
  const googleReviewUrl = businessInfo.googleReviewUrl;

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <MenuSection />

        {/* Tentang Kami */}
        <section
          id="tentang"
          className="border-t border-white/5 px-5 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Cerita Kami
            </p>

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Tentang Kami
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              {businessInfo.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Bumbu Pilihan
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Rasa Tradisional
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Kualitas Modern
              </span>
            </div>
          </div>
        </section>

        {/* Ulasan Google */}
        <section
          id="testimoni"
          className="border-t border-white/5 px-5 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                Ulasan Pelanggan
              </p>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Ulasan Google
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                Pendapat pelanggan membantu kami terus meningkatkan
                kualitas rasa dan pelayanan {businessInfo.name}.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-[#151515] p-6 md:p-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-bold">
                    <span className="bg-gradient-to-br from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
                      G
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {businessInfo.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Profil ulasan Google
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-500">
                  {googleReviewUrl ? "Google Reviews" : "Demo"}
                </span>
              </div>

              <div className="my-6 border-t border-white/10" />

              <div className="text-center">
                {googleReviewUrl ? (
                  <>
                    <p className="text-sm leading-6 text-zinc-400">
                      Lihat ulasan pelanggan melalui profil Google
                      bisnis kami.
                    </p>

                    <a
                      href={googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400"
                    >
                      Lihat Ulasan Google ↗
                    </a>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-white">
                      Ulasan pelanggan akan ditampilkan di sini
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Bagian ini masih berupa pratinjau. Ulasan dan
                      rating asli akan tersedia setelah tautan profil
                      Google bisnis ditambahkan.
                    </p>

                    <a
                      href="#kontak"
                      className="mt-6 inline-flex items-center justify-center rounded-xl border border-amber-500/30 px-6 py-3 text-sm font-semibold text-amber-500 transition hover:bg-amber-500 hover:text-black"
                    >
                      Hubungi Kami
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Kontak */}
        <section
          id="kontak"
          className="border-t border-white/5 px-5 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Hubungi Kami
            </p>

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ada yang ingin dipesan?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
              Nikmati menu favoritmu dari {businessInfo.name}. Hubungi
              kami untuk informasi dan pemesanan.
            </p>

            <a
              href="#menu"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Lihat Menu
            </a>
          </div>
        </section>

        {/* Lokasi Google Maps - dummy Malang */}
        <section
          id="lokasi"
          className="border-t border-white/5 px-5 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-xl shadow-black/20">
              <div className="h-72 w-full bg-[#1c1c1c] sm:h-96">
                <iframe
                  title={`Peta lokasi ${businessInfo.name}`}
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    {businessInfo.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {businessInfo.address}
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    {businessInfo.openingHours}
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
                >
                  Buka Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
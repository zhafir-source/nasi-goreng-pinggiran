
export const businessInfo = {
  // Identitas bisnis
  name: "Nasi Goreng Pinggiran",
  tagline: "Rasa Tradisional, Kualitas Modern",

  description:
    "Nasi Goreng Pinggiran hadir dengan cita rasa nasi goreng khas, bumbu pilihan, dan sentuhan modern. Kami ingin menghadirkan hidangan yang lezat dan nikmat untuk menemani setiap momenmu.",

  // Informasi lokasi bisnis
  address: "Alamat usaha akan diperbarui",
  city: "Malang, Jawa Timur",
  openingHours: "Jam operasional belum ditentukan",

  // Kontak WhatsApp
  // Format nomor: 6281234567890 (tanpa + atau spasi)
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",

  // Google Maps: tetap menggunakan lokasi dummy Malang
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    "https://maps.google.com",

  googleMapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://maps.google.com/maps?q=Malang&t=&z=13&ie=UTF8&iwloc=&output=embed",

  // Isi jika nanti sudah memiliki link ulasan Google asli
  googleReviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",

  // Metode pembayaran yang tersedia
  paymentMethods: ["QRIS", "DANA"] as const,

  // Metode penerimaan pesanan
  orderMethod: "Pickup",
} as const;
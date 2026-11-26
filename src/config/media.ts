/**
 * ================================================================
 *  MEDIA SAHABI — edit file ini untuk mengganti video & foto
 * ================================================================
 *
 *  Taruh file di folder:  public/media/
 *  lalu tulis path-nya di bawah dengan awalan "/media/...".
 *
 *  Kalau file belum ada, website otomatis menampilkan placeholder
 *  (tidak error), jadi aman untuk di-deploy kapan saja.
 */

type VideoMeta = {
  title: string;
  caption: string;
  /** "portrait" untuk video vertikal (rekaman HP), "landscape" untuk video horizontal 16:9 */
  orientation: "portrait" | "landscape";
};

export type DemoVideo =
  | ({ type: "file"; src: string; poster?: string } & VideoMeta)
  | ({ type: "youtube"; id: string } & VideoMeta); // id = bagian setelah "watch?v=" di link YouTube

/** Video demo produk (muncul di section Demo & popup tombol "Tonton Demo"). */
export const demoVideo: DemoVideo = {
  type: "file",
  src: "/media/demo-sahabi.mp4", // .mp4 (H.264), sebaiknya < 50 MB
  // poster: "/media/demo-poster.jpg", // opsional: thumbnail sebelum video diputar
  orientation: "portrait",
  title: "Uji Sensor Detak Jantung",
  caption: "Pengujian pembacaan detak jantung secara real-time pada prototype SAHABI.",
};

/** Poin penjelasan yang tampil di samping video demo. */
export const demoSteps = [
  { title: "Sensor membaca denyut", desc: "Jari diletakkan pada sensor detak jantung yang terhubung ke ESP32." },
  { title: "ESP32 memproses sinyal", desc: "Mikrokontroler mengolah data mentah menjadi nilai BPM." },
  { title: "Data tampil real-time", desc: "Nilai BPM muncul di Serial Monitor dan layar OLED prototype." },
];
// Alternatif YouTube (lebih ringan untuk Vercel):
// export const demoVideo: DemoVideo = { type: "youtube", id: "XXXXXXXXXXX", title: "...", caption: "..." };

export type DocPhoto = {
  src: string;
  title: string;
  caption: string;
};

/**
 * Foto dokumentasi prototype.
 * Foto pertama tampil besar (format portrait), foto berikutnya tampil sebagai grid di sampingnya.
 */
export const documentationPhotos: DocPhoto[] = [
  {
    src: "/media/prototype-1.jpg",
    title: "Prototype SAHABI",
    caption: "Prototype SAHABI bersama website-nya, dipamerkan langsung oleh tim pengembang.",
  },
  // Tambah foto lain di sini, contoh:
  // { src: "/media/prototype-2.jpg", title: "Uji Coba Sensor", caption: "Pengujian sensor detak jantung." },
];

/** Komponen prototype yang ditampilkan di samping foto dokumentasi. */
export const prototypeHighlights = [
  { label: "Mikrokontroler ESP32", value: "Otak pemrosesan data sensor & konektivitas WiFi/Bluetooth" },
  { label: "Sensor Detak Jantung", value: "Membaca BPM secara real-time dari ujung jari" },
  { label: "Layar OLED", value: "Menampilkan data kesehatan langsung di perangkat" },
  { label: "Integrasi Web", value: "Data prototype terhubung dengan dashboard SAHABI" },
];

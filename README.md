# SAHABI: Sahabat Ibadah Haji

Landing page untuk **SAHABI**, smartwatch haji inklusif sebagai nilai tambah layanan BPKH.
Dibangun dengan Vite + React + TypeScript + Tailwind CSS.

## Menjalankan di komputer

```bash
npm install
npm run dev        # buka http://localhost:5173
npm run build      # build produksi ke folder dist/
```

## Menambahkan video demo & foto dokumentasi

1. Salin file ke `public/media/` (lihat `public/media/README.txt` untuk nama file default).
2. Ubah judul/caption, atau ganti ke video YouTube, di `src/config/media.ts`.

## Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Di vercel.com, pilih **Add New → Project**, lalu import repository tersebut.
3. Vercel otomatis mendeteksi Vite (Build: `npm run build`, Output: `dist`). Klik **Deploy**.

Atau lewat CLI: `npx vercel` (preview) lalu `npx vercel --prod`.

## Struktur

```
src/
  config/media.ts        <- video & foto (edit di sini)
  components/            <- setiap section halaman
    Hero, BpkhValue, Features, Technology, Demo,
    Documentation, ProductGallery, About, Contact, Footer
public/media/            <- file video & foto
```

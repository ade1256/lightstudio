# Lightstudio Website

Landing page + dashboard content management untuk **Foto Studio Purwokerto (Lightstudio)**.

Project ini dibangun dengan:
- **Next.js 16 (App Router)**
- **Tailwind CSS 4**
- **Sanity API** (sebagai content backend)

---

## Ringkasan Arsitektur

### Public site
- `/` → landing page utama
- `/portfolio` → galeri portfolio (masonry + filter kategori)

### Dashboard (admin)
- `/dashboard/login` → login admin
- `/dashboard` → manajemen konten (portfolio, paket harga, kontak/info bisnis)

### API internal (dipakai dashboard)
- `GET/POST /api/cms/portfolio`
- `PATCH/DELETE /api/cms/portfolio/:id`
- `GET/POST /api/cms/pricing`
- `PATCH/DELETE /api/cms/pricing/:id`
- `GET/PUT /api/cms/settings`
- `POST /api/cms/upload-image`
- `POST /api/dashboard/login`
- `POST /api/dashboard/logout`

---

## Data yang Bisa Diubah dari Dashboard

1. **Portfolio**
   - judul
   - kategori
   - image URL (atau upload langsung ke Sanity)
   - alt text
   - urutan tampil

2. **Paket harga**
   - kategori paket
   - item paket
   - harga
   - detail/notes per paket

3. **Kontak & info bisnis**
   - WhatsApp URL
   - email
   - nomor telepon
   - Instagram URL
   - Instagram handle
   - alamat
   - jam buka

Data kontak ini otomatis dipakai di section booking + footer landing page.

---

## Environment Variables

Buat file `.env.local` dan isi:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-15
SANITY_API_WRITE_TOKEN=your_sanity_write_token

# Dashboard auth
DASHBOARD_USERNAME=admin
DASHBOARD_PASSWORD=your_strong_password
DASHBOARD_SESSION_SECRET=your_long_random_secret

# Legacy CMS key (masih diterima oleh API, optional)
CMS_ACCESS_KEY=optional_legacy_key
```

> Minimal untuk operasi normal: env Sanity + env dashboard auth.

---

## Local Development

```bash
npm install
npm run dev
```

Buka:
- Public: `http://localhost:3000`
- Dashboard login: `http://localhost:3000/dashboard/login`

---

## Deploy (Vercel)

1. Push repo ke GitHub
2. Import project ke Vercel
3. Set semua Environment Variables
4. Deploy

Pastikan `SANITY_API_WRITE_TOKEN` punya permission write untuk dataset yang dipakai.

---

## Catatan Penting untuk Agent/Developer Lain

- Source konten public **jangan hardcode ulang di komponen** bila sudah tersedia via helper CMS.
- Jika ubah kontrak data settings, update serentak:
  - `src/types/index.ts`
  - `src/lib/cms-content.ts`
  - `src/app/api/cms/settings/route.ts`
  - form dashboard tab Settings
  - komponen landing yang mengonsumsi settings
- Route `/dashboard/*` diproteksi middleware session cookie.
- File image besar ada di `public/images` dan `public/logo`.

---

## Status Singkat Fitur

- [x] Landing page production-ready
- [x] Portfolio masonry
- [x] Pricing management form detail
- [x] Kontak bisnis editable dari dashboard
- [x] Dashboard login auth + logout
- [x] Upload image ke Sanity

# AGENT_NOTES.md

Panduan cepat untuk agent/developer baru agar bisa langsung kerja tanpa baca seluruh codebase.

## 1) Jalur kerja utama

1. Login ke dashboard di `/dashboard/login`
2. Kelola konten di `/dashboard`
3. Cek hasil di `/` dan `/portfolio`

## 2) Modul penting

- `src/app/dashboard/page.tsx` → UI dashboard (portfolio, pricing, settings)
- `src/app/api/cms/**` → API CRUD Sanity
- `src/lib/cms-content.ts` → fetch konten untuk public pages + fallback
- `src/components/sections/*` → section landing page

## 3) Data fallback

- Portfolio/testimonials/services/settings fallback ada di `src/data/site-data.ts`
- Pricing fallback ada di `src/sanity/data/pricingCatalog.ts`

Kalau Sanity tidak terkonfigurasi, public site tetap jalan dengan fallback ini.

## 4) Auth dashboard

- Middleware: `middleware.ts`
- Login API: `src/app/api/dashboard/login/route.ts`
- Logout API: `src/app/api/dashboard/logout/route.ts`
- Utils auth: `src/lib/dashboard-auth.ts`

## 5) Hal yang jangan diubah sembarangan

- Struktur payload API CMS (agar form dashboard tetap sinkron)
- Nama field settings (`whatsappUrl`, `email`, `phone`, dsb)
- Mekanisme upload gambar `/api/cms/upload-image`

## 6) Checklist sebelum commit

- `npm run lint`
- Tes login dashboard
- Tes create/update/delete portfolio
- Tes create/update/delete pricing
- Tes update settings kontak (cek refleksi di landing footer/booking)

"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { portfolioCategories } from "@/data/site-data";

type PortfolioItem = { _id: string; title: string; category: string; imageUrl: string; alt: string; order: number };
type PricingItem = { name: string; price: string; notes: string[] };
type PricingCategory = { _id: string; category: string; order: number; items: PricingItem[] };

const portfolioCategoryOptions = portfolioCategories.filter((c) => c !== "All");

const emptyPortfolioForm = { title: "", category: "Special Session", imageUrl: "", alt: "", order: 0 };
const emptyPricingItem = (): PricingItem => ({ name: "", price: "", notes: [""] });
const emptyPricingForm = { category: "", order: 0, items: [emptyPricingItem()] };

const inputCls = "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const cardCls = "rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)]";

export default function CmsPage() {
  const [cmsKey, setCmsKey] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("cms-key") || "" : ""));
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]);
  const [pricingList, setPricingList] = useState<PricingCategory[]>([]);

  const [portfolioEditId, setPortfolioEditId] = useState<string | null>(null);
  const [portfolioForm, setPortfolioForm] = useState(emptyPortfolioForm);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [pricingEditId, setPricingEditId] = useState<string | null>(null);
  const [pricingForm, setPricingForm] = useState(emptyPricingForm);
  const [seeding, setSeeding] = useState(false);

  async function loadData() {
    const [portfolioRes, pricingRes] = await Promise.all([fetch("/api/cms/portfolio"), fetch("/api/cms/pricing")]);
    setPortfolioList(await portfolioRes.json());
    setPricingList(await pricingRes.json());
  }

  useEffect(() => {
    loadData();
  }, []);

  async function request(url: string, method: "POST" | "PATCH" | "DELETE", body?: unknown) {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-cms-key": cmsKey,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) throw new Error("Request gagal. Cek CMS_ACCESS_KEY dan data.");
    return res.json();
  }

  async function seedAllToSanity() {
    try {
      setSeeding(true);
      await request("/api/cms/seed", "POST");
      await loadData();
      alert("Seed berhasil: portfolio, pricing, services, testimonials sudah dikirim ke Sanity.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Seed gagal");
    } finally {
      setSeeding(false);
    }
  }

  async function savePortfolio(e: FormEvent) {
    e.preventDefault();

    if (portfolioEditId) {
      await request(`/api/cms/portfolio/${portfolioEditId}`, "PATCH", portfolioForm);
    } else {
      await request("/api/cms/portfolio", "POST", portfolioForm);
    }

    setPortfolioEditId(null);
    setPortfolioForm(emptyPortfolioForm);
    await loadData();
  }

  async function uploadPortfolioImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/cms/upload-image", {
      method: "POST",
      headers: {
        "x-cms-key": cmsKey,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Upload gambar gagal");
    const data = await res.json();
    setPortfolioForm((prev) => ({ ...prev, imageUrl: data.url || "" }));
  }

  async function deletePortfolio(id: string) {
    await request(`/api/cms/portfolio/${id}`, "DELETE");
    await loadData();
  }

  async function savePricing(e: FormEvent) {
    e.preventDefault();

    const payload = {
      category: pricingForm.category,
      order: Number(pricingForm.order || 0),
      items: pricingForm.items.map((item) => ({
        name: item.name,
        price: item.price,
        notes: item.notes.map((note) => note.trim()).filter(Boolean),
      })),
    };

    if (pricingEditId) {
      await request(`/api/cms/pricing/${pricingEditId}`, "PATCH", payload);
    } else {
      await request("/api/cms/pricing", "POST", payload);
    }

    setPricingEditId(null);
    setPricingForm(emptyPricingForm);
    await loadData();
  }

  async function deletePricing(id: string) {
    await request(`/api/cms/pricing/${id}`, "DELETE");
    await loadData();
  }

  function setPricingItem(index: number, patch: Partial<PricingItem>) {
    setPricingForm((prev) => {
      const items = [...prev.items];
      items[index] = { ...items[index], ...patch };
      return { ...prev, items };
    });
  }

  function setPricingNote(itemIndex: number, noteIndex: number, value: string) {
    setPricingForm((prev) => {
      const items = [...prev.items];
      const notes = [...items[itemIndex].notes];
      notes[noteIndex] = value;
      items[itemIndex] = { ...items[itemIndex], notes };
      return { ...prev, items };
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className={`${cardCls} p-6`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">Lightstudio CMS</p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">Dashboard Konten</h1>
          <p className="mt-2 text-sm text-slate-500">Tampilan dibuat lebih clean ala admin panel modern (gaya Ant Design) agar nyaman dipakai harian.</p>
        </header>

        <section className={`${cardCls} p-5`}>
          <h2 className="text-base font-semibold text-slate-900">Akses & Seeder</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
            <input
              value={cmsKey}
              onChange={(e) => setCmsKey(e.target.value)}
              onBlur={() => localStorage.setItem("cms-key", cmsKey)}
              placeholder="CMS_ACCESS_KEY"
              className={inputCls}
            />
            <button type="button" onClick={seedAllToSanity} className="h-10 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
              {seeding ? "Seeding..." : "Seed Semua Data"}
            </button>
          </div>
        </section>

        <section className={`${cardCls} p-5`}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Portfolio</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{portfolioList.length} item</span>
          </div>

          <form onSubmit={savePortfolio} className="grid gap-3 md:grid-cols-6">
            <input className={inputCls} placeholder="Judul foto" value={portfolioForm.title} onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })} />
            <select className={inputCls} value={portfolioForm.category} onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}>
              {portfolioCategoryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <input className={inputCls} placeholder="URL gambar" value={portfolioForm.imageUrl} onChange={(e) => setPortfolioForm({ ...portfolioForm, imageUrl: e.target.value })} />
            <input className={inputCls} placeholder="Alt text" value={portfolioForm.alt} onChange={(e) => setPortfolioForm({ ...portfolioForm, alt: e.target.value })} />
            <input type="number" className={inputCls} placeholder="Urutan" value={portfolioForm.order} onChange={(e) => setPortfolioForm({ ...portfolioForm, order: Number(e.target.value) })} />
            <button className="h-10 rounded-md bg-slate-900 px-3 text-sm font-semibold text-white hover:bg-slate-700">{portfolioEditId ? "Update" : "Tambah"}</button>
          </form>

          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <input
              type="file"
              accept="image/*"
              className={`${inputCls} file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-sm`}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  setUploadingImage(true);
                  await uploadPortfolioImage(file);
                } catch (error) {
                  alert(error instanceof Error ? error.message : "Upload gagal");
                } finally {
                  setUploadingImage(false);
                  e.currentTarget.value = "";
                }
              }}
            />
            <span className="text-xs text-slate-500">{uploadingImage ? "Mengunggah gambar..." : "Upload gambar ke Sanity"}</span>
          </div>

          {portfolioForm.imageUrl ? (
            <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
              <Image src={portfolioForm.imageUrl} alt="Preview" width={960} height={320} className="h-40 w-full rounded object-cover" />
            </div>
          ) : null}

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
            {portfolioList.map((item) => (
              <div key={item._id} className="flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3 text-sm last:border-b-0">
                <p className="text-slate-700">{item.title} · {item.category}</p>
                <div className="space-x-4">
                  <button
                    onClick={() => {
                      setPortfolioEditId(item._id);
                      setPortfolioForm({ title: item.title, category: item.category, imageUrl: item.imageUrl, alt: item.alt, order: item.order });
                    }}
                    className="font-medium text-blue-600"
                  >Edit</button>
                  <button onClick={() => deletePortfolio(item._id)} className="font-medium text-red-600">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${cardCls} p-5`}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Paket Harga</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{pricingList.length} kategori</span>
          </div>

          <form onSubmit={savePricing} className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              <input className={inputCls} placeholder="Nama kategori" value={pricingForm.category} onChange={(e) => setPricingForm({ ...pricingForm, category: e.target.value })} />
              <input type="number" className={inputCls} placeholder="Urutan" value={pricingForm.order} onChange={(e) => setPricingForm({ ...pricingForm, order: Number(e.target.value) })} />
              <button className="h-10 rounded-md bg-slate-900 px-3 text-sm font-semibold text-white hover:bg-slate-700">{pricingEditId ? "Update Kategori" : "Tambah Kategori"}</button>
            </div>

            <div className="space-y-3">
              {pricingForm.items.map((item, itemIndex) => (
                <div key={`item-${itemIndex}`} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="grid gap-2 md:grid-cols-[1fr_220px_auto]">
                    <input className={inputCls} placeholder="Nama paket" value={item.name} onChange={(e) => setPricingItem(itemIndex, { name: e.target.value })} />
                    <input className={inputCls} placeholder="Harga" value={item.price} onChange={(e) => setPricingItem(itemIndex, { price: e.target.value })} />
                    <button type="button" onClick={() => setPricingForm((prev) => ({ ...prev, items: prev.items.filter((_, idx) => idx !== itemIndex) || [emptyPricingItem()] }))} className="h-10 rounded-md border border-red-200 bg-white px-3 text-sm text-red-600">Hapus paket</button>
                  </div>

                  <div className="mt-3 space-y-2">
                    {item.notes.map((note, noteIndex) => (
                      <div key={`note-${itemIndex}-${noteIndex}`} className="grid gap-2 md:grid-cols-[1fr_auto]">
                        <input className={inputCls} placeholder="Detail paket" value={note} onChange={(e) => setPricingNote(itemIndex, noteIndex, e.target.value)} />
                        <button type="button" onClick={() => setPricingItem(itemIndex, { notes: item.notes.filter((_, idx) => idx !== noteIndex) || [""] })} className="h-10 rounded-md border border-red-200 bg-white px-3 text-sm text-red-600">Hapus detail</button>
                      </div>
                    ))}

                    <button type="button" onClick={() => setPricingItem(itemIndex, { notes: [...item.notes, ""] })} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">+ Tambah detail</button>
                  </div>
                </div>
              ))}

              <button type="button" onClick={() => setPricingForm((prev) => ({ ...prev, items: [...prev.items, emptyPricingItem()] }))} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">+ Tambah paket baru</button>
            </div>
          </form>

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
            {pricingList.map((category) => (
              <div key={category._id} className="flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3 text-sm last:border-b-0">
                <p className="text-slate-700">{category.category} · {category.items?.length || 0} paket</p>
                <div className="space-x-4">
                  <button
                    onClick={() => {
                      setPricingEditId(category._id);
                      setPricingForm({
                        category: category.category,
                        order: category.order,
                        items: (category.items?.length ? category.items : [emptyPricingItem()]).map((it) => ({
                          name: it.name || "",
                          price: it.price || "",
                          notes: it.notes?.length ? it.notes : [""],
                        })),
                      });
                    }}
                    className="font-medium text-blue-600"
                  >Edit</button>
                  <button onClick={() => deletePricing(category._id)} className="font-medium text-red-600">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

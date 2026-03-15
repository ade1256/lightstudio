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

export default function CmsPage() {
  const [cmsKey, setCmsKey] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("cms-key") || "" : ""));
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]);
  const [pricingList, setPricingList] = useState<PricingCategory[]>([]);

  const [portfolioEditId, setPortfolioEditId] = useState<string | null>(null);
  const [portfolioForm, setPortfolioForm] = useState(emptyPortfolioForm);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [pricingEditId, setPricingEditId] = useState<string | null>(null);
  const [pricingForm, setPricingForm] = useState(emptyPricingForm);

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
    <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8">
      <header className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <h1 className="text-3xl font-semibold text-[var(--text)]">Dashboard CMS Lightstudio</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Kelola portfolio dan paket harga langsung ke Sanity API tanpa edit kode.</p>
      </header>

      <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <h2 className="text-lg font-semibold text-[var(--text)]">Akses Dashboard</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">Masukkan CMS key, lalu key akan disimpan di browser ini.</p>
        <input
          value={cmsKey}
          onChange={(e) => setCmsKey(e.target.value)}
          onBlur={() => localStorage.setItem("cms-key", cmsKey)}
          placeholder="CMS_ACCESS_KEY"
          className="mt-3 w-full border border-[var(--line)] bg-white px-3 py-2 text-sm"
        />
      </section>

      <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[var(--text)]">Manajemen Portfolio</h2>
          <span className="text-xs text-[var(--muted)]">{portfolioList.length} item</span>
        </div>

        <form onSubmit={savePortfolio} className="grid gap-3 md:grid-cols-6">
          <input className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="Judul foto" value={portfolioForm.title} onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })} />
          <select className="border border-[var(--line)] px-3 py-2 text-sm" value={portfolioForm.category} onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}>
            {portfolioCategoryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <input className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="URL gambar (otomatis dari upload)" value={portfolioForm.imageUrl} onChange={(e) => setPortfolioForm({ ...portfolioForm, imageUrl: e.target.value })} />
          <input className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="Alt text" value={portfolioForm.alt} onChange={(e) => setPortfolioForm({ ...portfolioForm, alt: e.target.value })} />
          <input type="number" className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="Urutan" value={portfolioForm.order} onChange={(e) => setPortfolioForm({ ...portfolioForm, order: Number(e.target.value) })} />
          <button className="rounded-md bg-[var(--text)] px-3 py-2 text-sm font-semibold text-white">{portfolioEditId ? "Update" : "Tambah"}</button>
        </form>

        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <input
            type="file"
            accept="image/*"
            className="border border-[var(--line)] px-3 py-2 text-sm"
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
          <span className="text-xs text-[var(--muted)]">{uploadingImage ? "Mengunggah gambar..." : "Upload gambar ke Sanity"}</span>
        </div>

        {portfolioForm.imageUrl ? (
          <div className="mt-3 overflow-hidden rounded-md border border-[var(--line)] bg-white p-2">
            <Image src={portfolioForm.imageUrl} alt="Preview" width={960} height={320} className="h-40 w-full object-cover" />
          </div>
        ) : null}

        <div className="mt-4 space-y-2">
          {portfolioList.map((item) => (
            <div key={item._id} className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-[var(--line)] px-3 py-2 text-sm">
              <p className="text-[var(--text)]">{item.title} · {item.category}</p>
              <div className="space-x-3">
                <button
                  onClick={() => {
                    setPortfolioEditId(item._id);
                    setPortfolioForm({ title: item.title, category: item.category, imageUrl: item.imageUrl, alt: item.alt, order: item.order });
                  }}
                  className="font-medium text-[var(--text)]"
                >
                  Edit
                </button>
                <button onClick={() => deletePortfolio(item._id)} className="font-medium text-red-600">Hapus</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[var(--text)]">Manajemen Paket Harga</h2>
          <span className="text-xs text-[var(--muted)]">{pricingList.length} kategori</span>
        </div>

        <form onSubmit={savePricing} className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <input className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="Nama kategori" value={pricingForm.category} onChange={(e) => setPricingForm({ ...pricingForm, category: e.target.value })} />
            <input type="number" className="border border-[var(--line)] px-3 py-2 text-sm" placeholder="Urutan" value={pricingForm.order} onChange={(e) => setPricingForm({ ...pricingForm, order: Number(e.target.value) })} />
            <button className="rounded-md bg-[var(--text)] px-3 py-2 text-sm font-semibold text-white">{pricingEditId ? "Update Kategori" : "Tambah Kategori"}</button>
          </div>

          <div className="space-y-3">
            {pricingForm.items.map((item, itemIndex) => (
              <div key={`item-${itemIndex}`} className="rounded-lg border border-[var(--line)] bg-white p-3">
                <div className="grid gap-2 md:grid-cols-[1fr_220px_auto]">
                  <input
                    className="border border-[var(--line)] px-3 py-2 text-sm"
                    placeholder="Nama paket"
                    value={item.name}
                    onChange={(e) => setPricingItem(itemIndex, { name: e.target.value })}
                  />
                  <input
                    className="border border-[var(--line)] px-3 py-2 text-sm"
                    placeholder="Harga (contoh: Rp 150.000)"
                    value={item.price}
                    onChange={(e) => setPricingItem(itemIndex, { price: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setPricingForm((prev) => ({ ...prev, items: prev.items.filter((_, idx) => idx !== itemIndex) || [emptyPricingItem()] }))}
                    className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600"
                  >
                    Hapus paket
                  </button>
                </div>

                <div className="mt-3 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Detail paket</p>
                  {item.notes.map((note, noteIndex) => (
                    <div key={`note-${itemIndex}-${noteIndex}`} className="grid gap-2 md:grid-cols-[1fr_auto]">
                      <input
                        className="border border-[var(--line)] px-3 py-2 text-sm"
                        placeholder="Contoh: 10 edited photo"
                        value={note}
                        onChange={(e) => setPricingNote(itemIndex, noteIndex, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setPricingItem(itemIndex, { notes: item.notes.filter((_, idx) => idx !== noteIndex) || [""] })}
                        className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600"
                      >
                        Hapus detail
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => setPricingItem(itemIndex, { notes: [...item.notes, ""] })}
                    className="rounded-md border border-[var(--line)] px-3 py-2 text-sm"
                  >
                    + Tambah detail
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => setPricingForm((prev) => ({ ...prev, items: [...prev.items, emptyPricingItem()] }))}
              className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-sm"
            >
              + Tambah paket baru
            </button>
          </div>
        </form>

        <div className="mt-5 space-y-2">
          {pricingList.map((category) => (
            <div key={category._id} className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-[var(--line)] px-3 py-2 text-sm">
              <p className="text-[var(--text)]">{category.category} · {category.items?.length || 0} paket</p>
              <div className="space-x-3">
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
                  className="font-medium text-[var(--text)]"
                >
                  Edit
                </button>
                <button onClick={() => deletePricing(category._id)} className="font-medium text-red-600">Hapus</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

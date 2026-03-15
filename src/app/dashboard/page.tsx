"use client";

import Image from "next/image";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { portfolioCategories } from "@/data/site-data";

type PortfolioItem = { _id: string; title: string; category: string; imageUrl: string; alt: string; order: number };
type PricingItem = { name: string; price: string; notes: string[] };
type PricingCategory = { _id: string; category: string; order: number; items: PricingItem[] };

const portfolioCategoryOptions = portfolioCategories.filter((c) => c !== "All");
const emptyPortfolioForm = { title: "", category: "Special Session", imageUrl: "", alt: "", order: 0 };
const emptyPricingItem = (): PricingItem => ({ name: "", price: "", notes: [""] });
const emptyPricingForm = { category: "", order: 0, items: [emptyPricingItem()] };
const inputCls = "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function DashboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"portfolio" | "pricing">("portfolio");

  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]);
  const [pricingList, setPricingList] = useState<PricingCategory[]>([]);

  const [portfolioSearch, setPortfolioSearch] = useState("");
  const [pricingSearch, setPricingSearch] = useState("");

  const [portfolioEditId, setPortfolioEditId] = useState<string | null>(null);
  const [portfolioForm, setPortfolioForm] = useState(emptyPortfolioForm);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [pricingEditId, setPricingEditId] = useState<string | null>(null);
  const [pricingForm, setPricingForm] = useState(emptyPricingForm);

  const [savingPortfolio, setSavingPortfolio] = useState(false);
  const [savingPricing, setSavingPricing] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const filteredPortfolio = useMemo(
    () =>
      portfolioList.filter((item) => {
        const q = portfolioSearch.toLowerCase();
        return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      }),
    [portfolioList, portfolioSearch],
  );

  const filteredPricing = useMemo(
    () =>
      pricingList.filter((item) => {
        const q = pricingSearch.toLowerCase();
        return item.category.toLowerCase().includes(q);
      }),
    [pricingList, pricingSearch],
  );

  const loadData = useCallback(async () => {
    const [portfolioRes, pricingRes] = await Promise.all([fetch("/api/cms/portfolio"), fetch("/api/cms/pricing")]);

    if (portfolioRes.status === 401 || pricingRes.status === 401) {
      router.replace("/dashboard/login");
      return;
    }

    setPortfolioList(await portfolioRes.json());
    setPricingList(await pricingRes.json());
  }, [router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function request(url: string, method: "POST" | "PATCH" | "DELETE", body?: unknown) {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      if (res.status === 401) {
        router.replace("/dashboard/login");
      }
      throw new Error("Request gagal.");
    }

    return res.json();
  }

  async function logout() {
    await fetch("/api/dashboard/logout", { method: "POST" });
    router.replace("/dashboard/login");
  }

  async function seedAllToSanity() {
    try {
      setSeeding(true);
      await request("/api/cms/seed", "POST");
      await loadData();
      alert("Seed berhasil ke Sanity.");
    } catch {
      alert("Seed gagal.");
    } finally {
      setSeeding(false);
    }
  }

  async function savePortfolio(e: FormEvent) {
    e.preventDefault();
    try {
      setSavingPortfolio(true);
      if (portfolioEditId) {
        await request(`/api/cms/portfolio/${portfolioEditId}`, "PATCH", portfolioForm);
      } else {
        await request("/api/cms/portfolio", "POST", portfolioForm);
      }
      setPortfolioEditId(null);
      setPortfolioForm(emptyPortfolioForm);
      await loadData();
    } finally {
      setSavingPortfolio(false);
    }
  }

  async function uploadPortfolioImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/cms/upload-image", {
      method: "POST",
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

    try {
      setSavingPricing(true);
      if (pricingEditId) {
        await request(`/api/cms/pricing/${pricingEditId}`, "PATCH", payload);
      } else {
        await request("/api/cms/pricing", "POST", payload);
      }
      setPricingEditId(null);
      setPricingForm(emptyPricingForm);
      await loadData();
    } finally {
      setSavingPricing(false);
    }
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
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <header className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Lightstudio Dashboard</p>
              <h1 className="mt-1 text-2xl font-semibold text-slate-900">Content Management</h1>
              <p className="mt-1 text-sm text-slate-500">Kelola portfolio dan paket harga dengan form detail yang lebih user-friendly.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={seedAllToSanity} className="h-10 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">
                {seeding ? "Seeding..." : "Seed Data"}
              </button>
              <button onClick={logout} className="h-10 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700">
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="mb-4 flex gap-2">
          <button onClick={() => setTab("portfolio")} className={`h-10 rounded-md px-4 text-sm font-semibold ${tab === "portfolio" ? "bg-slate-900 text-white" : "bg-white border border-slate-300 text-slate-700"}`}>
            Portfolio
          </button>
          <button onClick={() => setTab("pricing")} className={`h-10 rounded-md px-4 text-sm font-semibold ${tab === "pricing" ? "bg-slate-900 text-white" : "bg-white border border-slate-300 text-slate-700"}`}>
            Paket Harga
          </button>
        </div>

        {tab === "portfolio" ? (
          <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <form onSubmit={savePortfolio} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Form Portfolio</h2>
              <p className="mt-1 text-sm text-slate-500">Isi detail lengkap agar galeri tampil rapi di landing page.</p>

              <div className="mt-4 grid gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Judul foto</label>
                  <input className={inputCls} value={portfolioForm.title} onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })} required />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Kategori</label>
                    <select className={inputCls} value={portfolioForm.category} onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}>
                      {portfolioCategoryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Urutan tampil</label>
                    <input type="number" className={inputCls} value={portfolioForm.order} onChange={(e) => setPortfolioForm({ ...portfolioForm, order: Number(e.target.value) })} />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">URL gambar</label>
                  <input className={inputCls} value={portfolioForm.imageUrl} onChange={(e) => setPortfolioForm({ ...portfolioForm, imageUrl: e.target.value })} required />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Alt text</label>
                  <input className={inputCls} value={portfolioForm.alt} onChange={(e) => setPortfolioForm({ ...portfolioForm, alt: e.target.value })} required />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Upload gambar ke Sanity</label>
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
                      } catch {
                        alert("Upload gagal");
                      } finally {
                        setUploadingImage(false);
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                  <p className="mt-1 text-xs text-slate-500">{uploadingImage ? "Mengunggah gambar..." : "Pilih file untuk otomatis isi URL gambar"}</p>
                </div>

                <button className="h-10 rounded-md bg-slate-900 px-4 text-sm font-semibold text-white" disabled={savingPortfolio}>
                  {savingPortfolio ? "Menyimpan..." : portfolioEditId ? "Update Portfolio" : "Tambah Portfolio"}
                </button>
              </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Daftar Portfolio</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{portfolioList.length} item</span>
              </div>

              <input className={`${inputCls} mt-3`} placeholder="Cari judul atau kategori..." value={portfolioSearch} onChange={(e) => setPortfolioSearch(e.target.value)} />

              {portfolioForm.imageUrl ? (
                <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 p-2">
                  <Image src={portfolioForm.imageUrl} alt="Preview" width={960} height={320} className="h-40 w-full rounded object-cover" />
                </div>
              ) : null}

              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                {filteredPortfolio.map((item) => (
                  <div key={item._id} className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 text-sm last:border-b-0">
                    <div>
                      <p className="font-medium text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.category}</p>
                    </div>
                    <div className="space-x-4">
                      <button onClick={() => { setPortfolioEditId(item._id); setPortfolioForm({ title: item.title, category: item.category, imageUrl: item.imageUrl, alt: item.alt, order: item.order }); }} className="font-medium text-blue-600">Edit</button>
                      <button onClick={() => deletePortfolio(item._id)} className="font-medium text-red-600">Hapus</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <form onSubmit={savePricing} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Form Kategori & Paket Harga</h2>
              <p className="mt-1 text-sm text-slate-500">Isi kategori, lalu detail paket di bawahnya.</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Nama kategori</label>
                  <input className={inputCls} value={pricingForm.category} onChange={(e) => setPricingForm({ ...pricingForm, category: e.target.value })} required />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Urutan tampil</label>
                  <input type="number" className={inputCls} value={pricingForm.order} onChange={(e) => setPricingForm({ ...pricingForm, order: Number(e.target.value) })} />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {pricingForm.items.map((item, itemIndex) => (
                  <div key={`item-${itemIndex}`} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <div className="grid gap-2 sm:grid-cols-[1fr_220px_auto]">
                      <input className={inputCls} placeholder="Nama paket" value={item.name} onChange={(e) => setPricingItem(itemIndex, { name: e.target.value })} required />
                      <input className={inputCls} placeholder="Harga" value={item.price} onChange={(e) => setPricingItem(itemIndex, { price: e.target.value })} required />
                      <button type="button" onClick={() => setPricingForm((prev) => ({ ...prev, items: prev.items.filter((_, idx) => idx !== itemIndex) || [emptyPricingItem()] }))} className="h-10 rounded-md border border-red-200 bg-white px-3 text-sm text-red-600">Hapus paket</button>
                    </div>

                    <div className="mt-3 space-y-2">
                      {item.notes.map((note, noteIndex) => (
                        <div key={`note-${itemIndex}-${noteIndex}`} className="grid gap-2 sm:grid-cols-[1fr_auto]">
                          <input className={inputCls} placeholder="Detail paket" value={note} onChange={(e) => setPricingNote(itemIndex, noteIndex, e.target.value)} />
                          <button type="button" onClick={() => setPricingItem(itemIndex, { notes: item.notes.filter((_, idx) => idx !== noteIndex) || [""] })} className="h-10 rounded-md border border-red-200 bg-white px-3 text-sm text-red-600">Hapus detail</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => setPricingItem(itemIndex, { notes: [...item.notes, ""] })} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">+ Tambah detail</button>
                    </div>
                  </div>
                ))}

                <button type="button" onClick={() => setPricingForm((prev) => ({ ...prev, items: [...prev.items, emptyPricingItem()] }))} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">+ Tambah paket baru</button>
                <button className="h-10 w-full rounded-md bg-slate-900 px-4 text-sm font-semibold text-white" disabled={savingPricing}>
                  {savingPricing ? "Menyimpan..." : pricingEditId ? "Update Kategori" : "Tambah Kategori"}
                </button>
              </div>
            </form>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Daftar Kategori Harga</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{pricingList.length} kategori</span>
              </div>

              <input className={`${inputCls} mt-3`} placeholder="Cari kategori..." value={pricingSearch} onChange={(e) => setPricingSearch(e.target.value)} />

              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                {filteredPricing.map((category) => (
                  <div key={category._id} className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 text-sm last:border-b-0">
                    <div>
                      <p className="font-medium text-slate-800">{category.category}</p>
                      <p className="text-xs text-slate-500">{category.items?.length || 0} paket</p>
                    </div>
                    <div className="space-x-4">
                      <button onClick={() => {
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
                      }} className="font-medium text-blue-600">Edit</button>
                      <button onClick={() => deletePricing(category._id)} className="font-medium text-red-600">Hapus</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
